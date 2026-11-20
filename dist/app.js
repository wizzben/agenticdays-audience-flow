(()=>{var ms={fetched_at:"2026-11-20",source:"https://www.agenticdays.com/mcp",sessions:[{id:"1250380",slug:"1250380-you-must-not-ssh-and-other-stories-from-building-our-sre",title:'"YOU MUST NOT ssh!" and Other Stories from Building Our SRE Agent',url:"https://www.agenticdays.com/session/1250380-you-must-not-ssh-and-other-stories-from-building-our-sre",format:"Talk",duration:"25 min",starts_at:"2026-11-20T09:20:00+01:00",ends_at:"2026-11-20T09:50:00+01:00",time:"Fri 20 Nov, 09:20-09:50",room:"Studio 4",spotlight:!1,description:`Everyone is building SRE agents. Most of them are barely junior sysadmins in a trench coat \u2014 useful for "how does X work?", useless when PostgreSQL replication is lagging at 3 AM across three datacenters at your specific company with your specific Puppet module.\r
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
In this talk we'll look at how agents actually use the web, where they fail (and why those failures map to WCAG violations), and what web development teams should do today. If you've been waiting for a business case for accessibility that lands with execs, this is it.`,topics:["AI Product    UX & Human-Agent Collaboration","AI Ethics & Responsibility"],speakers:[{name:"Tim Damen",slug:"tim-damen",url:"https://www.agenticdays.com/speaker/tim-damen",company:"ABN AMRO",tagline:"Head of Frontend Platforms & Accessibility Lead"}],qna_url:"https://www.agenticdays.com/q/46"}]};var Bc=`{"t":1795174108841,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
`;var er="Europe/Zurich";var zc="https://raw.githubusercontent.com/wizzben/agenticdays-audience-flow/data/recording.jsonl",Wt=[{id:"millennium",name:"Millennium",short:"M",cap:500,floor:"main2"},{id:"studio4",name:"Studio 4",short:"S4",cap:50,floor:"n4"},{id:"studio6",name:"Studio 6",short:"S6",cap:50,floor:"n4"},{id:"studio3",name:"Studio 3",short:"S3",cap:50,floor:"n0"},{id:"studio1",name:"Studio 1",short:"S1",cap:50,floor:"main1"}],je=[{id:"century",name:"Century",short:"C",w:.3,floor:"main2"},{id:"hub2",name:"Hub 2",short:"H2",w:.4,floor:"main2"},{id:"hub4",name:"Hub 4",short:"H4",w:.3,floor:"n4"}],Hc=["studio1","hub2","millennium","century","studio3","hub4","studio6","studio4"],Vc={open:[.08,.7],filling:[.7,.95],full:[.95,1]},Gc={open:12*6e4,filling:6*6e4,full:3*6e4},Vo=5*6e4,gs=15e4,nr=4*6e4,ei=18*6e4,ni={fill:.55,speed:.25,pressure:.2},Wc=20*6e4;function Xc(i,t){let e=(i.format||"").toLowerCase();return t>100?e.includes("lightning")?.35:.5:e.includes("hands")?.85:e.includes("panel")?.8:.68}function Go(i){if(i==null)return null;let t=String(i).toLowerCase().replace(/[^a-z0-9]+/g," ").trim();if(!t)return null;if(/\bmillennium\b/.test(t))return"millennium";if(/\bcentury\b/.test(t))return"century";let e=/\bstudio\s*([1-9])/.exec(t)||/\bs([1-9])\b/.exec(t)||/^studio([1-9])/.exec(t);if(e){let n="studio"+e[1];return Wt.some(s=>s.id===n)?n:null}if(e=/\bhub\s*([1-9])/.exec(t)||/^hub([1-9])/.exec(t),e){let n="hub"+e[1];return je.some(s=>s.id===n)?n:null}return null}var _d={open:"open","few seats left":"filling","no seats left":"full",started:"running"};function yd(i,t){let e=typeof i=="string"?i.trim().toLowerCase():"";if(e==="open"||e==="filling"||e==="full"||e==="running")return e;let n=typeof t=="string"?t.trim().toLowerCase():"";return _d[n]||null}function Wo(i){let t=[];if(typeof i=="string")for(let n of i.split(`
`)){let s=n.trim();if(s)try{t.push(JSON.parse(s))}catch{}}else Array.isArray(i)&&t.push(...i);let e=new Map;for(let n of t){if(!n||typeof n!="object")continue;let s=Number(n.t);if(!Number.isFinite(s)||s<1e12||s>4e12||!n.rooms||typeof n.rooms!="object")continue;let r={};for(let[o,a]of Object.entries(n.rooms)){let l=Go(o);!l||!a||typeof a!="object"||(r[l]={level:yd(a.level,a.label),target:a.target!=null&&a.target!==""?String(a.target):null})}e.set(s,{t:s,rooms:r})}return[...e.values()].sort((n,s)=>n.t-s.t)}function qc(...i){let t=new Map;for(let e of i)for(let n of e||[])t.set(n.t,n);return[...t.values()].sort((e,n)=>e.t-n.t)}var Yc=new Set("a about above across actually after again against all almost along also although always am among an and another any anyone are around as at away back based be because been before being below between both but by can cannot come could day did do does doing done down during each early easy either else end enough even ever every few first for from get gets getting give given go going good got great had has have having he her here him his how however i if in into is it its itself just keep know last least less let like little long look made make makes many may maybe me might more most much must my need never new next no not now of off often on once one only onto or other our out over own per put rather really right same say see seem several she should show shows since so some something still such take than that the their them then there these they thing things think this those through to together too took toward under until up upon us use used uses using very want was way we well went were what when where whether which while who whom why will with within without would yet you your youre weve theyre dont doesnt cant wont isnt thats lets talk session sessions workshop hands-on handson hands on attendees attendee audience participants walk learn learned learning discuss explore share story stories team teams years year time real world practical lessons look looking build building built working work works demo live approach approaches idea ideas part point case cases example examples including include includes provide provides better best different help helps able lot key main important possible simple complex today tomorrow people company companies engineers engineer developer developers ai agentic agent agents llm llms model models system systems tool tools code application applications app apps data".split(/\s+/)),Zc=new Set("scale guide factory development html api apis sdk cli question questions production running review task practice human change small multiple enable expect environment orchestrate monday tuesday wednesday thursday friday saturday sunday january february march april may june july august september october november december swiss switzerland zurich europe european german english american america we ive youll theyve whats isn aren wasn don doesn didn won wouldn shouldn couldn imagine picture think today yes no why what who how when where here there then also but and the this that our your their its".split(/\s+/)),vd=new Set(["ai","agent","agents","agentic","and","with","for","in","of","the","practice","use","cases","human","open","source","production","learned","lessons"]);function ir(i){return String(i||"").replace(/\s+/g," ").trim()}var xd={"Lessons Learned & Anti-Patterns":"Lessons Learned","Multi-Agent Architectures":"Multi-Agent","MCP & Agent Protocols":"MCP & Protocols","AI Observability & Production":"Observability","Agent Frameworks":"Agent Frameworks","AI Evals & Testing":"Evals & Testing","AI Coding Tools":"Coding Tools","Enterprise AI Adoption & Governance":"Enterprise Adoption","Local AI, Inference & Open Models":"Local AI","Software Architecture with AI":"Architecture","AI Security":"Security","AI-Assisted Coding Practice":"AI-Assisted Coding","AI Ethics & Responsibility":"Ethics","Spec-Driven & Agentic SDLC":"Spec-Driven SDLC","AI Product UX & Human-Agent Collaboration":"Product UX","Industry & Vertical Use Cases":"Industry Cases","AI in DevOps & Platform Engineering":"DevOps & Platform","RAG & Knowledge Retrieval":"RAG","AI Community, Open Source & Education":"Community & OSS","AI Strategy & Value Realization":"Strategy & Value"};function Fn(i){return i=i.toLowerCase(),i.length>4&&i.endsWith("ies")?i.slice(0,-3)+"y":i.length>4&&i.endsWith("s")&&!/(ss|us|is|ous)$/.test(i)?i.slice(0,-1):i}function $c(i){return(String(i||"").toLowerCase().match(/[a-z][a-z0-9+#.\-]*[a-z0-9+#]|[a-z]/g)||[]).map(t=>t.replace(/\.+$/,""))}function Xo(i){return i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Kc(i,t,e={}){let n=e.maxKeywords??4,s=e.maxTotal??24,r=new Map;for(let v of t)for(let x of v.topicsRaw||[]){let E=ir(x);if(!E)continue;let N="c:"+Xo(E);r.has(N)||r.set(N,{id:N,label:E,short:xd[E]||E,kind:"curated"})}let o=new Map;for(let v of r.values())for(let x of $c(v.label))vd.has(x)||x.length<3||o.has(Fn(x))||o.set(Fn(x),v.id);let a={eval:"ai-evals-testing",evaluation:"ai-evals-testing",testing:"ai-evals-testing",rag:"rag-knowledge-retrieval",mcp:"mcp-agent-protocols",security:"ai-security",secure:"ai-security",governance:"enterprise-ai-adoption-governance",observability:"ai-observability-production",monitoring:"ai-observability-production",spec:"spec-driven-agentic-sdlc","multi-agent":"multi-agent-architectures",architecture:"software-architecture-with-ai",copilot:null};for(let[v,x]of Object.entries(a))x&&r.has("c:"+x)&&o.set(Fn(v),"c:"+x);let l=new Map,c=i.map(v=>{let x=new Map;for(let D of $c(v.desc||"")){if(Yc.has(D)||Zc.has(D)||D.length<5||/^\d/.test(D))continue;let k=Fn(D);x.set(k,(x.get(k)||0)+1)}let E=new Map,N=v.desc||"",C=/[A-Za-z][A-Za-z0-9+#.\-]*[A-Za-z0-9+#]|[A-Za-z]/g,F;for(;F=C.exec(N);){let D=F[0],k=D.toLowerCase();if(Yc.has(k)||k.length<3||Zc.has(k)||/^ai-|-(native|driven|powered|based|first)$/.test(k))continue;let B=/[a-z][A-Z]|[A-Z]{2,}|[0-9]/.test(D),G=N.slice(Math.max(0,F.index-3),F.index).replace(/[\s"'(\[]+$/,""),j=F.index===0||G===""||/[.!?:\n]$/.test(G)||/\n/.test(N.slice(Math.max(0,F.index-3),F.index));if(!(B||/^[A-Z]/.test(D)&&!j))continue;let gt=Fn(D);E.set(gt,(E.get(gt)||0)+1),l.has(gt)||l.set(gt,D)}let R=new Map;for(let D of String(v.tools||"").split(/,|;|\/|\band\b|\+|\n/)){let k=D.trim().replace(/^(our|the|a|an)\s+/i,"");if(k.length<3||k.length>24||k.split(/\s+/).length>3||/take-away|not important|from scratch|building|stack|apis?$/i.test(k))continue;let B=k.toLowerCase();R.set(B,k)}return{id:v.id,terms:E,tools:R,plain:x}}),h=new Map,u=v=>h.set(v,(h.get(v)||0)+1);for(let v of c){for(let x of v.terms.keys())u(x);for(let x of v.plain.keys())u("p:"+x);for(let x of v.tools.keys())u("tool:"+x)}let d=Math.max(1,c.length),p=new Map(c.map(v=>[v.id,v])),g=new Map,_=(v,x,E,N)=>{let C=g.get(v);C||g.set(v,C={key:v,label:x,score:0,per:new Map}),C.score+=N,C.per.set(E,(C.per.get(E)||0)+N)};for(let v of t){let x=p.get(v.id);if(x){for(let[E,N]of x.terms){let C=h.get(E)||1;if(C<2||C>d*.35)continue;let F=Math.log(d/C);_("w:"+E,l.get(E)||E,v.id,(1+Math.log(N))*F)}for(let[E,N]of x.tools){let C=h.get("tool:"+E)||1;C<2||C>d*.35||_("t:"+E,N,v.id,1.8*Math.log(d/C)+1)}}}let m=new Map,f=[];for(let v of g.values()){let x=v.key.slice(2),E=v.key[0]==="w"?o.get(x):o.get(Fn(x));if(E){m.has(E)||m.set(E,new Map);let N=m.get(E);for(let[C,F]of v.per)N.set(C,Math.max(N.get(C)||0,F))}else f.push(v)}f.sort((v,x)=>x.score-v.score);let M=[];for(let v of f){let x=v.label.toLowerCase();if(!M.some(E=>Fn(E.label.toLowerCase())===Fn(x)||E.label.toLowerCase().includes(x)||x.includes(E.label.toLowerCase()))&&!(v.per.size<1)&&(M.push(v),M.length>=n))break}for(let v of t){if((v.topicsRaw||[]).length||M.some(E=>E.per.has(v.id)))continue;let x=null;for(let E of f)E.per.has(v.id)&&(!x||E.per.get(v.id)>x.per.get(v.id))&&!M.includes(E)&&(x=E);if(x)M.push(x);else{let E=p.get(v.id),N=null,C=0;for(let[F,R]of E?E.plain:[]){let D=(1+Math.log(R))*Math.log(d/(h.get("p:"+F)||1));D>C&&h.get("p:"+F)<=d*.25&&(C=D,N=F)}if(N){let F=M.find(R=>R.key==="w:"+N);F?F.per.set(v.id,C):M.push({key:"w:"+N,label:N[0].toUpperCase()+N.slice(1),score:C,per:new Map([[v.id,C]])})}}}let w=new Map,y=new Map,L=v=>{let x=v.label;return/^[a-z]/.test(x)&&x===x.toLowerCase()&&v.key[0]==="w"?x[0].toUpperCase()+x.slice(1):x},I=M.map(v=>({id:"k:"+Xo(v.label),label:L(v),short:L(v),kind:"keyword",_c:v}));for(let v of t){let x=[];for(let G of v.topicsRaw||[]){let j="c:"+Xo(ir(G));r.has(j)&&!x.includes(j)&&x.push(j)}let E=new Map;{let G=null,j=2.5;for(let[nt,gt]of m)gt.has(v.id)&&!x.includes(nt)&&gt.get(v.id)>j&&(G=nt,j=gt.get(v.id));G&&x.length<5&&E.set(G,.35)}let N=I.filter(G=>G._c.per.has(v.id)),C=N.reduce((G,j)=>G+j._c.per.get(v.id),0)||1,F=[],R=x.length+E.size,D=N.length?R?.78:0:1,k=N.length?R?.22:1:0;for(let G of x)F.push({id:G,w:D/Math.max(1,R)});for(let[G,j]of E)F.push({id:G,w:D/Math.max(1,R)*j});for(let G of N)F.push({id:G.id,w:k*G._c.per.get(v.id)/C});if(!F.length&&N.length===0){w.set(v.id,[]);continue}let B=F.reduce((G,j)=>G+j.w,0)||1;for(let G of F)G.w/=B,y.set(G.id,(y.get(G.id)||0)+G.w);w.set(v.id,F)}let U=[...r.values(),...I.map(({_c:v,...x})=>x)].map(v=>({...v,potential:y.get(v.id)||0})).filter(v=>v.potential>0).sort((v,x)=>x.potential-v.potential);U=U.slice(0,s);let P=new Set(U.map(v=>v.id));for(let[v,x]of w){let E=x.filter(C=>P.has(C.id)),N=E.reduce((C,F)=>C+F.w,0);w.set(v,N>0?E.map(C=>({id:C.id,w:C.w/N})):[])}return{topics:U,sessionTopics:w}}var Si=(i,t,e)=>i<t?t:i>e?e:i,sr=i=>(i=Si(i,0,1),i*i*(3-2*i));function Yo(i){let t=Array.isArray(i)?i:i&&i.sessions||[],e=[];for(let n of t){if(!n||!n.id)continue;let s=Date.parse(n.starts_at),r=Date.parse(n.ends_at);!Number.isFinite(s)||!Number.isFinite(r)||e.push({id:String(n.id),title:n.title||"",format:n.format||"",start:s,end:r,roomId:Go(n.room),roomName:n.room||"",topicsRaw:(n.topics||[]).map(ir).filter(Boolean),desc:n.description||"",tools:n.main_tools||"",speakers:(n.speakers||[]).map(o=>o.name).filter(Boolean),company:(n.speakers||[]).map(o=>o.company).filter(Boolean),url:n.url||""})}return e.sort((n,s)=>n.start-s.start)}function _s(i,t=12,e=5){let s=(Array.isArray(i)?i:i&&i.sessions||[]).find(c=>typeof c.starts_at=="string"&&/^\d{4}-\d\d-\d\dT.*([+-]\d\d:\d\d|Z)$/.test(c.starts_at)),r=s?s.starts_at:"2026-11-20T09:00:00+01:00",o=r.slice(0,10),a=r.endsWith("Z")?"+00:00":r.slice(-6),l=Date.parse(`${o}T${String(t).padStart(2,"0")}:00:00${a}`);return{t0:l,t1:l+e*36e5}}function bd(i){return i>=.95?"full":i>=.7?"filling":"open"}function Sd(i,t,e){let n=[],s=new Set(t.map(r=>r.id));for(let r of e){let o=r.rooms[i.roomId];if(!o||!o.level)continue;let a;if(o.target&&s.has(o.target))a=o.target===i.id;else{let l=null;for(let c of t)c.start-30*6e4<=r.t&&r.t<c.end&&(!l||c.start>l.start)&&(l=c);a=l&&l.id===i.id}a&&n.push({t:r.t,level:o.level})}return n}function Ad(i,t,e){let{S:n,E:s}={S:i.start,E:i.end},r=e.priorPeak,o=g=>r*sr((g-(n-ei))/(ei+2*6e4)),a=(g,_)=>{let m=t[g],f=t[g+1],[M,w]=Vc[m.level],y;if(f&&f.t-m.t<=Vo)y=sr((_-m.t)/(f.t-m.t));else{let L=Math.max(0,(f?Math.min(_,f.t):_)-m.t);y=1-Math.exp(-L/Gc[m.level])}return M+(w-M)*y},l=new Array(t.length),c=null;for(let g=0;g<t.length;g++)if(t[g].level==="running"){if(c==null){let _=g-1;for(;_>=0&&t[_].level==="running";)_--;c=_>=0?a(_,t[g].t):e.carryIn!=null?e.carryIn:r}l[g]=c}else c=null;let h=t.length?t[t.length-1]:null,u=g=>{if(!t.length)return o(g);if(g<t[0].t){let w=t[0],y=w.level==="running"?l[0]:a(0,w.t),L=Math.min(n-ei,w.t);return y*sr((g-L)/Math.max(6e4,w.t-L))}let _=0,m=t.length-1;for(;_<m;){let w=_+m+1>>1;t[w].t<=g?_=w:m=w-1}let f=t[_],M=f.level==="running"?l[_]:a(_,g);return _===t.length-1&&g>h.t+gs&&f.level!=="running"&&(M=Math.max(M,o(g))),M},d=()=>u(s),p=null;return g=>g>=s?(p==null&&(p=d()),p*(1-sr((g-s)/nr))):u(g)}function Jc(i,t){let e={open:0,filling:1,full:2,running:3};for(let n of i)if(e[n.level]>=e[t]&&n.level!=="running")return n.t;return null}function Ed(i,t,e,n){let s=Jc(e,"full"),r=Jc(e,"filling"),o=r??s,a=o==null?0:Si((i.start-o)/Wc,0,1),l=t<=100,c=e.some(g=>g.level==="full"),h=e.some(g=>g.level==="filling"),u=c?l?1:.5:h?l?.4:.2:0,d=ni.fill*n+ni.speed*a+ni.pressure*u,p=e.length?e[0]:null;return{score:d,speed:a,pressure:u,tFull:s,tFilling:r,unmet:c&&l,confident:!!p&&p.level!=="running"}}function Td(i,t){let e=i.map(o=>Math.max(0,Math.floor(o))),n=t-e.reduce((o,a)=>o+a,0),s=i.map((o,a)=>[Math.max(0,o)-e[a],a]).sort((o,a)=>a[0]-o[0]||o[1]-a[1]),r=0;for(;n>0;)e[s[r%s.length][1]]++,n--,r++;for(r=s.length-1;n<0;){let o=s[r][1];e[o]>0&&(e[o]--,n++),r=(r-1+s.length)%s.length}return e}function Zo(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function $o(i){let t=i.crowd??650,e=Yo(i.sessions),n=_s(i.sessions),s=i.t0??n.t0,r=i.t1??n.t1,o=e.filter(q=>q.start>=s&&q.start<r&&q.roomId&&Wt.some(it=>it.id===q.roomId)),a=(i.recording||[]).filter(q=>q&&Number.isFinite(q.t)),l=Math.floor((r-s)/3e4)+1,c=Object.fromEntries(Wt.map(q=>[q.id,q.cap])),h=a.map(q=>q.t),u=h.length?h[h.length-1]:null,d=h.length?h[0]:null,p=new Uint8Array(l);{let q=0;for(let it=0;it<l;it++){let ct=s+it*3e4;for(;q<h.length-1&&h[q+1]<=ct;)q++;let X=h[q],et=h[q+1],T=0;X!=null&&((Math.abs(ct-X)<=gs||et!=null&&ct>X&&et-X<=Vo&&ct<et)&&(T=1),et!=null&&Math.abs(et-ct)<=gs&&(T=1)),p[it]=T}}let g={};for(let q of Wt)g[q.id]=o.filter(it=>it.roomId===q.id);let _=new Map(o.map(q=>[q.id,Sd(q,g[q.roomId],a)])),{topics:m,sessionTopics:f}=Kc(e.length?e:o,o),M=new Map(m.map((q,it)=>[q.id,it])),w=new Map,y=new Map;for(let q=0;q<2;q++){for(let ct of o){let X=c[ct.roomId],et=_.get(ct.id),T=Xc(ct,X),ft=f.get(ct.id)||[];if(q===1&&ft.length){let K=0,rt=0;for(let tt of ft)w.has(tt.id)&&(K+=w.get(tt.id)*tt.w,rt+=tt.w);rt>0&&(T=Si(T*(1+.5*(K/rt-.5)),.15,1))}let at=g[ct.roomId].indexOf(ct),st=at>0?g[ct.roomId][at-1]:null,ht=null;st&&ct.start-st.end<=15*6e4&&y.get(st.id)?.hasData&&(ht=y.get(st.id).finalFill);let vt=Ad(ct,et,{priorPeak:T,carryIn:ht}),pt=et.length>0,A=0;for(let K=ct.start-ei;K<=ct.end;K+=3e4)A=Math.max(A,vt(K));let b=vt(ct.end-1),W;if(pt)W=Ed(ct,X,et,A);else{let K=T>=.95?X<=100?1:.5:0;W={score:ni.fill*T+ni.speed*.3+ni.pressure*K,speed:.3,pressure:K,unmet:!1,confident:!1,tFull:null,tFilling:null}}y.set(ct.id,{curve:vt,hasData:pt,peak:A,finalFill:b,pop:W,prior:T})}let it=new Map;for(let ct of o){let X=y.get(ct.id);if(X.hasData)for(let et of f.get(ct.id)||[]){let T=it.get(et.id)||{s:0,w:0};T.s+=X.pop.score*et.w,T.w+=et.w,it.set(et.id,T)}}w=new Map([...it].map(([ct,X])=>[ct,Si(X.s/X.w,0,1)]))}let L=Hc,I=L.length,U=Object.fromEntries(L.map((q,it)=>[q,it])),P=L.map(()=>new Float32Array(l)),v={};for(let q of Wt)v[q.id]=new Uint8Array(l);let x=new Float32Array(l),E=new Map(o.map(q=>[q.id,new Float32Array(l)])),N=new Map(o.map(q=>[q.id,new Uint8Array(l)])),C=je.reduce((q,it)=>q+it.w,0);for(let q=0;q<l;q++){let it=s+q*3e4,ct={},X=0;for(let st of Wt)ct[st.id]=0;for(let st of o){let ht=y.get(st.id);if(it<st.start-ei-10*6e4||it>st.end+nr+1e3)continue;let vt=ht.curve(it)*c[st.roomId];ct[st.roomId]+=vt,E.get(st.id)[q]=vt,N.get(st.id)[q]=ht.hasData&&p[q]?1:0}for(let st of o){let ht=c[st.roomId];if(ct[st.roomId]>ht){let vt=ht/ct[st.roomId];E.get(st.id)[q]*=vt}}for(let st of Wt)ct[st.id]>st.cap&&(ct[st.id]=st.cap),X+=ct[st.id];let et=t*(1-.06),T=X>et?et/X:1;x[q]=X-X*T;let ft=0;for(let st of Wt){let ht=ct[st.id]*T;P[U[st.id]][q]=ht,ft+=ht}for(let st of o)E.get(st.id)[q]*=T;let at=t-ft;for(let st of je)P[U[st.id]][q]=at*st.w/C;for(let st of Wt){let ht=p[q];if(ht){let vt=g[st.id].filter(pt=>it>=pt.start-ei&&it<=pt.end+nr);vt.length&&vt.every(pt=>!y.get(pt.id).hasData)&&(ht=0)}v[st.id][q]=ht}}let F=m.length,R=m.map(()=>new Float32Array(l)),D=m.map(()=>new Float32Array(l)),k=m.map(()=>new Float32Array(l)),B=m.map(()=>new Float32Array(l));for(let q of o){let it=f.get(q.id)||[],ct=E.get(q.id),X=N.get(q.id);for(let et of it){let T=M.get(et.id);if(T==null)continue;let ft=R[T],at=D[T],st=k[T],ht=B[T];for(let vt=0;vt<l;vt++){let pt=ct[vt]*et.w;if(pt===0)continue;ft[vt]+=pt,X[vt]||(st[vt]+=pt);let A=pt*3e4/6e4;at[vt]+=A,X[vt]||(ht[vt]+=A)}}}for(let q=0;q<F;q++){let it=0,ct=0;for(let X=0;X<l;X++)it+=D[q][X],D[q][X]=it,ct+=B[q][X],B[q][X]=ct}let G=q=>q.reduce((it,ct)=>{for(let X=0;X<l;X++)ct[X]>it&&(it=ct[X]);return it},1e-9),j=t,nt=Zo(20261120),gt=Array.from({length:j},(q,it)=>it);for(let q=j-1;q>0;q--){let it=Math.floor(nt()*(q+1));[gt[q],gt[it]]=[gt[it],gt[q]]}let Nt=new Int32Array(j);gt.forEach((q,it)=>{Nt[q]=it});let Y=new Int8Array(j*l),J=L.map(()=>new Int16Array(l)),_t=new Array(I+1);for(let q=0;q<l;q++){let it=Td(L.map((ct,X)=>P[X][q]),j);_t[0]=0;for(let ct=0;ct<I;ct++)_t[ct+1]=_t[ct]+it[ct],J[ct][q]=it[ct];for(let ct=0;ct<j;ct++){let X=Nt[ct],et=0;for(;X>=_t[et+1];)et++;Y[ct*l+q]=et}}let ut=o.map(q=>{let it=y.get(q.id),ct=c[q.roomId];return{...q,cap:ct,topics:f.get(q.id)||[],hasData:it.hasData,pop:it.pop,peakFill:it.peak,peakCount:it.peak*ct,finalFill:it.finalFill,prior:it.prior,samples:_.get(q.id).length,points:_.get(q.id),curve:it.curve}}),St={t0:s,t1:r,K:l,step:3e4,crowd:j,sessions:ut,rooms:Wt,hubs:je,locIds:L,topics:m,counts:P,intCounts:J,roomRec:v,overflow:x,covered:p,loc:Y,topicNow:R,topicCum:D,topicProjNow:k,topicProjCum:B,topicMaxNow:G(R),topicMaxCum:G(D),lastSample:u,firstSample:d,nSamples:a.length,samples:a,byRoom:g};return St.at=q=>Cd(St,q),St.levelAt=(q,it)=>Rd(St,q,it),St}function Cd(i,t){let e=Si((t-i.t0)/i.step,0,i.K-1),n=Math.floor(e),s=Math.min(i.K-1,n+1),r=e-n,o={};for(let l of i.rooms){let c=i.counts[i.locIds.indexOf(l.id)];o[l.id]={count:c[n]*(1-r)+c[s]*r,fill:(c[n]*(1-r)+c[s]*r)/l.cap,rec:!!i.roomRec[l.id][r<.5?n:s]}}let a={};for(let l of i.hubs){let c=i.counts[i.locIds.indexOf(l.id)];a[l.id]={count:c[n]*(1-r)+c[s]*r}}return{t,rooms:o,hubs:a,covered:!!i.covered[r<.5?n:s],overflow:i.overflow[n]*(1-r)+i.overflow[s]*r}}function Rd(i,t,e){let n=Si(Math.round((e-i.t0)/i.step),0,i.K-1);if(i.roomRec[t][n]){let l=i.samples,c=0,h=l.length-1,u=-1;for(;c<=h;){let d=c+h>>1;l[d].t<=e+gs?(u=d,c=d+1):h=d-1}for(let d=u;d>=0&&e-l[d].t<10*6e4;d--){let p=l[d].rooms[t];if(p&&p.level)return{level:p.level,rec:!0}}}let s=i.locIds.indexOf(t),r=i.rooms.find(l=>l.id===t).cap,o=i.counts[s][n]/r;return i.sessions.find(l=>l.roomId===t&&e>=l.start&&e<l.end)?{level:"running",rec:!1}:{level:bd(o),rec:!1,idle:o<.05}}var Id={open:"Open",filling:"Few seats left",full:"No seats left",running:"Started"};function Qc(i,t={}){let e=_s(i),n=t.from??e.t0+20*6e4,s=t.to??e.t0+4.75*36e5,r=Zo(t.seed??7),o=Yo(i).filter(u=>u.start>=e.t0&&u.roomId),a={};for(let u of o){let d=Wt.find(g=>g.id===u.roomId).cap,p=r();t.popularity&&t.popularity[u.id]!=null?p=t.popularity[u.id]:d>100&&(p=.15+p*.65),a[u.id]=p}let l=u=>u>=.85?{fill:-26,full:-14}:u>=.7?{fill:-14,full:-3}:u>=.5?{fill:-8,full:null}:u>=.3?{fill:-3,full:null}:{fill:null,full:null},c=[],h=t.gaps?[e.t0+2.6*36e5,e.t0+2.6*36e5+12*6e4]:null;for(let u=n;u<=s;u+=3e4){if(h&&u>=h[0]&&u<h[1]||t.gaps&&r()<.05)continue;let d={};for(let p of Wt){let g=o.filter(f=>f.roomId===p.id),_=g.find(f=>f.end>u)||g[g.length-1];if(!_)continue;let m="open";if(u>=_.end)m="open";else if(u>=_.start)m="running";else{let f=l(a[_.id]),M=(_.start-u)/6e4;f.full!=null&&M<=-f.full?m="full":f.fill!=null&&M<=-f.fill&&(m="filling")}d[p.id]={level:m,label:Id[m],target:_.id}}c.push({t:u,rooms:d})}return c}var xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pd=0,th=1,Ld=2;var gu=1,Dd=2,An=3,Zn=0,Oe=1,qe=2,Xn=0,qi=1,eh=2,nh=3,ih=4,Ud=5,hi=100,Nd=101,Od=102,Fd=103,kd=104,Bd=200,zd=201,Hd=202,Vd=203,Pa=204,La=205,Gd=206,Wd=207,Xd=208,qd=209,Yd=210,Zd=211,$d=212,Kd=213,Jd=214,Da=0,Ua=1,Na=2,Ji=3,Oa=4,Fa=5,ka=6,Ba=7,oc=0,jd=1,Qd=2,qn=0,tf=1,ef=2,nf=3,sf=4,rf=5,of=6,af=7;var _u=300,ji=301,Qi=302,za=303,Ha=304,Ro=306,Va=1e3,di=1001,Ga=1002,Ge=1003,lf=1004;var rr=1005;var un=1006,Ko=1007;var fi=1008;var Rn=1009,yu=1010,vu=1011,Us=1012,ac=1013,pi=1014,dn=1015,Ws=1016,lc=1017,cc=1018,ts=1020,xu=35902,wu=1021,Mu=1022,rn=1023,bu=1024,Su=1025,Yi=1026,es=1027,hc=1028,uc=1029,Au=1030,dc=1031;var fc=1033,Br=33776,zr=33777,Hr=33778,Vr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,$a=37492,Ka=37496,Ja=37808,ja=37809,Qa=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,ol=37817,al=37818,ll=37819,cl=37820,hl=37821,Gr=36492,ul=36494,dl=36495,Eu=36283,fl=36284,pl=36285,ml=36286;var Wr=2300,gl=2301,Jo=2302,sh=2400,rh=2401,oh=2402;var cf=3200,hf=3201;var pc=0,uf=1,Wn="",Ne="srgb",ls="srgb-linear",Io="linear",ee="srgb";var Ai=7680;var ah=519,df=512,ff=513,pf=514,Tu=515,mf=516,gf=517,_f=518,yf=519,_l=35044,mc=35048;var lh="300 es",Tn=2e3,Xr=2001,In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=1234567,Zi=Math.PI/180,Ns=180/Math.PI;function fn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function gc(i,t){return(i%t+t)%t}function vf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xf(i,t,e){return i!==t?(e-i)/(t-i):0}function Is(i,t,e){return(1-e)*i+e*t}function wf(i,t,e,n){return Is(i,t,1-Math.exp(-e*n))}function Mf(i,t=1){return t-Math.abs(gc(i,t*2)-t)}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Af(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ef(i,t){return i+Math.random()*(t-i)}function Tf(i){return i*(.5-Math.random())}function Cf(i){i!==void 0&&(ch=i);let t=ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rf(i){return i*Zi}function If(i){return i*Ns}function Pf(i){return(i&i-1)===0&&i!==0}function Lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Df(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Cu={DEG2RAD:Zi,RAD2DEG:Ns,generateUUID:fn,clamp:_e,euclideanModulo:gc,mapLinear:vf,inverseLerp:xf,lerp:Is,damp:wf,pingpong:Mf,smoothstep:bf,smootherstep:Sf,randInt:Af,randFloat:Ef,randFloatSpread:Tf,seededRandom:Cf,degToRad:Rf,radToDeg:If,isPowerOfTwo:Pf,ceilPowerOfTwo:Lf,floorPowerOfTwo:Df,setQuaternionFromProperEuler:Uf,normalize:te,denormalize:sn},lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],w=s[4],y=s[7],L=s[2],I=s[5],U=s[8];return r[0]=o*_+a*M+l*L,r[3]=o*m+a*w+l*I,r[6]=o*f+a*y+l*U,r[1]=c*_+h*M+u*L,r[4]=c*m+h*w+u*I,r[7]=c*f+h*y+u*U,r[2]=d*_+p*M+g*L,r[5]=d*m+p*w+g*I,r[8]=d*f+p*y+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jo.makeScale(t,e)),this}rotate(t){return this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jo=new Vt;function Ru(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nf(){let i=qr("canvas");return i.style.display="block",i}var hh={};function Cs(i){i in hh||(hh[i]=!0,console.warn(i))}function Of(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ff(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?Io:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var uh=[.64,.33,.3,.6,.15,.06],dh=[.2126,.7152,.0722],fh=[.3127,.329],ph=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[ls]:{primaries:uh,whitePoint:fh,transfer:Io,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:uh,whitePoint:fh,transfer:ee,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});var Ei,yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=qr("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bf=0,Yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qo(s[o].image)):r.push(Qo(s[o]))}else r=Qo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zf=0,ke=class i extends In{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,s=di,r=un,o=fi,a=rn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=fn(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=_u;ke.DEFAULT_ANISOTROPY=1;var pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(p+1)/2,L=(f+1)/2,I=(h+d)/4,U=(u+_)/4,P=(g+m)/4;return w>y&&w>L?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=I/n,r=U/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=I/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=U/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends In{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xl=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*_,M=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let L=Math.sqrt(w),I=Math.atan2(L,f*M);m=Math.sin(m*I)/L,a=Math.sin(a*I)/L}let y=a*M;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+_*y,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new O,gh=new on,Ln=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(r,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),ar.subVectors(this.max,ys),Ti.subVectors(t.a,ys),Ci.subVectors(t.b,ys),Ri.subVectors(t.c,ys),kn.subVectors(Ci,Ti),Bn.subVectors(Ri,Ci),ii.subVectors(Ti,Ri);let e=[0,-kn.z,kn.y,0,-Bn.z,Bn.y,0,-ii.z,ii.y,kn.z,0,-kn.x,Bn.z,0,-Bn.x,ii.z,0,-ii.x,-kn.y,kn.x,0,-Bn.y,Bn.x,0,-ii.y,ii.x,0];return!ea(e,Ti,Ci,Ri,ar)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Ti,Ci,Ri,ar))?!1:(lr.crossVectors(kn,Bn),e=[lr.x,lr.y,lr.z],ea(e,Ti,Ci,Ri,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xn=[new O,new O,new O,new O,new O,new O,new O,new O],Qe=new O,or=new Ln,Ti=new O,Ci=new O,Ri=new O,kn=new O,Bn=new O,ii=new O,ys=new O,ar=new O,lr=new O,si=new O;function ea(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){si.fromArray(i,r);let a=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Hf=new Ln,vs=new O,na=new O,$n=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(na)),this.expandByPoint(vs.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wn=new O,ia=new O,cr=new O,zn=new O,sa=new O,hr=new O,ra=new O,mi=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ia.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(ia);let r=t.distanceTo(e)*.5,o=-this.direction.dot(cr),a=zn.dot(this.direction),l=-zn.dot(cr),c=zn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ia).addScaledVector(cr,d),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){sa.subVectors(e,t),hr.subVectors(n,t),ra.crossVectors(sa,hr);let o=this.direction.dot(ra),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);let l=a*this.direction.dot(hr.crossVectors(zn,hr));if(l<0)return null;let c=a*this.direction.dot(sa.cross(zn));if(c<0||l+c>o)return null;let h=-a*zn.dot(ra);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Gf)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Hn.crossVectors(n,He),Hn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Hn.crossVectors(n,He)),Hn.normalize(),ur.crossVectors(He,Hn),s[0]=Hn.x,s[4]=ur.x,s[8]=He.x,s[1]=Hn.y,s[5]=ur.y,s[9]=He.y,s[2]=Hn.z,s[6]=ur.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],w=n[7],y=n[11],L=n[15],I=s[0],U=s[4],P=s[8],v=s[12],x=s[1],E=s[5],N=s[9],C=s[13],F=s[2],R=s[6],D=s[10],k=s[14],B=s[3],G=s[7],j=s[11],nt=s[15];return r[0]=o*I+a*x+l*F+c*B,r[4]=o*U+a*E+l*R+c*G,r[8]=o*P+a*N+l*D+c*j,r[12]=o*v+a*C+l*k+c*nt,r[1]=h*I+u*x+d*F+p*B,r[5]=h*U+u*E+d*R+p*G,r[9]=h*P+u*N+d*D+p*j,r[13]=h*v+u*C+d*k+p*nt,r[2]=g*I+_*x+m*F+f*B,r[6]=g*U+_*E+m*R+f*G,r[10]=g*P+_*N+m*D+f*j,r[14]=g*v+_*C+m*k+f*nt,r[3]=M*I+w*x+y*F+L*B,r[7]=M*U+w*E+y*R+L*G,r[11]=M*P+w*N+y*D+L*j,r[15]=M*v+w*C+y*k+L*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,w=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,y=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,L=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,I=e*M+n*w+s*y+r*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=M*U,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*U,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*U,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*U,t[4]=w*U,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*U,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*U,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*U,t[8]=y*U,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*U,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*U,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*U,t[12]=L*U,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*U,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*U,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,M=l*c,w=l*h,y=l*u,L=n.x,I=n.y,U=n.z;return s[0]=(1-(_+f))*L,s[1]=(p+y)*L,s[2]=(g-w)*L,s[3]=0,s[4]=(p-y)*I,s[5]=(1-(d+f))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(g+w)*U,s[9]=(m-M)*U,s[10]=(1-(d+_))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);let c=1/r,h=1/o,u=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Tn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===Tn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h,g,_;if(a===Tn)g=(o+r)*u,_=-2*u;else if(a===Xr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ii=new O,tn=new ne,Vf=new O(0,0,0),Gf=new O(1,1,1),Hn=new O,ur=new O,He=new O,_h=new ne,yh=new on,an=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wf=0,vh=new O,Pi=new on,Mn=new ne,dr=new O,xs=new O,Xf=new O,qf=new on,xh=new O(1,0,0),wh=new O(0,1,0),Mh=new O(0,0,1),bh={type:"added"},Yf={type:"removed"},Li={type:"childadded",child:null},oa={type:"childremoved",child:null},Se=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new an,n=new on,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Vt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(wh,t)}rotateZ(t){return this.rotateOnAxis(Mh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(wh,t)}translateZ(t){return this.translateOnAxis(Mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(xs,dr,this.up):Mn.lookAt(dr,xs,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),oa.child=t,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new O(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new O,bn=new O,aa=new O,Sn=new O,Di=new O,Ui=new O,Sh=new O,la=new O,ca=new O,ha=new O,ua=new pe,da=new pe,fa=new pe,En=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),bn.subVectors(n,e),aa.subVectors(t,e);let o=en.dot(en),a=en.dot(bn),l=en.dot(aa),c=bn.dot(bn),h=bn.dot(aa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ua.setScalar(0),da.setScalar(0),fa.setScalar(0),ua.fromBufferAttribute(t,e),da.fromBufferAttribute(t,n),fa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ua,r.x),o.addScaledVector(da,r.y),o.addScaledVector(fa,r.z),o}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),bn.subVectors(t,e),en.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),en.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Di.subVectors(s,n),Ui.subVectors(r,n),la.subVectors(t,n);let l=Di.dot(la),c=Ui.dot(la);if(l<=0&&c<=0)return e.copy(n);ca.subVectors(t,s);let h=Di.dot(ca),u=Ui.dot(ca);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Di,o);ha.subVectors(t,r);let p=Di.dot(ha),g=Ui.dot(ha);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ui,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Sh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Sh,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=gc(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pa(o,r,t+1/3),this.g=pa(o,r,t),this.b=pa(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Zt.fromWorkingColorSpace(Te.copy(this),t),Math.round(_e(Te.r*255,0,255))*65536+Math.round(_e(Te.g*255,0,255))*256+Math.round(_e(Te.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ne){Zt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(fr);let n=Is(Vn.h,fr.h,e),s=Is(Vn.s,fr.s,e),r=Is(Vn.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Ft;Ft.NAMES=Iu;var Zf=0,pn=class extends In{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=fn(),this.name="",this.blending=qi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=La,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mn=class extends pn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new O,pr=new lt,Fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}};var $r=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Kr=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},$f=0,Xe=new ne,ma=new Se,Ni=new O,Ve=new Ln,ws=new Ln,we=new O,Ce=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ru(t)?Kr:$r)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ve.min,ws.min),Ve.expandByPoint(we),we.addVectors(Ve.max,ws.max),Ve.expandByPoint(we)):(Ve.expandByPoint(ws.min),Ve.expandByPoint(ws.max))}Ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(t,c),we.add(Ni)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new O,l[P]=new O;let c=new O,h=new O,u=new O,d=new lt,p=new lt,g=new lt,_=new O,m=new O;function f(P,v,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(E),a[P].add(_),a[v].add(_),a[x].add(_),l[P].add(m),l[v].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,v=M.length;P<v;++P){let x=M[P],E=x.start,N=x.count;for(let C=E,F=E+N;C<F;C+=3)f(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let w=new O,y=new O,L=new O,I=new O;function U(P){L.fromBufferAttribute(s,P),I.copy(L);let v=a[P];w.copy(v),w.sub(L.multiplyScalar(L.dot(v))).normalize(),y.crossVectors(I,v);let E=y.dot(l[P])<0?-1:1;o.setXYZW(P,w.x,w.y,w.z,E)}for(let P=0,v=M.length;P<v;++P){let x=M[P],E=x.start,N=x.count;for(let C=E,F=E+N;C<F;C+=3)U(t.getX(C+0)),U(t.getX(C+1)),U(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ah=new ne,ri=new mi,mr=new $n,Eh=new O,gr=new O,_r=new O,yr=new O,ga=new O,vr=new O,Th=new O,xr=new O,ge=class extends Se{constructor(t=new Ce,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ga.fromBufferAttribute(u,t),o?vr.addScaledVector(ga,h):vr.addScaledVector(ga.sub(e),h))}e.add(vr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(mr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(mr,Eh)===null||ri.origin.distanceToSquared(Eh)>(t.far-t.near)**2))&&(Ah.copy(r).invert(),ri.copy(t.ray).applyMatrix4(Ah),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,L=w;y<L;y+=3){let I=a.getX(y),U=a.getX(y+1),P=a.getX(y+2);s=wr(this,f,t,n,c,h,u,I,U,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let M=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=wr(this,o,t,n,c,h,u,M,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,L=w;y<L;y+=3){let I=y,U=y+1,P=y+2;s=wr(this,f,t,n,c,h,u,I,U,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let M=m,w=m+1,y=m+2;s=wr(this,o,t,n,c,h,u,M,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Kf(i,t,e,n,s,r,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Zn,a),l===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:i}}function wr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,gr),i.getVertexPosition(l,_r),i.getVertexPosition(c,yr);let h=Kf(i,t,e,n,gr,_r,yr,Th);if(h){let u=new O;En.getBarycoord(Th,gr,_r,yr,u),s&&(h.uv=En.getInterpolatedAttribute(s,a,l,c,u,new lt)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=En.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};En.getNormal(gr,_r,yr,d.normal),h.face=d,h.barycoord=u}return h}var Kn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(_,m,f,M,w,y,L,I,U,P,v){let x=y/U,E=L/P,N=y/2,C=L/2,F=I/2,R=U+1,D=P+1,k=0,B=0,G=new O;for(let j=0;j<D;j++){let nt=j*E-C;for(let gt=0;gt<R;gt++){let Nt=gt*x-N;G[_]=Nt*M,G[m]=nt*w,G[f]=F,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[f]=I>0?1:-1,h.push(G.x,G.y,G.z),u.push(gt/U),u.push(1-j/P),k+=1}}for(let j=0;j<P;j++)for(let nt=0;nt<U;nt++){let gt=d+nt+R*j,Nt=d+nt+R*(j+1),Y=d+(nt+1)+R*(j+1),J=d+(nt+1)+R*j;l.push(gt,Nt,J),l.push(Nt,Y,J),B+=6}a.addGroup(p,B,v),p+=B,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Jf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var jf={clone:ns,merge:Pe},Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends pn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=Jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Jr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new O,Ch=new lt,Rh=new lt,Le=class extends Jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Rh),e.subVectors(Rh,Ch)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Oi=-90,Fi=1,wl=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(Oi,Fi,t,e);s.layers=this.layers,this.add(s);let r=new Le(Oi,Fi,t,e);r.layers=this.layers,this.add(r);let o=new Le(Oi,Fi,t,e);o.layers=this.layers,this.add(o);let a=new Le(Oi,Fi,t,e);a.layers=this.layers,this.add(a);let l=new Le(Oi,Fi,t,e);l.layers=this.layers,this.add(l);let c=new Le(Oi,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jr=class extends ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ml=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kn(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Xn});r.uniforms.tEquirect.value=e;let o=new ge(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=un),new wl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_a=new O,ep=new O,np=new Vt,nn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_a.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||np.getNormalMatrix(t),s=this.coplanarPoint(_a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new $n,Mr=new O,Fs=class{constructor(t=new nn,e=new nn,n=new nn,s=new nn,r=new nn,o=new nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],M=s[13],w=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-p,y-f).normalize(),n[1].setComponents(l+r,d+c,m+p,y+f).normalize(),n[2].setComponents(l+o,d+h,m+g,y+M).normalize(),n[3].setComponents(l-o,d-h,m-g,y-M).normalize(),n[4].setComponents(l-a,d-u,m-_,y-w).normalize(),e===Tn)n[5].setComponents(l+a,d+u,m+_,y+w).normalize();else if(e===Xr)n[5].setComponents(a,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ip(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qr=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let w=0;w<c;w++){let y=w*u-r;g.push(y,-M,0),_.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let w=M+c*f,y=M+c*(f+1),L=M+1+c*(f+1),I=M+1+c*f;p.push(w,y,I),p.push(y,L,I)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
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
#endif`,nm=`struct PhysicalMaterial {
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
}`,im=`
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vm=`float getShadowMask() {
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,yg=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,Ag=`#define PHONG
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
}`,Eg=`#define PHONG
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
}`,Tg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Rg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Pg=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:op,alphamap_pars_fragment:ap,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:yp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Mp,color_fragment:bp,color_pars_fragment:Sp,color_pars_vertex:Ap,color_vertex:Ep,common:Tp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Pp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Dp,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Op,envmap_common_pars_fragment:Fp,envmap_pars_fragment:kp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Kp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Zp,lights_pars_begin:$p,lights_toon_fragment:Jp,lights_toon_pars_fragment:jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:_m,morphnormal_vertex:ym,morphtarget_pars_vertex:vm,morphtarget_vertex:xm,normal_fragment_begin:wm,normal_fragment_maps:Mm,normal_pars_fragment:bm,normal_pars_vertex:Sm,normal_vertex:Am,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Im,opaque_fragment:Pm,packing:Lm,premultiplied_alpha_fragment:Dm,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Om,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:zm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Vm,skinbase_vertex:Gm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:Zm,tonemapping_fragment:$m,tonemapping_pars_fragment:Km,transmission_fragment:Jm,transmission_pars_fragment:jm,uv_pars_fragment:Qm,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:og,cube_vert:ag,cube_frag:lg,depth_vert:cg,depth_frag:hg,distanceRGBA_vert:ug,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:yg,meshlambert_vert:vg,meshlambert_frag:xg,meshmatcap_vert:wg,meshmatcap_frag:Mg,meshnormal_vert:bg,meshnormal_frag:Sg,meshphong_vert:Ag,meshphong_frag:Eg,meshphysical_vert:Tg,meshphysical_frag:Cg,meshtoon_vert:Rg,meshtoon_frag:Ig,points_vert:Pg,points_frag:Lg,shadow_vert:Dg,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Og},yt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},hn={basic:{uniforms:Pe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Pe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Pe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Pe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Pe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Pe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Pe([yt.points,yt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Pe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Pe([yt.common,yt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Pe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Pe([yt.sprite,yt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Pe([yt.common,yt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Pe([yt.lights,yt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};hn.physical={uniforms:Pe([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var br={r:0,b:0,g:0},ai=new an,Fg=new ne;function kg(i,t,e,n,s,r,o){let a=new Ft(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?e:t).get(w)),w}function _(M){let w=!1,y=g(M);y===null?f(a,l):y&&y.isColor&&(f(y,1),w=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,w){let y=g(w);y&&(y.isCubeTexture||y.mapping===Ro)?(h===void 0&&(h=new ge(new Kn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ns(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ai.copy(w.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(ai)),h.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ee,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ge(new Qr(2,2),new gn({name:"BackgroundMaterial",uniforms:ns(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,w){M.getRGB(br,Pu(i)),n.buffers.color.setClear(br.r,br.g,br.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),l=w,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:_,addToRenderList:m}}function Bg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(x,E,N,C,F){let R=!1,D=u(C,N,E);r!==D&&(r=D,c(r.object)),R=p(x,C,N,F),R&&g(x,C,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(R||o)&&(o=!1,y(x,E,N,C),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,E,N){let C=N.wireframe===!0,F=n[x.id];F===void 0&&(F={},n[x.id]=F);let R=F[E.id];R===void 0&&(R={},F[E.id]=R);let D=R[C];return D===void 0&&(D=d(l()),R[C]=D),D}function d(x){let E=[],N=[],C=[];for(let F=0;F<e;F++)E[F]=0,N[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:C,object:x,attributes:{},index:null}}function p(x,E,N,C){let F=r.attributes,R=E.attributes,D=0,k=N.getAttributes();for(let B in k)if(k[B].location>=0){let j=F[B],nt=R[B];if(nt===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),j===void 0||j.attribute!==nt||nt&&j.data!==nt.data)return!0;D++}return r.attributesNum!==D||r.index!==C}function g(x,E,N,C){let F={},R=E.attributes,D=0,k=N.getAttributes();for(let B in k)if(k[B].location>=0){let j=R[B];j===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(j=x.instanceColor));let nt={};nt.attribute=j,j&&j.data&&(nt.data=j.data),F[B]=nt,D++}r.attributes=F,r.attributesNum=D,r.index=C}function _(){let x=r.newAttributes;for(let E=0,N=x.length;E<N;E++)x[E]=0}function m(x){f(x,0)}function f(x,E){let N=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;N[x]=1,C[x]===0&&(i.enableVertexAttribArray(x),C[x]=1),F[x]!==E&&(i.vertexAttribDivisor(x,E),F[x]=E)}function M(){let x=r.newAttributes,E=r.enabledAttributes;for(let N=0,C=E.length;N<C;N++)E[N]!==x[N]&&(i.disableVertexAttribArray(N),E[N]=0)}function w(x,E,N,C,F,R,D){D===!0?i.vertexAttribIPointer(x,E,N,F,R):i.vertexAttribPointer(x,E,N,C,F,R)}function y(x,E,N,C){_();let F=C.attributes,R=N.getAttributes(),D=E.defaultAttributeValues;for(let k in R){let B=R[k];if(B.location>=0){let G=F[k];if(G===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(G=x.instanceColor)),G!==void 0){let j=G.normalized,nt=G.itemSize,gt=t.get(G);if(gt===void 0)continue;let Nt=gt.buffer,Y=gt.type,J=gt.bytesPerElement,_t=Y===i.INT||Y===i.UNSIGNED_INT||G.gpuType===ac;if(G.isInterleavedBufferAttribute){let ut=G.data,St=ut.stride,q=G.offset;if(ut.isInstancedInterleavedBuffer){for(let it=0;it<B.locationSize;it++)f(B.location+it,ut.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let it=0;it<B.locationSize;it++)m(B.location+it);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let it=0;it<B.locationSize;it++)w(B.location+it,nt/B.locationSize,Y,j,St*J,(q+nt/B.locationSize*it)*J,_t)}else{if(G.isInstancedBufferAttribute){for(let ut=0;ut<B.locationSize;ut++)f(B.location+ut,G.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ut=0;ut<B.locationSize;ut++)m(B.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let ut=0;ut<B.locationSize;ut++)w(B.location+ut,nt/B.locationSize,Y,j,nt*J,nt/B.locationSize*ut*J,_t)}}else if(D!==void 0){let j=D[k];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(B.location,j);break;case 3:i.vertexAttrib3fv(B.location,j);break;case 4:i.vertexAttrib4fv(B.location,j);break;default:i.vertexAttrib1fv(B.location,j)}}}}M()}function L(){P();for(let x in n){let E=n[x];for(let N in E){let C=E[N];for(let F in C)h(C[F].object),delete C[F];delete E[N]}delete n[x]}}function I(x){if(n[x.id]===void 0)return;let E=n[x.id];for(let N in E){let C=E[N];for(let F in C)h(C[F].object),delete C[F];delete E[N]}delete n[x.id]}function U(x){for(let E in n){let N=n[E];if(N[x.id]===void 0)continue;let C=N[x.id];for(let F in C)h(C[F].object),delete C[F];delete N[x.id]}}function P(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function zg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==rn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let P=U===Ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Rn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==dn&&!P)}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:L,maxSamples:I}}function Vg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new nn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,y=f.clippingState||null;l.value=y,y=h(g,d,w,p);for(let L=0;L!==w;++L)y[L]=e[L];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,y=p;w!==_;++w,y+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gg(i){let t=new WeakMap;function e(o,a){return a===za?o.mapping=ji:a===Ha&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===za||a===Ha)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ml(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var to=class extends Jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Wi=4,Ih=[.125,.215,.35,.446,.526,.582],ui=20,ya=new to,Ph=new Ft,va=null,xa=0,wa=0,Ma=!1,ci=(1+Math.sqrt(5))/2,ki=1/ci,Lh=[new O(-ci,ki,0),new O(ci,ki,0),new O(-ki,0,ci),new O(ki,0,ci),new O(0,ci,-ki),new O(0,ci,ki),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],eo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,xa,wa),this._renderer.xr.enabled=Ma,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ws,format:rn,colorSpace:ls,depthBuffer:!1},s=Dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=Xg(r,t,e)}return s}_compileMaterial(t){let e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,s){let a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ph),h.toneMapping=qn,h.autoClear=!1;let p=new mn({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new ge(new Kn,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ph),_=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let w=this._cubeSize;Sr(s,M*w,f>2?w:0,w,w),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ji||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lh[(s-r-1)%Lh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ge(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let f=[],M=0;for(let U=0;U<ui;++U){let P=U/_,v=Math.exp(-P*P/2);f.push(v),U===0?M+=v:U<m&&(M+=2*v)}for(let U=0;U<f.length;U++)f[U]=f[U]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let y=this._sizeLods[s],L=3*y*(s>w-Wi?s-w+Wi:0),I=4*(this._cubeSize-y);Sr(e,L,I,3*y,2*y),l.setRenderTarget(e),l.render(u,ya)}};function Wg(i){let t=[],e=[],n=[],s=i,r=i-Wi+1+Ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Wi?l=Ih[o-i+Wi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),w=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let I=0;I<p;I++){let U=I%3*2/3-1,P=I>2?0:-1,v=[U,P,0,U+2/3,P,0,U+2/3,P+1,0,U,P,0,U+2/3,P+1,0,U,P+1,0];M.set(v,_*g*I),w.set(d,m*g*I);let x=[I,I,I,I,I,I];y.set(x,f*g*I)}let L=new Ce;L.setAttribute("position",new Fe(M,_)),L.setAttribute("uv",new Fe(w,m)),L.setAttribute("faceIndex",new Fe(y,f)),t.push(L),s>Wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dh(i,t,e){let n=new Pn(i,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xg(i,t,e){let n=new Float32Array(ui),s=new O(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Uh(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Nh(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function qg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===za||l===Ha,h=l===ji||l===Qi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new eo(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new eo(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let M=p.array;_=p.version;for(let w=0,y=M.length;w<y;w+=3){let L=M[w+0],I=M[w+1],U=M[w+2];d.push(L,I,I,U,U,L)}}else if(g!==void 0){let M=g.array;_=g.version;for(let w=0,y=M.length/3-1;w<y;w+=3){let L=w+0,I=w+1,U=w+2;d.push(L,I,I,U,U,L)}}else return;let m=new(Ru(d)?Kr:$r)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $g(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jg(i,t,e){let n=new WeakMap,s=new pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let y=a.attributes.position.count*w,L=1;y>t.maxTextureSize&&(L=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let I=new Float32Array(y*L*4*u),U=new Zr(I,y,L,u);U.type=dn,U.needsUpdate=!0;let P=w*4;for(let x=0;x<u;x++){let E=m[x],N=f[x],C=M[x],F=y*L*4*x;for(let R=0;R<E.count;R++){let D=R*P;p===!0&&(s.fromBufferAttribute(E,R),I[F+D+0]=s.x,I[F+D+1]=s.y,I[F+D+2]=s.z,I[F+D+3]=0),g===!0&&(s.fromBufferAttribute(N,R),I[F+D+4]=s.x,I[F+D+5]=s.y,I[F+D+6]=s.z,I[F+D+7]=0),_===!0&&(s.fromBufferAttribute(C,R),I[F+D+8]=s.x,I[F+D+9]=s.y,I[F+D+10]=s.z,I[F+D+11]=C.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new lt(y,L)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function jg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var no=class extends ke{constructor(t,e,n,s,r,o,a,l,c,h=Yi){if(h!==Yi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=pi),n===void 0&&h===es&&(n=ts),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Du=new ke,Oh=new no(1,1),Uu=new Zr,Nu=new xl,Ou=new jr,Fh=[],kh=[],Bh=new Float32Array(16),zh=new Float32Array(9),Hh=new Float32Array(4);function cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Po(i,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function i0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Hh.set(n),i.uniformMatrix2fv(this.addr,!1,Hh),ve(e,n)}}function s0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;zh.set(n),i.uniformMatrix3fv(this.addr,!1,zh),ve(e,n)}}function r0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),ve(e,n)}}function o0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function h0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function p0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oh.compareFunction=Tu,r=Oh):r=Du,e.setTexture2D(t||r,s)}function m0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nu,s)}function g0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ou,s)}function _0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uu,s)}function y0(i){switch(i){case 5126:return Qg;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(i,t){i.uniform1fv(this.addr,t)}function x0(i,t){let e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function w0(i,t){let e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function M0(i,t){let e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function b0(i,t){let e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function S0(i,t){let e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function A0(i,t){let e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function E0(i,t){i.uniform1iv(this.addr,t)}function T0(i,t){i.uniform2iv(this.addr,t)}function C0(i,t){i.uniform3iv(this.addr,t)}function R0(i,t){i.uniform4iv(this.addr,t)}function I0(i,t){i.uniform1uiv(this.addr,t)}function P0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function D0(i,t){i.uniform4uiv(this.addr,t)}function U0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Du,r[o])}function N0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nu,r[o])}function O0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ou,r[o])}function F0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Uu,r[o])}function k0(i){switch(i){case 5126:return v0;case 35664:return x0;case 35665:return w0;case 35666:return M0;case 35674:return b0;case 35675:return S0;case 35676:return A0;case 5124:case 35670:return E0;case 35667:case 35671:return T0;case 35668:case 35672:return C0;case 35669:case 35673:return R0;case 5125:return I0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return F0}}var bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=y0(e.type)}},Sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}},Al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ba=/(\w+)(\])?(\[|\.)?/g;function Vh(i,t){i.seq.push(t),i.map[t.id]=t}function B0(i,t,e){let n=i.name,s=n.length;for(ba.lastIndex=0;;){let r=ba.exec(n),o=ba.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vh(e,c===void 0?new bl(a,i,t):new Sl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Al(a),Vh(e,u)),e=u}}}var Ki=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);B0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Gh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var z0=37297,H0=0;function V0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Wh=new Vt;function G0(i){Zt._getMatrix(Wh,Zt.workingColorSpace,i);let t=`mat3( ${Wh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Io:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+V0(i.getShaderSource(t),o)}else return s}function W0(i,t){let e=G0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X0(i,t){let e;switch(t){case tf:e="Linear";break;case ef:e="Reinhard";break;case nf:e="Cineon";break;case sf:e="ACESFilmic";break;case of:e="AgX";break;case af:e="Neutral";break;case rf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ar=new O;function q0(){Zt.getLuminanceCoefficients(Ar);let i=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Z0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function qh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(i){return i.replace(K0,j0)}var J0=new Map;function j0(i,t){let e=Xt[t];if(e===void 0){let n=J0.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return El(e)}var Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(i){return i.replace(Q0,t_)}function t_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function e_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function n_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Qi&&(t="ENVMAP_MODE_REFRACTION"),t}function s_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case jd:t="ENVMAP_BLENDING_MIX";break;case Qd:t="ENVMAP_BLENDING_ADD";break}return t}function r_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function o_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=e_(e),c=n_(e),h=i_(e),u=s_(e),d=r_(e),p=Y0(e),g=Z0(r),_=s.createProgram(),m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),f.length>0&&(f+=`
`)):(m=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),f=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==qn?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=El(o),o=qh(o,e),o=Yh(o,e),a=El(a),a=qh(a,e),a=Yh(a,e),o=Zh(o),a=Zh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=M+m+o,y=M+f+a,L=Gh(s,s.VERTEX_SHADER,w),I=Gh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,L),s.attachShader(_,I),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function U(E){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_).trim(),C=s.getShaderInfoLog(L).trim(),F=s.getShaderInfoLog(I).trim(),R=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(R=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,I);else{let k=Xh(s,L,"vertex"),B=Xh(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+k+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(C===""||F==="")&&(D=!1);D&&(E.diagnostics={runnable:R,programLog:N,vertexShader:{log:C,prefix:m},fragmentShader:{log:F,prefix:f}})}s.deleteShader(L),s.deleteShader(I),P=new Ki(s,_),v=$0(s,_)}let P;this.getUniforms=function(){return P===void 0&&U(this),P};let v;this.getAttributes=function(){return v===void 0&&U(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,z0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=I,this}var a_=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cl(t),e.set(t,n)),n}},Cl=class{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}};function l_(i,t,e,n,s,r,o){let a=new Os,l=new Tl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,E,N,C){let F=N.fog,R=C.geometry,D=v.isMeshStandardMaterial?N.environment:null,k=(v.isMeshStandardMaterial?e:t).get(v.envMap||D),B=k&&k.mapping===Ro?k.image.height:null,G=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let j=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,nt=j!==void 0?j.length:0,gt=0;R.morphAttributes.position!==void 0&&(gt=1),R.morphAttributes.normal!==void 0&&(gt=2),R.morphAttributes.color!==void 0&&(gt=3);let Nt,Y,J,_t;if(G){let Qt=hn[G];Nt=Qt.vertexShader,Y=Qt.fragmentShader}else Nt=v.vertexShader,Y=v.fragmentShader,l.update(v),J=l.getVertexShaderID(v),_t=l.getFragmentShaderID(v);let ut=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),q=C.isInstancedMesh===!0,it=C.isBatchedMesh===!0,ct=!!v.map,X=!!v.matcap,et=!!k,T=!!v.aoMap,ft=!!v.lightMap,at=!!v.bumpMap,st=!!v.normalMap,ht=!!v.displacementMap,vt=!!v.emissiveMap,pt=!!v.metalnessMap,A=!!v.roughnessMap,b=v.anisotropy>0,W=v.clearcoat>0,K=v.dispersion>0,rt=v.iridescence>0,tt=v.sheen>0,It=v.transmission>0,xt=b&&!!v.anisotropyMap,Tt=W&&!!v.clearcoatMap,qt=W&&!!v.clearcoatNormalMap,dt=W&&!!v.clearcoatRoughnessMap,Ct=rt&&!!v.iridescenceMap,Ot=rt&&!!v.iridescenceThicknessMap,kt=tt&&!!v.sheenColorMap,Rt=tt&&!!v.sheenRoughnessMap,Yt=!!v.specularMap,Gt=!!v.specularColorMap,re=!!v.specularIntensityMap,z=It&&!!v.transmissionMap,wt=It&&!!v.thicknessMap,Q=!!v.gradientMap,ot=!!v.alphaMap,At=v.alphaTest>0,Mt=!!v.alphaHash,zt=!!v.extensions,fe=qn;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(fe=i.toneMapping);let Ae={shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:Nt,fragmentShader:Y,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:_t,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:it,batchingColor:it&&C._colorsTexture!==null,instancing:q,instancingColor:q&&C.instanceColor!==null,instancingMorph:q&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ls,alphaToCoverage:!!v.alphaToCoverage,map:ct,matcap:X,envMap:et,envMapMode:et&&k.mapping,envMapCubeUVHeight:B,aoMap:T,lightMap:ft,bumpMap:at,normalMap:st,displacementMap:d&&ht,emissiveMap:vt,normalMapObjectSpace:st&&v.normalMapType===uf,normalMapTangentSpace:st&&v.normalMapType===pc,metalnessMap:pt,roughnessMap:A,anisotropy:b,anisotropyMap:xt,clearcoat:W,clearcoatMap:Tt,clearcoatNormalMap:qt,clearcoatRoughnessMap:dt,dispersion:K,iridescence:rt,iridescenceMap:Ct,iridescenceThicknessMap:Ot,sheen:tt,sheenColorMap:kt,sheenRoughnessMap:Rt,specularMap:Yt,specularColorMap:Gt,specularIntensityMap:re,transmission:It,transmissionMap:z,thicknessMap:wt,gradientMap:Q,opaque:v.transparent===!1&&v.blending===qi&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:At,alphaHash:Mt,combine:v.combine,mapUv:ct&&_(v.map.channel),aoMapUv:T&&_(v.aoMap.channel),lightMapUv:ft&&_(v.lightMap.channel),bumpMapUv:at&&_(v.bumpMap.channel),normalMapUv:st&&_(v.normalMap.channel),displacementMapUv:ht&&_(v.displacementMap.channel),emissiveMapUv:vt&&_(v.emissiveMap.channel),metalnessMapUv:pt&&_(v.metalnessMap.channel),roughnessMapUv:A&&_(v.roughnessMap.channel),anisotropyMapUv:xt&&_(v.anisotropyMap.channel),clearcoatMapUv:Tt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(v.sheenRoughnessMap.channel),specularMapUv:Yt&&_(v.specularMap.channel),specularColorMapUv:Gt&&_(v.specularColorMap.channel),specularIntensityMapUv:re&&_(v.specularIntensityMap.channel),transmissionMapUv:z&&_(v.transmissionMap.channel),thicknessMapUv:wt&&_(v.thicknessMap.channel),alphaMapUv:ot&&_(v.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(st||b),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&(ct||ot),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:C.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:gt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:ct&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===ee,decodeVideoTextureEmissive:vt&&v.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(v.emissiveMap.colorSpace)===ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qe,flipSided:v.side===Oe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:zt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&v.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function f(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let E in v.defines)x.push(E),x.push(v.defines[E]);return v.isRawShaderMaterial===!1&&(M(x,v),w(x,v),x.push(i.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function M(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function w(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){let x=g[v.type],E;if(x){let N=hn[x];E=jf.clone(N.uniforms)}else E=v.uniforms;return E}function L(v,x){let E;for(let N=0,C=h.length;N<C;N++){let F=h[N];if(F.cacheKey===x){E=F,++E.usedTimes;break}}return E===void 0&&(E=new o_(i,x,v,r),h.push(E)),E}function I(v){if(--v.usedTimes===0){let x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function U(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:L,releaseProgram:I,releaseShaderCache:U,programs:h,dispose:P}}function c_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||h_),n.length>1&&n.sort(d||Kh),s.length>1&&s.sort(d||Kh)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function u_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Jh,i.set(n,[o])):s>=r.length?(o=new Jh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ft};break;case"SpotLight":e={position:new O,direction:new O,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function f_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var p_=0;function m_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g_(i){let t=new d_,e=f_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new ne,o=new ne;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,w=0,y=0,L=0,I=0,U=0;c.sort(m_);for(let v=0,x=c.length;v<x;v++){let E=c[v],N=E.color,C=E.intensity,F=E.distance,R=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=N.r*C,u+=N.g*C,d+=N.b*C;else if(E.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(E.sh.coefficients[D],C);U++}else if(E.isDirectionalLight){let D=t.get(E);if(D.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,B=e.get(E);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=R,n.directionalShadowMatrix[p]=E.shadow.matrix,M++}n.directional[p]=D,p++}else if(E.isSpotLight){let D=t.get(E);D.position.setFromMatrixPosition(E.matrixWorld),D.color.copy(N).multiplyScalar(C),D.distance=F,D.coneCos=Math.cos(E.angle),D.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),D.decay=E.decay,n.spot[_]=D;let k=E.shadow;if(E.map&&(n.spotLightMap[L]=E.map,L++,k.updateMatrices(E),E.castShadow&&I++),n.spotLightMatrix[_]=k.matrix,E.castShadow){let B=e.get(E);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=R,y++}_++}else if(E.isRectAreaLight){let D=t.get(E);D.color.copy(N).multiplyScalar(C),D.halfWidth.set(E.width*.5,0,0),D.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=D,m++}else if(E.isPointLight){let D=t.get(E);if(D.color.copy(E.color).multiplyScalar(E.intensity),D.distance=E.distance,D.decay=E.decay,E.castShadow){let k=E.shadow,B=e.get(E);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=R,n.pointShadowMatrix[g]=E.shadow.matrix,w++}n.point[g]=D,g++}else if(E.isHemisphereLight){let D=t.get(E);D.skyColor.copy(E.color).multiplyScalar(C),D.groundColor.copy(E.groundColor).multiplyScalar(C),n.hemi[f]=D,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==w||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+L-I,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=U,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=w,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=U,n.version=p_++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let w=c[f];if(w.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(w.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function jh(i){let t=new g_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function __(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new jh(i),t.set(s,[a])):r>=o.length?(a=new jh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Rl=class extends pn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Il=class extends pn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v_=`uniform sampler2D shadow_pass;
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
}`;function x_(i,t,e){let n=new Fs,s=new lt,r=new lt,o=new pe,a=new Rl({depthPacking:hf}),l=new Il,c={},h=e.maxTextureSize,u={[Zn]:Oe,[Oe]:Zn,[qe]:qe},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:y_,fragmentShader:v_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let f=this.type;this.render=function(I,U,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let v=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Xn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let C=f!==An&&this.type===An,F=f===An&&this.type!==An;for(let R=0,D=I.length;R<D;R++){let k=I[R],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let G=B.getFrameExtents();if(s.multiply(G),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,B.mapSize.y=r.y)),B.map===null||C===!0||F===!0){let nt=this.type!==An?{minFilter:Ge,magFilter:Ge}:{};B.map!==null&&B.map.dispose(),B.map=new Pn(s.x,s.y,nt),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let j=B.getViewportCount();for(let nt=0;nt<j;nt++){let gt=B.getViewport(nt);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),N.viewport(o),B.updateMatrices(k,nt),n=B.getFrustum(),y(U,P,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===An&&M(B,P),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,x,E)};function M(I,U){let P=t.update(_);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Pn(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(U,null,P,d,_,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(U,null,P,p,_,null)}function w(I,U,P,v){let x=null,E=P.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let N=x.uuid,C=U.uuid,F=c[N];F===void 0&&(F={},c[N]=F);let R=F[C];R===void 0&&(R=x.clone(),F[C]=R,U.addEventListener("dispose",L)),x=R}if(x.visible=U.visible,x.wireframe=U.wireframe,v===An?x.side=U.shadowSide!==null?U.shadowSide:U.side:x.side=U.shadowSide!==null?U.shadowSide:u[U.side],x.alphaMap=U.alphaMap,x.alphaTest=U.alphaTest,x.map=U.map,x.clipShadows=U.clipShadows,x.clippingPlanes=U.clippingPlanes,x.clipIntersection=U.clipIntersection,x.displacementMap=U.displacementMap,x.displacementScale=U.displacementScale,x.displacementBias=U.displacementBias,x.wireframeLinewidth=U.wireframeLinewidth,x.linewidth=U.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let N=i.properties.get(x);N.light=P}return x}function y(I,U,P,v,x){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===An)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld);let C=t.update(I),F=I.material;if(Array.isArray(F)){let R=C.groups;for(let D=0,k=R.length;D<k;D++){let B=R[D],G=F[B.materialIndex];if(G&&G.visible){let j=w(I,G,v,x);I.onBeforeShadow(i,I,U,P,C,j,B),i.renderBufferDirect(P,null,C,j,I,B),I.onAfterShadow(i,I,U,P,C,j,B)}}}else if(F.visible){let R=w(I,F,v,x);I.onBeforeShadow(i,I,U,P,C,R,null),i.renderBufferDirect(P,null,C,R,I,null),I.onAfterShadow(i,I,U,P,C,R,null)}}let N=I.children;for(let C=0,F=N.length;C<F;C++)y(N[C],U,P,v,x)}function L(I){I.target.removeEventListener("dispose",L);for(let P in c){let v=c[P],x=I.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}var w_={[Da]:Ua,[Na]:ka,[Oa]:Ba,[Ji]:Fa,[Ua]:Da,[ka]:Na,[Ba]:Oa,[Fa]:Ji};function M_(i,t){function e(){let z=!1,wt=new pe,Q=null,ot=new pe(0,0,0,0);return{setMask:function(At){Q!==At&&!z&&(i.colorMask(At,At,At,At),Q=At)},setLocked:function(At){z=At},setClear:function(At,Mt,zt,fe,Ae){Ae===!0&&(At*=fe,Mt*=fe,zt*=fe),wt.set(At,Mt,zt,fe),ot.equals(wt)===!1&&(i.clearColor(At,Mt,zt,fe),ot.copy(wt))},reset:function(){z=!1,Q=null,ot.set(-1,0,0,0)}}}function n(){let z=!1,wt=!1,Q=null,ot=null,At=null;return{setReversed:function(Mt){if(wt!==Mt){let zt=t.get("EXT_clip_control");wt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let fe=At;At=null,this.setClear(fe)}wt=Mt},getReversed:function(){return wt},setTest:function(Mt){Mt?ut(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!z&&(i.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(wt&&(Mt=w_[Mt]),ot!==Mt){switch(Mt){case Da:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Mt}},setLocked:function(Mt){z=Mt},setClear:function(Mt){At!==Mt&&(wt&&(Mt=1-Mt),i.clearDepth(Mt),At=Mt)},reset:function(){z=!1,Q=null,ot=null,At=null,wt=!1}}}function s(){let z=!1,wt=null,Q=null,ot=null,At=null,Mt=null,zt=null,fe=null,Ae=null;return{setTest:function(Qt){z||(Qt?ut(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Qt){wt!==Qt&&!z&&(i.stencilMask(Qt),wt=Qt)},setFunc:function(Qt,Ke,yn){(Q!==Qt||ot!==Ke||At!==yn)&&(i.stencilFunc(Qt,Ke,yn),Q=Qt,ot=Ke,At=yn)},setOp:function(Qt,Ke,yn){(Mt!==Qt||zt!==Ke||fe!==yn)&&(i.stencilOp(Qt,Ke,yn),Mt=Qt,zt=Ke,fe=yn)},setLocked:function(Qt){z=Qt},setClear:function(Qt){Ae!==Qt&&(i.clearStencil(Qt),Ae=Qt)},reset:function(){z=!1,wt=null,Q=null,ot=null,At=null,Mt=null,zt=null,fe=null,Ae=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,w=null,y=null,L=null,I=null,U=new Ft(0,0,0),P=0,v=!1,x=null,E=null,N=null,C=null,F=null,R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,k=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=k>=2);let G=null,j={},nt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Nt=new pe().fromArray(nt),Y=new pe().fromArray(gt);function J(z,wt,Q,ot){let At=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(z,Mt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<Q;zt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(wt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Mt}let _t={};_t[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(Ji),at(!1),st(th),ut(i.CULL_FACE),T(Xn);function ut(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function St(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function q(z,wt){return u[z]!==wt?(i.bindFramebuffer(z,wt),u[z]=wt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function it(z,wt){let Q=p,ot=!1;if(z){Q=d.get(wt),Q===void 0&&(Q=[],d.set(wt,Q));let At=z.textures;if(Q.length!==At.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,zt=At.length;Mt<zt;Mt++)Q[Mt]=i.COLOR_ATTACHMENT0+Mt;Q.length=At.length,ot=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ot=!0);ot&&i.drawBuffers(Q)}function ct(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let X={[hi]:i.FUNC_ADD,[Nd]:i.FUNC_SUBTRACT,[Od]:i.FUNC_REVERSE_SUBTRACT};X[Fd]=i.MIN,X[kd]=i.MAX;let et={[Bd]:i.ZERO,[zd]:i.ONE,[Hd]:i.SRC_COLOR,[Pa]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[Xd]:i.DST_COLOR,[Gd]:i.DST_ALPHA,[Vd]:i.ONE_MINUS_SRC_COLOR,[La]:i.ONE_MINUS_SRC_ALPHA,[qd]:i.ONE_MINUS_DST_COLOR,[Wd]:i.ONE_MINUS_DST_ALPHA,[Zd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[Jd]:i.ONE_MINUS_CONSTANT_ALPHA};function T(z,wt,Q,ot,At,Mt,zt,fe,Ae,Qt){if(z===Xn){_===!0&&(St(i.BLEND),_=!1);return}if(_===!1&&(ut(i.BLEND),_=!0),z!==Ud){if(z!==m||Qt!==v){if((f!==hi||y!==hi)&&(i.blendEquation(i.FUNC_ADD),f=hi,y=hi),Qt)switch(z){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,w=null,L=null,I=null,U.set(0,0,0),P=0,m=z,v=Qt}return}At=At||wt,Mt=Mt||Q,zt=zt||ot,(wt!==f||At!==y)&&(i.blendEquationSeparate(X[wt],X[At]),f=wt,y=At),(Q!==M||ot!==w||Mt!==L||zt!==I)&&(i.blendFuncSeparate(et[Q],et[ot],et[Mt],et[zt]),M=Q,w=ot,L=Mt,I=zt),(fe.equals(U)===!1||Ae!==P)&&(i.blendColor(fe.r,fe.g,fe.b,Ae),U.copy(fe),P=Ae),m=z,v=!1}function ft(z,wt){z.side===qe?St(i.CULL_FACE):ut(i.CULL_FACE);let Q=z.side===Oe;wt&&(Q=!Q),at(Q),z.blending===qi&&z.transparent===!1?T(Xn):T(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let ot=z.stencilWrite;a.setTest(ot),ot&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),vt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(z){x!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),x=z)}function st(z){z!==Pd?(ut(i.CULL_FACE),z!==E&&(z===th?i.cullFace(i.BACK):z===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),E=z}function ht(z){z!==N&&(D&&i.lineWidth(z),N=z)}function vt(z,wt,Q){z?(ut(i.POLYGON_OFFSET_FILL),(C!==wt||F!==Q)&&(i.polygonOffset(wt,Q),C=wt,F=Q)):St(i.POLYGON_OFFSET_FILL)}function pt(z){z?ut(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function A(z){z===void 0&&(z=i.TEXTURE0+R-1),G!==z&&(i.activeTexture(z),G=z)}function b(z,wt,Q){Q===void 0&&(G===null?Q=i.TEXTURE0+R-1:Q=G);let ot=j[Q];ot===void 0&&(ot={type:void 0,texture:void 0},j[Q]=ot),(ot.type!==z||ot.texture!==wt)&&(G!==Q&&(i.activeTexture(Q),G=Q),i.bindTexture(z,wt||_t[z]),ot.type=z,ot.texture=wt)}function W(){let z=j[G];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function kt(z){Nt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Nt.copy(z))}function Rt(z){Y.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Y.copy(z))}function Yt(z,wt){let Q=c.get(wt);Q===void 0&&(Q=new WeakMap,c.set(wt,Q));let ot=Q.get(z);ot===void 0&&(ot=i.getUniformBlockIndex(wt,z.name),Q.set(z,ot))}function Gt(z,wt){let ot=c.get(wt).get(z);l.get(wt)!==ot&&(i.uniformBlockBinding(wt,ot,z.__bindingPointIndex),l.set(wt,ot))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,j={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,w=null,y=null,L=null,I=null,U=new Ft(0,0,0),P=0,v=!1,x=null,E=null,N=null,C=null,F=null,Nt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:St,bindFramebuffer:q,drawBuffers:it,useProgram:ct,setBlending:T,setMaterial:ft,setFlipSided:at,setCullFace:st,setLineWidth:ht,setPolygonOffset:vt,setScissorTest:pt,activeTexture:A,bindTexture:b,unbindTexture:W,compressedTexImage2D:K,compressedTexImage3D:rt,texImage2D:Ct,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:Gt,texStorage2D:qt,texStorage3D:dt,texSubImage2D:tt,texSubImage3D:It,compressedTexSubImage2D:xt,compressedTexSubImage3D:Tt,scissor:kt,viewport:Rt,reset:re}}function Qh(i,t,e,n){let s=b_(n);switch(e){case wu:return i*t;case bu:return i*t;case Su:return i*t*2;case hc:return i*t/s.components*s.byteLength;case uc:return i*t/s.components*s.byteLength;case Au:return i*t*2/s.components*s.byteLength;case dc:return i*t*2/s.components*s.byteLength;case Mu:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case fc:return i*t*4/s.components*s.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Za:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gr:case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Eu:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b_(i){switch(i){case Rn:case yu:return{byteLength:1,components:1};case Us:case vu:case Ws:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case pi:case ac:case dn:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function S_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return p?new OffscreenCanvas(A,b):qr("canvas")}function _(A,b,W){let K=1,rt=pt(A);if((rt.width>W||rt.height>W)&&(K=W/Math.max(rt.width,rt.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let tt=Math.floor(K*rt.width),It=Math.floor(K*rt.height);u===void 0&&(u=g(tt,It));let xt=b?g(tt,It):u;return xt.width=tt,xt.height=It,xt.getContext("2d").drawImage(A,0,0,tt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+It+")."),xt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,b,W,K,rt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=b;if(b===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),b===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),W===i.UNSIGNED_INT&&(tt=i.RGB32UI),W===i.BYTE&&(tt=i.RGB8I),W===i.SHORT&&(tt=i.RGB16I),W===i.INT&&(tt=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),W===i.UNSIGNED_INT&&(tt=i.RGBA32UI),W===i.BYTE&&(tt=i.RGBA8I),W===i.SHORT&&(tt=i.RGBA16I),W===i.INT&&(tt=i.RGBA32I)),b===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),b===i.RGBA){let It=rt?Io:Zt.getTransfer(K);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=It===ee?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(A,b){let W;return A?b===null||b===pi||b===ts?W=i.DEPTH24_STENCIL8:b===dn?W=i.DEPTH32F_STENCIL8:b===Us&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===pi||b===ts?W=i.DEPTH_COMPONENT24:b===dn?W=i.DEPTH_COMPONENT32F:b===Us&&(W=i.DEPTH_COMPONENT16),W}function L(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ge&&A.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function I(A){let b=A.target;b.removeEventListener("dispose",I),P(b),b.isVideoTexture&&h.delete(b)}function U(A){let b=A.target;b.removeEventListener("dispose",U),x(b)}function P(A){let b=n.get(A);if(b.__webglInit===void 0)return;let W=A.source,K=d.get(W);if(K){let rt=K[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&v(A),Object.keys(K).length===0&&d.delete(W)}n.remove(A)}function v(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let W=A.source,K=d.get(W);delete K[b.__cacheKey],o.memory.textures--}function x(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let rt=0;rt<b.__webglFramebuffer[K].length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[K][rt]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=A.textures;for(let K=0,rt=W.length;K<rt;K++){let tt=n.get(W[K]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(W[K])}n.remove(A)}let E=0;function N(){E=0}function C(){let A=E;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),E+=1,A}function F(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function R(A,b){let W=n.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){let K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(W,A,b);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function D(A,b){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Y(W,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function k(A,b){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Y(W,A,b);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function B(A,b){let W=n.get(A);if(A.version>0&&W.__version!==A.version){J(W,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}let G={[Va]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},j={[Ge]:i.NEAREST,[lf]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Ko]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},nt={[df]:i.NEVER,[yf]:i.ALWAYS,[ff]:i.LESS,[Tu]:i.LEQUAL,[pf]:i.EQUAL,[_f]:i.GEQUAL,[mf]:i.GREATER,[gf]:i.NOTEQUAL};function gt(A,b){if(b.type===dn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===Ko||b.magFilter===rr||b.magFilter===fi||b.minFilter===un||b.minFilter===Ko||b.minFilter===rr||b.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,G[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,G[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,j[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,j[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ge||b.minFilter!==rr&&b.minFilter!==fi||b.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Nt(A,b){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",I));let K=b.source,rt=d.get(K);rt===void 0&&(rt={},d.set(K,rt));let tt=F(b);if(tt!==A.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),rt[tt].usedTimes++;let It=rt[A.__cacheKey];It!==void 0&&(rt[A.__cacheKey].usedTimes--,It.usedTimes===0&&v(b)),A.__cacheKey=tt,A.__webglTexture=rt[tt].texture}return W}function Y(A,b,W){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);let rt=Nt(A,b),tt=b.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+W);let It=n.get(tt);if(tt.version!==It.__version||rt===!0){e.activeTexture(i.TEXTURE0+W);let xt=Zt.getPrimaries(Zt.workingColorSpace),Tt=b.colorSpace===Wn?null:Zt.getPrimaries(b.colorSpace),qt=b.colorSpace===Wn||xt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let dt=_(b.image,!1,s.maxTextureSize);dt=vt(b,dt);let Ct=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type),kt=w(b.internalFormat,Ct,Ot,b.colorSpace,b.isVideoTexture);gt(K,b);let Rt,Yt=b.mipmaps,Gt=b.isVideoTexture!==!0,re=It.__version===void 0||rt===!0,z=tt.dataReady,wt=L(b,dt);if(b.isDepthTexture)kt=y(b.format===es,b.type),re&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,kt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,kt,dt.width,dt.height,0,Ct,Ot,null));else if(b.isDataTexture)if(Yt.length>0){Gt&&re&&e.texStorage2D(i.TEXTURE_2D,wt,kt,Yt[0].width,Yt[0].height);for(let Q=0,ot=Yt.length;Q<ot;Q++)Rt=Yt[Q],Gt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Rt.width,Rt.height,Ct,Ot,Rt.data):e.texImage2D(i.TEXTURE_2D,Q,kt,Rt.width,Rt.height,0,Ct,Ot,Rt.data);b.generateMipmaps=!1}else Gt?(re&&e.texStorage2D(i.TEXTURE_2D,wt,kt,dt.width,dt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Ct,Ot,dt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,dt.width,dt.height,0,Ct,Ot,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,kt,Yt[0].width,Yt[0].height,dt.depth);for(let Q=0,ot=Yt.length;Q<ot;Q++)if(Rt=Yt[Q],b.format!==rn)if(Ct!==null)if(Gt){if(z)if(b.layerUpdates.size>0){let At=Qh(Rt.width,Rt.height,b.format,b.type);for(let Mt of b.layerUpdates){let zt=Rt.data.subarray(Mt*At/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*At/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Mt,Rt.width,Rt.height,1,Ct,zt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Rt.width,Rt.height,dt.depth,Ct,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,kt,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Rt.width,Rt.height,dt.depth,Ct,Ot,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,kt,Rt.width,Rt.height,dt.depth,0,Ct,Ot,Rt.data)}else{Gt&&re&&e.texStorage2D(i.TEXTURE_2D,wt,kt,Yt[0].width,Yt[0].height);for(let Q=0,ot=Yt.length;Q<ot;Q++)Rt=Yt[Q],b.format!==rn?Ct!==null?Gt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,kt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Rt.width,Rt.height,Ct,Ot,Rt.data):e.texImage2D(i.TEXTURE_2D,Q,kt,Rt.width,Rt.height,0,Ct,Ot,Rt.data)}else if(b.isDataArrayTexture)if(Gt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,kt,dt.width,dt.height,dt.depth),z)if(b.layerUpdates.size>0){let Q=Qh(dt.width,dt.height,b.format,b.type);for(let ot of b.layerUpdates){let At=dt.data.subarray(ot*Q/dt.data.BYTES_PER_ELEMENT,(ot+1)*Q/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,dt.width,dt.height,1,Ct,Ot,At)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Ot,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,dt.width,dt.height,dt.depth,0,Ct,Ot,dt.data);else if(b.isData3DTexture)Gt?(re&&e.texStorage3D(i.TEXTURE_3D,wt,kt,dt.width,dt.height,dt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Ot,dt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,dt.width,dt.height,dt.depth,0,Ct,Ot,dt.data);else if(b.isFramebufferTexture){if(re)if(Gt)e.texStorage2D(i.TEXTURE_2D,wt,kt,dt.width,dt.height);else{let Q=dt.width,ot=dt.height;for(let At=0;At<wt;At++)e.texImage2D(i.TEXTURE_2D,At,kt,Q,ot,0,Ct,Ot,null),Q>>=1,ot>>=1}}else if(Yt.length>0){if(Gt&&re){let Q=pt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,wt,kt,Q.width,Q.height)}for(let Q=0,ot=Yt.length;Q<ot;Q++)Rt=Yt[Q],Gt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ct,Ot,Rt):e.texImage2D(i.TEXTURE_2D,Q,kt,Ct,Ot,Rt);b.generateMipmaps=!1}else if(Gt){if(re){let Q=pt(dt);e.texStorage2D(i.TEXTURE_2D,wt,kt,Q.width,Q.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Ot,dt)}else e.texImage2D(i.TEXTURE_2D,0,kt,Ct,Ot,dt);m(b)&&f(K),It.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function J(A,b,W){if(b.image.length!==6)return;let K=Nt(A,b),rt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let tt=n.get(rt);if(rt.version!==tt.__version||K===!0){e.activeTexture(i.TEXTURE0+W);let It=Zt.getPrimaries(Zt.workingColorSpace),xt=b.colorSpace===Wn?null:Zt.getPrimaries(b.colorSpace),Tt=b.colorSpace===Wn||It===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let qt=b.isCompressedTexture||b.image[0].isCompressedTexture,dt=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let ot=0;ot<6;ot++)!qt&&!dt?Ct[ot]=_(b.image[ot],!0,s.maxCubemapSize):Ct[ot]=dt?b.image[ot].image:b.image[ot],Ct[ot]=vt(b,Ct[ot]);let Ot=Ct[0],kt=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type),Yt=w(b.internalFormat,kt,Rt,b.colorSpace),Gt=b.isVideoTexture!==!0,re=tt.__version===void 0||K===!0,z=rt.dataReady,wt=L(b,Ot);gt(i.TEXTURE_CUBE_MAP,b);let Q;if(qt){Gt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Yt,Ot.width,Ot.height);for(let ot=0;ot<6;ot++){Q=Ct[ot].mipmaps;for(let At=0;At<Q.length;At++){let Mt=Q[At];b.format!==rn?kt!==null?Gt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,Mt.width,Mt.height,kt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,Yt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,Mt.width,Mt.height,kt,Rt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,Yt,Mt.width,Mt.height,0,kt,Rt,Mt.data)}}}else{if(Q=b.mipmaps,Gt&&re){Q.length>0&&wt++;let ot=pt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Yt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(dt){Gt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ct[ot].width,Ct[ot].height,kt,Rt,Ct[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Yt,Ct[ot].width,Ct[ot].height,0,kt,Rt,Ct[ot].data);for(let At=0;At<Q.length;At++){let zt=Q[At].image[ot].image;Gt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,zt.width,zt.height,kt,Rt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,Yt,zt.width,zt.height,0,kt,Rt,zt.data)}}else{Gt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,kt,Rt,Ct[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Yt,kt,Rt,Ct[ot]);for(let At=0;At<Q.length;At++){let Mt=Q[At];Gt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,kt,Rt,Mt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,Yt,kt,Rt,Mt.image[ot])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),tt.__version=rt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function _t(A,b,W,K,rt,tt){let It=r.convert(W.format,W.colorSpace),xt=r.convert(W.type),Tt=w(W.internalFormat,It,xt,W.colorSpace),qt=n.get(b),dt=n.get(W);if(dt.__renderTarget=b,!qt.__hasExternalTextures){let Ct=Math.max(1,b.width>>tt),Ot=Math.max(1,b.height>>tt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,Tt,Ct,Ot,b.depth,0,It,xt,null):e.texImage2D(rt,tt,Tt,Ct,Ot,0,It,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),st(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,rt,dt.__webglTexture,0,at(b)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,rt,dt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(A,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let K=b.depthTexture,rt=K&&K.isDepthTexture?K.type:null,tt=y(b.stencilBuffer,rt),It=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=at(b);st(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,tt,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,tt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,A)}else{let K=b.textures;for(let rt=0;rt<K.length;rt++){let tt=K[rt],It=r.convert(tt.format,tt.colorSpace),xt=r.convert(tt.type),Tt=w(tt.internalFormat,It,xt,tt.colorSpace),qt=at(b);W&&st(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Tt,b.width,b.height):st(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,Tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);let rt=K.__webglTexture,tt=at(b);if(b.depthTexture.format===Yi)st(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(b.depthTexture.format===es)st(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function q(A){let b=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",rt)};K.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=K}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");St(b.__webglFramebuffer,A)}else if(W){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),ut(b.__webglDepthbuffer[K],A,!1);else{let rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ut(b.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(A,b,W){let K=n.get(A);b!==void 0&&_t(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&q(A)}function ct(A){let b=A.texture,W=n.get(A),K=n.get(b);A.addEventListener("dispose",U);let rt=A.textures,tt=A.isWebGLCubeRenderTarget===!0,It=rt.length>1;if(It||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),tt){W.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[xt]=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)W.__webglFramebuffer[xt][Tt]=i.createFramebuffer()}else W.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)W.__webglFramebuffer[xt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(It)for(let xt=0,Tt=rt.length;xt<Tt;xt++){let qt=n.get(rt[xt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&st(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let xt=0;xt<rt.length;xt++){let Tt=rt[xt];W.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[xt]);let qt=r.convert(Tt.format,Tt.colorSpace),dt=r.convert(Tt.type),Ct=w(Tt.internalFormat,qt,dt,Tt.colorSpace,A.isXRRenderTarget===!0),Ot=at(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,W.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),gt(i.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)_t(W.__webglFramebuffer[xt][Tt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Tt);else _t(W.__webglFramebuffer[xt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let xt=0,Tt=rt.length;xt<Tt;xt++){let qt=rt[xt],dt=n.get(qt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),gt(i.TEXTURE_2D,qt),_t(W.__webglFramebuffer,A,qt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),m(qt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,K.__webglTexture),gt(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)_t(W.__webglFramebuffer[Tt],A,b,i.COLOR_ATTACHMENT0,xt,Tt);else _t(W.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,xt,0);m(b)&&f(xt),e.unbindTexture()}A.depthBuffer&&q(A)}function X(A){let b=A.textures;for(let W=0,K=b.length;W<K;W++){let rt=b[W];if(m(rt)){let tt=M(A),It=n.get(rt).__webglTexture;e.bindTexture(tt,It),f(tt),e.unbindTexture()}}}let et=[],T=[];function ft(A){if(A.samples>0){if(st(A)===!1){let b=A.textures,W=A.width,K=A.height,rt=i.COLOR_BUFFER_BIT,tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(A),xt=b.length>1;if(xt)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let qt=n.get(b[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,W,K,0,0,W,K,rt,i.NEAREST),l===!0&&(et.length=0,T.length=0,et.push(i.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(et.push(tt),T.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let qt=n.get(b[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function at(A){return Math.min(s.maxSamples,A.samples)}function st(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function vt(A,b){let W=A.colorSpace,K=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==ls&&W!==Wn&&(Zt.getTransfer(W)===ee?(K!==rn||rt!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=N,this.setTexture2D=R,this.setTexture2DArray=D,this.setTexture3D=k,this.setTextureCube=B,this.rebindTextures=it,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=st}function A_(i,t){function e(n,s=Wn){let r,o=Zt.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.BYTE;if(n===vu)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Ws)return i.HALF_FLOAT;if(n===wu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===rn)return i.RGBA;if(n===bu)return i.LUMINANCE;if(n===Su)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===Au)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===Br||n===zr||n===Hr||n===Vr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===$a||n===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===$a)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===ul||n===dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gr)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===fl||n===pl||n===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Pl=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ye=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},E_={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
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

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:T_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends In{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,_=new Ll,m=e.getContextAttributes(),f=null,M=null,w=[],y=[],L=new lt,I=null,U=new Le;U.viewport=new pe;let P=new Le;P.viewport=new pe;let v=[U,P],x=new Pl,E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=w[Y];return J===void 0&&(J=new Ps,w[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=w[Y];return J===void 0&&(J=new Ps,w[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=w[Y];return J===void 0&&(J=new Ps,w[Y]=J),J.getHandSpace()};function C(Y){let J=y.indexOf(Y.inputSource);if(J===-1)return;let _t=w[J];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",R);for(let Y=0;Y<w.length;Y++){let J=y[Y];J!==null&&(y[Y]=null,w[Y].disconnect(J))}E=null,N=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",F),s.addEventListener("inputsourceschange",R),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Pn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,_t=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?es:Yi,_t=m.stencil?ts:pi);let St={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Pn(d.textureWidth,d.textureHeight,{format:rn,type:Rn,depthTexture:new no(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function R(Y){for(let J=0;J<Y.removed.length;J++){let _t=Y.removed[J],ut=y.indexOf(_t);ut>=0&&(y[ut]=null,w[ut].disconnect(_t))}for(let J=0;J<Y.added.length;J++){let _t=Y.added[J],ut=y.indexOf(_t);if(ut===-1){for(let q=0;q<w.length;q++)if(q>=y.length){y.push(_t),ut=q;break}else if(y[q]===null){y[q]=_t,ut=q;break}if(ut===-1)break}let St=w[ut];St&&St.connect(_t)}}let D=new O,k=new O;function B(Y,J,_t){D.setFromMatrixPosition(J.matrixWorld),k.setFromMatrixPosition(_t.matrixWorld);let ut=D.distanceTo(k),St=J.projectionMatrix.elements,q=_t.projectionMatrix.elements,it=St[14]/(St[10]-1),ct=St[14]/(St[10]+1),X=(St[9]+1)/St[5],et=(St[9]-1)/St[5],T=(St[8]-1)/St[0],ft=(q[8]+1)/q[0],at=it*T,st=it*ft,ht=ut/(-T+ft),vt=ht*-T;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(vt),Y.translateZ(ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let pt=it+ht,A=ct+ht,b=at-vt,W=st+(ut-vt),K=X*ct/A*pt,rt=et*ct/A*pt;Y.projectionMatrix.makePerspective(b,W,K,rt,pt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function G(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),x.near=P.near=U.near=J,x.far=P.far=U.far=_t,(E!==x.near||N!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,N=x.far),U.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,x.layers.mask=U.layers.mask|P.layers.mask;let ut=Y.parent,St=x.cameras;G(x,ut);for(let q=0;q<St.length;q++)G(St[q],ut);St.length===2?B(x,U,P):x.projectionMatrix.copy(U.projectionMatrix),j(Y,x,ut)};function j(Y,J,_t){_t===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ns*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let nt=null;function gt(Y,J){if(h=J.getViewerPose(c||o),g=J,h!==null){let _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ut=!1;_t.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let q=0;q<_t.length;q++){let it=_t[q],ct=null;if(p!==null)ct=p.getViewport(it);else{let et=u.getViewSubImage(d,it);ct=et.viewport,q===0&&(t.setRenderTargetTextures(M,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(M))}let X=v[q];X===void 0&&(X=new Le,X.layers.enable(q),X.viewport=new pe,v[q]=X),X.matrix.fromArray(it.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(it.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ct.x,ct.y,ct.width,ct.height),q===0&&(x.matrix.copy(X.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(X)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){let q=u.getDepthInformation(_t[0]);q&&q.isValid&&q.texture&&_.init(t,q,s.renderState)}}for(let _t=0;_t<w.length;_t++){let ut=y[_t],St=w[_t];ut!==null&&St!==void 0&&St.update(ut,J,c||o)}nt&&nt(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let Nt=new Lu;Nt.setAnimationLoop(gt),this.setAnimationLoop=function(Y){nt=Y},this.dispose=function(){}}},li=new an,R_=new ne;function I_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Pu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,w,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Oe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Oe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,li.copy(y),li.x*=-1,li.y*=-1,li.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(li)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let y=w.program;n.uniformBlockBinding(M,y)}function c(M,w){let y=s[M.id];y===void 0&&(g(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));let L=w.program;n.updateUBOMapping(M,L);let I=t.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function h(M){let w=u();M.__bindingPointIndex=w;let y=i.createBuffer(),L=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let w=s[M.id],y=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let I=0,U=y.length;I<U;I++){let P=Array.isArray(y[I])?y[I]:[y[I]];for(let v=0,x=P.length;v<x;v++){let E=P[v];if(p(E,I,v,L)===!0){let N=E.__offset,C=Array.isArray(E.value)?E.value:[E.value],F=0;for(let R=0;R<C.length;R++){let D=C[R],k=_(D);typeof D=="number"||typeof D=="boolean"?(E.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,N+F,E.__data)):D.isMatrix3?(E.__data[0]=D.elements[0],E.__data[1]=D.elements[1],E.__data[2]=D.elements[2],E.__data[3]=0,E.__data[4]=D.elements[3],E.__data[5]=D.elements[4],E.__data[6]=D.elements[5],E.__data[7]=0,E.__data[8]=D.elements[6],E.__data[9]=D.elements[7],E.__data[10]=D.elements[8],E.__data[11]=0):(D.toArray(E.__data,F),F+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,w,y,L){let I=M.value,U=w+"_"+y;if(L[U]===void 0)return typeof I=="number"||typeof I=="boolean"?L[U]=I:L[U]=I.clone(),!0;{let P=L[U];if(typeof I=="number"||typeof I=="boolean"){if(P!==I)return L[U]=I,!0}else if(P.equals(I)===!1)return P.copy(I),!0}return!1}function g(M){let w=M.uniforms,y=0,L=16;for(let U=0,P=w.length;U<P;U++){let v=Array.isArray(w[U])?w[U]:[w[U]];for(let x=0,E=v.length;x<E;x++){let N=v[x],C=Array.isArray(N.value)?N.value:[N.value];for(let F=0,R=C.length;F<R;F++){let D=C[F],k=_(D),B=y%L,G=B%k.boundary,j=B+G;y+=G,j!==0&&L-j<k.storage&&(y+=L-j),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=k.storage}}}let I=y%L;return I>0&&(y+=L-I),M.__size=y,M.__cache={},this}function _(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){let w=M.target;w.removeEventListener("dispose",m);let y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var io=class{constructor(t={}){let{canvas:e=Nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=qn,this.toneMappingExposure=1;let y=this,L=!1,I=0,U=0,P=null,v=-1,x=null,E=new pe,N=new pe,C=null,F=new Ft(0),R=0,D=e.width,k=e.height,B=1,G=null,j=null,nt=new pe(0,0,D,k),gt=new pe(0,0,D,k),Nt=!1,Y=new Fs,J=!1,_t=!1,ut=new ne,St=new ne,q=new O,it=new pe,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},X=!1;function et(){return P===null?B:1}let T=n;function ft(S,H){return e.getContext(S,H)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),T===null){let H="webgl2";if(T=ft(H,S),T===null)throw ft(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let at,st,ht,vt,pt,A,b,W,K,rt,tt,It,xt,Tt,qt,dt,Ct,Ot,kt,Rt,Yt,Gt,re,z;function wt(){at=new Yg(T),at.init(),Gt=new A_(T,at),st=new Hg(T,at,t,Gt),ht=new M_(T,at),st.reverseDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),vt=new Kg(T),pt=new c_,A=new S_(T,at,ht,pt,st,Gt,vt),b=new Gg(y),W=new qg(y),K=new ip(T),re=new Bg(T,K),rt=new Zg(T,K,vt,re),tt=new jg(T,rt,K,vt),kt=new Jg(T,st,A),dt=new Vg(pt),It=new l_(y,b,W,at,st,re,dt),xt=new I_(y,pt),Tt=new u_,qt=new __(at),Ot=new kg(y,b,W,ht,tt,p,l),Ct=new x_(y,tt,st),z=new P_(T,vt,st,ht),Rt=new zg(T,at,vt),Yt=new $g(T,at,vt),vt.programs=It.programs,y.capabilities=st,y.extensions=at,y.properties=pt,y.renderLists=Tt,y.shadowMap=Ct,y.state=ht,y.info=vt}wt();let Q=new Dl(y,T);this.xr=Q,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let S=at.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=at.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(D,k,!1))},this.getSize=function(S){return S.set(D,k)},this.setSize=function(S,H,Z=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=S,k=H,e.width=Math.floor(S*B),e.height=Math.floor(H*B),Z===!0&&(e.style.width=S+"px",e.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(D*B,k*B).floor()},this.setDrawingBufferSize=function(S,H,Z){D=S,k=H,B=Z,e.width=Math.floor(S*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(nt)},this.setViewport=function(S,H,Z,$){S.isVector4?nt.set(S.x,S.y,S.z,S.w):nt.set(S,H,Z,$),ht.viewport(E.copy(nt).multiplyScalar(B).round())},this.getScissor=function(S){return S.copy(gt)},this.setScissor=function(S,H,Z,$){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,H,Z,$),ht.scissor(N.copy(gt).multiplyScalar(B).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(S){ht.setScissorTest(Nt=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(S=!0,H=!0,Z=!0){let $=0;if(S){let V=!1;if(P!==null){let mt=P.texture.format;V=mt===fc||mt===dc||mt===uc}if(V){let mt=P.texture.type,bt=mt===Rn||mt===pi||mt===Us||mt===ts||mt===lc||mt===cc,Pt=Ot.getClearColor(),Lt=Ot.getClearAlpha(),Bt=Pt.r,Ht=Pt.g,Dt=Pt.b;bt?(g[0]=Bt,g[1]=Ht,g[2]=Dt,g[3]=Lt,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Bt,_[1]=Ht,_[2]=Dt,_[3]=Lt,T.clearBufferiv(T.COLOR,0,_))}else $|=T.COLOR_BUFFER_BIT}H&&($|=T.DEPTH_BUFFER_BIT),Z&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Tt.dispose(),qt.dispose(),pt.dispose(),b.dispose(),W.dispose(),tt.dispose(),re.dispose(),z.dispose(),It.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Pc),Q.removeEventListener("sessionend",Lc),ti.stop()};function ot(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let S=vt.autoReset,H=Ct.enabled,Z=Ct.autoUpdate,$=Ct.needsUpdate,V=Ct.type;wt(),vt.autoReset=S,Ct.enabled=H,Ct.autoUpdate=Z,Ct.needsUpdate=$,Ct.type=V}function Mt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zt(S){let H=S.target;H.removeEventListener("dispose",zt),fe(H)}function fe(S){Ae(S),pt.remove(S)}function Ae(S){let H=pt.get(S).programs;H!==void 0&&(H.forEach(function(Z){It.releaseProgram(Z)}),S.isShaderMaterial&&It.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,Z,$,V,mt){H===null&&(H=ct);let bt=V.isMesh&&V.matrixWorld.determinant()<0,Pt=dd(S,H,Z,$,V);ht.setMaterial($,bt);let Lt=Z.index,Bt=1;if($.wireframe===!0){if(Lt=rt.getWireframeAttribute(Z),Lt===void 0)return;Bt=2}let Ht=Z.drawRange,Dt=Z.attributes.position,$t=Ht.start*Bt,oe=(Ht.start+Ht.count)*Bt;mt!==null&&($t=Math.max($t,mt.start*Bt),oe=Math.min(oe,(mt.start+mt.count)*Bt)),Lt!==null?($t=Math.max($t,0),oe=Math.min(oe,Lt.count)):Dt!=null&&($t=Math.max($t,0),oe=Math.min(oe,Dt.count));let ae=oe-$t;if(ae<0||ae===1/0)return;re.setup(V,$,Pt,Z,Lt);let Ue,Jt=Rt;if(Lt!==null&&(Ue=K.get(Lt),Jt=Yt,Jt.setIndex(Ue)),V.isMesh)$.wireframe===!0?(ht.setLineWidth($.wireframeLinewidth*et()),Jt.setMode(T.LINES)):Jt.setMode(T.TRIANGLES);else if(V.isLine){let Ut=$.linewidth;Ut===void 0&&(Ut=1),ht.setLineWidth(Ut*et()),V.isLineSegments?Jt.setMode(T.LINES):V.isLineLoop?Jt.setMode(T.LINE_LOOP):Jt.setMode(T.LINE_STRIP)}else V.isPoints?Jt.setMode(T.POINTS):V.isSprite&&Jt.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Jt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))Jt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ut=V._multiDrawStarts,vn=V._multiDrawCounts,jt=V._multiDrawCount,Je=Lt?K.get(Lt).bytesPerElement:1,Mi=pt.get($).currentProgram.getUniforms();for(let ze=0;ze<jt;ze++)Mi.setValue(T,"_gl_DrawID",ze),Jt.render(Ut[ze]/Je,vn[ze])}else if(V.isInstancedMesh)Jt.renderInstances($t,ae,V.count);else if(Z.isInstancedBufferGeometry){let Ut=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,vn=Math.min(Z.instanceCount,Ut);Jt.renderInstances($t,ae,vn)}else Jt.render($t,ae)};function Qt(S,H,Z){S.transparent===!0&&S.side===qe&&S.forceSinglePass===!1?(S.side=Oe,S.needsUpdate=!0,tr(S,H,Z),S.side=Zn,S.needsUpdate=!0,tr(S,H,Z),S.side=qe):tr(S,H,Z)}this.compile=function(S,H,Z=null){Z===null&&(Z=S),f=qt.get(Z),f.init(H),w.push(f),Z.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),S!==Z&&S.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();let $=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let mt=V.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){let Pt=mt[bt];Qt(Pt,Z,V),$.add(Pt)}else Qt(mt,Z,V),$.add(mt)}),w.pop(),f=null,$},this.compileAsync=function(S,H,Z=null){let $=this.compile(S,H,Z);return new Promise(V=>{function mt(){if($.forEach(function(bt){pt.get(bt).currentProgram.isReady()&&$.delete(bt)}),$.size===0){V(S);return}setTimeout(mt,10)}at.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ke=null;function yn(S){Ke&&Ke(S)}function Pc(){ti.stop()}function Lc(){ti.start()}let ti=new Lu;ti.setAnimationLoop(yn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(S){Ke=S,Q.setAnimationLoop(S),S===null?ti.stop():ti.start()},Q.addEventListener("sessionstart",Pc),Q.addEventListener("sessionend",Lc),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(H),H=Q.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,H,P),f=qt.get(S,w.length),f.init(H),w.push(f),St.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(St),_t=this.localClippingEnabled,J=dt.init(this.clippingPlanes,_t),m=Tt.get(S,M.length),m.init(),M.push(m),Q.enabled===!0&&Q.isPresenting===!0){let mt=y.xr.getDepthSensingMesh();mt!==null&&Ho(mt,H,-1/0,y.sortObjects)}Ho(S,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,j),X=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,X&&Ot.addToRenderList(m,S),this.info.render.frame++,J===!0&&dt.beginShadows();let Z=f.state.shadowsArray;Ct.render(Z,S,H),J===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,V=m.transmissive;if(f.setupLights(),H.isArrayCamera){let mt=H.cameras;if(V.length>0)for(let bt=0,Pt=mt.length;bt<Pt;bt++){let Lt=mt[bt];Uc($,V,S,Lt)}X&&Ot.render(S);for(let bt=0,Pt=mt.length;bt<Pt;bt++){let Lt=mt[bt];Dc(m,S,Lt,Lt.viewport)}}else V.length>0&&Uc($,V,S,H),X&&Ot.render(S),Dc(m,S,H);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(y,S,H),re.resetDefaultState(),v=-1,x=null,w.pop(),w.length>0?(f=w[w.length-1],J===!0&&dt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ho(S,H,Z,$){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){$&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(St);let bt=tt.update(S),Pt=S.material;Pt.visible&&m.push(S,bt,Pt,Z,it.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){let bt=tt.update(S),Pt=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),it.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),it.copy(bt.boundingSphere.center)),it.applyMatrix4(S.matrixWorld).applyMatrix4(St)),Array.isArray(Pt)){let Lt=bt.groups;for(let Bt=0,Ht=Lt.length;Bt<Ht;Bt++){let Dt=Lt[Bt],$t=Pt[Dt.materialIndex];$t&&$t.visible&&m.push(S,bt,$t,Z,it.z,Dt)}}else Pt.visible&&m.push(S,bt,Pt,Z,it.z,null)}}let mt=S.children;for(let bt=0,Pt=mt.length;bt<Pt;bt++)Ho(mt[bt],H,Z,$)}function Dc(S,H,Z,$){let V=S.opaque,mt=S.transmissive,bt=S.transparent;f.setupLightsView(Z),J===!0&&dt.setGlobalState(y.clippingPlanes,Z),$&&ht.viewport(E.copy($)),V.length>0&&Qs(V,H,Z),mt.length>0&&Qs(mt,H,Z),bt.length>0&&Qs(bt,H,Z),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Uc(S,H,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new Pn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Ws:Rn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let mt=f.state.transmissionRenderTarget[$.id],bt=$.viewport||E;mt.setSize(bt.z,bt.w);let Pt=y.getRenderTarget();y.setRenderTarget(mt),y.getClearColor(F),R=y.getClearAlpha(),R<1&&y.setClearColor(16777215,.5),y.clear(),X&&Ot.render(Z);let Lt=y.toneMapping;y.toneMapping=qn;let Bt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),J===!0&&dt.setGlobalState(y.clippingPlanes,$),Qs(S,Z,$),A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Dt=0,$t=H.length;Dt<$t;Dt++){let oe=H[Dt],ae=oe.object,Ue=oe.geometry,Jt=oe.material,Ut=oe.group;if(Jt.side===qe&&ae.layers.test($.layers)){let vn=Jt.side;Jt.side=Oe,Jt.needsUpdate=!0,Nc(ae,Z,$,Ue,Jt,Ut),Jt.side=vn,Jt.needsUpdate=!0,Ht=!0}}Ht===!0&&(A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt))}y.setRenderTarget(Pt),y.setClearColor(F,R),Bt!==void 0&&($.viewport=Bt),y.toneMapping=Lt}function Qs(S,H,Z){let $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,mt=S.length;V<mt;V++){let bt=S[V],Pt=bt.object,Lt=bt.geometry,Bt=$===null?bt.material:$,Ht=bt.group;Pt.layers.test(Z.layers)&&Nc(Pt,H,Z,Lt,Bt,Ht)}}function Nc(S,H,Z,$,V,mt){S.onBeforeRender(y,H,Z,$,V,mt),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(y,H,Z,$,S,mt),V.transparent===!0&&V.side===qe&&V.forceSinglePass===!1?(V.side=Oe,V.needsUpdate=!0,y.renderBufferDirect(Z,H,$,V,S,mt),V.side=Zn,V.needsUpdate=!0,y.renderBufferDirect(Z,H,$,V,S,mt),V.side=qe):y.renderBufferDirect(Z,H,$,V,S,mt),S.onAfterRender(y,H,Z,$,V,mt)}function tr(S,H,Z){H.isScene!==!0&&(H=ct);let $=pt.get(S),V=f.state.lights,mt=f.state.shadowsArray,bt=V.state.version,Pt=It.getParameters(S,V.state,mt,H,Z),Lt=It.getProgramCacheKey(Pt),Bt=$.programs;$.environment=S.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(S.isMeshStandardMaterial?W:b).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",zt),Bt=new Map,$.programs=Bt);let Ht=Bt.get(Lt);if(Ht!==void 0){if($.currentProgram===Ht&&$.lightsStateVersion===bt)return Fc(S,Pt),Ht}else Pt.uniforms=It.getUniforms(S),S.onBeforeCompile(Pt,y),Ht=It.acquireProgram(Pt,Lt),Bt.set(Lt,Ht),$.uniforms=Pt.uniforms;let Dt=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=dt.uniform),Fc(S,Pt),$.needsLights=pd(S),$.lightsStateVersion=bt,$.needsLights&&(Dt.ambientLightColor.value=V.state.ambient,Dt.lightProbe.value=V.state.probe,Dt.directionalLights.value=V.state.directional,Dt.directionalLightShadows.value=V.state.directionalShadow,Dt.spotLights.value=V.state.spot,Dt.spotLightShadows.value=V.state.spotShadow,Dt.rectAreaLights.value=V.state.rectArea,Dt.ltc_1.value=V.state.rectAreaLTC1,Dt.ltc_2.value=V.state.rectAreaLTC2,Dt.pointLights.value=V.state.point,Dt.pointLightShadows.value=V.state.pointShadow,Dt.hemisphereLights.value=V.state.hemi,Dt.directionalShadowMap.value=V.state.directionalShadowMap,Dt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Dt.spotShadowMap.value=V.state.spotShadowMap,Dt.spotLightMatrix.value=V.state.spotLightMatrix,Dt.spotLightMap.value=V.state.spotLightMap,Dt.pointShadowMap.value=V.state.pointShadowMap,Dt.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Ht,$.uniformsList=null,Ht}function Oc(S){if(S.uniformsList===null){let H=S.currentProgram.getUniforms();S.uniformsList=Ki.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function Fc(S,H){let Z=pt.get(S);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function dd(S,H,Z,$,V){H.isScene!==!0&&(H=ct),A.resetTextureUnits();let mt=H.fog,bt=$.isMeshStandardMaterial?H.environment:null,Pt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ls,Lt=($.isMeshStandardMaterial?W:b).get($.envMap||bt),Bt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ht=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Dt=!!Z.morphAttributes.position,$t=!!Z.morphAttributes.normal,oe=!!Z.morphAttributes.color,ae=qn;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=y.toneMapping);let Ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Jt=Ue!==void 0?Ue.length:0,Ut=pt.get($),vn=f.state.lights;if(J===!0&&(_t===!0||S!==x)){let We=S===x&&$.id===v;dt.setState($,S,We)}let jt=!1;$.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==vn.state.version||Ut.outputColorSpace!==Pt||V.isBatchedMesh&&Ut.batching===!1||!V.isBatchedMesh&&Ut.batching===!0||V.isBatchedMesh&&Ut.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ut.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ut.instancing===!1||!V.isInstancedMesh&&Ut.instancing===!0||V.isSkinnedMesh&&Ut.skinning===!1||!V.isSkinnedMesh&&Ut.skinning===!0||V.isInstancedMesh&&Ut.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ut.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ut.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ut.instancingMorph===!1&&V.morphTexture!==null||Ut.envMap!==Lt||$.fog===!0&&Ut.fog!==mt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==dt.numPlanes||Ut.numIntersection!==dt.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==Ht||Ut.morphTargets!==Dt||Ut.morphNormals!==$t||Ut.morphColors!==oe||Ut.toneMapping!==ae||Ut.morphTargetsCount!==Jt)&&(jt=!0):(jt=!0,Ut.__version=$.version);let Je=Ut.currentProgram;jt===!0&&(Je=tr($,H,V));let Mi=!1,ze=!1,fs=!1,le=Je.getUniforms(),cn=Ut.uniforms;if(ht.useProgram(Je.program)&&(Mi=!0,ze=!0,fs=!0),$.id!==v&&(v=$.id,ze=!0),Mi||x!==S){ht.buffers.depth.getReversed()?(ut.copy(S.projectionMatrix),Ff(ut),kf(ut),le.setValue(T,"projectionMatrix",ut)):le.setValue(T,"projectionMatrix",S.projectionMatrix),le.setValue(T,"viewMatrix",S.matrixWorldInverse);let Nn=le.map.cameraPosition;Nn!==void 0&&Nn.setValue(T,q.setFromMatrixPosition(S.matrixWorld)),st.logarithmicDepthBuffer&&le.setValue(T,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&le.setValue(T,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,ze=!0,fs=!0)}if(V.isSkinnedMesh){le.setOptional(T,V,"bindMatrix"),le.setOptional(T,V,"bindMatrixInverse");let We=V.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),le.setValue(T,"boneTexture",We.boneTexture,A))}V.isBatchedMesh&&(le.setOptional(T,V,"batchingTexture"),le.setValue(T,"batchingTexture",V._matricesTexture,A),le.setOptional(T,V,"batchingIdTexture"),le.setValue(T,"batchingIdTexture",V._indirectTexture,A),le.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&le.setValue(T,"batchingColorTexture",V._colorsTexture,A));let ps=Z.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&kt.update(V,Z,Je),(ze||Ut.receiveShadow!==V.receiveShadow)&&(Ut.receiveShadow=V.receiveShadow,le.setValue(T,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(cn.envMap.value=Lt,cn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(cn.envMapIntensity.value=H.environmentIntensity),ze&&(le.setValue(T,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&fd(cn,fs),mt&&$.fog===!0&&xt.refreshFogUniforms(cn,mt),xt.refreshMaterialUniforms(cn,$,B,k,f.state.transmissionRenderTarget[S.id]),Ki.upload(T,Oc(Ut),cn,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ki.upload(T,Oc(Ut),cn,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&le.setValue(T,"center",V.center),le.setValue(T,"modelViewMatrix",V.modelViewMatrix),le.setValue(T,"normalMatrix",V.normalMatrix),le.setValue(T,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let We=$.uniformsGroups;for(let Nn=0,On=We.length;Nn<On;Nn++){let kc=We[Nn];z.update(kc,Je),z.bind(kc,Je)}}return Je}function fd(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function pd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,H,Z){pt.get(S.texture).__webglTexture=H,pt.get(S.depthTexture).__webglTexture=Z;let $=pt.get(S);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,H){let Z=pt.get(S);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,Z=0){P=S,I=H,U=Z;let $=!0,V=null,mt=!1,bt=!1;if(S){let Lt=pt.get(S);if(Lt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(T.FRAMEBUFFER,null),$=!1;else if(Lt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Lt.__hasExternalTextures)A.rebindTextures(S,pt.get(S.texture).__webglTexture,pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Dt=S.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&pt.has(Dt)&&(S.width!==Dt.image.width||S.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(bt=!0);let Ht=pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ht[H])?V=Ht[H][Z]:V=Ht[H],mt=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?V=pt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ht)?V=Ht[Z]:V=Ht,E.copy(S.viewport),N.copy(S.scissor),C=S.scissorTest}else E.copy(nt).multiplyScalar(B).floor(),N.copy(gt).multiplyScalar(B).floor(),C=Nt;if(ht.bindFramebuffer(T.FRAMEBUFFER,V)&&$&&ht.drawBuffers(S,V),ht.viewport(E),ht.scissor(N),ht.setScissorTest(C),mt){let Lt=pt.get(S.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,Lt.__webglTexture,Z)}else if(bt){let Lt=pt.get(S.texture),Bt=H||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Lt.__webglTexture,Z||0,Bt)}v=-1},this.readRenderTargetPixels=function(S,H,Z,$,V,mt,bt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){ht.bindFramebuffer(T.FRAMEBUFFER,Pt);try{let Lt=S.texture,Bt=Lt.format,Ht=Lt.type;if(!st.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-$&&Z>=0&&Z<=S.height-V&&T.readPixels(H,Z,$,V,Gt.convert(Bt),Gt.convert(Ht),mt)}finally{let Lt=P!==null?pt.get(P).__webglFramebuffer:null;ht.bindFramebuffer(T.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(S,H,Z,$,V,mt,bt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){let Lt=S.texture,Bt=Lt.format,Ht=Lt.type;if(!st.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=S.width-$&&Z>=0&&Z<=S.height-V){ht.bindFramebuffer(T.FRAMEBUFFER,Pt);let Dt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Dt),T.bufferData(T.PIXEL_PACK_BUFFER,mt.byteLength,T.STREAM_READ),T.readPixels(H,Z,$,V,Gt.convert(Bt),Gt.convert(Ht),0);let $t=P!==null?pt.get(P).__webglFramebuffer:null;ht.bindFramebuffer(T.FRAMEBUFFER,$t);let oe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Of(T,oe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Dt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,mt),T.deleteBuffer(Dt),T.deleteSync(oe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,H=null,Z=0){S.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1]);let $=Math.pow(2,-Z),V=Math.floor(S.image.width*$),mt=Math.floor(S.image.height*$),bt=H!==null?H.x:0,Pt=H!==null?H.y:0;A.setTexture2D(S,0),T.copyTexSubImage2D(T.TEXTURE_2D,Z,0,0,bt,Pt,V,mt),ht.unbindTexture()},this.copyTextureToTexture=function(S,H,Z=null,$=null,V=0){S.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,S=arguments[1],H=arguments[2],V=arguments[3]||0,Z=null);let mt,bt,Pt,Lt,Bt,Ht,Dt,$t,oe,ae=S.isCompressedTexture?S.mipmaps[V]:S.image;Z!==null?(mt=Z.max.x-Z.min.x,bt=Z.max.y-Z.min.y,Pt=Z.isBox3?Z.max.z-Z.min.z:1,Lt=Z.min.x,Bt=Z.min.y,Ht=Z.isBox3?Z.min.z:0):(mt=ae.width,bt=ae.height,Pt=ae.depth||1,Lt=0,Bt=0,Ht=0),$!==null?(Dt=$.x,$t=$.y,oe=$.z):(Dt=0,$t=0,oe=0);let Ue=Gt.convert(H.format),Jt=Gt.convert(H.type),Ut;H.isData3DTexture?(A.setTexture3D(H,0),Ut=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(A.setTexture2DArray(H,0),Ut=T.TEXTURE_2D_ARRAY):(A.setTexture2D(H,0),Ut=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);let vn=T.getParameter(T.UNPACK_ROW_LENGTH),jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Je=T.getParameter(T.UNPACK_SKIP_PIXELS),Mi=T.getParameter(T.UNPACK_SKIP_ROWS),ze=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ae.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ae.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Lt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Bt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ht);let fs=S.isDataArrayTexture||S.isData3DTexture,le=H.isDataArrayTexture||H.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let cn=pt.get(S),ps=pt.get(H),We=pt.get(cn.__renderTarget),Nn=pt.get(ps.__renderTarget);ht.bindFramebuffer(T.READ_FRAMEBUFFER,We.__webglFramebuffer),ht.bindFramebuffer(T.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let On=0;On<Pt;On++)fs&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,pt.get(S).__webglTexture,V,Ht+On),S.isDepthTexture?(le&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,pt.get(H).__webglTexture,V,oe+On),T.blitFramebuffer(Lt,Bt,mt,bt,Dt,$t,mt,bt,T.DEPTH_BUFFER_BIT,T.NEAREST)):le?T.copyTexSubImage3D(Ut,V,Dt,$t,oe+On,Lt,Bt,mt,bt):T.copyTexSubImage2D(Ut,V,Dt,$t,oe+On,Lt,Bt,mt,bt);ht.bindFramebuffer(T.READ_FRAMEBUFFER,null),ht.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else le?S.isDataTexture||S.isData3DTexture?T.texSubImage3D(Ut,V,Dt,$t,oe,mt,bt,Pt,Ue,Jt,ae.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(Ut,V,Dt,$t,oe,mt,bt,Pt,Ue,ae.data):T.texSubImage3D(Ut,V,Dt,$t,oe,mt,bt,Pt,Ue,Jt,ae):S.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,V,Dt,$t,mt,bt,Ue,Jt,ae.data):S.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,V,Dt,$t,ae.width,ae.height,Ue,ae.data):T.texSubImage2D(T.TEXTURE_2D,V,Dt,$t,mt,bt,Ue,Jt,ae);T.pixelStorei(T.UNPACK_ROW_LENGTH,vn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Je),T.pixelStorei(T.UNPACK_SKIP_ROWS,Mi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ze),V===0&&H.generateMipmaps&&T.generateMipmap(Ut),ht.unbindTexture()},this.copyTextureToTexture3D=function(S,H,Z=null,$=null,V=0){return S.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,S=arguments[2],H=arguments[3],V=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,H,Z,$,V)},this.initRenderTarget=function(S){pt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),ht.unbindTexture()},this.resetState=function(){I=0,U=0,P=null,ht.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var so=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ro=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ul=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ie=new O,oo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},is=class extends pn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bi,Ms=new O,zi=new O,Hi=new O,Vi=new lt,bs=new lt,Fu=new ne,Er=new O,Ss=new O,Tr=new O,tu=new lt,Sa=new lt,eu=new lt,ao=class extends Se{constructor(t=new is){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ul(e,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new oo(n,3,0,!1)),Bi.setAttribute("uv",new oo(n,2,3,!1))}this.geometry=Bi,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),Fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Hi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Cr(Er.set(-.5,-.5,0),Hi,o,zi,s,r),Cr(Ss.set(.5,-.5,0),Hi,o,zi,s,r),Cr(Tr.set(.5,.5,0),Hi,o,zi,s,r),tu.set(0,0),Sa.set(1,0),eu.set(1,1);let a=t.ray.intersectTriangle(Er,Ss,Tr,!1,Ms);if(a===null&&(Cr(Ss.set(-.5,.5,0),Hi,o,zi,s,r),Sa.set(0,1),a=t.ray.intersectTriangle(Er,Tr,Ss,!1,Ms),a===null))return;let l=t.ray.origin.distanceTo(Ms);l<t.near||l>t.far||e.push({distance:l,point:Ms.clone(),uv:En.getInterpolation(Ms,Er,Ss,Tr,tu,Sa,eu,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Cr(i,t,e,n,s,r){Vi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(bs.x=r*Vi.x-s*Vi.y,bs.y=s*Vi.x+r*Vi.y):bs.copy(Vi),i.copy(t),i.x+=bs.x,i.y+=bs.y,i.applyMatrix4(Fu)}var Nl=class extends ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,h=Ge,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ss=class extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gi=new ne,nu=new ne,Rr=[],iu=new Ln,L_=new ne,As=new ge,Es=new $n,lo=class extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,L_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),iu.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Es.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),nu.multiplyMatrices(n,Gi),As.matrixWorld=nu,As.raycast(t,Rr);for(let o=0,a=Rr.length;o<a;o++){let l=Rr[o];l.instanceId=r,l.object=this,e.push(l)}Rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nl(new Float32Array(s*this.count),s,this.count,hc,dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Jn=class extends pn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},co=new O,ho=new O,su=new ne,Ts=new mi,Ir=new $n,Aa=new O,ru=new O,Ol=class extends Se{constructor(t=new Ce,e=new Jn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)co.fromBufferAttribute(e,s-1),ho.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=co.distanceTo(ho);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;su.copy(s).invert(),Ts.copy(t.ray).applyMatrix4(su);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=h.getX(_),M=h.getX(_+1),w=Pr(this,t,Ts,l,f,M);w&&e.push(w)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=Pr(this,t,Ts,l,_,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=Pr(this,t,Ts,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=Pr(this,t,Ts,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(co.fromBufferAttribute(o,s),ho.fromBufferAttribute(o,r),e.distanceSqToSegment(co,ho,Aa,ru)>n)return;Aa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Aa);if(!(l<t.near||l>t.far))return{distance:l,point:ru.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ou=new O,au=new O,gi=class extends Ol{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ou.fromBufferAttribute(e,s),au.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ou.distanceTo(au);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var uo=class extends ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ze=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new O,s=[],r=[],o=[],a=new O,l=new ne;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(_e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(_e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ks=class extends Ze{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fl=class extends ks{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Lr=new O,Ea=new yc,Ta=new yc,Ca=new yc,kl=class extends Ze{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Lr.subVectors(s[0],s[1]).add(s[0]),c=Lr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ea.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Ta.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ea.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ta.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ea.calc(l),Ta.calc(l),Ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function D_(i,t){let e=1-i;return e*e*t}function U_(i,t){return 2*(1-i)*i*t}function N_(i,t){return i*i*t}function Ls(i,t,e,n){return D_(i,t)+U_(i,e)+N_(i,n)}function O_(i,t){let e=1-i;return e*e*e*t}function F_(i,t){let e=1-i;return 3*e*e*i*t}function k_(i,t){return 3*(1-i)*i*i*t}function B_(i,t){return i*i*i*t}function Ds(i,t,e,n,s){return O_(i,t)+F_(i,e)+k_(i,n)+B_(i,s)}var fo=class extends Ze{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bl=class extends Ze{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y),Ds(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},po=class extends Ze{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zl=class extends Ze{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends Ze{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hl=class extends Ze{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y),Ls(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(lu(a,l.x,c.x,h.x,u.x),lu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},Vl=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:kl,CubicBezierCurve:fo,CubicBezierCurve3:Bl,EllipseCurve:ks,LineCurve:po,LineCurve3:zl,QuadraticBezierCurve:mo,QuadraticBezierCurve3:Hl,SplineCurve:go}),Gl=class extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Vl[s.type]().fromJSON(s))}return this}},Bs=class extends Gl{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new po(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new mo(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new fo(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new go(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ks(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Wl=class i extends Ce{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new O,d=new lt,p=new O,g=new O,_=new O,m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=e;M++){let w=n+M*h*s,y=Math.sin(w),L=Math.cos(w);for(let I=0;I<=t.length-1;I++){u.x=t[I].x*y,u.y=t[I].y,u.z=t[I].x*L,o.push(u.x,u.y,u.z),d.x=M/e,d.y=I/(t.length-1),a.push(d.x,d.y);let U=l[3*I+0]*y,P=l[3*I+1],v=l[3*I+0]*L;c.push(U,P,v)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){let y=w+M*t.length,L=y,I=y+t.length,U=y+t.length+1,P=y+1;r.push(L,I,P),r.push(U,P,I)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},_o=class i extends Wl{constructor(t=1,e=1,n=4,s=8){let r=new Bs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var Dr=new O,Ur=new O,Ra=new O,Nr=new En,rs=class extends Ce{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Zi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:f}=Nr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Nr.getNormal(Ra),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let w=(M+1)%3,y=u[M],L=u[w],I=Nr[h[M]],U=Nr[h[w]],P=`${y}_${L}`,v=`${L}_${y}`;v in d&&d[v]?(Ra.dot(d[v].normal)<=r&&(p.push(I.x,I.y,I.z),p.push(U.x,U.y,U.z)),d[v]=null):P in d||(d[P]={index0:c[M],index1:c[w],normal:Ra.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];Dr.fromBufferAttribute(a,_),Ur.fromBufferAttribute(a,m),p.push(Dr.x,Dr.y,Dr.z),p.push(Ur.x,Ur.y,Ur.z)}this.setAttribute("position",new ce(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},os=class extends Bs{constructor(t){super(t),this.uuid=fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Bs().fromJSON(s))}return this}},z_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ku(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=X_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return zs(r,o,e,a,l,p,0),o}};function ku(i,t,e,n,s){let r,o;if(s===ny(i,t,e,n)>0)for(r=t;r<e;r+=n)o=cu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=cu(r,i[r],i[r+1],o);return o&&Lo(o,o.next)&&(Vs(o),o=o.next),o}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Lo(e,e.next)||de(e.prev,e,e.next)===0)){if(Vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&K_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?V_(i,n,s,r):H_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Vs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=G_(_i(i),t,e),zs(i,t,e,n,s,r,2)):o===2&&W_(i,t,e,n,s,r):zs(_i(i),t,e,n,s,r,1);break}}}function H_(i){let t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Xi(s,a,r,l,o,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function V_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(de(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Xl(p,g,t,e,n),M=Xl(_,m,t,e,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=f&&y&&y.z<=M;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Xi(a,h,l,u,c,d,w.x,w.y)&&de(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Xi(a,h,l,u,c,d,y.x,y.y)&&de(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=f;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Xi(a,h,l,u,c,d,w.x,w.y)&&de(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Xi(a,h,l,u,c,d,y.x,y.y)&&de(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function G_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Lo(s,r)&&Bu(s,n,n.next,r)&&Hs(s,r)&&Hs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Vs(n),Vs(n.next),n=i=r),n=n.next}while(n!==i);return _i(n)}function W_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Q_(o,a)){let l=zu(o,a);o=_i(o,o.next),l=_i(l,l.next),zs(o,t,e,n,s,r,0),zs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function X_(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ku(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(j_(c));for(s.sort(q_),r=0;r<s.length;r++)e=Y_(s[r],e);return e}function q_(i,t){return i.x-t.x}function Y_(i,t){let e=Z_(i,t);if(!e)return t;let n=zu(e,i);return _i(n,n.next),_i(e,e.next)}function Z_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Xi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Hs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&$_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function $_(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function K_(i,t,e,n){let s=i;do s.z===0&&(s.z=Xl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,J_(s)}function J_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Xl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function j_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Q_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ty(i,t)&&(Hs(i,t)&&Hs(t,i)&&ey(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Lo(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Lo(i,t){return i.x===t.x&&i.y===t.y}function Bu(i,t,e,n){let s=Fr(de(i,t,e)),r=Fr(de(i,t,n)),o=Fr(de(e,n,i)),a=Fr(de(e,n,t));return!!(s!==r&&o!==a||s===0&&Or(i,e,t)||r===0&&Or(i,n,t)||o===0&&Or(e,i,n)||a===0&&Or(e,t,n))}function Or(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fr(i){return i>0?1:i<0?-1:0}function ty(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hs(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function ey(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zu(i,t){let e=new ql(i.i,i.x,i.y),n=new ql(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cu(i,t,e,n){let s=new ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ny(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Yn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hu(t),uu(n,t);let o=t.length;e.forEach(hu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,uu(n,e[l]);let a=z_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var yo=class i extends Ce{constructor(t=new os([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:iy,w,y=!1,L,I,U,P;f&&(w=f.getSpacedPoints(h),y=!0,d=!1,L=f.computeFrenetFrames(h,!1),I=new O,U=new O,P=new O),d||(m=0,p=0,g=0,_=0);let v=a.extractPoints(c),x=v.shape,E=v.holes;if(!Yn.isClockWise(x)){x=x.reverse();for(let X=0,et=E.length;X<et;X++){let T=E[X];Yn.isClockWise(T)&&(E[X]=T.reverse())}}let C=Yn.triangulateShape(x,E),F=x;for(let X=0,et=E.length;X<et;X++){let T=E[X];x=x.concat(T)}function R(X,et,T){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(et,T)}let D=x.length,k=C.length;function B(X,et,T){let ft,at,st,ht=X.x-et.x,vt=X.y-et.y,pt=T.x-X.x,A=T.y-X.y,b=ht*ht+vt*vt,W=ht*A-vt*pt;if(Math.abs(W)>Number.EPSILON){let K=Math.sqrt(b),rt=Math.sqrt(pt*pt+A*A),tt=et.x-vt/K,It=et.y+ht/K,xt=T.x-A/rt,Tt=T.y+pt/rt,qt=((xt-tt)*A-(Tt-It)*pt)/(ht*A-vt*pt);ft=tt+ht*qt-X.x,at=It+vt*qt-X.y;let dt=ft*ft+at*at;if(dt<=2)return new lt(ft,at);st=Math.sqrt(dt/2)}else{let K=!1;ht>Number.EPSILON?pt>Number.EPSILON&&(K=!0):ht<-Number.EPSILON?pt<-Number.EPSILON&&(K=!0):Math.sign(vt)===Math.sign(A)&&(K=!0),K?(ft=-vt,at=ht,st=Math.sqrt(b)):(ft=ht,at=vt,st=Math.sqrt(b/2))}return new lt(ft/st,at/st)}let G=[];for(let X=0,et=F.length,T=et-1,ft=X+1;X<et;X++,T++,ft++)T===et&&(T=0),ft===et&&(ft=0),G[X]=B(F[X],F[T],F[ft]);let j=[],nt,gt=G.concat();for(let X=0,et=E.length;X<et;X++){let T=E[X];nt=[];for(let ft=0,at=T.length,st=at-1,ht=ft+1;ft<at;ft++,st++,ht++)st===at&&(st=0),ht===at&&(ht=0),nt[ft]=B(T[ft],T[st],T[ht]);j.push(nt),gt=gt.concat(nt)}for(let X=0;X<m;X++){let et=X/m,T=p*Math.cos(et*Math.PI/2),ft=g*Math.sin(et*Math.PI/2)+_;for(let at=0,st=F.length;at<st;at++){let ht=R(F[at],G[at],ft);ut(ht.x,ht.y,-T)}for(let at=0,st=E.length;at<st;at++){let ht=E[at];nt=j[at];for(let vt=0,pt=ht.length;vt<pt;vt++){let A=R(ht[vt],nt[vt],ft);ut(A.x,A.y,-T)}}}let Nt=g+_;for(let X=0;X<D;X++){let et=d?R(x[X],gt[X],Nt):x[X];y?(U.copy(L.normals[0]).multiplyScalar(et.x),I.copy(L.binormals[0]).multiplyScalar(et.y),P.copy(w[0]).add(U).add(I),ut(P.x,P.y,P.z)):ut(et.x,et.y,0)}for(let X=1;X<=h;X++)for(let et=0;et<D;et++){let T=d?R(x[et],gt[et],Nt):x[et];y?(U.copy(L.normals[X]).multiplyScalar(T.x),I.copy(L.binormals[X]).multiplyScalar(T.y),P.copy(w[X]).add(U).add(I),ut(P.x,P.y,P.z)):ut(T.x,T.y,u/h*X)}for(let X=m-1;X>=0;X--){let et=X/m,T=p*Math.cos(et*Math.PI/2),ft=g*Math.sin(et*Math.PI/2)+_;for(let at=0,st=F.length;at<st;at++){let ht=R(F[at],G[at],ft);ut(ht.x,ht.y,u+T)}for(let at=0,st=E.length;at<st;at++){let ht=E[at];nt=j[at];for(let vt=0,pt=ht.length;vt<pt;vt++){let A=R(ht[vt],nt[vt],ft);y?ut(A.x,A.y+w[h-1].y,w[h-1].x+T):ut(A.x,A.y,u+T)}}}Y(),J();function Y(){let X=s.length/3;if(d){let et=0,T=D*et;for(let ft=0;ft<k;ft++){let at=C[ft];St(at[2]+T,at[1]+T,at[0]+T)}et=h+m*2,T=D*et;for(let ft=0;ft<k;ft++){let at=C[ft];St(at[0]+T,at[1]+T,at[2]+T)}}else{for(let et=0;et<k;et++){let T=C[et];St(T[2],T[1],T[0])}for(let et=0;et<k;et++){let T=C[et];St(T[0]+D*h,T[1]+D*h,T[2]+D*h)}}n.addGroup(X,s.length/3-X,0)}function J(){let X=s.length/3,et=0;_t(F,et),et+=F.length;for(let T=0,ft=E.length;T<ft;T++){let at=E[T];_t(at,et),et+=at.length}n.addGroup(X,s.length/3-X,1)}function _t(X,et){let T=X.length;for(;--T>=0;){let ft=T,at=T-1;at<0&&(at=X.length-1);for(let st=0,ht=h+m*2;st<ht;st++){let vt=D*st,pt=D*(st+1),A=et+ft+vt,b=et+at+vt,W=et+at+pt,K=et+ft+pt;q(A,b,W,K)}}}function ut(X,et,T){l.push(X),l.push(et),l.push(T)}function St(X,et,T){it(X),it(et),it(T);let ft=s.length/3,at=M.generateTopUV(n,s,ft-3,ft-2,ft-1);ct(at[0]),ct(at[1]),ct(at[2])}function q(X,et,T,ft){it(X),it(et),it(ft),it(et),it(T),it(ft);let at=s.length/3,st=M.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);ct(st[0]),ct(st[1]),ct(st[3]),ct(st[1]),ct(st[2]),ct(st[3])}function it(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function ct(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vl[s.type]().fromJSON(s)),new i(n,t.options)}},iy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-u),new lt(d,1-g),new lt(_,1-f)]:[new lt(a,1-l),new lt(h,1-u),new lt(p,1-g),new lt(m,1-f)]}};function sy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var vo=class i extends Ce{constructor(t=new os([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;Yn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];Yn.isClockWise(M)===!0&&(g[m]=M.reverse())}let _=Yn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){let M=p[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,f=_.length;m<f;m++){let M=_[m],w=M[0]+u,y=M[1]+u,L=M[2]+u;n.push(w,y,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ry(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function ry(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var xo=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new O,d=new O,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let M=[],w=f/n,y=0;f===0&&o===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){let I=L/e;u.x=-t*Math.cos(s+I*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(s+I*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(I+y,1-w),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let w=h[f][M+1],y=h[f][M],L=h[f+1][M],I=h[f+1][M+1];(f!==0||o>0)&&p.push(w,y,I),(f!==n-1||l<Math.PI)&&p.push(y,L,I)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wo=class extends pn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Mo=class extends pn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function kr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function oy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var as=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yl=class extends as{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rh:r=t,a=2*e-n;break;case oh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:o=t,l=2*n-e;break;case oh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+M*o[c+L]+w*o[l+L]+y*o[u+L];return r}},Zl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},$l=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kr(e,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:kr(t.times,Array),values:kr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&oy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=gl;var yi=class extends ln{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Wr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends ln{};Kl.prototype.ValueTypeName="color";var Jl=class extends ln{};Jl.prototype.ValueTypeName="number";var jl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},bo=class extends ln{InterpolantFactoryMethodLinear(t){return new jl(this.times,this.values,this.getValueSize(),t)}};bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends ln{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Wr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends ln{};Ql.prototype.ValueTypeName="vector";var tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},ay=new tc,ec=class{constructor(t){this.manager=t!==void 0?t:ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var So=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ao=class extends So{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ia=new ne,du=new O,fu=new O,nc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fu),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ic=class extends nc{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eo=class extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ic}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var vc="\\[\\]\\.:\\/",ly=new RegExp("["+vc+"]","g"),xc="[^"+vc+"]",cy="[^"+vc.replace("\\.","")+"]",hy=/((?:WC+[\/:])*)/.source.replace("WC",xc),uy=/(WCOD+)?/.source.replace("WCOD",cy),dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),py=new RegExp("^"+hy+uy+dy+fy+"$"),my=["material","materials","bones","map"],sc=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ly,"")}static parseTrackName(t){let e=py.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);my.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=sc;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iv=new Float32Array(1);var pu=new ne,To=class{constructor(t,e,n=0,s=1/0){this.ray=new mi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pu),this}intersectObject(t,e=!0,n=[]){return rc(t,this,n,e),n.sort(mu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rc(t[s],this,n,e);return n.sort(mu),n}};function mu(i,t){return i.distance-t.distance}function rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)rc(r[o],t,e,!0)}}var Gs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Co=class extends In{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Hu={type:"change"},Mc={type:"start"},Gu={type:"end"},Uo=new mi,Vu=new nn,gy=Math.cos(70*Cu.DEG2RAD),xe=new O,Be=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wc=1e-6,No=class extends Co{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new on,this._lastTargetPosition=new O,this._quat=new on().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gs,this._sphericalDelta=new Gs,this._scale=1,this._panOffset=new O,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new O,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yy.bind(this),this._onPointerDown=_y.bind(this),this._onPointerUp=vy.bind(this),this._onContextMenu=Ey.bind(this),this._onMouseWheel=My.bind(this),this._onKeyDown=by.bind(this),this._onTouchStart=Sy.bind(this),this._onTouchMove=Ay.bind(this),this._onMouseDown=xy.bind(this),this._onMouseMove=wy.bind(this),this._interceptControlDown=Ty.bind(this),this._interceptControlUp=Cy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=ie.NONE}update(t=null){let e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=xe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Uo.origin.copy(this.object.position),Uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uo.direction))<gy?this.object.lookAt(this.target):(Vu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uo.intersectPlane(Vu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wc||this._lastTargetPosition.distanceToSquared(this.target)>wc?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function _y(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function yy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function vy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gu),this.state=ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Mc)}function wy(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function My(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(Mc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Gu))}function by(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Sy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Mc)}function Ay(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function Ey(i){this.enabled!==!1&&i.preventDefault()}function Ty(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Re={scale:.1039064800879708,elev:{main1:0,main2:5.5,n0:0,n4:10.5},slabs:[{floor:"n4",y:10.5,poly:[[.9,64.2],[-21.2,48.5],[-15.3,39.7],[-17.5,37.5],[-15.5,35.4],[-14.7,32.3],[-18.9,25.6],[-17.9,23.3],[-18.7,21.9],[-17.6,20.6],[-19.3,16.3],[-28.1,9.9],[-27.5,8],[-30.6,5.4],[-29.8,4.2],[-34.5,.3],[-28.4,-9.1],[3,16],[5.2,13.6],[4.2,11],[5.2,8.3],[4.3,7.2],[4.3,2.7],[5.3,1.7],[4.3,.6],[5.2,-.5],[4.4,-13.8],[9.2,-15.6],[11.4,-14.2],[11.2,22.3],[23.3,34.3]]},{floor:"n0",y:0,poly:[[-17.1,20.1],[-11.5,25.9],[-3.1,17.4],[15.6,39.5],[19.3,36],[20.7,37.5],[.4,64.9],[-21.9,49.2],[-18.1,43.3],[-17.5,33.4],[-15.3,30.6],[-21.5,24.4]]},{floor:"main2",y:5.5,poly:[[-45.5,-58.5],[-43.9,-60],[-38.9,-60.1],[-35.5,-64.2],[-7,-64.9],[-5.9,-55],[-1.7,-55.1],[1.4,-58.1],[7.4,-58.3],[8.6,-56.6],[11.7,-56.8],[13,-47.9],[24.8,-48.2],[46.8,-35.3],[34.1,-12.4],[32.2,-10.6],[5.2,-9.9],[-1.7,-13.7],[-3.4,-12.1],[-3.8,-12.8],[-1,-15.3],[-3.5,-19.8],[-5.7,-20],[-4.8,-21.3],[-6.4,-23],[-16.2,-24.1],[-17.3,-29.2],[-37.9,-39.6],[-39.6,-42.5],[-46.2,-45.7],[-46.8,-54.6]]},{floor:"main1",y:0,poly:[[-45.5,-58.5],[-44,-59.9],[-41.6,-60],[-39.1,-63.2],[-37.4,-62.2],[-38.6,-61],[-37.5,-60.1],[-34.8,-63.2],[-8.7,-63.9],[-7.6,-54.9],[-1.7,-55.1],[1.4,-58.1],[7.4,-58.2],[8.7,-56.6],[11.7,-56.7],[13,-47.9],[25.2,-48.1],[46.8,-35.3],[34.1,-12.4],[31.4,-10.6],[4,-10.2],[-15.7,-23.5],[-17.7,-29.3],[-38.2,-39.7],[-39.6,-42.5],[-46.1,-45.6],[-46.8,-53.6],[-45.6,-55]]}],rooms:{millennium:{floor:"main2",y:5.5,kind:"room",poly:[[38.5,-22.3],[36.6,-22.5],[34.6,-19.3],[13.3,-18.7],[13.2,-37.2],[10.5,-37.4],[10.6,-45.7],[23.1,-46.3],[44.6,-33.8]],obb:{cx:27.6,cz:-32.8,w:34,d:27.5,rot:3.115}},studio4:{floor:"n4",y:10.5,kind:"room",poly:[[1.7,33.4],[9.6,24.9],[11.1,25],[21.1,36.2],[19.6,37.5],[17.9,36.2],[10.8,43.3]],obb:{cx:11,cz:34.4,w:12.6,d:16.1,rot:2.409}},studio6:{floor:"n4",y:10.5,kind:"room",poly:[[-13.7,6.4],[-3.7,13.7],[-7.1,18.5],[-17,11.3]],obb:{cx:-10.4,cz:12.4,w:12.5,d:6,rot:-2.511}},studio3:{floor:"n0",y:0,kind:"room",poly:[[-9.3,32.1],[-5.3,36.3],[-6.1,38],[-4.6,39.7],[-13.3,50.1],[-18.8,46.4],[-13.7,38.8],[-13.6,41.4],[-12,39.9],[-11.6,35.7]],obb:{cx:-10.7,cz:41.6,w:17.2,d:8.1,rot:-.984}},studio1:{floor:"main1",y:0,kind:"room",poly:[[10,-44.3],[1.1,-44.4],[1.3,-54.5],[10.2,-54.6]],obb:{cx:5.6,cz:-49.5,w:10.4,d:9,rot:1.587}},century:{floor:"main2",y:5.5,kind:"hub",poly:[[-45.4,-57.9],[-21.4,-58.7],[-21.2,-39.8],[-31.9,-39.3],[-45.1,-46.1]],obb:{cx:-33.2,cz:-48.9,w:24.6,d:19.3,rot:3.127}},hub2:{floor:"main2",y:5.5,kind:"hub",poly:[[-17.3,-52.5],[-.9,-53.2],[-.3,-49.7],[.8,-50.3],[1.2,-54.5],[9.2,-54.7],[10.1,-53.9],[10.1,-48.3],[9.1,-47.2],[10.1,-47.3],[9.6,-38.1],[.2,-37.6],[-.4,-44.3],[-20.2,-43.6],[-20.5,-47.5],[-15.6,-48.2],[-15.6,-49.2],[-17.3,-49.2]],obb:{cx:-5.2,cz:-46,w:30.9,d:16.9,rot:3.13}},hub4:{floor:"n4",y:10.5,kind:"hub",poly:[[1.7,30.3],[-1.2,26.9],[7.5,17.7],[8,-7.6],[9.8,-7.5],[9.8,24.2],[8.8,23]],obb:{cx:7.8,cz:11.9,w:38.7,d:10,rot:-1.319}},saechsiluute:{floor:"n4",y:10.5,kind:"service",poly:[[-16.5,42.8],[-14.5,40.9],[-6.5,45.8],[-7.4,47.6],[-2.6,51.3],[-3.5,53.1],[3.2,58.6],[.4,62.9],[-20.1,48.2]],obb:{cx:-7,cz:51.4,w:25.5,d:9.9,rot:-2.519}}},nodes:{welcome:[7.9,5.5,-40.3],esc_bot:[-.7,5.5,-15.2],esc_top:[9.8,10.5,-15.2],skywalk_mid:[10.3,10.5,-6.5],h4_in:[9.8,10.5,13.9],h4_mid:[6.6,10.5,22.1],n4_corr:[-6.7,10.5,36.9],lift_top:[.9,10.5,41.2],lift_bot:[.9,0,41.2],entr_n:[-5.7,0,24.1],entr_mid:[-.1,0,34],stair_top:[8.6,5.5,-33.9],stair_bot:[4.8,0,-30.3],s1_door:[5.5,0,-42.3],c_door:[-21.4,5.5,-58.7],h2_door:[.2,5.5,-51],s6_door:[-7.8,10.5,10],s4_door:[5.6,10.5,30.1],s3_door:[-5.7,0,35.4],m_door:[16.8,5.5,-38.8],s6_link:[10.6,10.5,-2.1]},bbox:[-46.8,46.8,-64.9,64.9]};var Wu=[["c_door","h2_door"],["h2_door","welcome"],["welcome","m_door"],["welcome","esc_bot"],["h2_door","stair_top"],["stair_top","stair_bot"],["stair_bot","s1_door"],["esc_bot","esc_top"],["esc_top","skywalk_mid"],["skywalk_mid","s6_link"],["s6_link","s6_door"],["skywalk_mid","h4_in"],["h4_in","h4_mid"],["h4_mid","s4_door"],["h4_mid","lift_top"],["lift_top","lift_bot"],["lift_bot","entr_mid"],["entr_mid","entr_n"],["entr_mid","s3_door"]],Xu={century:"c_door",hub2:"h2_door",millennium:"m_door",studio1:"s1_door",studio3:"s3_door",studio4:"s4_door",studio6:"s6_door",hub4:"h4_mid"};function Oo(i){let t=new Map;for(let[r,o]of Wu){let a=Re.nodes[r],l=Re.nodes[o];if(!a||!l)continue;let c=Math.hypot(a[0]-l[0],a[1]-l[1],a[2]-l[2])+(Math.abs(a[1]-l[1])>1?6:0);t.has(r)||t.set(r,[]),t.has(o)||t.set(o,[]),t.get(r).push([o,c]),t.get(o).push([r,c])}let e=(r,o)=>{let a=new Map([[r,0]]),l=new Map,c=new Set(t.keys());for(;c.size;){let u=null;for(let d of c)a.has(d)&&(u==null||a.get(d)<a.get(u))&&(u=d);if(u==null||u===o)break;c.delete(u);for(let[d,p]of t.get(u))(!a.has(d)||a.get(u)+p<a.get(d))&&(a.set(d,a.get(u)+p),l.set(d,u))}let h=[o];for(;h[0]!==r;){let u=l.get(h[0]);if(!u)return[r,o];h.unshift(u)}return h},n=i.length,s=[];for(let r=0;r<n;r++)for(let o=0;o<n;o++){if(r===o){s.push(null);continue}let a=e(Xu[i[r]],Xu[i[o]]),l=new Float32Array(a.length*3),c=new Float32Array(a.length);a.forEach((h,u)=>{let d=Re.nodes[h];l[u*3]=d[0],l[u*3+1]=d[1],l[u*3+2]=d[2],u&&(c[u]=c[u-1]+Math.hypot(l[u*3]-l[u*3-3],l[u*3+1]-l[u*3-2],l[u*3+2]-l[u*3-1]))}),s.push({pts:l,cum:c,len:c[c.length-1],n:a.length,names:a})}return{routes:s,edges:Wu.filter(([r,o])=>Re.nodes[r]&&Re.nodes[o])}}var Dn={open:"#4fd6a8",filling:"#f4c24f",full:"#f0605d",running:"#6b8cff",none:"#7a869c"},Xs=i=>new Ft(Dn[i]||Dn.none),qu={n4:"Floor 4 \xB7 north building",n0:"Ground floor \xB7 north building",main2:"2nd floor \xB7 main building",main1:"1st floor \xB7 main building"};function Yu(i,t){let e=new io({antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setClearColor(461590,1),i.appendChild(e.domElement);let n=new ro;n.fog=new so(461590,220,520);let s=new Le(38,1,1,1200),r=new No(s,e.domElement);r.enableDamping=!0,r.dampingFactor=.08,r.maxPolarAngle=Math.PI*.49,r.minDistance=25,r.maxDistance=420,r.screenSpacePanning=!0,n.add(new Ao(11191551,1712182,1.15));let o=new Eo(16777215,.9);o.position.set(60,120,80),n.add(o);let a={pos:new O(150,72,38),target:new O(0,24,0)};s.position.copy(a.pos),r.target.copy(a.target);let l=new Ye;n.add(l);let c=R=>new wo({color:R.startsWith("n")?1779524:1516864,transparent:!0,opacity:.42,roughness:.9,metalness:0,depthWrite:!1,side:qe}),h=new Jn({color:5930944,transparent:!0,opacity:.85}),u=R=>new os(R.map(D=>new lt(D[0],-D[1])));for(let R of Re.slabs){let D=new yo(u(R.poly),{depth:.5,bevelEnabled:!1});D.rotateX(-Math.PI/2);let k=new ge(D,c(R.floor));k.position.y=R.y-.5,k.renderOrder=1,l.add(k);let B=new gi(new rs(D,20),h);B.position.y=R.y-.5,l.add(B)}let d={};for(let R of je){let D=Re.rooms[R.id];if(!D)continue;let k=new vo(u(D.poly));k.rotateX(-Math.PI/2);let B=new mn({color:15771744,transparent:!0,opacity:.16,depthWrite:!1,side:qe}),G=new ge(k,B);G.position.y=D.y+.06,G.renderOrder=2,l.add(G);let j=new gi(new rs(k),new Jn({color:15771744,transparent:!0,opacity:.45}));j.position.y=D.y+.07,l.add(j),d[R.id]=G}{let{edges:R}=Oo(Wt.map(G=>G.id)),D=[];for(let[G,j]of R)D.push(...Re.nodes[G],...Re.nodes[j]);let k=new Ce;k.setAttribute("position",new ce(D,3));let B=new gi(k,new Jn({color:8369407,transparent:!0,opacity:.22}));l.add(B)}let p={},g=[];for(let R of Wt){let D=Re.rooms[R.id];if(!D)continue;let k=D.obb,B=3.6,G=new Ye;G.position.set(k.cx,D.y,k.cz),G.rotation.y=-k.rot;let j=new Kn(k.w,B,k.d);j.translate(0,B/2,0);let nt=new mn({color:Xs("none"),transparent:!0,opacity:.07,depthWrite:!1}),gt=new ge(j,nt);gt.renderOrder=3,gt.userData.roomId=R.id,G.add(gt),g.push(gt);let Nt=new Jn({color:Xs("none"),transparent:!0,opacity:.95});G.add(new gi(new rs(j),Nt));let Y=new Kn(k.w*.98,1,k.d*.98);Y.translate(0,.5,0);let J=new mn({color:Xs("none"),transparent:!0,opacity:.3,depthWrite:!1}),_t=new ge(Y,J);_t.scale.y=.02,_t.renderOrder=2,G.add(_t),l.add(G),p[R.id]={id:R.id,def:R,geo:D,group:G,glass:gt,glassMat:nt,edgeMat:Nt,liq:_t,liqMat:J,color:Xs("none"),anchor:new O(k.cx,D.y+B+.6,k.cz),curFill:0}}let _=[],m=(R,D,k,B)=>{let G=document.createElement("div");G.className="lbl "+R,G.innerHTML=D,t.appendChild(G);let j={el:G,anchor:k,...B};return _.push(j),j};for(let R of Wt){let D=p[R.id];if(!D)continue;let k=m("room",`<b>${R.name}</b><span class="cnt"></span><i class="bar"><u></u></i>`,D.anchor,{roomId:R.id});D.label=k,k.cnt=k.el.querySelector(".cnt"),k.bar=k.el.querySelector("u"),k.barWrap=k.el.querySelector(".bar")}for(let R of je){let D=Re.rooms[R.id];if(!D)continue;let k=m("hub",`<b>${R.name}</b><span class="cnt"></span>`,new O(D.obb.cx,D.y+3.2,D.obb.cz),{hubId:R.id});k.cnt=k.el.querySelector(".cnt")}let f={};for(let R of Re.slabs){let D=R.poly.map(G=>G[0]),k=Math.min(...D),B=R.poly.reduce((G,j)=>j[0]===k?j:G,R.poly[0]);f[R.floor]=new O(B[0]-2,R.y,B[1]),m("floor",qu[R.floor],f[R.floor])}function M(){let R=i.clientWidth||800,D=i.clientHeight||600;e.setSize(R,D,!1),e.domElement.style.width=R+"px",e.domElement.style.height=D+"px",s.aspect=R/D,s.fov=R/D<.8?52:38,s.updateProjectionMatrix(),M.once||(M.once=!0,R/D<.8&&(a.pos.set(92,108,150),s.position.copy(a.pos)))}window.addEventListener("resize",M),M();let w=null;function y(R,D,k=900){w={t0:performance.now(),ms:k,p0:s.position.clone(),q0:r.target.clone(),p1:R.clone(),q1:D.clone()}}let L=R=>R<.5?4*R*R*R:1-Math.pow(-2*R+2,3)/2;function I(R){if(!w)return;let D=Math.min(1,(R-w.t0)/w.ms),k=L(D);s.position.lerpVectors(w.p0,w.p1,k),r.target.lerpVectors(w.q0,w.q1,k),D>=1&&(w=null)}r.addEventListener("start",()=>{w=null});function U(){y(a.pos,a.target)}function P(R){let D=p[R];if(!D)return;let k=new O(D.group.position.x,D.group.position.y+2,D.group.position.z),B=s.position.clone().sub(r.target).normalize(),G=R==="millennium"?85:55;y(k.clone().add(B.multiplyScalar(G)),k)}let v=new O;function x(){let R=i.clientWidth,D=i.clientHeight;for(let k of _){if(v.copy(k.anchor).project(s),!(v.z<1&&v.z>-1&&Math.abs(v.x)<1.15&&Math.abs(v.y)<1.15)){k.shown!==!1&&(k.el.style.display="none",k.shown=!1);continue}k.shown===!1&&(k.el.style.display="",k.shown=!0),k.el.style.transform=`translate(-50%,-100%) translate(${((v.x+1)*.5*R).toFixed(1)}px,${((1-v.y)*.5*D).toFixed(1)}px)`}}function E(R,D,k,B,G,j){let nt=p[R];if(!nt)return;let gt=Xs(k);nt.color.lerp(gt,.15),nt.curFill+=(D-nt.curFill)*.2;let Nt=Math.max(.02,nt.curFill);nt.liq.scale.y=3.5*Nt,nt.liqMat.color.copy(nt.color),nt.liqMat.opacity=B?.32:.16,nt.edgeMat.color.copy(nt.color),nt.edgeMat.opacity=G||j?1:.7,nt.glassMat.color.copy(nt.color),nt.glassMat.opacity=G?.18:j?.2:.07}let N=new To,C=new lt;function F(R,D,k){let B=e.domElement.getBoundingClientRect();C.set((R-B.left)/B.width*2-1,-((D-B.top)/B.height)*2+1),N.setFromCamera(C,s);let G=N.intersectObjects(k,!1);return G.length?G[0].object:null}return{renderer:e,scene:n,camera:s,controls:r,rooms:p,hitMeshes:g,hubMeshes:d,labels:_,resize:M,flyTo:y,resetView:U,focusRoom:P,stepAnim:I,updateLabels:x,setRoomState:E,pick:F,home:a,FLOOR_LABEL:qu}}var Ry=1.25;function Zu(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Iy(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let o=e[s],a=e[r];o[1]>t!=a[1]>t&&i<(a[0]-o[0])*(t-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function $u(i,t){let e=new _o(.28,.85,2,6);e.translate(0,.7,0);let n=new Mo({color:16777215,emissive:2241348,emissiveIntensity:.6}),s=new lo(e,n,t);s.frustumCulled=!1,s.instanceMatrix.setUsage(mc),s.instanceColor=new ss(new Float32Array(t*3),3),s.instanceColor.setUsage(mc),i.add(s);let r=s.instanceMatrix.array,o=s.instanceColor.array,a=Zu(99),l=new Float32Array(t),c=new Float32Array(t),h=new Float32Array(t);for(let N=0;N<t;N++)l[N]=a(),c[N]=a()*6.283,h[N]=a()*6.283;let u=null,d=0,p=0,g=null,_=null,m=null,f=null,M=null,w=new Float32Array(24),y={x:0,y:0,z:0},L=0;function I(){_=[];for(let N=0;N<d;N++){let C=M[N],F=Re.rooms[C],R=new Float32Array(t*3),D=Zu(1e3+N*31);if(!F){_.push(R);continue}let k=F.kind==="hub",B=F.obb,G=Math.cos(B.rot),j=Math.sin(B.rot);for(let nt=0;nt<t;nt++){let gt,Nt;for(let Y=0;Y<60;Y++){let J=(D()-.5)*(B.w-1.6),_t=(D()-.5)*(B.d-1.6),ut=k?J:Math.round(J/.95)*.95,St=_t;if(gt=B.cx+ut*G-St*j,Nt=B.cz+ut*j+St*G,!k||Iy(gt,Nt,F.poly))break}R[nt*3]=gt,R[nt*3+1]=F.y+.12,R[nt*3+2]=Nt}_.push(R)}}function U(N){u=N,d=N.locIds.length,p=N.K,M=N.locIds,g=Oo(M),(!_||_.length!==d)&&I(),m=new Int16Array(t*p);for(let C=0;C<t;C++){let F=0;for(let R=1;R<p;R++)N.loc[C*p+R]!==N.loc[C*p+R-1]&&(F=R),m[C*p+R]=F}}function P(N,C,F,R){w[N*3]=C,w[N*3+1]=F,w[N*3+2]=R}function v(N,C){let{t0:F,step:R}=u,D=C-F,k=Math.floor(D/R);k<0&&(k=0),k>p-1&&(k=p-1);let B=N*p,G=k;k+1<p&&u.loc[B+k+1]!==u.loc[B+k]&&D>=(k+l[N])*R&&(G=k+1);let j=m[B+G],nt=u.loc[B+G];if(L=nt,j===0)return x(nt,N),0;let gt=u.loc[B+j-1],Nt=(j-1+l[N])*R,Y=D-Nt,J=g.routes[gt*d+nt],_t=_[gt],ut=_[nt],St=_t[N*3],q=_t[N*3+1],it=_t[N*3+2],ct=ut[N*3],X=ut[N*3+1],et=ut[N*3+2],T=J.n,ft=J.pts,at=Math.hypot(ft[0]-St,ft[1]-q,ft[2]-it),st=Math.hypot(ct-ft[(T-1)*3],X-ft[(T-1)*3+1],et-ft[(T-1)*3+2]),ht=at+J.len+st,vt=ht/Ry*1e3;if(Y>=vt||Y<0)return x(nt,N),0;let pt=Y/vt*ht;if(pt<at){let K=pt/at;return y.x=St+(ft[0]-St)*K,y.y=q+(ft[1]-q)*K,y.z=it+(ft[2]-it)*K,1}if(pt-=at,pt>=J.len){let K=st>0?(pt-J.len)/st:1,rt=ft[(T-1)*3],tt=ft[(T-1)*3+1],It=ft[(T-1)*3+2];return y.x=rt+(ct-rt)*K,y.y=tt+(X-tt)*K,y.z=It+(et-It)*K,1}let A=1;for(;A<T-1&&J.cum[A]<pt;)A++;let b=J.cum[A]-J.cum[A-1]||1,W=(pt-J.cum[A-1])/b;return y.x=ft[(A-1)*3]+(ft[A*3]-ft[(A-1)*3])*W,y.y=ft[(A-1)*3+1]+(ft[A*3+1]-ft[(A-1)*3+1])*W,y.z=ft[(A-1)*3+2]+(ft[A*3+2]-ft[(A-1)*3+2])*W,1}function x(N,C){let F=_[N];y.x=F[C*3],y.y=F[C*3+1],y.z=F[C*3+2]}function E(N,C,F){if(u){for(let R=0;R<t;R++){let D=v(R,N),k=y.x,B=y.y,G=y.z,j=1,nt=L,gt,Nt,Y;D?(gt=.55,Nt=.95,Y=1,j=1.15):F[nt]?(k+=Math.sin(C*.31+c[R])*.9,G+=Math.cos(C*.27+h[R])*.9,gt=1,Nt=.78,Y=.5):(gt=w[nt*3],Nt=w[nt*3+1],Y=w[nt*3+2]);let J=R*16;r[J]=j,r[J+1]=0,r[J+2]=0,r[J+3]=0,r[J+4]=0,r[J+5]=j,r[J+6]=0,r[J+7]=0,r[J+8]=0,r[J+9]=0,r[J+10]=j,r[J+11]=0,r[J+12]=k,r[J+13]=B,r[J+14]=G,r[J+15]=1,o[R*3]=gt,o[R*3+1]=Nt,o[R*3+2]=Y}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0}}return{mesh:s,setModel:U,update:E,setLocColor:P}}function Py(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ly(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.45,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new uo(i);return n.colorSpace=Ne,n}var Ku=new Ft(10129348),Fo=2.2,Dy=9,Ju=14;function ju(i,t,e,n){let s=Ly(),r=new Ye;i.add(r);let o=[],a=null,l="cum",c=null,h=!0,u=[],d=new O;function p(){for(let P of o)r.remove(P.g),P.matA.dispose(),P.matB.dispose(),P.label.remove();o=[],u.length=0}function g(P){let v=!a||a.topics.length!==P.topics.length||a.topics.some((E,N)=>E.id!==P.topics[N].id);if(a=P,!v)return;p();let x=P.topics.length;P.topics.forEach((E,N)=>{let C=Py(777+N*13),F=(.52+.38*C()+(E.kind==="keyword"?.1:0))%1,R=new Ft().setHSL(F,.55,.62),D=new Ft().setHSL(F,.5,.82),k=new is({map:s,color:R.clone(),transparent:!0,opacity:.5,depthWrite:!1,fog:!0}),B=new is({map:s,color:D.clone(),transparent:!0,opacity:.55,depthWrite:!1,fog:!0}),G=new Ye,j=Math.sqrt((N+.6)/x),nt=N*2.399963;G.position.set(Math.cos(nt)*j*64,34+N*37%5*3.2,Math.sin(nt)*j*76);let gt=[];for(let _t=0;_t<Ju;_t++){let ut=C()*6.283,St=Math.acos(2*C()-1),q=.35+.65*Math.cbrt(C()),it=Math.sin(St)*Math.cos(ut)*q,ct=Math.cos(St)*q*.55,X=Math.sin(St)*Math.sin(ut)*q,et=new ao(ct>.05?B:k);et.position.set(it,ct,X);let T=.9+C()*.8;et.userData={x:it,y:ct,z:X,s:T,ph:C()*6.283},et.renderOrder=10,G.add(et),gt.push(et)}r.add(G);let Nt=G.position.y,Y=new ge(new xo(1,8,6),new mn({visible:!1}));Y.userData.topicIdx=N,G.add(Y),u.push(Y);let J=document.createElement("div");J.className="lbl cloud",J.innerHTML="<b></b><small></small>",J.querySelector("b").textContent=E.short,J.dataset.topic=N,t.appendChild(J),o.push({g:G,puffs:gt,matA:k,matB:B,baseCol:R,lightCol:D,hit:Y,label:J,nameEl:J.querySelector("b"),subEl:J.querySelector("small"),r:Fo,target:Fo,proj:0,val:0,hue:F,shown:!0,baseY:Nt,w:0,h:0,topic:E})})}function _(P,v){let x=Math.min(a.K-1,Math.max(0,(v-a.t0)/a.step)),E=Math.floor(x),N=Math.min(a.K-1,E+1),C=x-E,F=l==="cum"?a.topicCum[P]:a.topicNow[P],R=l==="cum"?a.topicProjCum[P]:a.topicProjNow[P],D=F[E]*(1-C)+F[N]*C,k=R[E]*(1-C)+R[N]*C;return[D,D>1e-6?k/D:0]}let m=0;function f(P,v,x,E){if(!a)return;let N=l==="cum"?a.topicMaxCum:a.topicMaxNow,C=E?1:1-Math.exp(-v*3.2);for(let F=0;F<o.length;F++){let R=o[F],[D,k]=_(F,P);R.val=D,R.target=Fo+(Dy-Fo)*Math.sqrt(Math.min(1,D/N)),R.r+=(R.target-R.r)*C,R.proj+=(k-R.proj)*C;let B=c===R.topic.id,G=c&&!B,j=(.2+.4*Math.min(1,D/N*1.4+.15))*(1-.4*R.proj)*(G?.45:1)*(B?1.5:1);R.matA.opacity=Math.min(.85,j),R.matB.opacity=Math.min(.9,j*1.1),R.matA.color.copy(R.baseCol).lerp(Ku,R.proj*.65),R.matB.color.copy(R.lightCol).lerp(Ku,R.proj*.55),R.g.visible=h,R.hit.scale.setScalar(R.r*1.1);let nt=R.r;for(let gt=0;gt<Ju;gt++){let Nt=R.puffs[gt],Y=Nt.userData,J=Math.sin(x*.5+Y.ph)*.06;Nt.position.set((Y.x+J)*nt,(Y.y+J*.6)*nt,Y.z*nt);let _t=Y.s*nt*.95;Nt.scale.set(_t,_t,1)}R.g.position.y=R.baseY+Math.sin(x*.3+F)*.8}m++%6===0&&M()}function M(){let P=n.clientWidth,v=n.clientHeight,x=o.map((N,C)=>C).sort((N,C)=>o[C].r-o[N].r),E=[];for(let N of x){let C=o[N];if(!h){C.shown&&(C.label.style.display="none",C.shown=!1);continue}d.copy(C.g.position),d.y+=C.r*.15,d.project(e);let F=(d.x+1)*.5*P,R=(1-d.y)*.5*v;if(d.z>1||F<-50||F>P+50||R<-20||R>v+20){C.shown&&(C.label.style.display="none",C.shown=!1);continue}C.w||(C.w=C.label.offsetWidth||80,C.h=C.label.offsetHeight||24);let D=c===C.topic.id,k=[F-C.w/2,R-C.h/2,F+C.w/2,R+C.h/2],B=!1;if(!D){for(let G of E)if(k[0]<G[2]+4&&k[2]>G[0]-4&&k[1]<G[3]+2&&k[3]>G[1]-2){B=!0;break}}if(B){C.shown&&(C.label.classList.add("off"),C.shown=!1);continue}E.push(k),C.shown||(C.label.classList.remove("off"),C.shown=!0),C.label.style.display="",C.label.style.transform=`translate(-50%,-50%) translate(${F.toFixed(1)}px,${R.toFixed(1)}px)`,C.label.classList.toggle("hl",D),C.label.classList.toggle("proj",C.proj>.5),C.label.style.opacity=c&&!D?.35:1}}function w(P){l=P}function y(P){c=P,M()}function L(P){h=P;for(let v of o)v.g.visible=P;M()}function I(){return o.map(P=>P.r)}function U(P){let v=o[P];return v?{topic:v.topic,val:v.val,proj:v.proj}:null}return{setModel:g,update:f,setMode:w,setHighlight:y,setVisible:L,sizes:I,hitSpheres:u,describe:U,get clouds(){return o},get mode(){return l}}}var se=(i,t=document)=>t.querySelector(i),Uy=new Intl.DateTimeFormat("en-GB",{timeZone:er,hour:"2-digit",minute:"2-digit",hour12:!1}),Ny=new Intl.DateTimeFormat("en-GB",{timeZone:er,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),Oy=new Intl.DateTimeFormat("en-GB",{timeZone:er,weekday:"short",day:"numeric",month:"short"}),Un=i=>Uy.format(i),bc=i=>Ny.format(i),_n=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Fy={open:"Open",filling:"Filling",full:"Full",running:"Running",none:"Idle"},ky={millennium:"#7c9cff",studio4:"#59c9d9",studio6:"#8f8cf2",studio3:"#e09bd0",studio1:"#7fd6a0"};function Qu(i){let t=null,e={play:se("#btn-play"),prev:se("#btn-prev"),next:se("#btn-next"),speed:se("#sel-speed"),live:se("#btn-live"),clockT:se("#clock-t"),clockSub:se("#clock-sub"),tl:se("#timeline"),rows:se(".tl-rows"),ticks:se(".tl-ticks"),cov:se(".tl-cov"),now:se(".tl-now"),head:se(".tl-head"),hover:se(".tl-hover"),panel:se("#panel"),tip:se("#tip"),legend:se("#legend"),chipMode:se("#chip-mode"),chipData:se("#chip-data"),btnClouds:se("#btn-clouds"),btnTopic:se("#btn-topicmode")},n=new Map,s=null,r=null,o="";e.play.addEventListener("click",()=>i.togglePlay()),e.prev.addEventListener("click",()=>i.jump(-1)),e.next.addEventListener("click",()=>i.jump(1)),e.speed.addEventListener("change",()=>i.setSpeed(+e.speed.value)),e.live.addEventListener("click",()=>i.goLive()),se("#btn-reset").addEventListener("click",()=>i.resetView()),e.btnClouds.addEventListener("click",()=>{let M=i.toggleClouds();e.btnClouds.classList.toggle("on",M),e.btnClouds.setAttribute("aria-pressed",M)}),e.btnTopic.addEventListener("click",()=>i.toggleTopicMode()),se("#btn-legend").addEventListener("click",()=>{e.legend.hidden=!e.legend.hidden}),se("#legend .close").addEventListener("click",()=>{e.legend.hidden=!0});let a=M=>(M-t.t0)/(t.t1-t.t0)*100,l=M=>{let w=e.tl.getBoundingClientRect();return t.t0+Math.min(1,Math.max(0,(M-w.left)/w.width))*(t.t1-t.t0)},c=!1;e.tl.addEventListener("pointerdown",M=>{t&&(c=!0,e.tl.setPointerCapture(M.pointerId),i.seek(l(M.clientX)))}),e.tl.addEventListener("pointermove",M=>{if(!t)return;let w=l(M.clientX);e.hover.hidden=!1,e.hover.style.left=a(w)+"%",e.hover.textContent=Un(w),c&&i.seek(w)}),e.tl.addEventListener("pointerup",()=>{c=!1}),e.tl.addEventListener("pointerleave",()=>{e.hover.hidden=!0}),e.tl.addEventListener("keydown",M=>{M.key==="ArrowLeft"&&(i.seek(i.getT()-6e4),M.preventDefault(),M.stopPropagation()),M.key==="ArrowRight"&&(i.seek(i.getT()+6e4),M.preventDefault(),M.stopPropagation())});function h(){e.rows.innerHTML="",e.ticks.innerHTML="",n=new Map;let M=t.t1-t.t0;for(let y=0;y<=M/36e5;y++){let L=t.t0+y*36e5,I=document.createElement("i");I.style.left=a(L)+"%",I.innerHTML=`<span>${Un(L)}</span>`,e.ticks.appendChild(I)}let w=100/Wt.length;Wt.forEach((y,L)=>{let I=document.createElement("div");I.className="tl-row",I.style.top=`calc(${L} * (100% - 8px) / ${Wt.length-1})`,I.innerHTML=`<span class="rn">${y.short}</span>`;for(let U of t.sessions.filter(P=>P.roomId===y.id)){let P=document.createElement("div");P.className="blk"+(U.hasData?"":" proj"),P.style.left=a(U.start)+"%",P.style.width=Math.max(.35,a(U.end)-a(U.start))+"%",P.style.setProperty("--c",ky[y.id]),P.style.setProperty("--o",(.35+.6*Math.min(1,U.pop.score)).toFixed(2)),P.title=`${Un(U.start)}\u2013${Un(U.end)} \xB7 ${y.name} \xB7 ${U.title}`,P.dataset.sid=U.id,I.appendChild(P),n.set(U.id,P)}e.rows.appendChild(I)}),e.rows.onclick=null}function u(){e.cov.innerHTML="";let M=t.covered,w=0;for(;w<t.K;){if(!M[w]){w++;continue}let y=w;for(;y+1<t.K&&M[y+1];)y++;let L=document.createElement("i");L.style.left=a(t.t0+w*t.step)+"%",L.style.width=Math.max(.2,a(t.t0+(y+1)*t.step)-a(t.t0+w*t.step))+"%",e.cov.appendChild(L),w=y+1}}function d(M){let w=M>=t.t0&&M<=t.t1;e.now.style.display=w?"block":"none",w&&(e.now.style.left=a(M)+"%")}function p(M){if(!M.hasData)return"No room samples yet for this session, so everything shown for it is a projection from its format, room size and the popularity of its topics so far.";let w=M.points,y=w[0],L=v=>Math.round((M.start-v)/6e4),I=w.find(v=>v.level==="filling"||v.level==="full"),U=w.find(v=>v.level==="full"),P=[];return y.level==="running"?P.push("First recorded sample was already \u201Crunning\u201D, so the fill history before the start is missing and the level is carried over from the previous session / a prior."):(I?P.push(I.t<M.start?`Reached \u201C${I.level}\u201D ${L(I.t)} min before the start.`:`Reached \u201C${I.level}\u201D only after the start.`):P.push("Stayed \u201Copen\u201D until the start."),U&&U!==I&&P.push(`\u201CFull\u201D ${U.t<M.start?L(U.t)+" min before the start":"after the start"}.`)),P.join(" ")}function g(M,w){let y=t.sessions.filter(L=>L.roomId===M);return y.find(L=>w>=L.start&&w<L.end)||y.find(L=>L.start>w)||y[y.length-1]}function _(M,w){if(!s){e.panel.hidden=!0;return}let y=Wt.find(C=>C.id===s),L=g(s,M),U=t.at(M).rooms[s],P=t.levelAt(s,M),v=[s,L&&L.id,P.level,P.rec,Math.round(U.count),t.nSamples].join("|");if(!w&&v===o&&!e.panel.hidden)return;o=v;let x=Dn[P.idle?"none":P.level]||Dn.none,E=t.sessions.filter(C=>C.roomId===s),N=`<button class="close" aria-label="Close">\xD7</button><h2>${_n(y.name)}</h2><div class="sub">${y.cap} seats (assumed) \xB7 ${_n(i.floorLabel(y.floor))}</div>`;if(N+=`<div class="lv"><i style="background:${x}"></i>${_n(Fy[P.idle?"none":P.level])} <span class="tag ${P.rec?"":"p"}">${P.rec?"measured level":"projected"}</span></div>`,N+=`<div class="big">\u2248 ${Math.round(U.count)} <small>of ${y.cap} \xB7 estimated headcount</small></div><div class="meter"><u style="width:${Math.min(100,U.fill*100).toFixed(0)}%"></u></div>`,L){let C=L.speakers.length?L.speakers.join(", ")+(L.company.length?" \xB7 "+[...new Set(L.company)].join(", "):""):"";N+=`<div class="sess"><div class="sub">${M>=L.start&&M<L.end?"Now":M<L.start?"Next":"Last"} \xB7 ${Un(L.start)}\u2013${Un(L.end)} \xB7 ${_n(L.format)}</div><h3>${_n(L.title)}</h3>`,C&&(N+=`<div class="sub">${_n(C)}</div>`),N+=`<div>${L.topics.slice(0,4).map(R=>{let D=t.topics.find(k=>k.id===R.id);return D?`<span class="tag">${_n(D.short)}</span>`:""}).join("")}</div>`;let F=Math.round(Math.min(1,L.pop.score)*100);N+=`<div class="why"><b>Popularity ${F}/100</b> ${L.hasData?"":'<span class="tag p">projected</span>'}<div class="meter"><u style="width:${F}%"></u></div>${_n(p(L))}</div>`,L.pop.unmet&&(N+=`<div class="warn">Full room with only ${y.cap} seats: likely unmet demand (more people wanted in than fitted).</div>`),L.hasData&&(N+=`<div class="why" style="color:var(--muted)">Estimated peak \u2248 ${Math.round(L.peakCount)} of ${y.cap} seats.</div>`)}N+=`<div class="sess"><div class="sub">Schedule in this room</div><ul class="up">${E.map(C=>`<li data-t="${C.start}" style="${L&&C.id===L.id?"color:var(--text)":""}">${Un(C.start)} \xB7 ${_n(C.title.slice(0,44))}${C.title.length>44?"\u2026":""}</li>`).join("")}</ul></div>`,e.panel.innerHTML=N,e.panel.hidden=!1,se(".close",e.panel).onclick=()=>i.selectRoom(null),e.panel.querySelectorAll("li[data-t]").forEach(C=>{C.onclick=()=>i.seek(+C.dataset.t-5*6e4)})}function m(M,w,y){if(!M){e.tip.hidden=!0;return}let{topic:L,val:I,proj:U}=M,P=t.sessions.filter(F=>F.topics.some(R=>R.id===L.id)),v=i.topicMode()==="cum"?`\u2248 ${Math.round(I)} audience-minutes so far`:`\u2248 ${Math.round(I)} people in sessions on this topic now`;e.tip.innerHTML=`<b>${_n(L.label)}</b><div class="row">${v}${U>.5?' <span class="row p">(mostly projected)</span>':""}</div><div class="row">${L.kind==="keyword"?"Keyword from session descriptions":"Curated session topic"} \xB7 ${P.length} session${P.length===1?"":"s"}</div><div class="row">${P.slice(0,6).map(F=>`${Un(F.start)} ${Wt.find(R=>R.id===F.roomId).short}`).join(" \xB7 ")}${P.length>6?" \u2026":""}</div>`,e.tip.hidden=!1;let x=e.tip.offsetWidth,E=e.tip.offsetHeight,N=window.innerWidth,C=window.innerHeight;e.tip.style.left=Math.max(8,Math.min(N-x-8,w+14))+"px",e.tip.style.top=Math.max(8,Math.min(C-E-8,y+14))+"px"}function f(M){r=M;for(let[w,y]of n){let L=t.sessions.find(I=>I.id===w);y.classList.toggle("hl",!!M&&L.topics.some(I=>I.id===M))}}return{setModel(M){let w=!t;t=M,h(),u(),s&&_(i.getT(),!0),r&&f(r),w&&(se("#lg-crowd").textContent=M.crowd)},setHead(M){e.head.style.left=a(M)+"%"},update(M,w){let y=t.at(M).covered;e.clockT.textContent=bc(M),e.clockSub.textContent=Oy.format(M)+(w.live?" \xB7 live":"")+(y?"":" \xB7 projected"),e.chipMode.textContent=y?w.demo?"Synthetic data":"Recorded levels":"Projected \xB7 not measured",e.chipMode.className="chip "+(y?w.demo?"demo":"":"proj");let L=t.lastSample;e.chipData.textContent=w.demo?"demo mode \xB7 no real data":L?`last sample ${bc(L)} \xB7 ${t.nSamples} samples \xB7 ${w.src}`:`no samples yet \xB7 ${w.src}`,e.live.classList.toggle("on",w.live),e.live.disabled=!w.liveAvailable,e.live.title=w.liveAvailable?"Follow real time (L)":"Live is only available between 12:00 and 17:00 on the conference day",e.play.textContent=w.playing||w.live?"\u23F8":"\u25B6",e.play.setAttribute("aria-label",w.playing||w.live?"Pause":"Play"),e.speed.disabled=w.live,e.btnTopic.textContent="Topics: "+(i.topicMode()==="cum"?"so far":"now"),d(w.nowMs),e.tl.setAttribute("aria-valuenow",Math.round(a(M))),e.tl.setAttribute("aria-valuetext",Un(M)),se("#lg-meta").textContent=w.demo?"Demo: all data synthetic.":`Source: recording.jsonl (${w.src}); ${t.nSamples} samples, last ${L?bc(L):"none"}. Crowd total ${t.crowd} and room capacities are assumptions.`,_(M,!1)},selectRoom(M){s=M,o="",M||(e.panel.hidden=!0);for(let[w,y]of n){let L=t.sessions.find(I=>I.id===w);y.classList.toggle("sel",!!M&&L.roomId===M)}M&&_(i.getT(),!0)},get selectedRoom(){return s},showTip:m,setHighlightTopic:f,updateNow:d,updateCoverage:u,toggleLegend(){e.legend.hidden=!e.legend.hidden},closeLegend(){e.legend.hidden=!0},showDemoLink(M){se("#lg-demo").hidden=!M}}}var Me=new URLSearchParams(location.search),Bo=Me.get("demo"),Qn=Bo!==null,Ks=_s(ms),Cc=(i,t,e)=>i<t?t:i>e?e:i,Uv=Date.now(),By=performance.now();function sd(i){if(!i)return null;let t=/^(\d{1,2}):(\d\d)(?::(\d\d))?$/.exec(i);return t?Ks.t0+((+t[1]-12)*3600+ +t[2]*60+(+t[3]||0))*1e3:null}var Ys=null;Me.get("now")?Ys=sd(Me.get("now")):Qn&&(Ys=Bo==="live"?Ks.t0+2.5*36e5:Ks.t1);var zo=Ys!=null?()=>Bo==="live"||Me.get("now")?Ys+(performance.now()-By):Ys:()=>Date.now(),zy=Wo(Bc),rd=[],Ac="embedded snapshot";function od(){return Qn?Qc(ms,{seed:+Me.get("seed")||7,gaps:Me.has("gaps"),to:Bo==="live"?Ks.t0+2.5*36e5:void 0}):qc(zy,rd)}var Kt=$o({sessions:ms,recording:od()}),ad=document.getElementById("stage"),Js=document.getElementById("labels"),ue=Yu(ad,Js),js=$u(ue.scene,650),$e=ju(ue.scene,Js,ue.camera,ad);js.setModel(Kt);$e.setModel(Kt);var Et={t:Ks.t0,playing:!1,live:!1,speed:5,topicMode:"cum",selected:null,hlTopic:null,stickyTopic:null},Rc=()=>{let i=zo();return i>=Kt.t0&&i<=Kt.t1},be={getT:()=>Et.t,seek(i){Et.t=Cc(i,Kt.t0,Kt.t1),Et.live=!1},togglePlay(){if(Et.live){Et.live=!1,Et.playing=!1;return}Et.t>=Kt.t1-1e3&&!Et.playing&&(Et.t=Kt.t0),Et.playing=!Et.playing},setSpeed(i){Et.speed=i,Et.live=!1,Et.playing||(Et.playing=!1)},goLive(){Rc()&&(Et.live=!0,Et.playing=!1)},jump(i){let t=[...new Set(Kt.sessions.flatMap(e=>[e.start,e.end]))].filter(e=>e>Kt.t0&&e<Kt.t1).sort((e,n)=>e-n);if(Et.live=!1,i>0)Et.t=t.find(e=>e>Et.t+1e3)??Kt.t1;else{let e=[...t].reverse().find(n=>n<Et.t-2e3);Et.t=e??Kt.t0}},resetView(){ue.resetView(),be.selectRoom(null)},toggleClouds(){return ds=!ds,$e.setVisible(ds),ds},toggleTopicMode(){Et.topicMode=Et.topicMode==="cum"?"now":"cum",$e.setMode(Et.topicMode)},topicMode:()=>Et.topicMode,floorLabel:i=>ue.FLOOR_LABEL[i],selectRoom(i){Et.selected=i,De.selectRoom(i),i&&ue.focusRoom(i);for(let t of ue.labels)t.roomId&&t.el.classList.toggle("sel",t.roomId===i)}},ds=!0,De=Qu(be);De.setModel(Kt);De.showDemoLink(!Qn);Qn&&(document.title="Demo \xB7 "+document.title);{Me.get("speed")&&(Et.speed=+Me.get("speed")||5,document.getElementById("sel-speed").value=String(Et.speed));let i=sd(Me.get("t"));i!=null?(Et.t=i,Et.playing=Me.get("play")==="1"):Me.get("live")!=="0"&&Rc()&&!Qn?Et.live=!0:(Et.t=Kt.t0,Et.playing=Me.get("play")!=="0"),Me.get("mode")==="now"&&be.toggleTopicMode(),Me.get("room")&&setTimeout(()=>be.selectRoom(Me.get("room")),50),Me.has("legend")&&De.toggleLegend()}window.addEventListener("keydown",i=>{if(i.target&&/^(INPUT|SELECT|TEXTAREA)$/.test(i.target.tagName)||i.metaKey||i.ctrlKey||i.altKey)return;let t=i.key;t===" "?(be.togglePlay(),i.preventDefault()):t==="ArrowLeft"?(be.seek(Et.t-(i.shiftKey?6e5:6e4)),i.preventDefault()):t==="ArrowRight"?(be.seek(Et.t+(i.shiftKey?6e5:6e4)),i.preventDefault()):t==="["?be.jump(-1):t==="]"?be.jump(1):t==="l"||t==="L"?be.goLive():t==="r"||t==="R"?be.resetView():t==="c"||t==="C"?document.getElementById("btn-clouds").click():t==="t"||t==="T"?be.toggleTopicMode():t==="?"||t==="i"?De.toggleLegend():t==="Escape"&&(be.selectRoom(null),De.closeLegend(),jn(null,!0))});var Zs=ue.renderer.domElement,qs=null;Zs.addEventListener("pointerdown",i=>{qs={x:i.clientX,y:i.clientY}});Zs.addEventListener("pointerup",i=>{if(!qs)return;let t=Math.hypot(i.clientX-qs.x,i.clientY-qs.y);if(qs=null,t>5)return;let e=ds?ue.pick(i.clientX,i.clientY,$e.hitSpheres):null;if(e){jn(e.userData.topicIdx,!0,i.clientX,i.clientY);return}let n=ue.pick(i.clientX,i.clientY,ue.hitMeshes);n?be.selectRoom(n.userData.roomId):(be.selectRoom(null),jn(null,!0))});Zs.addEventListener("pointermove",i=>{if(i.buttons)return;let t=ds?ue.pick(i.clientX,i.clientY,$e.hitSpheres):null;if(t){jn(t.userData.topicIdx,!1,i.clientX,i.clientY),Zs.style.cursor="pointer";return}Et.stickyTopic||jn(null,!1),Zs.style.cursor=ue.pick(i.clientX,i.clientY,ue.hitMeshes)?"pointer":""});Js.addEventListener("pointerover",i=>{let t=i.target.closest&&i.target.closest(".lbl.cloud");t&&jn(+t.dataset.topic,!1,i.clientX,i.clientY)});Js.addEventListener("pointerout",i=>{i.target.closest&&i.target.closest(".lbl.cloud")&&!Et.stickyTopic&&jn(null,!1)});Js.addEventListener("click",i=>{let t=i.target.closest&&i.target.closest(".lbl.cloud");if(t){jn(+t.dataset.topic,!0,i.clientX,i.clientY);return}let e=i.target.closest&&i.target.closest(".lbl.room");if(e){let n=ue.labels.find(s=>s.el===e);n&&be.selectRoom(Et.selected===n.roomId?null:n.roomId)}});var $s=new Set;function jn(i,t,e,n){if(i==null){t&&(Et.stickyTopic=null),Et.stickyTopic||(Et.hlTopic=null,$e.setHighlight(null),De.setHighlightTopic(null),De.showTip(null),$s=new Set);return}let s=Kt.topics[i];s&&(t&&(Et.stickyTopic=Et.stickyTopic===s.id?null:s.id),Et.hlTopic=s.id,$e.setHighlight(s.id),De.setHighlightTopic(s.id),$s=new Set(Kt.sessions.filter(r=>r.topics.some(o=>o.id===s.id)).map(r=>r.roomId)),De.showTip($e.describe(i),e??0,n??0),t&&!Et.stickyTopic&&(Et.hlTopic=null,$e.setHighlight(null),De.setHighlightTopic(null),De.showTip(null),$s=new Set))}var Hy=Kt.locIds.length,ld=Wt.map(i=>Kt.locIds.indexOf(i.id)),cd=new Uint8Array(Hy);je.forEach(i=>{cd[Kt.locIds.indexOf(i.id)]=1});var hd=new Float32Array(Wt.length),ko=Wt.map(()=>"none"),Ec=Wt.map(()=>!1),Tc={};for(let[i,t]of Object.entries(Dn)){let e=new Ft(t),n=new Ft("#dbe7ff");e.lerp(n,.4),Tc[i]=[e.r,e.g,e.b]}var hs=Kt;function Vy(i){let t=Cc((i-hs.t0)/hs.step,0,hs.K-1),e=t|0,n=Math.min(hs.K-1,e+1),s=t-e;for(let r=0;r<Wt.length;r++){let o=hs.counts[ld[r]];hd[r]=(o[e]*(1-s)+o[n]*s)/Wt[r].cap}}function Ic(i){let t=Kt.at(i);for(let e=0;e<Wt.length;e++){let n=Wt[e].id,s=Kt.levelAt(n,i);ko[e]=s.idle&&s.level!=="running"?"none":s.level,Ec[e]=s.rec||t.rooms[n].rec;let r=Tc[ko[e]]||Tc.none;js.setLocColor(ld[e],r[0],r[1],r[2])}for(let e of ue.labels)if(e.roomId){let n=Wt.findIndex(r=>r.id===e.roomId),s=t.rooms[e.roomId];e.cnt.textContent=`\u2248${Math.round(s.count)}/${Wt[n].cap}`,e.bar.style.width=Math.min(100,s.fill*100).toFixed(0)+"%",e.bar.style.background=Dn[ko[n]]||Dn.none,e.barWrap.classList.toggle("proj",!Ec[n]),e.el.classList.toggle("hl",$s.has(e.roomId))}else e.hubId&&(e.cnt.textContent="\u2248"+Math.round(t.hubs[e.hubId].count));De.update(i,{live:Et.live,playing:Et.playing,demo:Qn,nowMs:zo(),liveAvailable:Rc(),src:Ac})}var td=performance.now(),ed=0;var nd=!0,us={frames:0,sum:0,max:0,worst:[]};function ud(i){requestAnimationFrame(ud);let t=Math.min(.1,(i-td)/1e3);td=i,Et.live?Et.t=Cc(zo(),Kt.t0,Kt.t1):Et.playing&&(Et.t+=t*Et.speed*6e4,Et.t>=Kt.t1&&(Et.t=Kt.t1,Et.playing=!1));let e=Et.t,n=i/1e3;Vy(e),js.update(e,n,cd),$e.update(e,t,n,nd),nd=!1;for(let s=0;s<Wt.length;s++)ue.setRoomState(Wt[s].id,hd[s],ko[s],Ec[s],Et.selected===Wt[s].id,$s.has(Wt[s].id));if(ue.stepAnim(i),ue.controls.update(),ue.updateLabels(),ue.renderer.render(ue.scene,ue.camera),De.setHead(e),i-ed>200&&(ed=i,Ic(e)),us.on){let s=performance.now()-i;us.frames++,us.sum+=s,s>us.max&&(us.max=s)}}function Gy(i){Kt=i,hs=i,js.setModel(i),$e.setModel(i),De.setModel(i),Ic(Et.t)}var Sc=!1;async function id(){if(!(Qn||Me.has("nofetch")||Sc)){Sc=!0;try{let i=new AbortController,t=setTimeout(()=>i.abort(),15e3),e=await fetch(zc+"?cb="+Math.floor(Date.now()/6e4),{signal:i.signal,cache:"no-store"});if(clearTimeout(t),!e.ok)throw new Error("http "+e.status);let n=await e.text(),s=Wo(n);if(s.length){let r=Kt.nSamples,o=Kt.lastSample;rd=s;let a=$o({sessions:ms,recording:od()});a.nSamples!==r||a.lastSample!==o?(Ac="live from GitHub",Gy(a)):Ac="live from GitHub"}}catch{}Sc=!1}}!Qn&&!Me.has("nofetch")&&(setTimeout(id,800),setInterval(id,6e4));Ic(Et.t);requestAnimationFrame(ud);window.AED={get state(){return{t:Et.t,playing:Et.playing,live:Et.live,speed:Et.speed,selected:Et.selected,topicMode:Et.topicMode}},app:be,model:()=>Kt,clouds:$e,scene:ue,crowd:js,perf:us,setTime:i=>be.seek(i),nowFn:zo};window.AED_READY=!0;})();
