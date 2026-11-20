// node scripts/inspect-model.mjs [recording.jsonl]  (default: synthetic)
import fs from 'node:fs';
import { buildModel } from '../src/model/estimate.js';
import { synthRecording } from '../src/model/synth.js';
import { parseRecording } from '../src/model/recording.js';
const raw = JSON.parse(fs.readFileSync('data/sessions.json'));
const rec = process.argv[2] ? parseRecording(fs.readFileSync(process.argv[2], 'utf8')) : synthRecording(raw, { seed: 7 });
const m = buildModel({ sessions: raw, recording: rec });
console.log(m.topics.map((t) => `${t.kind[0]} ${t.short} (${t.potential.toFixed(1)})`).join(', '));
const hm = (t) => new Date(t + 3600000).toISOString().slice(11, 16);
for (const s of m.sessions) console.log(hm(s.start), s.roomId.padEnd(10), 'pop', s.pop.score.toFixed(2), 'peak', s.peakFill.toFixed(2), s.hasData ? 'data' : 'proj', s.title.slice(0, 40));
for (const h of [12.5, 13.2, 13.5]) {
  const k = Math.round((h - 12) * 120);
  console.log(hm(m.t0 + k * m.step), m.locIds.map((id, i) => id + ':' + m.counts[i][k].toFixed(0)).join(' '), 'overflow', m.overflow[k].toFixed(0));
}
