# Audience Flow 3D — build spec

A static, single-page browser app that shows how the audience of **Agentic Engineering Days Zurich 2026**
(20 Nov 2026, Zurich Marriott) moved between rooms during the afternoon, as an animated 3D scene, with
topic clouds floating above it that grow and shrink with topic popularity.

The owner wants this built without further spec questions. Make sensible decisions, write them down in
the README, and hold yourself to the quality gates at the end.

## Hard constraints

- **No server-side dependencies.** Plain static files. Must run by opening `index.html` from `file://`
  AND from GitHub Pages (served from the `main` branch root). No build step required to *run* it: if you
  use a bundler, commit the built output. No CDN at runtime: vendor every library into the repo.
  Note that ES module imports and `fetch()` of local files fail on `file://` in Chrome, so ship classic
  scripts or one bundled IIFE, and embed the static data as `.js` files (e.g. `window.AED_SESSIONS = …`).
- Standard evergreen browsers (Chrome, Firefox, Safari, Edge), desktop first, usable on a phone.
- Fast: 60 fps target on a normal laptop. Use instanced meshes / points for the crowd. First render < 2 s.
- Intuitive: someone who opens it cold understands what they see within a few seconds, without a manual.

## Data you have

All in this repo, all public conference data:

- `data/sessions.json` — all 40 sessions with full `description`, `topics`, `main_tools`, `format`,
  `room`, `starts_at` / `ends_at` (Europe/Zurich, ISO), speakers. 23 of them start at 12:00 or later:
  those afternoon sessions are the scope.
- `data/rooms-snapshot.json` — one full response of `https://www.agenticdays.com/api/rooms.json`:
  the 5 rooms, each with its full day schedule (ms epoch `start`/`end`), the current `target` session
  id and a `level`.
- `reference/venue-map-1.svg`, `reference/venue-map-2.svg`, `reference/venue.html` — the venue map
  drawings from https://www.agenticdays.com/venue (redrawn floor overview). Use them to model the
  venue in 3D: real relative positions, floors and buildings.
- **The live recording**, on the `data` branch of this repo, file `recording.jsonl`, public at
  `https://raw.githubusercontent.com/wizzben/agenticdays-audience-flow/data/recording.jsonl`
  (CORS `*`, cached for a few minutes by GitHub). A recorder (`recorder/record.py`) appends one line
  every 30 s and pushes every 2 min, starting about 12:30 on the conference day:
  `{"t":<ms epoch>,"rooms":{"millennium":{"level":"open","label":"Open","target":"1243898"},"studio4":{…},…}}`

### What `level` means

Per room, one of: `open` (doors open, seats available; `target` is the upcoming session),
`filling` ("Few seats left"), `full` ("No seats left"), `running` ("Started"). There are **no
headcounts** anywhere. Everything about attendance is an estimate derived from these levels. Treat
unknown level values gracefully.

`/api/rooms.json` itself has **no CORS headers**, so the browser app cannot read it directly from
another origin. That is why the recording is relayed through the repo. Do not use third-party CORS
proxies.

### Venue facts

- **Millennium**: about **500** seats. 2nd floor, main building. Opening, keynote, talks.
- **Studio 4, Studio 6**: talks. Floor 4, north building. About **50** seats each.
- **Studio 3** (called "Studio 3 AB" in sessions.json; match room names loosely): hands-on sessions
  and the panel. Ground floor, north building. About 50 seats.
- **Studio 1**: hands-on. 1st floor, main building. About 50 seats.
- **Century, Hub 2** (2nd floor main building, right outside Millennium) and **Hub 4** (floor 4 north):
  sponsors, coffee, lunch, apéro. This is where people are when they are not in a session.
- The two buildings are joined by a skywalk at floor 4; an escalator leads down to the 2nd floor.

## The estimation model (the heart of the app)

Build this as a pure, unit-tested module, separate from rendering.

- Input: sessions, room capacities, the recording (possibly sparse, with gaps, or empty).
- For each afternoon session, derive an estimated occupancy curve over time from the level timeline of
  its room: when the room went `open` → `filling` → `full` → `running`, and how fast. A room that hits
  `full` long before the start is more popular than one that reaches `filling` at the start, which is
  more popular than one that stays `open`. Map levels to occupancy bands of the capacity (for example
  open < ~70 %, filling ~70–95 %, full ~100 %) and interpolate smoothly inside bands using timing.
  `running` hides the fill state, so carry forward the last known fill level for that session.
- **Popularity score** per session: combine final fill level, speed of fill, and capacity pressure
  (a full 50-seat studio signals unmet demand; say so in the UI rather than hiding it).
- **Flow**: people are conserved. Assume a total crowd (roughly 600–700, make it a documented constant),
  and between sessions move people between rooms and the hubs so the per-room occupancy estimates are
  met. The animation shows those movements as streams of people along the real walking routes
  (corridors, escalator, skywalk).
- **Topic popularity** over time: every session contributes its estimated audience to its topics.
  Use the curated `topics` field plus key terms extracted from the `description` and `main_tools` text
  (do your own lightweight keyword extraction with a stop-word list; merge near-duplicates; keep the
  20 or so most meaningful). Topic weight at time T = audience attributed so far (or currently in the
  room; pick what reads best and offer both if cheap).
- When there is no recording for a session yet (future, or a gap), fall back to a clearly labeled
  **projection** from schedule + capacity + topic popularity so far. Never present projections as
  measured data: recorded vs. projected must be visually distinct.

## The experience

- **3D venue**, modeled from the venue map: two buildings, the right floors, the five session rooms
  and the hubs, labeled. Semi-transparent floors/walls so every room is visible at once. Orbit, zoom,
  pan; a reset-view button; click a room to focus it and see its current session, speakers, fill level
  and popularity.
- **Animated crowd**: individual people as instanced dots/figures that sit in rooms, mingle in the hubs
  and stream between rooms at session changes. Room fill is readable at a glance (people density plus
  a fill bar or glow in the level colors).
- **Topic clouds** floating above the venue: actual soft 3D cloud shapes with the topic name, whose
  size animates with that topic's popularity over time. Hover/tap a cloud to highlight the sessions and
  rooms that feed it.
- **Movie playback with interactive controls**: play/pause, a scrubbable timeline for the afternoon
  with session blocks per room as a mini schedule, speed control (e.g. 1 min/s up to 10 min/s), jump to
  next/previous session change, and a **Live** button that follows real time while the conference is
  running. Keyboard: space, arrows. Current time always visible.
- **Live updates**: re-fetch the recording from the raw GitHub URL about every 60 s while the page is
  open; merge new samples without restarting playback. Also embed the latest recording snapshot in the
  repo at build time so the app works offline and after the event. If the fetch fails, keep going with
  what is there.
- A short, honest legend: what is measured (room levels every 30 s), what is estimated (headcounts,
  flow), room capacities, data source and time of last sample.
- Visual quality matters. Dark, calm, conference-night look; clear typography; smooth easing; nothing
  jittery. It should look great in a screenshot and better in motion.

## Quality gates (define the details yourself, then pass them)

1. Unit tests for the estimation model: conservation of people, monotonic sanity (a `full` room ranks
   above a `filling` one), sparse/empty/garbled recordings, unknown levels, room-name matching.
2. A synthetic recording generator for tests and for a `?demo` mode, so the whole experience can be
   exercised end to end regardless of how much real data exists.
3. Headless browser tests (Playwright or similar, dev-only dependency): the page loads from `file://`
   and from a local static server with **zero console errors**; the canvas is not blank; play advances
   time; scrubbing works; a room can be selected; the clouds change size over the timeline.
4. Performance check: measure frame time in headless Chrome with the full crowd; fix it if the average
   frame is over 16 ms on your machine or anything allocates per frame in the hot loop.
5. Look at your own screenshots (start, mid-afternoon, a session change, a room focused, phone width)
   and iterate until labels do not overlap, nothing is cut off, and the scene reads clearly.
6. No runtime network requests other than the raw GitHub recording URL.
7. README: what it is, how to open it, how the estimates work and their limits, how the recorder works.

## Delivery

- Work in this repo (`wizzben/agenticdays-audience-flow`). App at the repo root (`index.html`).
  Do not touch the `data` branch: a recorder is pushing to it.
- Commit in small steps and **push to `main` early and often**, a first working version as soon as
  possible (the conference afternoon is happening now), then refine. If you cannot push to `main`,
  push a branch and open a pull request.
- End every commit message with: `Co-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>`
