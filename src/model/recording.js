// Parsing and sanitising of the recording (JSONL), room-name matching and level normalisation.
import { ROOMS, HUBS } from './config.js';

/** Match a room name loosely ("Studio 3 AB", "studio3", "Hub 2"...) to a canonical room id, or null. */
export function matchRoom(name) {
  if (name == null) return null;
  const s = String(name).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  if (!s) return null;
  if (/\bmillennium\b/.test(s)) return 'millennium';
  if (/\bcentury\b/.test(s)) return 'century';
  let m = /\bstudio\s*([1-9])/.exec(s) || /\bs([1-9])\b/.exec(s) || /^studio([1-9])/.exec(s);
  if (m) {
    const id = 'studio' + m[1];
    return ROOMS.some((r) => r.id === id) ? id : null;
  }
  m = /\bhub\s*([1-9])/.exec(s) || /^hub([1-9])/.exec(s);
  if (m) {
    const id = 'hub' + m[1];
    return HUBS.some((h) => h.id === id) ? id : null;
  }
  return null;
}

const LABELS = { open: 'open', 'few seats left': 'filling', 'no seats left': 'full', started: 'running' };
/** Normalise a level (or label) to open|filling|full|running, or null when unknown. */
export function normalizeLevel(level, label) {
  const a = typeof level === 'string' ? level.trim().toLowerCase() : '';
  if (a === 'open' || a === 'filling' || a === 'full' || a === 'running') return a;
  const b = typeof label === 'string' ? label.trim().toLowerCase() : '';
  return LABELS[b] || null;
}

/**
 * Parse a recording: JSONL text, or an array of objects. Garbled lines are skipped.
 * Result: samples sorted by time, unique per timestamp, each {t, rooms:{roomId:{level|null, target|null}}}.
 */
export function parseRecording(input) {
  const objs = [];
  if (typeof input === 'string') {
    for (const line of input.split('\n')) {
      const l = line.trim();
      if (!l) continue;
      try { objs.push(JSON.parse(l)); } catch (e) { /* garbled line */ }
    }
  } else if (Array.isArray(input)) {
    objs.push(...input);
  }
  const byT = new Map();
  for (const o of objs) {
    if (!o || typeof o !== 'object') continue;
    const t = Number(o.t);
    if (!Number.isFinite(t) || t < 1e12 || t > 4e12 || !o.rooms || typeof o.rooms !== 'object') continue;
    const rooms = {};
    for (const [key, v] of Object.entries(o.rooms)) {
      const id = matchRoom(key);
      if (!id || !v || typeof v !== 'object') continue;
      rooms[id] = {
        level: normalizeLevel(v.level, v.label),
        target: v.target != null && v.target !== '' ? String(v.target) : null,
      };
    }
    byT.set(t, { t, rooms });
  }
  return [...byT.values()].sort((a, b) => a.t - b.t);
}

/** Merge two sample arrays (later arrays win on equal timestamps). */
export function mergeSamples(...lists) {
  const byT = new Map();
  for (const l of lists) for (const s of l || []) byT.set(s.t, s);
  return [...byT.values()].sort((a, b) => a.t - b.t);
}
