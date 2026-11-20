import fs from 'node:fs';
import { buildModel } from '../src/model/estimate.js';
import { synthRecording } from '../src/model/synth.js';
const raw = JSON.parse(fs.readFileSync('data/sessions.json'));
const m = buildModel({ sessions: raw, recording: synthRecording(raw, { seed: 7 }) });
console.log(m.topics.map((t) => `${t.kind[0]} ${t.short} (${t.potential.toFixed(1)})`).join('\n'));
for (const s of m.sessions) console.log(new Date(s.start).toISOString().slice(11, 16), s.roomId.padEnd(10), s.pop.score.toFixed(2), s.peakFill.toFixed(2), s.title.slice(0, 40), s.topics.map((t) => t.id.slice(0, 12)).join(','));
const k = Math.round((m.t0 + 2.2 * 3600000 - m.t0) / m.step);
console.log(m.locIds.map((id, i) => id + ':' + m.counts[i][k].toFixed(0)).join(' '));
