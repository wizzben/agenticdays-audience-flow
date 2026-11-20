// Prints the level transitions of a recording (default: the live raw URL). node scripts/show-recording.mjs [file]
import fs from 'node:fs';
import { RECORDING_URL } from '../src/model/config.js';
const text = process.argv[2] ? fs.readFileSync(process.argv[2], 'utf8') : await (await fetch(RECORDING_URL + '?cb=' + Date.now())).text();
const L = text.trim().split('\n').map((l) => JSON.parse(l));
const prev = {};
for (const s of L) for (const [r, v] of Object.entries(s.rooms)) {
  const k = v.level + '|' + v.target;
  if (prev[r] !== k) { console.log(new Date(s.t).toISOString().slice(11, 19) + 'Z', r.padEnd(10), v.level.padEnd(8), v.target); prev[r] = k; }
}
console.log(L.length, 'samples', new Date(L[0].t).toISOString(), '->', new Date(L[L.length - 1].t).toISOString());
