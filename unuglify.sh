#!/bin/bash

echo "Du generierst das Übersetzungs-Skript..."

# 1. Isoliere alle Tupel, extrahiere die Namen und baue ein sed-Skript mit Wortgrenzen (\b)
grep -o "('[^']*','[^']*','[^']*')" ugly.sql | awk -F"'" '{
    real_name = $2
    ugly_name = $4
    print "s/\\b" ugly_name "\\b/" real_name "/g"
}' > regex_rules.sed

# exit

echo "Du wendest die Regeln auf alle JS-Dateien an..."

# 2. Jage die gesammelten Regeln in einem Rutsch über alle Dateien
find js-demo/ -type f -name "*.js" -exec sed -i -f regex_rules.sed {} +

# 3. Räume auf
rm regex_rules.sed

echo "Du hast die Variablen erfolgreich übersetzt."