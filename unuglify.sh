#!/bin/bash
# unuglify.sh — macht aus den uglifizierten Originalen (git 24f9bbb) wieder
# lesbaren Code. Komplett deterministisch und beliebig oft wiederholbar:
# es wird immer vom Ugly-Original aus git neu aufgebaut.
#
# Warum nicht mehr das alte sed-Verfahren:
#  1. sed ersetzte auch in HTML-Strings ("<A HREF>" -> "<artikel HREF>",
#     "\n" -> "\mwst", "z.B." -> "z.features.") und zerstörte beim Speichern
#     die Latin-1-Umlaute.
#  2. *.htm-Dateien (Inline-JS, onLoad, javascript:-Links) wurden gar nicht
#     behandelt -> "Xea is not defined".
#  3. Die Funktions-Zeilen in ugly.sql stammen aus einem anderen Uglify-Lauf
#     und passen nicht zu diesem Code-Stand (Xcj ist der errorHandler der
#     Engine, nicht a_border). Die korrekten, aus dem Code rekonstruierten
#     Funktionsnamen stehen in ugly-extra.map; aus ugly.sql werden nur die
#     verifizierten Key-/Variablen-Zeilen übernommen.
set -euo pipefail
cd "$(dirname "$0")"

UGLY_COMMIT=24f9bbb   # "initial commit, files still uglyfied" (Pfad dort: js-demo/)
JS_FILES="shop/js-eng.js shop/js-bes.js shop/js-db.js shop/js-sys.js shop/js-adm.js admin/js-admin.js"
HTM_FILES="shop/jswbshop.htm shop/html.htm shop/admin.htm shop/fr.htm shop/jsff.htm \
shop/jskond.htm shop/lfl.htm shop/ppt.htm shop/s.htm shop/sl2000.htm shop/language.htm"

echo "1/5  Ugly-Originale aus git ($UGLY_COMMIT) wiederherstellen ..."
for f in $JS_FILES $HTM_FILES; do
    git show "$UGLY_COMMIT:js-demo/$f" > "js-webShop/$f"
done

echo "2/5  Übersetzungstabelle bauen (ugly.sql: nur Keys/Variablen + ugly-extra.map) ..."
# ugly.sql-Tupel: ('real','ugly','kommentar'). Funktions-Zeilen überspringen
# (falsche Zuordnung, siehe oben), ebenso das doppeldeutige 'xxx'.
# Klasse: einbuchstabige Arrays und X-Namen = both (Code + Strings), Rest = key.
grep -o "('[^']*','[^']*','[^']*')" ugly.sql | awk -F"'" '
    $6 ~ /function/ { next }
    $4 == "xxx"     { next }
    $2 == "blind"   { next }  # Xda ist in diesem Stand e_print_right_body, blind ist Xdc
    {
        cls = ($4 ~ /^[A-Z]$/ || $4 ~ /^X/) ? "both" : "key"
        print $4, $2, cls
    }' > merged.map.tmp
# Nur Einträge behalten, deren Ugly-Name im Code überhaupt vorkommt (vermeidet
# Kollisionen mit Alt-Zeilen wie bestellt=Xmd aus der fremden Tabelle).
SRC_ALL=$(mktemp)
for f in $JS_FILES $HTM_FILES; do cat "js-webShop/$f"; done > "$SRC_ALL"
while read -r ugly real cls; do
    grep -qF "$ugly" "$SRC_ALL" && echo "$ugly $real $cls"
done < merged.map.tmp > merged.map
rm -f merged.map.tmp "$SRC_ALL"
grep -v '^#' ugly-extra.map | grep -v '^[[:space:]]*$' >> merged.map
echo "    $(wc -l < merged.map) Ersetzungsregeln"

echo "3/5  JS-Dateien token-bewusst übersetzen ..."
node tools/deuglify.js merged.map $(for f in $JS_FILES; do echo "js-webShop/$f"; done)

echo "4/5  Inline-JS in den HTML-Dateien übersetzen ..."
node tools/deuglify-htm.js merged.map $(for f in $HTM_FILES; do echo "js-webShop/$f"; done)

echo "5/5  Syntax prüfen, formatieren (prettier, falls vorhanden) ..."
for f in $JS_FILES; do
    node --check "js-webShop/$f"
done
if command -v npx >/dev/null && npx --no-install prettier --version >/dev/null 2>&1; then
    for f in $JS_FILES; do
        p="js-webShop/$f"
        # Latin-1-Sandwich: prettier braucht UTF-8, die Dateien bleiben Latin-1.
        iconv -f latin1 -t utf8 "$p" > "$p.u8"
        if npx --no-install prettier --parser babel "$p.u8" > "$p.fmt" 2>/dev/null; then
            iconv -f utf8 -t latin1 "$p.fmt" > "$p"
        else
            echo "    WARN: prettier scheitert an $p, bleibt unformatiert"
        fi
        rm -f "$p.u8" "$p.fmt"
        node --check "js-webShop/$f"
    done
else
    echo "    prettier nicht verfügbar, Dateien bleiben unformatiert"
fi
rm -f merged.map

echo "Fertig. Kontrolle: grep -rnE '\\bX[a-z]{2}' js-webShop --include='*.js' --include='*.htm' sollte leer sein."
