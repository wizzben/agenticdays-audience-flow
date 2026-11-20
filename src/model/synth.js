// Synthetic recording generator: same shape as recorder/record.py output. Used by tests and ?demo.
import { ROOMS, WINDOW_START_HOUR } from './config.js';
import { normalizeSessions, conferenceWindow, mulberry32 } from './estimate.js';

const LABEL = { open: 'Open', filling: 'Few seats left', full: 'No seats left', running: 'Started' };

/**
 * @param {any} rawSessions sessions.json content
 * @param {{seed?:number, from?:number, to?:number, gaps?:boolean, popularity?:Object<string,number>}} opts
 * @returns {Array} samples [{t, rooms:{id:{level,label,target}}}]
 */
export function synthRecording(rawSessions, opts = {}) {
  const win = conferenceWindow(rawSessions);
  const from = opts.from ?? win.t0 + 20 * 60000;
  const to = opts.to ?? win.t0 + 4.75 * 3600000;
  const rng = mulberry32(opts.seed ?? 7);
  const sessions = normalizeSessions(rawSessions).filter((s) => s.start >= win.t0 && s.roomId);
  const pop = {};
  for (const s of sessions) {
    const cap = ROOMS.find((r) => r.id === s.roomId).cap;
    let p = rng();
    if (opts.popularity && opts.popularity[s.id] != null) p = opts.popularity[s.id];
    else if (cap > 100) p = 0.15 + p * 0.65; // big room rarely hits full
    pop[s.id] = p;
  }
  const thresholds = (p) => {
    if (p >= 0.85) return { fill: -26, full: -14 };
    if (p >= 0.7) return { fill: -14, full: -3 };
    if (p >= 0.5) return { fill: -8, full: null };
    if (p >= 0.3) return { fill: -3, full: null };
    return { fill: null, full: null };
  };
  const out = [];
  const outage = opts.gaps ? [win.t0 + 2.6 * 3600000, win.t0 + 2.6 * 3600000 + 12 * 60000] : null;
  for (let t = from; t <= to; t += 30000) {
    if (outage && t >= outage[0] && t < outage[1]) continue;
    if (opts.gaps && rng() < 0.05) continue;
    const rooms = {};
    for (const r of ROOMS) {
      const list = sessions.filter((s) => s.roomId === r.id);
      const tgt = list.find((s) => s.end > t) || list[list.length - 1];
      if (!tgt) continue;
      let level = 'open';
      if (t >= tgt.end) level = 'open';
      else if (t >= tgt.start) level = 'running';
      else {
        const th = thresholds(pop[tgt.id]);
        const m = (tgt.start - t) / 60000;
        if (th.full != null && m <= -th.full) level = 'full';
        else if (th.fill != null && m <= -th.fill) level = 'filling';
      }
      rooms[r.id] = { level, label: LABEL[level], target: tgt.id };
    }
    out.push({ t, rooms });
  }
  return out;
}

export function toJsonl(samples) {
  return samples.map((s) => JSON.stringify(s)).join('\n') + '\n';
}

export { WINDOW_START_HOUR };
