// Constants and assumptions of the estimation model. Everything tunable lives here.

export const TZ = 'Europe/Zurich';

/** Total number of attendees (figure given by the organisers' side, not derived from the recording). */
export const CROWD_TOTAL = 500;
/** Fraction of the crowd that is always outside the session rooms (hubs, corridors, coffee). */
export const HUB_MIN_FRACTION = 0.06;

/** Sampling grid of all derived series. */
export const STEP_MS = 30000;
/** Window of the movie: 12:00 - 17:00 local time on the conference day. */
export const WINDOW_START_HOUR = 12;
export const WINDOW_HOURS = 5;

export const RECORDING_URL = 'https://raw.githubusercontent.com/wizzben/agenticdays-audience-flow/data/recording.jsonl';

/** Session rooms. `cap` is the theatre-style capacity from the Zurich Marriott event brochure. */
export const ROOMS = [
  { id: 'millennium', name: 'Millennium', short: 'M', cap: 650, floor: 'main2' },
  { id: 'studio4', name: 'Studio 4', short: 'S4', cap: 120, floor: 'n4' },
  { id: 'studio6', name: 'Studio 6', short: 'S6', cap: 60, floor: 'n4' },
  { id: 'studio3', name: 'Studio 3', short: 'S3', cap: 100, floor: 'n0' },
  { id: 'studio1', name: 'Studio 1', short: 'S1', cap: 60, floor: 'main1' },
];

/** Hubs: where people are when they are not in a session. `w` = share of the non-session crowd. */
export const HUBS = [
  { id: 'century', name: 'Century', short: 'C', w: 0.3, floor: 'main2' },
  { id: 'hub2', name: 'Hub 2', short: 'H2', w: 0.4, floor: 'main2' },
  { id: 'hub4', name: 'Hub 4', short: 'H4', w: 0.3, floor: 'n4' },
];

/** Order of locations used for the people assignment (limits long jumps between buckets). */
export const LOC_ORDER = ['studio1', 'hub2', 'millennium', 'century', 'studio3', 'hub4', 'studio6', 'studio4'];

/** Occupancy band (fraction of capacity) of every level. Continuous at the borders. */
export const BANDS = {
  open: [0.08, 0.7],
  filling: [0.7, 0.95],
  full: [0.95, 1.0],
};
/** Time constant (ms) with which the occupancy saturates inside a band when no end of the dwell is known. */
export const TAU = { open: 12 * 60000, filling: 6 * 60000, full: 3 * 60000 };

/** Largest gap between two samples that is still interpolated as one dwell. */
export const GAP_MS = 5 * 60000;
/** A sample covers +-this time around itself as "recorded". */
export const COVER_MS = 150000;
/** Time for a room to empty after the end of its session. */
export const EXIT_MS = 4 * 60000;
/** How long before the start the doors open in the projection. */
export const ARRIVAL_MS = 18 * 60000;

/** Popularity score weights. */
export const POP_W = { fill: 0.55, speed: 0.25, pressure: 0.2 };
/** Minutes before the start by which a room must be filling to get the full speed score. */
export const SPEED_FULL_MS = 20 * 60000;

/** Prior peak fill (fraction of capacity) for sessions without recorded data. */
export function priorPeak(session, cap) {
  const f = (session.format || '').toLowerCase();
  if (cap > 100) return f.includes('lightning') ? 0.35 : 0.5;
  if (f.includes('hands')) return 0.85;
  if (f.includes('panel')) return 0.8;
  return 0.68;
}

export const LEVELS = ['open', 'filling', 'full', 'running'];
