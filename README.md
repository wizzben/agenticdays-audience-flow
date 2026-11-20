# Agentic Days audience flow

An animated 3D view of how the audience of **Agentic Engineering Days Zurich 2026** (20 Nov 2026, Zurich Marriott)
moved between rooms during the afternoon (12:00 – 17:00), with soft topic clouds floating above the venue that grow
and shrink with topic popularity. The full brief is in [SPEC.md](SPEC.md).

**Attendance is not measured anywhere.** The only measured signal is each room's fill level (`open` / `filling` /
`full` / `running`), polled every 30 s by a recorder. Headcounts and movements are *estimates* derived from those
levels and the room capacities. Everything the recording does not cover is a clearly labelled *projection*.

## Open it

* **Locally:** double-click `index.html` (works from `file://`, no server, no build step needed).
* **GitHub Pages:** enable *Settings → Pages → Deploy from a branch → `main` / root*; the app is then served as is.
* The raw recording is fetched from
  `https://raw.githubusercontent.com/wizzben/agenticdays-audience-flow/data/recording.jsonl` every 60 s while the page
  is open (the only runtime network request). If that fails (for example while the repository is private, HTTP 404)
  the app silently keeps using the embedded snapshot in `data/recording-embedded.jsonl`.

URL parameters (all optional): `?demo` synthetic full afternoon · `?demo=live` synthetic data up to 14:30 so the
projection is visible · `?demo&gaps` synthetic data with gaps and an outage · `?t=14:25` start time ·
`?play=1|0` · `?speed=10` (sim minutes per second) · `?live=0` do not auto-follow real time · `?now=13:10` pretend it
is 13:10 · `?mode=now` topic clouds show people in rooms now · `?room=studio4` preselect a room · `?nofetch` never
fetch · `?legend` open the legend.

## What you see

* **Venue** modelled from `reference/venue-map-1.svg`: main building (Millennium, Hub 2, Century on the 2nd floor,
  Studio 1 on the 1st floor) and north building (Studio 4, Studio 6, Hub 4 on floor 4, Studio 3 on the ground floor),
  joined by the skywalk and an escalator. Floors are semi-transparent so every room is visible at once.
* **People** are instanced figures. They sit in rooms, mingle in the hubs and walk along the real routes (corridors,
  escalator, skywalk, lifts) when a session starts or ends. A room's *liquid level*, its fill bar and its glow show
  how full it is, in the level colours.
* **Topic clouds** above the venue. Size = estimated audience-minutes attributed to the topic so far (or, with the
  *Topics* toggle / `T`, the people in matching sessions right now). Hover or tap one to light up the rooms and the
  timeline blocks of the sessions that feed it.
* **Playback**: play/pause, scrubbable timeline with the five rooms' sessions as a mini schedule, speed 1–20 min/s,
  previous/next session change, **Live** (follows the wall clock while the conference runs). The timeline shows where
  recorded data exists (green strip) and hatches projected sessions.
* Click a room to focus it: current session, speakers, level, estimated headcount, popularity and why.
* Keyboard: `Space` play/pause · `←`/`→` ±1 min (`Shift` ±10) · `[` / `]` previous/next session change · `L` live ·
  `R` reset view · `C` clouds · `T` topic mode · `?` legend · `Esc` clear selection.

## How the estimates work (and their limits)

All of this lives in `src/model/` as pure, unit-tested code (`npm test`).

1. **Samples** (`recording.js`): JSONL lines are parsed leniently. Garbled lines, unknown levels and unknown room
   names are skipped. Room names are matched loosely (`Studio 3 AB` → `studio3`). A sample belongs to a session if its
   `target` is that session, otherwise by schedule.
2. **Occupancy curve per session** (`estimate.js`, `makeCurve`): each level maps to a band of the room capacity:
   `open` 8–70 %, `filling` 70–95 %, `full` 95–100 % (continuous at the borders). Inside a band the value moves
   smoothly between the time the level was entered and the time the next level was seen (or saturates with a time
   constant when no next level is known yet). `running` hides the fill state, so the last known fill value is carried
   forward (or the previous back-to-back session's final fill, or a prior). After the end the room empties over 4 min.
3. **Popularity score** (0–1): `0.55 × peak fill + 0.25 × speed + 0.20 × capacity pressure`. *Speed* is how long before
   the start the room reached `filling` (full score at 20 min). *Pressure* is highest for a `full` 50-seat room: that is
   unmet demand and the UI says so. Sessions without data get a prior from format and room size, nudged by the
   popularity of their topics in sessions that do have data.
4. **Flow / conservation**: a documented constant crowd of **650** people (`CROWD_TOTAL`) is in the building. Room
   counts come from the curves (capped at capacity); if they exceed what the crowd allows (≥ 6 % must stay in hubs) all
   rooms are scaled down proportionally and the excess is reported as `overflow`. The rest is split over Century, Hub 2
   and Hub 4. Counts are rounded to integers that sum to exactly 650 at every 30 s step and each person is assigned to
   exactly one location through a fixed ranking, so people are neither created nor lost. Every person's position is a
   deterministic function of time, which is why scrubbing works in both directions.
5. **Topics** (`topics.js`): the curated `topics` field plus keywords mined from `description` and `main_tools`
   (proper-noun / tool extraction with document-frequency filtering, a stop-word list, and merging of near-duplicates
   into curated topics). 20 curated topics + up to 4 keywords are kept. A session's audience is split over its topics
   (curated 78 %, keywords 22 %).
6. **Projection**: wherever no recording covers a time (future, gaps, before the recorder started) everything is derived
   from schedule + capacity + topic popularity so far and flagged: hatched timeline blocks, hatched fill bars,
   violet dashed cloud labels, a "Projected · not measured" chip.

Limits: capacities and the crowd total are assumptions; the level bands are coarse; a `full` 50-seat room says nothing
about how many people were turned away; the platform's `running` flag lagged the scheduled start by about 8 minutes in
the real data, so a room can show `full` after its session started (handled: it is treated as still full);
the vertical spacing of the floors is schematic.

## Venue model

The venue map is an exploded axonometric drawing (four stacked floor slabs). `scripts/gen-venue.mjs` inverts an
approximate dimetric projection (plan axes at about +27° / −24°) to recover plan coordinates, aligns the floors using
the lifts and the escalator, fits oriented boxes to the rooms and writes `src/venue/geometry.js`. It is a faithful
relative layout, not a surveyed plan.

## Recorder

`recorder/record.py` polls `https://www.agenticdays.com/api/rooms.json` every 30 s and appends
`{"t":<ms>,"rooms":{"millennium":{"level":…,"label":…,"target":…},…}}` to `recording.jsonl` on the `data` branch,
pushing every 2 minutes. `/api/rooms.json` has no CORS headers, which is why the app reads the file through
raw.githubusercontent.com (CORS `*`, cached a few minutes by GitHub). The app never touches the `data` branch.

## Development

```
npm install               # dev only: three, esbuild, playwright-core
npm run build             # bundles src/app/main.js (+ three.js + data) into dist/app.js (committed; index.html uses it)
npm test                  # model unit tests (node:test)
node test/e2e.mjs         # headless Chrome tests, file:// and local static server (needs Google Chrome)
node test/perf.mjs        # frame time + allocation check (metal | swiftshader)
node scripts/screens.mjs <outDir>   # review screenshots
sh scripts/update-embedded.sh       # refresh data/recording-embedded.jsonl from the data branch and rebuild
```

`dist/app.js` is committed so GitHub Pages and `file://` need no build. Three.js is bundled into it (no CDN).

## Decisions made without asking

* Window 12:00–17:00; 23 afternoon sessions from `data/sessions.json`; `Studio 3 AB` counts as Studio 3.
* Hubs hold everyone not in a session; everyone is assumed to be in the building the whole time.
* Default start: Live mode if the conference is running, otherwise the movie plays from 12:00 at 5 min/s.
* The synthetic generator (`src/model/synth.js`) uses the same JSONL shape as the recorder and powers `?demo` and tests.
