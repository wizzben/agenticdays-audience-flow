// Topic extraction: curated `topics` field + keywords mined from description / main_tools.

const STOP = new Set(('a about above across actually after again against all almost along also although always am among an and another any anyone ' +
  'are around as at away back based be because been before being below between both but by can cannot come could day did do does doing done down during ' +
  'each early easy either else end enough even ever every few first for from get gets getting give given go going good got great had has have having he her ' +
  'here him his how however i if in into is it its itself just keep know last least less let like little long look made make makes many may maybe me might more ' +
  'most much must my need never new next no not now of off often on once one only onto or other our out over own per put rather really right same say see ' +
  'seem several she should show shows since so some something still such take than that the their them then there these they thing things think this those ' +
  'through to together too took toward under until up upon us use used uses using very want was way we well went were what when where whether which while who ' +
  'whom why will with within without would yet you your youre weve theyre dont doesnt cant wont isnt thats lets ' +
  // conference filler
  'talk session sessions workshop hands-on handson hands on attendees attendee audience participants walk learn learned learning discuss explore ' +
  'share story stories team teams years year time real world practical lessons look looking build building built working work works demo live ' +
  'approach approaches idea ideas part point case cases example examples including include includes provide provides better best different ' +
  'help helps able lot key main important possible simple complex today tomorrow people company companies engineers engineer developer developers ' +
  'ai agentic agent agents llm llms model models system systems tool tools code application applications app apps data').split(/\s+/));

const NOT_ENTITY = new Set(('scale guide factory development html api apis sdk cli question questions production running review task practice human change small multiple enable expect environment orchestrate ' +
  'monday tuesday wednesday thursday friday saturday sunday january february march april may june july august september october november december ' +
  'swiss switzerland zurich europe european german english american america we ive youll theyve whats isn aren wasn don doesn didn won wouldn shouldn couldn ' +
  'imagine picture think today yes no why what who how when where here there then also but and the this that our your their its').split(/\s+/));

const GENERIC_TOPIC_WORDS = new Set(['ai', 'agent', 'agents', 'agentic', 'and', 'with', 'for', 'in', 'of', 'the', 'practice', 'use', 'cases', 'human', 'open', 'source', 'production', 'learned', 'lessons']);

export function normTopic(t) {
  return String(t || '').replace(/\s+/g, ' ').trim();
}

const SHORT = {
  'Lessons Learned & Anti-Patterns': 'Lessons Learned',
  'Multi-Agent Architectures': 'Multi-Agent',
  'MCP & Agent Protocols': 'MCP & Protocols',
  'AI Observability & Production': 'Observability',
  'Agent Frameworks': 'Agent Frameworks',
  'AI Evals & Testing': 'Evals & Testing',
  'AI Coding Tools': 'Coding Tools',
  'Enterprise AI Adoption & Governance': 'Enterprise Adoption',
  'Local AI, Inference & Open Models': 'Local AI',
  'Software Architecture with AI': 'Architecture',
  'AI Security': 'Security',
  'AI-Assisted Coding Practice': 'AI-Assisted Coding',
  'AI Ethics & Responsibility': 'Ethics',
  'Spec-Driven & Agentic SDLC': 'Spec-Driven SDLC',
  'AI Product UX & Human-Agent Collaboration': 'Product UX',
  'Industry & Vertical Use Cases': 'Industry Cases',
  'AI in DevOps & Platform Engineering': 'DevOps & Platform',
  'RAG & Knowledge Retrieval': 'RAG',
  'AI Community, Open Source & Education': 'Community & OSS',
  'AI Strategy & Value Realization': 'Strategy & Value',
};

function stem(w) {
  w = w.toLowerCase();
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.length > 4 && w.endsWith('s') && !/(ss|us|is|ous)$/.test(w)) return w.slice(0, -1);
  return w;
}
function tokens(text) {
  return (String(text || '').toLowerCase().match(/[a-z][a-z0-9+#.\-]*[a-z0-9+#]|[a-z]/g) || []).map((w) => w.replace(/\.+$/, ''));
}
function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/**
 * @param allSessions every session (for document frequencies)
 * @param sessions afternoon sessions (normalised: {id, topicsRaw, desc, tools})
 * @returns {{topics: Array, sessionTopics: Map<string, Array<{id:string,w:number}>>}}
 */
export function extractTopics(allSessions, sessions, opts = {}) {
  const maxKeywords = opts.maxKeywords ?? 4;
  const maxTotal = opts.maxTotal ?? 24;
  // ---- curated topics
  const curated = new Map(); // id -> {id,label,short,kind}
  for (const s of sessions) {
    for (const raw of s.topicsRaw || []) {
      const label = normTopic(raw);
      if (!label) continue;
      const id = 'c:' + slug(label);
      if (!curated.has(id)) curated.set(id, { id, label, short: SHORT[label] || label, kind: 'curated' });
    }
  }
  // words of curated labels -> curated id (for merging keywords into them)
  const wordToCurated = new Map();
  for (const c of curated.values()) {
    for (const w of tokens(c.label)) {
      if (GENERIC_TOPIC_WORDS.has(w) || w.length < 3) continue;
      if (!wordToCurated.has(stem(w))) wordToCurated.set(stem(w), c.id);
    }
  }
  const aliasExtra = { eval: 'ai-evals-testing', evaluation: 'ai-evals-testing', testing: 'ai-evals-testing', rag: 'rag-knowledge-retrieval', mcp: 'mcp-agent-protocols', security: 'ai-security', secure: 'ai-security', governance: 'enterprise-ai-adoption-governance', observability: 'ai-observability-production', monitoring: 'ai-observability-production', spec: 'spec-driven-agentic-sdlc', 'multi-agent': 'multi-agent-architectures', architecture: 'software-architecture-with-ai', copilot: null };
  for (const [w, cid] of Object.entries(aliasExtra)) if (cid && curated.has('c:' + cid)) wordToCurated.set(stem(w), 'c:' + cid);

  // ---- keyword candidates with document frequencies over ALL sessions
  const display = new Map();
  const docs = allSessions.map((s) => {
    const plain = new Map();
    for (const w of tokens(s.desc || '')) {
      if (STOP.has(w) || NOT_ENTITY.has(w) || w.length < 5 || /^\d/.test(w)) continue;
      const k = stem(w);
      plain.set(k, (plain.get(k) || 0) + 1);
    }
    const set = new Map();
    const text = s.desc || '';
    const re = /[A-Za-z][A-Za-z0-9+#.\-]*[A-Za-z0-9+#]|[A-Za-z]/g;
    let m;
    while ((m = re.exec(text))) {
      const w = m[0];
      const lw = w.toLowerCase();
      if (STOP.has(lw) || lw.length < 3 || NOT_ENTITY.has(lw) || /^ai-|-(native|driven|powered|based|first)$/.test(lw)) continue;
      const internalCaps = /[a-z][A-Z]|[A-Z]{2,}|[0-9]/.test(w);
      let before = text.slice(Math.max(0, m.index - 3), m.index).replace(/[\s"'(\[]+$/, '');
      const sentenceStart = m.index === 0 || before === '' || /[.!?:\n]$/.test(before) || /\n/.test(text.slice(Math.max(0, m.index - 3), m.index));
      const proper = internalCaps || (/^[A-Z]/.test(w) && !sentenceStart);
      if (!proper) continue;
      const k = stem(w);
      set.set(k, (set.get(k) || 0) + 1);
      if (!display.has(k)) display.set(k, w);
    }
    const tools = new Map();
    for (const phrase of String(s.tools || '').split(/,|;|\/|\band\b|\+|\n/)) {
      const p = phrase.trim().replace(/^(our|the|a|an)\s+/i, '');
      if (p.length < 3 || p.length > 24 || p.split(/\s+/).length > 3) continue;
      if (/take-away|not important|from scratch|building|stack|apis?$/i.test(p)) continue;
      const key = p.toLowerCase();
      tools.set(key, p);
    }
    return { id: s.id, terms: set, tools, plain };
  });
  const df = new Map();
  const bump = (k) => df.set(k, (df.get(k) || 0) + 1);
  for (const d of docs) {
    for (const k of d.terms.keys()) bump(k);
    for (const k of d.plain.keys()) bump('p:' + k);
    for (const k of d.tools.keys()) bump('tool:' + k);
  }
  const N = Math.max(1, docs.length);
  const byId = new Map(docs.map((d) => [d.id, d]));
  const cand = new Map(); // key -> {key,label,score,perSession:Map}
  const addCand = (key, label, sid, sc) => {
    let c = cand.get(key);
    if (!c) cand.set(key, (c = { key, label, score: 0, per: new Map() }));
    c.score += sc;
    c.per.set(sid, (c.per.get(sid) || 0) + sc);
  };
  for (const s of sessions) {
    const d = byId.get(s.id);
    if (!d) continue;
    for (const [k, tf] of d.terms) {
      const f = df.get(k) || 1;
      if (f < 2 || f > N * 0.35) continue;
      const idf = Math.log(N / f);
      addCand('w:' + k, display.get(k) || k, s.id, (1 + Math.log(tf)) * idf);
    }
    for (const [lk, p] of d.tools) {
      const f = df.get('tool:' + lk) || 1;
      if (f < 2 || f > N * 0.35) continue;
      addCand('t:' + lk, p, s.id, 1.8 * Math.log(N / f) + 1);
    }
  }
  // merge candidates into curated topics where the word matches a curated label
  const merged = new Map(); // curated id -> Map(sid -> score)
  const kw = [];
  for (const c of cand.values()) {
    const w = c.key.slice(2);
    const cid = c.key[0] === 'w' ? wordToCurated.get(w) : wordToCurated.get(stem(w));
    if (cid) {
      if (!merged.has(cid)) merged.set(cid, new Map());
      const m = merged.get(cid);
      for (const [sid, sc] of c.per) m.set(sid, Math.max(m.get(sid) || 0, sc));
    } else kw.push(c);
  }
  // drop near-duplicate keywords (same label ignoring case/stem, or one contained in the other)
  kw.sort((a, b) => b.score - a.score);
  const chosenKw = [];
  for (const c of kw) {
    const lab = c.label.toLowerCase();
    if (chosenKw.some((o) => stem(o.label.toLowerCase()) === stem(lab) || o.label.toLowerCase().includes(lab) || lab.includes(o.label.toLowerCase()))) continue;
    if (c.per.size < 1) continue;
    chosenKw.push(c);
    if (chosenKw.length >= maxKeywords) break;
  }

  // sessions without any curated topic must still be represented: add their strongest keyword candidate
  for (const s of sessions) {
    if ((s.topicsRaw || []).length || chosenKw.some((c) => c.per.has(s.id))) continue;
    let best = null;
    for (const c of kw) if (c.per.has(s.id) && (!best || c.per.get(s.id) > best.per.get(s.id)) && !chosenKw.includes(c)) best = c;
    if (!best) {
      // plain-word fallback (tf-idf over all sessions)
      const d = byId.get(s.id);
      let bk = null, bs = 0;
      for (const [k, tf] of d ? d.plain : []) {
        const sc = (1 + Math.log(tf)) * Math.log(N / (df.get('p:' + k) || 1));
        if (sc > bs && df.get('p:' + k) <= N * 0.25) { bs = sc; bk = k; }
      }
      if (bk) {
        const existing = chosenKw.find((c) => c.key === 'w:' + bk);
        if (existing) existing.per.set(s.id, bs);
        else chosenKw.push({ key: 'w:' + bk, label: bk[0].toUpperCase() + bk.slice(1), score: bs, per: new Map([[s.id, bs]]) });
      }
    } else chosenKw.push(best);
  }

  // ---- per-session topic weights: curated share 0.75, keywords 0.25 (curated gets all when no keyword)
  const sessionTopics = new Map();
  const potential = new Map();
  const labelFor = (c) => {
    const l = c.label;
    return /^[a-z]/.test(l) && l === l.toLowerCase() && c.key[0] === 'w' ? l[0].toUpperCase() + l.slice(1) : l;
  };
  const kwTopics = chosenKw.map((c) => ({ id: 'k:' + slug(c.label), label: labelFor(c), short: labelFor(c), kind: 'keyword', _c: c }));
  for (const s of sessions) {
    const own = [];
    for (const raw of s.topicsRaw || []) {
      const id = 'c:' + slug(normTopic(raw));
      if (curated.has(id) && !own.includes(id)) own.push(id);
    }
    // merged keywords add a little extra weight to their curated topic
    const extra = new Map();
    {
      let bestC = null, bestS = 2.5;
      for (const [cid, m] of merged) if (m.has(s.id) && !own.includes(cid) && m.get(s.id) > bestS) { bestC = cid; bestS = m.get(s.id); }
      if (bestC && own.length < 5) extra.set(bestC, 0.35);
    }
    const kws = kwTopics.filter((k) => k._c.per.has(s.id));
    const kwSum = kws.reduce((a, k) => a + k._c.per.get(s.id), 0) || 1;
    const list = [];
    const nCur = own.length + extra.size;
    const curShare = !kws.length ? 1 : nCur ? 0.78 : 0;
    const kwShare = !kws.length ? 0 : nCur ? 0.22 : 1;
    for (const id of own) list.push({ id, w: curShare / Math.max(1, nCur) });
    for (const [id, bw] of extra) list.push({ id, w: (curShare / Math.max(1, nCur)) * bw });
    for (const k of kws) list.push({ id: k.id, w: (kwShare * k._c.per.get(s.id)) / kwSum });
    if (!list.length && kws.length === 0) { sessionTopics.set(s.id, []); continue; }
    const tot = list.reduce((a, b) => a + b.w, 0) || 1;
    for (const e of list) { e.w /= tot; potential.set(e.id, (potential.get(e.id) || 0) + e.w); }
    sessionTopics.set(s.id, list);
  }
  let topics = [...curated.values(), ...kwTopics.map(({ _c, ...t }) => t)]
    .map((t) => ({ ...t, potential: potential.get(t.id) || 0 }))
    .filter((t) => t.potential > 0)
    .sort((a, b) => b.potential - a.potential);
  topics = topics.slice(0, maxTotal);
  const keep = new Set(topics.map((t) => t.id));
  for (const [sid, list] of sessionTopics) {
    const f = list.filter((e) => keep.has(e.id));
    const tot = f.reduce((a, b) => a + b.w, 0);
    sessionTopics.set(sid, tot > 0 ? f.map((e) => ({ id: e.id, w: e.w / tot })) : []);
  }
  return { topics, sessionTopics };
}
