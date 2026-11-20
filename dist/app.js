(()=>{var is={fetched_at:"2026-11-20",source:"https://www.agenticdays.com/mcp",sessions:[{id:"1250380",slug:"1250380-you-must-not-ssh-and-other-stories-from-building-our-sre",title:'"YOU MUST NOT ssh!" and Other Stories from Building Our SRE Agent',url:"https://www.agenticdays.com/session/1250380-you-must-not-ssh-and-other-stories-from-building-our-sre",format:"Talk",duration:"25 min",starts_at:"2026-11-20T09:20:00+01:00",ends_at:"2026-11-20T09:50:00+01:00",time:"Fri 20 Nov, 09:20-09:50",room:"Studio 4",spotlight:!1,description:`Everyone is building SRE agents. Most of them are barely junior sysadmins in a trench coat \u2014 useful for "how does X work?", useless when PostgreSQL replication is lagging at 3 AM across three datacenters at your specific company with your specific Puppet module.\r
\r
We started out obsessing over the tech stack, but after months in production, we learned a few hard truths: The agent framework? It doesn't really matter that much. The LLM model or vendor? Doesn't matter nearly as much as you think. Providing misleading docs? A massive problem. Fear of autonomy? Like handcuffing your agent and getting only 10% out of it. Not unit-testing the context? Likely you'll degrade in the future versions and lose people's trust.\r
\r
We'll walk through what surprised us, what the agent still gets wrong, and why security is the hardest third nobody talks about. No vendor pitch, just a story from the trenches so you can get "more realistic" about this.`,main_tools:"our take-away - not important, but Claude Agent SDK in our case",topics:["Lessons Learned & Anti-Patterns","AI Observability & Production","AI for Legacy &   Refactoring"],speakers:[{name:"David Pech",slug:"david-pech",url:"https://www.agenticdays.com/speaker/david-pech",company:"Wrike",tagline:"Platform Engineer \xB7 CNCF Golden Kubestronaut"}],qna_url:"https://www.agenticdays.com/q/10"},{id:"1243898",slug:"1243898-a-practical-guide-to-fast-and-private-llms",title:"A Practical Guide to Fast and Private LLMs",url:"https://www.agenticdays.com/session/1243898-a-practical-guide-to-fast-and-private-llms",format:"Lightning Talk",duration:"7 min",starts_at:"2026-11-20T12:20:00+01:00",ends_at:"2026-11-20T12:27:00+01:00",time:"Fri 20 Nov, 12:20-12:27",room:"Millennium",spotlight:!1,description:"A set of practical tips and tools for hobbyists and teams to run their own LLM in a private and sustainable setup. This talk gives people hands-on knowledge to decide on the right LLM architecture, how to optimize it, which hardware to run it on, and what software stack to go for. A whirlwind tour of how to roll your own AI for fun and profit.",main_tools:"Llama.cpp, Ollama, vLLM",topics:["Local AI, Inference & Open Models"],speakers:[{name:"Lena Fuhrimann",slug:"lena-fuhrimann",url:"https://www.agenticdays.com/speaker/lena-fuhrimann",company:"bespinian",tagline:"Founder & Cloud Solution Architect"}],qna_url:"https://www.agenticdays.com/q/12"},{id:"1293601",slug:"1293601-adk-crash-course-from-beginner-to-expert",title:"ADK Crash Course - From Beginner To Expert",url:"https://www.agenticdays.com/session/1293601-adk-crash-course-from-beginner-to-expert",format:"Hands-On Session",duration:"75\u201390 min",starts_at:"2026-11-20T13:00:00+01:00",ends_at:"2026-11-20T14:15:00+01:00",time:"Fri 20 Nov, 13:00-14:15",room:"Studio 3 AB",spotlight:!1,description:`You're about to step into the exciting world of AI agents. Forget simple chatbots that just answer questions. We\u2019re diving deep into the Agent Development Kit (ADK) to build sophisticated, autonomous systems that can reason, plan, and use tools to accomplish complex tasks.\r
\r
Part 1: Hands-on with Agent Development Kit: Build custom AI agents using Python or Java and the Agent Development Kit (ADK). Learn ADK interfaces, project structure, and create a multi-agent example, progressing from a simple workflow to a complex system.\r
Part 2: Connect to Remote Agents with ADK and A2A SDK: Deploy your ADK agent as a remote agent using the Agent2Agent (A2A) Python or Java SDK. Cover AgentCard preparation, A2A Server deployment, command-line querying, and enabling inter-agent communication. Learn how A2A protocol enables an interconnected AI ecosystem allowing agents to integrate and share capabilities.`,main_tools:"ADK",topics:["Agent Frameworks","Multi-Agent Architectures","MCP & Agent Protocols"],speakers:[{name:"Abdel Sghiouar",slug:"abdel-sghiouar",url:"https://www.agenticdays.com/speaker/abdel-sghiouar",company:"Google Cloud",tagline:"Cloud Developer Advocate \xB7 KubeCon Co-Chair \xB7 Kubernetes Podcast Host"}],qna_url:"https://www.agenticdays.com/q/13"},{id:"1251731",slug:"1251731-agent-on-the-wire-looking-inside-an-ai-coding-agent",title:"Agent on the Wire: Looking Inside an AI Coding Agent",url:"https://www.agenticdays.com/session/1251731-agent-on-the-wire-looking-inside-an-ai-coding-agent",format:"Hands-On Session",duration:"75\u201390 min",starts_at:"2026-11-20T15:20:00+01:00",ends_at:"2026-11-20T16:30:00+01:00",time:"Fri 20 Nov, 15:20-16:30",room:"Studio 1",spotlight:!1,description:`What actually happens between giving an AI coding agent a task and receiving working software?\r
\r
In this hands-on lab, participants will route a coding agent through an interception layer and inspect the interactions normally hidden behind the terminal interface. They will follow the instructions, context, tool definitions, tool calls, and results exchanged while the agent work effectively observing its visible \u201Cbrain activity\u201D in real time.\r
\r
Participants will then use a coding agent to create a small project, capture the resulting traffic, and transform it into a visual HTML report. The preconfigured environment keeps the focus on experimentation rather than setup.\r
\r
Attendees leave with a practical mental model of how coding agents operate and a repeatable approach for analyzing and improving agent workflows.`,main_tools:"opencode, claude code, codex",topics:["Lessons Learned & Anti-Patterns","Agent Frameworks","AI Evals & Testing","AI Observability & Production","AI Coding Tools"],speakers:[{name:"Vincent G",slug:"vincent-g",url:"https://www.agenticdays.com/speaker/vincent-g",company:"letsboot",tagline:"AI Innovation Engineer"}],qna_url:"https://www.agenticdays.com/q/14"},{id:"1302471",slug:"1302471-agentic-ai-at-migros-online-autonomous-engineering-agents",title:"Agentic AI at Migros Online: Autonomous Engineering Agents and Conversational Shopping",url:"https://www.agenticdays.com/session/1302471-agentic-ai-at-migros-online-autonomous-engineering-agents",format:"Talk",duration:"25 min",starts_at:"2026-11-20T15:20:00+01:00",ends_at:"2026-11-20T15:50:00+01:00",time:"Fri 20 Nov, 15:20-15:50",room:"Studio 4",spotlight:!0,spotlight_by:{name:"Migros Online",url:"https://www.migros.ch/"},description:`AI agents are arriving at both ends of e-commerce at once. Inside product engineering organizations, they are starting to take on real delivery work: migrations, routine fixes, and the long tail of changes that quietly consume engineering focus. On the product, customers are beginning to shop through AI assistants instead of browsers, and they will expect products and baskets to be reachable from a conversation.\r
\r
At Migros Online, the online supermarket of Switzerland's largest retail group, we are exploring both movements in parallel. On the engineering side, we are working toward autonomous agents that reliably handle background work, with the guardrails and context this requires. On the product, we are experimenting with conversational shopping by opening our catalogue to AI assistants through integrations such as MCP.\r
\r
In this talk, we share why we believe an e-commerce company needs to invest on both sides at once, how we approached each experiment during our internal Hackweeks, and a look at our learnings: what worked, what did not, and what we would do differently.`,main_tools:"Claude Code, Product MCP integration",topics:["Lessons Learned & Anti-Patterns","MCP & Agent Protocols","Software Architecture with AI","Enterprise AI Adoption & Governance","Industry & Vertical Use Cases"],speakers:[{name:"Sven Scheffel",slug:"sven-scheffel",url:"https://www.agenticdays.com/speaker/sven-scheffel",company:"Migros Online",tagline:"Staff Software Engineer"},{name:"Gabriel Dinant",slug:"gabriel-dinant",url:"https://www.agenticdays.com/speaker/gabriel-dinant",company:"Migros Online",tagline:"Staff Software Engineer"}],qna_url:"https://www.agenticdays.com/q/15"},{id:"1243798",slug:"1243798-agents-need-platforms-too-running-llm-and-agent-workloads",title:"Agents Need Platforms Too: Running LLM and Agent Workloads the Cloud-Native Way",url:"https://www.agenticdays.com/session/1243798-agents-need-platforms-too-running-llm-and-agent-workloads",format:"Talk",duration:"25 min",starts_at:"2026-11-20T13:40:00+01:00",ends_at:"2026-11-20T14:10:00+01:00",time:"Fri 20 Nov, 13:40-14:10",room:"Studio 6",spotlight:!1,description:"Demos of AI agents are easy. Running them reliably is not. Once agents move from local experiments into production, familiar DevOps questions return: where do they run, how are they observed, how do they access tools and secrets, how do we control cost, and how do we recover when they fail? This talk shows how cloud-native infrastructure can support production-grade agentic systems. We will map the building blocks of an agent platform, from Kubernetes-based inference with open models to API gateways, tool access, observability, safety boundaries, and lifecycle operations. The goal is not to hype agents, but to show what it takes to operate them like real software.",main_tools:"Kubernetes, vLLM, LiteLLM, Kubeflow, OpenShift, Open Models, Agent APIs, Observability stack",topics:["MCP & Agent Protocols","AI Observability & Production","AI Security","Local AI, Inference & Open Models","AI in DevOps & Platform Engineering"],speakers:[{name:"Aarno Aukia",slug:"aarno-aukia",url:"https://www.agenticdays.com/speaker/aarno-aukia",company:"VSHN",tagline:"Co-Founder & Partner"}],qna_url:"https://www.agenticdays.com/q/49"},{id:"1292080",slug:"1292080-agents-speak-protocol-why-standards-are-the-real",title:"Agents Speak Protocol: Why Standards Are the Real Infrastructure of AI",url:"https://www.agenticdays.com/session/1292080-agents-speak-protocol-why-standards-are-the-real",format:"Talk",duration:"25 min",starts_at:"2026-11-20T11:00:00+01:00",ends_at:"2026-11-20T11:30:00+01:00",time:"Fri 20 Nov, 11:00-11:30",room:"Millennium",spotlight:!1,description:`Every major computing revolution eventually standardized how things talk to each other. Before TCP/IP, networks spoke dialects. Before HTTP, every service invented its own wire format. Before REST, SOAP was the only "enterprise" answer. Each time, entropy was reduced not by building better applications, but by agreeing on how they connect.\r
\r
We are at exactly that inflection point with AI agents.\r
\r
Today's agent ecosystem is a tower of Babel: agents speak different frameworks, tools are wired with one-off integrations, UIs are bolted on as afterthoughts, and client communication is reinvented per product. This is not a feature. It is entropy, and it is expensive.\r
\r
This talk maps the emerging protocol stack that is finally bringing order: MCP for agent-to-tool context, A2A for peer-to-peer agent collaboration, A2UI and AG-UI/MCPUI for declarative and generative interfaces, and ACP for client-side orchestration. We will examine what each protocol solves, where its boundaries are, and \u2014 critically \u2014 how they complement rather than compete. You will see concrete architectures where MCP and A2A work side by side in the same system, each doing what it does best.\r
\r
Along the way, we will draw parallels from protocol wars past: CORBA vs REST, SOAP vs JSON, WebSockets vs polling. History teaches that winners are rarely the most feature-rich; they are the simplest protocols that reduce the most uncertainty. The same pattern is already playing out in agentic AI.`,topics:["Agent Frameworks","Multi-Agent Architectures","MCP & Agent Protocols"],speakers:[{name:"Stefano Maestri",slug:"stefano-maestri",url:"https://www.agenticdays.com/speaker/stefano-maestri",company:"IBM",tagline:"Software Development Manager (Red Hat)"},{name:"Alessio Soldano",slug:"alessio-soldano",url:"https://www.agenticdays.com/speaker/alessio-soldano",company:"IBM",tagline:"Sr. Manager Software Engineering (Red Hat)"}],qna_url:"https://www.agenticdays.com/q/16"},{id:"1254403",slug:"1254403-ai-agility-is-spec-driven-development-bringing-back",title:"AI & Agility: Is Spec-Driven Development Bringing Back Waterfall? And How to Move Beyond It",url:"https://www.agenticdays.com/session/1254403-ai-agility-is-spec-driven-development-bringing-back",format:"Talk",duration:"25 min",starts_at:"2026-11-20T13:00:00+01:00",ends_at:"2026-11-20T13:30:00+01:00",time:"Fri 20 Nov, 13:00-13:30",room:"Millennium",spotlight:!1,description:`With the rise of LLMs, a new promise has emerged: software development driven by specifications. Multi-agent systems, RAG, MCP... everything seems to converge toward an appealing idea: given enough context, AI can build an entire system.\r
\r
In practice, however, this approach\u2014often referred to as Spec-Driven Development (SDD)\u2014quickly reveals its limitations. It assumes a perfectly understood context, known invariants, and an AI capable of filling every gap in the specification. The result is often the same: systems that look impressive in demos but fail in production, leaving behind a massive understanding debt.\r
\r
This talk shares concrete lessons learned from real-world projects where AI is used daily in complex product environments.\r
\r
We will explore:\r
\r
Why SDD is a modern reincarnation of the Waterfall model, fundamentally incompatible with the complexity of real-world systems.\r
How human cognitive limitations (bounded rationality) also apply to the way we use LLMs.\r
Why treating an LLM as an unreliable accelerator radically changes the way we build software.\r
\r
We will introduce a pragmatic alternative: Empirical Product Development (EPD), an approach built around:\r
\r
Atomic tasks\r
A wall of feedback (tests, performance, system consistency, business validation)\r
Iterative and controlled progress\r
\r
Through real examples, we will show how to:\r
\r
Integrate AI into an agile development cycle without losing control\r
Avoid black-box effects\r
Accelerate delivery without compromising quality\r
\r
This talk is aimed at practitioners already using AI in their day-to-day work who want to move beyond the hype and build systems that are truly robust in production.`,main_tools:"Copilot",topics:["AI-Assisted Coding Practice"],speakers:[{name:"Baptiste Mac\xE9",slug:"baptiste-mace",url:"https://www.agenticdays.com/speaker/baptiste-mace",company:"Arolla",tagline:"Agile / DevOps / Craft Coach"}],qna_url:"https://www.agenticdays.com/q/17"},{id:"1368894",slug:"1368894-beyond-mcp-supercharging-your-agents-with-a-single-unified",title:"Beyond MCP - Supercharging your agents with a single unified data plane",url:"https://www.agenticdays.com/session/1368894-beyond-mcp-supercharging-your-agents-with-a-single-unified",format:"Talk",duration:"25 min",starts_at:"2026-11-20T10:20:00+01:00",ends_at:"2026-11-20T10:50:00+01:00",time:"Fri 20 Nov, 10:20-10:50",room:"Studio 6",spotlight:!0,spotlight_by:{name:"Exasol",url:"https://www.exasol.com/"},description:"Agents need context that's spread across many systems, and regulated organisations can't copy it all into one AI platform. The talk covers federating queries to where data lives, adding semantic context so agents reason over business meaning, and sustaining sub-second performance at agent-scale concurrency, ending with an end-to-end demo on sovereign infrastructure.",main_tools:"Exasol",topics:["MCP & Agent Protocols","RAG & Knowledge Retrieval"],speakers:[{name:"Alexander Stigsen",slug:"alexander-stigsen",url:"https://www.agenticdays.com/speaker/alexander-stigsen",company:"Exasol",tagline:"Chief Product & Technology Officer"}],qna_url:"https://www.agenticdays.com/q/48"},{id:"1292484",slug:"1292484-beyond-prompts-models-evolving-architecture-for-agentic",title:"Beyond Prompts & Models: Evolving Architecture for Agentic Systems",url:"https://www.agenticdays.com/session/1292484-beyond-prompts-models-evolving-architecture-for-agentic",format:"Talk",duration:"25 min",starts_at:"2026-11-20T10:20:00+01:00",ends_at:"2026-11-20T10:50:00+01:00",time:"Fri 20 Nov, 10:20-10:50",room:"Millennium",spotlight:!1,description:`As organizations experiment with enterprise agentic systems, discussions often center on models, frameworks, and tools. Far less attention is given to the recurring architectural decisions and engineering trade-offs that shape how these systems evolve over time.\r
\r
In our session we present a practical architectural evolution model that emerged retrospectively from recurring architectural decisions and trade-offs, observed while iteratively prototyping and evolving enterprise agentic systems. The model organizes these recurring patterns into a series of evolution stages that help engineering teams understand where their architecture is today and which engineering challenges typically emerge next.\r
\r
Drawing on enterprise AI initiatives at Swisscom spanning knowledge management, product management and AI-assisted operations, our session traces the architectural decisions that shaped each stage of this evolution: from establishing data readiness as the foundation for context engineering; through rapid low-code prototyping for workflow validation on n8n; to rebuilding multi-agent architectures on the Strands Agents SDK under enterprise deployment constraints; from an early investment in vector-based RAG to a leaner vectorless RAG approach that unblocked us; standardizing agent capabilities via MCP; and finally toward architectural simplification by re-realizing the same workflows with Kiro, GitHub Copilot and reusable agent skills - thereby trading custom orchestration for a smaller footprint.\r
\r
Based on real-world implementations, this session demonstrates how successful evolution of enterprise agentic systems is driven less by model capability and more by architectural choices around orchestration, context engineering, interoperability, and architectural simplicity.`,main_tools:"n8n, Strands Agents SDK, Claude Code, GitHub Copilot, MCP",topics:["Lessons Learned & Anti-Patterns","Agent Frameworks","Multi-Agent Architectures","MCP & Agent Protocols","RAG & Knowledge Retrieval","AI Coding Tools","Software Architecture with AI"],speakers:[{name:"Manisha De",slug:"manisha-de",url:"https://www.agenticdays.com/speaker/manisha-de",company:"Swisscom",tagline:"Product Owner"}],qna_url:"https://www.agenticdays.com/q/18"},{id:"1252760",slug:"1252760-build-your-own-coding-agent",title:"Build your own Coding Agent",url:"https://www.agenticdays.com/session/1252760-build-your-own-coding-agent",format:"Talk",duration:"25 min",starts_at:"2026-11-20T15:20:00+01:00",ends_at:"2026-11-20T15:50:00+01:00",time:"Fri 20 Nov, 15:20-15:50",room:"Millennium",spotlight:!1,description:`Coding agents feel like magic: point one at a codebase, ask it to fix a bug, and it reads files, edits code, runs commands, and iterates until the task is done. But under the hood, the core ideas are surprisingly approachable.\r
\r
In this live-coding talk, we\u2019ll build a small coding agent from scratch and use it to demystify how tools like Claude Code or Lovable work. We\u2019ll look at the agent harness: the application layer that talks to the model, maintains context, exposes tools, interprets tool calls, etc.`,main_tools:"We're building it from scratch in TypeScript",topics:["MCP & Agent Protocols","AI Coding Tools","AI-Assisted Coding Practice","Software Architecture with AI"],speakers:[{name:"Max Gfeller",slug:"max-gfeller",url:"https://www.agenticdays.com/speaker/max-gfeller",company:"Lovable",tagline:"Technical Evangelist"}],qna_url:"https://www.agenticdays.com/q/31"},{id:"1247157",slug:"1247157-build-your-own-production-ready-agentic-apps",title:"Build Your Own Production-Ready Agentic Apps",url:"https://www.agenticdays.com/session/1247157-build-your-own-production-ready-agentic-apps",format:"Hands-On Session",duration:"75\u201390 min",starts_at:"2026-11-20T13:00:00+01:00",ends_at:"2026-11-20T14:15:00+01:00",time:"Fri 20 Nov, 13:00-14:15",room:"Studio 1",spotlight:!1,description:`Most agentic AI demos stop at "hello world." In this lab, attendees will build a real agentic application using Quarkus + LangChain4j (Java) and iteratively evolve it from a simple LLM client into a production-minded workflow.\r
\r
We start with a minimal baseline, then add tool/function calling, external capability integration with MCP, and most of all, multi-step agentic orchestration patterns. Along the way, we validate each step with observable behavior, discuss trade-offs, and compare agentic vs non-agentic alternatives to avoid over-engineering.\r
\r
By the end, every participant leaves with a running Java project and a practical blueprint they can reuse in their own team: when to use agents, when not to, how to structure tools and orchestrate agents, and how to keep reliability, safety, and cost in check.`,main_tools:"Quarkus LangChain4j",topics:["Agent Frameworks","Multi-Agent Architectures"],speakers:[{name:"Kevin Dubois",slug:"kevin-dubois",url:"https://www.agenticdays.com/speaker/kevin-dubois",company:"IBM",tagline:"Senior Principal Developer Advocate \xB7 Java Champion \xB7 CNCF DevEx TAG Lead"},{name:"Dimitris Andreadis",slug:"dimitris-andreadis",url:"https://www.agenticdays.com/speaker/dimitris-andreadis",company:"Red Hat / IBM",tagline:"Sr. Engineering Director, Quarkus & Cloud Native Runtimes"}],qna_url:"https://www.agenticdays.com/q/19"},{id:"1286299",slug:"1286299-building-authorization-for-agentic-rag-systems",title:"Building Authorization for Agentic RAG Systems",url:"https://www.agenticdays.com/session/1286299-building-authorization-for-agentic-rag-systems",format:"Talk",duration:"25 min",starts_at:"2026-11-20T11:00:00+01:00",ends_at:"2026-11-20T11:30:00+01:00",time:"Fri 20 Nov, 11:00-11:30",room:"Studio 4",spotlight:!1,description:`We\u2019ve recently seen the rise of Retrieval Augmented Generation (RAG) systems. With the proliferation of AI Agents & LLMs in Enterprise, the next step in the evolution is Agentic RAG. But for widespread adoption of Agentic RAG systems in enterprise there\u2019s one piece of the puzzle that needs to be solved and that\u2019s fine-grained authorization.\r
\r
This talk is a deep dive into how modern authorization systems can ensure that AI Agents have access only to authorized data. The talk will look at why the Google Zanzibar model of authorization which uses Relationship-Based Access Control (ReBAC) is well suited to handle dynamic, relationship-driven authorization at scale. The talk explains how the Google Zanzibar system works under the hood, and how to apply it to Agentic RAG with techniques such as pre-filteration and post-filteration. As a bonus also learn about how OpenAI achieves authorization at scale with ChatGPT Apps.\r
\r
The talk will also include a live coding demo implementing authorization for Agentic RAG using Open Source tools such as Weaviate, Langchain, and SpiceDB.`,main_tools:"LangChain",topics:["RAG & Knowledge Retrieval","AI Security","Enterprise AI Adoption & Governance"],speakers:[{name:"Sohan Maheshwar",slug:"sohan-maheshwar",url:"https://www.agenticdays.com/speaker/sohan-maheshwar",company:"AuthZed",tagline:"Developer Advocate Lead \xB7 AAIF Ambassador"}],qna_url:"https://www.agenticdays.com/q/20"},{id:"1305346",slug:"1305346-can-we-trust-autonomous-agents-panel-discussion",title:"Can We Trust Autonomous Agents? (Panel Discussion)",url:"https://www.agenticdays.com/session/1305346-can-we-trust-autonomous-agents-panel-discussion",format:"Panel Discussion",duration:"25 min",starts_at:"2026-11-20T15:20:00+01:00",ends_at:"2026-11-20T15:50:00+01:00",time:"Fri 20 Nov, 15:20-15:50",room:"Studio 3 AB",spotlight:!1,description:"Panel discussion. How much autonomy can we hand to agents in production \u2014 and what has to be in place before we do? Guardrails, evaluation, observability and human oversight, discussed by practitioners from different corners of the field. Moderated by Maxim Salnikov. Further panelists to be announced.",topics:["AI Evals & Testing","AI Observability & Production","AI Ethics & Responsibility"],speakers:[{name:"Maxim Salnikov",slug:"maxim-salnikov",url:"https://www.agenticdays.com/speaker/maxim-salnikov",company:"Microsoft",tagline:"Senior Solution Engineer, AI-Native Dev Tools \xB7 Panel Moderator"},{name:"Jose Luis Latorre Millas",slug:"jose-luis-latorre-millas",url:"https://www.agenticdays.com/speaker/jose-luis-latorre-millas",company:"Swiss Life",tagline:"Agentic & Software Architect \xB7 AgentEval creator \xB7 Microsoft AI MVP"},{name:"Serena Sensini",slug:"serena-sensini",url:"https://www.agenticdays.com/speaker/serena-sensini",company:"TheRedCode",tagline:"CTO @ Welyk \xB7 Innovation Leader @ Dedalus \xB7 author \xB7 Panelist"},{name:"Markus Leutwyler",slug:"markus-leutwyler",url:"https://www.agenticdays.com/speaker/markus-leutwyler",company:"VisionPilot",tagline:"Founder \xB7 Hardware \xB7 Software \xB7 People"},{name:"Lize Raes",slug:"lize-raes",url:"https://www.agenticdays.com/speaker/lize-raes",company:"LangChain4j",tagline:"Software Engineer"}],qna_url:"https://www.agenticdays.com/q/21"},{id:"1294885",slug:"1294885-deploying-agents-at-scale-what-enterprise-adoption-actually",title:"Deploying Agents at Scale: What Enterprise Adoption Actually Looks Like",url:"https://www.agenticdays.com/session/1294885-deploying-agents-at-scale-what-enterprise-adoption-actually",format:"Talk",duration:"25 min",starts_at:"2026-11-20T10:20:00+01:00",ends_at:"2026-11-20T10:50:00+01:00",time:"Fri 20 Nov, 10:20-10:50",room:"Studio 4",spotlight:!1,description:`I spend my days inside enterprise AI rollouts \u2014 standing up the platforms, watching what agents do at scale, and cleaning up after them. This talk covers where the deployments and the research line up, and where they contradict each other.\r
\r
The evidence doesn't agree with itself. METR's 2025 randomized controlled trial found experienced developers 19% slower with AI while they believed they were 20% faster \u2014 and its 2026 follow-up couldn't measure the gap cleanly, because heavy AI users now refuse to work without it. Google's DORA study of nearly 5,000 practitioners says strong engineering foundations protect you. Faros AI's telemetry across 22,000 developers found the opposite: throughput up 66%, incidents per pull request up 243%, in mature organizations that should have been safe. I'll show you which read holds up.\r
\r
Then the enterprise layer \u2014 JPMorgan's 200,000-employee rollout, and the MIT-versus-Wharton disagreement over whether any of this returns money. The organizations pulling ahead didn't buy a better model. They redesigned the work around the tool, added guardrails, and measured against a real baseline before scaling. AI amplifies whatever system it lands in. Point it at a mess and it produces the mess faster.\r
\r
You will leave with a clear understanding of what levers increase enterprise AI success, and what levers cause it to fail.`,main_tools:'Not tool-specific \u2014 this is a cross-tool evidence keynote. If a single value is mandatory, enter "Claude Code" as the most representative agentic coding tool referenced; otherwise list the studied tools (Cursor, GitHub Copilot, Claude Code).',topics:["Lessons Learned & Anti-Patterns","AI-Assisted Coding Practice","Enterprise AI Adoption & Governance","AI Strategy & Value Realization"],speakers:[{name:"Michael Rishi Forrester",slug:"michael-rishi-forrester",url:"https://www.agenticdays.com/speaker/michael-rishi-forrester",company:"Accenture",tagline:"AI for Leadership & Organizations Lead \xB7 1M+ engineers trained"}],qna_url:"https://www.agenticdays.com/q/24"},{id:"1274697",slug:"1274697-from-a-rag-demo-to-a-rag-system",title:"From a RAG Demo to a RAG System",url:"https://www.agenticdays.com/session/1274697-from-a-rag-demo-to-a-rag-system",format:"Lightning Talk",duration:"7 min",starts_at:"2026-11-20T12:28:00+01:00",ends_at:"2026-11-20T12:35:00+01:00",time:"Fri 20 Nov, 12:28-12:35",room:"Millennium",spotlight:!1,description:`Building a RAG demo is easy. Making it reliable is a different challenge.\r
\r
Real-world RAG systems face messy documents, stale and unauthorized sources, and answers that sound convincing but lack sufficient evidence. This lightning talk shows where RAG breaks beyond the demo, why vector search alone isn\u2019t enough, and how a simple contract \u2014 Find \u2192 Verify \u2192 Observe \u2014 makes retrieval, evidence and failures visible.\r
\r
And as RAG becomes agentic, a new question emerges: when should an agent search again, and when does it have enough to answer?`,main_tools:"Production RAG Systems, Vector Databases, Embeddings, Hybrid Search, Evals",topics:["Lessons Learned & Anti-Patterns","RAG & Knowledge Retrieval"],speakers:[{name:"Richa Dinesh Tamhane",slug:"richa-dinesh-tamhane",url:"https://www.agenticdays.com/speaker/richa-dinesh-tamhane",company:"amnis",tagline:"Data & AI Scientist"}],qna_url:"https://www.agenticdays.com/q/25"},{id:"1301641",slug:"1301641-from-copilot-to-the-dark-factory",title:"From Copilot to the Dark Factory",url:"https://www.agenticdays.com/session/1301641-from-copilot-to-the-dark-factory",format:"Talk",duration:"25 min",starts_at:"2026-11-20T13:00:00+01:00",ends_at:"2026-11-20T13:30:00+01:00",time:"Fri 20 Nov, 13:00-13:30",room:"Studio 4",spotlight:!0,spotlight_by:{name:"re:cinq",url:"https://re-cinq.com/"},description:`AI coding tools make developers faster, but they do not automatically make organisations ship faster. PR volume rises, review queues grow, tests weaken, and context, security, and platform bottlenecks become visible. AI does not remove the constraint; it moves it.\r
\r
This talk combines the AI Adoption Ladder with the emerging architecture of software factories. It shows how teams progress from first licences to agentic delivery, and the six systems required to scale safely: orchestration, sandboxes, context, validation, governance, and learning loops.\r
\r
Attendees will learn how to identify their next bottleneck and build beyond \u201Ceveryone gets Copilot.\u201D\r
\r
Licences create activity. Software factories create durable advantage.`,topics:["Multi-Agent Architectures","Spec-Driven & Agentic SDLC","Enterprise AI Adoption & Governance"],speakers:[{name:"Pini Reznik",slug:"pini-reznik",url:"https://www.agenticdays.com/speaker/pini-reznik",company:"re:cinq",tagline:"CEO & Co-Founder \xB7 AI Native Transformations"}],qna_url:"https://www.agenticdays.com/q/26"},{id:"1309668",slug:"1309668-fsi-transformation-at-scale-sovereignty-compliance",title:"FSI Transformation at Scale: Sovereignty, Compliance & Production Realities",url:"https://www.agenticdays.com/session/1309668-fsi-transformation-at-scale-sovereignty-compliance",format:"Talk",duration:"25 min",starts_at:"2026-11-20T15:20:00+01:00",ends_at:"2026-11-20T15:50:00+01:00",time:"Fri 20 Nov, 15:20-15:50",room:"Studio 6",spotlight:!0,spotlight_by:{name:"Atlassian",url:"https://www.atlassian.com/"},description:`Every financial institution aspires to become 'AI-native.' They promise hyper-automated engineering, autonomous workflows, and unprecedented speed. But when faced with strict data sovereignty, evolving compliance, and complex production environments, how realistic is this goal? Is an AI-native FSI truly achievable, or just a regulatory pipe dream?\r
\r
In this candid fireside chat, Sergiu Petean (EMEA Field CTO at Atlassian) is joined by Baris Yorganci (Head of Division at BarmeniaGothaer, a leading German insurance group) to dissect the true pace and feasibility of AI-driven transformation. Moving beyond traditional retail banking, they explore actionable lessons from across the broader ecosystem\u2014including high-velocity neo-banks, digital insurers, and innovative MGAs.\r
Rather than treating regulation as an insurmountable barrier, Sergiu and his guest will map out how leading institutions turn data sovereignty, compliance requirements, and production constraints into structural guardrails for safe, scalable AI innovation.`,speakers:[{name:"Sergiu Petean",slug:"sergiu-petean",url:"https://www.agenticdays.com/speaker/sergiu-petean",company:"Atlassian",tagline:"EMEA Field CTO"},{name:"Baris Yorganci",slug:"baris-yorganci",url:"https://www.agenticdays.com/speaker/baris-yorganci",company:"BarmeniaGothaer",tagline:"Head of Division"}],qna_url:"https://www.agenticdays.com/q/27"},{id:"1244188",slug:"1244188-hands-on-spec-driven-development",title:"Hands-on Spec-Driven Development",url:"https://www.agenticdays.com/session/1244188-hands-on-spec-driven-development",format:"Hands-On Session",duration:"75\u201390 min",starts_at:"2026-11-20T10:20:00+01:00",ends_at:"2026-11-20T12:00:00+01:00",time:"Fri 20 Nov, 10:20-12:00",room:"Studio 1",spotlight:!1,description:`In this lab, participants will learn how to develop software efficiently and systematically using Spec-driven Development (SDD) and the AI \u200B\u200BUnified Process (AIUP).\r
\r
Using a practical example project, participants will be guided step by step through the entire development process: from the initial vision and requirements specification to implementation.\r
\r
The lab demonstrates how to effectively use AI-powered tools to generate executable software from clearly defined specifications. We will use a simple Java stack to focus on the specifications. Participants will work with an AI agent, integrate skills and MCPs, and experience firsthand how these tools accelerate the development process.\r
\r
This lab is designed for developers who want to understand how structured specifications and AI tools work together to create high-quality software.\r
\r
Required infrastructure:\r
- AI agent (Claude Code recommended, Copilot CLI, Codex, or others possible)\r
- Java 25\r
- An editor or IDE`,main_tools:"Claude Code but other agents are possible as well",topics:["Lessons Learned & Anti-Patterns","Spec-Driven & Agentic SDLC"],speakers:[{name:"Simon Martinelli",slug:"simon-martinelli",url:"https://www.agenticdays.com/speaker/simon-martinelli",company:"martinelli.ch",tagline:"Programming Architect \xB7 Java Champion \xB7 Oracle ACE Pro"}],qna_url:"https://www.agenticdays.com/q/28"},{id:"1385732",slug:"1385732-how-do-you-know-your-coding-agent-actually-helps",title:"How do you know your coding agent actually helps?",url:"https://www.agenticdays.com/session/1385732-how-do-you-know-your-coding-agent-actually-helps",format:"Talk",duration:"25 min",starts_at:"2026-11-20T16:00:00+01:00",ends_at:"2026-11-20T16:30:00+01:00",time:"Fri 20 Nov, 16:00-16:30",room:"Studio 4",spotlight:!0,spotlight_by:{name:"LogicStar",url:"https://logicstar.ai/"},description:`Agents now write most PRs in many teams. Often another agent reviews them. Yet almost nothing merges without a human, because nobody can show where the agents are safe to trust. Writing code got automated. Trusting it didn't.\r
\r
Public benchmarks won't tell you. On real applications, agents resolve 38.6% fewer issues than on popular libraries (SWA-Bench, ICML 2025). Your git history is a better benchmark. Every revert, hotfix and follow-up fix points back to a PR, the agent that wrote it and the review that missed it.\r
\r
This talk shows how to measure coding and review agents on what actually shipped, with data from real teams. 1 in 5 PRs that a review agent graded "perfect" still introduced a bug. On 78% of PRs, human review changed nothing. We trace one escaped bug end to end, go through the four failure modes behind most review misses, and give you a recipe to run on one repo next week.`,main_tools:"Tool-agnostic: any coding or code review agent (Claude Code, GitHub Copilot, Cursor, review bots), measured against your own git history",topics:["Lessons Learned & Anti-Patterns","AI Evals & Testing","AI-Assisted Coding Practice","Spec-Driven & Agentic SDLC"],speakers:[{name:"Boris Paskalev",slug:"boris-paskalev",url:"https://www.agenticdays.com/speaker/boris-paskalev",tagline:"CEO & founder of LogicStar.ai"}],qna_url:"https://www.agenticdays.com/q/50"},{id:"1282535",slug:"1282535-human-in-the-loop-is-you-a-guide-to-working-with-multiple",title:"Human-in-the-Loop Is You: A Guide to Working With Multiple Coding Agents",url:"https://www.agenticdays.com/session/1282535-human-in-the-loop-is-you-a-guide-to-working-with-multiple",format:"Talk",duration:"25 min",starts_at:"2026-11-20T16:00:00+01:00",ends_at:"2026-11-20T16:30:00+01:00",time:"Fri 20 Nov, 16:00-16:30",room:"Millennium",spotlight:!1,description:`"Human-in-the-loop" is supposed to mean a person makes the judgment calls a model can't. In practice, when Claude Code, Codex, and Cursor are all open at once, it usually means something dumber: copy-pasting the same bug report into three different chat windows, re-explaining context each time, and losing track of which agent already tried which fix.\r
\r
Is a meta-harness the solution? This talk digs into what that would actually take: combining multiple coding agents into a single workflow rather than three separate ones, setting spend caps and approval policies rather than manually babysitting every action, and sharing a live session so a teammate can review or co-drive rather than screen-sharing a terminal.\r
\r
Expect a live demo, a few lessons learned, and a verdict on whether it works.`,main_tools:"Claude Code, Codex, Omnigent",topics:["Lessons Learned & Anti-Patterns","AI Coding Tools"],speakers:[{name:"Oleksandra Bovkun",slug:"oleksandra-bovkun",url:"https://www.agenticdays.com/speaker/oleksandra-bovkun",company:"Databricks",tagline:"Developer Advocate"}],qna_url:"https://www.agenticdays.com/q/29"},{id:"1305338",slug:"1305338-just-build-orchestrating-your-agents-with-codex",title:"Just Build \u2014 Orchestrating your Agents with Codex",url:"https://www.agenticdays.com/session/1305338-just-build-orchestrating-your-agents-with-codex",format:"Hands-On Session",duration:"75\u201390 min",starts_at:"2026-11-20T10:20:00+01:00",ends_at:"2026-11-20T12:00:00+01:00",time:"Fri 20 Nov, 10:20-12:00",room:"Studio 3 AB",spotlight:!1,description:"A hands-on lab guided by OpenAI: see how you can orchestrate your agents with Codex. Follow along step by step on your own laptop, from first prompt to a working agent-driven workflow. Setup instructions and requirements will be shared before the event.",main_tools:"OpenAI Codex",topics:["Agent Frameworks","AI Coding Tools","AI-Assisted Coding Practice"],speakers:[{name:"Abbas Tutcuoglu",slug:"abbas-tutcuoglu",url:"https://www.agenticdays.com/speaker/abbas-tutcuoglu",company:"OpenAI",tagline:"Go-to-Market, Strategic AI Deployment \xB7 Caltech"},{name:"Jules Giroul",slug:"jules-giroul",url:"https://www.agenticdays.com/speaker/jules-giroul",company:"OpenAI",tagline:"Software Engineer \xB7 University of Edinburgh"}],qna_url:"https://www.agenticdays.com/q/30"},{id:"1241628",slug:"1241628-migration-or-migraine-what-no-one-tells-you-about-using-llms",title:"Migration or migraine: What no one tells you about using LLMs",url:"https://www.agenticdays.com/session/1241628-migration-or-migraine-what-no-one-tells-you-about-using-llms",format:"Talk",duration:"25 min",starts_at:"2026-11-20T09:20:00+01:00",ends_at:"2026-11-20T09:50:00+01:00",time:"Fri 20 Nov, 09:20-09:50",room:"Studio 3 AB",spotlight:!1,description:`We had a task stuck forever in our backlog. A task so simple, yet so tedious that our team just kept postponing it. Even our bored intern didn't want to do it. The task: upgrade each framework used in our managed authentication solution to the latest version, without ruining our test coverage or breaking production. A task perfect for AI. Or so we thought...\r
\r
As it turns out, some coding tasks lend themselves to AI application better than others. Is a one-time migration involving ~100 components of a system actively used in production a good use case? How does the hype compare to the reality?\r
\r
In this talk, I'll share our experience using LLMs to perform a seemingly simple but surprisingly challenging migration. I'll discuss what went as expected, what surprised us, share the takeaways related to developer experience, efficiency, and quality, and go over what both skeptics and optimists get wrong about AI.`,main_tools:"Research reviews, not limited to specific LLMs or technloogy.",topics:["Lessons Learned & Anti-Patterns","Spec-Driven & Agentic SDLC"],speakers:[{name:"Warren Parad",slug:"warren-parad",url:"https://www.agenticdays.com/speaker/warren-parad",company:"Authress",tagline:"CTO & Security Specialist \xB7 AWS Community Builder"}],qna_url:"https://www.agenticdays.com/q/32"},{id:"1312296",slug:"1312296-millions-of-exceptions-a-day-getting-bedrock-and-agentcore",title:"Millions of exceptions a day: getting Bedrock and AgentCore right",url:"https://www.agenticdays.com/session/1312296-millions-of-exceptions-a-day-getting-bedrock-and-agentcore",format:"Talk",duration:"25 min",starts_at:"2026-11-20T09:20:00+01:00",ends_at:"2026-11-20T09:50:00+01:00",time:"Fri 20 Nov, 09:20-09:50",room:"Millennium",spotlight:!0,spotlight_by:{name:"copebit",url:"https://www.copebit.ch/"},description:`BLP's agentic AI platform resolves millions of exceptions every day across hundreds of enterprise customers in more than 40 countries. copebit builds and operates the AWS foundation that powers it. This talk explores both sides of the equation: the agentic AI platform and the infrastructure that makes it enterprise-ready.\r
\r
First, the production system. Rather than relying on document retrieval, BLP mirrors each customer\u2019s ERP environment \u2014 including master data, business rules, and process logic \u2014 in the BLP Digital Twin. More than 300 pre-trained AI agents operate against this structured model through 30+ standard ERP integrations. The most appropriate AI model is selected for each processing step through Amazon Bedrock, leveraging Anthropic\u2019s Claude Sonnet and Claude Opus models alongside Gemma, with all inference running in European AWS regions.\r
\r
Then, the lessons for your own implementation. Drawing on our experience building AWS foundations for Swiss enterprises and operating agentic AI platforms on Amazon Bedrock and Amazon Bedrock AgentCore, we explore four architectural decisions that determine whether an enterprise agent platform can withstand a security review:\r
\r
How user identity and permissions propagate through to target systems.\r
How to manage the size of the tool catalog without compromising context efficiency or cost.\r
How to ensure endpoint stability as the platform evolves.\r
How to make the registration of new tools a governed, reviewed change.\r
\r
For each decision, we share the architectural trade-offs, practical lessons, and failure modes encountered along the way.\r
\r
Attendees will leave with a real-world perspective on what it takes to build, secure, and operate agentic AI at enterprise scale.`,main_tools:"Amazon Bedrock, Amazon Bedrock AgentCore",topics:["Multi-Agent Architectures","AI Security","Enterprise AI Adoption & Governance"],speakers:[{name:"Marco Kuendig",slug:"marco-kuendig",url:"https://www.agenticdays.com/speaker/marco-kuendig",company:"copebit",tagline:"CTO"},{name:"Davide Walder",slug:"davide-walder",url:"https://www.agenticdays.com/speaker/davide-walder",company:"BLP Digital",tagline:"Head of Cloud Infrastructure"}],qna_url:"https://www.agenticdays.com/q/11"},{id:"1305345",slug:"1305345-nooa-inside-nvidia-s-object-oriented-agent-harness",title:"NOOA: Inside NVIDIA's Object-Oriented Agent Harness",url:"https://www.agenticdays.com/session/1305345-nooa-inside-nvidia-s-object-oriented-agent-harness",format:"Talk",duration:"25 min",starts_at:"2026-11-20T11:40:00+01:00",ends_at:"2026-11-20T12:10:00+01:00",time:"Fri 20 Nov, 11:40-12:10",room:"Millennium",spotlight:!1,description:`An agent is only as good as the harness around the model. At NVIDIA, Matt's team built NOOA (NVIDIA Labs Object-Oriented Agents), an open-source research preview that treats the agent as a Python object: typed input/output, pass by reference on live objects, code as action, programmable loop engineering, explicit object state, and model-callable harness APIs.\r
\r
Matt walks through these six capabilities, shows how NOOA runs inside NVIDIA OpenShell, and what they buy you in numbers: 82.2% on SWE-bench Verified, 50.2% mean RHAE on ARC-AGI-3 and 86.8% on CyberGym L1 - the top-scoring open-source agent there, at roughly half the token cost of comparable harnesses.`,main_tools:"NOOA",topics:["Agent Frameworks"],speakers:[{name:"Matt Staats",slug:"matt-staats",url:"https://www.agenticdays.com/speaker/matt-staats",company:"NVIDIA",tagline:"Principal Engineer \xB7 Agentic AI evaluation & harnesses"}],qna_url:"https://www.agenticdays.com/q/33"},{id:"1279518",slug:"1279518-ocr-at-swiss-post-the-case-for-small-language-models",title:"OCR at Swiss Post: The Case for Small Language Models",url:"https://www.agenticdays.com/session/1279518-ocr-at-swiss-post-the-case-for-small-language-models",format:"Talk",duration:"25 min",starts_at:"2026-11-20T14:20:00+01:00",ends_at:"2026-11-20T14:50:00+01:00",time:"Fri 20 Nov, 14:20-14:50",room:"Studio 4",spotlight:!1,description:`Everyone reaches for a frontier LLM by default \u2014 and then the bill, the latency, and the data-privacy questions arrive. But public routing research (RouteLLM, Microsoft's Hybrid LLM) shows that 40\u201360% of typical queries can be handled by a smaller model with no measurable drop in quality \u2014 and for specialized, bounded tasks, that number easily explodes toward the vast majority.\r
\r
At Swiss Post, we put this to the test. We built a centrally self-hosted platform around a Small Language Model, served with vLLM on Kubernetes with GPUs, using OCR as our real-world case. The result: lower cost, better latency, full data sovereignty \u2014 and far less operational complexity than the "you can't self-host in production" narrative suggests.\r
\r
This talk makes the case for SLMs as a serious production strategy, not a compromise. We share a candid comparison of cost, accuracy, and performance against LLM alternatives, how we kept sensitive citizen data fully in-house, and the architecture that makes self-hosting genuinely approachable.\r
\r
The core message: an LLM is not a Swiss Army knife. For a huge share of real workloads, a specialized, self-hosted SLM is cheaper, faster, more private \u2014 and easier to ship than you'd expect. We close with the question that reframed our thinking: how many of your requests actually need an LLM in the end?`,main_tools:"vLLM \u2014 the inference engine at the core of the self-hosted SLM platform (served on Kubernetes with GPUs).",topics:["Local AI, Inference & Open Models","Software Architecture with AI","Enterprise AI Adoption & Governance"],speakers:[{name:"Huriel Reichel",slug:"huriel-reichel",url:"https://www.agenticdays.com/speaker/huriel-reichel",company:"Swiss Post",tagline:"ML Platform Engineer & MLOps Product Owner"},{name:"Oliver Hofmann",slug:"oliver-hofmann",url:"https://www.agenticdays.com/speaker/oliver-hofmann",company:"Swiss Post",tagline:"Data Scientist"}],qna_url:"https://www.agenticdays.com/q/34"},{id:"1363422",slug:"1363422-open-agentic-ai-without-lock-in-the-ibm-approach-with",title:"Open Agentic AI Without Lock-In: The IBM Approach with  watsonx Orchestrate",url:"https://www.agenticdays.com/session/1363422-open-agentic-ai-without-lock-in-the-ibm-approach-with",format:"Talk",duration:"25 min",starts_at:"2026-11-20T14:20:00+01:00",ends_at:"2026-11-20T14:50:00+01:00",time:"Fri 20 Nov, 14:20-14:50",room:"Studio 6",spotlight:!0,spotlight_by:{name:"TD SYNNEX",url:"https://www.tdsynnex.com/"},description:`Agentic AI is transforming how organizations automate work, but many solutions come with platform dependencies and vendor lock-in. In this session, discover how IBM watsonx Orchestrate enables an open approach to Agentic AI, allowing organizations to connect agents, models, data sources, and business applications across their existing technology landscape.\r
\r
Learn how to build AI-powered workflows that span multiple systems, leverage the best models for each task, and orchestrate work across the enterprise without being tied to a single vendor ecosystem. Through practical demonstrations and real-world examples, you'll see how watsonx Orchestrate helps organizations move from AI assistants to autonomous, business-driven agents that deliver measurable outcomes.`,main_tools:"watsonx Orchestrate",topics:["Multi-Agent Architectures"],speakers:[{name:"Domenic Largiade\u0300r",slug:"domenic-largiader",url:"https://www.agenticdays.com/speaker/domenic-largiader",company:"IBM",tagline:"Partner Technical Specialist, Data & AI"}],qna_url:"https://www.agenticdays.com/q/47"},{id:"1286069",slug:"1286069-reachy-mini-giving-a-body-to-ai",title:"Reachy mini: Giving a body to AI",url:"https://www.agenticdays.com/session/1286069-reachy-mini-giving-a-body-to-ai",format:"Talk",duration:"25 min",starts_at:"2026-11-20T08:45:00+01:00",ends_at:"2026-11-20T09:10:00+01:00",time:"Fri 20 Nov, 08:45-09:10",room:"Millennium",spotlight:!1,description:`Large language models can reason, generate code, and hold conversations. But they remain trapped behind screens. If AI is to become truly useful in our daily environments, it needs a body, a presence, and natural ways to interact with us.\r
In this talk, I\u2019ll present Reachy Mini, an open and developer-friendly robot designed to explore what embodied AI can look like today. I\u2019ll walk through how we are building its core software stack, from multimodal perception to real-time voice interaction, and why voice is emerging as the most natural interface for physical AI. We will look at how speech-to-speech pipelines, local inference, and modular backends allow Reachy Mini to move beyond scripted demos and into responsive, real-world interaction.\r
You will leave with a clearer understanding of what it takes to give AI a body, why voice-first interfaces matter, and how open tools can accelerate the next generation of interactive robotics.`,main_tools:"Reachy Mini",topics:["Local AI, Inference & Open Models","Voice & Multimodal Agents","Industry & Vertical Use Cases"],speakers:[{name:"Andr\xE9s Marafioti",slug:"andres-marafioti",url:"https://www.agenticdays.com/speaker/andres-marafioti",company:"Hugging Face",tagline:"Multimodal Research Lead \xB7 SmolVLM"}],qna_url:"https://www.agenticdays.com/q/35"},{id:"1269550",slug:"1269550-running-secure-agents-at-scale",title:"Running Secure Agents at Scale",url:"https://www.agenticdays.com/session/1269550-running-secure-agents-at-scale",format:"Lightning Talk",duration:"7 min",starts_at:"2026-11-20T12:36:00+01:00",ends_at:"2026-11-20T12:43:00+01:00",time:"Fri 20 Nov, 12:36-12:43",room:"Millennium",spotlight:!1,description:`Building secure and scalable agents at scale is hard. From multi-tenancy and noisy-neighbor risk to tool access and data boundaries, teams need more than a prompt and a container image\u2014they need a deliberate execution model.\r
\r
At Adobe, we are running agents on the CNCF Agent Sandbox project: a sandboxed runtime for AI agents that manages their full lifecycle\u2014provision, execute, observe, and tear down\u2014while keeping workloads isolated from the rest of the platform. Sandboxes enforce resource limits, reduce blast radius, and give operators a consistent place to apply policy.\r
We have applied optimizations so that development teams can run agents without the need to understand the sandboxing mechanism or worry much about the increased complexity of single tenant agent execution.\r
\r
In this session we\u2019ll share the problems we hit running agents for real customers, how Agent Sandbox addresses them, and what we\u2019d do differently next time.`,main_tools:"CNCF Agent Sandbox for Kubernetes",topics:["Lessons Learned & Anti-Patterns","Agent Frameworks","AI Security","AI   Community, Open Source & Education"],speakers:[{name:"Alex Carol",slug:"alex-carol",url:"https://www.agenticdays.com/speaker/alex-carol",company:"Adobe",tagline:"Software Development Engineer"}],qna_url:"https://www.agenticdays.com/q/36"},{id:"1281529",slug:"1281529-securing-mcp-in-the-enterprise-oauth-token-exchange-and",title:"Securing MCP in the Enterprise: OAuth, Token Exchange, and Real-World CI/CD Integration",url:"https://www.agenticdays.com/session/1281529-securing-mcp-in-the-enterprise-oauth-token-exchange-and",format:"Lightning Talk",duration:"7 min",starts_at:"2026-11-20T12:44:00+01:00",ends_at:"2026-11-20T12:51:00+01:00",time:"Fri 20 Nov, 12:44-12:51",room:"Millennium",spotlight:!1,description:`This talk shares a hands-on experience integrating the Model Context Protocol (MCP) into an enterprise CI/CD on-prem toolchain (SonarQube, Bitbucket, Jenkins, Backstage, OKD, YouTrack etc..) using a centralized identity provider (Keycloak).\r
\r
At ELCA we built a remote MCP server (Quarkus) acting as a common layer between tools and agents, focusing on authentication and delegation flows rather than just connectivity. To enable end-to-end trust, we also developed extensions/plugins for Jenkins, Bitbucket, and SonarQube to validate and consume JWT Bearer tokens issued through these flows without the need of static API keys.\r
\r
The session dives into practical usage of modern OAuth / OpenID Connect features in a multi-system environment: Client ID Metadata Documents (CIMD), token exchange (internal \u2194 external), JWT bearer grants, and identity brokering. We\u2019ll explain how agents securely access downstream services across trust boundaries.\r
\r
Expect concrete architecture, protocol flows and lessons learned when bringing MCP into an existing platform without rewriting everything.`,main_tools:"Quarkus MCP / Keycloak",topics:["MCP & Agent Protocols"],speakers:[{name:"Valentin Delaye",slug:"valentin-delaye",url:"https://www.agenticdays.com/speaker/valentin-delaye",company:"ELCA",tagline:"Platform Engineer \xB7 Jenkins Governance Board"}],qna_url:"https://www.agenticdays.com/q/37"},{id:"1322247",slug:"1322247-specs-first-code-later-or-how-i-build-software-in-the-ai",title:"Specs first, code later (or how I build software in the AI-DLC era)",url:"https://www.agenticdays.com/session/1322247-specs-first-code-later-or-how-i-build-software-in-the-ai",format:"Talk",duration:"25 min",starts_at:"2026-11-20T11:40:00+01:00",ends_at:"2026-11-20T12:10:00+01:00",time:"Fri 20 Nov, 11:40-12:10",room:"Studio 4",spotlight:!0,spotlight_by:{name:"AWS",url:"https://aws.amazon.com/"},description:`As AI-driven software development became part of our lives, writing specs before touching anything code-related became the natural thing to do. A structured specification captures what the system should do, how it should behave at the edges, and what "done" looks like. Then AI takes it from there. The workflow behind this is AI-DLC, a three-phase lifecycle: Inception (AI proposes the architecture), Construction (AI generates and iterates on code from your spec), and Operations (AI monitors and patches). Developers steer at each gate, but AI does the building. In this session I'll walk through a real project built this way, show where a good spec caught bugs that tests missed, and demonstrate when rewriting your spec becomes faster than fixing the code. You'll leave with best practices for writing specs, practical rules to follow, and a workflow you can try on your next feature.`,speakers:[{name:"Alessandra Pasini",slug:"alessandra-pasini",url:"https://www.agenticdays.com/speaker/alessandra-pasini",company:"AWS",tagline:"Solutions Architect"}],qna_url:"https://www.agenticdays.com/q/38"},{id:"1267144",slug:"1267144-the-agentic-lab-factory-how-i-stopped-writing-labs-and",title:"The Agentic Lab Factory: How I Stopped Writing Labs and Started Reviewing Them",url:"https://www.agenticdays.com/session/1267144-the-agentic-lab-factory-how-i-stopped-writing-labs-and",format:"Talk",duration:"25 min",starts_at:"2026-11-20T09:20:00+01:00",ends_at:"2026-11-20T09:50:00+01:00",time:"Fri 20 Nov, 09:20-09:50",room:"Studio 6",spotlight:!1,description:`For years, getting new contributor SMEs to write labs was an uphill battle. The learning curve was too steep, the standards too specific, and the creation cost too high. What would it take to change that equation with AI?\r
\r
This is the story of how I built an agentic lab creation pipeline using Claude: starting by analyzing 40 existing labs to make tacit knowledge explicit, generating our own style guidelines, and feeding those back as the generative substrate. The result is a loop that implements, tests, scores pedagogy, and incorporates reviewer feedback autonomously, only stopping when every gate passes.\r
\r
The key insight: AI is a catalyst, not a creator. It amplified what was already good, our labs, our standards, our criteria. Without that foundation, the output would have been slop. With it, the bottleneck dissolved.\r
\r
New contributors who previously found the learning curve too steep can now prompt their copilot agent of choice and produce a lab that meets our standards, complete with pregenerated Credly badge templates. You'll leave with a framework for thinking about agentic workflows in terms of deterministic vs. non-deterministic gates, and a concrete example of what happens when the loop mostly runs itself.`,main_tools:"Copilot, Claude, GitHub, Instruqt",topics:["AI Evals & Testing","AI-Assisted Coding Practice"],speakers:[{name:"Rapha\xEBl Pinson",slug:"raphael-pinson",url:"https://www.agenticdays.com/speaker/raphael-pinson",company:"Isovalent",tagline:"Cilium Alchemist \xB7 CNCF Ambassador \xB7 eBPF & Kubernetes"}],qna_url:"https://www.agenticdays.com/q/39"},{id:"1283743",slug:"1283743-the-next-frontier-agentic-collaborative-environments",title:"The next frontier - agentic collaborative environments.",url:"https://www.agenticdays.com/session/1283743-the-next-frontier-agentic-collaborative-environments",format:"Talk",duration:"25 min",starts_at:"2026-11-20T13:40:00+01:00",ends_at:"2026-11-20T14:10:00+01:00",time:"Fri 20 Nov, 13:40-14:10",room:"Millennium",spotlight:!1,description:`AI-agentic developer tools like Claude Code or GitHub Copilot CLI have emerged as a primary way to develop software over the last few months. However, agentic engineering has been a solo story so far - one developer with a dozen agents, moving forward at warp speed. But coding without thoughtful planning, understanding of the problems, and team alignment is just a waste of time and tokens. When everyone on a team is directing agents alone in their personal CLI tools with no shared context, you get duplicate work, conflicting changes, poorly-designed solutions, surprise features nobody else agreed to build, and everyone pulling in different directions. \r
\r
At the same time, serious software development is a collaborative problem-solving - you need multiple perspectives, types of expertise and various backgrounds to build great things together. We need agentic environments that enable this, where people can plan together and share the same context with AI agents driven by the team, rather than by individual developers.\r
\r
In this talk, I'll demo how we've addressed these design challenges in Ace, a multiplayer agent environment from GitHub Next that enables real-time collaboration, proactive agents, and sandboxed micro VMs for rapid prototyping and exploration, fostering a more engaging teamwork experience.`,topics:["AI Product    UX & Human-Agent Collaboration"],speakers:[{name:"Krzysztof Cie\u015Blak",slug:"krzysztof-cieslak",url:"https://www.agenticdays.com/speaker/krzysztof-cieslak",company:"GitHub Next",tagline:"Developer Tools Researcher \xB7 Copilot co-creator \xB7 Ionide"}],qna_url:"https://www.agenticdays.com/q/40"},{id:"1317570",slug:"1317570-tie-a-metric-to-every-release",title:"Tie a Metric to Every Release",url:"https://www.agenticdays.com/session/1317570-tie-a-metric-to-every-release",format:"Talk",duration:"25 min",starts_at:"2026-11-20T11:00:00+01:00",ends_at:"2026-11-20T11:30:00+01:00",time:"Fri 20 Nov, 11:00-11:30",room:"Studio 6",spotlight:!0,spotlight_by:{name:"Flagsmith",url:"https://www.flagsmith.com/"},description:"AI writes more of our code every week, which means we ship a lot more than we used to. But we don't fly blind: every release goes out behind a flag, tied to a metric that tells us whether to continue the rollout or take a step back. I'll do it live: ship a feature to prod, roll it out to a slice of traffic, watch the metric move, and decide on the spot. No redeploy, no rollback pipeline. This is how we run Flagsmith on Flagsmith, and it's how our customers ship their code: behind a flag, against a metric. Faster releases, fewer surprises.",main_tools:"Flagsmith",topics:["Lessons Learned & Anti-Patterns","AI Observability & Production","AI Coding Tools"],speakers:[{name:"Matt Elwell",slug:"matt-elwell",url:"https://www.agenticdays.com/speaker/matt-elwell",company:"Flagsmith",tagline:"Co-Founder & CTO"}],qna_url:"https://www.agenticdays.com/q/41"},{id:"1305182",slug:"1305182-watching-agents-for-trouble",title:"Watching Agents for Trouble",url:"https://www.agenticdays.com/session/1305182-watching-agents-for-trouble",format:"Talk",duration:"25 min",starts_at:"2026-11-20T13:40:00+01:00",ends_at:"2026-11-20T14:10:00+01:00",time:"Fri 20 Nov, 13:40-14:10",room:"Studio 4",spotlight:!1,description:`Once an agent can touch a database, send email, or deploy something, the interesting question shifts from "is the answer good" to "how much damage can it do, and would anyone notice." And the damage often isn't one forbidden step. It's a few allowed ones that add up.\r
\r
This talk is about the practices that catch it. The core one is boring on purpose: mark every moment an agent crosses a line, like reading something untrusted, handing off to another agent, or doing something with real permissions. Write those moments down as plain facts and carry them through every hop. Once they're facts, traces turn into something you can actually search. An attack like "read a poisoned input, then leak data" stops being a scary string to hunt for and becomes "this happened, then that happened."\r
\r
The reassuring takeaway: little of this is new. Most of it is engineering discipline we already have, a lot of it falls straight out of ordinary Go best practices, and it's no accident memory-safe languages are becoming the default choice for building agents.`,topics:["Multi-Agent Architectures","AI Observability & Production","AI Security"],speakers:[{name:"Natalie Pistunovich",slug:"natalie-pistunovich",url:"https://www.agenticdays.com/speaker/natalie-pistunovich",company:"JFrog",tagline:"Developer Advocate \xB7 Google Developer Expert for Go"}],qna_url:"https://www.agenticdays.com/q/42"},{id:"1290786",slug:"1290786-we-rolled-out-github-copilot-how-do-we-prove-it-helps",title:"We Rolled Out GitHub Copilot\u2026 How Do We Prove It Helps?",url:"https://www.agenticdays.com/session/1290786-we-rolled-out-github-copilot-how-do-we-prove-it-helps",format:"Talk",duration:"25 min",starts_at:"2026-11-20T13:00:00+01:00",ends_at:"2026-11-20T13:30:00+01:00",time:"Fri 20 Nov, 13:00-13:30",room:"Studio 6",spotlight:!1,description:`AI-assisted development tools like GitHub Copilot are being adopted quickly. Many organizations have already rolled them out - or are seriously considering doing so. Adoption often looks promising: licenses are paid for, developers are using the tool, and usage metrics look encouraging.\r
\r
And then the inevitable question comes up: how do we prove this actually helps?\r
\r
This is not a new problem. Every major shift in how we build software - Agile, DevOps, CI/CD - has raised similar questions about productivity and effectiveness. AI-assisted development is simply the latest change in how work gets done, not a completely new measurement challenge.\r
\r
In this talk, we\u2019ll explore different ways to reason about the impact of GenAI assistants across the Software Development Life Cycle (SDLC), drawing on existing measurement approaches such as DORA and the SPACE framework, and examining how Copilot\u2019s tool-level metrics can add context.\r
\r
Rather than focusing on generated lines of code, we\u2019ll show how Copilot metrics can be used to understand adoption and improve enablement - when interpreted correctly.\r
\r
This session is for software architects, engineering leaders and senior developers who want to actively improve the adoption of AI-assisted development and apply a structured framework to measure its impact across the SDLC.`,topics:["Lessons Learned & Anti-Patterns","AI Coding Tools","Enterprise AI Adoption & Governance","AI Strategy & Value Realization"],speakers:[{name:"Yuliya Khadasevich",slug:"yuliya-khadasevich",url:"https://www.agenticdays.com/speaker/yuliya-khadasevich",company:"Eneco",tagline:"Engineering Manager \xB7 Microsoft MVP"},{name:"Liuba Gonta",slug:"liuba-gonta",url:"https://www.agenticdays.com/speaker/liuba-gonta",company:"Xebia",tagline:"IT Consultant \xB7 GitHub Trainer \xB7 Microsoft MCT"}],qna_url:"https://www.agenticdays.com/q/43"},{id:"1310498",slug:"1310498-welcome-session",title:"Welcome Session",url:"https://www.agenticdays.com/session/1310498-welcome-session",format:"Lightning Talk",duration:"7 min",starts_at:"2026-11-20T08:30:00+01:00",ends_at:"2026-11-20T08:45:00+01:00",time:"Fri 20 Nov, 08:30-08:45",room:"Millennium",spotlight:!1,description:"Doors open, coffee's poured \u2014 let's kick things off. Join Barbara and Jonas Felix, co-founders of letsboot, as they welcome you to Agentic Engineering Days Zurich 2026, set the stage for two days of hands-on agentic engineering, and share a few practical tips for getting the most out of the sessions, hallway conversations, and hands-on labs ahead.",speakers:[{name:"Jonas Felix",slug:"jonas-felix",url:"https://www.agenticdays.com/speaker/jonas-felix",company:"Co-Founder Agentic Days / letsboot.ch",tagline:"Trainer"},{name:"Barbara Felix",slug:"barbara-felix",url:"https://www.agenticdays.com/speaker/barbara-felix",company:"Co-Founder Agentic Days / letsboot.ch",tagline:"CEO"}],qna_url:"https://www.agenticdays.com/qna/1310498"},{id:"1287383",slug:"1287383-when-software-stops-being-deterministic-rethinking",title:"When Software Stops Being Deterministic: Rethinking Engineering Practices for AI-Native Systems",url:"https://www.agenticdays.com/session/1287383-when-software-stops-being-deterministic-rethinking",format:"Talk",duration:"25 min",starts_at:"2026-11-20T14:20:00+01:00",ends_at:"2026-11-20T14:50:00+01:00",time:"Fri 20 Nov, 14:20-14:50",room:"Millennium",spotlight:!1,description:`For decades, we've built software around a simple assumption: the same input produces the same output. If behavior changes, we can usually trace it back to a code change. We write tests, review diffs, deploy to staging, and rely on CI because software is fundamentally deterministic.\r
\r
LLM systems break that assumption.\r
\r
As you build with language models, behavior increasingly emerges from the interaction between prompts, retrieval, context, model choice, and evaluation\u2014not just the application code itself. Features can regress without a single line of business logic changing. A prompt tweak fixes one failure mode while introducing another. The engineering instincts that served us well for years don't disappear, but many of them stop being sufficient.\r
\r
This talk is about what that transition has actually looked like while building agentic systems at Typeform.\r
\r
Rather than presenting a polished architecture or a success story, I'll walk through real features we're building today - including the trade-offs, dead ends, and problems we still haven't solved. Each example highlights an engineering habit I had to rethink.\r
\r
I'll cover four practices that have become essential: continuous evaluation instead of relying on traditional test suites, trace-level observability instead of application logs alone, reviewing prompts and other AI artifacts as first-class engineering assets, and orchestrating systems whose components are inherently non-deterministic.\r
\r
The goal isn't to convince you that AI changes everything. It's to show which engineering principles still hold, which ones need to evolve, and the practical patterns we've found useful along the way.\r
\r
If you're already building LLM applications - or are about to start-this talk aims to save you from having to unlearn some of those lessons the hard way.`,main_tools:"LangChain, agentCore, Claude Code",topics:["Lessons Learned & Anti-Patterns","Multi-Agent Architectures","AI Evals & Testing","AI Observability & Production"],speakers:[{name:"Susanna Wong",slug:"susanna-wong",url:"https://www.agenticdays.com/speaker/susanna-wong",company:"Typeform",tagline:"Staff Engineer \xB7 Google Developer Expert"}],qna_url:"https://www.agenticdays.com/q/44"},{id:"1303929",slug:"1303929-you-can-t-ctrl-z-a-robot-coding-agents-in-embedded-systems",title:"You Can't Ctrl-Z a Robot: Coding Agents in Embedded Systems",url:"https://www.agenticdays.com/session/1303929-you-can-t-ctrl-z-a-robot-coding-agents-in-embedded-systems",format:"Talk",duration:"25 min",starts_at:"2026-11-20T11:40:00+01:00",ends_at:"2026-11-20T12:10:00+01:00",time:"Fri 20 Nov, 11:40-12:10",room:"Studio 6",spotlight:!1,description:`Coding agents work well in the terminal because feedback there costs nothing. Compiler errors, failing tests, stack traces, all of it arrives instantly and in writing, and the agent reads the message and tries again. As soon as code has to move something in the physical world, that stops working. Reality writes no error messages, and it has never had an undo.\r
\r
Embedded engineers dealt with this long before anyone talked about agents. They build simulators to fail in, they measure what actually happened instead of what was intended, and no change reaches the hardware without proof. We put a coding agent into that same loop and look at where it earns autonomy, where it has to be stopped, and why teams whose code never touches hardware run into the same problem with every irreversible action they automate.`,main_tools:"Renode, Claude Code",topics:["Lessons Learned & Anti-Patterns","AI Evals & Testing","AI-Assisted Coding Practice"],speakers:[{name:"Syrian Hadad",slug:"syrian-hadad",url:"https://www.agenticdays.com/speaker/syrian-hadad",company:"adesso Schweiz",tagline:"CTO \xB7 Lecturer BFH"},{name:"Alexander B\xFCchel",slug:"alexander-buechel",url:"https://www.agenticdays.com/speaker/alexander-buechel",company:"adesso Schweiz",tagline:"Team Lead, Embedded Software Engineering"}],qna_url:"https://www.agenticdays.com/q/45"},{id:"1256564",slug:"1256564-your-biggest-new-customer-can-t-see-pixels",title:"Your Biggest New Customer Can't See Pixels",url:"https://www.agenticdays.com/session/1256564-your-biggest-new-customer-can-t-see-pixels",format:"Talk",duration:"25 min",starts_at:"2026-11-20T14:20:00+01:00",ends_at:"2026-11-20T14:50:00+01:00",time:"Fri 20 Nov, 14:20-14:50",room:"Studio 3 AB",spotlight:!1,description:`For decades we've argued that accessibility is the right thing to do. The argument just got a lot easier, because your next customer probably isn't human.\r
\r
Whether you like it or not AI agents from are now browsing, comparing, and interacting on behalf of users. And here's the twist: they consume your site through the exact same accessibility tree screen readers do. Semantic HTML, proper labels, ARIA states, keyboard support, the same patterns that serve disabled users determine whether an agent can efficiently complete a checkout, fill a form, or even find your product.\r
\r
In this talk we'll look at how agents actually use the web, where they fail (and why those failures map to WCAG violations), and what web development teams should do today. If you've been waiting for a business case for accessibility that lands with execs, this is it.`,topics:["AI Product    UX & Human-Agent Collaboration","AI Ethics & Responsibility"],speakers:[{name:"Tim Damen",slug:"tim-damen",url:"https://www.agenticdays.com/speaker/tim-damen",company:"ABN AMRO",tagline:"Head of Frontend Platforms & Accessibility Lead"}],qna_url:"https://www.agenticdays.com/q/46"}]};var cc=`{"t":1795174108841,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174138783,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174168790,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174198791,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174228798,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174258793,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174288816,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174318809,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174348813,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174378825,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174408833,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174438832,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174468845,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174498846,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174529027,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174558849,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174588852,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174618866,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174648867,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174678882,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174708890,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174738894,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174768905,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174798923,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174828926,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174858930,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174888931,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174918941,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174948958,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795174978954,"rooms":{"millennium":{"level":"open","label":"Open","target":"1269550"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175008965,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175038971,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175068974,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175100399,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175128989,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175158997,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175189010,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175219017,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175249029,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175279039,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175309145,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175339059,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175369067,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175399071,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175429108,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175459079,"rooms":{"millennium":{"level":"open","label":"Open","target":"1281529"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175489115,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175519127,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175549109,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175579134,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175609129,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175639142,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175669146,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175699158,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175729169,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175759168,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175789175,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175819184,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175849189,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175879221,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175909207,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175939208,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175969240,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795175999221,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795176029239,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795176059255,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795176089256,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
{"t":1795176119257,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176149267,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176179287,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176209293,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176239306,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176269302,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176299323,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176329362,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"full","label":"Full","target":"1301641"},"studio6":{"level":"full","label":"Full","target":"1290786"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176359348,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"full","label":"Full","target":"1301641"},"studio6":{"level":"full","label":"Full","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176389342,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"full","label":"Full","target":"1301641"},"studio6":{"level":"full","label":"Full","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176419348,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"full","label":"Full","target":"1301641"},"studio6":{"level":"full","label":"Full","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176449352,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"full","label":"Full","target":"1301641"},"studio6":{"level":"full","label":"Full","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176479365,"rooms":{"millennium":{"level":"open","label":"Open","target":"1254403"},"studio4":{"level":"full","label":"Full","target":"1301641"},"studio6":{"level":"full","label":"Full","target":"1290786"},"studio3":{"level":"full","label":"Full","target":"1293601"},"studio1":{"level":"full","label":"Full","target":"1247157"}}}
{"t":1795176509372,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176539408,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176569394,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176599399,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176629419,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176659429,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176689434,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176719441,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176749449,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176779455,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176809467,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176839471,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176869490,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176899485,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176929496,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176959500,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795176989512,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177019517,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177049540,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177079532,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177109537,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177139545,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177169555,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177199570,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177229573,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177259584,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177289588,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177319580,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177349587,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177379593,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177409600,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177439609,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177469641,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177499627,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177529639,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177559637,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177589635,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177619658,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177649708,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177679673,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177709698,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177739678,"rooms":{"millennium":{"level":"running","label":"Running","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177769701,"rooms":{"millennium":{"level":"filling","label":"Filling (70-80%)","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177799752,"rooms":{"millennium":{"level":"filling","label":"Filling (70-80%)","target":"1254403"},"studio4":{"level":"running","label":"Running","target":"1301641"},"studio6":{"level":"running","label":"Running","target":"1290786"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177829700,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177859756,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177889704,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177919728,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177949706,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795177979711,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178009763,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178039768,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178069740,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178099737,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178129746,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"open","label":"Open","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178159749,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178189758,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178219805,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178249797,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178279770,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"filling","label":"Filling (70-80%)","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178309871,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178339795,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178369781,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178399779,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178429810,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178459827,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178489804,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178519831,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178549815,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178579797,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178609853,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178639838,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178669831,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178699833,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178729831,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178759833,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178789905,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178819858,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178849860,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178879871,"rooms":{"millennium":{"level":"open","label":"Open","target":"1283743"},"studio4":{"level":"open","label":"Open","target":"1305182"},"studio6":{"level":"full","label":"Full","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178909875,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178939865,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178969879,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795178999880,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179029885,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179059891,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179089953,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179119906,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179149904,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179179906,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179209911,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179239917,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179269931,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179299914,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179329921,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179359919,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179389934,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179419932,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179449944,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179479981,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179509941,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179539975,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179569958,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179599963,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179630002,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179660056,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179689982,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179720008,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179749974,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179779977,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179809993,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179839996,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179869988,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179900009,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179930007,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179960031,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795179990022,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180020104,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180050053,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180080041,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180110049,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180140078,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180170079,"rooms":{"millennium":{"level":"running","label":"Running","target":"1283743"},"studio4":{"level":"running","label":"Running","target":"1305182"},"studio6":{"level":"running","label":"Running","target":"1243798"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180200078,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180230053,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180260065,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180290078,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180320094,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180350076,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180383099,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180411158,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180440078,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180470099,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1293601"},"studio1":{"level":"running","label":"Running","target":"1247157"}}}
{"t":1795180500093,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"open","label":"Open","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180530088,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"open","label":"Open","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180560122,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"open","label":"Open","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180590122,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"open","label":"Open","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180620111,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"open","label":"Open","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180650135,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"open","label":"Open","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180680155,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180710140,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180740288,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180770152,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180800166,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180830194,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180860218,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180890254,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180920220,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180950225,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795180980222,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181010179,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181040215,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181070204,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181100189,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181130216,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181160196,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181190214,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181220247,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181250217,"rooms":{"millennium":{"level":"open","label":"Open","target":"1287383"},"studio4":{"level":"open","label":"Open","target":"1279518"},"studio6":{"level":"open","label":"Open","target":"1363422"},"studio3":{"level":"filling","label":"Filling (70-80%)","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181280210,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181310233,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181340221,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181370341,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181401284,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181430274,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181460268,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181490280,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181520254,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181550300,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181580263,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181610259,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181640282,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181670314,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181700286,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181730308,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181760320,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181790286,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181820292,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181850293,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181880324,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181910303,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181940326,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795181970343,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182000342,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182030337,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182060355,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182090363,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182120346,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182150359,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182180341,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182210377,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182240359,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182270445,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182300381,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182330395,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182360402,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182390385,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182420466,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182450419,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
{"t":1795182480397,"rooms":{"millennium":{"level":"running","label":"Running","target":"1287383"},"studio4":{"level":"running","label":"Running","target":"1279518"},"studio6":{"level":"running","label":"Running","target":"1363422"},"studio3":{"level":"running","label":"Running","target":"1256564"},"studio1":{"level":"open","label":"Open","target":"1251731"}}}
`;var Us="Europe/Zurich";var uc="https://raw.githubusercontent.com/wizzben/agenticdays-audience-flow/data/recording.jsonl",Ge=[{id:"millennium",name:"Millennium",short:"M",cap:650,floor:"main2"},{id:"studio4",name:"Studio 4",short:"S4",cap:120,floor:"n4"},{id:"studio6",name:"Studio 6",short:"S6",cap:60,floor:"n4"},{id:"studio3",name:"Studio 3",short:"S3",cap:100,floor:"n0"},{id:"studio1",name:"Studio 1",short:"S1",cap:60,floor:"main1"}],Xt=[{id:"century",name:"Century",short:"C",w:.3,floor:"main2"},{id:"hub2",name:"Hub 2",short:"H2",w:.4,floor:"main2"},{id:"hub4",name:"Hub 4",short:"H4",w:.3,floor:"n4"}],hc=["studio1","hub2","millennium","century","studio3","hub4","studio6","studio4"],dc={open:[.08,.7],filling:[.7,.95],full:[.95,1]},pc={open:12*6e4,filling:6*6e4,full:3*6e4},yo=5*6e4,Ns=15e4,fi=4*6e4,pn=18*6e4,qn={fill:.55,speed:.25,pressure:.2},fc=20*6e4,bo=200;function mc(i,e){let t=(i.format||"").toLowerCase();return e>bo?t.includes("lightning")?.35:.5:t.includes("hands")?.85:t.includes("panel")?.8:.68}function xo(i){if(i==null)return null;let e=String(i).toLowerCase().replace(/[^a-z0-9]+/g," ").trim();if(!e)return null;if(/\bmillennium\b/.test(e))return"millennium";if(/\bcentury\b/.test(e))return"century";let t=/\bstudio\s*([1-9])/.exec(e)||/\bs([1-9])\b/.exec(e)||/^studio([1-9])/.exec(e);if(t){let n="studio"+t[1];return Ge.some(s=>s.id===n)?n:null}if(t=/\bhub\s*([1-9])/.exec(e)||/^hub([1-9])/.exec(e),t){let n="hub"+t[1];return Xt.some(s=>s.id===n)?n:null}return null}var Th={open:"open","few seats left":"filling","no seats left":"full",started:"running"};function Rh(i,e){let t=typeof i=="string"?i.trim().toLowerCase():"";if(t==="open"||t==="filling"||t==="full"||t==="running")return t;let n=typeof e=="string"?e.trim().toLowerCase():"";return Th[n]||null}function wo(i){let e=[];if(typeof i=="string")for(let n of i.split(`
`)){let s=n.trim();if(s)try{e.push(JSON.parse(s))}catch{}}else Array.isArray(i)&&e.push(...i);let t=new Map;for(let n of e){if(!n||typeof n!="object")continue;let s=Number(n.t);if(!Number.isFinite(s)||s<1e12||s>4e12||!n.rooms||typeof n.rooms!="object")continue;let r={};for(let[o,a]of Object.entries(n.rooms)){let l=xo(o);!l||!a||typeof a!="object"||(r[l]={level:Rh(a.level,a.label),target:a.target!=null&&a.target!==""?String(a.target):null})}t.set(s,{t:s,rooms:r})}return[...t.values()].sort((n,s)=>n.t-s.t)}function gc(...i){let e=new Map;for(let t of i)for(let n of t||[])e.set(n.t,n);return[...e.values()].sort((t,n)=>t.t-n.t)}var Ch=[{label:"Coding Agents",terms:["coding agents?","claude code","codex","cursor","copilot","ai coding","agent harness","meta-harness","live-coding","codebase"]},{label:"Multi-Agent Orchestration",terms:["multi-agent","orchestrat\\w+","inter-agent","multiple coding agents","remote agents?","=A2A","agent2agent","another agent","multi-step"]},{label:"MCP & Protocols",terms:["=MCP","model context protocol","protocols?","=A2A","agent2agent","integrations?"]},{label:"Security & Sandboxing",terms:["secur\\w+","sandbox\\w*","oauth","tokens? exchange","authentication","permissions","untrusted","attack","isolated","trust boundaries","identity","secrets","blast radius","poisoned"]},{label:"Guardrails & Trust",terms:["guardrails","trust\\w*","oversight","autonomy","safety","safe","safely","approval","policy","policies","human-in-the-loop","control","damage"]},{label:"Observability & Tracing",terms:["observability","observ\\w+","traces?","trace-level","visible","logs","inspect","traffic","interception"]},{label:"Evals & Measurement",terms:["evaluation","benchmarks?","measur\\w+","metrics","=DORA","=SPACE","prove","impact","accuracy"]},{label:"Testing & Code Review",terms:["tests?","review\\w*","=PRs?","bugs?","validat\\w+","=CI","diffs","hotfix","revert"]},{label:"Production Reliability",terms:["production","production-\\w+","reliab\\w+","fail\\w*","robust","real-world","regress","deterministic","non-deterministic"]},{label:"Self-Hosted & Small Models",terms:["self-host\\w*","private","small language models?","=SLMs?","smaller model","=vLLM","open models","inference","hardware","=GPUs","in-house","run their own","roll your own"]},{label:"Platforms & Cloud-Native",terms:["kubernetes","cloud-native","platforms?","infrastructure","devops","ci/cd","deploy\\w*","runtime","workloads","lifecycle","gateways"]},{label:"Cost & Speed",terms:["costs?","latency","cheaper","faster","spend","tokens","bill","performance","speed","accelerat\\w+"]},{label:"Context & Retrieval",terms:["=RAG","retrieval","vector","search","context","evidence","documents","sources"]},{label:"Spec-Driven & Agile",terms:["spec-driven","specifications?","=SDD","waterfall","agile","iterat\\w+","=SDLC","software development life cycle","feedback","plan","planning","atomic tasks"]},{label:"Enterprise Adoption",terms:["adopt\\w+","organi[sz]ations?","enterprise","rolled out","licen[cs]es","enablement","transformation","leaders","business","execs","bottlenecks?"]},{label:"Compliance & Sovereignty",terms:["compliance","sovereignty","regulat\\w+","governance","data-privacy","sensitive","financial","lock-in","vendor"]},{label:"Team Collaboration",terms:["collaborat\\w+","shared context","together","teammate","teamwork","multiplayer","team alignment","humans?","co-drive"]},{label:"Agent Frameworks",terms:["=ADK","agent development kit","langchain4j","quarkus","=SDK","java","python","from scratch","frameworks?","build custom"]},{label:"Tools & Workflows",terms:["tool calls","tool access","tool definitions","tool/function calling","use tools","exposes tools","workflows?","autonomous","tasks?"]},{label:"Agents as Customers",terms:["customers?","shop\\w*","e-commerce","browsing","accessibility","checkout","conversational","assistants","web","catalogue"]}],Ih=4;function vc(i){return String(i||"").replace(/\s+/g," ").trim()}function Ph(i){return i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Oh(i){let e=i[0]==="=",t=e?i.slice(1):i;return new RegExp("(?<![A-Za-z0-9])(?:"+t+")(?![A-Za-z0-9])",e?"g":"gi")}function Lh(i){return((i.title||"")+". "+(i.desc??i.description??"")).replace(/[‐-―]/g,"-").replace(/\s+/g," ")}function _c(i,e,t={}){let n=t.lexicon||Ch,s=i&&i.length?i:e,r=Math.max(1,s.length),o=new Map;for(let d of[...s,...e])o.has(d.id)||o.set(d.id,Lh(d));let a=n.map(d=>({id:"t:"+Ph(d.label),label:d.label,short:d.label,kind:"extracted",terms:d.terms.map(f=>{let g=Oh(f),_=0;for(let m of s)g.lastIndex=0,g.test(o.get(m.id))&&_++;return{src:f,re:g,idf:Math.log(1+r/Math.max(1,_))}})})),l=new Map,c=new Map,u=new Map;for(let d of e){let f=o.get(d.id),g=[];for(let b of a){let y=0,v=new Map;for(let C of b.terms){let R=f.match(C.re);if(R){y+=(1+Math.log(R.length))*C.idf;for(let P of R)v.has(P.toLowerCase())||v.set(P.toLowerCase(),P)}}y>0&&g.push({id:b.id,score:y,evidence:[...v.values()]})}g.sort((b,y)=>y.score-b.score);let _=g.slice(0,Ih),m=_.reduce((b,y)=>b+y.score,0),p=_.map(b=>({id:b.id,w:b.score/m,evidence:b.evidence}));for(let b of p){c.set(b.id,(c.get(b.id)||0)+b.w),u.has(b.id)||u.set(b.id,new Map);for(let y of b.evidence)u.get(b.id).has(y.toLowerCase())||u.get(b.id).set(y.toLowerCase(),y)}l.set(d.id,p)}return{topics:a.map(d=>({id:d.id,label:d.label,short:d.short,kind:d.kind,potential:c.get(d.id)||0,evidence:[...(u.get(d.id)||new Map).values()]})).filter(d=>d.potential>0).sort((d,f)=>f.potential-d.potential),sessionTopics:l}}var mi=(i,e,t)=>i<e?e:i>t?t:i,Fs=i=>(i=mi(i,0,1),i*i*(3-2*i));function So(i){let e=Array.isArray(i)?i:i&&i.sessions||[],t=[];for(let n of e){if(!n||!n.id)continue;let s=Date.parse(n.starts_at),r=Date.parse(n.ends_at);!Number.isFinite(s)||!Number.isFinite(r)||t.push({id:String(n.id),title:n.title||"",format:n.format||"",start:s,end:r,roomId:xo(n.room),roomName:n.room||"",topicsRaw:(n.topics||[]).map(vc).filter(Boolean),desc:n.description||"",tools:n.main_tools||"",speakers:(n.speakers||[]).map(o=>o.name).filter(Boolean),company:(n.speakers||[]).map(o=>o.company).filter(Boolean),url:n.url||""})}return t.sort((n,s)=>n.start-s.start)}function ss(i,e=12,t=5){let s=(Array.isArray(i)?i:i&&i.sessions||[]).find(c=>typeof c.starts_at=="string"&&/^\d{4}-\d\d-\d\dT.*([+-]\d\d:\d\d|Z)$/.test(c.starts_at)),r=s?s.starts_at:"2026-11-20T09:00:00+01:00",o=r.slice(0,10),a=r.endsWith("Z")?"+00:00":r.slice(-6),l=Date.parse(`${o}T${String(e).padStart(2,"0")}:00:00${a}`);return{t0:l,t1:l+t*36e5}}function Nh(i){return i>=.95?"full":i>=.7?"filling":"open"}function Fh(i,e,t){let n=[],s=new Set(e.map(r=>r.id));for(let r of t){let o=r.rooms[i.roomId];if(!o||!o.level)continue;let a;if(o.target&&s.has(o.target))a=o.target===i.id;else{let l=null;for(let c of e)c.start-30*6e4<=r.t&&r.t<c.end&&(!l||c.start>l.start)&&(l=c);a=l&&l.id===i.id}a&&n.push({t:r.t,level:o.level})}return n}function kh(i,e,t){let{S:n,E:s}={S:i.start,E:i.end},r=t.priorPeak,o=g=>r*Fs((g-(n-pn))/(pn+2*6e4)),a=(g,_)=>{let m=e[g],p=e[g+1],[b,y]=dc[m.level],v;if(p&&p.t-m.t<=yo)v=Fs((_-m.t)/(p.t-m.t));else{let C=Math.max(0,(p?Math.min(_,p.t):_)-m.t);v=1-Math.exp(-C/pc[m.level])}return b+(y-b)*v},l=new Array(e.length),c=null;for(let g=0;g<e.length;g++)if(e[g].level==="running"){if(c==null){let _=g-1;for(;_>=0&&e[_].level==="running";)_--;c=_>=0?a(_,e[g].t):t.carryIn!=null?t.carryIn:r}l[g]=c}else c=null;let u=e.length?e[e.length-1]:null,h=g=>{if(!e.length)return o(g);if(g<e[0].t){let y=e[0],v=y.level==="running"?l[0]:a(0,y.t),C=Math.min(n-pn,y.t);return v*Fs((g-C)/Math.max(6e4,y.t-C))}let _=0,m=e.length-1;for(;_<m;){let y=_+m+1>>1;e[y].t<=g?_=y:m=y-1}let p=e[_],b=p.level==="running"?l[_]:a(_,g);return _===e.length-1&&g>u.t+Ns&&p.level!=="running"&&(b=Math.max(b,o(g))),b},d=()=>h(s),f=null;return g=>g>=s?(f==null&&(f=d()),f*(1-Fs((g-s)/fi))):h(g)}function yc(i,e){let t={open:0,filling:1,full:2,running:3};for(let n of i)if(t[n.level]>=t[e]&&n.level!=="running")return n.t;return null}function Bh(i,e,t,n){let s=yc(t,"full"),r=yc(t,"filling"),o=r??s,a=o==null?0:mi((i.start-o)/fc,0,1),l=e<=bo,c=t.some(g=>g.level==="full"),u=t.some(g=>g.level==="filling"),h=c?l?1:.5:u?l?.4:.2:0,d=qn.fill*n+qn.speed*a+qn.pressure*h,f=t.length?t[0]:null;return{score:d,speed:a,pressure:h,tFull:s,tFilling:r,unmet:c&&l,confident:!!f&&f.level!=="running"}}function zh(i,e){let t=i.map(o=>Math.max(0,Math.floor(o))),n=e-t.reduce((o,a)=>o+a,0),s=i.map((o,a)=>[Math.max(0,o)-t[a],a]).sort((o,a)=>a[0]-o[0]||o[1]-a[1]),r=0;for(;n>0;)t[s[r%s.length][1]]++,n--,r++;for(r=s.length-1;n<0;){let o=s[r][1];t[o]>0&&(t[o]--,n++),r=(r-1+s.length)%s.length}return t}function Ao(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Eo(i){let e=i.crowd??500,t=So(i.sessions),n=ss(i.sessions),s=i.t0??n.t0,r=i.t1??n.t1,o=t.filter(X=>X.start>=s&&X.start<r&&X.roomId&&Ge.some(ue=>ue.id===X.roomId)),a=(i.recording||[]).filter(X=>X&&Number.isFinite(X.t)),l=Math.floor((r-s)/3e4)+1,c=Object.fromEntries(Ge.map(X=>[X.id,X.cap])),u=a.map(X=>X.t),h=u.length?u[u.length-1]:null,d=u.length?u[0]:null,f=new Uint8Array(l);{let X=0;for(let ue=0;ue<l;ue++){let T=s+ue*3e4;for(;X<u.length-1&&u[X+1]<=T;)X++;let F=u[X],M=u[X+1],K=0;F!=null&&((Math.abs(T-F)<=Ns||M!=null&&T>F&&M-F<=yo&&T<M)&&(K=1),M!=null&&Math.abs(M-T)<=Ns&&(K=1)),f[ue]=K}}let g={};for(let X of Ge)g[X.id]=o.filter(ue=>ue.roomId===X.id);let _=new Map(o.map(X=>[X.id,Fh(X,g[X.roomId],a)])),{topics:m,sessionTopics:p}=_c(t.length?t:o,o),b=new Map(m.map((X,ue)=>[X.id,ue])),y=new Map,v=new Map;for(let X=0;X<2;X++){for(let T of o){let F=c[T.roomId],M=_.get(T.id),K=mc(T,F),J=p.get(T.id)||[];if(X===1&&J.length){let ae=0,re=0;for(let we of J)y.has(we.id)&&(ae+=y.get(we.id)*we.w,re+=we.w);re>0&&(K=mi(K*(1+.5*(ae/re-.5)),.15,1))}let de=g[T.roomId].indexOf(T),ie=de>0?g[T.roomId][de-1]:null,ye=null;ie&&T.start-ie.end<=15*6e4&&v.get(ie.id)?.hasData&&(ye=v.get(ie.id).finalFill);let pe=kh(T,M,{priorPeak:K,carryIn:ye}),E=M.length>0,w=0;for(let ae=T.start-pn;ae<=T.end;ae+=3e4)w=Math.max(w,pe(ae));let q=pe(T.end-1),te;if(E)te=Bh(T,F,M,w);else{let ae=K>=.95?F<=100?1:.5:0;te={score:qn.fill*K+qn.speed*.3+qn.pressure*ae,speed:.3,pressure:ae,unmet:!1,confident:!1,tFull:null,tFilling:null}}v.set(T.id,{curve:pe,hasData:E,peak:w,finalFill:q,pop:te,prior:K})}let ue=new Map;for(let T of o){let F=v.get(T.id);if(F.hasData)for(let M of p.get(T.id)||[]){let K=ue.get(M.id)||{s:0,w:0};K.s+=F.pop.score*M.w,K.w+=M.w,ue.set(M.id,K)}}y=new Map([...ue].map(([T,F])=>[T,mi(F.s/F.w,0,1)]))}let C=hc,R=C.length,P=Object.fromEntries(C.map((X,ue)=>[X,ue])),O=C.map(()=>new Float32Array(l)),A={};for(let X of Ge)A[X.id]=new Uint8Array(l);let x=new Float32Array(l),I=new Map(o.map(X=>[X.id,new Float32Array(l)])),z=new Map(o.map(X=>[X.id,new Uint8Array(l)])),k=new Map;for(let X of o){let ue=v.get(X.id),T=c[X.roomId],F=new Float32Array(l),M=new Float32Array(l);for(let K=0;K<l;K++){let J=s+K*3e4;F[K]=J<X.start-pn-10*6e4||J>X.end+fi+1e3?0:ue.curve(J)*T}for(let K=0;K<l;K++){let J=0,de=0;for(let ie=-2;ie<=2;ie++){let ye=K+ie;ye>=0&&ye<l&&(J+=F[ye],de++)}M[K]=J/de}k.set(X.id,M)}let V=Xt.reduce((X,ue)=>X+ue.w,0);for(let X=0;X<l;X++){let ue=s+X*3e4,T={},F=0;for(let ie of Ge)T[ie.id]=0;for(let ie of o){let ye=v.get(ie.id);if(ue<ie.start-pn-10*6e4||ue>ie.end+fi+1e3)continue;let pe=k.get(ie.id)[X];pe===0&&(ue<ie.start-pn-10*6e4||ue>ie.end+fi+1e3)||(T[ie.roomId]+=pe,I.get(ie.id)[X]=pe,z.get(ie.id)[X]=ye.hasData&&f[X]?1:0)}for(let ie of o){let ye=c[ie.roomId];if(T[ie.roomId]>ye){let pe=ye/T[ie.roomId];I.get(ie.id)[X]*=pe}}for(let ie of Ge)T[ie.id]>ie.cap&&(T[ie.id]=ie.cap),F+=T[ie.id];let M=e*(1-.06),K=F>M?M/F:1;x[X]=F-F*K;let J=0;for(let ie of Ge){let ye=T[ie.id]*K;O[P[ie.id]][X]=ye,J+=ye}for(let ie of o)I.get(ie.id)[X]*=K;let de=e-J;for(let ie of Xt)O[P[ie.id]][X]=de*ie.w/V;for(let ie of Ge){let ye=f[X];if(ye){let pe=g[ie.id].filter(E=>ue>=E.start-pn&&ue<=E.end+fi);pe.length&&pe.every(E=>!v.get(E.id).hasData)&&(ye=0)}A[ie.id][X]=ye}}let U=m.length,Y=m.map(()=>new Float32Array(l)),N=m.map(()=>new Float32Array(l)),L=m.map(()=>new Float32Array(l)),B=m.map(()=>new Float32Array(l));for(let X of o){let ue=p.get(X.id)||[],T=I.get(X.id),F=z.get(X.id);for(let M of ue){let K=b.get(M.id);if(K==null)continue;let J=Y[K],de=N[K],ie=L[K],ye=B[K];for(let pe=0;pe<l;pe++){let E=T[pe]*M.w;if(E===0)continue;J[pe]+=E,F[pe]||(ie[pe]+=E);let w=E*3e4/6e4;de[pe]+=w,F[pe]||(ye[pe]+=w)}}}for(let X=0;X<U;X++){let ue=0,T=0;for(let F=0;F<l;F++)ue+=N[X][F],N[X][F]=ue,T+=B[X][F],B[X][F]=T}let Z=X=>X.reduce((ue,T)=>{for(let F=0;F<l;F++)T[F]>ue&&(ue=T[F]);return ue},1e-9),ee=e,he=Ao(20261120),ge=Array.from({length:ee},(X,ue)=>ue);for(let X=ee-1;X>0;X--){let ue=Math.floor(he()*(X+1));[ge[X],ge[ue]]=[ge[ue],ge[X]]}let $=new Int32Array(ee);ge.forEach((X,ue)=>{$[X]=ue});let ne=new Int8Array(ee*l),fe=C.map(()=>new Int16Array(l)),oe=new Array(R+1);for(let X=0;X<l;X++){let ue=zh(C.map((T,F)=>O[F][X]),ee);oe[0]=0;for(let T=0;T<R;T++)oe[T+1]=oe[T]+ue[T],fe[T][X]=ue[T];for(let T=0;T<ee;T++){let F=$[T],M=0;for(;F>=oe[M+1];)M++;ne[T*l+X]=M}}let _e=o.map(X=>{let ue=v.get(X.id),T=c[X.roomId];return{...X,cap:T,topics:p.get(X.id)||[],hasData:ue.hasData,pop:ue.pop,peakFill:ue.peak,peakCount:ue.peak*T,finalFill:ue.finalFill,prior:ue.prior,samples:_.get(X.id).length,points:_.get(X.id),curve:ue.curve}}),Re={t0:s,t1:r,K:l,step:3e4,crowd:ee,sessions:_e,rooms:Ge,hubs:Xt,locIds:C,topics:m,counts:O,intCounts:fe,roomRec:A,overflow:x,covered:f,loc:ne,topicNow:Y,topicCum:N,topicProjNow:L,topicProjCum:B,topicMaxNow:Z(Y),topicMaxCum:Z(N),lastSample:h,firstSample:d,nSamples:a.length,samples:a,byRoom:g};return Re.at=X=>Hh(Re,X),Re.levelAt=(X,ue)=>Vh(Re,X,ue),Re}function Hh(i,e){let t=mi((e-i.t0)/i.step,0,i.K-1),n=Math.floor(t),s=Math.min(i.K-1,n+1),r=t-n,o={};for(let l of i.rooms){let c=i.counts[i.locIds.indexOf(l.id)];o[l.id]={count:c[n]*(1-r)+c[s]*r,fill:(c[n]*(1-r)+c[s]*r)/l.cap,rec:!!i.roomRec[l.id][r<.5?n:s]}}let a={};for(let l of i.hubs){let c=i.counts[i.locIds.indexOf(l.id)];a[l.id]={count:c[n]*(1-r)+c[s]*r}}return{t:e,rooms:o,hubs:a,covered:!!i.covered[r<.5?n:s],overflow:i.overflow[n]*(1-r)+i.overflow[s]*r}}function Vh(i,e,t){let n=mi(Math.round((t-i.t0)/i.step),0,i.K-1);if(i.roomRec[e][n]){let l=i.samples,c=0,u=l.length-1,h=-1;for(;c<=u;){let d=c+u>>1;l[d].t<=t+2e4?(h=d,c=d+1):u=d-1}for(let d=h;d>=0&&t-l[d].t<10*6e4;d--){let f=l[d].rooms[e];if(f&&f.level)return{level:f.level,rec:!0}}}let s=i.locIds.indexOf(e),r=i.rooms.find(l=>l.id===e).cap,o=i.counts[s][n]/r;return i.sessions.find(l=>l.roomId===e&&t>=l.start&&t<l.end)?{level:"running",rec:!1}:{level:Nh(o),rec:!1,idle:o<.05}}var Gh={open:"Open",filling:"Few seats left",full:"No seats left",running:"Started"};function xc(i,e={}){let t=ss(i),n=e.from??t.t0+20*6e4,s=e.to??t.t0+4.75*36e5,r=Ao(e.seed??7),o=So(i).filter(h=>h.start>=t.t0&&h.roomId),a={};for(let h of o){let d=Ge.find(g=>g.id===h.roomId).cap,f=r();e.popularity&&e.popularity[h.id]!=null?f=e.popularity[h.id]:d>100&&(f=.15+f*.65),a[h.id]=f}let l=h=>h>=.85?{fill:-26,full:-14}:h>=.7?{fill:-14,full:-3}:h>=.5?{fill:-8,full:null}:h>=.3?{fill:-3,full:null}:{fill:null,full:null},c=[],u=e.gaps?[t.t0+2.6*36e5,t.t0+2.6*36e5+12*6e4]:null;for(let h=n;h<=s;h+=3e4){if(u&&h>=u[0]&&h<u[1]||e.gaps&&r()<.05)continue;let d={};for(let f of Ge){let g=o.filter(p=>p.roomId===f.id),_=g.find(p=>p.end>h)||g[g.length-1];if(!_)continue;let m="open";if(h>=_.end)m="open";else if(h>=_.start)m="running";else{let p=l(a[_.id]),b=(_.start-h)/6e4;p.full!=null&&b<=-p.full?m="full":p.fill!=null&&b<=-p.fill&&(m="filling")}d[f.id]={level:m,label:Gh[m],target:_.id}}c.push({t:h,rooms:d})}return c}var hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wh=0,wc=1,Xh=2;var ku=1,qh=2,yn=3,zn=0,It=1,zt=2,Fn=0,Fi=1,Mc=2,Sc=3,Ac=4,Yh=5,ti=100,Zh=101,$h=102,Kh=103,Jh=104,jh=200,Qh=201,ed=202,td=203,la=204,ca=205,nd=206,id=207,sd=208,rd=209,od=210,ad=211,ld=212,cd=213,ud=214,ua=0,ha=1,da=2,Vi=3,pa=4,fa=5,ma=6,ga=7,Fl=0,hd=1,dd=2,kn=0,pd=1,fd=2,md=3,gd=4,vd=5,_d=6,yd=7;var Bu=300,Gi=301,Wi=302,va=303,_a=304,ao=306,ya=1e3,ii=1001,ba=1002,Ft=1003,bd=1004;var ks=1005;var rn=1006,To=1007;var si=1008;var Mn=1009,zu=1010,Hu=1011,xs=1012,kl=1013,ri=1014,on=1015,Ps=1016,Bl=1017,zl=1018,Xi=1020,Vu=35902,Gu=1021,Wu=1022,Jt=1023,Xu=1024,qu=1025,ki=1026,qi=1027,Hl=1028,Vl=1029,Yu=1030,Gl=1031;var Wl=1033,_r=33776,yr=33777,br=33778,xr=33779,xa=35840,wa=35841,Ma=35842,Sa=35843,Aa=36196,Ea=37492,Ta=37496,Ra=37808,Ca=37809,Ia=37810,Pa=37811,Oa=37812,La=37813,Da=37814,Ua=37815,Na=37816,Fa=37817,ka=37818,Ba=37819,za=37820,Ha=37821,wr=36492,Va=36494,Ga=36495,Zu=36283,Wa=36284,Xa=36285,qa=36286;var Mr=2300,Ya=2301,Ro=2302,Ec=2400,Tc=2401,Rc=2402;var xd=3200,wd=3201;var Xl=0,Md=1,Nn="",Ct="srgb",Qi="srgb-linear",lo="linear",Qe="srgb";var gi=7680;var Cc=519,Sd=512,Ad=513,Ed=514,$u=515,Td=516,Rd=517,Cd=518,Id=519,Za=35044,ql=35048;var Ic="300 es",xn=2e3,Sr=2001,Sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=1234567,Bi=Math.PI/180,ws=180/Math.PI;function an(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Yl(i,e){return(i%e+e)%e}function Pd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Od(i,e,t){return i!==e?(t-i)/(e-i):0}function vs(i,e,t){return(1-t)*i+t*e}function Ld(i,e,t,n){return vs(i,e,1-Math.exp(-t*n))}function Dd(i,e=1){return e-Math.abs(Yl(i,e*2)-e)}function Ud(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Nd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Fd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kd(i,e){return i+Math.random()*(e-i)}function Bd(i){return i*(.5-Math.random())}function zd(i){i!==void 0&&(Pc=i);let e=Pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hd(i){return i*Bi}function Vd(i){return i*ws}function Gd(i){return(i&i-1)===0&&i!==0}function Wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ku={DEG2RAD:Bi,RAD2DEG:ws,generateUUID:an,clamp:ft,euclideanModulo:Yl,mapLinear:Pd,inverseLerp:Od,lerp:vs,damp:Ld,pingpong:Dd,smoothstep:Ud,smootherstep:Nd,randInt:Fd,randFloat:kd,randFloatSpread:Bd,seededRandom:zd,degToRad:Hd,radToDeg:Vd,isPowerOfTwo:Gd,ceilPowerOfTwo:Wd,floorPowerOfTwo:Xd,setQuaternionFromProperEuler:qd,normalize:je,denormalize:Kt},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],y=s[4],v=s[7],C=s[2],R=s[5],P=s[8];return r[0]=o*_+a*b+l*C,r[3]=o*m+a*y+l*R,r[6]=o*p+a*v+l*P,r[1]=c*_+u*b+h*C,r[4]=c*m+u*y+h*R,r[7]=c*p+u*v+h*P,r[2]=d*_+f*b+g*C,r[5]=d*m+f*y+g*R,r[8]=d*p+f*v+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Co=new He;function Ju(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Ar("canvas");return i.style.display="block",i}var Oc={};function ms(i){i in Oc||(Oc[i]=!0,console.warn(i))}function Zd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $d(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kd(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ye={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qe&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?lo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lc=[.64,.33,.3,.6,.15,.06],Dc=[.2126,.7152,.0722],Uc=[.3127,.329],Nc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Qi]:{primaries:Lc,whitePoint:Uc,transfer:lo,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Dc,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:Lc,whitePoint:Uc,transfer:Qe,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Dc,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});var vi,$a=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=Ar("canvas")),vi.width=e.width,vi.height=e.height;let n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,Er=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Io(s[o].image)):r.push(Io(s[o]))}else r=Io(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jd=0,Ot=class i extends Sn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ii,s=ii,r=rn,o=si,a=Jt,l=Mn,c=i.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=an(),this.name="",this.source=new Er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Bu;Ot.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(f+1)/2,C=(p+1)/2,R=(u+d)/4,P=(h+_)/4,O=(g+m)/4;return y>v&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=P/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=O/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=O/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends Sn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ot(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Er(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Ka{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Tr=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*_,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let C=Math.sqrt(y),R=Math.atan2(C,p*b);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}let v=a*b;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Po=new D,kc=new jt,En=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qt):qt.fromBufferAttribute(r,o),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),zs.subVectors(this.max,rs),_i.subVectors(e.a,rs),yi.subVectors(e.b,rs),bi.subVectors(e.c,rs),In.subVectors(yi,_i),Pn.subVectors(bi,yi),Zn.subVectors(_i,bi);let t=[0,-In.z,In.y,0,-Pn.z,Pn.y,0,-Zn.z,Zn.y,In.z,0,-In.x,Pn.z,0,-Pn.x,Zn.z,0,-Zn.x,-In.y,In.x,0,-Pn.y,Pn.x,0,-Zn.y,Zn.x,0];return!Oo(t,_i,yi,bi,zs)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,_i,yi,bi,zs))?!1:(Hs.crossVectors(In,Pn),t=[Hs.x,Hs.y,Hs.z],Oo(t,_i,yi,bi,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fn=[new D,new D,new D,new D,new D,new D,new D,new D],qt=new D,Bs=new En,_i=new D,yi=new D,bi=new D,In=new D,Pn=new D,Zn=new D,rs=new D,zs=new D,Hs=new D,$n=new D;function Oo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$n.fromArray(i,r);let a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Qd=new En,os=new D,Lo=new D,Hn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);let t=os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(Lo)),this.expandByPoint(os.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new D,Do=new D,Vs=new D,On=new D,Uo=new D,Gs=new D,No=new D,oi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Vs),a=On.dot(this.direction),l=-On.dot(Vs),c=On.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Do).addScaledVector(Vs,d),f}intersectSphere(e,t){mn.subVectors(e.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,s,r){Uo.subVectors(t,e),Gs.subVectors(n,e),No.crossVectors(Uo,Gs);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);let l=a*this.direction.dot(Gs.crossVectors(On,Gs));if(l<0)return null;let c=a*this.direction.dot(Uo.cross(On));if(c<0||l+c>o)return null;let u=-a*On.dot(No);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,n){let s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Ln.crossVectors(n,Ut),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Ln.crossVectors(n,Ut)),Ln.normalize(),Ws.crossVectors(Ut,Ln),s[0]=Ln.x,s[4]=Ws.x,s[8]=Ut.x,s[1]=Ln.y,s[5]=Ws.y,s[9]=Ut.y,s[2]=Ln.z,s[6]=Ws.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],y=n[7],v=n[11],C=n[15],R=s[0],P=s[4],O=s[8],A=s[12],x=s[1],I=s[5],z=s[9],k=s[13],V=s[2],U=s[6],Y=s[10],N=s[14],L=s[3],B=s[7],Z=s[11],ee=s[15];return r[0]=o*R+a*x+l*V+c*L,r[4]=o*P+a*I+l*U+c*B,r[8]=o*O+a*z+l*Y+c*Z,r[12]=o*A+a*k+l*N+c*ee,r[1]=u*R+h*x+d*V+f*L,r[5]=u*P+h*I+d*U+f*B,r[9]=u*O+h*z+d*Y+f*Z,r[13]=u*A+h*k+d*N+f*ee,r[2]=g*R+_*x+m*V+p*L,r[6]=g*P+_*I+m*U+p*B,r[10]=g*O+_*z+m*Y+p*Z,r[14]=g*A+_*k+m*N+p*ee,r[3]=b*R+y*x+v*V+C*L,r[7]=b*P+y*I+v*U+C*B,r[11]=b*O+y*z+v*Y+C*Z,r[15]=b*A+y*k+v*N+C*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,y=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,C=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,R=t*b+n*y+s*v+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return e[0]=b*P,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*P,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*P,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*P,e[4]=y*P,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*P,e[8]=v*P,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*P,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*P,e[12]=C*P,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*P,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*P,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,b=l*c,y=l*u,v=l*h,C=n.x,R=n.y,P=n.z;return s[0]=(1-(_+p))*C,s[1]=(f+v)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(g+y)*P,s[9]=(m-b)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yt.copy(this);let c=1/r,u=1/o,h=1/a;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=xn){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===xn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Sr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xn){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,_;if(a===xn)g=(o+r)*h,_=-2*h;else if(a===Sr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xi=new D,Yt=new et,ep=new D(0,0,0),tp=new D(1,1,1),Ln=new D,Ws=new D,Ut=new D,Bc=new et,zc=new jt,Qt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},np=0,Hc=new D,wi=new jt,gn=new et,Xs=new D,as=new D,ip=new D,sp=new jt,Vc=new D(1,0,0),Gc=new D(0,1,0),Wc=new D(0,0,1),Xc={type:"added"},rp={type:"removed"},Mi={type:"childadded",child:null},Fo={type:"childremoved",child:null},yt=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Qt,n=new jt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new He}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(as,Xs,this.up):gn.lookAt(Xs,as,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(gn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rp),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zt=new D,vn=new D,ko=new D,_n=new D,Si=new D,Ai=new D,qc=new D,Bo=new D,zo=new D,Ho=new D,Vo=new ht,Go=new ht,Wo=new ht,bn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zt.subVectors(e,t),s.cross(Zt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zt.subVectors(s,t),vn.subVectors(n,t),ko.subVectors(e,t);let o=Zt.dot(Zt),a=Zt.dot(vn),l=Zt.dot(ko),c=vn.dot(vn),u=vn.dot(ko),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Vo.setScalar(0),Go.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(e,t),Go.fromBufferAttribute(e,n),Wo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vo,r.x),o.addScaledVector(Go,r.y),o.addScaledVector(Wo,r.z),o}static isFrontFacing(e,t,n,s){return Zt.subVectors(n,t),vn.subVectors(e,t),Zt.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Zt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Si.subVectors(s,n),Ai.subVectors(r,n),Bo.subVectors(e,n);let l=Si.dot(Bo),c=Ai.dot(Bo);if(l<=0&&c<=0)return t.copy(n);zo.subVectors(e,s);let u=Si.dot(zo),h=Ai.dot(zo);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Si,o);Ho.subVectors(e,r);let f=Si.dot(Ho),g=Ai.dot(Ho);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ai,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return qc.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(qc,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Si,o).addScaledVector(Ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Xo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Yl(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xo(o,r,e+1/3),this.g=Xo(o,r,e),this.b=Xo(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ye.fromWorkingColorSpace(wt.copy(this),e),Math.round(ft(wt.r*255,0,255))*65536+Math.round(ft(wt.g*255,0,255))*256+Math.round(ft(wt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(wt.copy(this),t);let n=wt.r,s=wt.g,r=wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Ct){Ye.fromWorkingColorSpace(wt.copy(this),e);let t=wt.r,n=wt.g,s=wt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(qs);let n=vs(Dn.h,qs.h,t),s=vs(Dn.s,qs.s,t),r=vs(Dn.l,qs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new Ne;Ne.NAMES=ju;var op=0,ln=class extends Sn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=an(),this.name="",this.blending=Fi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},cn=class extends ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dt=new D,Ys=new ce,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}};var Rr=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cr=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ap=0,Bt=new et,qo=new yt,Ei=new D,Nt=new En,ls=new En,_t=new D,Mt=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ju(e)?Cr:Rr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Nt.min,ls.min),Nt.expandByPoint(_t),_t.addVectors(Nt.max,ls.max),Nt.expandByPoint(_t)):(Nt.expandByPoint(ls.min),Nt.expandByPoint(ls.max))}Nt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),_t.add(Ei)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new D,l[O]=new D;let c=new D,u=new D,h=new D,d=new ce,f=new ce,g=new ce,_=new D,m=new D;function p(O,A,x){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[O].add(_),a[A].add(_),a[x].add(_),l[O].add(m),l[A].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,A=b.length;O<A;++O){let x=b[O],I=x.start,z=x.count;for(let k=I,V=I+z;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new D,v=new D,C=new D,R=new D;function P(O){C.fromBufferAttribute(s,O),R.copy(C);let A=a[O];y.copy(A),y.sub(C.multiplyScalar(C.dot(A))).normalize(),v.crossVectors(R,A);let I=v.dot(l[O])<0?-1:1;o.setXYZW(O,y.x,y.y,y.z,I)}for(let O=0,A=b.length;O<A;++O){let x=b[O],I=x.start,z=x.count;for(let k=I,V=I+z;k<V;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Pt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yc=new et,Kn=new oi,Zs=new Hn,Zc=new D,$s=new D,Ks=new D,Js=new D,Yo=new D,js=new D,$c=new D,Qs=new D,pt=class extends yt{constructor(e=new Mt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Yo.fromBufferAttribute(h,e),o?js.addScaledVector(Yo,u):js.addScaledVector(Yo.sub(t),u))}t.add(js)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),Kn.copy(e.ray).recast(e.near),!(Zs.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Zs,Zc)===null||Kn.origin.distanceToSquared(Zc)>(e.far-e.near)**2))&&(Yc.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(Yc),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,C=y;v<C;v+=3){let R=a.getX(v),P=a.getX(v+1),O=a.getX(v+2);s=er(this,p,e,n,c,u,h,R,P,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=er(this,o,e,n,c,u,h,b,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,C=y;v<C;v+=3){let R=v,P=v+1,O=v+2;s=er(this,p,e,n,c,u,h,R,P,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=m,y=m+1,v=m+2;s=er(this,o,e,n,c,u,h,b,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function lp(i,e,t,n,s,r,o,a){let l;if(e.side===It?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===zn,a),l===null)return null;Qs.copy(a),Qs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:i}}function er(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,$s),i.getVertexPosition(l,Ks),i.getVertexPosition(c,Js);let u=lp(i,e,t,n,$s,Ks,Js,$c);if(u){let h=new D;bn.getBarycoord($c,$s,Ks,Js,h),s&&(u.uv=bn.getInterpolatedAttribute(s,a,l,c,h,new ce)),r&&(u.uv1=bn.getInterpolatedAttribute(r,a,l,c,h,new ce)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};bn.getNormal($s,Ks,Js,d.normal),u.face=d,u.barycoord=h}return u}var Vn=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function g(_,m,p,b,y,v,C,R,P,O,A){let x=v/P,I=C/O,z=v/2,k=C/2,V=R/2,U=P+1,Y=O+1,N=0,L=0,B=new D;for(let Z=0;Z<Y;Z++){let ee=Z*I-k;for(let he=0;he<U;he++){let ge=he*x-z;B[_]=ge*b,B[m]=ee*y,B[p]=V,c.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[p]=R>0?1:-1,u.push(B.x,B.y,B.z),h.push(he/P),h.push(1-Z/O),N+=1}}for(let Z=0;Z<O;Z++)for(let ee=0;ee<P;ee++){let he=d+ee+U*Z,ge=d+ee+U*(Z+1),$=d+(ee+1)+U*(Z+1),ne=d+(ee+1)+U*Z;l.push(he,ge,ne),l.push(ge,$,ne),L+=6}a.addGroup(f,L,A),f+=L,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){let e={};for(let t=0;t<i.length;t++){let n=Yi(i[t]);for(let s in n)e[s]=n[s]}return e}function cp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var up={clone:Yi,merge:Et},hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ir=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new D,Kc=new ce,Jc=new ce,Tt=class extends Ir{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Kc,Jc),t.subVectors(Jc,Kc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ti=-90,Ri=1,ja=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tt(Ti,Ri,e,t);s.layers=this.layers,this.add(s);let r=new Tt(Ti,Ri,e,t);r.layers=this.layers,this.add(r);let o=new Tt(Ti,Ri,e,t);o.layers=this.layers,this.add(o);let a=new Tt(Ti,Ri,e,t);a.layers=this.layers,this.add(a);let l=new Tt(Ti,Ri,e,t);l.layers=this.layers,this.add(l);let c=new Tt(Ti,Ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pr=class extends Ot{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qa=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Fn});r.uniforms.tEquirect.value=t;let o=new pt(s,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=rn),new ja(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Zo=new D,pp=new D,fp=new He,$t=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zo.subVectors(n,t).cross(pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Zo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fp.getNormalMatrix(e),s=this.coplanarPoint(Zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Jn=new Hn,tr=new D,Ss=class{constructor(e=new $t,t=new $t,n=new $t,s=new $t,r=new $t,o=new $t){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+g,v+b).normalize(),n[3].setComponents(l-o,d-u,m-g,v-b).normalize(),n[4].setComponents(l-a,d-h,m-_,v-y).normalize(),t===xn)n[5].setComponents(l+a,d+h,m+_,v+y).normalize();else if(t===Sr)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(tr.x=s.normal.x>0?e.max.x:e.min.x,tr.y=s.normal.y>0?e.max.y:e.min.y,tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mp(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Or=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let b=p*d-o;for(let y=0;y<c;y++){let v=y*h-r;g.push(v,-b,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let y=b+c*p,v=b+c*(p+1),C=b+1+c*(p+1),R=b+1+c*p;f.push(y,v,R),f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ff=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ef=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,If=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,km=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:gp,alphahash_pars_fragment:vp,alphamap_fragment:_p,alphamap_pars_fragment:yp,alphatest_fragment:bp,alphatest_pars_fragment:xp,aomap_fragment:wp,aomap_pars_fragment:Mp,batching_pars_vertex:Sp,batching_vertex:Ap,begin_vertex:Ep,beginnormal_vertex:Tp,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Dp,color_fragment:Up,color_pars_fragment:Np,color_pars_vertex:Fp,color_vertex:kp,common:Bp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:Yp,envmap_fragment:Zp,envmap_common_pars_fragment:$p,envmap_pars_fragment:Kp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:cf,envmap_vertex:jp,fog_vertex:Qp,fog_pars_vertex:ef,fog_fragment:tf,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:rf,lights_lambert_fragment:of,lights_lambert_pars_fragment:af,lights_pars_begin:lf,lights_toon_fragment:uf,lights_toon_pars_fragment:hf,lights_phong_fragment:df,lights_phong_pars_fragment:pf,lights_physical_fragment:ff,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:vf,lights_fragment_end:_f,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:wf,map_fragment:Mf,map_pars_fragment:Sf,map_particle_fragment:Af,map_particle_pars_fragment:Ef,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Rf,morphinstance_vertex:Cf,morphcolor_vertex:If,morphnormal_vertex:Pf,morphtarget_pars_vertex:Of,morphtarget_vertex:Lf,normal_fragment_begin:Df,normal_fragment_maps:Uf,normal_pars_fragment:Nf,normal_pars_vertex:Ff,normal_vertex:kf,normalmap_pars_fragment:Bf,clearcoat_normal_fragment_begin:zf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Vf,iridescence_pars_fragment:Gf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:qf,project_vertex:Yf,dithering_fragment:Zf,dithering_pars_fragment:$f,roughnessmap_fragment:Kf,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:Qf,shadowmap_vertex:em,shadowmask_pars_fragment:tm,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:um,transmission_pars_fragment:hm,uv_pars_fragment:dm,uv_pars_vertex:pm,uv_vertex:fm,worldpos_vertex:mm,background_vert:gm,background_frag:vm,backgroundCube_vert:_m,backgroundCube_frag:ym,cube_vert:bm,cube_frag:xm,depth_vert:wm,depth_frag:Mm,distanceRGBA_vert:Sm,distanceRGBA_frag:Am,equirect_vert:Em,equirect_frag:Tm,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Im,meshbasic_frag:Pm,meshlambert_vert:Om,meshlambert_frag:Lm,meshmatcap_vert:Dm,meshmatcap_frag:Um,meshnormal_vert:Nm,meshnormal_frag:Fm,meshphong_vert:km,meshphong_frag:Bm,meshphysical_vert:zm,meshphysical_frag:Hm,meshtoon_vert:Vm,meshtoon_frag:Gm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:Zm,sprite_frag:$m},xe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},sn={basic:{uniforms:Et([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Et([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Et([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Et([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Et([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Et([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Et([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Et([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Et([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Et([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Et([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Et([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Et([xe.lights,xe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};sn.physical={uniforms:Et([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var nr={r:0,b:0,g:0},jn=new Qt,Km=new et;function Jm(i,e,t,n,s,r,o){let a=new Ne(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1,v=g(b);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===ao)?(u===void 0&&(u=new pt(new Vn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Yi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),jn.copy(y.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(jn)),u.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Qe,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pt(new Or(2,2),new un({name:"BackgroundMaterial",uniforms:Yi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(nr,Qu(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m}}function jm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(x,I,z,k,V){let U=!1,Y=h(k,z,I);r!==Y&&(r=Y,c(r.object)),U=f(x,k,z,V),U&&g(x,k,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(x,I,z,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,I,z){let k=z.wireframe===!0,V=n[x.id];V===void 0&&(V={},n[x.id]=V);let U=V[I.id];U===void 0&&(U={},V[I.id]=U);let Y=U[k];return Y===void 0&&(Y=d(l()),U[k]=Y),Y}function d(x){let I=[],z=[],k=[];for(let V=0;V<t;V++)I[V]=0,z[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:k,object:x,attributes:{},index:null}}function f(x,I,z,k){let V=r.attributes,U=I.attributes,Y=0,N=z.getAttributes();for(let L in N)if(N[L].location>=0){let Z=V[L],ee=U[L];if(ee===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),Z===void 0||Z.attribute!==ee||ee&&Z.data!==ee.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(x,I,z,k){let V={},U=I.attributes,Y=0,N=z.getAttributes();for(let L in N)if(N[L].location>=0){let Z=U[L];Z===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));let ee={};ee.attribute=Z,Z&&Z.data&&(ee.data=Z.data),V[L]=ee,Y++}r.attributes=V,r.attributesNum=Y,r.index=k}function _(){let x=r.newAttributes;for(let I=0,z=x.length;I<z;I++)x[I]=0}function m(x){p(x,0)}function p(x,I){let z=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;z[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),V[x]!==I&&(i.vertexAttribDivisor(x,I),V[x]=I)}function b(){let x=r.newAttributes,I=r.enabledAttributes;for(let z=0,k=I.length;z<k;z++)I[z]!==x[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function y(x,I,z,k,V,U,Y){Y===!0?i.vertexAttribIPointer(x,I,z,V,U):i.vertexAttribPointer(x,I,z,k,V,U)}function v(x,I,z,k){_();let V=k.attributes,U=z.getAttributes(),Y=I.defaultAttributeValues;for(let N in U){let L=U[N];if(L.location>=0){let B=V[N];if(B===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(B=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(B=x.instanceColor)),B!==void 0){let Z=B.normalized,ee=B.itemSize,he=e.get(B);if(he===void 0)continue;let ge=he.buffer,$=he.type,ne=he.bytesPerElement,fe=$===i.INT||$===i.UNSIGNED_INT||B.gpuType===kl;if(B.isInterleavedBufferAttribute){let oe=B.data,_e=oe.stride,Re=B.offset;if(oe.isInstancedInterleavedBuffer){for(let X=0;X<L.locationSize;X++)p(L.location+X,oe.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let X=0;X<L.locationSize;X++)m(L.location+X);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let X=0;X<L.locationSize;X++)y(L.location+X,ee/L.locationSize,$,Z,_e*ne,(Re+ee/L.locationSize*X)*ne,fe)}else{if(B.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)p(L.location+oe,B.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let oe=0;oe<L.locationSize;oe++)m(L.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let oe=0;oe<L.locationSize;oe++)y(L.location+oe,ee/L.locationSize,$,Z,ee*ne,ee/L.locationSize*oe*ne,fe)}}else if(Y!==void 0){let Z=Y[N];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(L.location,Z);break;case 3:i.vertexAttrib3fv(L.location,Z);break;case 4:i.vertexAttrib4fv(L.location,Z);break;default:i.vertexAttrib1fv(L.location,Z)}}}}b()}function C(){O();for(let x in n){let I=n[x];for(let z in I){let k=I[z];for(let V in k)u(k[V].object),delete k[V];delete I[z]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;let I=n[x.id];for(let z in I){let k=I[z];for(let V in k)u(k[V].object),delete k[V];delete I[z]}delete n[x.id]}function P(x){for(let I in n){let z=n[I];if(z[x.id]===void 0)continue;let k=z[x.id];for(let V in k)u(k[V].object),delete k[V];delete z[x.id]}}function O(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Qm(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function eg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Jt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let O=P===Ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==on&&!O)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function tg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new $t,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let b=r?0:n,y=b*4,v=p.clippingState||null;l.value=v,v=u(g,d,y,f);for(let C=0;C!==y;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ng(i){let e=new WeakMap;function t(o,a){return a===va?o.mapping=Gi:a===_a&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===va||a===_a)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qa(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Lr=class extends Ir{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ui=4,jc=[.125,.215,.35,.446,.526,.582],ni=20,$o=new Lr,Qc=new Ne,Ko=null,Jo=0,jo=0,Qo=!1,ei=(1+Math.sqrt(5))/2,Ci=1/ei,eu=[new D(-ei,Ci,0),new D(ei,Ci,0),new D(-Ci,0,ei),new D(Ci,0,ei),new D(0,ei,-Ci),new D(0,ei,Ci),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Jo,jo),this._renderer.xr.enabled=Qo,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ps,format:Jt,colorSpace:Qi,depthBuffer:!1},s=tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(r)),this._blurMaterial=sg(r,e,t)}return s}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,s){let a=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Qc),u.toneMapping=kn,u.autoClear=!1;let f=new cn({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new pt(new Vn,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Qc),_=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;ir(s,b*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gi||e.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eu[(s-r-1)%eu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new pt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ni-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ni;m>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);let p=[],b=0;for(let P=0;P<ni;++P){let O=P/_,A=Math.exp(-O*O/2);p.push(A),P===0?b+=A:P<m&&(b+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let v=this._sizeLods[s],C=3*v*(s>y-Ui?s-y+Ui:0),R=4*(this._cubeSize-v);ir(t,C,R,3*v,2*v),l.setRenderTarget(t),l.render(h,$o)}};function ig(i){let e=[],t=[],n=[],s=i,r=i-Ui+1+jc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ui?l=jc[o-i+Ui-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){let P=R%3*2/3-1,O=R>2?0:-1,A=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];b.set(A,_*g*R),y.set(d,m*g*R);let x=[R,R,R,R,R,R];v.set(x,p*g*R)}let C=new Mt;C.setAttribute("position",new Pt(b,_)),C.setAttribute("uv",new Pt(y,m)),C.setAttribute("faceIndex",new Pt(v,p)),e.push(C),s>Ui&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tu(i,e,t){let n=new An(i,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sg(i,e,t){let n=new Float32Array(ni),s=new D(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function nu(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function iu(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===va||l===_a,u=l===Gi||l===Wi;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Dr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Dr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function og(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ag(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(f!==null){let b=f.array;_=f.version;for(let y=0,v=b.length;y<v;y+=3){let C=b[y+0],R=b[y+1],P=b[y+2];d.push(C,R,R,P,P,C)}}else if(g!==void 0){let b=g.array;_=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){let C=y+0,R=y+1,P=y+2;d.push(C,R,R,P,P,C)}}else return;let m=new(Ju(d)?Cr:Rr)(d,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,e,t){let n=new WeakMap,s=new ht;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let A=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*C*4*h),P=new Tr(R,v,C,h);P.type=on,P.needsUpdate=!0;let O=y*4;for(let x=0;x<h;x++){let I=m[x],z=p[x],k=b[x],V=v*C*4*x;for(let U=0;U<I.count;U++){let Y=U*O;f===!0&&(s.fromBufferAttribute(I,U),R[V+Y+0]=s.x,R[V+Y+1]=s.y,R[V+Y+2]=s.z,R[V+Y+3]=0),g===!0&&(s.fromBufferAttribute(z,U),R[V+Y+4]=s.x,R[V+Y+5]=s.y,R[V+Y+6]=s.z,R[V+Y+7]=0),_===!0&&(s.fromBufferAttribute(k,U),R[V+Y+8]=s.x,R[V+Y+9]=s.y,R[V+Y+10]=s.z,R[V+Y+11]=k.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new ce(v,C)},n.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function hg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ur=class extends Ot{constructor(e,t,n,s,r,o,a,l,c,u=ki){if(u!==ki&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ki&&(n=ri),n===void 0&&u===qi&&(n=Xi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},th=new Ot,su=new Ur(1,1),nh=new Tr,ih=new Ja,sh=new Pr,ru=[],ou=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function es(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function co(i,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;cu.set(n),i.uniformMatrix2fv(this.addr,!1,cu),gt(t,n)}}function vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;lu.set(n),i.uniformMatrix3fv(this.addr,!1,lu),gt(t,n)}}function _g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),gt(t,n)}}function yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(su.compareFunction=$u,r=su):r=th,t.setTexture2D(e||r,s)}function Rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ih,s)}function Cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sh,s)}function Ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nh,s)}function Pg(i){switch(i){case 5126:return dg;case 35664:return pg;case 35665:return fg;case 35666:return mg;case 35674:return gg;case 35675:return vg;case 35676:return _g;case 5124:case 35670:return yg;case 35667:case 35671:return bg;case 35668:case 35672:return xg;case 35669:case 35673:return wg;case 5125:return Mg;case 36294:return Sg;case 36295:return Ag;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Og(i,e){i.uniform1fv(this.addr,e)}function Lg(i,e){let t=es(e,this.size,2);i.uniform2fv(this.addr,t)}function Dg(i,e){let t=es(e,this.size,3);i.uniform3fv(this.addr,t)}function Ug(i,e){let t=es(e,this.size,4);i.uniform4fv(this.addr,t)}function Ng(i,e){let t=es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fg(i,e){let t=es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kg(i,e){let t=es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bg(i,e){i.uniform1iv(this.addr,e)}function zg(i,e){i.uniform2iv(this.addr,e)}function Hg(i,e){i.uniform3iv(this.addr,e)}function Vg(i,e){i.uniform4iv(this.addr,e)}function Gg(i,e){i.uniform1uiv(this.addr,e)}function Wg(i,e){i.uniform2uiv(this.addr,e)}function Xg(i,e){i.uniform3uiv(this.addr,e)}function qg(i,e){i.uniform4uiv(this.addr,e)}function Yg(i,e,t){let n=this.cache,s=e.length,r=co(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||th,r[o])}function Zg(i,e,t){let n=this.cache,s=e.length,r=co(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ih,r[o])}function $g(i,e,t){let n=this.cache,s=e.length,r=co(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sh,r[o])}function Kg(i,e,t){let n=this.cache,s=e.length,r=co(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nh,r[o])}function Jg(i){switch(i){case 5126:return Og;case 35664:return Lg;case 35665:return Dg;case 35666:return Ug;case 35674:return Ng;case 35675:return Fg;case 35676:return kg;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return Hg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Kg}}var el=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pg(t.type)}},tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}},nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ea=/(\w+)(\])?(\[|\.)?/g;function uu(i,e){i.seq.push(e),i.map[e.id]=e}function jg(i,e,t){let n=i.name,s=n.length;for(ea.lastIndex=0;;){let r=ea.exec(n),o=ea.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uu(t,c===void 0?new el(a,i,e):new tl(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new nl(a),uu(t,h)),t=h}}}var Hi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);jg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function hu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qg=37297,e0=0;function t0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var du=new He;function n0(i){Ye._getMatrix(du,Ye.workingColorSpace,i);let e=`mat3( ${du.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case lo:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+t0(i.getShaderSource(e),o)}else return s}function i0(i,e){let t=n0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function s0(i,e){let t;switch(e){case pd:t="Linear";break;case fd:t="Reinhard";break;case md:t="Cineon";break;case gd:t="ACESFilmic";break;case _d:t="AgX";break;case yd:t="Neutral";break;case vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sr=new D;function r0(){Ye.getLuminanceCoefficients(sr);let i=sr.x.toFixed(4),e=sr.y.toFixed(4),t=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function a0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function gs(i){return i!==""}function fu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(c0,h0)}var u0=new Map;function h0(i,e){let t=We[e];if(t===void 0){let n=u0.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return il(t)}var d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(i){return i.replace(d0,p0)}function p0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function m0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Wi:e="ENVMAP_TYPE_CUBE";break;case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Wi&&(e="ENVMAP_MODE_REFRACTION"),e}function v0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fl:e="ENVMAP_BLENDING_MULTIPLY";break;case hd:e="ENVMAP_BLENDING_MIX";break;case dd:e="ENVMAP_BLENDING_ADD";break}return e}function _0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function y0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=f0(t),c=m0(t),u=g0(t),h=v0(t),d=_0(t),f=o0(t),g=a0(r),_=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?We.tonemapping_pars_fragment:"",t.toneMapping!==kn?s0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),r0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),o=il(o),o=fu(o,t),o=mu(o,t),a=il(a),a=fu(a,t),a=mu(a,t),o=gu(o),a=gu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+m+o,v=b+p+a,C=hu(s,s.VERTEX_SHADER,y),R=hu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,C),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(R).trim(),U=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,R);else{let N=pu(s,C,"vertex"),L=pu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+N+`
`+L)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||V==="")&&(Y=!1);Y&&(I.diagnostics={runnable:U,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(C),s.deleteShader(R),O=new Hi(s,_),A=l0(s,_)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Qg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}var b0=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rl(e),t.set(e,n)),n}},rl=class{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}};function x0(i,e,t,n,s,r,o){let a=new Ms,l=new sl,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,x,I,z,k){let V=z.fog,U=k.geometry,Y=A.isMeshStandardMaterial?z.environment:null,N=(A.isMeshStandardMaterial?t:e).get(A.envMap||Y),L=N&&N.mapping===ao?N.image.height:null,B=g[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));let Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ee=Z!==void 0?Z.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let ge,$,ne,fe;if(B){let Je=sn[B];ge=Je.vertexShader,$=Je.fragmentShader}else ge=A.vertexShader,$=A.fragmentShader,l.update(A),ne=l.getVertexShaderID(A),fe=l.getFragmentShaderID(A);let oe=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Re=k.isInstancedMesh===!0,X=k.isBatchedMesh===!0,ue=!!A.map,T=!!A.matcap,F=!!N,M=!!A.aoMap,K=!!A.lightMap,J=!!A.bumpMap,de=!!A.normalMap,ie=!!A.displacementMap,ye=!!A.emissiveMap,pe=!!A.metalnessMap,E=!!A.roughnessMap,w=A.anisotropy>0,q=A.clearcoat>0,te=A.dispersion>0,ae=A.iridescence>0,re=A.sheen>0,we=A.transmission>0,be=w&&!!A.anisotropyMap,Ee=q&&!!A.clearcoatMap,Xe=q&&!!A.clearcoatNormalMap,me=q&&!!A.clearcoatRoughnessMap,Ce=ae&&!!A.iridescenceMap,Ue=ae&&!!A.iridescenceThicknessMap,Fe=re&&!!A.sheenColorMap,Ie=re&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Ve=!!A.specularColorMap,it=!!A.specularIntensityMap,H=we&&!!A.transmissionMap,Me=we&&!!A.thicknessMap,se=!!A.gradientMap,le=!!A.alphaMap,Te=A.alphaTest>0,Se=!!A.alphaHash,Be=!!A.extensions,ut=kn;A.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ut=i.toneMapping);let bt={shaderID:B,shaderType:A.type,shaderName:A.name,vertexShader:ge,fragmentShader:$,defines:A.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:X,batchingColor:X&&k._colorsTexture!==null,instancing:Re,instancingColor:Re&&k.instanceColor!==null,instancingMorph:Re&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Qi,alphaToCoverage:!!A.alphaToCoverage,map:ue,matcap:T,envMap:F,envMapMode:F&&N.mapping,envMapCubeUVHeight:L,aoMap:M,lightMap:K,bumpMap:J,normalMap:de,displacementMap:d&&ie,emissiveMap:ye,normalMapObjectSpace:de&&A.normalMapType===Md,normalMapTangentSpace:de&&A.normalMapType===Xl,metalnessMap:pe,roughnessMap:E,anisotropy:w,anisotropyMap:be,clearcoat:q,clearcoatMap:Ee,clearcoatNormalMap:Xe,clearcoatRoughnessMap:me,dispersion:te,iridescence:ae,iridescenceMap:Ce,iridescenceThicknessMap:Ue,sheen:re,sheenColorMap:Fe,sheenRoughnessMap:Ie,specularMap:qe,specularColorMap:Ve,specularIntensityMap:it,transmission:we,transmissionMap:H,thicknessMap:Me,gradientMap:se,opaque:A.transparent===!1&&A.blending===Fi&&A.alphaToCoverage===!1,alphaMap:le,alphaTest:Te,alphaHash:Se,combine:A.combine,mapUv:ue&&_(A.map.channel),aoMapUv:M&&_(A.aoMap.channel),lightMapUv:K&&_(A.lightMap.channel),bumpMapUv:J&&_(A.bumpMap.channel),normalMapUv:de&&_(A.normalMap.channel),displacementMapUv:ie&&_(A.displacementMap.channel),emissiveMapUv:ye&&_(A.emissiveMap.channel),metalnessMapUv:pe&&_(A.metalnessMap.channel),roughnessMapUv:E&&_(A.roughnessMap.channel),anisotropyMapUv:be&&_(A.anisotropyMap.channel),clearcoatMapUv:Ee&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(A.sheenRoughnessMap.channel),specularMapUv:qe&&_(A.specularMap.channel),specularColorMapUv:Ve&&_(A.specularColorMap.channel),specularIntensityMapUv:it&&_(A.specularIntensityMap.channel),transmissionMapUv:H&&_(A.transmissionMap.channel),thicknessMapUv:Me&&_(A.thicknessMap.channel),alphaMapUv:le&&_(A.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(de||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!U.attributes.uv&&(ue||le),fog:!!V,useFog:A.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:_e,skinning:k.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:he,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:ue&&A.map.isVideoTexture===!0&&Ye.getTransfer(A.map.colorSpace)===Qe,decodeVideoTextureEmissive:ye&&A.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(A.emissiveMap.colorSpace)===Qe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===zt,flipSided:A.side===It,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Be&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&A.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(A){let x=[];if(A.shaderID?x.push(A.shaderID):(x.push(A.customVertexShaderID),x.push(A.customFragmentShaderID)),A.defines!==void 0)for(let I in A.defines)x.push(I),x.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(b(x,A),y(x,A),x.push(i.outputColorSpace)),x.push(A.customProgramCacheKey),x.join()}function b(A,x){A.push(x.precision),A.push(x.outputColorSpace),A.push(x.envMapMode),A.push(x.envMapCubeUVHeight),A.push(x.mapUv),A.push(x.alphaMapUv),A.push(x.lightMapUv),A.push(x.aoMapUv),A.push(x.bumpMapUv),A.push(x.normalMapUv),A.push(x.displacementMapUv),A.push(x.emissiveMapUv),A.push(x.metalnessMapUv),A.push(x.roughnessMapUv),A.push(x.anisotropyMapUv),A.push(x.clearcoatMapUv),A.push(x.clearcoatNormalMapUv),A.push(x.clearcoatRoughnessMapUv),A.push(x.iridescenceMapUv),A.push(x.iridescenceThicknessMapUv),A.push(x.sheenColorMapUv),A.push(x.sheenRoughnessMapUv),A.push(x.specularMapUv),A.push(x.specularColorMapUv),A.push(x.specularIntensityMapUv),A.push(x.transmissionMapUv),A.push(x.thicknessMapUv),A.push(x.combine),A.push(x.fogExp2),A.push(x.sizeAttenuation),A.push(x.morphTargetsCount),A.push(x.morphAttributeCount),A.push(x.numDirLights),A.push(x.numPointLights),A.push(x.numSpotLights),A.push(x.numSpotLightMaps),A.push(x.numHemiLights),A.push(x.numRectAreaLights),A.push(x.numDirLightShadows),A.push(x.numPointLightShadows),A.push(x.numSpotLightShadows),A.push(x.numSpotLightShadowsWithMaps),A.push(x.numLightProbes),A.push(x.shadowMapType),A.push(x.toneMapping),A.push(x.numClippingPlanes),A.push(x.numClipIntersection),A.push(x.depthPacking)}function y(A,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),A.push(a.mask)}function v(A){let x=g[A.type],I;if(x){let z=sn[x];I=up.clone(z.uniforms)}else I=A.uniforms;return I}function C(A,x){let I;for(let z=0,k=u.length;z<k;z++){let V=u[z];if(V.cacheKey===x){I=V,++I.usedTimes;break}}return I===void 0&&(I=new y0(i,x,A,r),u.push(I)),I}function R(A){if(--A.usedTimes===0){let x=u.indexOf(A);u[x]=u[u.length-1],u.pop(),A.destroy()}}function P(A){l.remove(A)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:O}}function w0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function M0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _u(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||M0),n.length>1&&n.sort(d||_u),s.length>1&&s.sort(d||_u)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function S0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new yu,i.set(n,[o])):s>=r.length?(o=new yu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function A0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function E0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var T0=0;function R0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C0(i){let e=new A0,t=E0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new et,o=new et;function a(c){let u=0,h=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,y=0,v=0,C=0,R=0,P=0;c.sort(R0);for(let A=0,x=c.length;A<x;A++){let I=c[A],z=I.color,k=I.intensity,V=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*k,h+=z.g*k,d+=z.b*k;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],k);P++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let N=I.shadow,L=t.get(I);L.shadowIntensity=N.intensity,L.shadowBias=N.bias,L.shadowNormalBias=N.normalBias,L.shadowRadius=N.radius,L.shadowMapSize=N.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=I.shadow.matrix,b++}n.directional[f]=Y,f++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(z).multiplyScalar(k),Y.distance=V,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[_]=Y;let N=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,N.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[_]=N.matrix,I.castShadow){let L=t.get(I);L.shadowIntensity=N.intensity,L.shadowBias=N.bias,L.shadowNormalBias=N.normalBias,L.shadowRadius=N.radius,L.shadowMapSize=N.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=U,v++}_++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(z).multiplyScalar(k),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Y,m++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let N=I.shadow,L=t.get(I);L.shadowIntensity=N.intensity,L.shadowBias=N.bias,L.shadowNormalBias=N.normalBias,L.shadowRadius=N.radius,L.shadowMapSize=N.mapSize,L.shadowCameraNear=N.camera.near,L.shadowCameraFar=N.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=Y,g++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(k),Y.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let O=n.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==b||O.numPointShadows!==y||O.numSpotShadows!==v||O.numSpotMaps!==C||O.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,O.directionalLength=f,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=b,O.numPointShadows=y,O.numSpotShadows=v,O.numSpotMaps=C,O.numLightProbes=P,n.version=T0++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let y=c[p];if(y.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function bu(i){let e=new C0(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function I0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new bu(i),e.set(s,[a])):r>=o.length?(a=new bu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ol=class extends ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},al=class extends ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},P0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L0(i,e,t){let n=new Ss,s=new ce,r=new ce,o=new ht,a=new ol({depthPacking:wd}),l=new al,c={},u=t.maxTextureSize,h={[zn]:It,[It]:zn,[zt]:zt},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:P0,fragmentShader:O0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let p=this.type;this.render=function(R,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let A=i.getRenderTarget(),x=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Fn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==yn&&this.type===yn,V=p===yn&&this.type!==yn;for(let U=0,Y=R.length;U<Y;U++){let N=R[U],L=N.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let B=L.getFrameExtents();if(s.multiply(B),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/B.x),s.x=r.x*B.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/B.y),s.y=r.y*B.y,L.mapSize.y=r.y)),L.map===null||k===!0||V===!0){let ee=this.type!==yn?{minFilter:Ft,magFilter:Ft}:{};L.map!==null&&L.map.dispose(),L.map=new An(s.x,s.y,ee),L.map.texture.name=N.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let Z=L.getViewportCount();for(let ee=0;ee<Z;ee++){let he=L.getViewport(ee);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),z.viewport(o),L.updateMatrices(N,ee),n=L.getFrustum(),v(P,O,L.camera,N,this.type)}L.isPointLightShadow!==!0&&this.type===yn&&b(L,O),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,x,I)};function b(R,P){let O=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new An(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,O,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,O,f,_,null)}function y(R,P,O,A){let x=null,I=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)x=I;else if(x=O.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let z=x.uuid,k=P.uuid,V=c[z];V===void 0&&(V={},c[z]=V);let U=V[k];U===void 0&&(U=x.clone(),V[k]=U,P.addEventListener("dispose",C)),x=U}if(x.visible=P.visible,x.wireframe=P.wireframe,A===yn?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:h[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let z=i.properties.get(x);z.light=O}return x}function v(R,P,O,A,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===yn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let k=e.update(R),V=R.material;if(Array.isArray(V)){let U=k.groups;for(let Y=0,N=U.length;Y<N;Y++){let L=U[Y],B=V[L.materialIndex];if(B&&B.visible){let Z=y(R,B,A,x);R.onBeforeShadow(i,R,P,O,k,Z,L),i.renderBufferDirect(O,null,k,Z,R,L),R.onAfterShadow(i,R,P,O,k,Z,L)}}}else if(V.visible){let U=y(R,V,A,x);R.onBeforeShadow(i,R,P,O,k,U,null),i.renderBufferDirect(O,null,k,U,R,null),R.onAfterShadow(i,R,P,O,k,U,null)}}let z=R.children;for(let k=0,V=z.length;k<V;k++)v(z[k],P,O,A,x)}function C(R){R.target.removeEventListener("dispose",C);for(let O in c){let A=c[O],x=R.target.uuid;x in A&&(A[x].dispose(),delete A[x])}}}var D0={[ua]:ha,[da]:ma,[pa]:ga,[Vi]:fa,[ha]:ua,[ma]:da,[ga]:pa,[fa]:Vi};function U0(i,e){function t(){let H=!1,Me=new ht,se=null,le=new ht(0,0,0,0);return{setMask:function(Te){se!==Te&&!H&&(i.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){H=Te},setClear:function(Te,Se,Be,ut,bt){bt===!0&&(Te*=ut,Se*=ut,Be*=ut),Me.set(Te,Se,Be,ut),le.equals(Me)===!1&&(i.clearColor(Te,Se,Be,ut),le.copy(Me))},reset:function(){H=!1,se=null,le.set(-1,0,0,0)}}}function n(){let H=!1,Me=!1,se=null,le=null,Te=null;return{setReversed:function(Se){if(Me!==Se){let Be=e.get("EXT_clip_control");Me?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);let ut=Te;Te=null,this.setClear(ut)}Me=Se},getReversed:function(){return Me},setTest:function(Se){Se?oe(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(Se){se!==Se&&!H&&(i.depthMask(Se),se=Se)},setFunc:function(Se){if(Me&&(Se=D0[Se]),le!==Se){switch(Se){case ua:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Se}},setLocked:function(Se){H=Se},setClear:function(Se){Te!==Se&&(Me&&(Se=1-Se),i.clearDepth(Se),Te=Se)},reset:function(){H=!1,se=null,le=null,Te=null,Me=!1}}}function s(){let H=!1,Me=null,se=null,le=null,Te=null,Se=null,Be=null,ut=null,bt=null;return{setTest:function(Je){H||(Je?oe(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Je){Me!==Je&&!H&&(i.stencilMask(Je),Me=Je)},setFunc:function(Je,Gt,hn){(se!==Je||le!==Gt||Te!==hn)&&(i.stencilFunc(Je,Gt,hn),se=Je,le=Gt,Te=hn)},setOp:function(Je,Gt,hn){(Se!==Je||Be!==Gt||ut!==hn)&&(i.stencilOp(Je,Gt,hn),Se=Je,Be=Gt,ut=hn)},setLocked:function(Je){H=Je},setClear:function(Je){bt!==Je&&(i.clearStencil(Je),bt=Je)},reset:function(){H=!1,Me=null,se=null,le=null,Te=null,Se=null,Be=null,ut=null,bt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,y=null,v=null,C=null,R=null,P=new Ne(0,0,0),O=0,A=!1,x=null,I=null,z=null,k=null,V=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,N=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(L)[1]),Y=N>=1):L.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Y=N>=2);let B=null,Z={},ee=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),ge=new ht().fromArray(ee),$=new ht().fromArray(he);function ne(H,Me,se,le){let Te=new Uint8Array(4),Se=i.createTexture();i.bindTexture(H,Se),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<se;Be++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(Me+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Se}let fe={};fe[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Vi),J(!1),de(wc),oe(i.CULL_FACE),M(Fn);function oe(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function _e(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Re(H,Me){return h[H]!==Me?(i.bindFramebuffer(H,Me),h[H]=Me,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Me),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function X(H,Me){let se=f,le=!1;if(H){se=d.get(Me),se===void 0&&(se=[],d.set(Me,se));let Te=H.textures;if(se.length!==Te.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Be=Te.length;Se<Be;Se++)se[Se]=i.COLOR_ATTACHMENT0+Se;se.length=Te.length,le=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,le=!0);le&&i.drawBuffers(se)}function ue(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let T={[ti]:i.FUNC_ADD,[Zh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};T[Kh]=i.MIN,T[Jh]=i.MAX;let F={[jh]:i.ZERO,[Qh]:i.ONE,[ed]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[od]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[nd]:i.DST_ALPHA,[td]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[id]:i.ONE_MINUS_DST_ALPHA,[ad]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[ud]:i.ONE_MINUS_CONSTANT_ALPHA};function M(H,Me,se,le,Te,Se,Be,ut,bt,Je){if(H===Fn){_===!0&&(_e(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),H!==Yh){if(H!==m||Je!==A){if((p!==ti||v!==ti)&&(i.blendEquation(i.FUNC_ADD),p=ti,v=ti),Je)switch(H){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mc:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,y=null,C=null,R=null,P.set(0,0,0),O=0,m=H,A=Je}return}Te=Te||Me,Se=Se||se,Be=Be||le,(Me!==p||Te!==v)&&(i.blendEquationSeparate(T[Me],T[Te]),p=Me,v=Te),(se!==b||le!==y||Se!==C||Be!==R)&&(i.blendFuncSeparate(F[se],F[le],F[Se],F[Be]),b=se,y=le,C=Se,R=Be),(ut.equals(P)===!1||bt!==O)&&(i.blendColor(ut.r,ut.g,ut.b,bt),P.copy(ut),O=bt),m=H,A=!1}function K(H,Me){H.side===zt?_e(i.CULL_FACE):oe(i.CULL_FACE);let se=H.side===It;Me&&(se=!se),J(se),H.blending===Fi&&H.transparent===!1?M(Fn):M(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let le=H.stencilWrite;a.setTest(le),le&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ye(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(H){x!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),x=H)}function de(H){H!==Wh?(oe(i.CULL_FACE),H!==I&&(H===wc?i.cullFace(i.BACK):H===Xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),I=H}function ie(H){H!==z&&(Y&&i.lineWidth(H),z=H)}function ye(H,Me,se){H?(oe(i.POLYGON_OFFSET_FILL),(k!==Me||V!==se)&&(i.polygonOffset(Me,se),k=Me,V=se)):_e(i.POLYGON_OFFSET_FILL)}function pe(H){H?oe(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function E(H){H===void 0&&(H=i.TEXTURE0+U-1),B!==H&&(i.activeTexture(H),B=H)}function w(H,Me,se){se===void 0&&(B===null?se=i.TEXTURE0+U-1:se=B);let le=Z[se];le===void 0&&(le={type:void 0,texture:void 0},Z[se]=le),(le.type!==H||le.texture!==Me)&&(B!==se&&(i.activeTexture(se),B=se),i.bindTexture(H,Me||fe[H]),le.type=H,le.texture=Me)}function q(){let H=Z[B];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(H){ge.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ge.copy(H))}function Ie(H){$.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),$.copy(H))}function qe(H,Me){let se=c.get(Me);se===void 0&&(se=new WeakMap,c.set(Me,se));let le=se.get(H);le===void 0&&(le=i.getUniformBlockIndex(Me,H.name),se.set(H,le))}function Ve(H,Me){let le=c.get(Me).get(H);l.get(Me)!==le&&(i.uniformBlockBinding(Me,le,H.__bindingPointIndex),l.set(Me,le))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},B=null,Z={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,y=null,v=null,C=null,R=null,P=new Ne(0,0,0),O=0,A=!1,x=null,I=null,z=null,k=null,V=null,ge.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:_e,bindFramebuffer:Re,drawBuffers:X,useProgram:ue,setBlending:M,setMaterial:K,setFlipSided:J,setCullFace:de,setLineWidth:ie,setPolygonOffset:ye,setScissorTest:pe,activeTexture:E,bindTexture:w,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:ae,texImage2D:Ce,texImage3D:Ue,updateUBOMapping:qe,uniformBlockBinding:Ve,texStorage2D:Xe,texStorage3D:me,texSubImage2D:re,texSubImage3D:we,compressedTexSubImage2D:be,compressedTexSubImage3D:Ee,scissor:Fe,viewport:Ie,reset:it}}function xu(i,e,t,n){let s=N0(n);switch(t){case Gu:return i*e;case Xu:return i*e;case qu:return i*e*2;case Hl:return i*e/s.components*s.byteLength;case Vl:return i*e/s.components*s.byteLength;case Yu:return i*e*2/s.components*s.byteLength;case Gl:return i*e*2/s.components*s.byteLength;case Wu:return i*e*3/s.components*s.byteLength;case Jt:return i*e*4/s.components*s.byteLength;case Wl:return i*e*4/s.components*s.byteLength;case _r:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:case Sa:return Math.max(i,16)*Math.max(e,8)/4;case xa:case Ma:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wr:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zu:case Wa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N0(i){switch(i){case Mn:case zu:return{byteLength:1,components:1};case xs:case Hu:case Ps:return{byteLength:2,components:1};case Bl:case zl:return{byteLength:2,components:4};case ri:case kl:case on:return{byteLength:4,components:1};case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function F0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,w){return f?new OffscreenCanvas(E,w):Ar("canvas")}function _(E,w,q){let te=1,ae=pe(E);if((ae.width>q||ae.height>q)&&(te=q/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let re=Math.floor(te*ae.width),we=Math.floor(te*ae.height);h===void 0&&(h=g(re,we));let be=w?g(re,we):h;return be.width=re,be.height=we,be.getContext("2d").drawImage(E,0,0,re,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+re+"x"+we+")."),be}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,w,q,te,ae=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re=w;if(w===i.RED&&(q===i.FLOAT&&(re=i.R32F),q===i.HALF_FLOAT&&(re=i.R16F),q===i.UNSIGNED_BYTE&&(re=i.R8)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(re=i.R8UI),q===i.UNSIGNED_SHORT&&(re=i.R16UI),q===i.UNSIGNED_INT&&(re=i.R32UI),q===i.BYTE&&(re=i.R8I),q===i.SHORT&&(re=i.R16I),q===i.INT&&(re=i.R32I)),w===i.RG&&(q===i.FLOAT&&(re=i.RG32F),q===i.HALF_FLOAT&&(re=i.RG16F),q===i.UNSIGNED_BYTE&&(re=i.RG8)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(re=i.RG8UI),q===i.UNSIGNED_SHORT&&(re=i.RG16UI),q===i.UNSIGNED_INT&&(re=i.RG32UI),q===i.BYTE&&(re=i.RG8I),q===i.SHORT&&(re=i.RG16I),q===i.INT&&(re=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(re=i.RGB8UI),q===i.UNSIGNED_SHORT&&(re=i.RGB16UI),q===i.UNSIGNED_INT&&(re=i.RGB32UI),q===i.BYTE&&(re=i.RGB8I),q===i.SHORT&&(re=i.RGB16I),q===i.INT&&(re=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),q===i.UNSIGNED_INT&&(re=i.RGBA32UI),q===i.BYTE&&(re=i.RGBA8I),q===i.SHORT&&(re=i.RGBA16I),q===i.INT&&(re=i.RGBA32I)),w===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),w===i.RGBA){let we=ae?lo:Ye.getTransfer(te);q===i.FLOAT&&(re=i.RGBA32F),q===i.HALF_FLOAT&&(re=i.RGBA16F),q===i.UNSIGNED_BYTE&&(re=we===Qe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function v(E,w){let q;return E?w===null||w===ri||w===Xi?q=i.DEPTH24_STENCIL8:w===on?q=i.DEPTH32F_STENCIL8:w===xs&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ri||w===Xi?q=i.DEPTH_COMPONENT24:w===on?q=i.DEPTH_COMPONENT32F:w===xs&&(q=i.DEPTH_COMPONENT16),q}function C(E,w){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ft&&E.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function R(E){let w=E.target;w.removeEventListener("dispose",R),O(w),w.isVideoTexture&&u.delete(w)}function P(E){let w=E.target;w.removeEventListener("dispose",P),x(w)}function O(E){let w=n.get(E);if(w.__webglInit===void 0)return;let q=E.source,te=d.get(q);if(te){let ae=te[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(E),Object.keys(te).length===0&&d.delete(q)}n.remove(E)}function A(E){let w=n.get(E);i.deleteTexture(w.__webglTexture);let q=E.source,te=d.get(q);delete te[w.__cacheKey],o.memory.textures--}function x(E){let w=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let ae=0;ae<w.__webglFramebuffer[te].length;ae++)i.deleteFramebuffer(w.__webglFramebuffer[te][ae]);else i.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)i.deleteFramebuffer(w.__webglFramebuffer[te]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let q=E.textures;for(let te=0,ae=q.length;te<ae;te++){let re=n.get(q[te]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(q[te])}n.remove(E)}let I=0;function z(){I=0}function k(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function V(E){let w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.colorSpace),w.join()}function U(E,w){let q=n.get(E);if(E.isVideoTexture&&ie(E),E.isRenderTargetTexture===!1&&E.version>0&&q.__version!==E.version){let te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(q,E,w);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function Y(E,w){let q=n.get(E);if(E.version>0&&q.__version!==E.version){$(q,E,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function N(E,w){let q=n.get(E);if(E.version>0&&q.__version!==E.version){$(q,E,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function L(E,w){let q=n.get(E);if(E.version>0&&q.__version!==E.version){ne(q,E,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}let B={[ya]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},Z={[Ft]:i.NEAREST,[bd]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},ee={[Sd]:i.NEVER,[Id]:i.ALWAYS,[Ad]:i.LESS,[$u]:i.LEQUAL,[Ed]:i.EQUAL,[Cd]:i.GEQUAL,[Td]:i.GREATER,[Rd]:i.NOTEQUAL};function he(E,w){if(w.type===on&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===rn||w.magFilter===To||w.magFilter===ks||w.magFilter===si||w.minFilter===rn||w.minFilter===To||w.minFilter===ks||w.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,B[w.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,B[w.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,B[w.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Z[w.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ft||w.minFilter!==ks&&w.minFilter!==si||w.type===on&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ge(E,w){let q=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",R));let te=w.source,ae=d.get(te);ae===void 0&&(ae={},d.set(te,ae));let re=V(w);if(re!==E.__cacheKey){ae[re]===void 0&&(ae[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ae[re].usedTimes++;let we=ae[E.__cacheKey];we!==void 0&&(ae[E.__cacheKey].usedTimes--,we.usedTimes===0&&A(w)),E.__cacheKey=re,E.__webglTexture=ae[re].texture}return q}function $(E,w,q){let te=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=i.TEXTURE_3D);let ae=ge(E,w),re=w.source;t.bindTexture(te,E.__webglTexture,i.TEXTURE0+q);let we=n.get(re);if(re.version!==we.__version||ae===!0){t.activeTexture(i.TEXTURE0+q);let be=Ye.getPrimaries(Ye.workingColorSpace),Ee=w.colorSpace===Nn?null:Ye.getPrimaries(w.colorSpace),Xe=w.colorSpace===Nn||be===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let me=_(w.image,!1,s.maxTextureSize);me=ye(w,me);let Ce=r.convert(w.format,w.colorSpace),Ue=r.convert(w.type),Fe=y(w.internalFormat,Ce,Ue,w.colorSpace,w.isVideoTexture);he(te,w);let Ie,qe=w.mipmaps,Ve=w.isVideoTexture!==!0,it=we.__version===void 0||ae===!0,H=re.dataReady,Me=C(w,me);if(w.isDepthTexture)Fe=v(w.format===qi,w.type),it&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Fe,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Fe,me.width,me.height,0,Ce,Ue,null));else if(w.isDataTexture)if(qe.length>0){Ve&&it&&t.texStorage2D(i.TEXTURE_2D,Me,Fe,qe[0].width,qe[0].height);for(let se=0,le=qe.length;se<le;se++)Ie=qe[se],Ve?H&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ie.width,Ie.height,Ce,Ue,Ie.data):t.texImage2D(i.TEXTURE_2D,se,Fe,Ie.width,Ie.height,0,Ce,Ue,Ie.data);w.generateMipmaps=!1}else Ve?(it&&t.texStorage2D(i.TEXTURE_2D,Me,Fe,me.width,me.height),H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Ce,Ue,me.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,me.width,me.height,0,Ce,Ue,me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ve&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Fe,qe[0].width,qe[0].height,me.depth);for(let se=0,le=qe.length;se<le;se++)if(Ie=qe[se],w.format!==Jt)if(Ce!==null)if(Ve){if(H)if(w.layerUpdates.size>0){let Te=xu(Ie.width,Ie.height,w.format,w.type);for(let Se of w.layerUpdates){let Be=Ie.data.subarray(Se*Te/Ie.data.BYTES_PER_ELEMENT,(Se+1)*Te/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Se,Ie.width,Ie.height,1,Ce,Be)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ie.width,Ie.height,me.depth,Ce,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Fe,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ie.width,Ie.height,me.depth,Ce,Ue,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Fe,Ie.width,Ie.height,me.depth,0,Ce,Ue,Ie.data)}else{Ve&&it&&t.texStorage2D(i.TEXTURE_2D,Me,Fe,qe[0].width,qe[0].height);for(let se=0,le=qe.length;se<le;se++)Ie=qe[se],w.format!==Jt?Ce!==null?Ve?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Ie.width,Ie.height,Ce,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Fe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?H&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ie.width,Ie.height,Ce,Ue,Ie.data):t.texImage2D(i.TEXTURE_2D,se,Fe,Ie.width,Ie.height,0,Ce,Ue,Ie.data)}else if(w.isDataArrayTexture)if(Ve){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Fe,me.width,me.height,me.depth),H)if(w.layerUpdates.size>0){let se=xu(me.width,me.height,w.format,w.type);for(let le of w.layerUpdates){let Te=me.data.subarray(le*se/me.data.BYTES_PER_ELEMENT,(le+1)*se/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,me.width,me.height,1,Ce,Ue,Te)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,Ue,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,me.width,me.height,me.depth,0,Ce,Ue,me.data);else if(w.isData3DTexture)Ve?(it&&t.texStorage3D(i.TEXTURE_3D,Me,Fe,me.width,me.height,me.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,Ue,me.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,me.width,me.height,me.depth,0,Ce,Ue,me.data);else if(w.isFramebufferTexture){if(it)if(Ve)t.texStorage2D(i.TEXTURE_2D,Me,Fe,me.width,me.height);else{let se=me.width,le=me.height;for(let Te=0;Te<Me;Te++)t.texImage2D(i.TEXTURE_2D,Te,Fe,se,le,0,Ce,Ue,null),se>>=1,le>>=1}}else if(qe.length>0){if(Ve&&it){let se=pe(qe[0]);t.texStorage2D(i.TEXTURE_2D,Me,Fe,se.width,se.height)}for(let se=0,le=qe.length;se<le;se++)Ie=qe[se],Ve?H&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ce,Ue,Ie):t.texImage2D(i.TEXTURE_2D,se,Fe,Ce,Ue,Ie);w.generateMipmaps=!1}else if(Ve){if(it){let se=pe(me);t.texStorage2D(i.TEXTURE_2D,Me,Fe,se.width,se.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Ue,me)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Ce,Ue,me);m(w)&&p(te),we.__version=re.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function ne(E,w,q){if(w.image.length!==6)return;let te=ge(E,w),ae=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+q);let re=n.get(ae);if(ae.version!==re.__version||te===!0){t.activeTexture(i.TEXTURE0+q);let we=Ye.getPrimaries(Ye.workingColorSpace),be=w.colorSpace===Nn?null:Ye.getPrimaries(w.colorSpace),Ee=w.colorSpace===Nn||we===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,me=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let le=0;le<6;le++)!Xe&&!me?Ce[le]=_(w.image[le],!0,s.maxCubemapSize):Ce[le]=me?w.image[le].image:w.image[le],Ce[le]=ye(w,Ce[le]);let Ue=Ce[0],Fe=r.convert(w.format,w.colorSpace),Ie=r.convert(w.type),qe=y(w.internalFormat,Fe,Ie,w.colorSpace),Ve=w.isVideoTexture!==!0,it=re.__version===void 0||te===!0,H=ae.dataReady,Me=C(w,Ue);he(i.TEXTURE_CUBE_MAP,w);let se;if(Xe){Ve&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,qe,Ue.width,Ue.height);for(let le=0;le<6;le++){se=Ce[le].mipmaps;for(let Te=0;Te<se.length;Te++){let Se=se[Te];w.format!==Jt?Fe!==null?Ve?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,0,0,Se.width,Se.height,Fe,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,qe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,0,0,Se.width,Se.height,Fe,Ie,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,qe,Se.width,Se.height,0,Fe,Ie,Se.data)}}}else{if(se=w.mipmaps,Ve&&it){se.length>0&&Me++;let le=pe(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,qe,le.width,le.height)}for(let le=0;le<6;le++)if(me){Ve?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ce[le].width,Ce[le].height,Fe,Ie,Ce[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,qe,Ce[le].width,Ce[le].height,0,Fe,Ie,Ce[le].data);for(let Te=0;Te<se.length;Te++){let Be=se[Te].image[le].image;Ve?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,0,0,Be.width,Be.height,Fe,Ie,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,qe,Be.width,Be.height,0,Fe,Ie,Be.data)}}else{Ve?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Fe,Ie,Ce[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,qe,Fe,Ie,Ce[le]);for(let Te=0;Te<se.length;Te++){let Se=se[Te];Ve?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,0,0,Fe,Ie,Se.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,qe,Fe,Ie,Se.image[le])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),re.__version=ae.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function fe(E,w,q,te,ae,re){let we=r.convert(q.format,q.colorSpace),be=r.convert(q.type),Ee=y(q.internalFormat,we,be,q.colorSpace),Xe=n.get(w),me=n.get(q);if(me.__renderTarget=w,!Xe.__hasExternalTextures){let Ce=Math.max(1,w.width>>re),Ue=Math.max(1,w.height>>re);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,re,Ee,Ce,Ue,w.depth,0,we,be,null):t.texImage2D(ae,re,Ee,Ce,Ue,0,we,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),de(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ae,me.__webglTexture,0,J(w)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ae,me.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(E,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,E),w.depthBuffer){let te=w.depthTexture,ae=te&&te.isDepthTexture?te.type:null,re=v(w.stencilBuffer,ae),we=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=J(w);de(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,re,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,re,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,re,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,E)}else{let te=w.textures;for(let ae=0;ae<te.length;ae++){let re=te[ae],we=r.convert(re.format,re.colorSpace),be=r.convert(re.type),Ee=y(re.internalFormat,we,be,re.colorSpace),Xe=J(w);q&&de(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ee,w.width,w.height):de(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,Ee,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(w.depthTexture);te.__renderTarget=w,(!te.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);let ae=te.__webglTexture,re=J(w);if(w.depthTexture.format===ki)de(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(w.depthTexture.format===qi)de(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Re(E){let w=n.get(E),q=E.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==E.depthTexture){let te=E.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),te){let ae=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=te}if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");_e(w.__webglFramebuffer,E)}else if(q){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]===void 0)w.__webglDepthbuffer[te]=i.createRenderbuffer(),oe(w.__webglDepthbuffer[te],E,!1);else{let ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),oe(w.__webglDepthbuffer,E,!1);else{let te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(E,w,q){let te=n.get(E);w!==void 0&&fe(te.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Re(E)}function ue(E){let w=E.texture,q=n.get(E),te=n.get(w);E.addEventListener("dispose",P);let ae=E.textures,re=E.isWebGLCubeRenderTarget===!0,we=ae.length>1;if(we||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=w.version,o.memory.textures++),re){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)q.__webglFramebuffer[be][Ee]=i.createFramebuffer()}else q.__webglFramebuffer[be]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)q.__webglFramebuffer[be]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(we)for(let be=0,Ee=ae.length;be<Ee;be++){let Xe=n.get(ae[be]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&de(E)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let be=0;be<ae.length;be++){let Ee=ae[be];q.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[be]);let Xe=r.convert(Ee.format,Ee.colorSpace),me=r.convert(Ee.type),Ce=y(Ee.internalFormat,Xe,me,Ee.colorSpace,E.isXRRenderTarget===!0),Ue=J(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ce,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,q.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(q.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),he(i.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)fe(q.__webglFramebuffer[be][Ee],E,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ee);else fe(q.__webglFramebuffer[be],E,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let be=0,Ee=ae.length;be<Ee;be++){let Xe=ae[be],me=n.get(Xe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),he(i.TEXTURE_2D,Xe),fe(q.__webglFramebuffer,E,Xe,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),m(Xe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(be=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,te.__webglTexture),he(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)fe(q.__webglFramebuffer[Ee],E,w,i.COLOR_ATTACHMENT0,be,Ee);else fe(q.__webglFramebuffer,E,w,i.COLOR_ATTACHMENT0,be,0);m(w)&&p(be),t.unbindTexture()}E.depthBuffer&&Re(E)}function T(E){let w=E.textures;for(let q=0,te=w.length;q<te;q++){let ae=w[q];if(m(ae)){let re=b(E),we=n.get(ae).__webglTexture;t.bindTexture(re,we),p(re),t.unbindTexture()}}}let F=[],M=[];function K(E){if(E.samples>0){if(de(E)===!1){let w=E.textures,q=E.width,te=E.height,ae=i.COLOR_BUFFER_BIT,re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(E),be=w.length>1;if(be)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let Xe=n.get(w[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,q,te,0,0,q,te,ae,i.NEAREST),l===!0&&(F.length=0,M.length=0,F.push(i.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(F.push(re),M.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,M)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let Xe=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let w=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function J(E){return Math.min(s.maxSamples,E.samples)}function de(E){let w=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ie(E){let w=o.render.frame;u.get(E)!==w&&(u.set(E,w),E.update())}function ye(E,w){let q=E.colorSpace,te=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||q!==Qi&&q!==Nn&&(Ye.getTransfer(q)===Qe?(te!==Jt||ae!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=Y,this.setTexture3D=N,this.setTextureCube=L,this.rebindTextures=X,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=de}function k0(i,e){function t(n,s=Nn){let r,o=Ye.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zu)return i.BYTE;if(n===Hu)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===Gu)return i.ALPHA;if(n===Wu)return i.RGB;if(n===Jt)return i.RGBA;if(n===Xu)return i.LUMINANCE;if(n===qu)return i.LUMINANCE_ALPHA;if(n===ki)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===Yu)return i.RG;if(n===Gl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===_r||n===yr||n===br||n===xr)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===wa||n===Ma||n===Sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ea||n===Ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ea)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ca||n===Ia||n===Pa||n===Oa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===ka||n===Ba||n===za||n===Ha)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wr||n===Va||n===Ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wr)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zu||n===Wa||n===Xa||n===qa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ll=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ht=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},B0={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new un({vertexShader:z0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ul=class extends Sn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,_=new cl,m=t.getContextAttributes(),p=null,b=null,y=[],v=[],C=new ce,R=null,P=new Tt;P.viewport=new ht;let O=new Tt;O.viewport=new ht;let A=[P,O],x=new ll,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=y[$];return ne===void 0&&(ne=new _s,y[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=y[$];return ne===void 0&&(ne=new _s,y[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=y[$];return ne===void 0&&(ne=new _s,y[$]=ne),ne.getHandSpace()};function k($){let ne=v.indexOf($.inputSource);if(ne===-1)return;let fe=y[ne];fe!==void 0&&(fe.update($.inputSource,$.frame,c||o),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",U);for(let $=0;$<y.length;$++){let ne=v[$];ne!==null&&(v[$]=null,y[$].disconnect(ne))}I=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,b=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new An(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,fe=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?qi:ki,fe=m.stencil?Xi:ri);let _e={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new An(d.textureWidth,d.textureHeight,{format:Jt,type:Mn,depthTexture:new Ur(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U($){for(let ne=0;ne<$.removed.length;ne++){let fe=$.removed[ne],oe=v.indexOf(fe);oe>=0&&(v[oe]=null,y[oe].disconnect(fe))}for(let ne=0;ne<$.added.length;ne++){let fe=$.added[ne],oe=v.indexOf(fe);if(oe===-1){for(let Re=0;Re<y.length;Re++)if(Re>=v.length){v.push(fe),oe=Re;break}else if(v[Re]===null){v[Re]=fe,oe=Re;break}if(oe===-1)break}let _e=y[oe];_e&&_e.connect(fe)}}let Y=new D,N=new D;function L($,ne,fe){Y.setFromMatrixPosition(ne.matrixWorld),N.setFromMatrixPosition(fe.matrixWorld);let oe=Y.distanceTo(N),_e=ne.projectionMatrix.elements,Re=fe.projectionMatrix.elements,X=_e[14]/(_e[10]-1),ue=_e[14]/(_e[10]+1),T=(_e[9]+1)/_e[5],F=(_e[9]-1)/_e[5],M=(_e[8]-1)/_e[0],K=(Re[8]+1)/Re[0],J=X*M,de=X*K,ie=oe/(-M+K),ye=ie*-M;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ye),$.translateZ(ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let pe=X+ie,E=ue+ie,w=J-ye,q=de+(oe-ye),te=T*ue/E*pe,ae=F*ue/E*pe;$.projectionMatrix.makePerspective(w,q,te,ae,pe,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function B($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ne=$.near,fe=$.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),x.near=O.near=P.near=ne,x.far=O.far=P.far=fe,(I!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,z=x.far),P.layers.mask=$.layers.mask|2,O.layers.mask=$.layers.mask|4,x.layers.mask=P.layers.mask|O.layers.mask;let oe=$.parent,_e=x.cameras;B(x,oe);for(let Re=0;Re<_e.length;Re++)B(_e[Re],oe);_e.length===2?L(x,P,O):x.projectionMatrix.copy(P.projectionMatrix),Z($,x,oe)};function Z($,ne,fe){fe===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ws*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ee=null;function he($,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){let fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let oe=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Re=0;Re<fe.length;Re++){let X=fe[Re],ue=null;if(f!==null)ue=f.getViewport(X);else{let F=h.getViewSubImage(d,X);ue=F.viewport,Re===0&&(e.setRenderTargetTextures(b,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(b))}let T=A[Re];T===void 0&&(T=new Tt,T.layers.enable(Re),T.viewport=new ht,A[Re]=T),T.matrix.fromArray(X.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(X.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(ue.x,ue.y,ue.width,ue.height),Re===0&&(x.matrix.copy(T.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(T)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")){let Re=h.getDepthInformation(fe[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,s.renderState)}}for(let fe=0;fe<y.length;fe++){let oe=v[fe],_e=y[fe];oe!==null&&_e!==void 0&&_e.update(oe,ne,c||o)}ee&&ee($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let ge=new eh;ge.setAnimationLoop(he),this.setAnimationLoop=function($){ee=$},this.dispose=function(){}}},Qn=new Qt,V0=new et;function G0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===It&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===It&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),y=b.envMap,v=b.envMapRotation;y&&(m.envMap.value=y,Qn.copy(v),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Qn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let v=y.program;n.uniformBlockBinding(b,v)}function c(b,y){let v=s[b.id];v===void 0&&(g(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(b,C);let R=e.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function u(b){let y=h();b.__bindingPointIndex=y;let v=i.createBuffer(),C=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=s[b.id],v=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,P=v.length;R<P;R++){let O=Array.isArray(v[R])?v[R]:[v[R]];for(let A=0,x=O.length;A<x;A++){let I=O[A];if(f(I,R,A,C)===!0){let z=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],V=0;for(let U=0;U<k.length;U++){let Y=k[U],N=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,z+V,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,V),V+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,v,C){let R=b.value,P=y+"_"+v;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{let O=C[P];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return C[P]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(b){let y=b.uniforms,v=0,C=16;for(let P=0,O=y.length;P<O;P++){let A=Array.isArray(y[P])?y[P]:[y[P]];for(let x=0,I=A.length;x<I;x++){let z=A[x],k=Array.isArray(z.value)?z.value:[z.value];for(let V=0,U=k.length;V<U;V++){let Y=k[V],N=_(Y),L=v%C,B=L%N.boundary,Z=L+B;v+=B,Z!==0&&C-Z<N.storage&&(v+=C-Z),z.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=N.storage}}}let R=v%C;return R>0&&(v+=C-R),b.__size=v,b.__cache={},this}function _(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Nr=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=kn,this.toneMappingExposure=1;let v=this,C=!1,R=0,P=0,O=null,A=-1,x=null,I=new ht,z=new ht,k=null,V=new Ne(0),U=0,Y=t.width,N=t.height,L=1,B=null,Z=null,ee=new ht(0,0,Y,N),he=new ht(0,0,Y,N),ge=!1,$=new Ss,ne=!1,fe=!1,oe=new et,_e=new et,Re=new D,X=new ht,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},T=!1;function F(){return O===null?L:1}let M=n;function K(S,G){return t.getContext(S,G)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Se,!1),M===null){let G="webgl2";if(M=K(G,S),M===null)throw K(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let J,de,ie,ye,pe,E,w,q,te,ae,re,we,be,Ee,Xe,me,Ce,Ue,Fe,Ie,qe,Ve,it,H;function Me(){J=new og(M),J.init(),Ve=new k0(M,J),de=new eg(M,J,e,Ve),ie=new U0(M,J),de.reverseDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),ye=new cg(M),pe=new w0,E=new F0(M,J,ie,pe,de,Ve,ye),w=new ng(v),q=new rg(v),te=new mp(M),it=new jm(M,te),ae=new ag(M,te,ye,it),re=new hg(M,ae,te,ye),Fe=new ug(M,de,E),me=new tg(pe),we=new x0(v,w,q,J,de,it,me),be=new G0(v,pe),Ee=new S0,Xe=new I0(J),Ue=new Jm(v,w,q,ie,re,f,l),Ce=new L0(v,re,de),H=new W0(M,ye,de,ie),Ie=new Qm(M,J,ye),qe=new lg(M,J,ye),ye.programs=we.programs,v.capabilities=de,v.extensions=J,v.properties=pe,v.renderLists=Ee,v.shadowMap=Ce,v.state=ie,v.info=ye}Me();let se=new ul(v,M);this.xr=se,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let S=J.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=J.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(S){S!==void 0&&(L=S,this.setSize(Y,N,!1))},this.getSize=function(S){return S.set(Y,N)},this.setSize=function(S,G,j=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,N=G,t.width=Math.floor(S*L),t.height=Math.floor(G*L),j===!0&&(t.style.width=S+"px",t.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(Y*L,N*L).floor()},this.setDrawingBufferSize=function(S,G,j){Y=S,N=G,L=j,t.width=Math.floor(S*j),t.height=Math.floor(G*j),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,G,j,Q){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,G,j,Q),ie.viewport(I.copy(ee).multiplyScalar(L).round())},this.getScissor=function(S){return S.copy(he)},this.setScissor=function(S,G,j,Q){S.isVector4?he.set(S.x,S.y,S.z,S.w):he.set(S,G,j,Q),ie.scissor(z.copy(he).multiplyScalar(L).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(S){ie.setScissorTest(ge=S)},this.setOpaqueSort=function(S){B=S},this.setTransparentSort=function(S){Z=S},this.getClearColor=function(S){return S.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(S=!0,G=!0,j=!0){let Q=0;if(S){let W=!1;if(O!==null){let ve=O.texture.format;W=ve===Wl||ve===Gl||ve===Vl}if(W){let ve=O.texture.type,Ae=ve===Mn||ve===ri||ve===xs||ve===Xi||ve===Bl||ve===zl,Pe=Ue.getClearColor(),Oe=Ue.getClearAlpha(),ke=Pe.r,ze=Pe.g,Le=Pe.b;Ae?(g[0]=ke,g[1]=ze,g[2]=Le,g[3]=Oe,M.clearBufferuiv(M.COLOR,0,g)):(_[0]=ke,_[1]=ze,_[2]=Le,_[3]=Oe,M.clearBufferiv(M.COLOR,0,_))}else Q|=M.COLOR_BUFFER_BIT}G&&(Q|=M.DEPTH_BUFFER_BIT),j&&(Q|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ee.dispose(),Xe.dispose(),pe.dispose(),w.dispose(),q.dispose(),re.dispose(),it.dispose(),H.dispose(),we.dispose(),se.dispose(),se.removeEventListener("sessionstart",tc),se.removeEventListener("sessionend",nc),Xn.stop()};function le(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=ye.autoReset,G=Ce.enabled,j=Ce.autoUpdate,Q=Ce.needsUpdate,W=Ce.type;Me(),ye.autoReset=S,Ce.enabled=G,Ce.autoUpdate=j,Ce.needsUpdate=Q,Ce.type=W}function Se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){let G=S.target;G.removeEventListener("dispose",Be),ut(G)}function ut(S){bt(S),pe.remove(S)}function bt(S){let G=pe.get(S).programs;G!==void 0&&(G.forEach(function(j){we.releaseProgram(j)}),S.isShaderMaterial&&we.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,j,Q,W,ve){G===null&&(G=ue);let Ae=W.isMesh&&W.matrixWorld.determinant()<0,Pe=wh(S,G,j,Q,W);ie.setMaterial(Q,Ae);let Oe=j.index,ke=1;if(Q.wireframe===!0){if(Oe=ae.getWireframeAttribute(j),Oe===void 0)return;ke=2}let ze=j.drawRange,Le=j.attributes.position,Ze=ze.start*ke,st=(ze.start+ze.count)*ke;ve!==null&&(Ze=Math.max(Ze,ve.start*ke),st=Math.min(st,(ve.start+ve.count)*ke)),Oe!==null?(Ze=Math.max(Ze,0),st=Math.min(st,Oe.count)):Le!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Le.count));let rt=st-Ze;if(rt<0||rt===1/0)return;it.setup(W,Q,Pe,j,Oe);let Rt,$e=Ie;if(Oe!==null&&(Rt=te.get(Oe),$e=qe,$e.setIndex(Rt)),W.isMesh)Q.wireframe===!0?(ie.setLineWidth(Q.wireframeLinewidth*F()),$e.setMode(M.LINES)):$e.setMode(M.TRIANGLES);else if(W.isLine){let De=Q.linewidth;De===void 0&&(De=1),ie.setLineWidth(De*F()),W.isLineSegments?$e.setMode(M.LINES):W.isLineLoop?$e.setMode(M.LINE_LOOP):$e.setMode(M.LINE_STRIP)}else W.isPoints?$e.setMode(M.POINTS):W.isSprite&&$e.setMode(M.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)$e.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))$e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let De=W._multiDrawStarts,dn=W._multiDrawCounts,Ke=W._multiDrawCount,Wt=Oe?te.get(Oe).bytesPerElement:1,pi=pe.get(Q).currentProgram.getUniforms();for(let Dt=0;Dt<Ke;Dt++)pi.setValue(M,"_gl_DrawID",Dt),$e.render(De[Dt]/Wt,dn[Dt])}else if(W.isInstancedMesh)$e.renderInstances(Ze,rt,W.count);else if(j.isInstancedBufferGeometry){let De=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,dn=Math.min(j.instanceCount,De);$e.renderInstances(Ze,rt,dn)}else $e.render(Ze,rt)};function Je(S,G,j){S.transparent===!0&&S.side===zt&&S.forceSinglePass===!1?(S.side=It,S.needsUpdate=!0,Ds(S,G,j),S.side=zn,S.needsUpdate=!0,Ds(S,G,j),S.side=zt):Ds(S,G,j)}this.compile=function(S,G,j=null){j===null&&(j=S),p=Xe.get(j),p.init(G),y.push(p),j.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),S!==j&&S.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let Q=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ve=W.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){let Pe=ve[Ae];Je(Pe,j,W),Q.add(Pe)}else Je(ve,j,W),Q.add(ve)}),y.pop(),p=null,Q},this.compileAsync=function(S,G,j=null){let Q=this.compile(S,G,j);return new Promise(W=>{function ve(){if(Q.forEach(function(Ae){pe.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){W(S);return}setTimeout(ve,10)}J.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Gt=null;function hn(S){Gt&&Gt(S)}function tc(){Xn.stop()}function nc(){Xn.start()}let Xn=new eh;Xn.setAnimationLoop(hn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(S){Gt=S,se.setAnimationLoop(S),S===null?Xn.stop():Xn.start()},se.addEventListener("sessionstart",tc),se.addEventListener("sessionend",nc),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,G,O),p=Xe.get(S,y.length),p.init(G),y.push(p),_e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$.setFromProjectionMatrix(_e),fe=this.localClippingEnabled,ne=me.init(this.clippingPlanes,fe),m=Ee.get(S,b.length),m.init(),b.push(m),se.enabled===!0&&se.isPresenting===!0){let ve=v.xr.getDepthSensingMesh();ve!==null&&_o(ve,G,-1/0,v.sortObjects)}_o(S,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(B,Z),T=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,T&&Ue.addToRenderList(m,S),this.info.render.frame++,ne===!0&&me.beginShadows();let j=p.state.shadowsArray;Ce.render(j,S,G),ne===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){let ve=G.cameras;if(W.length>0)for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){let Oe=ve[Ae];sc(Q,W,S,Oe)}T&&Ue.render(S);for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){let Oe=ve[Ae];ic(m,S,Oe,Oe.viewport)}}else W.length>0&&sc(Q,W,S,G),T&&Ue.render(S),ic(m,S,G);O!==null&&(E.updateMultisampleRenderTarget(O),E.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(v,S,G),it.resetDefaultState(),A=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],ne===!0&&me.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function _o(S,G,j,Q){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){Q&&X.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);let Ae=re.update(S),Pe=S.material;Pe.visible&&m.push(S,Ae,Pe,j,X.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){let Ae=re.update(S),Pe=S.material;if(Q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),X.copy(S.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),X.copy(Ae.boundingSphere.center)),X.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(Pe)){let Oe=Ae.groups;for(let ke=0,ze=Oe.length;ke<ze;ke++){let Le=Oe[ke],Ze=Pe[Le.materialIndex];Ze&&Ze.visible&&m.push(S,Ae,Ze,j,X.z,Le)}}else Pe.visible&&m.push(S,Ae,Pe,j,X.z,null)}}let ve=S.children;for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++)_o(ve[Ae],G,j,Q)}function ic(S,G,j,Q){let W=S.opaque,ve=S.transmissive,Ae=S.transparent;p.setupLightsView(j),ne===!0&&me.setGlobalState(v.clippingPlanes,j),Q&&ie.viewport(I.copy(Q)),W.length>0&&Ls(W,G,j),ve.length>0&&Ls(ve,G,j),Ae.length>0&&Ls(Ae,G,j),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function sc(S,G,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new An(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Ps:Mn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));let ve=p.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||I;ve.setSize(Ae.z,Ae.w);let Pe=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(V),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),T&&Ue.render(j);let Oe=v.toneMapping;v.toneMapping=kn;let ke=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ne===!0&&me.setGlobalState(v.clippingPlanes,Q),Ls(S,j,Q),E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve),J.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Le=0,Ze=G.length;Le<Ze;Le++){let st=G[Le],rt=st.object,Rt=st.geometry,$e=st.material,De=st.group;if($e.side===zt&&rt.layers.test(Q.layers)){let dn=$e.side;$e.side=It,$e.needsUpdate=!0,rc(rt,j,Q,Rt,$e,De),$e.side=dn,$e.needsUpdate=!0,ze=!0}}ze===!0&&(E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve))}v.setRenderTarget(Pe),v.setClearColor(V,U),ke!==void 0&&(Q.viewport=ke),v.toneMapping=Oe}function Ls(S,G,j){let Q=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ve=S.length;W<ve;W++){let Ae=S[W],Pe=Ae.object,Oe=Ae.geometry,ke=Q===null?Ae.material:Q,ze=Ae.group;Pe.layers.test(j.layers)&&rc(Pe,G,j,Oe,ke,ze)}}function rc(S,G,j,Q,W,ve){S.onBeforeRender(v,G,j,Q,W,ve),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(v,G,j,Q,S,ve),W.transparent===!0&&W.side===zt&&W.forceSinglePass===!1?(W.side=It,W.needsUpdate=!0,v.renderBufferDirect(j,G,Q,W,S,ve),W.side=zn,W.needsUpdate=!0,v.renderBufferDirect(j,G,Q,W,S,ve),W.side=zt):v.renderBufferDirect(j,G,Q,W,S,ve),S.onAfterRender(v,G,j,Q,W,ve)}function Ds(S,G,j){G.isScene!==!0&&(G=ue);let Q=pe.get(S),W=p.state.lights,ve=p.state.shadowsArray,Ae=W.state.version,Pe=we.getParameters(S,W.state,ve,G,j),Oe=we.getProgramCacheKey(Pe),ke=Q.programs;Q.environment=S.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(S.isMeshStandardMaterial?q:w).get(S.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&S.envMap===null?G.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",Be),ke=new Map,Q.programs=ke);let ze=ke.get(Oe);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===Ae)return ac(S,Pe),ze}else Pe.uniforms=we.getUniforms(S),S.onBeforeCompile(Pe,v),ze=we.acquireProgram(Pe,Oe),ke.set(Oe,ze),Q.uniforms=Pe.uniforms;let Le=Q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=me.uniform),ac(S,Pe),Q.needsLights=Sh(S),Q.lightsStateVersion=Ae,Q.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function oc(S){if(S.uniformsList===null){let G=S.currentProgram.getUniforms();S.uniformsList=Hi.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function ac(S,G){let j=pe.get(S);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function wh(S,G,j,Q,W){G.isScene!==!0&&(G=ue),E.resetTextureUnits();let ve=G.fog,Ae=Q.isMeshStandardMaterial?G.environment:null,Pe=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Qi,Oe=(Q.isMeshStandardMaterial?q:w).get(Q.envMap||Ae),ke=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ze=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Le=!!j.morphAttributes.position,Ze=!!j.morphAttributes.normal,st=!!j.morphAttributes.color,rt=kn;Q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(rt=v.toneMapping);let Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$e=Rt!==void 0?Rt.length:0,De=pe.get(Q),dn=p.state.lights;if(ne===!0&&(fe===!0||S!==x)){let kt=S===x&&Q.id===A;me.setState(Q,S,kt)}let Ke=!1;Q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==dn.state.version||De.outputColorSpace!==Pe||W.isBatchedMesh&&De.batching===!1||!W.isBatchedMesh&&De.batching===!0||W.isBatchedMesh&&De.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&De.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||W.isInstancedMesh&&De.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&De.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&De.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&De.instancingMorph===!1&&W.morphTexture!==null||De.envMap!==Oe||Q.fog===!0&&De.fog!==ve||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==me.numPlanes||De.numIntersection!==me.numIntersection)||De.vertexAlphas!==ke||De.vertexTangents!==ze||De.morphTargets!==Le||De.morphNormals!==Ze||De.morphColors!==st||De.toneMapping!==rt||De.morphTargetsCount!==$e)&&(Ke=!0):(Ke=!0,De.__version=Q.version);let Wt=De.currentProgram;Ke===!0&&(Wt=Ds(Q,G,W));let pi=!1,Dt=!1,ts=!1,ot=Wt.getUniforms(),nn=De.uniforms;if(ie.useProgram(Wt.program)&&(pi=!0,Dt=!0,ts=!0),Q.id!==A&&(A=Q.id,Dt=!0),pi||x!==S){ie.buffers.depth.getReversed()?(oe.copy(S.projectionMatrix),$d(oe),Kd(oe),ot.setValue(M,"projectionMatrix",oe)):ot.setValue(M,"projectionMatrix",S.projectionMatrix),ot.setValue(M,"viewMatrix",S.matrixWorldInverse);let Rn=ot.map.cameraPosition;Rn!==void 0&&Rn.setValue(M,Re.setFromMatrixPosition(S.matrixWorld)),de.logarithmicDepthBuffer&&ot.setValue(M,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ot.setValue(M,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Dt=!0,ts=!0)}if(W.isSkinnedMesh){ot.setOptional(M,W,"bindMatrix"),ot.setOptional(M,W,"bindMatrixInverse");let kt=W.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ot.setValue(M,"boneTexture",kt.boneTexture,E))}W.isBatchedMesh&&(ot.setOptional(M,W,"batchingTexture"),ot.setValue(M,"batchingTexture",W._matricesTexture,E),ot.setOptional(M,W,"batchingIdTexture"),ot.setValue(M,"batchingIdTexture",W._indirectTexture,E),ot.setOptional(M,W,"batchingColorTexture"),W._colorsTexture!==null&&ot.setValue(M,"batchingColorTexture",W._colorsTexture,E));let ns=j.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Fe.update(W,j,Wt),(Dt||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,ot.setValue(M,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(nn.envMap.value=Oe,nn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(nn.envMapIntensity.value=G.environmentIntensity),Dt&&(ot.setValue(M,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&Mh(nn,ts),ve&&Q.fog===!0&&be.refreshFogUniforms(nn,ve),be.refreshMaterialUniforms(nn,Q,L,N,p.state.transmissionRenderTarget[S.id]),Hi.upload(M,oc(De),nn,E)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Hi.upload(M,oc(De),nn,E),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ot.setValue(M,"center",W.center),ot.setValue(M,"modelViewMatrix",W.modelViewMatrix),ot.setValue(M,"normalMatrix",W.normalMatrix),ot.setValue(M,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let kt=Q.uniformsGroups;for(let Rn=0,Cn=kt.length;Rn<Cn;Rn++){let lc=kt[Rn];H.update(lc,Wt),H.bind(lc,Wt)}}return Wt}function Mh(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function Sh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,G,j){pe.get(S.texture).__webglTexture=G,pe.get(S.depthTexture).__webglTexture=j;let Q=pe.get(S);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,G){let j=pe.get(S);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,j=0){O=S,R=G,P=j;let Q=!0,W=null,ve=!1,Ae=!1;if(S){let Oe=pe.get(S);if(Oe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(M.FRAMEBUFFER,null),Q=!1;else if(Oe.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(Oe.__hasExternalTextures)E.rebindTextures(S,pe.get(S.texture).__webglTexture,pe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Le=S.depthTexture;if(Oe.__boundDepthTexture!==Le){if(Le!==null&&pe.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}let ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);let ze=pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?W=ze[G][j]:W=ze[G],ve=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?W=pe.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[j]:W=ze,I.copy(S.viewport),z.copy(S.scissor),k=S.scissorTest}else I.copy(ee).multiplyScalar(L).floor(),z.copy(he).multiplyScalar(L).floor(),k=ge;if(ie.bindFramebuffer(M.FRAMEBUFFER,W)&&Q&&ie.drawBuffers(S,W),ie.viewport(I),ie.scissor(z),ie.setScissorTest(k),ve){let Oe=pe.get(S.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,j)}else if(Ae){let Oe=pe.get(S.texture),ke=G||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Oe.__webglTexture,j||0,ke)}A=-1},this.readRenderTargetPixels=function(S,G,j,Q,W,ve,Ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){ie.bindFramebuffer(M.FRAMEBUFFER,Pe);try{let Oe=S.texture,ke=Oe.format,ze=Oe.type;if(!de.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-Q&&j>=0&&j<=S.height-W&&M.readPixels(G,j,Q,W,Ve.convert(ke),Ve.convert(ze),ve)}finally{let Oe=O!==null?pe.get(O).__webglFramebuffer:null;ie.bindFramebuffer(M.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,G,j,Q,W,ve,Ae){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){let Oe=S.texture,ke=Oe.format,ze=Oe.type;if(!de.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=S.width-Q&&j>=0&&j<=S.height-W){ie.bindFramebuffer(M.FRAMEBUFFER,Pe);let Le=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Le),M.bufferData(M.PIXEL_PACK_BUFFER,ve.byteLength,M.STREAM_READ),M.readPixels(G,j,Q,W,Ve.convert(ke),Ve.convert(ze),0);let Ze=O!==null?pe.get(O).__webglFramebuffer:null;ie.bindFramebuffer(M.FRAMEBUFFER,Ze);let st=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Zd(M,st,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Le),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,ve),M.deleteBuffer(Le),M.deleteSync(st),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,G=null,j=0){S.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1]);let Q=Math.pow(2,-j),W=Math.floor(S.image.width*Q),ve=Math.floor(S.image.height*Q),Ae=G!==null?G.x:0,Pe=G!==null?G.y:0;E.setTexture2D(S,0),M.copyTexSubImage2D(M.TEXTURE_2D,j,0,0,Ae,Pe,W,ve),ie.unbindTexture()},this.copyTextureToTexture=function(S,G,j=null,Q=null,W=0){S.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,S=arguments[1],G=arguments[2],W=arguments[3]||0,j=null);let ve,Ae,Pe,Oe,ke,ze,Le,Ze,st,rt=S.isCompressedTexture?S.mipmaps[W]:S.image;j!==null?(ve=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,Oe=j.min.x,ke=j.min.y,ze=j.isBox3?j.min.z:0):(ve=rt.width,Ae=rt.height,Pe=rt.depth||1,Oe=0,ke=0,ze=0),Q!==null?(Le=Q.x,Ze=Q.y,st=Q.z):(Le=0,Ze=0,st=0);let Rt=Ve.convert(G.format),$e=Ve.convert(G.type),De;G.isData3DTexture?(E.setTexture3D(G,0),De=M.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(E.setTexture2DArray(G,0),De=M.TEXTURE_2D_ARRAY):(E.setTexture2D(G,0),De=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,G.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,G.unpackAlignment);let dn=M.getParameter(M.UNPACK_ROW_LENGTH),Ke=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Wt=M.getParameter(M.UNPACK_SKIP_PIXELS),pi=M.getParameter(M.UNPACK_SKIP_ROWS),Dt=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,rt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,rt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Oe),M.pixelStorei(M.UNPACK_SKIP_ROWS,ke),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ze);let ts=S.isDataArrayTexture||S.isData3DTexture,ot=G.isDataArrayTexture||G.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let nn=pe.get(S),ns=pe.get(G),kt=pe.get(nn.__renderTarget),Rn=pe.get(ns.__renderTarget);ie.bindFramebuffer(M.READ_FRAMEBUFFER,kt.__webglFramebuffer),ie.bindFramebuffer(M.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Cn=0;Cn<Pe;Cn++)ts&&M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,pe.get(S).__webglTexture,W,ze+Cn),S.isDepthTexture?(ot&&M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,pe.get(G).__webglTexture,W,st+Cn),M.blitFramebuffer(Oe,ke,ve,Ae,Le,Ze,ve,Ae,M.DEPTH_BUFFER_BIT,M.NEAREST)):ot?M.copyTexSubImage3D(De,W,Le,Ze,st+Cn,Oe,ke,ve,Ae):M.copyTexSubImage2D(De,W,Le,Ze,st+Cn,Oe,ke,ve,Ae);ie.bindFramebuffer(M.READ_FRAMEBUFFER,null),ie.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else ot?S.isDataTexture||S.isData3DTexture?M.texSubImage3D(De,W,Le,Ze,st,ve,Ae,Pe,Rt,$e,rt.data):G.isCompressedArrayTexture?M.compressedTexSubImage3D(De,W,Le,Ze,st,ve,Ae,Pe,Rt,rt.data):M.texSubImage3D(De,W,Le,Ze,st,ve,Ae,Pe,Rt,$e,rt):S.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,W,Le,Ze,ve,Ae,Rt,$e,rt.data):S.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,W,Le,Ze,rt.width,rt.height,Rt,rt.data):M.texSubImage2D(M.TEXTURE_2D,W,Le,Ze,ve,Ae,Rt,$e,rt);M.pixelStorei(M.UNPACK_ROW_LENGTH,dn),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Ke),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Wt),M.pixelStorei(M.UNPACK_SKIP_ROWS,pi),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Dt),W===0&&G.generateMipmaps&&M.generateMipmap(De),ie.unbindTexture()},this.copyTextureToTexture3D=function(S,G,j=null,Q=null,W=0){return S.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,S=arguments[2],G=arguments[3],W=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,G,j,Q,W)},this.initRenderTarget=function(S){pe.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ie.unbindTexture()},this.resetState=function(){R=0,P=0,O=null,ie.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var Fr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kr=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},At=new D,Br=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zi=class extends ln{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ii,cs=new D,Pi=new D,Oi=new D,Li=new ce,us=new ce,rh=new et,rr=new D,hs=new D,or=new D,wu=new ce,ta=new ce,Mu=new ce,zr=class extends yt{constructor(e=new Zi){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hl(t,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new Br(n,3,0,!1)),Ii.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Ii,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),rh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Oi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ar(rr.set(-.5,-.5,0),Oi,o,Pi,s,r),ar(hs.set(.5,-.5,0),Oi,o,Pi,s,r),ar(or.set(.5,.5,0),Oi,o,Pi,s,r),wu.set(0,0),ta.set(1,0),Mu.set(1,1);let a=e.ray.intersectTriangle(rr,hs,or,!1,cs);if(a===null&&(ar(hs.set(-.5,.5,0),Oi,o,Pi,s,r),ta.set(0,1),a=e.ray.intersectTriangle(rr,or,hs,!1,cs),a===null))return;let l=e.ray.origin.distanceTo(cs);l<e.near||l>e.far||t.push({distance:l,point:cs.clone(),uv:bn.getInterpolation(cs,rr,hs,or,wu,ta,Mu,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ar(i,e,t,n,s,r){Li.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(us.x=r*Li.x-s*Li.y,us.y=s*Li.x+r*Li.y):us.copy(Li),i.copy(e),i.x+=us.x,i.y+=us.y,i.applyMatrix4(rh)}var dl=class extends Ot{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ft,u=Ft,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $i=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Di=new et,Su=new et,lr=[],Au=new En,X0=new et,ds=new pt,ps=new Hn,Hr=class extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,X0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Au.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(Au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),ps.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),Su.multiplyMatrices(n,Di),ds.matrixWorld=Su,ds.raycast(e,lr);for(let o=0,a=lr.length;o<a;o++){let l=lr[o];l.instanceId=r,l.object=this,t.push(l)}lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dl(new Float32Array(s*this.count),s,this.count,Hl,on));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Gn=class extends ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vr=new D,Gr=new D,Eu=new et,fs=new oi,cr=new Hn,na=new D,Tu=new D,pl=class extends yt{constructor(e=new Mt,t=new Gn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vr.fromBufferAttribute(t,s-1),Gr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vr.distanceTo(Gr);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;Eu.copy(s).invert(),fs.copy(e.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=u.getX(_),b=u.getX(_+1),y=ur(this,e,fs,l,p,b);y&&t.push(y)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(f),p=ur(this,e,fs,l,_,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=ur(this,e,fs,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){let _=ur(this,e,fs,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ur(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Vr.fromBufferAttribute(o,s),Gr.fromBufferAttribute(o,r),t.distanceSqToSegment(Vr,Gr,na,Tu)>n)return;na.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(na);if(!(l<e.near||l>e.far))return{distance:l,point:Tu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Ru=new D,Cu=new D,ai=class extends pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ru.fromBufferAttribute(t,s),Cu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ru.distanceTo(Cu);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Wr=class extends Ot{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,s=[],r=[],o=[],a=new D,l=new et;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ft(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ft(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},As=class extends Vt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fl=class extends As{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $l(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var hr=new D,ia=new $l,sa=new $l,ra=new $l,ml=class extends Vt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(hr.subVectors(s[0],s[1]).add(s[0]),c=hr);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(hr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=hr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ia.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),sa.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),ra.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),sa.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ra.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Iu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function q0(i,e){let t=1-i;return t*t*e}function Y0(i,e){return 2*(1-i)*i*e}function Z0(i,e){return i*i*e}function ys(i,e,t,n){return q0(i,e)+Y0(i,t)+Z0(i,n)}function $0(i,e){let t=1-i;return t*t*t*e}function K0(i,e){let t=1-i;return 3*t*t*i*e}function J0(i,e){return 3*(1-i)*i*i*e}function j0(i,e){return i*i*i*e}function bs(i,e,t,n,s){return $0(i,e)+K0(i,t)+J0(i,n)+j0(i,s)}var Xr=class extends Vt{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(e,s.x,r.x,o.x,a.x),bs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gl=class extends Vt{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(e,s.x,r.x,o.x,a.x),bs(e,s.y,r.y,o.y,a.y),bs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qr=class extends Vt{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends Vt{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends Vt{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ys(e,s.x,r.x,o.x),ys(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends Vt{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ys(e,s.x,r.x,o.x),ys(e,s.y,r.y,o.y),ys(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends Vt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Iu(a,l.x,c.x,u.x,h.x),Iu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},yl=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:ml,CubicBezierCurve:Xr,CubicBezierCurve3:gl,EllipseCurve:As,LineCurve:qr,LineCurve3:vl,QuadraticBezierCurve:Yr,QuadraticBezierCurve3:_l,SplineCurve:Zr}),bl=class extends Vt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new yl[s.type]().fromJSON(s))}return this}},Es=class extends bl{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qr(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Yr(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Xr(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Zr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new As(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xl=class i extends Mt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new D,d=new ce,f=new D,g=new D,_=new D,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=t;b++){let y=n+b*u*s,v=Math.sin(y),C=Math.cos(y);for(let R=0;R<=e.length-1;R++){h.x=e[R].x*v,h.y=e[R].y,h.z=e[R].x*C,o.push(h.x,h.y,h.z),d.x=b/t,d.y=R/(e.length-1),a.push(d.x,d.y);let P=l[3*R+0]*v,O=l[3*R+1],A=l[3*R+0]*C;c.push(P,O,A)}}for(let b=0;b<t;b++)for(let y=0;y<e.length-1;y++){let v=y+b*e.length,C=v,R=v+e.length,P=v+e.length+1,O=v+1;r.push(C,R,O),r.push(P,O,R)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},$r=class i extends xl{constructor(e=1,t=1,n=4,s=8){let r=new Es;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var dr=new D,pr=new D,oa=new D,fr=new bn,Ki=class extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Bi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:p}=fr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),fr.getNormal(oa),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let y=(b+1)%3,v=h[b],C=h[y],R=fr[u[b]],P=fr[u[y]],O=`${v}_${C}`,A=`${C}_${v}`;A in d&&d[A]?(oa.dot(d[A].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(P.x,P.y,P.z)),d[A]=null):O in d||(d[O]={index0:c[b],index1:c[y],normal:oa.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];dr.fromBufferAttribute(a,_),pr.fromBufferAttribute(a,m),f.push(dr.x,dr.y,dr.z),f.push(pr.x,pr.y,pr.z)}this.setAttribute("position",new at(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ji=class extends Es{constructor(e){super(e),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Es().fromJSON(s))}return this}},Q0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=oh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=s1(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Ts(r,o,t,a,l,f,0),o}};function oh(i,e,t,n,s){let r,o;if(s===m1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Pu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Pu(r,i[r],i[r+1],o);return o&&uo(o,o.next)&&(Cs(o),o=o.next),o}function li(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(uo(t,t.next)||ct(t.prev,t,t.next)===0)){if(Cs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ts(i,e,t,n,s,r,o){if(!i)return;!o&&r&&c1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?t1(i,n,s,r):e1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Cs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=n1(li(i),e,t),Ts(i,e,t,n,s,r,2)):o===2&&i1(i,e,t,n,s,r):Ts(li(i),e,t,n,s,r,1);break}}}function e1(i){let e=i.prev,t=i,n=i.next;if(ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Ni(s,a,r,l,o,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function t1(i,e,t,n){let s=i.prev,r=i,o=i.next;if(ct(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=wl(f,g,e,t,n),b=wl(_,m,e,t,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ni(a,u,l,h,c,d,y.x,y.y)&&ct(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ni(a,u,l,h,c,d,v.x,v.y)&&ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ni(a,u,l,h,c,d,y.x,y.y)&&ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ni(a,u,l,h,c,d,v.x,v.y)&&ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function n1(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!uo(s,r)&&ah(s,n,n.next,r)&&Rs(s,r)&&Rs(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Cs(n),Cs(n.next),n=i=r),n=n.next}while(n!==i);return li(n)}function i1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&d1(o,a)){let l=lh(o,a);o=li(o,o.next),l=li(l,l.next),Ts(o,e,t,n,s,r,0),Ts(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function s1(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=oh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(h1(c));for(s.sort(r1),r=0;r<s.length;r++)t=o1(s[r],t);return t}function r1(i,e){return i.x-e.x}function o1(i,e){let t=a1(i,e);if(!t)return e;let n=lh(t,i);return li(n,n.next),li(t,t.next)}function a1(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ni(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Rs(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&l1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function l1(i,e){return ct(i.prev,i,e.prev)<0&&ct(e.next,i,i.next)<0}function c1(i,e,t,n){let s=i;do s.z===0&&(s.z=wl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,u1(s)}function u1(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function wl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function h1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ni(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function d1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!p1(i,e)&&(Rs(i,e)&&Rs(e,i)&&f1(i,e)&&(ct(i.prev,i,e.prev)||ct(i,e.prev,e))||uo(i,e)&&ct(i.prev,i,i.next)>0&&ct(e.prev,e,e.next)>0)}function ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function uo(i,e){return i.x===e.x&&i.y===e.y}function ah(i,e,t,n){let s=gr(ct(i,e,t)),r=gr(ct(i,e,n)),o=gr(ct(t,n,i)),a=gr(ct(t,n,e));return!!(s!==r&&o!==a||s===0&&mr(i,t,e)||r===0&&mr(i,n,e)||o===0&&mr(t,i,n)||a===0&&mr(t,e,n))}function mr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function gr(i){return i>0?1:i<0?-1:0}function p1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ah(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Rs(i,e){return ct(i.prev,i,i.next)<0?ct(i,e,i.next)>=0&&ct(i,i.prev,e)>=0:ct(i,e,i.prev)<0||ct(i,i.next,e)<0}function f1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function lh(i,e){let t=new Ml(i.i,i.x,i.y),n=new Ml(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pu(i,e,t,n){let s=new Ml(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ml(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Bn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ou(e),Lu(n,e);let o=e.length;t.forEach(Ou);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Lu(n,t[l]);let a=Q0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ou(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Lu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Kr=class i extends Mt{constructor(e=new Ji([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:g1,y,v=!1,C,R,P,O;p&&(y=p.getSpacedPoints(u),v=!0,d=!1,C=p.computeFrenetFrames(u,!1),R=new D,P=new D,O=new D),d||(m=0,f=0,g=0,_=0);let A=a.extractPoints(c),x=A.shape,I=A.holes;if(!Bn.isClockWise(x)){x=x.reverse();for(let T=0,F=I.length;T<F;T++){let M=I[T];Bn.isClockWise(M)&&(I[T]=M.reverse())}}let k=Bn.triangulateShape(x,I),V=x;for(let T=0,F=I.length;T<F;T++){let M=I[T];x=x.concat(M)}function U(T,F,M){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(F,M)}let Y=x.length,N=k.length;function L(T,F,M){let K,J,de,ie=T.x-F.x,ye=T.y-F.y,pe=M.x-T.x,E=M.y-T.y,w=ie*ie+ye*ye,q=ie*E-ye*pe;if(Math.abs(q)>Number.EPSILON){let te=Math.sqrt(w),ae=Math.sqrt(pe*pe+E*E),re=F.x-ye/te,we=F.y+ie/te,be=M.x-E/ae,Ee=M.y+pe/ae,Xe=((be-re)*E-(Ee-we)*pe)/(ie*E-ye*pe);K=re+ie*Xe-T.x,J=we+ye*Xe-T.y;let me=K*K+J*J;if(me<=2)return new ce(K,J);de=Math.sqrt(me/2)}else{let te=!1;ie>Number.EPSILON?pe>Number.EPSILON&&(te=!0):ie<-Number.EPSILON?pe<-Number.EPSILON&&(te=!0):Math.sign(ye)===Math.sign(E)&&(te=!0),te?(K=-ye,J=ie,de=Math.sqrt(w)):(K=ie,J=ye,de=Math.sqrt(w/2))}return new ce(K/de,J/de)}let B=[];for(let T=0,F=V.length,M=F-1,K=T+1;T<F;T++,M++,K++)M===F&&(M=0),K===F&&(K=0),B[T]=L(V[T],V[M],V[K]);let Z=[],ee,he=B.concat();for(let T=0,F=I.length;T<F;T++){let M=I[T];ee=[];for(let K=0,J=M.length,de=J-1,ie=K+1;K<J;K++,de++,ie++)de===J&&(de=0),ie===J&&(ie=0),ee[K]=L(M[K],M[de],M[ie]);Z.push(ee),he=he.concat(ee)}for(let T=0;T<m;T++){let F=T/m,M=f*Math.cos(F*Math.PI/2),K=g*Math.sin(F*Math.PI/2)+_;for(let J=0,de=V.length;J<de;J++){let ie=U(V[J],B[J],K);oe(ie.x,ie.y,-M)}for(let J=0,de=I.length;J<de;J++){let ie=I[J];ee=Z[J];for(let ye=0,pe=ie.length;ye<pe;ye++){let E=U(ie[ye],ee[ye],K);oe(E.x,E.y,-M)}}}let ge=g+_;for(let T=0;T<Y;T++){let F=d?U(x[T],he[T],ge):x[T];v?(P.copy(C.normals[0]).multiplyScalar(F.x),R.copy(C.binormals[0]).multiplyScalar(F.y),O.copy(y[0]).add(P).add(R),oe(O.x,O.y,O.z)):oe(F.x,F.y,0)}for(let T=1;T<=u;T++)for(let F=0;F<Y;F++){let M=d?U(x[F],he[F],ge):x[F];v?(P.copy(C.normals[T]).multiplyScalar(M.x),R.copy(C.binormals[T]).multiplyScalar(M.y),O.copy(y[T]).add(P).add(R),oe(O.x,O.y,O.z)):oe(M.x,M.y,h/u*T)}for(let T=m-1;T>=0;T--){let F=T/m,M=f*Math.cos(F*Math.PI/2),K=g*Math.sin(F*Math.PI/2)+_;for(let J=0,de=V.length;J<de;J++){let ie=U(V[J],B[J],K);oe(ie.x,ie.y,h+M)}for(let J=0,de=I.length;J<de;J++){let ie=I[J];ee=Z[J];for(let ye=0,pe=ie.length;ye<pe;ye++){let E=U(ie[ye],ee[ye],K);v?oe(E.x,E.y+y[u-1].y,y[u-1].x+M):oe(E.x,E.y,h+M)}}}$(),ne();function $(){let T=s.length/3;if(d){let F=0,M=Y*F;for(let K=0;K<N;K++){let J=k[K];_e(J[2]+M,J[1]+M,J[0]+M)}F=u+m*2,M=Y*F;for(let K=0;K<N;K++){let J=k[K];_e(J[0]+M,J[1]+M,J[2]+M)}}else{for(let F=0;F<N;F++){let M=k[F];_e(M[2],M[1],M[0])}for(let F=0;F<N;F++){let M=k[F];_e(M[0]+Y*u,M[1]+Y*u,M[2]+Y*u)}}n.addGroup(T,s.length/3-T,0)}function ne(){let T=s.length/3,F=0;fe(V,F),F+=V.length;for(let M=0,K=I.length;M<K;M++){let J=I[M];fe(J,F),F+=J.length}n.addGroup(T,s.length/3-T,1)}function fe(T,F){let M=T.length;for(;--M>=0;){let K=M,J=M-1;J<0&&(J=T.length-1);for(let de=0,ie=u+m*2;de<ie;de++){let ye=Y*de,pe=Y*(de+1),E=F+K+ye,w=F+J+ye,q=F+J+pe,te=F+K+pe;Re(E,w,q,te)}}}function oe(T,F,M){l.push(T),l.push(F),l.push(M)}function _e(T,F,M){X(T),X(F),X(M);let K=s.length/3,J=b.generateTopUV(n,s,K-3,K-2,K-1);ue(J[0]),ue(J[1]),ue(J[2])}function Re(T,F,M,K){X(T),X(F),X(K),X(F),X(M),X(K);let J=s.length/3,de=b.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);ue(de[0]),ue(de[1]),ue(de[3]),ue(de[1]),ue(de[2]),ue(de[3])}function X(T){s.push(l[T*3+0]),s.push(l[T*3+1]),s.push(l[T*3+2])}function ue(T){r.push(T.x),r.push(T.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return v1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yl[s.type]().fromJSON(s)),new i(n,e.options)}},g1={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-h),new ce(d,1-g),new ce(_,1-p)]:[new ce(a,1-l),new ce(u,1-h),new ce(f,1-g),new ce(m,1-p)]}};function v1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jr=class i extends Mt{constructor(e=new Ji([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(r,3)),this.setAttribute("uv",new at(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;Bn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];Bn.isClockWise(b)===!0&&(g[m]=b.reverse())}let _=Bn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=_.length;m<p;m++){let b=_[m],y=b[0]+h,v=b[1]+h,C=b[2]+h;n.push(y,v,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return _1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function _1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var jr=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],y=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let R=C/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-y),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let y=u[p][b+1],v=u[p][b],C=u[p+1][b],R=u[p+1][b+1];(p!==0||o>0)&&f.push(y,v,R),(p!==n-1||l<Math.PI)&&f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qr=class extends ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var eo=class extends ln{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function vr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function y1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tc:r=e,a=2*t-n;break;case Rc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tc:o=e,l=2*n-t;break;case Rc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+b*o[c+C]+y*o[l+C]+v*o[h+C];return r}},Al=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},El=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},en=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Ya:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&y1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Ya;var ci=class extends en{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Mr;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends en{};Tl.prototype.ValueTypeName="color";var Rl=class extends en{};Rl.prototype.ValueTypeName="number";var Cl=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)jt.slerpFlat(r,0,o,c-a,o,c,l);return r}},to=class extends en{InterpolantFactoryMethodLinear(e){return new Cl(this.times,this.values,this.getValueSize(),e)}};to.prototype.ValueTypeName="quaternion";to.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends en{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Mr;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends en{};Il.prototype.ValueTypeName="vector";var Pl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},b1=new Pl,Ol=class{constructor(e){this.manager=e!==void 0?e:b1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var no=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},io=class extends no{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},aa=new et,Du=new D,Uu=new D,Ll=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Dl=class extends Ll{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends no{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Dl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Kl="\\[\\]\\.:\\/",x1=new RegExp("["+Kl+"]","g"),Jl="[^"+Kl+"]",w1="[^"+Kl.replace("\\.","")+"]",M1=/((?:WC+[\/:])*)/.source.replace("WC",Jl),S1=/(WCOD+)?/.source.replace("WCOD",w1),A1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),E1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),T1=new RegExp("^"+M1+S1+A1+E1+"$"),R1=["material","materials","bones","map"],Ul=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x1,"")}static parseTrackName(e){let t=T1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);R1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Ul;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fv=new Float32Array(1);var Nu=new et,ro=class{constructor(e,t,n=0,s=1/0){this.ray=new oi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(e,t=!0,n=[]){return Nl(e,this,n,t),n.sort(Fu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nl(e[s],this,n,t);return n.sort(Fu),n}};function Fu(i,e){return i.distance-e.distance}function Nl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Nl(r[o],e,t,!0)}}var Is=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var oo=class extends Sn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ch={type:"change"},Ql={type:"start"},hh={type:"end"},po=new oi,uh=new $t,C1=Math.cos(70*Ku.DEG2RAD),vt=new D,Lt=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jl=1e-6,fo=class extends oo{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new jt,this._lastTargetPosition=new D,this._quat=new jt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Is,this._sphericalDelta=new Is,this._scale=1,this._panOffset=new D,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new D,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=P1.bind(this),this._onPointerDown=I1.bind(this),this._onPointerUp=O1.bind(this),this._onContextMenu=B1.bind(this),this._onMouseWheel=U1.bind(this),this._onKeyDown=N1.bind(this),this._onTouchStart=F1.bind(this),this._onTouchMove=k1.bind(this),this._onMouseDown=L1.bind(this),this._onMouseMove=D1.bind(this),this._interceptControlDown=z1.bind(this),this._interceptControlUp=H1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ch),this.update(),this.state=tt.NONE}update(e=null){let t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Lt:n>Math.PI&&(n-=Lt),s<-Math.PI?s+=Lt:s>Math.PI&&(s-=Lt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=vt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<C1?this.object.lookAt(this.target):(uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(uh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jl||this._lastTargetPosition.distanceToSquared(this.target)>jl?(this.dispatchEvent(ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Lt/60*this.autoRotateSpeed*e:Lt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;vt.copy(s).sub(this.target);let r=vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function I1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function P1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function O1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hh),this.state=tt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function L1(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=tt.DOLLY;break;case hi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=tt.ROTATE}break;case hi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Ql)}function D1(i){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function U1(i){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(i.preventDefault(),this.dispatchEvent(Ql),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hh))}function N1(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function F1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=tt.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=tt.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Ql)}function k1(i){switch(this._trackPointer(i),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=tt.NONE}}function B1(i){this.enabled!==!1&&i.preventDefault()}function z1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function H1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var St={scale:.1039064800879708,elev:{main1:0,main2:5.5,n0:0,n4:10.5},slabs:[{floor:"n4",y:10.5,poly:[[.9,64.2],[-21.2,48.5],[-15.3,39.7],[-17.5,37.5],[-15.5,35.4],[-14.7,32.3],[-18.9,25.6],[-17.9,23.3],[-18.7,21.9],[-17.6,20.6],[-19.3,16.3],[-28.1,9.9],[-27.5,8],[-30.6,5.4],[-29.8,4.2],[-34.5,.3],[-28.4,-9.1],[3,16],[5.2,13.6],[4.2,11],[5.2,8.3],[4.3,7.2],[4.3,2.7],[5.3,1.7],[4.3,.6],[5.2,-.5],[4.4,-13.8],[9.2,-15.6],[11.4,-14.2],[11.2,22.3],[23.3,34.3]]},{floor:"n0",y:0,poly:[[-17.1,20.1],[-11.5,25.9],[-3.1,17.4],[15.6,39.5],[19.3,36],[20.7,37.5],[.4,64.9],[-21.9,49.2],[-18.1,43.3],[-17.5,33.4],[-15.3,30.6],[-21.5,24.4]]},{floor:"main2",y:5.5,poly:[[-45.5,-58.5],[-43.9,-60],[-38.9,-60.1],[-35.5,-64.2],[-7,-64.9],[-5.9,-55],[-1.7,-55.1],[1.4,-58.1],[7.4,-58.3],[8.6,-56.6],[11.7,-56.8],[13,-47.9],[24.8,-48.2],[46.8,-35.3],[34.1,-12.4],[32.2,-10.6],[5.2,-9.9],[-1.7,-13.7],[-3.4,-12.1],[-3.8,-12.8],[-1,-15.3],[-3.5,-19.8],[-5.7,-20],[-4.8,-21.3],[-6.4,-23],[-16.2,-24.1],[-17.3,-29.2],[-37.9,-39.6],[-39.6,-42.5],[-46.2,-45.7],[-46.8,-54.6]]},{floor:"main1",y:0,poly:[[-45.5,-58.5],[-44,-59.9],[-41.6,-60],[-39.1,-63.2],[-37.4,-62.2],[-38.6,-61],[-37.5,-60.1],[-34.8,-63.2],[-8.7,-63.9],[-7.6,-54.9],[-1.7,-55.1],[1.4,-58.1],[7.4,-58.2],[8.7,-56.6],[11.7,-56.7],[13,-47.9],[25.2,-48.1],[46.8,-35.3],[34.1,-12.4],[31.4,-10.6],[4,-10.2],[-15.7,-23.5],[-17.7,-29.3],[-38.2,-39.7],[-39.6,-42.5],[-46.1,-45.6],[-46.8,-53.6],[-45.6,-55]]}],rooms:{millennium:{floor:"main2",y:5.5,kind:"room",poly:[[38.5,-22.3],[36.6,-22.5],[34.6,-19.3],[13.3,-18.7],[13.2,-37.2],[10.5,-37.4],[10.6,-45.7],[23.1,-46.3],[44.6,-33.8]],obb:{cx:27.6,cz:-32.8,w:34,d:27.5,rot:3.115}},studio4:{floor:"n4",y:10.5,kind:"room",poly:[[1.7,33.4],[9.6,24.9],[11.1,25],[21.1,36.2],[19.6,37.5],[17.9,36.2],[10.8,43.3]],obb:{cx:11,cz:34.4,w:12.6,d:16.1,rot:2.409}},studio6:{floor:"n4",y:10.5,kind:"room",poly:[[-13.7,6.4],[-3.7,13.7],[-7.1,18.5],[-17,11.3]],obb:{cx:-10.4,cz:12.4,w:12.5,d:6,rot:-2.511}},studio3:{floor:"n0",y:0,kind:"room",poly:[[-9.3,32.1],[-5.3,36.3],[-6.1,38],[-4.6,39.7],[-13.3,50.1],[-18.8,46.4],[-13.7,38.8],[-13.6,41.4],[-12,39.9],[-11.6,35.7]],obb:{cx:-10.7,cz:41.6,w:17.2,d:8.1,rot:-.984}},studio1:{floor:"main1",y:0,kind:"room",poly:[[10,-44.3],[1.1,-44.4],[1.3,-54.5],[10.2,-54.6]],obb:{cx:5.6,cz:-49.5,w:10.4,d:9,rot:1.587}},century:{floor:"main2",y:5.5,kind:"hub",poly:[[-45.4,-57.9],[-21.4,-58.7],[-21.2,-39.8],[-31.9,-39.3],[-45.1,-46.1]],obb:{cx:-33.2,cz:-48.9,w:24.6,d:19.3,rot:3.127}},hub2:{floor:"main2",y:5.5,kind:"hub",poly:[[-17.3,-52.5],[-.9,-53.2],[-.3,-49.7],[.8,-50.3],[1.2,-54.5],[9.2,-54.7],[10.1,-53.9],[10.1,-48.3],[9.1,-47.2],[10.1,-47.3],[9.6,-38.1],[.2,-37.6],[-.4,-44.3],[-20.2,-43.6],[-20.5,-47.5],[-15.6,-48.2],[-15.6,-49.2],[-17.3,-49.2]],obb:{cx:-5.2,cz:-46,w:30.9,d:16.9,rot:3.13}},hub4:{floor:"n4",y:10.5,kind:"hub",poly:[[1.7,30.3],[-1.2,26.9],[7.5,17.7],[8,-7.6],[9.8,-7.5],[9.8,24.2],[8.8,23]],obb:{cx:7.8,cz:11.9,w:38.7,d:10,rot:-1.319}},saechsiluute:{floor:"n4",y:10.5,kind:"service",poly:[[-16.5,42.8],[-14.5,40.9],[-6.5,45.8],[-7.4,47.6],[-2.6,51.3],[-3.5,53.1],[3.2,58.6],[.4,62.9],[-20.1,48.2]],obb:{cx:-7,cz:51.4,w:25.5,d:9.9,rot:-2.519}}},nodes:{welcome:[7.9,5.5,-40.3],esc_bot:[-.7,5.5,-15.2],esc_top:[9.8,10.5,-15.2],skywalk_mid:[10.3,10.5,-6.5],h4_in:[9.8,10.5,13.9],h4_mid:[6.6,10.5,22.1],n4_corr:[-6.7,10.5,36.9],lift_top:[.9,10.5,41.2],lift_bot:[.9,0,41.2],entr_n:[-5.7,0,24.1],entr_mid:[-.1,0,34],stair_top:[8.6,5.5,-33.9],stair_bot:[4.8,0,-30.3],s1_door:[5.5,0,-42.3],c_door:[-21.4,5.5,-58.7],h2_door:[.2,5.5,-51],s6_door:[-7.8,10.5,10],s4_door:[5.6,10.5,30.1],s3_door:[-5.7,0,35.4],m_door:[16.8,5.5,-38.8],s6_link:[10.6,10.5,-2.1]},bbox:[-46.8,46.8,-64.9,64.9]};var dh=[["c_door","h2_door"],["h2_door","welcome"],["welcome","m_door"],["welcome","esc_bot"],["h2_door","stair_top"],["stair_top","stair_bot"],["stair_bot","s1_door"],["esc_bot","esc_top"],["esc_top","skywalk_mid"],["skywalk_mid","s6_link"],["s6_link","s6_door"],["skywalk_mid","h4_in"],["h4_in","h4_mid"],["h4_mid","s4_door"],["h4_mid","lift_top"],["lift_top","lift_bot"],["lift_bot","entr_mid"],["entr_mid","entr_n"],["entr_mid","s3_door"]],ph={century:"c_door",hub2:"h2_door",millennium:"m_door",studio1:"s1_door",studio3:"s3_door",studio4:"s4_door",studio6:"s6_door",hub4:"h4_mid"};function mo(i){let e=new Map;for(let[r,o]of dh){let a=St.nodes[r],l=St.nodes[o];if(!a||!l)continue;let c=Math.hypot(a[0]-l[0],a[1]-l[1],a[2]-l[2])+(Math.abs(a[1]-l[1])>1?6:0);e.has(r)||e.set(r,[]),e.has(o)||e.set(o,[]),e.get(r).push([o,c]),e.get(o).push([r,c])}let t=(r,o)=>{let a=new Map([[r,0]]),l=new Map,c=new Set(e.keys());for(;c.size;){let h=null;for(let d of c)a.has(d)&&(h==null||a.get(d)<a.get(h))&&(h=d);if(h==null||h===o)break;c.delete(h);for(let[d,f]of e.get(h))(!a.has(d)||a.get(h)+f<a.get(d))&&(a.set(d,a.get(h)+f),l.set(d,h))}let u=[o];for(;u[0]!==r;){let h=l.get(u[0]);if(!h)return[r,o];u.unshift(h)}return u},n=i.length,s=[];for(let r=0;r<n;r++)for(let o=0;o<n;o++){if(r===o){s.push(null);continue}let a=t(ph[i[r]],ph[i[o]]),l=new Float32Array(a.length*3),c=new Float32Array(a.length);a.forEach((u,h)=>{let d=St.nodes[u];l[h*3]=d[0],l[h*3+1]=d[1],l[h*3+2]=d[2],h&&(c[h]=c[h-1]+Math.hypot(l[h*3]-l[h*3-3],l[h*3+1]-l[h*3-2],l[h*3+2]-l[h*3-1]))}),s.push({pts:l,cum:c,len:c[c.length-1],n:a.length,names:a})}return{routes:s,edges:dh.filter(([r,o])=>St.nodes[r]&&St.nodes[o])}}var Wn={open:"#4fd6a8",filling:"#f4c24f",full:"#f0605d",running:"#6b8cff",none:"#7a869c"},Os={};for(let[i,e]of Object.entries(Wn))Os[i]=new Ne(e);var go=i=>(Os[i]||Os.none).clone(),V1=i=>Os[i]||Os.none,fh={n4:"Floor 4 \xB7 north building",n0:"Ground floor \xB7 north building",main2:"2nd floor \xB7 main building",main1:"1st floor \xB7 main building"};function mh(i,e){let t=new Nr({antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setClearColor(461590,1),i.appendChild(t.domElement);let n=new kr;n.fog=new Fr(461590,220,520);let s=new Tt(38,1,1,1200),r=new fo(s,t.domElement);r.enableDamping=!0,r.dampingFactor=.08,r.maxPolarAngle=Math.PI*.49,r.minDistance=25,r.maxDistance=420,r.screenSpacePanning=!0,n.add(new io(11191551,1712182,1.15));let o=new so(16777215,.9);o.position.set(60,120,80),n.add(o);let a={pos:new D(136,66,34),target:new D(0,24,0)};s.position.copy(a.pos),r.target.copy(a.target);let l=new Ht;n.add(l);let c=N=>new Qr({color:N.startsWith("n")?1779524:1516864,transparent:!0,opacity:.42,roughness:.9,metalness:0,depthWrite:!1,side:zt}),u=new Gn({color:5930944,transparent:!0,opacity:.85}),h=N=>new Ji(N.map(L=>new ce(L[0],-L[1])));for(let N of St.slabs){let L=new Kr(h(N.poly),{depth:.5,bevelEnabled:!1});L.rotateX(-Math.PI/2);let B=new pt(L,c(N.floor));B.position.y=N.y-.5,B.renderOrder=1,l.add(B);let Z=new ai(new Ki(L,20),u);Z.position.y=N.y-.5,l.add(Z)}let d={};for(let N of Xt){let L=St.rooms[N.id];if(!L)continue;let B=new Jr(h(L.poly));B.rotateX(-Math.PI/2);let Z=new cn({color:15771744,transparent:!0,opacity:.16,depthWrite:!1,side:zt}),ee=new pt(B,Z);ee.position.y=L.y+.06,ee.renderOrder=2,l.add(ee);let he=new ai(new Ki(B),new Gn({color:15771744,transparent:!0,opacity:.45}));he.position.y=L.y+.07,l.add(he),d[N.id]=ee}{let{edges:N}=mo(Ge.map(ee=>ee.id)),L=[];for(let[ee,he]of N)L.push(...St.nodes[ee],...St.nodes[he]);let B=new Mt;B.setAttribute("position",new at(L,3));let Z=new ai(B,new Gn({color:8369407,transparent:!0,opacity:.22}));l.add(Z)}let f={},g=[];for(let N of Ge){let L=St.rooms[N.id];if(!L)continue;let B=L.obb,Z=3.6,ee=new Ht;ee.position.set(B.cx,L.y,B.cz),ee.rotation.y=-B.rot;let he=new Vn(B.w,Z,B.d);he.translate(0,Z/2,0);let ge=new cn({color:go("none"),transparent:!0,opacity:.07,depthWrite:!1}),$=new pt(he,ge);$.renderOrder=3,$.userData.roomId=N.id,ee.add($),g.push($);let ne=new Gn({color:go("none"),transparent:!0,opacity:.95});ee.add(new ai(new Ki(he),ne));let fe=new Vn(B.w*.98,1,B.d*.98);fe.translate(0,.5,0);let oe=new cn({color:go("none"),transparent:!0,opacity:.3,depthWrite:!1}),_e=new pt(fe,oe);_e.scale.y=.02,_e.renderOrder=2,ee.add(_e),l.add(ee),f[N.id]={id:N.id,def:N,geo:L,group:ee,glass:$,glassMat:ge,edgeMat:ne,liq:_e,liqMat:oe,color:go("none"),anchor:new D(B.cx,L.y+Z+.6,B.cz),curFill:0}}let _=[],m=(N,L,B,Z)=>{let ee=document.createElement("div");ee.className="lbl "+N,ee.innerHTML=L,e.appendChild(ee);let he={el:ee,anchor:B,lx:-1e9,ly:-1e9,...Z};return _.push(he),he};for(let N of Ge){let L=f[N.id];if(!L)continue;let B=m("room",`<b>${N.name}</b><span class="cnt"></span><i class="bar"><u></u></i>`,L.anchor,{roomId:N.id});L.label=B,B.cnt=B.el.querySelector(".cnt"),B.bar=B.el.querySelector("u"),B.barWrap=B.el.querySelector(".bar")}for(let N of Xt){let L=St.rooms[N.id];if(!L)continue;let B=m("hub",`<b>${N.name}</b><span class="cnt"></span>`,new D(L.obb.cx,L.y+3.2,L.obb.cz),{hubId:N.id});B.cnt=B.el.querySelector(".cnt")}let p={};for(let N of St.slabs){let L=N.poly.map(ee=>ee[0]),B=Math.min(...L),Z=N.poly.reduce((ee,he)=>he[0]===B?he:ee,N.poly[0]);p[N.floor]=new D(Z[0]-2,N.y,Z[1]),m("floor",fh[N.floor],p[N.floor])}function b(){let N=i.clientWidth||800,L=i.clientHeight||600;t.setSize(N,L,!1),t.domElement.style.width=N+"px",t.domElement.style.height=L+"px",s.aspect=N/L;let B=N/L<.8;s.fov=B?55:38,s.updateProjectionMatrix(),B?(a.pos.set(28,128,205),a.target.set(0,20,-6)):(a.pos.set(136,66,34),a.target.set(0,24,0)),y||(s.position.copy(a.pos),r.target.copy(a.target))}let y=!1;window.addEventListener("resize",b),b();let v=null;function C(N,L,B=900){v={t0:performance.now(),ms:B,p0:s.position.clone(),q0:r.target.clone(),p1:N.clone(),q1:L.clone()}}let R=N=>N<.5?4*N*N*N:1-Math.pow(-2*N+2,3)/2;function P(N){if(!v)return;let L=Math.min(1,(N-v.t0)/v.ms),B=R(L);s.position.lerpVectors(v.p0,v.p1,B),r.target.lerpVectors(v.q0,v.q1,B),L>=1&&(v=null)}r.addEventListener("start",()=>{v=null,y=!0});function O(){C(a.pos,a.target)}function A(N){let L=f[N];if(!L)return;let B=new D(L.group.position.x,L.group.position.y+2,L.group.position.z),Z=s.position.clone().sub(r.target).normalize(),ee=N==="millennium"?85:55;C(B.clone().add(Z.multiplyScalar(ee)),B)}let x=new D,I=new Float32Array(64);function z(){let N=i.clientWidth,L=i.clientHeight,B=0;for(let Z of _){if(x.copy(Z.anchor).project(s),!(x.z<1&&x.z>-1&&Math.abs(x.x)<1.15&&Math.abs(x.y)<1.15)){Z.shown!==!1&&(Z.el.style.display="none",Z.shown=!1);continue}Z.shown===!1&&(Z.el.style.display="",Z.shown=!0);let he=(x.x+1)*.5*N,ge=(1-x.y)*.5*L;if(Z.roomId||Z.hubId){(!Z.w||Z.wAt!==N)&&(Z.w=Z.el.offsetWidth||90,Z.h=Z.el.offsetHeight||34,Z.wAt=N),he=Math.min(N-Z.w/2-4,Math.max(Z.w/2+4,he));for(let $=0;$<8;$++){let ne=!1;for(let fe=0;fe<B;fe++){let oe=fe*4;if(he-Z.w/2<I[oe+2]+3&&he+Z.w/2>I[oe]-3&&ge-Z.h<I[oe+3]&&ge>I[oe+1]){ge=I[oe+1]-3,ne=!0;break}}if(!ne)break}if(B<16){let $=B*4;I[$]=he-Z.w/2,I[$+1]=ge-Z.h,I[$+2]=he+Z.w/2,I[$+3]=ge,B++}}(Math.abs(he-Z.lx)>.6||Math.abs(ge-Z.ly)>.6)&&(Z.lx=he,Z.ly=ge,Z.el.style.transform=`translate(-50%,-100%) translate(${he.toFixed(1)}px,${ge.toFixed(1)}px)`)}}function k(N,L,B,Z,ee,he){let ge=f[N];if(!ge)return;let $=V1(B);ge.color.lerp($,.15),ge.curFill+=(L-ge.curFill)*.2;let ne=Math.max(.02,ge.curFill);ge.liq.scale.y=3.5*ne,ge.liqMat.color.copy(ge.color),ge.liqMat.opacity=Z?.32:.16,ge.edgeMat.color.copy(ge.color),ge.edgeMat.opacity=ee||he?1:.7,ge.glassMat.color.copy(ge.color),ge.glassMat.opacity=ee?.18:he?.2:.07}let V=new ro,U=new ce;function Y(N,L,B){let Z=t.domElement.getBoundingClientRect();U.set((N-Z.left)/Z.width*2-1,-((L-Z.top)/Z.height)*2+1),V.setFromCamera(U,s);let ee=V.intersectObjects(B,!1);return ee.length?ee[0].object:null}return{renderer:t,scene:n,camera:s,controls:r,rooms:f,hitMeshes:g,hubMeshes:d,labels:_,resize:b,flyTo:C,resetView:O,focusRoom:A,stepAnim:P,updateLabels:z,setRoomState:k,pick:Y,home:a,FLOOR_LABEL:fh}}var G1=1.25;function gh(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function W1(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s],a=t[r];o[1]>e!=a[1]>e&&i<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function vh(i,e){let t=new $r(.28,.85,2,6);t.translate(0,.7,0);let n=new eo({color:16777215,emissive:2241348,emissiveIntensity:.6}),s=new Hr(t,n,e);s.frustumCulled=!1,s.instanceMatrix.setUsage(ql),s.instanceColor=new $i(new Float32Array(e*3),3),s.instanceColor.setUsage(ql),i.add(s);let r=s.instanceMatrix.array,o=s.instanceColor.array,a=gh(99),l=new Float32Array(e),c=new Float32Array(e),u=new Float32Array(e);for(let z=0;z<e;z++)l[z]=a(),c[z]=a()*6.283,u[z]=a()*6.283;let h=null,d=0,f=0,g=null,_=null,m=null,p=null,b=null,y=new Float32Array(24),v=new Float64Array(3),C=0;function R(){_=[];for(let z=0;z<d;z++){let k=b[z],V=St.rooms[k],U=new Float32Array(e*3),Y=gh(1e3+z*31);if(!V){_.push(U);continue}let N=V.kind==="hub",L=V.obb,B=Math.cos(L.rot),Z=Math.sin(L.rot);for(let ee=0;ee<e;ee++){let he,ge;for(let $=0;$<60;$++){let ne=(Y()-.5)*(L.w-1.6),fe=(Y()-.5)*(L.d-1.6),oe=N?ne:Math.round(ne/.95)*.95,_e=fe;if(he=L.cx+oe*B-_e*Z,ge=L.cz+oe*Z+_e*B,!N||W1(he,ge,V.poly))break}U[ee*3]=he,U[ee*3+1]=V.y+.12,U[ee*3+2]=ge}_.push(U)}}function P(z){h=z,d=z.locIds.length,f=z.K,b=z.locIds,g=mo(b),(!_||_.length!==d)&&R(),m=new Int16Array(e*f);for(let k=0;k<e;k++){let V=0;for(let U=1;U<f;U++)z.loc[k*f+U]!==z.loc[k*f+U-1]&&(V=U),m[k*f+U]=V}}function O(z,k,V,U){y[z*3]=k,y[z*3+1]=V,y[z*3+2]=U}function A(z,k){let{t0:V,step:U}=h,Y=k-V,N=Math.floor(Y/U);N<0&&(N=0),N>f-1&&(N=f-1);let L=z*f,B=N;N+1<f&&h.loc[L+N+1]!==h.loc[L+N]&&Y>=(N+l[z])*U&&(B=N+1);let Z=m[L+B],ee=h.loc[L+B];if(C=ee,Z===0)return x(ee,z),0;let he=h.loc[L+Z-1],ge=(Z-1+l[z])*U,$=Y-ge,ne=g.routes[he*d+ee],fe=_[he],oe=_[ee],_e=fe[z*3],Re=fe[z*3+1],X=fe[z*3+2],ue=oe[z*3],T=oe[z*3+1],F=oe[z*3+2],M=ne.n,K=ne.pts,J=Math.sqrt((K[0]-_e)*(K[0]-_e)+(K[1]-Re)*(K[1]-Re)+(K[2]-X)*(K[2]-X)),de=ue-K[(M-1)*3],ie=T-K[(M-1)*3+1],ye=F-K[(M-1)*3+2],pe=Math.sqrt(de*de+ie*ie+ye*ye),E=J+ne.len+pe,w=E/G1*1e3;if($>=w||$<0)return x(ee,z),0;let q=$/w*E;if(q<J){let we=q/J;return v[0]=_e+(K[0]-_e)*we,v[1]=Re+(K[1]-Re)*we,v[2]=X+(K[2]-X)*we,1}if(q-=J,q>=ne.len){let we=pe>0?(q-ne.len)/pe:1,be=K[(M-1)*3],Ee=K[(M-1)*3+1],Xe=K[(M-1)*3+2];return v[0]=be+(ue-be)*we,v[1]=Ee+(T-Ee)*we,v[2]=Xe+(F-Xe)*we,1}let te=1;for(;te<M-1&&ne.cum[te]<q;)te++;let ae=ne.cum[te]-ne.cum[te-1]||1,re=(q-ne.cum[te-1])/ae;return v[0]=K[(te-1)*3]+(K[te*3]-K[(te-1)*3])*re,v[1]=K[(te-1)*3+1]+(K[te*3+1]-K[(te-1)*3+1])*re,v[2]=K[(te-1)*3+2]+(K[te*3+2]-K[(te-1)*3+2])*re,1}function x(z,k){let V=_[z];v[0]=V[k*3],v[1]=V[k*3+1],v[2]=V[k*3+2]}function I(z,k,V){if(h){for(let U=0;U<e;U++){let Y=A(U,z),N=v[0],L=v[1],B=v[2],Z=1,ee=C,he,ge,$;Y?(he=.55,ge=.95,$=1,Z=1.15):V[ee]?(N+=Math.sin(k*.31+c[U])*.9,B+=Math.cos(k*.27+u[U])*.9,he=1,ge=.78,$=.5):(he=y[ee*3],ge=y[ee*3+1],$=y[ee*3+2]);let ne=U*16;r[ne]=Z,r[ne+1]=0,r[ne+2]=0,r[ne+3]=0,r[ne+4]=0,r[ne+5]=Z,r[ne+6]=0,r[ne+7]=0,r[ne+8]=0,r[ne+9]=0,r[ne+10]=Z,r[ne+11]=0,r[ne+12]=N,r[ne+13]=L,r[ne+14]=B,r[ne+15]=1,o[U*3]=he,o[U*3+1]=ge,o[U*3+2]=$}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0}}return{mesh:s,setModel:P,update:I,setLocColor:O}}function X1(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function q1(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,"rgba(255,255,255,0.95)"),t.addColorStop(.45,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Wr(i);return n.colorSpace=Ct,n}var _h=new Ne(10129348),vo=2.2,Y1=9,yh=14;function bh(i,e,t,n){let s=q1(),r=new Ht;i.add(r);let o=[],a=null,l="cum",c=null,u=!0,h=[],d=new D;function f(){for(let x of o)r.remove(x.g),x.matA.dispose(),x.matB.dispose(),x.label.remove();o=[],h.length=0}function g(x){let I=!a||a.topics.length!==x.topics.length||a.topics.some((k,V)=>k.id!==x.topics[V].id);if(a=x,!I)return;f();let z=x.topics.length;x.topics.forEach((k,V)=>{let U=X1(777+V*13),Y=(.52+.38*U())%1,N=new Ne().setHSL(Y,.55,.62),L=new Ne().setHSL(Y,.5,.82),B=new Zi({map:s,color:N.clone(),transparent:!0,opacity:.5,depthWrite:!1,fog:!0}),Z=new Zi({map:s,color:L.clone(),transparent:!0,opacity:.55,depthWrite:!1,fog:!0}),ee=new Ht,he=Math.sqrt((V+.6)/z),ge=V*2.399963;ee.position.set(Math.cos(ge)*he*64,34+V*37%5*3.2,Math.sin(ge)*he*76);let $=[];for(let _e=0;_e<yh;_e++){let Re=U()*6.283,X=Math.acos(2*U()-1),ue=.35+.65*Math.cbrt(U()),T=Math.sin(X)*Math.cos(Re)*ue,F=Math.cos(X)*ue*.55,M=Math.sin(X)*Math.sin(Re)*ue,K=new zr(F>.05?Z:B);K.position.set(T,F,M);let J=.9+U()*.8;K.userData={x:T,y:F,z:M,s:J,ph:U()*6.283},K.renderOrder=10,ee.add(K),$.push(K)}r.add(ee);let ne=ee.position.y,fe=new pt(new jr(1,8,6),new cn({visible:!1}));fe.userData.topicIdx=V,ee.add(fe),h.push(fe);let oe=document.createElement("div");oe.className="lbl cloud",oe.innerHTML="<b></b><small></small>",oe.querySelector("b").textContent=k.short,oe.dataset.topic=V,e.appendChild(oe),o.push({g:ee,puffs:$,matA:B,matB:Z,baseCol:N,lightCol:L,hit:fe,label:oe,nameEl:oe.querySelector("b"),subEl:oe.querySelector("small"),r:vo,target:vo,proj:0,val:0,hue:Y,shown:!0,lx:-1e9,ly:-1e9,baseY:ne,w:0,h:0,topic:k})})}let _=0,m=0;function p(x,I){let z=Math.min(a.K-1,Math.max(0,(I-a.t0)/a.step)),k=Math.floor(z),V=Math.min(a.K-1,k+1),U=z-k,Y=l==="cum"?a.topicCum[x]:a.topicNow[x],N=l==="cum"?a.topicProjCum[x]:a.topicProjNow[x],L=Y[k]*(1-U)+Y[V]*U,B=N[k]*(1-U)+N[V]*U;_=L,m=L>1e-6?B/L:0}let b=0;function y(x,I,z,k){if(!a)return;let V=l==="cum"?a.topicMaxCum:a.topicMaxNow,U=0;for(let L=0;L<o.length;L++)p(L,x),_>U&&(U=_);let Y=Math.max(U,.3*V,1e-6),N=k?1:1-Math.exp(-I*3.2);for(let L=0;L<o.length;L++){let B=o[L];p(L,x);let Z=_,ee=m;B.val=Z,B.target=vo+(Y1-vo)*Math.sqrt(Math.min(1,Z/Y)),B.r+=(B.target-B.r)*N,B.proj+=(ee-B.proj)*N;let he=c===B.topic.id,ge=c&&!he,$=(.2+.4*Math.min(1,Z/Y*1.4+.15))*(1-.4*B.proj)*(ge?.45:1)*(he?1.5:1);B.matA.opacity=Math.min(.85,$),B.matB.opacity=Math.min(.9,$*1.1),B.matA.color.copy(B.baseCol).lerp(_h,B.proj*.65),B.matB.color.copy(B.lightCol).lerp(_h,B.proj*.55),B.g.visible=u,B.hit.scale.setScalar(B.r*1.1);let ne=B.r;for(let fe=0;fe<yh;fe++){let oe=B.puffs[fe],_e=oe.userData,Re=Math.sin(z*.5+_e.ph)*.06;oe.position.set((_e.x+Re)*ne,(_e.y+Re*.6)*ne,_e.z*ne);let X=_e.s*ne*.95;oe.scale.set(X,X,1)}B.g.position.y=B.baseY+Math.sin(z*.3+L)*.8}b++%6===0&&v()}function v(){let x=n.clientWidth,I=n.clientHeight,z=o.map((V,U)=>U).sort((V,U)=>o[U].r-o[V].r),k=[];for(let V of z){let U=o[V];if(!u){U.shown&&(U.label.style.display="none",U.shown=!1);continue}d.copy(U.g.position),d.y+=U.r*.15,d.project(t);let Y=(d.x+1)*.5*x,N=(1-d.y)*.5*I;if(d.z>1||Y<-80||Y>x+80||N<-20||N>I+20){U.shown&&(U.label.style.display="none",U.shown=!1);continue}U.w||(U.w=U.label.offsetWidth||80,U.h=U.label.offsetHeight||24);let L=Math.min(x-U.w/2-4,Math.max(U.w/2+4,Y)),B=c===U.topic.id,Z=[L-U.w/2,N-U.h/2,L+U.w/2,N+U.h/2],ee=!1;if(!B){for(let $ of k)if(Z[0]<$[2]+4&&Z[2]>$[0]-4&&Z[1]<$[3]+2&&Z[3]>$[1]-2){ee=!0;break}}if(ee){U.shown&&(U.label.classList.add("off"),U.shown=!1);continue}k.push(Z),U.shown||(U.label.classList.remove("off"),U.shown=!0),U.label.style.display="",(Math.abs(L-U.lx)>.6||Math.abs(N-U.ly)>.6)&&(U.lx=L,U.ly=N,U.label.style.transform=`translate(-50%,-50%) translate(${L.toFixed(1)}px,${N.toFixed(1)}px)`);let he=U.proj>.5,ge=c&&!B?.35:1;U.hlS!==B&&(U.hlS=B,U.label.classList.toggle("hl",B)),U.pjS!==he&&(U.pjS=he,U.label.classList.toggle("proj",he)),U.opS!==ge&&(U.opS=ge,U.label.style.opacity=ge)}}function C(x){l=x}function R(x){c=x,v()}function P(x){u=x;for(let I of o)I.g.visible=x;v()}function O(){return o.map(x=>x.r)}function A(x){let I=o[x];return I?{topic:I.topic,val:I.val,proj:I.proj}:null}return{setModel:g,update:y,setMode:C,setHighlight:R,setVisible:P,sizes:O,hitSpheres:h,describe:A,get clouds(){return o},get mode(){return l}}}var nt=(i,e=document)=>e.querySelector(i),Z1=new Intl.DateTimeFormat("en-GB",{timeZone:Us,hour:"2-digit",minute:"2-digit",hour12:!1}),$1=new Intl.DateTimeFormat("en-GB",{timeZone:Us,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),K1=new Intl.DateTimeFormat("en-GB",{timeZone:Us,weekday:"short",day:"numeric",month:"short"}),Tn=i=>Z1.format(i),ec=i=>$1.format(i),tn=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),J1={open:"Open",filling:"Filling",full:"Full",running:"Running",none:"Idle"},j1={millennium:"#7c9cff",studio4:"#59c9d9",studio6:"#8f8cf2",studio3:"#e09bd0",studio1:"#7fd6a0"};function xh(i){let e=null,t={play:nt("#btn-play"),prev:nt("#btn-prev"),next:nt("#btn-next"),speed:nt("#sel-speed"),live:nt("#btn-live"),clockT:nt("#clock-t"),clockSub:nt("#clock-sub"),tl:nt("#timeline"),rows:nt(".tl-rows"),ticks:nt(".tl-ticks"),cov:nt(".tl-cov"),now:nt(".tl-now"),head:nt(".tl-head"),hover:nt(".tl-hover"),panel:nt("#panel"),tip:nt("#tip"),legend:nt("#legend"),chipMode:nt("#chip-mode"),chipData:nt("#chip-data"),btnClouds:nt("#btn-clouds"),btnTopic:nt("#btn-topicmode")},n=new Map,s=null,r=null,o="";t.play.addEventListener("click",()=>i.togglePlay()),t.prev.addEventListener("click",()=>i.jump(-1)),t.next.addEventListener("click",()=>i.jump(1)),t.speed.addEventListener("change",()=>i.setSpeed(+t.speed.value)),t.live.addEventListener("click",()=>i.goLive()),nt("#btn-reset").addEventListener("click",()=>i.resetView()),t.btnClouds.addEventListener("click",()=>{let b=i.toggleClouds();t.btnClouds.classList.toggle("on",b),t.btnClouds.setAttribute("aria-pressed",b)}),t.btnTopic.addEventListener("click",()=>i.toggleTopicMode()),nt("#btn-legend").addEventListener("click",()=>{t.legend.hidden=!t.legend.hidden}),nt("#legend .close").addEventListener("click",()=>{t.legend.hidden=!0});let a=b=>(b-e.t0)/(e.t1-e.t0)*100,l=b=>{let y=t.tl.getBoundingClientRect();return e.t0+Math.min(1,Math.max(0,(b-y.left)/y.width))*(e.t1-e.t0)},c=!1;t.tl.addEventListener("pointerdown",b=>{e&&(c=!0,t.tl.setPointerCapture(b.pointerId),i.seek(l(b.clientX)))}),t.tl.addEventListener("pointermove",b=>{if(!e)return;let y=l(b.clientX);t.hover.hidden=!1,t.hover.style.left=a(y)+"%",t.hover.textContent=Tn(y),c&&i.seek(y)}),t.tl.addEventListener("pointerup",()=>{c=!1}),t.tl.addEventListener("pointerleave",()=>{t.hover.hidden=!0}),t.tl.addEventListener("keydown",b=>{b.key==="ArrowLeft"&&(i.seek(i.getT()-6e4),b.preventDefault(),b.stopPropagation()),b.key==="ArrowRight"&&(i.seek(i.getT()+6e4),b.preventDefault(),b.stopPropagation())});function u(){t.rows.innerHTML="",t.ticks.innerHTML="",n=new Map;let b=e.t1-e.t0;for(let v=0;v<=b/36e5;v++){let C=e.t0+v*36e5,R=document.createElement("i");R.style.left=a(C)+"%",R.innerHTML=`<span>${Tn(C)}</span>`,t.ticks.appendChild(R)}let y=100/Ge.length;Ge.forEach((v,C)=>{let R=document.createElement("div");R.className="tl-row",R.style.top=`calc(${C} * (100% - 8px) / ${Ge.length-1})`,R.innerHTML=`<span class="rn">${v.short}</span>`;for(let P of e.sessions.filter(O=>O.roomId===v.id)){let O=document.createElement("div");O.className="blk"+(P.hasData?"":" proj"),O.style.left=a(P.start)+"%",O.style.width=Math.max(.35,a(P.end)-a(P.start))+"%",O.style.setProperty("--c",j1[v.id]),O.style.setProperty("--o",(.35+.6*Math.min(1,P.pop.score)).toFixed(2)),O.title=`${Tn(P.start)}\u2013${Tn(P.end)} \xB7 ${v.name} \xB7 ${P.title}`,O.dataset.sid=P.id,R.appendChild(O),n.set(P.id,O)}t.rows.appendChild(R)}),t.rows.onclick=null}function h(){t.cov.innerHTML="";let b=e.covered,y=0;for(;y<e.K;){if(!b[y]){y++;continue}let v=y;for(;v+1<e.K&&b[v+1];)v++;let C=document.createElement("i");C.style.left=a(e.t0+y*e.step)+"%",C.style.width=Math.max(.2,a(e.t0+(v+1)*e.step)-a(e.t0+y*e.step))+"%",t.cov.appendChild(C),y=v+1}}function d(b){let y=b>=e.t0&&b<=e.t1;t.now.style.display=y?"block":"none",y&&(t.now.style.left=a(b)+"%")}function f(b){if(!b.hasData)return"No room samples yet for this session, so everything shown for it is a projection from its format, room size and the popularity of its topics so far.";let y=b.points,v=y[0],C=A=>Math.round((b.start-A)/6e4),R=y.find(A=>A.level==="filling"||A.level==="full"),P=y.find(A=>A.level==="full"),O=[];return v.level==="running"?O.push("First recorded sample was already \u201Crunning\u201D, so the fill history before the start is missing and the level is carried over from the previous session / a prior."):(R?O.push(R.t<b.start?`Reached \u201C${R.level}\u201D ${C(R.t)} min before the start.`:`Reached \u201C${R.level}\u201D only after the start.`):O.push("Stayed \u201Copen\u201D until the start."),P&&P!==R&&O.push(`\u201CFull\u201D ${P.t<b.start?C(P.t)+" min before the start":"after the start"}.`)),O.join(" ")}function g(b,y){let v=e.sessions.filter(C=>C.roomId===b);return v.find(C=>y>=C.start&&y<C.end)||v.find(C=>C.start>y)||v[v.length-1]}function _(b,y){if(!s){t.panel.hidden=!0;return}let v=Ge.find(k=>k.id===s),C=g(s,b),P=e.at(b).rooms[s],O=e.levelAt(s,b),A=[s,C&&C.id,O.level,O.rec,Math.round(P.count),e.nSamples].join("|");if(!y&&A===o&&!t.panel.hidden)return;o=A;let x=Wn[O.idle?"none":O.level]||Wn.none,I=e.sessions.filter(k=>k.roomId===s),z=`<button class="close" aria-label="Close">\xD7</button><h2>${tn(v.name)}</h2><div class="sub">${v.cap} seats (theatre setup) \xB7 ${tn(i.floorLabel(v.floor))}</div>`;if(z+=`<div class="lv"><i style="background:${x}"></i>${tn(J1[O.idle?"none":O.level])} <span class="tag ${O.rec?"":"p"}">${O.rec?"measured level":"projected"}</span></div>`,z+=`<div class="big">\u2248 ${Math.round(P.count)} <small>of ${v.cap} \xB7 estimated headcount</small></div><div class="meter"><u style="width:${Math.min(100,P.fill*100).toFixed(0)}%"></u></div>`,C){let k=C.speakers.length?C.speakers.join(", ")+(C.company.length?" \xB7 "+[...new Set(C.company)].join(", "):""):"";z+=`<div class="sess"><div class="sub">${b>=C.start&&b<C.end?"Now":b<C.start?"Next":"Last"} \xB7 ${Tn(C.start)}\u2013${Tn(C.end)} \xB7 ${tn(C.format)}</div><h3>${tn(C.title)}</h3>`,k&&(z+=`<div class="sub">${tn(k)}</div>`),z+=`<div>${C.topics.slice(0,4).map(U=>{let Y=e.topics.find(N=>N.id===U.id);return Y?`<span class="tag">${tn(Y.short)}</span>`:""}).join("")}</div>`;let V=Math.round(Math.min(1,C.pop.score)*100);z+=`<div class="why"><b>Popularity ${V}/100</b> ${C.hasData?"":'<span class="tag p">projected</span>'}<div class="meter"><u style="width:${V}%"></u></div>${tn(f(C))}</div>`,C.pop.unmet&&(z+=`<div class="warn">Full room with only ${v.cap} seats: likely unmet demand (more people wanted in than fitted).</div>`),C.hasData&&(z+=`<div class="why" style="color:var(--muted)">Estimated peak \u2248 ${Math.round(C.peakCount)} of ${v.cap} seats.</div>`)}z+=`<div class="sess"><div class="sub">Schedule in this room</div><ul class="up">${I.map(k=>`<li data-t="${k.start}" style="${C&&k.id===C.id?"color:var(--text)":""}">${Tn(k.start)} \xB7 ${tn(k.title.slice(0,44))}${k.title.length>44?"\u2026":""}</li>`).join("")}</ul></div>`,t.panel.innerHTML=z,t.panel.hidden=!1,nt(".close",t.panel).onclick=()=>i.selectRoom(null),t.panel.querySelectorAll("li[data-t]").forEach(k=>{k.onclick=()=>i.seek(+k.dataset.t-5*6e4)})}function m(b,y,v){if(!b){t.tip.hidden=!0;return}let{topic:C,val:R,proj:P}=b,O=e.sessions.filter(V=>V.topics.some(U=>U.id===C.id)),A=i.topicMode()==="cum"?`\u2248 ${Math.round(R)} audience-minutes so far`:`\u2248 ${Math.round(R)} people in sessions on this topic now`;t.tip.innerHTML=`<b>${tn(C.label)}</b><div class="row">${A}${P>.5?' <span class="row p">(mostly projected)</span>':""}</div><div class="row">Extracted from the session descriptions \xB7 ${O.length} session${O.length===1?"":"s"}</div><div class="row">Words found: ${(C.evidence||[]).slice(0,8).map(V=>"\u201C"+tn(V)+"\u201D").join(", ")}${(C.evidence||[]).length>8?" \u2026":""}</div><div class="row">${O.slice(0,6).map(V=>`${Tn(V.start)} ${Ge.find(U=>U.id===V.roomId).short}`).join(" \xB7 ")}${O.length>6?" \u2026":""}</div>`,t.tip.hidden=!1;let x=t.tip.offsetWidth,I=t.tip.offsetHeight,z=window.innerWidth,k=window.innerHeight;t.tip.style.left=Math.max(8,Math.min(z-x-8,y+14))+"px",t.tip.style.top=Math.max(8,Math.min(k-I-8,v+14))+"px"}function p(b){r=b;for(let[y,v]of n){let C=e.sessions.find(R=>R.id===y);v.classList.toggle("hl",!!b&&C.topics.some(R=>R.id===b))}}return{setModel(b){let y=!e;e=b,u(),h(),s&&_(i.getT(),!0),r&&p(r),y&&(nt("#lg-crowd").textContent=b.crowd)},setHead(b){t.head.style.left=a(b)+"%"},update(b,y){let v=e.at(b).covered;t.clockT.textContent=ec(b),t.clockSub.textContent=K1.format(b)+(y.live?" \xB7 live":"")+(v?"":" \xB7 projected"),t.chipMode.textContent=v?y.demo?"Synthetic data":"Recorded levels":"Projected \xB7 not measured",t.chipMode.className="chip "+(v?y.demo?"demo":"":"proj");let C=e.lastSample;t.chipData.textContent=y.demo?"demo mode \xB7 no real data":C?`last sample ${ec(C)} \xB7 ${e.nSamples} samples \xB7 ${y.src}`:`no samples yet \xB7 ${y.src}`,t.live.classList.toggle("on",y.live),t.live.disabled=!y.liveAvailable,t.live.title=y.liveAvailable?"Follow real time (L)":"Live is only available between 12:00 and 17:00 on the conference day",t.play.textContent=y.playing||y.live?"\u23F8":"\u25B6",t.play.setAttribute("aria-label",y.playing||y.live?"Pause":"Play"),t.speed.disabled=y.live,t.btnTopic.textContent="Topics: "+(i.topicMode()==="cum"?"so far":"now"),d(y.nowMs),t.tl.setAttribute("aria-valuenow",Math.round(a(b))),t.tl.setAttribute("aria-valuetext",Tn(b)),nt("#lg-meta").textContent=y.demo?"Demo: all data synthetic.":`Source: recording.jsonl (${y.src}); ${e.nSamples} samples, last ${C?ec(C):"none"}. Crowd total ${e.crowd} and room capacities are assumptions.`,_(b,!1)},selectRoom(b){s=b,o="",b||(t.panel.hidden=!0);for(let[y,v]of n){let C=e.sessions.find(R=>R.id===y);v.classList.toggle("sel",!!b&&C.roomId===b)}b&&_(i.getT(),!0)},get selectedRoom(){return s},showTip:m,setHighlightTopic:p,updateNow:d,updateCoverage:h,toggleLegend(){t.legend.hidden=!t.legend.hidden},closeLegend(){t.legend.hidden=!0},showDemoLink(b){nt("#lg-demo").hidden=!b}}}function Q1(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}function ev(){let i=new URLSearchParams(location.search),e=i.get("demo"),t=e!==null,n=ss(is),s=(T,F,M)=>T<F?F:T>M?M:T,r=Date.now(),o=performance.now();function a(T){if(!T)return null;let F=/^(\d{1,2}):(\d\d)(?::(\d\d))?$/.exec(T);return F?n.t0+((+F[1]-12)*3600+ +F[2]*60+(+F[3]||0))*1e3:null}let l=null;i.get("now")?l=a(i.get("now")):t&&(l=e==="live"?n.t0+2.5*36e5:n.t1);let c=l!=null?()=>e==="live"||i.get("now")?l+(performance.now()-o):l:()=>Date.now(),u=wo(cc),h=[],d="embedded snapshot";function f(){return t?xc(is,{seed:+i.get("seed")||7,gaps:i.has("gaps"),to:e==="live"?n.t0+2.5*36e5:void 0}):gc(u,h)}let g=Eo({sessions:is,recording:f()}),_=document.getElementById("stage"),m=document.getElementById("labels"),p=mh(_,m),b=vh(p.scene,500),y=bh(p.scene,m,p.camera,_);b.setModel(g),y.setModel(g);let v={t:n.t0,playing:!1,live:!1,speed:5,topicMode:"cum",selected:null,hlTopic:null,stickyTopic:null},C=()=>{let T=c();return T>=g.t0&&T<=g.t1},R={getT:()=>v.t,seek(T){v.t=s(T,g.t0,g.t1),v.live=!1},togglePlay(){if(v.live){v.live=!1,v.playing=!1;return}v.t>=g.t1-1e3&&!v.playing&&(v.t=g.t0),v.playing=!v.playing},setSpeed(T){v.speed=T,v.live=!1,v.playing||(v.playing=!1)},goLive(){C()&&(v.live=!0,v.playing=!1)},jump(T){let F=[...new Set(g.sessions.flatMap(M=>[M.start,M.end]))].filter(M=>M>g.t0&&M<g.t1).sort((M,K)=>M-K);if(v.live=!1,T>0)v.t=F.find(M=>M>v.t+1e3)??g.t1;else{let M=[...F].reverse().find(K=>K<v.t-2e3);v.t=M??g.t0}},resetView(){p.resetView(),R.selectRoom(null)},toggleClouds(){return P=!P,y.setVisible(P),P},toggleTopicMode(){v.topicMode=v.topicMode==="cum"?"now":"cum",y.setMode(v.topicMode)},topicMode:()=>v.topicMode,floorLabel:T=>p.FLOOR_LABEL[T],selectRoom(T){v.selected=T,O.selectRoom(T),T&&p.focusRoom(T);for(let F of p.labels)F.roomId&&F.el.classList.toggle("sel",F.roomId===T)}},P=!0,O=xh(R);O.setModel(g),O.showDemoLink(!t),t&&(document.title="Demo \xB7 "+document.title);{i.get("speed")&&(v.speed=+i.get("speed")||5,document.getElementById("sel-speed").value=String(v.speed));let T=a(i.get("t"));T!=null?(v.t=T,v.playing=i.get("play")==="1"):i.get("live")!=="0"&&C()&&!t?v.live=!0:(v.t=g.t0,v.playing=i.get("play")!=="0"),i.get("mode")==="now"&&R.toggleTopicMode(),i.get("room")&&setTimeout(()=>R.selectRoom(i.get("room")),50),i.has("legend")&&O.toggleLegend()}window.addEventListener("keydown",T=>{if(T.target&&/^(INPUT|SELECT|TEXTAREA)$/.test(T.target.tagName)||T.metaKey||T.ctrlKey||T.altKey)return;let F=T.key;F===" "?(R.togglePlay(),T.preventDefault()):F==="ArrowLeft"?(R.seek(v.t-(T.shiftKey?6e5:6e4)),T.preventDefault()):F==="ArrowRight"?(R.seek(v.t+(T.shiftKey?6e5:6e4)),T.preventDefault()):F==="["?R.jump(-1):F==="]"?R.jump(1):F==="l"||F==="L"?R.goLive():F==="r"||F==="R"?R.resetView():F==="c"||F==="C"?document.getElementById("btn-clouds").click():F==="t"||F==="T"?R.toggleTopicMode():F==="?"||F==="i"?O.toggleLegend():F==="Escape"&&(R.selectRoom(null),O.closeLegend(),z(null,!0))});let A=p.renderer.domElement,x=null;A.addEventListener("pointerdown",T=>{x={x:T.clientX,y:T.clientY}}),A.addEventListener("pointerup",T=>{if(!x)return;let F=Math.hypot(T.clientX-x.x,T.clientY-x.y);if(x=null,F>5)return;let M=P?p.pick(T.clientX,T.clientY,y.hitSpheres):null;if(M){z(M.userData.topicIdx,!0,T.clientX,T.clientY);return}let K=p.pick(T.clientX,T.clientY,p.hitMeshes);K?R.selectRoom(K.userData.roomId):(R.selectRoom(null),z(null,!0))}),A.addEventListener("pointermove",T=>{if(T.buttons)return;let F=P?p.pick(T.clientX,T.clientY,y.hitSpheres):null;if(F){z(F.userData.topicIdx,!1,T.clientX,T.clientY),A.style.cursor="pointer";return}v.stickyTopic||z(null,!1),A.style.cursor=p.pick(T.clientX,T.clientY,p.hitMeshes)?"pointer":""}),m.addEventListener("pointerover",T=>{let F=T.target.closest&&T.target.closest(".lbl.cloud");F&&z(+F.dataset.topic,!1,T.clientX,T.clientY)}),m.addEventListener("pointerout",T=>{T.target.closest&&T.target.closest(".lbl.cloud")&&!v.stickyTopic&&z(null,!1)}),m.addEventListener("click",T=>{let F=T.target.closest&&T.target.closest(".lbl.cloud");if(F){z(+F.dataset.topic,!0,T.clientX,T.clientY);return}let M=T.target.closest&&T.target.closest(".lbl.room");if(M){let K=p.labels.find(J=>J.el===M);K&&R.selectRoom(v.selected===K.roomId?null:K.roomId)}});let I=new Set;function z(T,F,M,K){if(T==null){F&&(v.stickyTopic=null),v.stickyTopic||(v.hlTopic=null,y.setHighlight(null),O.setHighlightTopic(null),O.showTip(null),I=new Set);return}let J=g.topics[T];J&&(F&&(v.stickyTopic=v.stickyTopic===J.id?null:J.id),v.hlTopic=J.id,y.setHighlight(J.id),O.setHighlightTopic(J.id),I=new Set(g.sessions.filter(de=>de.topics.some(ie=>ie.id===J.id)).map(de=>de.roomId)),O.showTip(y.describe(T),M??0,K??0),F&&!v.stickyTopic&&(v.hlTopic=null,y.setHighlight(null),O.setHighlightTopic(null),O.showTip(null),I=new Set))}let k=g.locIds.length,V=Ge.map(T=>g.locIds.indexOf(T.id)),U=new Uint8Array(k);Xt.forEach(T=>{U[g.locIds.indexOf(T.id)]=1});let Y=new Float32Array(Ge.length),N=Ge.map(()=>"none"),L=Ge.map(()=>!1),B={};for(let[T,F]of Object.entries(Wn)){let M=new Ne(F),K=new Ne("#dbe7ff");M.lerp(K,.4),B[T]=[M.r,M.g,M.b]}let Z=g;function ee(T){let F=s((T-Z.t0)/Z.step,0,Z.K-1),M=F|0,K=Math.min(Z.K-1,M+1),J=F-M;for(let de=0;de<Ge.length;de++){let ie=Z.counts[V[de]];Y[de]=(ie[M]*(1-J)+ie[K]*J)/Ge[de].cap}}function he(T){let F=g.at(T);for(let M=0;M<Ge.length;M++){let K=Ge[M].id,J=g.levelAt(K,T);N[M]=J.idle&&J.level!=="running"?"none":J.level,L[M]=J.rec||F.rooms[K].rec;let de=B[N[M]]||B.none;b.setLocColor(V[M],de[0],de[1],de[2])}for(let M of p.labels)if(M.roomId){let K=Ge.findIndex(de=>de.id===M.roomId),J=F.rooms[M.roomId];M.cnt.textContent=`\u2248${Math.round(J.count)}/${Ge[K].cap}`,M.bar.style.width=Math.min(100,J.fill*100).toFixed(0)+"%",M.bar.style.background=Wn[N[K]]||Wn.none,M.barWrap.classList.toggle("proj",!L[K]),M.el.classList.toggle("hl",I.has(M.roomId))}else M.hubId&&(M.cnt.textContent="\u2248"+Math.round(F.hubs[M.hubId].count));O.update(T,{live:v.live,playing:v.playing,demo:t,nowMs:c(),liveAvailable:C(),src:d})}let ge=performance.now(),$=0,ne=0,fe=!0,oe={frames:0,sum:0,max:0,worst:[]};function _e(T){requestAnimationFrame(_e);let F=Math.min(.1,(T-ge)/1e3);ge=T,v.live?v.t=s(c(),g.t0,g.t1):v.playing&&(v.t+=F*v.speed*6e4,v.t>=g.t1&&(v.t=g.t1,v.playing=!1));let M=v.t,K=T/1e3;ee(M),b.update(M,K,U),y.update(M,F,K,fe),fe=!1;for(let J=0;J<Ge.length;J++)p.setRoomState(Ge[J].id,Y[J],N[J],L[J],v.selected===Ge[J].id,I.has(Ge[J].id));if(p.stepAnim(T),p.controls.update(),p.updateLabels(),p.renderer.render(p.scene,p.camera),O.setHead(M),T-$>200&&($=T,he(M)),oe.on){let J=performance.now()-T;oe.frames++,oe.sum+=J,J>oe.max&&(oe.max=J)}}function Re(T){g=T,Z=T,b.setModel(T),y.setModel(T),O.setModel(T),he(v.t)}let X=!1;async function ue(){if(!(t||i.has("nofetch")||X)){X=!0;try{let T=new AbortController,F=setTimeout(()=>T.abort(),15e3),M=await fetch(uc+"?cb="+Math.floor(Date.now()/6e4),{signal:T.signal,cache:"no-store"});if(clearTimeout(F),!M.ok)throw new Error("http "+M.status);let K=await M.text(),J=wo(K);if(J.length){let de=g.nSamples,ie=g.lastSample;h=J;let ye=Eo({sessions:is,recording:f()});ye.nSamples!==de||ye.lastSample!==ie?(d="live from GitHub",Re(ye)):d="live from GitHub"}}catch{}X=!1}}!t&&!i.has("nofetch")&&(setTimeout(ue,800),setInterval(ue,6e4)),he(v.t),requestAnimationFrame(_e),window.AED={get state(){return{t:v.t,playing:v.playing,live:v.live,speed:v.speed,selected:v.selected,topicMode:v.topicMode}},app:R,model:()=>g,clouds:y,scene:p,crowd:b,perf:oe,setTime:T=>R.seek(T),nowFn:c},window.AED_READY=!0}Q1()?ev():(document.getElementById("stage").innerHTML='<p style="padding:90px 24px;max-width:560px;color:#c4cee6">This visualisation needs WebGL, which is not available in this browser. Please try a current Chrome, Firefox, Safari or Edge with hardware acceleration enabled.</p>',window.AED_READY=!0);})();
