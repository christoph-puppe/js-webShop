#!/usr/bin/env node
// deuglify.js — ersetzt Ugly-Namen token-bewusst (Code vs. String-Literale vs.
// Kommentare), statt blind mit sed über die ganze Datei zu gehen. Das vermeidet
// die Schäden des ersten Laufs: <A HREF> -> <artikel HREF>, "\n" -> "\mwst",
// "z.B." -> "z.features." usw.
//
// Aufruf: node deuglify.js <mapfile> <datei> [<datei> ...]
// Mapfile-Zeilen: "<ugly> <real> <klasse>"  klasse: fn|ident|key|both
//   fn    Funktion/Variable: Code-Identifier + in Strings (quoted, bare ab 4 Zeichen)
//   ident nur Code-Identifier + "X[" in Strings (globale Arrays wie I, D)
//   key   nur in Strings: ganzer String, 'quoted', [bracket]
//   both  ident + key (einbuchstabige Arrays A/Q/B/C, Xm*-Variablen)
// Dateien werden als latin1 gelesen/geschrieben (Originalkodierung bleibt erhalten).
'use strict';
const fs = require('fs');

const [mapfile, ...files] = process.argv.slice(2);
if (!mapfile || files.length === 0) {
  console.error('usage: deuglify.js <mapfile> <file> [...]');
  process.exit(1);
}

const entries = [];
for (const line of fs.readFileSync(mapfile, 'latin1').split('\n')) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  const [ugly, real, cls] = t.split(/\s+/);
  if (!ugly || !real || !cls) { console.error(`map: kaputte Zeile: ${t}`); process.exit(1); }
  entries.push({ ugly, real, cls });
}
// Längste zuerst, damit zusammengesetzte Namen vor ihren Präfixen greifen.
entries.sort((a, b) => b.ugly.length - a.ugly.length);

// Kollisionsprüfung: ein realer Name darf nur einmal vergeben sein.
const seen = new Map();
for (const e of entries) {
  if (seen.has(e.real) && seen.get(e.real) !== e.ugly) {
    console.error(`map: realer Name doppelt vergeben: ${e.real} (${seen.get(e.real)} und ${e.ugly})`);
    process.exit(1);
  }
  seen.set(e.real, e.ugly);
}

const identMap = new Map(); // exakter Identifier -> real
const singleArr = new Map(); // einbuchstabige Arrays fuer "X[" in Strings
for (const e of entries) {
  if (e.cls === 'fn' || e.cls === 'ident' || e.cls === 'both') identMap.set(e.ugly, e.real);
  if ((e.cls === 'ident' || e.cls === 'both') && /^[A-Za-z]$/.test(e.ugly)) singleArr.set(e.ugly, e.real);
}
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\\-]/g, '\\$&');

function fixString(content) {
  // 1. ganzer String-Inhalt ist ein Ugly-Name (Hash-Keys, Zustaende wie 'aq')
  for (const e of entries) {
    if (e.cls === 'ident') continue;
    if (content === e.ugly) return e.real;
  }
  // 2. gequotete Vorkommen im String ("...['aq']..." in generiertem Code)
  for (const e of entries) {
    if (e.cls === 'ident') continue;
    content = content.replace(new RegExp(`(['"])${esc(e.ugly)}\\1`, 'g'), `$1${e.real}$1`);
  }
  // 3. nackte Vorkommen ab 4 Zeichen (Funktionsaufrufe in generiertem Code:
  //    "parent.Xcv_left();", name=nav_aq, eval-Strings)
  for (const e of entries) {
    if (e.cls === 'ident') continue;
    const min = /^X/.test(e.ugly) ? 3 : 4;
    if (e.ugly.length < min || /[^A-Za-z0-9_]/.test(e.ugly)) continue;
    content = content.replace(new RegExp(`\\b${esc(e.ugly)}\\b`, 'g'), e.real);
  }
  // 4. einbuchstabige globale Arrays direkt vor "[" (eval-Strings: "D["+Z+"]")
  for (const [u, r] of singleArr) {
    content = content.replace(new RegExp(`\\b${esc(u)}\\[`, 'g'), `${r}[`);
  }
  return content;
}

const identRe = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

function transform(src) {
  let out = '';
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    if (c === '/' && src[i + 1] === '/') {
      let j = src.indexOf('\n', i);
      if (j < 0) j = n;
      out += src.slice(i, j); i = j; continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      let j = src.indexOf('*/', i + 2);
      j = j < 0 ? n : j + 2;
      out += src.slice(i, j); i = j; continue;
    }
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < n && src[j] !== c) {
        if (src[j] === '\\') j++;
        j++;
      }
      const content = src.slice(i + 1, j);
      out += c + fixString(content) + (j < n ? c : '');
      i = j + 1; continue;
    }
    if (/[A-Za-z_$]/.test(c)) {
      let j = i;
      while (j < n && /[A-Za-z0-9_$]/.test(src[j])) j++;
      const tok = src.slice(i, j);
      out += identMap.has(tok) && identRe.test(tok) ? identMap.get(tok) : tok;
      i = j; continue;
    }
    out += c; i++;
  }
  return out;
}

for (const f of files) {
  const src = fs.readFileSync(f, 'latin1');
  const res = transform(src);
  fs.writeFileSync(f, res, 'latin1');
  console.log(`deuglify: ${f} (${src.length} -> ${res.length} bytes)`);
}
