// Topics for the clouds, taken from the session descriptions only.
//
// The 20 topics below were derived by reading all session descriptions, grouping the
// recurring terms and giving each group a general name. The grouping is editorial, the
// evidence is not: every term in a lexicon is matched literally against the title and
// description text, a session only feeds a topic when its own text contains at least one
// of that topic's terms, and the matched words are kept as evidence and shown in the UI.
// The curated `topics` field of the conference data is NOT used. test/model.test.mjs
// checks that every single term really occurs in the descriptions.
//
// Term syntax: a regular-expression fragment, matched on word boundaries and case
// insensitive. A leading "=" makes it case sensitive (acronyms such as PR, CI, RAG).

export const TOPIC_LEXICON = [
  { label: 'Coding Agents', terms: ['coding agents?', 'claude code', 'codex', 'cursor', 'copilot', 'ai coding', 'agent harness', 'meta-harness', 'live-coding', 'codebase'] },
  { label: 'Multi-Agent Orchestration', terms: ['multi-agent', 'orchestrat\\w+', 'inter-agent', 'multiple coding agents', 'remote agents?', '=A2A', 'agent2agent', 'another agent', 'multi-step'] },
  { label: 'MCP & Protocols', terms: ['=MCP', 'model context protocol', 'protocols?', '=A2A', 'agent2agent', 'integrations?'] },
  { label: 'Security & Sandboxing', terms: ['secur\\w+', 'sandbox\\w*', 'oauth', 'tokens? exchange', 'authentication', 'permissions', 'untrusted', 'attack', 'isolated', 'trust boundaries', 'identity', 'secrets', 'blast radius', 'poisoned'] },
  { label: 'Guardrails & Trust', terms: ['guardrails', 'trust\\w*', 'oversight', 'autonomy', 'safety', 'safe', 'safely', 'approval', 'policy', 'policies', 'human-in-the-loop', 'control', 'damage'] },
  { label: 'Observability & Tracing', terms: ['observability', 'observ\\w+', 'traces?', 'trace-level', 'visible', 'logs', 'inspect', 'traffic', 'interception'] },
  { label: 'Evals & Measurement', terms: ['evaluation', 'benchmarks?', 'measur\\w+', 'metrics', '=DORA', '=SPACE', 'prove', 'impact', 'accuracy'] },
  { label: 'Testing & Code Review', terms: ['tests?', 'review\\w*', '=PRs?', 'bugs?', 'validat\\w+', '=CI', 'diffs', 'hotfix', 'revert'] },
  { label: 'Production Reliability', terms: ['production', 'production-\\w+', 'reliab\\w+', 'fail\\w*', 'robust', 'real-world', 'regress', 'deterministic', 'non-deterministic'] },
  { label: 'Self-Hosted & Small Models', terms: ['self-host\\w*', 'private', 'small language models?', '=SLMs?', 'smaller model', '=vLLM', 'open models', 'inference', 'hardware', '=GPUs', 'in-house', 'run their own', 'roll your own'] },
  { label: 'Platforms & Cloud-Native', terms: ['kubernetes', 'cloud-native', 'platforms?', 'infrastructure', 'devops', 'ci/cd', 'deploy\\w*', 'runtime', 'workloads', 'lifecycle', 'gateways'] },
  { label: 'Cost & Speed', terms: ['costs?', 'latency', 'cheaper', 'faster', 'spend', 'tokens', 'bill', 'performance', 'speed', 'accelerat\\w+'] },
  { label: 'Context & Retrieval', terms: ['=RAG', 'retrieval', 'vector', 'search', 'context', 'evidence', 'documents', 'sources'] },
  { label: 'Spec-Driven & Agile', terms: ['spec-driven', 'specifications?', '=SDD', 'waterfall', 'agile', 'iterat\\w+', '=SDLC', 'software development life cycle', 'feedback', 'plan', 'planning', 'atomic tasks'] },
  { label: 'Enterprise Adoption', terms: ['adopt\\w+', 'organi[sz]ations?', 'enterprise', 'rolled out', 'licen[cs]es', 'enablement', 'transformation', 'leaders', 'business', 'execs', 'bottlenecks?'] },
  { label: 'Compliance & Sovereignty', terms: ['compliance', 'sovereignty', 'regulat\\w+', 'governance', 'data-privacy', 'sensitive', 'financial', 'lock-in', 'vendor'] },
  { label: 'Team Collaboration', terms: ['collaborat\\w+', 'shared context', 'together', 'teammate', 'teamwork', 'multiplayer', 'team alignment', 'humans?', 'co-drive'] },
  { label: 'Agent Frameworks', terms: ['=ADK', 'agent development kit', 'langchain4j', 'quarkus', '=SDK', 'java', 'python', 'from scratch', 'frameworks?', 'build custom'] },
  { label: 'Tools & Workflows', terms: ['tool calls', 'tool access', 'tool definitions', 'tool/function calling', 'use tools', 'exposes tools', 'workflows?', 'autonomous', 'tasks?'] },
  { label: 'Agents as Customers', terms: ['customers?', 'shop\\w*', 'e-commerce', 'browsing', 'accessibility', 'checkout', 'conversational', 'assistants', 'web', 'catalogue'] },
];

/** How many topics one session can feed (its strongest ones). */
const MAX_PER_SESSION = 4;

export function normTopic(t) {
  return String(t || '').replace(/\s+/g, ' ').trim();
}
function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
export function termRegex(term) {
  const cs = term[0] === '=';
  const src = cs ? term.slice(1) : term;
  return new RegExp('(?<![A-Za-z0-9])(?:' + src + ')(?![A-Za-z0-9])', cs ? 'g' : 'gi');
}
/** The text topics are extracted from: title and description, nothing else. */
export function sessionText(s) {
  return ((s.title || '') + '. ' + (s.desc ?? s.description ?? '')).replace(/[‐-―]/g, '-').replace(/\s+/g, ' ');
}

/**
 * @param allSessions every session (for document frequencies)
 * @param sessions afternoon sessions (normalised: {id, title, desc})
 * @returns {{topics: Array, sessionTopics: Map<string, Array<{id:string,w:number,evidence:string[]}>>}}
 */
export function extractTopics(allSessions, sessions, opts = {}) {
  const lexicon = opts.lexicon || TOPIC_LEXICON;
  const all = allSessions && allSessions.length ? allSessions : sessions;
  const N = Math.max(1, all.length);
  const texts = new Map();
  for (const s of [...all, ...sessions]) if (!texts.has(s.id)) texts.set(s.id, sessionText(s));

  const defs = lexicon.map((t) => ({
    id: 't:' + slug(t.label), label: t.label, short: t.label, kind: 'extracted',
    terms: t.terms.map((src) => {
      const re = termRegex(src);
      let df = 0;
      for (const s of all) { re.lastIndex = 0; if (re.test(texts.get(s.id))) df++; }
      return { src, re, idf: Math.log(1 + N / Math.max(1, df)) };
    }),
  }));

  const sessionTopics = new Map();
  const potential = new Map();
  const found = new Map(); // topic id -> Map(lowercased literal -> literal as written)
  for (const s of sessions) {
    const text = texts.get(s.id);
    const scored = [];
    for (const d of defs) {
      let score = 0;
      const ev = new Map();
      for (const t of d.terms) {
        const m = text.match(t.re);
        if (!m) continue;
        score += (1 + Math.log(m.length)) * t.idf;
        for (const lit of m) if (!ev.has(lit.toLowerCase())) ev.set(lit.toLowerCase(), lit);
      }
      if (score > 0) scored.push({ id: d.id, score, evidence: [...ev.values()] });
    }
    scored.sort((a, b) => b.score - a.score);
    const top = scored.slice(0, MAX_PER_SESSION);
    const tot = top.reduce((a, b) => a + b.score, 0);
    const list = top.map((e) => ({ id: e.id, w: e.score / tot, evidence: e.evidence }));
    for (const e of list) {
      potential.set(e.id, (potential.get(e.id) || 0) + e.w);
      if (!found.has(e.id)) found.set(e.id, new Map());
      for (const lit of e.evidence) if (!found.get(e.id).has(lit.toLowerCase())) found.get(e.id).set(lit.toLowerCase(), lit);
    }
    sessionTopics.set(s.id, list);
  }
  const topics = defs
    .map((d) => ({ id: d.id, label: d.label, short: d.short, kind: d.kind, potential: potential.get(d.id) || 0, evidence: [...(found.get(d.id) || new Map()).values()] }))
    .filter((t) => t.potential > 0)
    .sort((a, b) => b.potential - a.potential);
  return { topics, sessionTopics };
}
