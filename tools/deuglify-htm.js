#!/usr/bin/env node
// deuglify-htm.js — ersetzt in HTML-Dateien nur die eindeutigen Funktions-/
// Variablennamen (Klasse fn, ab 3 Zeichen) als ganze Wörter. Das trifft die
// Inline-JS-Stellen (onLoad, javascript:-Links, <SCRIPT>-Blöcke), ohne
// Fließtext oder language-Konstanten anzufassen.
'use strict';
const fs = require('fs');
const [mapfile, ...files] = process.argv.slice(2);
if (!mapfile || files.length === 0) {
  console.error('usage: deuglify-htm.js <mapfile> <file> [...]');
  process.exit(1);
}
const rules = [];
for (const line of fs.readFileSync(mapfile, 'latin1').split('\n')) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  const [ugly, real, cls] = t.split(/\s+/);
  if (cls !== 'fn' || ugly.length < 3 || !/^[A-Za-z_][A-Za-z0-9_]*$/.test(ugly)) continue;
  rules.push({ ugly, real });
}
rules.sort((a, b) => b.ugly.length - a.ugly.length);
for (const f of files) {
  let src = fs.readFileSync(f, 'latin1');
  for (const r of rules) {
    src = src.replace(new RegExp(`\\b${r.ugly}\\b`, 'g'), r.real);
  }
  fs.writeFileSync(f, src, 'latin1');
  console.log(`deuglify-htm: ${f}`);
}
