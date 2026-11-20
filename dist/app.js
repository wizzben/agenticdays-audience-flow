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
In this talk we'll look at how agents actually use the web, where they fail (and why those failures map to WCAG violations), and what web development teams should do today. If you've been waiting for a business case for accessibility that lands with execs, this is it.`,topics:["AI Product    UX & Human-Agent Collaboration","AI Ethics & Responsibility"],speakers:[{name:"Tim Damen",slug:"tim-damen",url:"https://www.agenticdays.com/speaker/tim-damen",company:"ABN AMRO",tagline:"Head of Frontend Platforms & Accessibility Lead"}],qna_url:"https://www.agenticdays.com/q/46"}]};var zc=`{"t":1795174108841,"rooms":{"millennium":{"level":"open","label":"Open","target":"1274697"},"studio4":{"level":"open","label":"Open","target":"1301641"},"studio6":{"level":"open","label":"Open","target":"1290786"},"studio3":{"level":"open","label":"Open","target":"1293601"},"studio1":{"level":"open","label":"Open","target":"1247157"}}}
`;var er="Europe/Zurich";var Hc="https://raw.githubusercontent.com/wizzben/agenticdays-audience-flow/data/recording.jsonl",Wt=[{id:"millennium",name:"Millennium",short:"M",cap:500,floor:"main2"},{id:"studio4",name:"Studio 4",short:"S4",cap:50,floor:"n4"},{id:"studio6",name:"Studio 6",short:"S6",cap:50,floor:"n4"},{id:"studio3",name:"Studio 3",short:"S3",cap:50,floor:"n0"},{id:"studio1",name:"Studio 1",short:"S1",cap:50,floor:"main1"}],je=[{id:"century",name:"Century",short:"C",w:.3,floor:"main2"},{id:"hub2",name:"Hub 2",short:"H2",w:.4,floor:"main2"},{id:"hub4",name:"Hub 4",short:"H4",w:.3,floor:"n4"}],Vc=["studio1","hub2","millennium","century","studio3","hub4","studio6","studio4"],Gc={open:[.08,.7],filling:[.7,.95],full:[.95,1]},Wc={open:12*6e4,filling:6*6e4,full:3*6e4},Go=5*6e4,gs=15e4,nr=4*6e4,ei=18*6e4,ni={fill:.55,speed:.25,pressure:.2},Xc=20*6e4;function qc(i,t){let e=(i.format||"").toLowerCase();return t>100?e.includes("lightning")?.35:.5:e.includes("hands")?.85:e.includes("panel")?.8:.68}function Wo(i){if(i==null)return null;let t=String(i).toLowerCase().replace(/[^a-z0-9]+/g," ").trim();if(!t)return null;if(/\bmillennium\b/.test(t))return"millennium";if(/\bcentury\b/.test(t))return"century";let e=/\bstudio\s*([1-9])/.exec(t)||/\bs([1-9])\b/.exec(t)||/^studio([1-9])/.exec(t);if(e){let n="studio"+e[1];return Wt.some(s=>s.id===n)?n:null}if(e=/\bhub\s*([1-9])/.exec(t)||/^hub([1-9])/.exec(t),e){let n="hub"+e[1];return je.some(s=>s.id===n)?n:null}return null}var yd={open:"open","few seats left":"filling","no seats left":"full",started:"running"};function vd(i,t){let e=typeof i=="string"?i.trim().toLowerCase():"";if(e==="open"||e==="filling"||e==="full"||e==="running")return e;let n=typeof t=="string"?t.trim().toLowerCase():"";return yd[n]||null}function Xo(i){let t=[];if(typeof i=="string")for(let n of i.split(`
`)){let s=n.trim();if(s)try{t.push(JSON.parse(s))}catch{}}else Array.isArray(i)&&t.push(...i);let e=new Map;for(let n of t){if(!n||typeof n!="object")continue;let s=Number(n.t);if(!Number.isFinite(s)||s<1e12||s>4e12||!n.rooms||typeof n.rooms!="object")continue;let r={};for(let[o,a]of Object.entries(n.rooms)){let l=Wo(o);!l||!a||typeof a!="object"||(r[l]={level:vd(a.level,a.label),target:a.target!=null&&a.target!==""?String(a.target):null})}e.set(s,{t:s,rooms:r})}return[...e.values()].sort((n,s)=>n.t-s.t)}function Yc(...i){let t=new Map;for(let e of i)for(let n of e||[])t.set(n.t,n);return[...t.values()].sort((e,n)=>e.t-n.t)}var Zc=new Set("a about above across actually after again against all almost along also although always am among an and another any anyone are around as at away back based be because been before being below between both but by can cannot come could day did do does doing done down during each early easy either else end enough even ever every few first for from get gets getting give given go going good got great had has have having he her here him his how however i if in into is it its itself just keep know last least less let like little long look made make makes many may maybe me might more most much must my need never new next no not now of off often on once one only onto or other our out over own per put rather really right same say see seem several she should show shows since so some something still such take than that the their them then there these they thing things think this those through to together too took toward under until up upon us use used uses using very want was way we well went were what when where whether which while who whom why will with within without would yet you your youre weve theyre dont doesnt cant wont isnt thats lets talk session sessions workshop hands-on handson hands on attendees attendee audience participants walk learn learned learning discuss explore share story stories team teams years year time real world practical lessons look looking build building built working work works demo live approach approaches idea ideas part point case cases example examples including include includes provide provides better best different help helps able lot key main important possible simple complex today tomorrow people company companies engineers engineer developer developers ai agentic agent agents llm llms model models system systems tool tools code application applications app apps data".split(/\s+/)),$c=new Set("scale guide factory development html api apis sdk cli question questions production running review task practice human change small multiple enable expect environment orchestrate monday tuesday wednesday thursday friday saturday sunday january february march april may june july august september october november december swiss switzerland zurich europe european german english american america we ive youll theyve whats isn aren wasn don doesn didn won wouldn shouldn couldn imagine picture think today yes no why what who how when where here there then also but and the this that our your their its".split(/\s+/)),xd=new Set(["ai","agent","agents","agentic","and","with","for","in","of","the","practice","use","cases","human","open","source","production","learned","lessons"]);function ir(i){return String(i||"").replace(/\s+/g," ").trim()}var wd={"Lessons Learned & Anti-Patterns":"Lessons Learned","Multi-Agent Architectures":"Multi-Agent","MCP & Agent Protocols":"MCP & Protocols","AI Observability & Production":"Observability","Agent Frameworks":"Agent Frameworks","AI Evals & Testing":"Evals & Testing","AI Coding Tools":"Coding Tools","Enterprise AI Adoption & Governance":"Enterprise Adoption","Local AI, Inference & Open Models":"Local AI","Software Architecture with AI":"Architecture","AI Security":"Security","AI-Assisted Coding Practice":"AI-Assisted Coding","AI Ethics & Responsibility":"Ethics","Spec-Driven & Agentic SDLC":"Spec-Driven SDLC","AI Product UX & Human-Agent Collaboration":"Product UX","Industry & Vertical Use Cases":"Industry Cases","AI in DevOps & Platform Engineering":"DevOps & Platform","RAG & Knowledge Retrieval":"RAG","AI Community, Open Source & Education":"Community & OSS","AI Strategy & Value Realization":"Strategy & Value"};function On(i){return i=i.toLowerCase(),i.length>4&&i.endsWith("ies")?i.slice(0,-3)+"y":i.length>4&&i.endsWith("s")&&!/(ss|us|is|ous)$/.test(i)?i.slice(0,-1):i}function Kc(i){return(String(i||"").toLowerCase().match(/[a-z][a-z0-9+#.\-]*[a-z0-9+#]|[a-z]/g)||[]).map(t=>t.replace(/\.+$/,""))}function qo(i){return i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Jc(i,t,e={}){let n=e.maxKeywords??4,s=e.maxTotal??24,r=new Map;for(let w of t)for(let _ of w.topicsRaw||[]){let E=ir(_);if(!E)continue;let O="c:"+qo(E);r.has(O)||r.set(O,{id:O,label:E,short:wd[E]||E,kind:"curated"})}let o=new Map;for(let w of r.values())for(let _ of Kc(w.label))xd.has(_)||_.length<3||o.has(On(_))||o.set(On(_),w.id);let a={eval:"ai-evals-testing",evaluation:"ai-evals-testing",testing:"ai-evals-testing",rag:"rag-knowledge-retrieval",mcp:"mcp-agent-protocols",security:"ai-security",secure:"ai-security",governance:"enterprise-ai-adoption-governance",observability:"ai-observability-production",monitoring:"ai-observability-production",spec:"spec-driven-agentic-sdlc","multi-agent":"multi-agent-architectures",architecture:"software-architecture-with-ai",copilot:null};for(let[w,_]of Object.entries(a))_&&r.has("c:"+_)&&o.set(On(w),"c:"+_);let l=new Map,c=i.map(w=>{let _=new Map;for(let R of Kc(w.desc||"")){if(Zc.has(R)||$c.has(R)||R.length<5||/^\d/.test(R))continue;let z=On(R);_.set(z,(_.get(z)||0)+1)}let E=new Map,O=w.desc||"",D=/[A-Za-z][A-Za-z0-9+#.\-]*[A-Za-z0-9+#]|[A-Za-z]/g,B;for(;B=D.exec(O);){let R=B[0],z=R.toLowerCase();if(Zc.has(z)||z.length<3||$c.has(z)||/^ai-|-(native|driven|powered|based|first)$/.test(z))continue;let L=/[a-z][A-Z]|[A-Z]{2,}|[0-9]/.test(R),k=O.slice(Math.max(0,B.index-3),B.index).replace(/[\s"'(\[]+$/,""),Y=B.index===0||k===""||/[.!?:\n]$/.test(k)||/\n/.test(O.slice(Math.max(0,B.index-3),B.index));if(!(L||/^[A-Z]/.test(R)&&!Y))continue;let rt=On(R);E.set(rt,(E.get(rt)||0)+1),l.has(rt)||l.set(rt,R)}let U=new Map;for(let R of String(w.tools||"").split(/,|;|\/|\band\b|\+|\n/)){let z=R.trim().replace(/^(our|the|a|an)\s+/i,"");if(z.length<3||z.length>24||z.split(/\s+/).length>3||/take-away|not important|from scratch|building|stack|apis?$/i.test(z))continue;let L=z.toLowerCase();U.set(L,z)}return{id:w.id,terms:E,tools:U,plain:_}}),h=new Map,u=w=>h.set(w,(h.get(w)||0)+1);for(let w of c){for(let _ of w.terms.keys())u(_);for(let _ of w.plain.keys())u("p:"+_);for(let _ of w.tools.keys())u("tool:"+_)}let d=Math.max(1,c.length),p=new Map(c.map(w=>[w.id,w])),g=new Map,y=(w,_,E,O)=>{let D=g.get(w);D||g.set(w,D={key:w,label:_,score:0,per:new Map}),D.score+=O,D.per.set(E,(D.per.get(E)||0)+O)};for(let w of t){let _=p.get(w.id);if(_){for(let[E,O]of _.terms){let D=h.get(E)||1;if(D<2||D>d*.35)continue;let B=Math.log(d/D);y("w:"+E,l.get(E)||E,w.id,(1+Math.log(O))*B)}for(let[E,O]of _.tools){let D=h.get("tool:"+E)||1;D<2||D>d*.35||y("t:"+E,O,w.id,1.8*Math.log(d/D)+1)}}}let m=new Map,f=[];for(let w of g.values()){let _=w.key.slice(2),E=w.key[0]==="w"?o.get(_):o.get(On(_));if(E){m.has(E)||m.set(E,new Map);let O=m.get(E);for(let[D,B]of w.per)O.set(D,Math.max(O.get(D)||0,B))}else f.push(w)}f.sort((w,_)=>_.score-w.score);let M=[];for(let w of f){let _=w.label.toLowerCase();if(!M.some(E=>On(E.label.toLowerCase())===On(_)||E.label.toLowerCase().includes(_)||_.includes(E.label.toLowerCase()))&&!(w.per.size<1)&&(M.push(w),M.length>=n))break}for(let w of t){if((w.topicsRaw||[]).length||M.some(E=>E.per.has(w.id)))continue;let _=null;for(let E of f)E.per.has(w.id)&&(!_||E.per.get(w.id)>_.per.get(w.id))&&!M.includes(E)&&(_=E);if(_)M.push(_);else{let E=p.get(w.id),O=null,D=0;for(let[B,U]of E?E.plain:[]){let R=(1+Math.log(U))*Math.log(d/(h.get("p:"+B)||1));R>D&&h.get("p:"+B)<=d*.25&&(D=R,O=B)}if(O){let B=M.find(U=>U.key==="w:"+O);B?B.per.set(w.id,D):M.push({key:"w:"+O,label:O[0].toUpperCase()+O.slice(1),score:D,per:new Map([[w.id,D]])})}}}let x=new Map,v=new Map,I=w=>{let _=w.label;return/^[a-z]/.test(_)&&_===_.toLowerCase()&&w.key[0]==="w"?_[0].toUpperCase()+_.slice(1):_},C=M.map(w=>({id:"k:"+qo(w.label),label:I(w),short:I(w),kind:"keyword",_c:w}));for(let w of t){let _=[];for(let k of w.topicsRaw||[]){let Y="c:"+qo(ir(k));r.has(Y)&&!_.includes(Y)&&_.push(Y)}let E=new Map;{let k=null,Y=2.5;for(let[tt,rt]of m)rt.has(w.id)&&!_.includes(tt)&&rt.get(w.id)>Y&&(k=tt,Y=rt.get(w.id));k&&_.length<5&&E.set(k,.35)}let O=C.filter(k=>k._c.per.has(w.id)),D=O.reduce((k,Y)=>k+Y._c.per.get(w.id),0)||1,B=[],U=_.length+E.size,R=O.length?U?.78:0:1,z=O.length?U?.22:1:0;for(let k of _)B.push({id:k,w:R/Math.max(1,U)});for(let[k,Y]of E)B.push({id:k,w:R/Math.max(1,U)*Y});for(let k of O)B.push({id:k.id,w:z*k._c.per.get(w.id)/D});if(!B.length&&O.length===0){x.set(w.id,[]);continue}let L=B.reduce((k,Y)=>k+Y.w,0)||1;for(let k of B)k.w/=L,v.set(k.id,(v.get(k.id)||0)+k.w);x.set(w.id,B)}let P=[...r.values(),...C.map(({_c:w,..._})=>_)].map(w=>({...w,potential:v.get(w.id)||0})).filter(w=>w.potential>0).sort((w,_)=>_.potential-w.potential);P=P.slice(0,s);let N=new Set(P.map(w=>w.id));for(let[w,_]of x){let E=_.filter(D=>N.has(D.id)),O=E.reduce((D,B)=>D+B.w,0);x.set(w,O>0?E.map(D=>({id:D.id,w:D.w/O})):[])}return{topics:P,sessionTopics:x}}var Si=(i,t,e)=>i<t?t:i>e?e:i,sr=i=>(i=Si(i,0,1),i*i*(3-2*i));function Zo(i){let t=Array.isArray(i)?i:i&&i.sessions||[],e=[];for(let n of t){if(!n||!n.id)continue;let s=Date.parse(n.starts_at),r=Date.parse(n.ends_at);!Number.isFinite(s)||!Number.isFinite(r)||e.push({id:String(n.id),title:n.title||"",format:n.format||"",start:s,end:r,roomId:Wo(n.room),roomName:n.room||"",topicsRaw:(n.topics||[]).map(ir).filter(Boolean),desc:n.description||"",tools:n.main_tools||"",speakers:(n.speakers||[]).map(o=>o.name).filter(Boolean),company:(n.speakers||[]).map(o=>o.company).filter(Boolean),url:n.url||""})}return e.sort((n,s)=>n.start-s.start)}function _s(i,t=12,e=5){let s=(Array.isArray(i)?i:i&&i.sessions||[]).find(c=>typeof c.starts_at=="string"&&/^\d{4}-\d\d-\d\dT.*([+-]\d\d:\d\d|Z)$/.test(c.starts_at)),r=s?s.starts_at:"2026-11-20T09:00:00+01:00",o=r.slice(0,10),a=r.endsWith("Z")?"+00:00":r.slice(-6),l=Date.parse(`${o}T${String(t).padStart(2,"0")}:00:00${a}`);return{t0:l,t1:l+e*36e5}}function Sd(i){return i>=.95?"full":i>=.7?"filling":"open"}function Ad(i,t,e){let n=[],s=new Set(t.map(r=>r.id));for(let r of e){let o=r.rooms[i.roomId];if(!o||!o.level)continue;let a;if(o.target&&s.has(o.target))a=o.target===i.id;else{let l=null;for(let c of t)c.start-30*6e4<=r.t&&r.t<c.end&&(!l||c.start>l.start)&&(l=c);a=l&&l.id===i.id}a&&n.push({t:r.t,level:o.level})}return n}function Ed(i,t,e){let{S:n,E:s}={S:i.start,E:i.end},r=e.priorPeak,o=g=>r*sr((g-(n-ei))/(ei+2*6e4)),a=(g,y)=>{let m=t[g],f=t[g+1],[M,x]=Gc[m.level],v;if(f&&f.t-m.t<=Go)v=sr((y-m.t)/(f.t-m.t));else{let I=Math.max(0,(f?Math.min(y,f.t):y)-m.t);v=1-Math.exp(-I/Wc[m.level])}return M+(x-M)*v},l=new Array(t.length),c=null;for(let g=0;g<t.length;g++)if(t[g].level==="running"){if(c==null){let y=g-1;for(;y>=0&&t[y].level==="running";)y--;c=y>=0?a(y,t[g].t):e.carryIn!=null?e.carryIn:r}l[g]=c}else c=null;let h=t.length?t[t.length-1]:null,u=g=>{if(!t.length)return o(g);if(g<t[0].t){let x=t[0],v=x.level==="running"?l[0]:a(0,x.t),I=Math.min(n-ei,x.t);return v*sr((g-I)/Math.max(6e4,x.t-I))}let y=0,m=t.length-1;for(;y<m;){let x=y+m+1>>1;t[x].t<=g?y=x:m=x-1}let f=t[y],M=f.level==="running"?l[y]:a(y,g);return y===t.length-1&&g>h.t+gs&&f.level!=="running"&&(M=Math.max(M,o(g))),M},d=()=>u(s),p=null;return g=>g>=s?(p==null&&(p=d()),p*(1-sr((g-s)/nr))):u(g)}function jc(i,t){let e={open:0,filling:1,full:2,running:3};for(let n of i)if(e[n.level]>=e[t]&&n.level!=="running")return n.t;return null}function Td(i,t,e,n){let s=jc(e,"full"),r=jc(e,"filling"),o=r??s,a=o==null?0:Si((i.start-o)/Xc,0,1),l=t<=100,c=e.some(g=>g.level==="full"),h=e.some(g=>g.level==="filling"),u=c?l?1:.5:h?l?.4:.2:0,d=ni.fill*n+ni.speed*a+ni.pressure*u,p=e.length?e[0]:null;return{score:d,speed:a,pressure:u,tFull:s,tFilling:r,unmet:c&&l,confident:!!p&&p.level!=="running"}}function Cd(i,t){let e=i.map(o=>Math.max(0,Math.floor(o))),n=t-e.reduce((o,a)=>o+a,0),s=i.map((o,a)=>[Math.max(0,o)-e[a],a]).sort((o,a)=>a[0]-o[0]||o[1]-a[1]),r=0;for(;n>0;)e[s[r%s.length][1]]++,n--,r++;for(r=s.length-1;n<0;){let o=s[r][1];e[o]>0&&(e[o]--,n++),r=(r-1+s.length)%s.length}return e}function $o(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ko(i){let t=i.crowd??650,e=Zo(i.sessions),n=_s(i.sessions),s=i.t0??n.t0,r=i.t1??n.t1,o=e.filter(X=>X.start>=s&&X.start<r&&X.roomId&&Wt.some(it=>it.id===X.roomId)),a=(i.recording||[]).filter(X=>X&&Number.isFinite(X.t)),l=Math.floor((r-s)/3e4)+1,c=Object.fromEntries(Wt.map(X=>[X.id,X.cap])),h=a.map(X=>X.t),u=h.length?h[h.length-1]:null,d=h.length?h[0]:null,p=new Uint8Array(l);{let X=0;for(let it=0;it<l;it++){let ut=s+it*3e4;for(;X<h.length-1&&h[X+1]<=ut;)X++;let q=h[X],nt=h[X+1],T=0;q!=null&&((Math.abs(ut-q)<=gs||nt!=null&&ut>q&&nt-q<=Go&&ut<nt)&&(T=1),nt!=null&&Math.abs(nt-ut)<=gs&&(T=1)),p[it]=T}}let g={};for(let X of Wt)g[X.id]=o.filter(it=>it.roomId===X.id);let y=new Map(o.map(X=>[X.id,Ad(X,g[X.roomId],a)])),{topics:m,sessionTopics:f}=Jc(e.length?e:o,o),M=new Map(m.map((X,it)=>[X.id,it])),x=new Map,v=new Map;for(let X=0;X<2;X++){for(let ut of o){let q=c[ut.roomId],nt=y.get(ut.id),T=qc(ut,q),ft=f.get(ut.id)||[];if(X===1&&ft.length){let $=0,at=0;for(let et of ft)x.has(et.id)&&($+=x.get(et.id)*et.w,at+=et.w);at>0&&(T=Si(T*(1+.5*($/at-.5)),.15,1))}let lt=g[ut.roomId].indexOf(ut),ot=lt>0?g[ut.roomId][lt-1]:null,dt=null;ot&&ut.start-ot.end<=15*6e4&&v.get(ot.id)?.hasData&&(dt=v.get(ot.id).finalFill);let wt=Ed(ut,nt,{priorPeak:T,carryIn:dt}),_t=nt.length>0,A=0;for(let $=ut.start-ei;$<=ut.end;$+=3e4)A=Math.max(A,wt($));let b=wt(ut.end-1),W;if(_t)W=Td(ut,q,nt,A);else{let $=T>=.95?q<=100?1:.5:0;W={score:ni.fill*T+ni.speed*.3+ni.pressure*$,speed:.3,pressure:$,unmet:!1,confident:!1,tFull:null,tFilling:null}}v.set(ut.id,{curve:wt,hasData:_t,peak:A,finalFill:b,pop:W,prior:T})}let it=new Map;for(let ut of o){let q=v.get(ut.id);if(q.hasData)for(let nt of f.get(ut.id)||[]){let T=it.get(nt.id)||{s:0,w:0};T.s+=q.pop.score*nt.w,T.w+=nt.w,it.set(nt.id,T)}}x=new Map([...it].map(([ut,q])=>[ut,Si(q.s/q.w,0,1)]))}let I=Vc,C=I.length,P=Object.fromEntries(I.map((X,it)=>[X,it])),N=I.map(()=>new Float32Array(l)),w={};for(let X of Wt)w[X.id]=new Uint8Array(l);let _=new Float32Array(l),E=new Map(o.map(X=>[X.id,new Float32Array(l)])),O=new Map(o.map(X=>[X.id,new Uint8Array(l)])),D=je.reduce((X,it)=>X+it.w,0);for(let X=0;X<l;X++){let it=s+X*3e4,ut={},q=0;for(let ot of Wt)ut[ot.id]=0;for(let ot of o){let dt=v.get(ot.id);if(it<ot.start-ei-10*6e4||it>ot.end+nr+1e3)continue;let wt=dt.curve(it)*c[ot.roomId];ut[ot.roomId]+=wt,E.get(ot.id)[X]=wt,O.get(ot.id)[X]=dt.hasData&&p[X]?1:0}for(let ot of o){let dt=c[ot.roomId];if(ut[ot.roomId]>dt){let wt=dt/ut[ot.roomId];E.get(ot.id)[X]*=wt}}for(let ot of Wt)ut[ot.id]>ot.cap&&(ut[ot.id]=ot.cap),q+=ut[ot.id];let nt=t*(1-.06),T=q>nt?nt/q:1;_[X]=q-q*T;let ft=0;for(let ot of Wt){let dt=ut[ot.id]*T;N[P[ot.id]][X]=dt,ft+=dt}for(let ot of o)E.get(ot.id)[X]*=T;let lt=t-ft;for(let ot of je)N[P[ot.id]][X]=lt*ot.w/D;for(let ot of Wt){let dt=p[X];if(dt){let wt=g[ot.id].filter(_t=>it>=_t.start-ei&&it<=_t.end+nr);wt.length&&wt.every(_t=>!v.get(_t.id).hasData)&&(dt=0)}w[ot.id][X]=dt}}let B=m.length,U=m.map(()=>new Float32Array(l)),R=m.map(()=>new Float32Array(l)),z=m.map(()=>new Float32Array(l)),L=m.map(()=>new Float32Array(l));for(let X of o){let it=f.get(X.id)||[],ut=E.get(X.id),q=O.get(X.id);for(let nt of it){let T=M.get(nt.id);if(T==null)continue;let ft=U[T],lt=R[T],ot=z[T],dt=L[T];for(let wt=0;wt<l;wt++){let _t=ut[wt]*nt.w;if(_t===0)continue;ft[wt]+=_t,q[wt]||(ot[wt]+=_t);let A=_t*3e4/6e4;lt[wt]+=A,q[wt]||(dt[wt]+=A)}}}for(let X=0;X<B;X++){let it=0,ut=0;for(let q=0;q<l;q++)it+=R[X][q],R[X][q]=it,ut+=L[X][q],L[X][q]=ut}let k=X=>X.reduce((it,ut)=>{for(let q=0;q<l;q++)ut[q]>it&&(it=ut[q]);return it},1e-9),Y=t,tt=$o(20261120),rt=Array.from({length:Y},(X,it)=>it);for(let X=Y-1;X>0;X--){let it=Math.floor(tt()*(X+1));[rt[X],rt[it]]=[rt[it],rt[X]]}let bt=new Int32Array(Y);rt.forEach((X,it)=>{bt[X]=it});let Z=new Int8Array(Y*l),j=I.map(()=>new Int16Array(l)),pt=new Array(C+1);for(let X=0;X<l;X++){let it=Cd(I.map((ut,q)=>N[q][X]),Y);pt[0]=0;for(let ut=0;ut<C;ut++)pt[ut+1]=pt[ut]+it[ut],j[ut][X]=it[ut];for(let ut=0;ut<Y;ut++){let q=bt[ut],nt=0;for(;q>=pt[nt+1];)nt++;Z[ut*l+X]=nt}}let st=o.map(X=>{let it=v.get(X.id),ut=c[X.roomId];return{...X,cap:ut,topics:f.get(X.id)||[],hasData:it.hasData,pop:it.pop,peakFill:it.peak,peakCount:it.peak*ut,finalFill:it.finalFill,prior:it.prior,samples:y.get(X.id).length,points:y.get(X.id),curve:it.curve}}),vt={t0:s,t1:r,K:l,step:3e4,crowd:Y,sessions:st,rooms:Wt,hubs:je,locIds:I,topics:m,counts:N,intCounts:j,roomRec:w,overflow:_,covered:p,loc:Z,topicNow:U,topicCum:R,topicProjNow:z,topicProjCum:L,topicMaxNow:k(U),topicMaxCum:k(R),lastSample:u,firstSample:d,nSamples:a.length,samples:a,byRoom:g};return vt.at=X=>Rd(vt,X),vt.levelAt=(X,it)=>Id(vt,X,it),vt}function Rd(i,t){let e=Si((t-i.t0)/i.step,0,i.K-1),n=Math.floor(e),s=Math.min(i.K-1,n+1),r=e-n,o={};for(let l of i.rooms){let c=i.counts[i.locIds.indexOf(l.id)];o[l.id]={count:c[n]*(1-r)+c[s]*r,fill:(c[n]*(1-r)+c[s]*r)/l.cap,rec:!!i.roomRec[l.id][r<.5?n:s]}}let a={};for(let l of i.hubs){let c=i.counts[i.locIds.indexOf(l.id)];a[l.id]={count:c[n]*(1-r)+c[s]*r}}return{t,rooms:o,hubs:a,covered:!!i.covered[r<.5?n:s],overflow:i.overflow[n]*(1-r)+i.overflow[s]*r}}function Id(i,t,e){let n=Si(Math.round((e-i.t0)/i.step),0,i.K-1);if(i.roomRec[t][n]){let l=i.samples,c=0,h=l.length-1,u=-1;for(;c<=h;){let d=c+h>>1;l[d].t<=e+gs?(u=d,c=d+1):h=d-1}for(let d=u;d>=0&&e-l[d].t<10*6e4;d--){let p=l[d].rooms[t];if(p&&p.level)return{level:p.level,rec:!0}}}let s=i.locIds.indexOf(t),r=i.rooms.find(l=>l.id===t).cap,o=i.counts[s][n]/r;return i.sessions.find(l=>l.roomId===t&&e>=l.start&&e<l.end)?{level:"running",rec:!1}:{level:Sd(o),rec:!1,idle:o<.05}}var Pd={open:"Open",filling:"Few seats left",full:"No seats left",running:"Started"};function th(i,t={}){let e=_s(i),n=t.from??e.t0+20*6e4,s=t.to??e.t0+4.75*36e5,r=$o(t.seed??7),o=Zo(i).filter(u=>u.start>=e.t0&&u.roomId),a={};for(let u of o){let d=Wt.find(g=>g.id===u.roomId).cap,p=r();t.popularity&&t.popularity[u.id]!=null?p=t.popularity[u.id]:d>100&&(p=.15+p*.65),a[u.id]=p}let l=u=>u>=.85?{fill:-26,full:-14}:u>=.7?{fill:-14,full:-3}:u>=.5?{fill:-8,full:null}:u>=.3?{fill:-3,full:null}:{fill:null,full:null},c=[],h=t.gaps?[e.t0+2.6*36e5,e.t0+2.6*36e5+12*6e4]:null;for(let u=n;u<=s;u+=3e4){if(h&&u>=h[0]&&u<h[1]||t.gaps&&r()<.05)continue;let d={};for(let p of Wt){let g=o.filter(f=>f.roomId===p.id),y=g.find(f=>f.end>u)||g[g.length-1];if(!y)continue;let m="open";if(u>=y.end)m="open";else if(u>=y.start)m="running";else{let f=l(a[y.id]),M=(y.start-u)/6e4;f.full!=null&&M<=-f.full?m="full":f.fill!=null&&M<=-f.fill&&(m="filling")}d[p.id]={level:m,label:Pd[m],target:y.id}}c.push({t:u,rooms:d})}return c}var xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ld=0,eh=1,Dd=2;var _u=1,Ud=2,An=3,Yn=0,Oe=1,qe=2,Wn=0,qi=1,nh=2,ih=3,sh=4,Nd=5,hi=100,Od=101,Fd=102,kd=103,Bd=104,zd=200,Hd=201,Vd=202,Gd=203,La=204,Da=205,Wd=206,Xd=207,qd=208,Yd=209,Zd=210,$d=211,Kd=212,Jd=213,jd=214,Ua=0,Na=1,Oa=2,Ji=3,Fa=4,ka=5,Ba=6,za=7,ac=0,Qd=1,tf=2,Xn=0,ef=1,nf=2,sf=3,rf=4,of=5,af=6,lf=7;var yu=300,ji=301,Qi=302,Ha=303,Va=304,Ro=306,Ga=1e3,di=1001,Wa=1002,Ge=1003,cf=1004;var rr=1005;var un=1006,Jo=1007;var fi=1008;var Rn=1009,vu=1010,xu=1011,Us=1012,lc=1013,pi=1014,dn=1015,Ws=1016,cc=1017,hc=1018,ts=1020,wu=35902,Mu=1021,bu=1022,rn=1023,Su=1024,Au=1025,Yi=1026,es=1027,uc=1028,dc=1029,Eu=1030,fc=1031;var pc=1033,Br=33776,zr=33777,Hr=33778,Vr=33779,Xa=35840,qa=35841,Ya=35842,Za=35843,$a=36196,Ka=37492,Ja=37496,ja=37808,Qa=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,ol=37816,al=37817,ll=37818,cl=37819,hl=37820,ul=37821,Gr=36492,dl=36494,fl=36495,Tu=36283,pl=36284,ml=36285,gl=36286;var Wr=2300,_l=2301,jo=2302,rh=2400,oh=2401,ah=2402;var hf=3200,uf=3201;var mc=0,df=1,Gn="",Ne="srgb",ls="srgb-linear",Io="linear",ee="srgb";var Ai=7680;var lh=519,ff=512,pf=513,mf=514,Cu=515,gf=516,_f=517,yf=518,vf=519,yl=35044,gc=35048;var ch="300 es",Tn=2e3,Xr=2001,In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,Zi=Math.PI/180,Ns=180/Math.PI;function fn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function _c(i,t){return(i%t+t)%t}function xf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wf(i,t,e){return i!==t?(e-i)/(t-i):0}function Is(i,t,e){return(1-e)*i+e*t}function Mf(i,t,e,n){return Is(i,t,1-Math.exp(-e*n))}function bf(i,t=1){return t-Math.abs(_c(i,t*2)-t)}function Sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ef(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Tf(i,t){return i+Math.random()*(t-i)}function Cf(i){return i*(.5-Math.random())}function Rf(i){i!==void 0&&(hh=i);let t=hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function If(i){return i*Zi}function Pf(i){return i*Ns}function Lf(i){return(i&i-1)===0&&i!==0}function Df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ru={DEG2RAD:Zi,RAD2DEG:Ns,generateUUID:fn,clamp:_e,euclideanModulo:_c,mapLinear:xf,inverseLerp:wf,lerp:Is,damp:Mf,pingpong:bf,smoothstep:Sf,smootherstep:Af,randInt:Ef,randFloat:Tf,randFloatSpread:Cf,seededRandom:Rf,degToRad:If,radToDeg:Pf,isPowerOfTwo:Lf,ceilPowerOfTwo:Df,floorPowerOfTwo:Uf,setQuaternionFromProperEuler:Nf,normalize:te,denormalize:sn},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],M=s[1],x=s[4],v=s[7],I=s[2],C=s[5],P=s[8];return r[0]=o*y+a*M+l*I,r[3]=o*m+a*x+l*C,r[6]=o*f+a*v+l*P,r[1]=c*y+h*M+u*I,r[4]=c*m+h*x+u*C,r[7]=c*f+h*v+u*P,r[2]=d*y+p*M+g*I,r[5]=d*m+p*x+g*C,r[8]=d*f+p*v+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qo.makeScale(t,e)),this}rotate(t){return this.premultiply(Qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qo=new Vt;function Iu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Of(){let i=qr("canvas");return i.style.display="block",i}var uh={};function Cs(i){i in uh||(uh[i]=!0,console.warn(i))}function Ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?Io:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dh=[.64,.33,.3,.6,.15,.06],fh=[.2126,.7152,.0722],ph=[.3127,.329],mh=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[ls]:{primaries:dh,whitePoint:ph,transfer:Io,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:fh,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:dh,whitePoint:ph,transfer:ee,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:fh,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});var Ei,vl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=qr("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zf=0,Yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ta(s[o].image)):r.push(ta(s[o]))}else r=ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hf=0,ke=class i extends In{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,s=di,r=un,o=fi,a=rn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=fn(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=yu;ke.DEFAULT_ANISOTROPY=1;var pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,v=(p+1)/2,I=(f+1)/2,C=(h+d)/4,P=(u+y)/4,N=(g+m)/4;return x>v&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=P/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=N/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=N/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends In{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wl=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*y,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let I=Math.sqrt(x),C=Math.atan2(I,f*M);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}let v=a*M;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+y*v,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ea=new F,_h=new on,Ln=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(r,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),ar.subVectors(this.max,ys),Ti.subVectors(t.a,ys),Ci.subVectors(t.b,ys),Ri.subVectors(t.c,ys),Fn.subVectors(Ci,Ti),kn.subVectors(Ri,Ci),ii.subVectors(Ti,Ri);let e=[0,-Fn.z,Fn.y,0,-kn.z,kn.y,0,-ii.z,ii.y,Fn.z,0,-Fn.x,kn.z,0,-kn.x,ii.z,0,-ii.x,-Fn.y,Fn.x,0,-kn.y,kn.x,0,-ii.y,ii.x,0];return!na(e,Ti,Ci,Ri,ar)||(e=[1,0,0,0,1,0,0,0,1],!na(e,Ti,Ci,Ri,ar))?!1:(lr.crossVectors(Fn,kn),e=[lr.x,lr.y,lr.z],na(e,Ti,Ci,Ri,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xn=[new F,new F,new F,new F,new F,new F,new F,new F],Qe=new F,or=new Ln,Ti=new F,Ci=new F,Ri=new F,Fn=new F,kn=new F,ii=new F,ys=new F,ar=new F,lr=new F,si=new F;function na(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){si.fromArray(i,r);let a=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Vf=new Ln,vs=new F,ia=new F,Zn=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(ia)),this.expandByPoint(vs.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wn=new F,sa=new F,cr=new F,Bn=new F,ra=new F,hr=new F,oa=new F,mi=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sa.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(sa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(cr),a=Bn.dot(this.direction),l=-Bn.dot(cr),c=Bn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sa).addScaledVector(cr,d),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){ra.subVectors(e,t),hr.subVectors(n,t),oa.crossVectors(ra,hr);let o=this.direction.dot(oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);let l=a*this.direction.dot(hr.crossVectors(Bn,hr));if(l<0)return null;let c=a*this.direction.dot(ra.cross(Bn));if(c<0||l+c>o)return null;let h=-a*Bn.dot(oa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gf,t,Wf)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),zn.crossVectors(n,He),zn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),zn.crossVectors(n,He)),zn.normalize(),ur.crossVectors(He,zn),s[0]=zn.x,s[4]=ur.x,s[8]=He.x,s[1]=zn.y,s[5]=ur.y,s[9]=He.y,s[2]=zn.z,s[6]=ur.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],M=n[3],x=n[7],v=n[11],I=n[15],C=s[0],P=s[4],N=s[8],w=s[12],_=s[1],E=s[5],O=s[9],D=s[13],B=s[2],U=s[6],R=s[10],z=s[14],L=s[3],k=s[7],Y=s[11],tt=s[15];return r[0]=o*C+a*_+l*B+c*L,r[4]=o*P+a*E+l*U+c*k,r[8]=o*N+a*O+l*R+c*Y,r[12]=o*w+a*D+l*z+c*tt,r[1]=h*C+u*_+d*B+p*L,r[5]=h*P+u*E+d*U+p*k,r[9]=h*N+u*O+d*R+p*Y,r[13]=h*w+u*D+d*z+p*tt,r[2]=g*C+y*_+m*B+f*L,r[6]=g*P+y*E+m*U+f*k,r[10]=g*N+y*O+m*R+f*Y,r[14]=g*w+y*D+m*z+f*tt,r[3]=M*C+x*_+v*B+I*L,r[7]=M*P+x*E+v*U+I*k,r[11]=M*N+x*O+v*R+I*Y,r[15]=M*w+x*D+v*z+I*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+y*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],M=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,x=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,I=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,C=e*M+n*x+s*v+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return t[0]=M*P,t[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*P,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*f+n*l*f)*P,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*P,t[4]=x*P,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*P,t[8]=v*P,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*f-e*u*f)*P,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*P,t[12]=I*P,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*P,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*P,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,y=o*h,m=o*u,f=a*u,M=l*c,x=l*h,v=l*u,I=n.x,C=n.y,P=n.z;return s[0]=(1-(y+f))*I,s[1]=(p+v)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(d+f))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+x)*P,s[9]=(m-M)*P,s[10]=(1-(d+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);let c=1/r,h=1/o,u=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Tn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===Tn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h,g,y;if(a===Tn)g=(o+r)*u,y=-2*u;else if(a===Xr)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ii=new F,tn=new ne,Gf=new F(0,0,0),Wf=new F(1,1,1),zn=new F,ur=new F,He=new F,yh=new ne,vh=new on,an=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vh.setFromEuler(this),this.setFromQuaternion(vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xf=0,xh=new F,Pi=new on,Mn=new ne,dr=new F,xs=new F,qf=new F,Yf=new on,wh=new F(1,0,0),Mh=new F(0,1,0),bh=new F(0,0,1),Sh={type:"added"},Zf={type:"removed"},Li={type:"childadded",child:null},aa={type:"childremoved",child:null},Se=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new an,n=new on,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Vt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(wh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(xs,dr,this.up):Mn.lookAt(dr,xs,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new F(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new F,bn=new F,la=new F,Sn=new F,Di=new F,Ui=new F,Ah=new F,ca=new F,ha=new F,ua=new F,da=new pe,fa=new pe,pa=new pe,En=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),bn.subVectors(n,e),la.subVectors(t,e);let o=en.dot(en),a=en.dot(bn),l=en.dot(la),c=bn.dot(bn),h=bn.dot(la),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,n),pa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(da,r.x),o.addScaledVector(fa,r.y),o.addScaledVector(pa,r.z),o}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),bn.subVectors(t,e),en.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),en.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Di.subVectors(s,n),Ui.subVectors(r,n),ca.subVectors(t,n);let l=Di.dot(ca),c=Ui.dot(ca);if(l<=0&&c<=0)return e.copy(n);ha.subVectors(t,s);let h=Di.dot(ha),u=Ui.dot(ha);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Di,o);ua.subVectors(t,r);let p=Di.dot(ua),g=Ui.dot(ua);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ui,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ah.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ah,a);let f=1/(m+y+d);return o=y*f,a=d*f,e.copy(n).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=_c(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ma(o,r,t+1/3),this.g=ma(o,r,t),this.b=ma(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Zt.fromWorkingColorSpace(Te.copy(this),t),Math.round(_e(Te.r*255,0,255))*65536+Math.round(_e(Te.g*255,0,255))*256+Math.round(_e(Te.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ne){Zt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(fr);let n=Is(Hn.h,fr.h,e),s=Is(Hn.s,fr.s,e),r=Is(Hn.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Ft;Ft.NAMES=Pu;var $f=0,pn=class extends In{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=fn(),this.name="",this.blending=qi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mn=class extends pn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new F,pr=new ht,Fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yl,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),t}};var $r=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Kr=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kf=0,Xe=new ne,ga=new Se,Ni=new F,Ve=new Ln,ws=new Ln,we=new F,Ce=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iu(t)?Kr:$r)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ve.min,ws.min),Ve.expandByPoint(we),we.addVectors(Ve.max,ws.max),Ve.expandByPoint(we)):(Ve.expandByPoint(ws.min),Ve.expandByPoint(ws.max))}Ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(t,c),we.add(Ni)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new F,l[N]=new F;let c=new F,h=new F,u=new F,d=new ht,p=new ht,g=new ht,y=new F,m=new F;function f(N,w,_){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(E),a[N].add(y),a[w].add(y),a[_].add(y),l[N].add(m),l[w].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,w=M.length;N<w;++N){let _=M[N],E=_.start,O=_.count;for(let D=E,B=E+O;D<B;D+=3)f(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let x=new F,v=new F,I=new F,C=new F;function P(N){I.fromBufferAttribute(s,N),C.copy(I);let w=a[N];x.copy(w),x.sub(I.multiplyScalar(I.dot(w))).normalize(),v.crossVectors(C,w);let E=v.dot(l[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,E)}for(let N=0,w=M.length;N<w;++N){let _=M[N],E=_.start,O=_.count;for(let D=E,B=E+O;D<B;D+=3)P(t.getX(D+0)),P(t.getX(D+1)),P(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eh=new ne,ri=new mi,mr=new Zn,Th=new F,gr=new F,_r=new F,yr=new F,_a=new F,vr=new F,Ch=new F,xr=new F,ge=class extends Se{constructor(t=new Ce,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(_a.fromBufferAttribute(u,t),o?vr.addScaledVector(_a,h):vr.addScaledVector(_a.sub(e),h))}e.add(vr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(mr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(mr,Th)===null||ri.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(Eh.copy(r).invert(),ri.copy(t.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,I=x;v<I;v+=3){let C=a.getX(v),P=a.getX(v+1),N=a.getX(v+2);s=wr(this,f,t,n,c,h,u,C,P,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=wr(this,o,t,n,c,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,I=x;v<I;v+=3){let C=v,P=v+1,N=v+2;s=wr(this,f,t,n,c,h,u,C,P,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let M=m,x=m+1,v=m+2;s=wr(this,o,t,n,c,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Jf(i,t,e,n,s,r,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yn,a),l===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:i}}function wr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,gr),i.getVertexPosition(l,_r),i.getVertexPosition(c,yr);let h=Jf(i,t,e,n,gr,_r,yr,Ch);if(h){let u=new F;En.getBarycoord(Ch,gr,_r,yr,u),s&&(h.uv=En.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=En.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};En.getNormal(gr,_r,yr,d.normal),h.face=d,h.barycoord=u}return h}var $n=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(y,m,f,M,x,v,I,C,P,N,w){let _=v/P,E=I/N,O=v/2,D=I/2,B=C/2,U=P+1,R=N+1,z=0,L=0,k=new F;for(let Y=0;Y<R;Y++){let tt=Y*E-D;for(let rt=0;rt<U;rt++){let bt=rt*_-O;k[y]=bt*M,k[m]=tt*x,k[f]=B,c.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[f]=C>0?1:-1,h.push(k.x,k.y,k.z),u.push(rt/P),u.push(1-Y/N),z+=1}}for(let Y=0;Y<N;Y++)for(let tt=0;tt<P;tt++){let rt=d+tt+U*Y,bt=d+tt+U*(Y+1),Z=d+(tt+1)+U*(Y+1),j=d+(tt+1)+U*Y;l.push(rt,bt,j),l.push(bt,Z,j),L+=6}a.addGroup(p,L,w),p+=L,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function jf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Qf={clone:ns,merge:Pe},tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends pn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Jr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new F,Rh=new ht,Ih=new ht,Le=class extends Jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ih),e.subVectors(Ih,Rh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Oi=-90,Fi=1,Ml=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(Oi,Fi,t,e);s.layers=this.layers,this.add(s);let r=new Le(Oi,Fi,t,e);r.layers=this.layers,this.add(r);let o=new Le(Oi,Fi,t,e);o.layers=this.layers,this.add(o);let a=new Le(Oi,Fi,t,e);a.layers=this.layers,this.add(a);let l=new Le(Oi,Fi,t,e);l.layers=this.layers,this.add(l);let c=new Le(Oi,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jr=class extends ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bl=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Wn});r.uniforms.tEquirect.value=e;let o=new ge(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=un),new Ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ya=new F,np=new F,ip=new Vt,nn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ya.subVectors(n,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ip.getNormalMatrix(t),s=this.coplanarPoint(ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new Zn,Mr=new F,Fs=class{constructor(t=new nn,e=new nn,n=new nn,s=new nn,r=new nn,o=new nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+h,m+g,v+M).normalize(),n[3].setComponents(l-o,d-h,m-g,v-M).normalize(),n[4].setComponents(l-a,d-u,m-y,v-x).normalize(),e===Tn)n[5].setComponents(l+a,d+u,m+y,v+x).normalize();else if(e===Xr)n[5].setComponents(a,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Du(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qr=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let x=0;x<c;x++){let v=x*u-r;g.push(v,-M,0),y.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let x=M+c*f,v=M+c*(f+1),I=M+1+c*(f+1),C=M+1+c*f;p.push(x,v,C),p.push(v,I,C)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(y,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cp=`#define PI 3.141592653589793
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ip=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,dg=`#define DISTANCE
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
}`,fg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,_g=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,wg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,Ag=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Cg=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Ig=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 color;
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
}`,Og=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:yp,bumpmap_pars_fragment:vp,clipping_planes_fragment:xp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:bp,color_fragment:Sp,color_pars_fragment:Ap,color_pars_vertex:Ep,color_vertex:Tp,common:Cp,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:Op,envmap_fragment:Fp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Bp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Jp,envmap_vertex:Hp,fog_vertex:Vp,fog_pars_vertex:Gp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:$p,lights_pars_begin:Kp,lights_toon_fragment:jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:ym,morphnormal_vertex:vm,morphtarget_pars_vertex:xm,morphtarget_vertex:wm,normal_fragment_begin:Mm,normal_fragment_maps:bm,normal_pars_fragment:Sm,normal_pars_vertex:Am,normal_vertex:Em,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Dm,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Om,dithering_pars_fragment:Fm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:Ym,specularmap_fragment:Zm,specularmap_pars_fragment:$m,tonemapping_fragment:Km,tonemapping_pars_fragment:Jm,transmission_fragment:jm,transmission_pars_fragment:Qm,uv_pars_fragment:tg,uv_pars_vertex:eg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:og,backgroundCube_frag:ag,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:dg,distanceRGBA_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:_g,meshbasic_vert:yg,meshbasic_frag:vg,meshlambert_vert:xg,meshlambert_frag:wg,meshmatcap_vert:Mg,meshmatcap_frag:bg,meshnormal_vert:Sg,meshnormal_frag:Ag,meshphong_vert:Eg,meshphong_frag:Tg,meshphysical_vert:Cg,meshphysical_frag:Rg,meshtoon_vert:Ig,meshtoon_frag:Pg,points_vert:Lg,points_frag:Dg,shadow_vert:Ug,shadow_frag:Ng,sprite_vert:Og,sprite_frag:Fg},xt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},hn={basic:{uniforms:Pe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Pe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Pe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Pe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Pe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Pe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Pe([xt.points,xt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Pe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Pe([xt.common,xt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Pe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Pe([xt.sprite,xt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Pe([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Pe([xt.lights,xt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};hn.physical={uniforms:Pe([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var br={r:0,b:0,g:0},ai=new an,kg=new ne;function Bg(i,t,e,n,s,r,o){let a=new Ft(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function y(M){let x=!1,v=g(M);v===null?f(a,l):v&&v.isColor&&(f(v,1),x=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){let v=g(x);v&&(v.isCubeTexture||v.mapping===Ro)?(h===void 0&&(h=new ge(new $n(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ns(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ai.copy(x.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(ai)),h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ge(new Qr(2,2),new gn({name:"BackgroundMaterial",uniforms:ns(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,x){M.getRGB(br,Lu(i)),n.buffers.color.setClear(br.r,br.g,br.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:y,addToRenderList:m}}function zg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(_,E,O,D,B){let U=!1,R=u(D,O,E);r!==R&&(r=R,c(r.object)),U=p(_,D,O,B),U&&g(_,D,O,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(_,E,O,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,E,O){let D=O.wireframe===!0,B=n[_.id];B===void 0&&(B={},n[_.id]=B);let U=B[E.id];U===void 0&&(U={},B[E.id]=U);let R=U[D];return R===void 0&&(R=d(l()),U[D]=R),R}function d(_){let E=[],O=[],D=[];for(let B=0;B<e;B++)E[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:D,object:_,attributes:{},index:null}}function p(_,E,O,D){let B=r.attributes,U=E.attributes,R=0,z=O.getAttributes();for(let L in z)if(z[L].location>=0){let Y=B[L],tt=U[L];if(tt===void 0&&(L==="instanceMatrix"&&_.instanceMatrix&&(tt=_.instanceMatrix),L==="instanceColor"&&_.instanceColor&&(tt=_.instanceColor)),Y===void 0||Y.attribute!==tt||tt&&Y.data!==tt.data)return!0;R++}return r.attributesNum!==R||r.index!==D}function g(_,E,O,D){let B={},U=E.attributes,R=0,z=O.getAttributes();for(let L in z)if(z[L].location>=0){let Y=U[L];Y===void 0&&(L==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),L==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor));let tt={};tt.attribute=Y,Y&&Y.data&&(tt.data=Y.data),B[L]=tt,R++}r.attributes=B,r.attributesNum=R,r.index=D}function y(){let _=r.newAttributes;for(let E=0,O=_.length;E<O;E++)_[E]=0}function m(_){f(_,0)}function f(_,E){let O=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;O[_]=1,D[_]===0&&(i.enableVertexAttribArray(_),D[_]=1),B[_]!==E&&(i.vertexAttribDivisor(_,E),B[_]=E)}function M(){let _=r.newAttributes,E=r.enabledAttributes;for(let O=0,D=E.length;O<D;O++)E[O]!==_[O]&&(i.disableVertexAttribArray(O),E[O]=0)}function x(_,E,O,D,B,U,R){R===!0?i.vertexAttribIPointer(_,E,O,B,U):i.vertexAttribPointer(_,E,O,D,B,U)}function v(_,E,O,D){y();let B=D.attributes,U=O.getAttributes(),R=E.defaultAttributeValues;for(let z in U){let L=U[z];if(L.location>=0){let k=B[z];if(k===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(k=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(k=_.instanceColor)),k!==void 0){let Y=k.normalized,tt=k.itemSize,rt=t.get(k);if(rt===void 0)continue;let bt=rt.buffer,Z=rt.type,j=rt.bytesPerElement,pt=Z===i.INT||Z===i.UNSIGNED_INT||k.gpuType===lc;if(k.isInterleavedBufferAttribute){let st=k.data,vt=st.stride,X=k.offset;if(st.isInstancedInterleavedBuffer){for(let it=0;it<L.locationSize;it++)f(L.location+it,st.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<L.locationSize;it++)m(L.location+it);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let it=0;it<L.locationSize;it++)x(L.location+it,tt/L.locationSize,Z,Y,vt*j,(X+tt/L.locationSize*it)*j,pt)}else{if(k.isInstancedBufferAttribute){for(let st=0;st<L.locationSize;st++)f(L.location+st,k.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let st=0;st<L.locationSize;st++)m(L.location+st);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let st=0;st<L.locationSize;st++)x(L.location+st,tt/L.locationSize,Z,Y,tt*j,tt/L.locationSize*st*j,pt)}}else if(R!==void 0){let Y=R[z];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(L.location,Y);break;case 3:i.vertexAttrib3fv(L.location,Y);break;case 4:i.vertexAttrib4fv(L.location,Y);break;default:i.vertexAttrib1fv(L.location,Y)}}}}M()}function I(){N();for(let _ in n){let E=n[_];for(let O in E){let D=E[O];for(let B in D)h(D[B].object),delete D[B];delete E[O]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;let E=n[_.id];for(let O in E){let D=E[O];for(let B in D)h(D[B].object),delete D[B];delete E[O]}delete n[_.id]}function P(_){for(let E in n){let O=n[E];if(O[_.id]===void 0)continue;let D=O[_.id];for(let B in D)h(D[B].object),delete D[B];delete O[_.id]}}function N(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function Hg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let N=P===Ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==dn&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:I,maxSamples:C}}function Gg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new nn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,x=M*4,v=f.clippingState||null;l.value=v,v=h(g,d,x,p);for(let I=0;I!==x;++I)v[I]=e[I];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==y;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Wg(i){let t=new WeakMap;function e(o,a){return a===Ha?o.mapping=ji:a===Va&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ha||a===Va)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new bl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var to=class extends Jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Wi=4,Ph=[.125,.215,.35,.446,.526,.582],ui=20,va=new to,Lh=new Ft,xa=null,wa=0,Ma=0,ba=!1,ci=(1+Math.sqrt(5))/2,ki=1/ci,Dh=[new F(-ci,ki,0),new F(ci,ki,0),new F(-ki,0,ci),new F(ki,0,ci),new F(0,ci,-ki),new F(0,ci,ki),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],eo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xa,wa,Ma),this._renderer.xr.enabled=ba,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ws,format:rn,colorSpace:ls,depthBuffer:!1},s=Uh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(r)),this._blurMaterial=qg(r,t,e)}return s}_compileMaterial(t){let e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,va)}_sceneToCubeUV(t,e,n,s){let a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Lh),h.toneMapping=Xn,h.autoClear=!1;let p=new mn({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new ge(new $n,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(Lh),y=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;Sr(s,M*x,f>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ji||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,va)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dh[(s-r-1)%Dh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ge(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ui-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let f=[],M=0;for(let P=0;P<ui;++P){let N=P/y,w=Math.exp(-N*N/2);f.push(w),P===0?M+=w:P<m&&(M+=2*w)}for(let P=0;P<f.length;P++)f[P]=f[P]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let v=this._sizeLods[s],I=3*v*(s>x-Wi?s-x+Wi:0),C=4*(this._cubeSize-v);Sr(e,I,C,3*v,2*v),l.setRenderTarget(e),l.render(u,va)}};function Xg(i){let t=[],e=[],n=[],s=i,r=i-Wi+1+Ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Wi?l=Ph[o-i+Wi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,M=new Float32Array(y*g*p),x=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let C=0;C<p;C++){let P=C%3*2/3-1,N=C>2?0:-1,w=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];M.set(w,y*g*C),x.set(d,m*g*C);let _=[C,C,C,C,C,C];v.set(_,f*g*C)}let I=new Ce;I.setAttribute("position",new Fe(M,y)),I.setAttribute("uv",new Fe(x,m)),I.setAttribute("faceIndex",new Fe(v,f)),t.push(I),s>Wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uh(i,t,e){let n=new Pn(i,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qg(i,t,e){let n=new Float32Array(ui),s=new F(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Nh(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Oh(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function Yg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ha||l===Va,h=l===ji||l===Qi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new eo(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new eo(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $g(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let M=p.array;y=p.version;for(let x=0,v=M.length;x<v;x+=3){let I=M[x+0],C=M[x+1],P=M[x+2];d.push(I,C,C,P,P,I)}}else if(g!==void 0){let M=g.array;y=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){let I=x+0,C=x+1,P=x+2;d.push(I,C,C,P,P,I)}}else return;let m=new(Iu(d)?Kr:$r)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Kg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*y[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jg(i,t,e){let n=new WeakMap,s=new pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),y===!0&&(x=3);let v=a.attributes.position.count*x,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*I*4*u),P=new Zr(C,v,I,u);P.type=dn,P.needsUpdate=!0;let N=x*4;for(let _=0;_<u;_++){let E=m[_],O=f[_],D=M[_],B=v*I*4*_;for(let U=0;U<E.count;U++){let R=U*N;p===!0&&(s.fromBufferAttribute(E,U),C[B+R+0]=s.x,C[B+R+1]=s.y,C[B+R+2]=s.z,C[B+R+3]=0),g===!0&&(s.fromBufferAttribute(O,U),C[B+R+4]=s.x,C[B+R+5]=s.y,C[B+R+6]=s.z,C[B+R+7]=0),y===!0&&(s.fromBufferAttribute(D,U),C[B+R+8]=s.x,C[B+R+9]=s.y,C[B+R+10]=s.z,C[B+R+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ht(v,I)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Qg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var no=class extends ke{constructor(t,e,n,s,r,o,a,l,c,h=Yi){if(h!==Yi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=pi),n===void 0&&h===es&&(n=ts),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Uu=new ke,Fh=new no(1,1),Nu=new Zr,Ou=new wl,Fu=new jr,kh=[],Bh=[],zh=new Float32Array(16),Hh=new Float32Array(9),Vh=new Float32Array(4);function cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Po(i,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function s0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Vh.set(n),i.uniformMatrix2fv(this.addr,!1,Vh),ve(e,n)}}function r0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Hh.set(n),i.uniformMatrix3fv(this.addr,!1,Hh),ve(e,n)}}function o0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),ve(e,n)}}function a0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function u0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function m0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fh.compareFunction=Cu,r=Fh):r=Uu,e.setTexture2D(t||r,s)}function g0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ou,s)}function _0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fu,s)}function y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nu,s)}function v0(i){switch(i){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return y0}}function x0(i,t){i.uniform1fv(this.addr,t)}function w0(i,t){let e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function M0(i,t){let e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function b0(i,t){let e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function S0(i,t){let e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function A0(i,t){let e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E0(i,t){let e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function R0(i,t){i.uniform3iv(this.addr,t)}function I0(i,t){i.uniform4iv(this.addr,t)}function P0(i,t){i.uniform1uiv(this.addr,t)}function L0(i,t){i.uniform2uiv(this.addr,t)}function D0(i,t){i.uniform3uiv(this.addr,t)}function U0(i,t){i.uniform4uiv(this.addr,t)}function N0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Uu,r[o])}function O0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ou,r[o])}function F0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fu,r[o])}function k0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nu,r[o])}function B0(i){switch(i){case 5126:return x0;case 35664:return w0;case 35665:return M0;case 35666:return b0;case 35674:return S0;case 35675:return A0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return I0;case 5125:return P0;case 36294:return L0;case 36295:return D0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return k0}}var Sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v0(e.type)}},Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B0(e.type)}},El=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Sa=/(\w+)(\])?(\[|\.)?/g;function Gh(i,t){i.seq.push(t),i.map[t.id]=t}function z0(i,t,e){let n=i.name,s=n.length;for(Sa.lastIndex=0;;){let r=Sa.exec(n),o=Sa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gh(e,c===void 0?new Sl(a,i,t):new Al(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new El(a),Gh(e,u)),e=u}}}var Ki=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);z0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Wh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var H0=37297,V0=0;function G0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Xh=new Vt;function W0(i){Zt._getMatrix(Xh,Zt.workingColorSpace,i);let t=`mat3( ${Xh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Io:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+G0(i.getShaderSource(t),o)}else return s}function X0(i,t){let e=W0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function q0(i,t){let e;switch(t){case ef:e="Linear";break;case nf:e="Reinhard";break;case sf:e="Cineon";break;case rf:e="ACESFilmic";break;case af:e="AgX";break;case lf:e="Neutral";break;case of:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ar=new F;function Y0(){Zt.getLuminanceCoefficients(Ar);let i=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function $0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function K0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function Yh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(J0,Q0)}var j0=new Map;function Q0(i,t){let e=Xt[t];if(e===void 0){let n=j0.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tl(e)}var t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(i){return i.replace(t_,e_)}function e_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function n_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_u?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ud?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function i_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Qi&&(t="ENVMAP_MODE_REFRACTION"),t}function r_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ac:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function o_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function a_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=n_(e),c=i_(e),h=s_(e),u=r_(e),d=o_(e),p=Z0(e),g=$0(r),y=s.createProgram(),m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),f.length>0&&(f+=`
`)):(m=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),f=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,X0("linearToOutputTexel",e.outputColorSpace),Y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Tl(o),o=Yh(o,e),o=Zh(o,e),a=Tl(a),a=Yh(a,e),a=Zh(a,e),o=$h(o),a=$h(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=M+m+o,v=M+f+a,I=Wh(s,s.VERTEX_SHADER,x),C=Wh(s,s.FRAGMENT_SHADER,v);s.attachShader(y,I),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(E){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y).trim(),D=s.getShaderInfoLog(I).trim(),B=s.getShaderInfoLog(C).trim(),U=!0,R=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,C);else{let z=qh(s,I,"vertex"),L=qh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+O+`
`+z+`
`+L)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||B==="")&&(R=!1);R&&(E.diagnostics={runnable:U,programLog:O,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(I),s.deleteShader(C),N=new Ki(s,y),w=K0(s,y)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,H0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=C,this}var l_=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rl(t),e.set(t,n)),n}},Rl=class{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}};function c_(i,t,e,n,s,r,o){let a=new Os,l=new Cl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,_,E,O,D){let B=O.fog,U=D.geometry,R=w.isMeshStandardMaterial?O.environment:null,z=(w.isMeshStandardMaterial?e:t).get(w.envMap||R),L=z&&z.mapping===Ro?z.image.height:null,k=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,tt=Y!==void 0?Y.length:0,rt=0;U.morphAttributes.position!==void 0&&(rt=1),U.morphAttributes.normal!==void 0&&(rt=2),U.morphAttributes.color!==void 0&&(rt=3);let bt,Z,j,pt;if(k){let Qt=hn[k];bt=Qt.vertexShader,Z=Qt.fragmentShader}else bt=w.vertexShader,Z=w.fragmentShader,l.update(w),j=l.getVertexShaderID(w),pt=l.getFragmentShaderID(w);let st=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),X=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,ut=!!w.map,q=!!w.matcap,nt=!!z,T=!!w.aoMap,ft=!!w.lightMap,lt=!!w.bumpMap,ot=!!w.normalMap,dt=!!w.displacementMap,wt=!!w.emissiveMap,_t=!!w.metalnessMap,A=!!w.roughnessMap,b=w.anisotropy>0,W=w.clearcoat>0,$=w.dispersion>0,at=w.iridescence>0,et=w.sheen>0,Ct=w.transmission>0,yt=b&&!!w.anisotropyMap,Et=W&&!!w.clearcoatMap,qt=W&&!!w.clearcoatNormalMap,mt=W&&!!w.clearcoatRoughnessMap,It=at&&!!w.iridescenceMap,Ot=at&&!!w.iridescenceThicknessMap,kt=et&&!!w.sheenColorMap,Pt=et&&!!w.sheenRoughnessMap,Yt=!!w.specularMap,Gt=!!w.specularColorMap,re=!!w.specularIntensityMap,H=Ct&&!!w.transmissionMap,Mt=Ct&&!!w.thicknessMap,Q=!!w.gradientMap,ct=!!w.alphaMap,Tt=w.alphaTest>0,St=!!w.alphaHash,zt=!!w.extensions,fe=Xn;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(fe=i.toneMapping);let Ae={shaderID:k,shaderType:w.type,shaderName:w.name,vertexShader:bt,fragmentShader:Z,defines:w.defines,customVertexShaderID:j,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:X,instancingColor:X&&D.instanceColor!==null,instancingMorph:X&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ls,alphaToCoverage:!!w.alphaToCoverage,map:ut,matcap:q,envMap:nt,envMapMode:nt&&z.mapping,envMapCubeUVHeight:L,aoMap:T,lightMap:ft,bumpMap:lt,normalMap:ot,displacementMap:d&&dt,emissiveMap:wt,normalMapObjectSpace:ot&&w.normalMapType===df,normalMapTangentSpace:ot&&w.normalMapType===mc,metalnessMap:_t,roughnessMap:A,anisotropy:b,anisotropyMap:yt,clearcoat:W,clearcoatMap:Et,clearcoatNormalMap:qt,clearcoatRoughnessMap:mt,dispersion:$,iridescence:at,iridescenceMap:It,iridescenceThicknessMap:Ot,sheen:et,sheenColorMap:kt,sheenRoughnessMap:Pt,specularMap:Yt,specularColorMap:Gt,specularIntensityMap:re,transmission:Ct,transmissionMap:H,thicknessMap:Mt,gradientMap:Q,opaque:w.transparent===!1&&w.blending===qi&&w.alphaToCoverage===!1,alphaMap:ct,alphaTest:Tt,alphaHash:St,combine:w.combine,mapUv:ut&&y(w.map.channel),aoMapUv:T&&y(w.aoMap.channel),lightMapUv:ft&&y(w.lightMap.channel),bumpMapUv:lt&&y(w.bumpMap.channel),normalMapUv:ot&&y(w.normalMap.channel),displacementMapUv:dt&&y(w.displacementMap.channel),emissiveMapUv:wt&&y(w.emissiveMap.channel),metalnessMapUv:_t&&y(w.metalnessMap.channel),roughnessMapUv:A&&y(w.roughnessMap.channel),anisotropyMapUv:yt&&y(w.anisotropyMap.channel),clearcoatMapUv:Et&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:qt&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&y(w.sheenRoughnessMap.channel),specularMapUv:Yt&&y(w.specularMap.channel),specularColorMapUv:Gt&&y(w.specularColorMap.channel),specularIntensityMapUv:re&&y(w.specularIntensityMap.channel),transmissionMapUv:H&&y(w.transmissionMap.channel),thicknessMapUv:Mt&&y(w.thicknessMap.channel),alphaMapUv:ct&&y(w.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ot||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(ut||ct),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:vt,skinning:D.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:rt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:ut&&w.map.isVideoTexture===!0&&Zt.getTransfer(w.map.colorSpace)===ee,decodeVideoTextureEmissive:wt&&w.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(w.emissiveMap.colorSpace)===ee,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qe,flipSided:w.side===Oe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&w.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function f(w){let _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(let E in w.defines)_.push(E),_.push(w.defines[E]);return w.isRawShaderMaterial===!1&&(M(_,w),x(_,w),_.push(i.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function M(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function x(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let _=g[w.type],E;if(_){let O=hn[_];E=Qf.clone(O.uniforms)}else E=w.uniforms;return E}function I(w,_){let E;for(let O=0,D=h.length;O<D;O++){let B=h[O];if(B.cacheKey===_){E=B,++E.usedTimes;break}}return E===void 0&&(E=new a_(i,_,w,r),h.push(E)),E}function C(w){if(--w.usedTimes===0){let _=h.indexOf(w);h[_]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:N}}function h_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||u_),n.length>1&&n.sort(d||Jh),s.length>1&&s.sort(d||Jh)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function d_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new jh,i.set(n,[o])):s>=r.length?(o=new jh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function f_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ft};break;case"SpotLight":e={position:new F,direction:new F,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function p_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var m_=0;function g_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function __(i){let t=new f_,e=p_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new ne,o=new ne;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,M=0,x=0,v=0,I=0,C=0,P=0;c.sort(g_);for(let w=0,_=c.length;w<_;w++){let E=c[w],O=E.color,D=E.intensity,B=E.distance,U=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=O.r*D,u+=O.g*D,d+=O.b*D;else if(E.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(E.sh.coefficients[R],D);P++}else if(E.isDirectionalLight){let R=t.get(E);if(R.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let z=E.shadow,L=e.get(E);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,n.directionalShadow[p]=L,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=E.shadow.matrix,M++}n.directional[p]=R,p++}else if(E.isSpotLight){let R=t.get(E);R.position.setFromMatrixPosition(E.matrixWorld),R.color.copy(O).multiplyScalar(D),R.distance=B,R.coneCos=Math.cos(E.angle),R.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),R.decay=E.decay,n.spot[y]=R;let z=E.shadow;if(E.map&&(n.spotLightMap[I]=E.map,I++,z.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[y]=z.matrix,E.castShadow){let L=e.get(E);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,n.spotShadow[y]=L,n.spotShadowMap[y]=U,v++}y++}else if(E.isRectAreaLight){let R=t.get(E);R.color.copy(O).multiplyScalar(D),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=R,m++}else if(E.isPointLight){let R=t.get(E);if(R.color.copy(E.color).multiplyScalar(E.intensity),R.distance=E.distance,R.decay=E.decay,E.castShadow){let z=E.shadow,L=e.get(E);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,L.shadowCameraNear=z.camera.near,L.shadowCameraFar=z.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=R,g++}else if(E.isHemisphereLight){let R=t.get(E);R.skyColor.copy(E.color).multiplyScalar(D),R.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[f]=R,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==M||N.numPointShadows!==x||N.numSpotShadows!==v||N.numSpotMaps!==I||N.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,N.directionalLength=p,N.pointLength=g,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=M,N.numPointShadows=x,N.numSpotShadows=v,N.numSpotMaps=I,N.numLightProbes=P,n.version=m_++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let x=c[f];if(x.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Qh(i){let t=new __(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function y_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Qh(i),t.set(s,[a])):r>=o.length?(a=new Qh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Il=class extends pn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pl=class extends pn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`;function w_(i,t,e){let n=new Fs,s=new ht,r=new ht,o=new pe,a=new Il({depthPacking:uf}),l=new Pl,c={},h=e.maxTextureSize,u={[Yn]:Oe,[Oe]:Yn,[qe]:qe},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:v_,fragmentShader:x_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let f=this.type;this.render=function(C,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let w=i.getRenderTarget(),_=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Wn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let D=f!==An&&this.type===An,B=f===An&&this.type!==An;for(let U=0,R=C.length;U<R;U++){let z=C[U],L=z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let k=L.getFrameExtents();if(s.multiply(k),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,L.mapSize.y=r.y)),L.map===null||D===!0||B===!0){let tt=this.type!==An?{minFilter:Ge,magFilter:Ge}:{};L.map!==null&&L.map.dispose(),L.map=new Pn(s.x,s.y,tt),L.map.texture.name=z.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let Y=L.getViewportCount();for(let tt=0;tt<Y;tt++){let rt=L.getViewport(tt);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),O.viewport(o),L.updateMatrices(z,tt),n=L.getFrustum(),v(P,N,L.camera,z,this.type)}L.isPointLightShadow!==!0&&this.type===An&&M(L,N),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,_,E)};function M(C,P){let N=t.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,N,d,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,N,p,y,null)}function x(C,P,N,w){let _=null,E=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)_=E;else if(_=N.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let O=_.uuid,D=P.uuid,B=c[O];B===void 0&&(B={},c[O]=B);let U=B[D];U===void 0&&(U=_.clone(),B[D]=U,P.addEventListener("dispose",I)),_=U}if(_.visible=P.visible,_.wireframe=P.wireframe,w===An?_.side=P.shadowSide!==null?P.shadowSide:P.side:_.side=P.shadowSide!==null?P.shadowSide:u[P.side],_.alphaMap=P.alphaMap,_.alphaTest=P.alphaTest,_.map=P.map,_.clipShadows=P.clipShadows,_.clippingPlanes=P.clippingPlanes,_.clipIntersection=P.clipIntersection,_.displacementMap=P.displacementMap,_.displacementScale=P.displacementScale,_.displacementBias=P.displacementBias,_.wireframeLinewidth=P.wireframeLinewidth,_.linewidth=P.linewidth,N.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=i.properties.get(_);O.light=N}return _}function v(C,P,N,w,_){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===An)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let D=t.update(C),B=C.material;if(Array.isArray(B)){let U=D.groups;for(let R=0,z=U.length;R<z;R++){let L=U[R],k=B[L.materialIndex];if(k&&k.visible){let Y=x(C,k,w,_);C.onBeforeShadow(i,C,P,N,D,Y,L),i.renderBufferDirect(N,null,D,Y,C,L),C.onAfterShadow(i,C,P,N,D,Y,L)}}}else if(B.visible){let U=x(C,B,w,_);C.onBeforeShadow(i,C,P,N,D,U,null),i.renderBufferDirect(N,null,D,U,C,null),C.onAfterShadow(i,C,P,N,D,U,null)}}let O=C.children;for(let D=0,B=O.length;D<B;D++)v(O[D],P,N,w,_)}function I(C){C.target.removeEventListener("dispose",I);for(let N in c){let w=c[N],_=C.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}var M_={[Ua]:Na,[Oa]:Ba,[Fa]:za,[Ji]:ka,[Na]:Ua,[Ba]:Oa,[za]:Fa,[ka]:Ji};function b_(i,t){function e(){let H=!1,Mt=new pe,Q=null,ct=new pe(0,0,0,0);return{setMask:function(Tt){Q!==Tt&&!H&&(i.colorMask(Tt,Tt,Tt,Tt),Q=Tt)},setLocked:function(Tt){H=Tt},setClear:function(Tt,St,zt,fe,Ae){Ae===!0&&(Tt*=fe,St*=fe,zt*=fe),Mt.set(Tt,St,zt,fe),ct.equals(Mt)===!1&&(i.clearColor(Tt,St,zt,fe),ct.copy(Mt))},reset:function(){H=!1,Q=null,ct.set(-1,0,0,0)}}}function n(){let H=!1,Mt=!1,Q=null,ct=null,Tt=null;return{setReversed:function(St){if(Mt!==St){let zt=t.get("EXT_clip_control");Mt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let fe=Tt;Tt=null,this.setClear(fe)}Mt=St},getReversed:function(){return Mt},setTest:function(St){St?st(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(St){Q!==St&&!H&&(i.depthMask(St),Q=St)},setFunc:function(St){if(Mt&&(St=M_[St]),ct!==St){switch(St){case Ua:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=St}},setLocked:function(St){H=St},setClear:function(St){Tt!==St&&(Mt&&(St=1-St),i.clearDepth(St),Tt=St)},reset:function(){H=!1,Q=null,ct=null,Tt=null,Mt=!1}}}function s(){let H=!1,Mt=null,Q=null,ct=null,Tt=null,St=null,zt=null,fe=null,Ae=null;return{setTest:function(Qt){H||(Qt?st(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Qt){Mt!==Qt&&!H&&(i.stencilMask(Qt),Mt=Qt)},setFunc:function(Qt,Ke,yn){(Q!==Qt||ct!==Ke||Tt!==yn)&&(i.stencilFunc(Qt,Ke,yn),Q=Qt,ct=Ke,Tt=yn)},setOp:function(Qt,Ke,yn){(St!==Qt||zt!==Ke||fe!==yn)&&(i.stencilOp(Qt,Ke,yn),St=Qt,zt=Ke,fe=yn)},setLocked:function(Qt){H=Qt},setClear:function(Qt){Ae!==Qt&&(i.clearStencil(Qt),Ae=Qt)},reset:function(){H=!1,Mt=null,Q=null,ct=null,Tt=null,St=null,zt=null,fe=null,Ae=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,M=null,x=null,v=null,I=null,C=null,P=new Ft(0,0,0),N=0,w=!1,_=null,E=null,O=null,D=null,B=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,z=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(L)[1]),R=z>=1):L.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),R=z>=2);let k=null,Y={},tt=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),bt=new pe().fromArray(tt),Z=new pe().fromArray(rt);function j(H,Mt,Q,ct){let Tt=new Uint8Array(4),St=i.createTexture();i.bindTexture(H,St),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<Q;zt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Mt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return St}let pt={};pt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Ji),lt(!1),ot(eh),st(i.CULL_FACE),T(Wn);function st(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function vt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function X(H,Mt){return u[H]!==Mt?(i.bindFramebuffer(H,Mt),u[H]=Mt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function it(H,Mt){let Q=p,ct=!1;if(H){Q=d.get(Mt),Q===void 0&&(Q=[],d.set(Mt,Q));let Tt=H.textures;if(Q.length!==Tt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let St=0,zt=Tt.length;St<zt;St++)Q[St]=i.COLOR_ATTACHMENT0+St;Q.length=Tt.length,ct=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ct=!0);ct&&i.drawBuffers(Q)}function ut(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let q={[hi]:i.FUNC_ADD,[Od]:i.FUNC_SUBTRACT,[Fd]:i.FUNC_REVERSE_SUBTRACT};q[kd]=i.MIN,q[Bd]=i.MAX;let nt={[zd]:i.ZERO,[Hd]:i.ONE,[Vd]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[qd]:i.DST_COLOR,[Wd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[Yd]:i.ONE_MINUS_DST_COLOR,[Xd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[Kd]:i.ONE_MINUS_CONSTANT_COLOR,[Jd]:i.CONSTANT_ALPHA,[jd]:i.ONE_MINUS_CONSTANT_ALPHA};function T(H,Mt,Q,ct,Tt,St,zt,fe,Ae,Qt){if(H===Wn){y===!0&&(vt(i.BLEND),y=!1);return}if(y===!1&&(st(i.BLEND),y=!0),H!==Nd){if(H!==m||Qt!==w){if((f!==hi||v!==hi)&&(i.blendEquation(i.FUNC_ADD),f=hi,v=hi),Qt)switch(H){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,x=null,I=null,C=null,P.set(0,0,0),N=0,m=H,w=Qt}return}Tt=Tt||Mt,St=St||Q,zt=zt||ct,(Mt!==f||Tt!==v)&&(i.blendEquationSeparate(q[Mt],q[Tt]),f=Mt,v=Tt),(Q!==M||ct!==x||St!==I||zt!==C)&&(i.blendFuncSeparate(nt[Q],nt[ct],nt[St],nt[zt]),M=Q,x=ct,I=St,C=zt),(fe.equals(P)===!1||Ae!==N)&&(i.blendColor(fe.r,fe.g,fe.b,Ae),P.copy(fe),N=Ae),m=H,w=!1}function ft(H,Mt){H.side===qe?vt(i.CULL_FACE):st(i.CULL_FACE);let Q=H.side===Oe;Mt&&(Q=!Q),lt(Q),H.blending===qi&&H.transparent===!1?T(Wn):T(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let ct=H.stencilWrite;a.setTest(ct),ct&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),wt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(H){_!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),_=H)}function ot(H){H!==Ld?(st(i.CULL_FACE),H!==E&&(H===eh?i.cullFace(i.BACK):H===Dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),E=H}function dt(H){H!==O&&(R&&i.lineWidth(H),O=H)}function wt(H,Mt,Q){H?(st(i.POLYGON_OFFSET_FILL),(D!==Mt||B!==Q)&&(i.polygonOffset(Mt,Q),D=Mt,B=Q)):vt(i.POLYGON_OFFSET_FILL)}function _t(H){H?st(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function A(H){H===void 0&&(H=i.TEXTURE0+U-1),k!==H&&(i.activeTexture(H),k=H)}function b(H,Mt,Q){Q===void 0&&(k===null?Q=i.TEXTURE0+U-1:Q=k);let ct=Y[Q];ct===void 0&&(ct={type:void 0,texture:void 0},Y[Q]=ct),(ct.type!==H||ct.texture!==Mt)&&(k!==Q&&(i.activeTexture(Q),k=Q),i.bindTexture(H,Mt||pt[H]),ct.type=H,ct.texture=Mt)}function W(){let H=Y[k];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(H){bt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),bt.copy(H))}function Pt(H){Z.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Z.copy(H))}function Yt(H,Mt){let Q=c.get(Mt);Q===void 0&&(Q=new WeakMap,c.set(Mt,Q));let ct=Q.get(H);ct===void 0&&(ct=i.getUniformBlockIndex(Mt,H.name),Q.set(H,ct))}function Gt(H,Mt){let ct=c.get(Mt).get(H);l.get(Mt)!==ct&&(i.uniformBlockBinding(Mt,ct,H.__bindingPointIndex),l.set(Mt,ct))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},k=null,Y={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,M=null,x=null,v=null,I=null,C=null,P=new Ft(0,0,0),N=0,w=!1,_=null,E=null,O=null,D=null,B=null,bt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:vt,bindFramebuffer:X,drawBuffers:it,useProgram:ut,setBlending:T,setMaterial:ft,setFlipSided:lt,setCullFace:ot,setLineWidth:dt,setPolygonOffset:wt,setScissorTest:_t,activeTexture:A,bindTexture:b,unbindTexture:W,compressedTexImage2D:$,compressedTexImage3D:at,texImage2D:It,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:Gt,texStorage2D:qt,texStorage3D:mt,texSubImage2D:et,texSubImage3D:Ct,compressedTexSubImage2D:yt,compressedTexSubImage3D:Et,scissor:kt,viewport:Pt,reset:re}}function tu(i,t,e,n){let s=S_(n);switch(e){case Mu:return i*t;case Su:return i*t;case Au:return i*t*2;case uc:return i*t/s.components*s.byteLength;case dc:return i*t/s.components*s.byteLength;case Eu:return i*t*2/s.components*s.byteLength;case fc:return i*t*2/s.components*s.byteLength;case bu:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Za:return Math.max(i,16)*Math.max(t,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gr:case dl:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tu:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S_(i){switch(i){case Rn:case vu:return{byteLength:1,components:1};case Us:case xu:case Ws:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case pi:case lc:case dn:return{byteLength:4,components:1};case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function A_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return p?new OffscreenCanvas(A,b):qr("canvas")}function y(A,b,W){let $=1,at=_t(A);if((at.width>W||at.height>W)&&($=W/Math.max(at.width,at.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let et=Math.floor($*at.width),Ct=Math.floor($*at.height);u===void 0&&(u=g(et,Ct));let yt=b?g(et,Ct):u;return yt.width=et,yt.height=Ct,yt.getContext("2d").drawImage(A,0,0,et,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+et+"x"+Ct+")."),yt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,b,W,$,at=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=b;if(b===i.RED&&(W===i.FLOAT&&(et=i.R32F),W===i.HALF_FLOAT&&(et=i.R16F),W===i.UNSIGNED_BYTE&&(et=i.R8)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.R8UI),W===i.UNSIGNED_SHORT&&(et=i.R16UI),W===i.UNSIGNED_INT&&(et=i.R32UI),W===i.BYTE&&(et=i.R8I),W===i.SHORT&&(et=i.R16I),W===i.INT&&(et=i.R32I)),b===i.RG&&(W===i.FLOAT&&(et=i.RG32F),W===i.HALF_FLOAT&&(et=i.RG16F),W===i.UNSIGNED_BYTE&&(et=i.RG8)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RG8UI),W===i.UNSIGNED_SHORT&&(et=i.RG16UI),W===i.UNSIGNED_INT&&(et=i.RG32UI),W===i.BYTE&&(et=i.RG8I),W===i.SHORT&&(et=i.RG16I),W===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGB8UI),W===i.UNSIGNED_SHORT&&(et=i.RGB16UI),W===i.UNSIGNED_INT&&(et=i.RGB32UI),W===i.BYTE&&(et=i.RGB8I),W===i.SHORT&&(et=i.RGB16I),W===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),W===i.UNSIGNED_INT&&(et=i.RGBA32UI),W===i.BYTE&&(et=i.RGBA8I),W===i.SHORT&&(et=i.RGBA16I),W===i.INT&&(et=i.RGBA32I)),b===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),b===i.RGBA){let Ct=at?Io:Zt.getTransfer($);W===i.FLOAT&&(et=i.RGBA32F),W===i.HALF_FLOAT&&(et=i.RGBA16F),W===i.UNSIGNED_BYTE&&(et=Ct===ee?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(A,b){let W;return A?b===null||b===pi||b===ts?W=i.DEPTH24_STENCIL8:b===dn?W=i.DEPTH32F_STENCIL8:b===Us&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===pi||b===ts?W=i.DEPTH_COMPONENT24:b===dn?W=i.DEPTH_COMPONENT32F:b===Us&&(W=i.DEPTH_COMPONENT16),W}function I(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ge&&A.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){let b=A.target;b.removeEventListener("dispose",C),N(b),b.isVideoTexture&&h.delete(b)}function P(A){let b=A.target;b.removeEventListener("dispose",P),_(b)}function N(A){let b=n.get(A);if(b.__webglInit===void 0)return;let W=A.source,$=d.get(W);if($){let at=$[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&w(A),Object.keys($).length===0&&d.delete(W)}n.remove(A)}function w(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let W=A.source,$=d.get(W);delete $[b.__cacheKey],o.memory.textures--}function _(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let at=0;at<b.__webglFramebuffer[$].length;at++)i.deleteFramebuffer(b.__webglFramebuffer[$][at]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=A.textures;for(let $=0,at=W.length;$<at;$++){let et=n.get(W[$]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(W[$])}n.remove(A)}let E=0;function O(){E=0}function D(){let A=E;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),E+=1,A}function B(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function U(A,b){let W=n.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,A,b);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function R(A,b){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Z(W,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function z(A,b){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Z(W,A,b);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function L(A,b){let W=n.get(A);if(A.version>0&&W.__version!==A.version){j(W,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}let k={[Ga]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},Y={[Ge]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},tt={[ff]:i.NEVER,[vf]:i.ALWAYS,[pf]:i.LESS,[Cu]:i.LEQUAL,[mf]:i.EQUAL,[yf]:i.GEQUAL,[gf]:i.GREATER,[_f]:i.NOTEQUAL};function rt(A,b){if(b.type===dn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===Jo||b.magFilter===rr||b.magFilter===fi||b.minFilter===un||b.minFilter===Jo||b.minFilter===rr||b.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,k[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,k[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,k[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Y[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Y[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ge||b.minFilter!==rr&&b.minFilter!==fi||b.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function bt(A,b){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",C));let $=b.source,at=d.get($);at===void 0&&(at={},d.set($,at));let et=B(b);if(et!==A.__cacheKey){at[et]===void 0&&(at[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),at[et].usedTimes++;let Ct=at[A.__cacheKey];Ct!==void 0&&(at[A.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(b)),A.__cacheKey=et,A.__webglTexture=at[et].texture}return W}function Z(A,b,W){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);let at=bt(A,b),et=b.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+W);let Ct=n.get(et);if(et.version!==Ct.__version||at===!0){e.activeTexture(i.TEXTURE0+W);let yt=Zt.getPrimaries(Zt.workingColorSpace),Et=b.colorSpace===Gn?null:Zt.getPrimaries(b.colorSpace),qt=b.colorSpace===Gn||yt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let mt=y(b.image,!1,s.maxTextureSize);mt=wt(b,mt);let It=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type),kt=x(b.internalFormat,It,Ot,b.colorSpace,b.isVideoTexture);rt($,b);let Pt,Yt=b.mipmaps,Gt=b.isVideoTexture!==!0,re=Ct.__version===void 0||at===!0,H=et.dataReady,Mt=I(b,mt);if(b.isDepthTexture)kt=v(b.format===es,b.type),re&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,kt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,kt,mt.width,mt.height,0,It,Ot,null));else if(b.isDataTexture)if(Yt.length>0){Gt&&re&&e.texStorage2D(i.TEXTURE_2D,Mt,kt,Yt[0].width,Yt[0].height);for(let Q=0,ct=Yt.length;Q<ct;Q++)Pt=Yt[Q],Gt?H&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,It,Ot,Pt.data):e.texImage2D(i.TEXTURE_2D,Q,kt,Pt.width,Pt.height,0,It,Ot,Pt.data);b.generateMipmaps=!1}else Gt?(re&&e.texStorage2D(i.TEXTURE_2D,Mt,kt,mt.width,mt.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,It,Ot,mt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,mt.width,mt.height,0,It,Ot,mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,kt,Yt[0].width,Yt[0].height,mt.depth);for(let Q=0,ct=Yt.length;Q<ct;Q++)if(Pt=Yt[Q],b.format!==rn)if(It!==null)if(Gt){if(H)if(b.layerUpdates.size>0){let Tt=tu(Pt.width,Pt.height,b.format,b.type);for(let St of b.layerUpdates){let zt=Pt.data.subarray(St*Tt/Pt.data.BYTES_PER_ELEMENT,(St+1)*Tt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,St,Pt.width,Pt.height,1,It,zt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Pt.width,Pt.height,mt.depth,It,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,kt,Pt.width,Pt.height,mt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Pt.width,Pt.height,mt.depth,It,Ot,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,kt,Pt.width,Pt.height,mt.depth,0,It,Ot,Pt.data)}else{Gt&&re&&e.texStorage2D(i.TEXTURE_2D,Mt,kt,Yt[0].width,Yt[0].height);for(let Q=0,ct=Yt.length;Q<ct;Q++)Pt=Yt[Q],b.format!==rn?It!==null?Gt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,It,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,kt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?H&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,It,Ot,Pt.data):e.texImage2D(i.TEXTURE_2D,Q,kt,Pt.width,Pt.height,0,It,Ot,Pt.data)}else if(b.isDataArrayTexture)if(Gt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,kt,mt.width,mt.height,mt.depth),H)if(b.layerUpdates.size>0){let Q=tu(mt.width,mt.height,b.format,b.type);for(let ct of b.layerUpdates){let Tt=mt.data.subarray(ct*Q/mt.data.BYTES_PER_ELEMENT,(ct+1)*Q/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,mt.width,mt.height,1,It,Ot,Tt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,It,Ot,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,mt.width,mt.height,mt.depth,0,It,Ot,mt.data);else if(b.isData3DTexture)Gt?(re&&e.texStorage3D(i.TEXTURE_3D,Mt,kt,mt.width,mt.height,mt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,It,Ot,mt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,mt.width,mt.height,mt.depth,0,It,Ot,mt.data);else if(b.isFramebufferTexture){if(re)if(Gt)e.texStorage2D(i.TEXTURE_2D,Mt,kt,mt.width,mt.height);else{let Q=mt.width,ct=mt.height;for(let Tt=0;Tt<Mt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,kt,Q,ct,0,It,Ot,null),Q>>=1,ct>>=1}}else if(Yt.length>0){if(Gt&&re){let Q=_t(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,kt,Q.width,Q.height)}for(let Q=0,ct=Yt.length;Q<ct;Q++)Pt=Yt[Q],Gt?H&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,It,Ot,Pt):e.texImage2D(i.TEXTURE_2D,Q,kt,It,Ot,Pt);b.generateMipmaps=!1}else if(Gt){if(re){let Q=_t(mt);e.texStorage2D(i.TEXTURE_2D,Mt,kt,Q.width,Q.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Ot,mt)}else e.texImage2D(i.TEXTURE_2D,0,kt,It,Ot,mt);m(b)&&f($),Ct.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function j(A,b,W){if(b.image.length!==6)return;let $=bt(A,b),at=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let et=n.get(at);if(at.version!==et.__version||$===!0){e.activeTexture(i.TEXTURE0+W);let Ct=Zt.getPrimaries(Zt.workingColorSpace),yt=b.colorSpace===Gn?null:Zt.getPrimaries(b.colorSpace),Et=b.colorSpace===Gn||Ct===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let qt=b.isCompressedTexture||b.image[0].isCompressedTexture,mt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let ct=0;ct<6;ct++)!qt&&!mt?It[ct]=y(b.image[ct],!0,s.maxCubemapSize):It[ct]=mt?b.image[ct].image:b.image[ct],It[ct]=wt(b,It[ct]);let Ot=It[0],kt=r.convert(b.format,b.colorSpace),Pt=r.convert(b.type),Yt=x(b.internalFormat,kt,Pt,b.colorSpace),Gt=b.isVideoTexture!==!0,re=et.__version===void 0||$===!0,H=at.dataReady,Mt=I(b,Ot);rt(i.TEXTURE_CUBE_MAP,b);let Q;if(qt){Gt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Yt,Ot.width,Ot.height);for(let ct=0;ct<6;ct++){Q=It[ct].mipmaps;for(let Tt=0;Tt<Q.length;Tt++){let St=Q[Tt];b.format!==rn?kt!==null?Gt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,0,0,St.width,St.height,kt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,Yt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,0,0,St.width,St.height,kt,Pt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,Yt,St.width,St.height,0,kt,Pt,St.data)}}}else{if(Q=b.mipmaps,Gt&&re){Q.length>0&&Mt++;let ct=_t(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Yt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(mt){Gt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,It[ct].width,It[ct].height,kt,Pt,It[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Yt,It[ct].width,It[ct].height,0,kt,Pt,It[ct].data);for(let Tt=0;Tt<Q.length;Tt++){let zt=Q[Tt].image[ct].image;Gt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,0,0,zt.width,zt.height,kt,Pt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,Yt,zt.width,zt.height,0,kt,Pt,zt.data)}}else{Gt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,kt,Pt,It[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Yt,kt,Pt,It[ct]);for(let Tt=0;Tt<Q.length;Tt++){let St=Q[Tt];Gt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,0,0,kt,Pt,St.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,Yt,kt,Pt,St.image[ct])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),et.__version=at.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function pt(A,b,W,$,at,et){let Ct=r.convert(W.format,W.colorSpace),yt=r.convert(W.type),Et=x(W.internalFormat,Ct,yt,W.colorSpace),qt=n.get(b),mt=n.get(W);if(mt.__renderTarget=b,!qt.__hasExternalTextures){let It=Math.max(1,b.width>>et),Ot=Math.max(1,b.height>>et);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,et,Et,It,Ot,b.depth,0,Ct,yt,null):e.texImage2D(at,et,Et,It,Ot,0,Ct,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,at,mt.__webglTexture,0,lt(b)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,at,mt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let $=b.depthTexture,at=$&&$.isDepthTexture?$.type:null,et=v(b.stencilBuffer,at),Ct=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=lt(b);ot(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,et,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,et,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,A)}else{let $=b.textures;for(let at=0;at<$.length;at++){let et=$[at],Ct=r.convert(et.format,et.colorSpace),yt=r.convert(et.type),Et=x(et.internalFormat,Ct,yt,et.colorSpace),qt=lt(b);W&&ot(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Et,b.width,b.height):ot(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,Et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Et,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);let at=$.__webglTexture,et=lt(b);if(b.depthTexture.format===Yi)ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(b.depthTexture.format===es)ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function X(A){let b=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",at)};$.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=$}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");vt(b.__webglFramebuffer,A)}else if(W){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),st(b.__webglDepthbuffer[$],A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),st(b.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(A,b,W){let $=n.get(A);b!==void 0&&pt($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&X(A)}function ut(A){let b=A.texture,W=n.get(A),$=n.get(b);A.addEventListener("dispose",P);let at=A.textures,et=A.isWebGLCubeRenderTarget===!0,Ct=at.length>1;if(Ct||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),et){W.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[yt]=[];for(let Et=0;Et<b.mipmaps.length;Et++)W.__webglFramebuffer[yt][Et]=i.createFramebuffer()}else W.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let yt=0;yt<b.mipmaps.length;yt++)W.__webglFramebuffer[yt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let yt=0,Et=at.length;yt<Et;yt++){let qt=n.get(at[yt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ot(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let yt=0;yt<at.length;yt++){let Et=at[yt];W.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[yt]);let qt=r.convert(Et.format,Et.colorSpace),mt=r.convert(Et.type),It=x(Et.internalFormat,qt,mt,Et.colorSpace,A.isXRRenderTarget===!0),Ot=lt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,It,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,W.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),st(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),rt(i.TEXTURE_CUBE_MAP,b);for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)pt(W.__webglFramebuffer[yt][Et],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Et);else pt(W.__webglFramebuffer[yt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let yt=0,Et=at.length;yt<Et;yt++){let qt=at[yt],mt=n.get(qt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),rt(i.TEXTURE_2D,qt),pt(W.__webglFramebuffer,A,qt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(qt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(yt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,$.__webglTexture),rt(yt,b),b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)pt(W.__webglFramebuffer[Et],A,b,i.COLOR_ATTACHMENT0,yt,Et);else pt(W.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,yt,0);m(b)&&f(yt),e.unbindTexture()}A.depthBuffer&&X(A)}function q(A){let b=A.textures;for(let W=0,$=b.length;W<$;W++){let at=b[W];if(m(at)){let et=M(A),Ct=n.get(at).__webglTexture;e.bindTexture(et,Ct),f(et),e.unbindTexture()}}}let nt=[],T=[];function ft(A){if(A.samples>0){if(ot(A)===!1){let b=A.textures,W=A.width,$=A.height,at=i.COLOR_BUFFER_BIT,et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(A),yt=b.length>1;if(yt)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let qt=n.get(b[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,at,i.NEAREST),l===!0&&(nt.length=0,T.length=0,nt.push(i.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(nt.push(et),T.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let qt=n.get(b[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function lt(A){return Math.min(s.maxSamples,A.samples)}function ot(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function wt(A,b){let W=A.colorSpace,$=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==ls&&W!==Gn&&(Zt.getTransfer(W)===ee?($!==rn||at!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function _t(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=R,this.setTexture3D=z,this.setTextureCube=L,this.rebindTextures=it,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ot}function E_(i,t){function e(n,s=Gn){let r,o=Zt.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return i.BYTE;if(n===xu)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Ws)return i.HALF_FLOAT;if(n===Mu)return i.ALPHA;if(n===bu)return i.RGB;if(n===rn)return i.RGBA;if(n===Su)return i.LUMINANCE;if(n===Au)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===Eu)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===Br||n===zr||n===Hr||n===Vr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ka||n===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ka)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===dl||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gr)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tu||n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ll=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ye=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},T_={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:C_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ul=class extends In{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new Dl,m=e.getContextAttributes(),f=null,M=null,x=[],v=[],I=new ht,C=null,P=new Le;P.viewport=new pe;let N=new Le;N.viewport=new pe;let w=[P,N],_=new Ll,E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=x[Z];return j===void 0&&(j=new Ps,x[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=x[Z];return j===void 0&&(j=new Ps,x[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=x[Z];return j===void 0&&(j=new Ps,x[Z]=j),j.getHandSpace()};function D(Z){let j=v.indexOf(Z.inputSource);if(j===-1)return;let pt=x[j];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||o),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",U);for(let Z=0;Z<x.length;Z++){let j=v[Z];j!==null&&(v[Z]=null,x[Z].disconnect(j))}E=null,O=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Pn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,pt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?es:Yi,pt=m.stencil?ts:pi);let vt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Pn(d.textureWidth,d.textureHeight,{format:rn,type:Rn,depthTexture:new no(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function U(Z){for(let j=0;j<Z.removed.length;j++){let pt=Z.removed[j],st=v.indexOf(pt);st>=0&&(v[st]=null,x[st].disconnect(pt))}for(let j=0;j<Z.added.length;j++){let pt=Z.added[j],st=v.indexOf(pt);if(st===-1){for(let X=0;X<x.length;X++)if(X>=v.length){v.push(pt),st=X;break}else if(v[X]===null){v[X]=pt,st=X;break}if(st===-1)break}let vt=x[st];vt&&vt.connect(pt)}}let R=new F,z=new F;function L(Z,j,pt){R.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(pt.matrixWorld);let st=R.distanceTo(z),vt=j.projectionMatrix.elements,X=pt.projectionMatrix.elements,it=vt[14]/(vt[10]-1),ut=vt[14]/(vt[10]+1),q=(vt[9]+1)/vt[5],nt=(vt[9]-1)/vt[5],T=(vt[8]-1)/vt[0],ft=(X[8]+1)/X[0],lt=it*T,ot=it*ft,dt=st/(-T+ft),wt=dt*-T;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),vt[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let _t=it+dt,A=ut+dt,b=lt-wt,W=ot+(st-wt),$=q*ut/A*_t,at=nt*ut/A*_t;Z.projectionMatrix.makePerspective(b,W,$,at,_t,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function k(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,pt=Z.far;y.texture!==null&&(y.depthNear>0&&(j=y.depthNear),y.depthFar>0&&(pt=y.depthFar)),_.near=N.near=P.near=j,_.far=N.far=P.far=pt,(E!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,O=_.far),P.layers.mask=Z.layers.mask|2,N.layers.mask=Z.layers.mask|4,_.layers.mask=P.layers.mask|N.layers.mask;let st=Z.parent,vt=_.cameras;k(_,st);for(let X=0;X<vt.length;X++)k(vt[X],st);vt.length===2?L(_,P,N):_.projectionMatrix.copy(P.projectionMatrix),Y(Z,_,st)};function Y(Z,j,pt){pt===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ns*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let tt=null;function rt(Z,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let st=!1;pt.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let X=0;X<pt.length;X++){let it=pt[X],ut=null;if(p!==null)ut=p.getViewport(it);else{let nt=u.getViewSubImage(d,it);ut=nt.viewport,X===0&&(t.setRenderTargetTextures(M,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(M))}let q=w[X];q===void 0&&(q=new Le,q.layers.enable(X),q.viewport=new pe,w[X]=q),q.matrix.fromArray(it.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(it.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ut.x,ut.y,ut.width,ut.height),X===0&&(_.matrix.copy(q.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),st===!0&&_.cameras.push(q)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){let X=u.getDepthInformation(pt[0]);X&&X.isValid&&X.texture&&y.init(t,X,s.renderState)}}for(let pt=0;pt<x.length;pt++){let st=v[pt],vt=x[pt];st!==null&&vt!==void 0&&vt.update(st,j,c||o)}tt&&tt(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let bt=new Du;bt.setAnimationLoop(rt),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}},li=new an,I_=new ne;function P_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Lu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Oe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Oe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,li.copy(v),li.x*=-1,li.y*=-1,li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(li)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));let I=x.program;n.updateUBOMapping(M,I);let C=t.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function h(M){let x=u();M.__bindingPointIndex=x;let v=i.createBuffer(),I=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=s[M.id],v=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,P=v.length;C<P;C++){let N=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,_=N.length;w<_;w++){let E=N[w];if(p(E,C,w,I)===!0){let O=E.__offset,D=Array.isArray(E.value)?E.value:[E.value],B=0;for(let U=0;U<D.length;U++){let R=D[U],z=y(R);typeof R=="number"||typeof R=="boolean"?(E.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,O+B,E.__data)):R.isMatrix3?(E.__data[0]=R.elements[0],E.__data[1]=R.elements[1],E.__data[2]=R.elements[2],E.__data[3]=0,E.__data[4]=R.elements[3],E.__data[5]=R.elements[4],E.__data[6]=R.elements[5],E.__data[7]=0,E.__data[8]=R.elements[6],E.__data[9]=R.elements[7],E.__data[10]=R.elements[8],E.__data[11]=0):(R.toArray(E.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,v,I){let C=M.value,P=x+"_"+v;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{let N=I[P];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return I[P]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(M){let x=M.uniforms,v=0,I=16;for(let P=0,N=x.length;P<N;P++){let w=Array.isArray(x[P])?x[P]:[x[P]];for(let _=0,E=w.length;_<E;_++){let O=w[_],D=Array.isArray(O.value)?O.value:[O.value];for(let B=0,U=D.length;B<U;B++){let R=D[B],z=y(R),L=v%I,k=L%z.boundary,Y=L+k;v+=k,Y!==0&&I-Y<z.storage&&(v+=I-Y),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=z.storage}}}let C=v%I;return C>0&&(v+=I-C),M.__size=v,M.__cache={},this}function y(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){let x=M.target;x.removeEventListener("dispose",m);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var io=class{constructor(t={}){let{canvas:e=Of(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Xn,this.toneMappingExposure=1;let v=this,I=!1,C=0,P=0,N=null,w=-1,_=null,E=new pe,O=new pe,D=null,B=new Ft(0),U=0,R=e.width,z=e.height,L=1,k=null,Y=null,tt=new pe(0,0,R,z),rt=new pe(0,0,R,z),bt=!1,Z=new Fs,j=!1,pt=!1,st=new ne,vt=new ne,X=new F,it=new pe,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function nt(){return N===null?L:1}let T=n;function ft(S,V){return e.getContext(S,V)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",St,!1),T===null){let V="webgl2";if(T=ft(V,S),T===null)throw ft(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let lt,ot,dt,wt,_t,A,b,W,$,at,et,Ct,yt,Et,qt,mt,It,Ot,kt,Pt,Yt,Gt,re,H;function Mt(){lt=new Zg(T),lt.init(),Gt=new E_(T,lt),ot=new Vg(T,lt,t,Gt),dt=new b_(T,lt),ot.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),wt=new Jg(T),_t=new h_,A=new A_(T,lt,dt,_t,ot,Gt,wt),b=new Wg(v),W=new Yg(v),$=new sp(T),re=new zg(T,$),at=new $g(T,$,wt,re),et=new Qg(T,at,$,wt),kt=new jg(T,ot,A),mt=new Gg(_t),Ct=new c_(v,b,W,lt,ot,re,mt),yt=new P_(v,_t),Et=new d_,qt=new y_(lt),Ot=new Bg(v,b,W,dt,et,p,l),It=new w_(v,et,ot),H=new L_(T,wt,ot,dt),Pt=new Hg(T,lt,wt),Yt=new Kg(T,lt,wt),wt.programs=Ct.programs,v.capabilities=ot,v.extensions=lt,v.properties=_t,v.renderLists=Et,v.shadowMap=It,v.state=dt,v.info=wt}Mt();let Q=new Ul(v,T);this.xr=Q,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let S=lt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=lt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(S){S!==void 0&&(L=S,this.setSize(R,z,!1))},this.getSize=function(S){return S.set(R,z)},this.setSize=function(S,V,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=S,z=V,e.width=Math.floor(S*L),e.height=Math.floor(V*L),K===!0&&(e.style.width=S+"px",e.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(R*L,z*L).floor()},this.setDrawingBufferSize=function(S,V,K){R=S,z=V,L=K,e.width=Math.floor(S*K),e.height=Math.floor(V*K),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(tt)},this.setViewport=function(S,V,K,J){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,V,K,J),dt.viewport(E.copy(tt).multiplyScalar(L).round())},this.getScissor=function(S){return S.copy(rt)},this.setScissor=function(S,V,K,J){S.isVector4?rt.set(S.x,S.y,S.z,S.w):rt.set(S,V,K,J),dt.scissor(O.copy(rt).multiplyScalar(L).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(S){dt.setScissorTest(bt=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(S=!0,V=!0,K=!0){let J=0;if(S){let G=!1;if(N!==null){let gt=N.texture.format;G=gt===pc||gt===fc||gt===dc}if(G){let gt=N.texture.type,At=gt===Rn||gt===pi||gt===Us||gt===ts||gt===cc||gt===hc,Lt=Ot.getClearColor(),Dt=Ot.getClearAlpha(),Bt=Lt.r,Ht=Lt.g,Ut=Lt.b;At?(g[0]=Bt,g[1]=Ht,g[2]=Ut,g[3]=Dt,T.clearBufferuiv(T.COLOR,0,g)):(y[0]=Bt,y[1]=Ht,y[2]=Ut,y[3]=Dt,T.clearBufferiv(T.COLOR,0,y))}else J|=T.COLOR_BUFFER_BIT}V&&(J|=T.DEPTH_BUFFER_BIT),K&&(J|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Et.dispose(),qt.dispose(),_t.dispose(),b.dispose(),W.dispose(),et.dispose(),re.dispose(),H.dispose(),Ct.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Lc),Q.removeEventListener("sessionend",Dc),ti.stop()};function ct(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let S=wt.autoReset,V=It.enabled,K=It.autoUpdate,J=It.needsUpdate,G=It.type;Mt(),wt.autoReset=S,It.enabled=V,It.autoUpdate=K,It.needsUpdate=J,It.type=G}function St(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zt(S){let V=S.target;V.removeEventListener("dispose",zt),fe(V)}function fe(S){Ae(S),_t.remove(S)}function Ae(S){let V=_t.get(S).programs;V!==void 0&&(V.forEach(function(K){Ct.releaseProgram(K)}),S.isShaderMaterial&&Ct.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,K,J,G,gt){V===null&&(V=ut);let At=G.isMesh&&G.matrixWorld.determinant()<0,Lt=fd(S,V,K,J,G);dt.setMaterial(J,At);let Dt=K.index,Bt=1;if(J.wireframe===!0){if(Dt=at.getWireframeAttribute(K),Dt===void 0)return;Bt=2}let Ht=K.drawRange,Ut=K.attributes.position,$t=Ht.start*Bt,oe=(Ht.start+Ht.count)*Bt;gt!==null&&($t=Math.max($t,gt.start*Bt),oe=Math.min(oe,(gt.start+gt.count)*Bt)),Dt!==null?($t=Math.max($t,0),oe=Math.min(oe,Dt.count)):Ut!=null&&($t=Math.max($t,0),oe=Math.min(oe,Ut.count));let ae=oe-$t;if(ae<0||ae===1/0)return;re.setup(G,J,Lt,K,Dt);let Ue,Jt=Pt;if(Dt!==null&&(Ue=$.get(Dt),Jt=Yt,Jt.setIndex(Ue)),G.isMesh)J.wireframe===!0?(dt.setLineWidth(J.wireframeLinewidth*nt()),Jt.setMode(T.LINES)):Jt.setMode(T.TRIANGLES);else if(G.isLine){let Nt=J.linewidth;Nt===void 0&&(Nt=1),dt.setLineWidth(Nt*nt()),G.isLineSegments?Jt.setMode(T.LINES):G.isLineLoop?Jt.setMode(T.LINE_LOOP):Jt.setMode(T.LINE_STRIP)}else G.isPoints?Jt.setMode(T.POINTS):G.isSprite&&Jt.setMode(T.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Jt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Nt=G._multiDrawStarts,vn=G._multiDrawCounts,jt=G._multiDrawCount,Je=Dt?$.get(Dt).bytesPerElement:1,Mi=_t.get(J).currentProgram.getUniforms();for(let ze=0;ze<jt;ze++)Mi.setValue(T,"_gl_DrawID",ze),Jt.render(Nt[ze]/Je,vn[ze])}else if(G.isInstancedMesh)Jt.renderInstances($t,ae,G.count);else if(K.isInstancedBufferGeometry){let Nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,vn=Math.min(K.instanceCount,Nt);Jt.renderInstances($t,ae,vn)}else Jt.render($t,ae)};function Qt(S,V,K){S.transparent===!0&&S.side===qe&&S.forceSinglePass===!1?(S.side=Oe,S.needsUpdate=!0,tr(S,V,K),S.side=Yn,S.needsUpdate=!0,tr(S,V,K),S.side=qe):tr(S,V,K)}this.compile=function(S,V,K=null){K===null&&(K=S),f=qt.get(K),f.init(V),x.push(f),K.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),S!==K&&S.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();let J=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let gt=G.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){let Lt=gt[At];Qt(Lt,K,G),J.add(Lt)}else Qt(gt,K,G),J.add(gt)}),x.pop(),f=null,J},this.compileAsync=function(S,V,K=null){let J=this.compile(S,V,K);return new Promise(G=>{function gt(){if(J.forEach(function(At){_t.get(At).currentProgram.isReady()&&J.delete(At)}),J.size===0){G(S);return}setTimeout(gt,10)}lt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ke=null;function yn(S){Ke&&Ke(S)}function Lc(){ti.stop()}function Dc(){ti.start()}let ti=new Du;ti.setAnimationLoop(yn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(S){Ke=S,Q.setAnimationLoop(S),S===null?ti.stop():ti.start()},Q.addEventListener("sessionstart",Lc),Q.addEventListener("sessionend",Dc),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(V),V=Q.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,V,N),f=qt.get(S,x.length),f.init(V),x.push(f),vt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(vt),pt=this.localClippingEnabled,j=mt.init(this.clippingPlanes,pt),m=Et.get(S,M.length),m.init(),M.push(m),Q.enabled===!0&&Q.isPresenting===!0){let gt=v.xr.getDepthSensingMesh();gt!==null&&Vo(gt,V,-1/0,v.sortObjects)}Vo(S,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(k,Y),q=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,q&&Ot.addToRenderList(m,S),this.info.render.frame++,j===!0&&mt.beginShadows();let K=f.state.shadowsArray;It.render(K,S,V),j===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,G=m.transmissive;if(f.setupLights(),V.isArrayCamera){let gt=V.cameras;if(G.length>0)for(let At=0,Lt=gt.length;At<Lt;At++){let Dt=gt[At];Nc(J,G,S,Dt)}q&&Ot.render(S);for(let At=0,Lt=gt.length;At<Lt;At++){let Dt=gt[At];Uc(m,S,Dt,Dt.viewport)}}else G.length>0&&Nc(J,G,S,V),q&&Ot.render(S),Uc(m,S,V);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),S.isScene===!0&&S.onAfterRender(v,S,V),re.resetDefaultState(),w=-1,_=null,x.pop(),x.length>0?(f=x[x.length-1],j===!0&&mt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Vo(S,V,K,J){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){J&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(vt);let At=et.update(S),Lt=S.material;Lt.visible&&m.push(S,At,Lt,K,it.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){let At=et.update(S),Lt=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),it.copy(S.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),it.copy(At.boundingSphere.center)),it.applyMatrix4(S.matrixWorld).applyMatrix4(vt)),Array.isArray(Lt)){let Dt=At.groups;for(let Bt=0,Ht=Dt.length;Bt<Ht;Bt++){let Ut=Dt[Bt],$t=Lt[Ut.materialIndex];$t&&$t.visible&&m.push(S,At,$t,K,it.z,Ut)}}else Lt.visible&&m.push(S,At,Lt,K,it.z,null)}}let gt=S.children;for(let At=0,Lt=gt.length;At<Lt;At++)Vo(gt[At],V,K,J)}function Uc(S,V,K,J){let G=S.opaque,gt=S.transmissive,At=S.transparent;f.setupLightsView(K),j===!0&&mt.setGlobalState(v.clippingPlanes,K),J&&dt.viewport(E.copy(J)),G.length>0&&Qs(G,V,K),gt.length>0&&Qs(gt,V,K),At.length>0&&Qs(At,V,K),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Nc(S,V,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new Pn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Ws:Rn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let gt=f.state.transmissionRenderTarget[J.id],At=J.viewport||E;gt.setSize(At.z,At.w);let Lt=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(B),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),q&&Ot.render(K);let Dt=v.toneMapping;v.toneMapping=Xn;let Bt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),j===!0&&mt.setGlobalState(v.clippingPlanes,J),Qs(S,K,J),A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ut=0,$t=V.length;Ut<$t;Ut++){let oe=V[Ut],ae=oe.object,Ue=oe.geometry,Jt=oe.material,Nt=oe.group;if(Jt.side===qe&&ae.layers.test(J.layers)){let vn=Jt.side;Jt.side=Oe,Jt.needsUpdate=!0,Oc(ae,K,J,Ue,Jt,Nt),Jt.side=vn,Jt.needsUpdate=!0,Ht=!0}}Ht===!0&&(A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt))}v.setRenderTarget(Lt),v.setClearColor(B,U),Bt!==void 0&&(J.viewport=Bt),v.toneMapping=Dt}function Qs(S,V,K){let J=V.isScene===!0?V.overrideMaterial:null;for(let G=0,gt=S.length;G<gt;G++){let At=S[G],Lt=At.object,Dt=At.geometry,Bt=J===null?At.material:J,Ht=At.group;Lt.layers.test(K.layers)&&Oc(Lt,V,K,Dt,Bt,Ht)}}function Oc(S,V,K,J,G,gt){S.onBeforeRender(v,V,K,J,G,gt),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(v,V,K,J,S,gt),G.transparent===!0&&G.side===qe&&G.forceSinglePass===!1?(G.side=Oe,G.needsUpdate=!0,v.renderBufferDirect(K,V,J,G,S,gt),G.side=Yn,G.needsUpdate=!0,v.renderBufferDirect(K,V,J,G,S,gt),G.side=qe):v.renderBufferDirect(K,V,J,G,S,gt),S.onAfterRender(v,V,K,J,G,gt)}function tr(S,V,K){V.isScene!==!0&&(V=ut);let J=_t.get(S),G=f.state.lights,gt=f.state.shadowsArray,At=G.state.version,Lt=Ct.getParameters(S,G.state,gt,V,K),Dt=Ct.getProgramCacheKey(Lt),Bt=J.programs;J.environment=S.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(S.isMeshStandardMaterial?W:b).get(S.envMap||J.environment),J.envMapRotation=J.environment!==null&&S.envMap===null?V.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",zt),Bt=new Map,J.programs=Bt);let Ht=Bt.get(Dt);if(Ht!==void 0){if(J.currentProgram===Ht&&J.lightsStateVersion===At)return kc(S,Lt),Ht}else Lt.uniforms=Ct.getUniforms(S),S.onBeforeCompile(Lt,v),Ht=Ct.acquireProgram(Lt,Dt),Bt.set(Dt,Ht),J.uniforms=Lt.uniforms;let Ut=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=mt.uniform),kc(S,Lt),J.needsLights=md(S),J.lightsStateVersion=At,J.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.directionalShadowMap.value=G.state.directionalShadowMap,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotShadowMap.value=G.state.spotShadowMap,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMap.value=G.state.pointShadowMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Ht,J.uniformsList=null,Ht}function Fc(S){if(S.uniformsList===null){let V=S.currentProgram.getUniforms();S.uniformsList=Ki.seqWithValue(V.seq,S.uniforms)}return S.uniformsList}function kc(S,V){let K=_t.get(S);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function fd(S,V,K,J,G){V.isScene!==!0&&(V=ut),A.resetTextureUnits();let gt=V.fog,At=J.isMeshStandardMaterial?V.environment:null,Lt=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ls,Dt=(J.isMeshStandardMaterial?W:b).get(J.envMap||At),Bt=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ut=!!K.morphAttributes.position,$t=!!K.morphAttributes.normal,oe=!!K.morphAttributes.color,ae=Xn;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ae=v.toneMapping);let Ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Jt=Ue!==void 0?Ue.length:0,Nt=_t.get(J),vn=f.state.lights;if(j===!0&&(pt===!0||S!==_)){let We=S===_&&J.id===w;mt.setState(J,S,We)}let jt=!1;J.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==vn.state.version||Nt.outputColorSpace!==Lt||G.isBatchedMesh&&Nt.batching===!1||!G.isBatchedMesh&&Nt.batching===!0||G.isBatchedMesh&&Nt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Nt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Nt.instancing===!1||!G.isInstancedMesh&&Nt.instancing===!0||G.isSkinnedMesh&&Nt.skinning===!1||!G.isSkinnedMesh&&Nt.skinning===!0||G.isInstancedMesh&&Nt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Nt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Nt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Nt.instancingMorph===!1&&G.morphTexture!==null||Nt.envMap!==Dt||J.fog===!0&&Nt.fog!==gt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==mt.numPlanes||Nt.numIntersection!==mt.numIntersection)||Nt.vertexAlphas!==Bt||Nt.vertexTangents!==Ht||Nt.morphTargets!==Ut||Nt.morphNormals!==$t||Nt.morphColors!==oe||Nt.toneMapping!==ae||Nt.morphTargetsCount!==Jt)&&(jt=!0):(jt=!0,Nt.__version=J.version);let Je=Nt.currentProgram;jt===!0&&(Je=tr(J,V,G));let Mi=!1,ze=!1,fs=!1,le=Je.getUniforms(),cn=Nt.uniforms;if(dt.useProgram(Je.program)&&(Mi=!0,ze=!0,fs=!0),J.id!==w&&(w=J.id,ze=!0),Mi||_!==S){dt.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),kf(st),Bf(st),le.setValue(T,"projectionMatrix",st)):le.setValue(T,"projectionMatrix",S.projectionMatrix),le.setValue(T,"viewMatrix",S.matrixWorldInverse);let Un=le.map.cameraPosition;Un!==void 0&&Un.setValue(T,X.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&le.setValue(T,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&le.setValue(T,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,ze=!0,fs=!0)}if(G.isSkinnedMesh){le.setOptional(T,G,"bindMatrix"),le.setOptional(T,G,"bindMatrixInverse");let We=G.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),le.setValue(T,"boneTexture",We.boneTexture,A))}G.isBatchedMesh&&(le.setOptional(T,G,"batchingTexture"),le.setValue(T,"batchingTexture",G._matricesTexture,A),le.setOptional(T,G,"batchingIdTexture"),le.setValue(T,"batchingIdTexture",G._indirectTexture,A),le.setOptional(T,G,"batchingColorTexture"),G._colorsTexture!==null&&le.setValue(T,"batchingColorTexture",G._colorsTexture,A));let ps=K.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&kt.update(G,K,Je),(ze||Nt.receiveShadow!==G.receiveShadow)&&(Nt.receiveShadow=G.receiveShadow,le.setValue(T,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(cn.envMap.value=Dt,cn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(cn.envMapIntensity.value=V.environmentIntensity),ze&&(le.setValue(T,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&pd(cn,fs),gt&&J.fog===!0&&yt.refreshFogUniforms(cn,gt),yt.refreshMaterialUniforms(cn,J,L,z,f.state.transmissionRenderTarget[S.id]),Ki.upload(T,Fc(Nt),cn,A)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ki.upload(T,Fc(Nt),cn,A),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&le.setValue(T,"center",G.center),le.setValue(T,"modelViewMatrix",G.modelViewMatrix),le.setValue(T,"normalMatrix",G.normalMatrix),le.setValue(T,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let We=J.uniformsGroups;for(let Un=0,Nn=We.length;Un<Nn;Un++){let Bc=We[Un];H.update(Bc,Je),H.bind(Bc,Je)}}return Je}function pd(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function md(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,V,K){_t.get(S.texture).__webglTexture=V,_t.get(S.depthTexture).__webglTexture=K;let J=_t.get(S);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,V){let K=_t.get(S);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(S,V=0,K=0){N=S,C=V,P=K;let J=!0,G=null,gt=!1,At=!1;if(S){let Dt=_t.get(S);if(Dt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(T.FRAMEBUFFER,null),J=!1;else if(Dt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Dt.__hasExternalTextures)A.rebindTextures(S,_t.get(S.texture).__webglTexture,_t.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ut=S.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&_t.has(Ut)&&(S.width!==Ut.image.width||S.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(At=!0);let Ht=_t.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ht[V])?G=Ht[V][K]:G=Ht[V],gt=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?G=_t.get(S).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[K]:G=Ht,E.copy(S.viewport),O.copy(S.scissor),D=S.scissorTest}else E.copy(tt).multiplyScalar(L).floor(),O.copy(rt).multiplyScalar(L).floor(),D=bt;if(dt.bindFramebuffer(T.FRAMEBUFFER,G)&&J&&dt.drawBuffers(S,G),dt.viewport(E),dt.scissor(O),dt.setScissorTest(D),gt){let Dt=_t.get(S.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,Dt.__webglTexture,K)}else if(At){let Dt=_t.get(S.texture),Bt=V||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Dt.__webglTexture,K||0,Bt)}w=-1},this.readRenderTargetPixels=function(S,V,K,J,G,gt,At){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){dt.bindFramebuffer(T.FRAMEBUFFER,Lt);try{let Dt=S.texture,Bt=Dt.format,Ht=Dt.type;if(!ot.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-J&&K>=0&&K<=S.height-G&&T.readPixels(V,K,J,G,Gt.convert(Bt),Gt.convert(Ht),gt)}finally{let Dt=N!==null?_t.get(N).__webglFramebuffer:null;dt.bindFramebuffer(T.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,V,K,J,G,gt,At){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){let Dt=S.texture,Bt=Dt.format,Ht=Dt.type;if(!ot.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=S.width-J&&K>=0&&K<=S.height-G){dt.bindFramebuffer(T.FRAMEBUFFER,Lt);let Ut=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.bufferData(T.PIXEL_PACK_BUFFER,gt.byteLength,T.STREAM_READ),T.readPixels(V,K,J,G,Gt.convert(Bt),Gt.convert(Ht),0);let $t=N!==null?_t.get(N).__webglFramebuffer:null;dt.bindFramebuffer(T.FRAMEBUFFER,$t);let oe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Ff(T,oe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,gt),T.deleteBuffer(Ut),T.deleteSync(oe),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,V=null,K=0){S.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1]);let J=Math.pow(2,-K),G=Math.floor(S.image.width*J),gt=Math.floor(S.image.height*J),At=V!==null?V.x:0,Lt=V!==null?V.y:0;A.setTexture2D(S,0),T.copyTexSubImage2D(T.TEXTURE_2D,K,0,0,At,Lt,G,gt),dt.unbindTexture()},this.copyTextureToTexture=function(S,V,K=null,J=null,G=0){S.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,S=arguments[1],V=arguments[2],G=arguments[3]||0,K=null);let gt,At,Lt,Dt,Bt,Ht,Ut,$t,oe,ae=S.isCompressedTexture?S.mipmaps[G]:S.image;K!==null?(gt=K.max.x-K.min.x,At=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,Dt=K.min.x,Bt=K.min.y,Ht=K.isBox3?K.min.z:0):(gt=ae.width,At=ae.height,Lt=ae.depth||1,Dt=0,Bt=0,Ht=0),J!==null?(Ut=J.x,$t=J.y,oe=J.z):(Ut=0,$t=0,oe=0);let Ue=Gt.convert(V.format),Jt=Gt.convert(V.type),Nt;V.isData3DTexture?(A.setTexture3D(V,0),Nt=T.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(A.setTexture2DArray(V,0),Nt=T.TEXTURE_2D_ARRAY):(A.setTexture2D(V,0),Nt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);let vn=T.getParameter(T.UNPACK_ROW_LENGTH),jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Je=T.getParameter(T.UNPACK_SKIP_PIXELS),Mi=T.getParameter(T.UNPACK_SKIP_ROWS),ze=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ae.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ae.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Bt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ht);let fs=S.isDataArrayTexture||S.isData3DTexture,le=V.isDataArrayTexture||V.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let cn=_t.get(S),ps=_t.get(V),We=_t.get(cn.__renderTarget),Un=_t.get(ps.__renderTarget);dt.bindFramebuffer(T.READ_FRAMEBUFFER,We.__webglFramebuffer),dt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Nn=0;Nn<Lt;Nn++)fs&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_t.get(S).__webglTexture,G,Ht+Nn),S.isDepthTexture?(le&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_t.get(V).__webglTexture,G,oe+Nn),T.blitFramebuffer(Dt,Bt,gt,At,Ut,$t,gt,At,T.DEPTH_BUFFER_BIT,T.NEAREST)):le?T.copyTexSubImage3D(Nt,G,Ut,$t,oe+Nn,Dt,Bt,gt,At):T.copyTexSubImage2D(Nt,G,Ut,$t,oe+Nn,Dt,Bt,gt,At);dt.bindFramebuffer(T.READ_FRAMEBUFFER,null),dt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else le?S.isDataTexture||S.isData3DTexture?T.texSubImage3D(Nt,G,Ut,$t,oe,gt,At,Lt,Ue,Jt,ae.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(Nt,G,Ut,$t,oe,gt,At,Lt,Ue,ae.data):T.texSubImage3D(Nt,G,Ut,$t,oe,gt,At,Lt,Ue,Jt,ae):S.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,G,Ut,$t,gt,At,Ue,Jt,ae.data):S.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,G,Ut,$t,ae.width,ae.height,Ue,ae.data):T.texSubImage2D(T.TEXTURE_2D,G,Ut,$t,gt,At,Ue,Jt,ae);T.pixelStorei(T.UNPACK_ROW_LENGTH,vn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Je),T.pixelStorei(T.UNPACK_SKIP_ROWS,Mi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ze),G===0&&V.generateMipmaps&&T.generateMipmap(Nt),dt.unbindTexture()},this.copyTextureToTexture3D=function(S,V,K=null,J=null,G=0){return S.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,S=arguments[2],V=arguments[3],G=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,V,K,J,G)},this.initRenderTarget=function(S){_t.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){C=0,P=0,N=null,dt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var so=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ro=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yl,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ie=new F,oo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},is=class extends pn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bi,Ms=new F,zi=new F,Hi=new F,Vi=new ht,bs=new ht,ku=new ne,Er=new F,Ss=new F,Tr=new F,eu=new ht,Aa=new ht,nu=new ht,ao=class extends Se{constructor(t=new is){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nl(e,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new oo(n,3,0,!1)),Bi.setAttribute("uv",new oo(n,2,3,!1))}this.geometry=Bi,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),ku.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Hi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Cr(Er.set(-.5,-.5,0),Hi,o,zi,s,r),Cr(Ss.set(.5,-.5,0),Hi,o,zi,s,r),Cr(Tr.set(.5,.5,0),Hi,o,zi,s,r),eu.set(0,0),Aa.set(1,0),nu.set(1,1);let a=t.ray.intersectTriangle(Er,Ss,Tr,!1,Ms);if(a===null&&(Cr(Ss.set(-.5,.5,0),Hi,o,zi,s,r),Aa.set(0,1),a=t.ray.intersectTriangle(Er,Tr,Ss,!1,Ms),a===null))return;let l=t.ray.origin.distanceTo(Ms);l<t.near||l>t.far||e.push({distance:l,point:Ms.clone(),uv:En.getInterpolation(Ms,Er,Ss,Tr,eu,Aa,nu,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Cr(i,t,e,n,s,r){Vi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(bs.x=r*Vi.x-s*Vi.y,bs.y=s*Vi.x+r*Vi.y):bs.copy(Vi),i.copy(t),i.x+=bs.x,i.y+=bs.y,i.applyMatrix4(ku)}var Ol=class extends ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,h=Ge,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ss=class extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gi=new ne,iu=new ne,Rr=[],su=new Ln,D_=new ne,As=new ge,Es=new Zn,lo=class extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,D_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),su.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Es.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),iu.multiplyMatrices(n,Gi),As.matrixWorld=iu,As.raycast(t,Rr);for(let o=0,a=Rr.length;o<a;o++){let l=Rr[o];l.instanceId=r,l.object=this,e.push(l)}Rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ol(new Float32Array(s*this.count),s,this.count,uc,dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Kn=class extends pn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},co=new F,ho=new F,ru=new ne,Ts=new mi,Ir=new Zn,Ea=new F,ou=new F,Fl=class extends Se{constructor(t=new Ce,e=new Kn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)co.fromBufferAttribute(e,s-1),ho.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=co.distanceTo(ho);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;ru.copy(s).invert(),Ts.copy(t.ray).applyMatrix4(ru);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=h.getX(y),M=h.getX(y+1),x=Pr(this,t,Ts,l,f,M);x&&e.push(x)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(p),f=Pr(this,t,Ts,l,y,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=Pr(this,t,Ts,l,y,y+1);f&&e.push(f)}if(this.isLineLoop){let y=Pr(this,t,Ts,l,g-1,p);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(co.fromBufferAttribute(o,s),ho.fromBufferAttribute(o,r),e.distanceSqToSegment(co,ho,Ea,ou)>n)return;Ea.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ea);if(!(l<t.near||l>t.far))return{distance:l,point:ou.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var au=new F,lu=new F,gi=class extends Fl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)au.fromBufferAttribute(e,s),lu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+au.distanceTo(lu);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var uo=class extends ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ze=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,s=[],r=[],o=[],a=new F,l=new ne;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(_e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(_e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ks=class extends Ze{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},kl=class extends ks{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Lr=new F,Ta=new vc,Ca=new vc,Ra=new vc,Bl=class extends Ze{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Lr.subVectors(s[0],s[1]).add(s[0]),c=Lr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ta.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Ca.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Ra.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ca.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ra.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ta.calc(l),Ca.calc(l),Ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function U_(i,t){let e=1-i;return e*e*t}function N_(i,t){return 2*(1-i)*i*t}function O_(i,t){return i*i*t}function Ls(i,t,e,n){return U_(i,t)+N_(i,e)+O_(i,n)}function F_(i,t){let e=1-i;return e*e*e*t}function k_(i,t){let e=1-i;return 3*e*e*i*t}function B_(i,t){return 3*(1-i)*i*i*t}function z_(i,t){return i*i*i*t}function Ds(i,t,e,n,s){return F_(i,t)+k_(i,e)+B_(i,n)+z_(i,s)}var fo=class extends Ze{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zl=class extends Ze{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y),Ds(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},po=class extends Ze{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hl=class extends Ze{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends Ze{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vl=class extends Ze{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y),Ls(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cu(a,l.x,c.x,h.x,u.x),cu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Gl=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:Bl,CubicBezierCurve:fo,CubicBezierCurve3:zl,EllipseCurve:ks,LineCurve:po,LineCurve3:Hl,QuadraticBezierCurve:mo,QuadraticBezierCurve3:Vl,SplineCurve:go}),Wl=class extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Gl[s.type]().fromJSON(s))}return this}},Bs=class extends Wl{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new po(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new mo(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new fo(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new go(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ks(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xl=class i extends Ce{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new F,d=new ht,p=new F,g=new F,y=new F,m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let M=0;M<=e;M++){let x=n+M*h*s,v=Math.sin(x),I=Math.cos(x);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*v,u.y=t[C].y,u.z=t[C].x*I,o.push(u.x,u.y,u.z),d.x=M/e,d.y=C/(t.length-1),a.push(d.x,d.y);let P=l[3*C+0]*v,N=l[3*C+1],w=l[3*C+0]*I;c.push(P,N,w)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let v=x+M*t.length,I=v,C=v+t.length,P=v+t.length+1,N=v+1;r.push(I,C,N),r.push(P,N,C)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},_o=class i extends Xl{constructor(t=1,e=1,n=4,s=8){let r=new Bs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var Dr=new F,Ur=new F,Ia=new F,Nr=new En,rs=class extends Ce{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Zi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:f}=Nr;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Nr.getNormal(Ia),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let x=(M+1)%3,v=u[M],I=u[x],C=Nr[h[M]],P=Nr[h[x]],N=`${v}_${I}`,w=`${I}_${v}`;w in d&&d[w]?(Ia.dot(d[w].normal)<=r&&(p.push(C.x,C.y,C.z),p.push(P.x,P.y,P.z)),d[w]=null):N in d||(d[N]={index0:c[M],index1:c[x],normal:Ia.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:m}=d[g];Dr.fromBufferAttribute(a,y),Ur.fromBufferAttribute(a,m),p.push(Dr.x,Dr.y,Dr.z),p.push(Ur.x,Ur.y,Ur.z)}this.setAttribute("position",new ce(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},os=class extends Bs{constructor(t){super(t),this.uuid=fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Bs().fromJSON(s))}return this}},H_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Bu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=q_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return zs(r,o,e,a,l,p,0),o}};function Bu(i,t,e,n,s){let r,o;if(s===iy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=hu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=hu(r,i[r],i[r+1],o);return o&&Lo(o,o.next)&&(Vs(o),o=o.next),o}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Lo(e,e.next)||de(e.prev,e,e.next)===0)){if(Vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&J_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?G_(i,n,s,r):V_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Vs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=W_(_i(i),t,e),zs(i,t,e,n,s,r,2)):o===2&&X_(i,t,e,n,s,r):zs(_i(i),t,e,n,s,r,1);break}}}function V_(i){let t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Xi(s,a,r,l,o,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function G_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(de(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=ql(p,g,t,e,n),M=ql(y,m,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=f&&v&&v.z<=M;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Xi(a,h,l,u,c,d,x.x,x.y)&&de(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Xi(a,h,l,u,c,d,v.x,v.y)&&de(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Xi(a,h,l,u,c,d,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Xi(a,h,l,u,c,d,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function W_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Lo(s,r)&&zu(s,n,n.next,r)&&Hs(s,r)&&Hs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Vs(n),Vs(n.next),n=i=r),n=n.next}while(n!==i);return _i(n)}function X_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ty(o,a)){let l=Hu(o,a);o=_i(o,o.next),l=_i(l,l.next),zs(o,t,e,n,s,r,0),zs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function q_(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Bu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Q_(c));for(s.sort(Y_),r=0;r<s.length;r++)e=Z_(s[r],e);return e}function Y_(i,t){return i.x-t.x}function Z_(i,t){let e=$_(i,t);if(!e)return t;let n=Hu(e,i);return _i(n,n.next),_i(e,e.next)}function $_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Xi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Hs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&K_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function K_(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function J_(i,t,e,n){let s=i;do s.z===0&&(s.z=ql(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,j_(s)}function j_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function ql(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Q_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ty(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ey(i,t)&&(Hs(i,t)&&Hs(t,i)&&ny(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Lo(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Lo(i,t){return i.x===t.x&&i.y===t.y}function zu(i,t,e,n){let s=Fr(de(i,t,e)),r=Fr(de(i,t,n)),o=Fr(de(e,n,i)),a=Fr(de(e,n,t));return!!(s!==r&&o!==a||s===0&&Or(i,e,t)||r===0&&Or(i,n,t)||o===0&&Or(e,i,n)||a===0&&Or(e,t,n))}function Or(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fr(i){return i>0?1:i<0?-1:0}function ey(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hs(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function ny(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hu(i,t){let e=new Yl(i.i,i.x,i.y),n=new Yl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hu(i,t,e,n){let s=new Yl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];uu(t),du(n,t);let o=t.length;e.forEach(uu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,du(n,e[l]);let a=H_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function du(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var yo=class i extends Ce{constructor(t=new os([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:sy,x,v=!1,I,C,P,N;f&&(x=f.getSpacedPoints(h),v=!0,d=!1,I=f.computeFrenetFrames(h,!1),C=new F,P=new F,N=new F),d||(m=0,p=0,g=0,y=0);let w=a.extractPoints(c),_=w.shape,E=w.holes;if(!qn.isClockWise(_)){_=_.reverse();for(let q=0,nt=E.length;q<nt;q++){let T=E[q];qn.isClockWise(T)&&(E[q]=T.reverse())}}let D=qn.triangulateShape(_,E),B=_;for(let q=0,nt=E.length;q<nt;q++){let T=E[q];_=_.concat(T)}function U(q,nt,T){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(nt,T)}let R=_.length,z=D.length;function L(q,nt,T){let ft,lt,ot,dt=q.x-nt.x,wt=q.y-nt.y,_t=T.x-q.x,A=T.y-q.y,b=dt*dt+wt*wt,W=dt*A-wt*_t;if(Math.abs(W)>Number.EPSILON){let $=Math.sqrt(b),at=Math.sqrt(_t*_t+A*A),et=nt.x-wt/$,Ct=nt.y+dt/$,yt=T.x-A/at,Et=T.y+_t/at,qt=((yt-et)*A-(Et-Ct)*_t)/(dt*A-wt*_t);ft=et+dt*qt-q.x,lt=Ct+wt*qt-q.y;let mt=ft*ft+lt*lt;if(mt<=2)return new ht(ft,lt);ot=Math.sqrt(mt/2)}else{let $=!1;dt>Number.EPSILON?_t>Number.EPSILON&&($=!0):dt<-Number.EPSILON?_t<-Number.EPSILON&&($=!0):Math.sign(wt)===Math.sign(A)&&($=!0),$?(ft=-wt,lt=dt,ot=Math.sqrt(b)):(ft=dt,lt=wt,ot=Math.sqrt(b/2))}return new ht(ft/ot,lt/ot)}let k=[];for(let q=0,nt=B.length,T=nt-1,ft=q+1;q<nt;q++,T++,ft++)T===nt&&(T=0),ft===nt&&(ft=0),k[q]=L(B[q],B[T],B[ft]);let Y=[],tt,rt=k.concat();for(let q=0,nt=E.length;q<nt;q++){let T=E[q];tt=[];for(let ft=0,lt=T.length,ot=lt-1,dt=ft+1;ft<lt;ft++,ot++,dt++)ot===lt&&(ot=0),dt===lt&&(dt=0),tt[ft]=L(T[ft],T[ot],T[dt]);Y.push(tt),rt=rt.concat(tt)}for(let q=0;q<m;q++){let nt=q/m,T=p*Math.cos(nt*Math.PI/2),ft=g*Math.sin(nt*Math.PI/2)+y;for(let lt=0,ot=B.length;lt<ot;lt++){let dt=U(B[lt],k[lt],ft);st(dt.x,dt.y,-T)}for(let lt=0,ot=E.length;lt<ot;lt++){let dt=E[lt];tt=Y[lt];for(let wt=0,_t=dt.length;wt<_t;wt++){let A=U(dt[wt],tt[wt],ft);st(A.x,A.y,-T)}}}let bt=g+y;for(let q=0;q<R;q++){let nt=d?U(_[q],rt[q],bt):_[q];v?(P.copy(I.normals[0]).multiplyScalar(nt.x),C.copy(I.binormals[0]).multiplyScalar(nt.y),N.copy(x[0]).add(P).add(C),st(N.x,N.y,N.z)):st(nt.x,nt.y,0)}for(let q=1;q<=h;q++)for(let nt=0;nt<R;nt++){let T=d?U(_[nt],rt[nt],bt):_[nt];v?(P.copy(I.normals[q]).multiplyScalar(T.x),C.copy(I.binormals[q]).multiplyScalar(T.y),N.copy(x[q]).add(P).add(C),st(N.x,N.y,N.z)):st(T.x,T.y,u/h*q)}for(let q=m-1;q>=0;q--){let nt=q/m,T=p*Math.cos(nt*Math.PI/2),ft=g*Math.sin(nt*Math.PI/2)+y;for(let lt=0,ot=B.length;lt<ot;lt++){let dt=U(B[lt],k[lt],ft);st(dt.x,dt.y,u+T)}for(let lt=0,ot=E.length;lt<ot;lt++){let dt=E[lt];tt=Y[lt];for(let wt=0,_t=dt.length;wt<_t;wt++){let A=U(dt[wt],tt[wt],ft);v?st(A.x,A.y+x[h-1].y,x[h-1].x+T):st(A.x,A.y,u+T)}}}Z(),j();function Z(){let q=s.length/3;if(d){let nt=0,T=R*nt;for(let ft=0;ft<z;ft++){let lt=D[ft];vt(lt[2]+T,lt[1]+T,lt[0]+T)}nt=h+m*2,T=R*nt;for(let ft=0;ft<z;ft++){let lt=D[ft];vt(lt[0]+T,lt[1]+T,lt[2]+T)}}else{for(let nt=0;nt<z;nt++){let T=D[nt];vt(T[2],T[1],T[0])}for(let nt=0;nt<z;nt++){let T=D[nt];vt(T[0]+R*h,T[1]+R*h,T[2]+R*h)}}n.addGroup(q,s.length/3-q,0)}function j(){let q=s.length/3,nt=0;pt(B,nt),nt+=B.length;for(let T=0,ft=E.length;T<ft;T++){let lt=E[T];pt(lt,nt),nt+=lt.length}n.addGroup(q,s.length/3-q,1)}function pt(q,nt){let T=q.length;for(;--T>=0;){let ft=T,lt=T-1;lt<0&&(lt=q.length-1);for(let ot=0,dt=h+m*2;ot<dt;ot++){let wt=R*ot,_t=R*(ot+1),A=nt+ft+wt,b=nt+lt+wt,W=nt+lt+_t,$=nt+ft+_t;X(A,b,W,$)}}}function st(q,nt,T){l.push(q),l.push(nt),l.push(T)}function vt(q,nt,T){it(q),it(nt),it(T);let ft=s.length/3,lt=M.generateTopUV(n,s,ft-3,ft-2,ft-1);ut(lt[0]),ut(lt[1]),ut(lt[2])}function X(q,nt,T,ft){it(q),it(nt),it(ft),it(nt),it(T),it(ft);let lt=s.length/3,ot=M.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);ut(ot[0]),ut(ot[1]),ut(ot[3]),ut(ot[1]),ut(ot[2]),ut(ot[3])}function it(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function ut(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ry(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gl[s.type]().fromJSON(s)),new i(n,t.options)}},sy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(d,1-g),new ht(y,1-f)]:[new ht(a,1-l),new ht(h,1-u),new ht(p,1-g),new ht(m,1-f)]}};function ry(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var vo=class i extends Ce{constructor(t=new os([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;qn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];qn.isClockWise(M)===!0&&(g[m]=M.reverse())}let y=qn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){let M=p[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,f=y.length;m<f;m++){let M=y[m],x=M[0]+u,v=M[1]+u,I=M[2]+u;n.push(x,v,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return oy(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function oy(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var xo=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,d=new F,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let M=[],x=f/n,v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let C=I/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(C+v,1-x),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let x=h[f][M+1],v=h[f][M],I=h[f+1][M],C=h[f+1][M+1];(f!==0||o>0)&&p.push(x,v,C),(f!==n-1||l<Math.PI)&&p.push(v,I,C)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(y,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wo=class extends pn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Mo=class extends pn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function kr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ay(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var as=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zl=class extends as{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:r=t,a=2*e-n;break;case ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:o=t,l=2*n-e;break;case ah:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+M*o[c+I]+x*o[l+I]+v*o[u+I];return r}},$l=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Kl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kr(e,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:kr(t.times,Array),values:kr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case _l:e=this.InterpolantFactoryMethodLinear;break;case jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return _l;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ay(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=_l;var yi=class extends ln{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Wr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends ln{};Jl.prototype.ValueTypeName="color";var jl=class extends ln{};jl.prototype.ValueTypeName="number";var Ql=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},bo=class extends ln{InterpolantFactoryMethodLinear(t){return new Ql(this.times,this.values,this.getValueSize(),t)}};bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends ln{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Wr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends ln{};tc.prototype.ValueTypeName="vector";var ec=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},ly=new ec,nc=class{constructor(t){this.manager=t!==void 0?t:ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var So=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ao=class extends So{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Pa=new ne,fu=new F,pu=new F,ic=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var sc=class extends ic{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eo=class extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var xc="\\[\\]\\.:\\/",cy=new RegExp("["+xc+"]","g"),wc="[^"+xc+"]",hy="[^"+xc.replace("\\.","")+"]",uy=/((?:WC+[\/:])*)/.source.replace("WC",wc),dy=/(WCOD+)?/.source.replace("WCOD",hy),fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wc),py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wc),my=new RegExp("^"+uy+dy+fy+py+"$"),gy=["material","materials","bones","map"],rc=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cy,"")}static parseTrackName(t){let e=my.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=rc;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);var mu=new ne,To=class{constructor(t,e,n=0,s=1/0){this.ray=new mi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(t,e=!0,n=[]){return oc(t,this,n,e),n.sort(gu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oc(t[s],this,n,e);return n.sort(gu),n}};function gu(i,t){return i.distance-t.distance}function oc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)oc(r[o],t,e,!0)}}var Gs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Co=class extends In{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Vu={type:"change"},bc={type:"start"},Wu={type:"end"},Uo=new mi,Gu=new nn,_y=Math.cos(70*Ru.DEG2RAD),xe=new F,Be=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mc=1e-6,No=class extends Co{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new on,this._lastTargetPosition=new F,this._quat=new on().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gs,this._sphericalDelta=new Gs,this._scale=1,this._panOffset=new F,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new F,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vy.bind(this),this._onPointerDown=yy.bind(this),this._onPointerUp=xy.bind(this),this._onContextMenu=Ty.bind(this),this._onMouseWheel=by.bind(this),this._onKeyDown=Sy.bind(this),this._onTouchStart=Ay.bind(this),this._onTouchMove=Ey.bind(this),this._onMouseDown=wy.bind(this),this._onMouseMove=My.bind(this),this._interceptControlDown=Cy.bind(this),this._interceptControlUp=Ry.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vu),this.update(),this.state=ie.NONE}update(t=null){let e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=xe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Uo.origin.copy(this.object.position),Uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uo.direction))<_y?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uo.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mc||this._lastTargetPosition.distanceToSquared(this.target)>Mc?(this.dispatchEvent(Vu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function yy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function vy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function xy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wu),this.state=ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function wy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(bc)}function My(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function by(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(bc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wu))}function Sy(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ay(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(bc)}function Ey(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function Ty(i){this.enabled!==!1&&i.preventDefault()}function Cy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ry(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Re={scale:.1039064800879708,elev:{main1:0,main2:5.5,n0:0,n4:10.5},slabs:[{floor:"n4",y:10.5,poly:[[.9,64.2],[-21.2,48.5],[-15.3,39.7],[-17.5,37.5],[-15.5,35.4],[-14.7,32.3],[-18.9,25.6],[-17.9,23.3],[-18.7,21.9],[-17.6,20.6],[-19.3,16.3],[-28.1,9.9],[-27.5,8],[-30.6,5.4],[-29.8,4.2],[-34.5,.3],[-28.4,-9.1],[3,16],[5.2,13.6],[4.2,11],[5.2,8.3],[4.3,7.2],[4.3,2.7],[5.3,1.7],[4.3,.6],[5.2,-.5],[4.4,-13.8],[9.2,-15.6],[11.4,-14.2],[11.2,22.3],[23.3,34.3]]},{floor:"n0",y:0,poly:[[-17.1,20.1],[-11.5,25.9],[-3.1,17.4],[15.6,39.5],[19.3,36],[20.7,37.5],[.4,64.9],[-21.9,49.2],[-18.1,43.3],[-17.5,33.4],[-15.3,30.6],[-21.5,24.4]]},{floor:"main2",y:5.5,poly:[[-45.5,-58.5],[-43.9,-60],[-38.9,-60.1],[-35.5,-64.2],[-7,-64.9],[-5.9,-55],[-1.7,-55.1],[1.4,-58.1],[7.4,-58.3],[8.6,-56.6],[11.7,-56.8],[13,-47.9],[24.8,-48.2],[46.8,-35.3],[34.1,-12.4],[32.2,-10.6],[5.2,-9.9],[-1.7,-13.7],[-3.4,-12.1],[-3.8,-12.8],[-1,-15.3],[-3.5,-19.8],[-5.7,-20],[-4.8,-21.3],[-6.4,-23],[-16.2,-24.1],[-17.3,-29.2],[-37.9,-39.6],[-39.6,-42.5],[-46.2,-45.7],[-46.8,-54.6]]},{floor:"main1",y:0,poly:[[-45.5,-58.5],[-44,-59.9],[-41.6,-60],[-39.1,-63.2],[-37.4,-62.2],[-38.6,-61],[-37.5,-60.1],[-34.8,-63.2],[-8.7,-63.9],[-7.6,-54.9],[-1.7,-55.1],[1.4,-58.1],[7.4,-58.2],[8.7,-56.6],[11.7,-56.7],[13,-47.9],[25.2,-48.1],[46.8,-35.3],[34.1,-12.4],[31.4,-10.6],[4,-10.2],[-15.7,-23.5],[-17.7,-29.3],[-38.2,-39.7],[-39.6,-42.5],[-46.1,-45.6],[-46.8,-53.6],[-45.6,-55]]}],rooms:{millennium:{floor:"main2",y:5.5,kind:"room",poly:[[38.5,-22.3],[36.6,-22.5],[34.6,-19.3],[13.3,-18.7],[13.2,-37.2],[10.5,-37.4],[10.6,-45.7],[23.1,-46.3],[44.6,-33.8]],obb:{cx:27.6,cz:-32.8,w:34,d:27.5,rot:3.115}},studio4:{floor:"n4",y:10.5,kind:"room",poly:[[1.7,33.4],[9.6,24.9],[11.1,25],[21.1,36.2],[19.6,37.5],[17.9,36.2],[10.8,43.3]],obb:{cx:11,cz:34.4,w:12.6,d:16.1,rot:2.409}},studio6:{floor:"n4",y:10.5,kind:"room",poly:[[-13.7,6.4],[-3.7,13.7],[-7.1,18.5],[-17,11.3]],obb:{cx:-10.4,cz:12.4,w:12.5,d:6,rot:-2.511}},studio3:{floor:"n0",y:0,kind:"room",poly:[[-9.3,32.1],[-5.3,36.3],[-6.1,38],[-4.6,39.7],[-13.3,50.1],[-18.8,46.4],[-13.7,38.8],[-13.6,41.4],[-12,39.9],[-11.6,35.7]],obb:{cx:-10.7,cz:41.6,w:17.2,d:8.1,rot:-.984}},studio1:{floor:"main1",y:0,kind:"room",poly:[[10,-44.3],[1.1,-44.4],[1.3,-54.5],[10.2,-54.6]],obb:{cx:5.6,cz:-49.5,w:10.4,d:9,rot:1.587}},century:{floor:"main2",y:5.5,kind:"hub",poly:[[-45.4,-57.9],[-21.4,-58.7],[-21.2,-39.8],[-31.9,-39.3],[-45.1,-46.1]],obb:{cx:-33.2,cz:-48.9,w:24.6,d:19.3,rot:3.127}},hub2:{floor:"main2",y:5.5,kind:"hub",poly:[[-17.3,-52.5],[-.9,-53.2],[-.3,-49.7],[.8,-50.3],[1.2,-54.5],[9.2,-54.7],[10.1,-53.9],[10.1,-48.3],[9.1,-47.2],[10.1,-47.3],[9.6,-38.1],[.2,-37.6],[-.4,-44.3],[-20.2,-43.6],[-20.5,-47.5],[-15.6,-48.2],[-15.6,-49.2],[-17.3,-49.2]],obb:{cx:-5.2,cz:-46,w:30.9,d:16.9,rot:3.13}},hub4:{floor:"n4",y:10.5,kind:"hub",poly:[[1.7,30.3],[-1.2,26.9],[7.5,17.7],[8,-7.6],[9.8,-7.5],[9.8,24.2],[8.8,23]],obb:{cx:7.8,cz:11.9,w:38.7,d:10,rot:-1.319}},saechsiluute:{floor:"n4",y:10.5,kind:"service",poly:[[-16.5,42.8],[-14.5,40.9],[-6.5,45.8],[-7.4,47.6],[-2.6,51.3],[-3.5,53.1],[3.2,58.6],[.4,62.9],[-20.1,48.2]],obb:{cx:-7,cz:51.4,w:25.5,d:9.9,rot:-2.519}}},nodes:{welcome:[7.9,5.5,-40.3],esc_bot:[-.7,5.5,-15.2],esc_top:[9.8,10.5,-15.2],skywalk_mid:[10.3,10.5,-6.5],h4_in:[9.8,10.5,13.9],h4_mid:[6.6,10.5,22.1],n4_corr:[-6.7,10.5,36.9],lift_top:[.9,10.5,41.2],lift_bot:[.9,0,41.2],entr_n:[-5.7,0,24.1],entr_mid:[-.1,0,34],stair_top:[8.6,5.5,-33.9],stair_bot:[4.8,0,-30.3],s1_door:[5.5,0,-42.3],c_door:[-21.4,5.5,-58.7],h2_door:[.2,5.5,-51],s6_door:[-7.8,10.5,10],s4_door:[5.6,10.5,30.1],s3_door:[-5.7,0,35.4],m_door:[16.8,5.5,-38.8],s6_link:[10.6,10.5,-2.1]},bbox:[-46.8,46.8,-64.9,64.9]};var Xu=[["c_door","h2_door"],["h2_door","welcome"],["welcome","m_door"],["welcome","esc_bot"],["h2_door","stair_top"],["stair_top","stair_bot"],["stair_bot","s1_door"],["esc_bot","esc_top"],["esc_top","skywalk_mid"],["skywalk_mid","s6_link"],["s6_link","s6_door"],["skywalk_mid","h4_in"],["h4_in","h4_mid"],["h4_mid","s4_door"],["h4_mid","lift_top"],["lift_top","lift_bot"],["lift_bot","entr_mid"],["entr_mid","entr_n"],["entr_mid","s3_door"]],qu={century:"c_door",hub2:"h2_door",millennium:"m_door",studio1:"s1_door",studio3:"s3_door",studio4:"s4_door",studio6:"s6_door",hub4:"h4_mid"};function Oo(i){let t=new Map;for(let[r,o]of Xu){let a=Re.nodes[r],l=Re.nodes[o];if(!a||!l)continue;let c=Math.hypot(a[0]-l[0],a[1]-l[1],a[2]-l[2])+(Math.abs(a[1]-l[1])>1?6:0);t.has(r)||t.set(r,[]),t.has(o)||t.set(o,[]),t.get(r).push([o,c]),t.get(o).push([r,c])}let e=(r,o)=>{let a=new Map([[r,0]]),l=new Map,c=new Set(t.keys());for(;c.size;){let u=null;for(let d of c)a.has(d)&&(u==null||a.get(d)<a.get(u))&&(u=d);if(u==null||u===o)break;c.delete(u);for(let[d,p]of t.get(u))(!a.has(d)||a.get(u)+p<a.get(d))&&(a.set(d,a.get(u)+p),l.set(d,u))}let h=[o];for(;h[0]!==r;){let u=l.get(h[0]);if(!u)return[r,o];h.unshift(u)}return h},n=i.length,s=[];for(let r=0;r<n;r++)for(let o=0;o<n;o++){if(r===o){s.push(null);continue}let a=e(qu[i[r]],qu[i[o]]),l=new Float32Array(a.length*3),c=new Float32Array(a.length);a.forEach((h,u)=>{let d=Re.nodes[h];l[u*3]=d[0],l[u*3+1]=d[1],l[u*3+2]=d[2],u&&(c[u]=c[u-1]+Math.hypot(l[u*3]-l[u*3-3],l[u*3+1]-l[u*3-2],l[u*3+2]-l[u*3-1]))}),s.push({pts:l,cum:c,len:c[c.length-1],n:a.length,names:a})}return{routes:s,edges:Xu.filter(([r,o])=>Re.nodes[r]&&Re.nodes[o])}}var Jn={open:"#4fd6a8",filling:"#f4c24f",full:"#f0605d",running:"#6b8cff",none:"#7a869c"},Xs={};for(let[i,t]of Object.entries(Jn))Xs[i]=new Ft(t);var Fo=i=>(Xs[i]||Xs.none).clone(),Iy=i=>Xs[i]||Xs.none,Yu={n4:"Floor 4 \xB7 north building",n0:"Ground floor \xB7 north building",main2:"2nd floor \xB7 main building",main1:"1st floor \xB7 main building"};function Zu(i,t){let e=new io({antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setClearColor(461590,1),i.appendChild(e.domElement);let n=new ro;n.fog=new so(461590,220,520);let s=new Le(38,1,1,1200),r=new No(s,e.domElement);r.enableDamping=!0,r.dampingFactor=.08,r.maxPolarAngle=Math.PI*.49,r.minDistance=25,r.maxDistance=420,r.screenSpacePanning=!0,n.add(new Ao(11191551,1712182,1.15));let o=new Eo(16777215,.9);o.position.set(60,120,80),n.add(o);let a={pos:new F(136,66,34),target:new F(0,24,0)};s.position.copy(a.pos),r.target.copy(a.target);let l=new Ye;n.add(l);let c=R=>new wo({color:R.startsWith("n")?1779524:1516864,transparent:!0,opacity:.42,roughness:.9,metalness:0,depthWrite:!1,side:qe}),h=new Kn({color:5930944,transparent:!0,opacity:.85}),u=R=>new os(R.map(z=>new ht(z[0],-z[1])));for(let R of Re.slabs){let z=new yo(u(R.poly),{depth:.5,bevelEnabled:!1});z.rotateX(-Math.PI/2);let L=new ge(z,c(R.floor));L.position.y=R.y-.5,L.renderOrder=1,l.add(L);let k=new gi(new rs(z,20),h);k.position.y=R.y-.5,l.add(k)}let d={};for(let R of je){let z=Re.rooms[R.id];if(!z)continue;let L=new vo(u(z.poly));L.rotateX(-Math.PI/2);let k=new mn({color:15771744,transparent:!0,opacity:.16,depthWrite:!1,side:qe}),Y=new ge(L,k);Y.position.y=z.y+.06,Y.renderOrder=2,l.add(Y);let tt=new gi(new rs(L),new Kn({color:15771744,transparent:!0,opacity:.45}));tt.position.y=z.y+.07,l.add(tt),d[R.id]=Y}{let{edges:R}=Oo(Wt.map(Y=>Y.id)),z=[];for(let[Y,tt]of R)z.push(...Re.nodes[Y],...Re.nodes[tt]);let L=new Ce;L.setAttribute("position",new ce(z,3));let k=new gi(L,new Kn({color:8369407,transparent:!0,opacity:.22}));l.add(k)}let p={},g=[];for(let R of Wt){let z=Re.rooms[R.id];if(!z)continue;let L=z.obb,k=3.6,Y=new Ye;Y.position.set(L.cx,z.y,L.cz),Y.rotation.y=-L.rot;let tt=new $n(L.w,k,L.d);tt.translate(0,k/2,0);let rt=new mn({color:Fo("none"),transparent:!0,opacity:.07,depthWrite:!1}),bt=new ge(tt,rt);bt.renderOrder=3,bt.userData.roomId=R.id,Y.add(bt),g.push(bt);let Z=new Kn({color:Fo("none"),transparent:!0,opacity:.95});Y.add(new gi(new rs(tt),Z));let j=new $n(L.w*.98,1,L.d*.98);j.translate(0,.5,0);let pt=new mn({color:Fo("none"),transparent:!0,opacity:.3,depthWrite:!1}),st=new ge(j,pt);st.scale.y=.02,st.renderOrder=2,Y.add(st),l.add(Y),p[R.id]={id:R.id,def:R,geo:z,group:Y,glass:bt,glassMat:rt,edgeMat:Z,liq:st,liqMat:pt,color:Fo("none"),anchor:new F(L.cx,z.y+k+.6,L.cz),curFill:0}}let y=[],m=(R,z,L,k)=>{let Y=document.createElement("div");Y.className="lbl "+R,Y.innerHTML=z,t.appendChild(Y);let tt={el:Y,anchor:L,lx:-1e9,ly:-1e9,...k};return y.push(tt),tt};for(let R of Wt){let z=p[R.id];if(!z)continue;let L=m("room",`<b>${R.name}</b><span class="cnt"></span><i class="bar"><u></u></i>`,z.anchor,{roomId:R.id});z.label=L,L.cnt=L.el.querySelector(".cnt"),L.bar=L.el.querySelector("u"),L.barWrap=L.el.querySelector(".bar")}for(let R of je){let z=Re.rooms[R.id];if(!z)continue;let L=m("hub",`<b>${R.name}</b><span class="cnt"></span>`,new F(z.obb.cx,z.y+3.2,z.obb.cz),{hubId:R.id});L.cnt=L.el.querySelector(".cnt")}let f={};for(let R of Re.slabs){let z=R.poly.map(Y=>Y[0]),L=Math.min(...z),k=R.poly.reduce((Y,tt)=>tt[0]===L?tt:Y,R.poly[0]);f[R.floor]=new F(k[0]-2,R.y,k[1]),m("floor",Yu[R.floor],f[R.floor])}function M(){let R=i.clientWidth||800,z=i.clientHeight||600;e.setSize(R,z,!1),e.domElement.style.width=R+"px",e.domElement.style.height=z+"px",s.aspect=R/z,s.fov=R/z<.8?52:38,s.updateProjectionMatrix(),M.once||(M.once=!0,R/z<.8&&(a.pos.set(92,108,150),s.position.copy(a.pos)))}window.addEventListener("resize",M),M();let x=null;function v(R,z,L=900){x={t0:performance.now(),ms:L,p0:s.position.clone(),q0:r.target.clone(),p1:R.clone(),q1:z.clone()}}let I=R=>R<.5?4*R*R*R:1-Math.pow(-2*R+2,3)/2;function C(R){if(!x)return;let z=Math.min(1,(R-x.t0)/x.ms),L=I(z);s.position.lerpVectors(x.p0,x.p1,L),r.target.lerpVectors(x.q0,x.q1,L),z>=1&&(x=null)}r.addEventListener("start",()=>{x=null});function P(){v(a.pos,a.target)}function N(R){let z=p[R];if(!z)return;let L=new F(z.group.position.x,z.group.position.y+2,z.group.position.z),k=s.position.clone().sub(r.target).normalize(),Y=R==="millennium"?85:55;v(L.clone().add(k.multiplyScalar(Y)),L)}let w=new F,_=new Float32Array(64);function E(){let R=i.clientWidth,z=i.clientHeight,L=0;for(let k of y){if(w.copy(k.anchor).project(s),!(w.z<1&&w.z>-1&&Math.abs(w.x)<1.15&&Math.abs(w.y)<1.15)){k.shown!==!1&&(k.el.style.display="none",k.shown=!1);continue}k.shown===!1&&(k.el.style.display="",k.shown=!0);let tt=(w.x+1)*.5*R,rt=(1-w.y)*.5*z;if(k.roomId||k.hubId){(!k.w||k.wAt!==R)&&(k.w=k.el.offsetWidth||90,k.h=k.el.offsetHeight||34,k.wAt=R);for(let bt=0;bt<8;bt++){let Z=!1;for(let j=0;j<L;j++){let pt=j*4;if(tt-k.w/2<_[pt+2]+3&&tt+k.w/2>_[pt]-3&&rt-k.h<_[pt+3]&&rt>_[pt+1]){rt=_[pt+1]-3,Z=!0;break}}if(!Z)break}if(L<16){let bt=L*4;_[bt]=tt-k.w/2,_[bt+1]=rt-k.h,_[bt+2]=tt+k.w/2,_[bt+3]=rt,L++}}(Math.abs(tt-k.lx)>.6||Math.abs(rt-k.ly)>.6)&&(k.lx=tt,k.ly=rt,k.el.style.transform=`translate(-50%,-100%) translate(${tt.toFixed(1)}px,${rt.toFixed(1)}px)`)}}function O(R,z,L,k,Y,tt){let rt=p[R];if(!rt)return;let bt=Iy(L);rt.color.lerp(bt,.15),rt.curFill+=(z-rt.curFill)*.2;let Z=Math.max(.02,rt.curFill);rt.liq.scale.y=3.5*Z,rt.liqMat.color.copy(rt.color),rt.liqMat.opacity=k?.32:.16,rt.edgeMat.color.copy(rt.color),rt.edgeMat.opacity=Y||tt?1:.7,rt.glassMat.color.copy(rt.color),rt.glassMat.opacity=Y?.18:tt?.2:.07}let D=new To,B=new ht;function U(R,z,L){let k=e.domElement.getBoundingClientRect();B.set((R-k.left)/k.width*2-1,-((z-k.top)/k.height)*2+1),D.setFromCamera(B,s);let Y=D.intersectObjects(L,!1);return Y.length?Y[0].object:null}return{renderer:e,scene:n,camera:s,controls:r,rooms:p,hitMeshes:g,hubMeshes:d,labels:y,resize:M,flyTo:v,resetView:P,focusRoom:N,stepAnim:C,updateLabels:E,setRoomState:O,pick:U,home:a,FLOOR_LABEL:Yu}}var Py=1.25;function $u(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ly(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let o=e[s],a=e[r];o[1]>t!=a[1]>t&&i<(a[0]-o[0])*(t-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function Ku(i,t){let e=new _o(.28,.85,2,6);e.translate(0,.7,0);let n=new Mo({color:16777215,emissive:2241348,emissiveIntensity:.6}),s=new lo(e,n,t);s.frustumCulled=!1,s.instanceMatrix.setUsage(gc),s.instanceColor=new ss(new Float32Array(t*3),3),s.instanceColor.setUsage(gc),i.add(s);let r=s.instanceMatrix.array,o=s.instanceColor.array,a=$u(99),l=new Float32Array(t),c=new Float32Array(t),h=new Float32Array(t);for(let O=0;O<t;O++)l[O]=a(),c[O]=a()*6.283,h[O]=a()*6.283;let u=null,d=0,p=0,g=null,y=null,m=null,f=null,M=null,x=new Float32Array(24),v=new Float64Array(3),I=0;function C(){y=[];for(let O=0;O<d;O++){let D=M[O],B=Re.rooms[D],U=new Float32Array(t*3),R=$u(1e3+O*31);if(!B){y.push(U);continue}let z=B.kind==="hub",L=B.obb,k=Math.cos(L.rot),Y=Math.sin(L.rot);for(let tt=0;tt<t;tt++){let rt,bt;for(let Z=0;Z<60;Z++){let j=(R()-.5)*(L.w-1.6),pt=(R()-.5)*(L.d-1.6),st=z?j:Math.round(j/.95)*.95,vt=pt;if(rt=L.cx+st*k-vt*Y,bt=L.cz+st*Y+vt*k,!z||Ly(rt,bt,B.poly))break}U[tt*3]=rt,U[tt*3+1]=B.y+.12,U[tt*3+2]=bt}y.push(U)}}function P(O){u=O,d=O.locIds.length,p=O.K,M=O.locIds,g=Oo(M),(!y||y.length!==d)&&C(),m=new Int16Array(t*p);for(let D=0;D<t;D++){let B=0;for(let U=1;U<p;U++)O.loc[D*p+U]!==O.loc[D*p+U-1]&&(B=U),m[D*p+U]=B}}function N(O,D,B,U){x[O*3]=D,x[O*3+1]=B,x[O*3+2]=U}function w(O,D){let{t0:B,step:U}=u,R=D-B,z=Math.floor(R/U);z<0&&(z=0),z>p-1&&(z=p-1);let L=O*p,k=z;z+1<p&&u.loc[L+z+1]!==u.loc[L+z]&&R>=(z+l[O])*U&&(k=z+1);let Y=m[L+k],tt=u.loc[L+k];if(I=tt,Y===0)return _(tt,O),0;let rt=u.loc[L+Y-1],bt=(Y-1+l[O])*U,Z=R-bt,j=g.routes[rt*d+tt],pt=y[rt],st=y[tt],vt=pt[O*3],X=pt[O*3+1],it=pt[O*3+2],ut=st[O*3],q=st[O*3+1],nt=st[O*3+2],T=j.n,ft=j.pts,lt=Math.sqrt((ft[0]-vt)*(ft[0]-vt)+(ft[1]-X)*(ft[1]-X)+(ft[2]-it)*(ft[2]-it)),ot=ut-ft[(T-1)*3],dt=q-ft[(T-1)*3+1],wt=nt-ft[(T-1)*3+2],_t=Math.sqrt(ot*ot+dt*dt+wt*wt),A=lt+j.len+_t,b=A/Py*1e3;if(Z>=b||Z<0)return _(tt,O),0;let W=Z/b*A;if(W<lt){let Ct=W/lt;return v[0]=vt+(ft[0]-vt)*Ct,v[1]=X+(ft[1]-X)*Ct,v[2]=it+(ft[2]-it)*Ct,1}if(W-=lt,W>=j.len){let Ct=_t>0?(W-j.len)/_t:1,yt=ft[(T-1)*3],Et=ft[(T-1)*3+1],qt=ft[(T-1)*3+2];return v[0]=yt+(ut-yt)*Ct,v[1]=Et+(q-Et)*Ct,v[2]=qt+(nt-qt)*Ct,1}let $=1;for(;$<T-1&&j.cum[$]<W;)$++;let at=j.cum[$]-j.cum[$-1]||1,et=(W-j.cum[$-1])/at;return v[0]=ft[($-1)*3]+(ft[$*3]-ft[($-1)*3])*et,v[1]=ft[($-1)*3+1]+(ft[$*3+1]-ft[($-1)*3+1])*et,v[2]=ft[($-1)*3+2]+(ft[$*3+2]-ft[($-1)*3+2])*et,1}function _(O,D){let B=y[O];v[0]=B[D*3],v[1]=B[D*3+1],v[2]=B[D*3+2]}function E(O,D,B){if(u){for(let U=0;U<t;U++){let R=w(U,O),z=v[0],L=v[1],k=v[2],Y=1,tt=I,rt,bt,Z;R?(rt=.55,bt=.95,Z=1,Y=1.15):B[tt]?(z+=Math.sin(D*.31+c[U])*.9,k+=Math.cos(D*.27+h[U])*.9,rt=1,bt=.78,Z=.5):(rt=x[tt*3],bt=x[tt*3+1],Z=x[tt*3+2]);let j=U*16;r[j]=Y,r[j+1]=0,r[j+2]=0,r[j+3]=0,r[j+4]=0,r[j+5]=Y,r[j+6]=0,r[j+7]=0,r[j+8]=0,r[j+9]=0,r[j+10]=Y,r[j+11]=0,r[j+12]=z,r[j+13]=L,r[j+14]=k,r[j+15]=1,o[U*3]=rt,o[U*3+1]=bt,o[U*3+2]=Z}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0}}return{mesh:s,setModel:P,update:E,setLocColor:N}}function Dy(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Uy(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.45,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new uo(i);return n.colorSpace=Ne,n}var Ju=new Ft(10129348),ko=2.2,Ny=9,ju=14;function Qu(i,t,e,n){let s=Uy(),r=new Ye;i.add(r);let o=[],a=null,l="cum",c=null,h=!0,u=[],d=new F;function p(){for(let _ of o)r.remove(_.g),_.matA.dispose(),_.matB.dispose(),_.label.remove();o=[],u.length=0}function g(_){let E=!a||a.topics.length!==_.topics.length||a.topics.some((D,B)=>D.id!==_.topics[B].id);if(a=_,!E)return;p();let O=_.topics.length;_.topics.forEach((D,B)=>{let U=Dy(777+B*13),R=(.52+.38*U()+(D.kind==="keyword"?.1:0))%1,z=new Ft().setHSL(R,.55,.62),L=new Ft().setHSL(R,.5,.82),k=new is({map:s,color:z.clone(),transparent:!0,opacity:.5,depthWrite:!1,fog:!0}),Y=new is({map:s,color:L.clone(),transparent:!0,opacity:.55,depthWrite:!1,fog:!0}),tt=new Ye,rt=Math.sqrt((B+.6)/O),bt=B*2.399963;tt.position.set(Math.cos(bt)*rt*64,34+B*37%5*3.2,Math.sin(bt)*rt*76);let Z=[];for(let vt=0;vt<ju;vt++){let X=U()*6.283,it=Math.acos(2*U()-1),ut=.35+.65*Math.cbrt(U()),q=Math.sin(it)*Math.cos(X)*ut,nt=Math.cos(it)*ut*.55,T=Math.sin(it)*Math.sin(X)*ut,ft=new ao(nt>.05?Y:k);ft.position.set(q,nt,T);let lt=.9+U()*.8;ft.userData={x:q,y:nt,z:T,s:lt,ph:U()*6.283},ft.renderOrder=10,tt.add(ft),Z.push(ft)}r.add(tt);let j=tt.position.y,pt=new ge(new xo(1,8,6),new mn({visible:!1}));pt.userData.topicIdx=B,tt.add(pt),u.push(pt);let st=document.createElement("div");st.className="lbl cloud",st.innerHTML="<b></b><small></small>",st.querySelector("b").textContent=D.short,st.dataset.topic=B,t.appendChild(st),o.push({g:tt,puffs:Z,matA:k,matB:Y,baseCol:z,lightCol:L,hit:pt,label:st,nameEl:st.querySelector("b"),subEl:st.querySelector("small"),r:ko,target:ko,proj:0,val:0,hue:R,shown:!0,lx:-1e9,ly:-1e9,baseY:j,w:0,h:0,topic:D})})}let y=0,m=0;function f(_,E){let O=Math.min(a.K-1,Math.max(0,(E-a.t0)/a.step)),D=Math.floor(O),B=Math.min(a.K-1,D+1),U=O-D,R=l==="cum"?a.topicCum[_]:a.topicNow[_],z=l==="cum"?a.topicProjCum[_]:a.topicProjNow[_],L=R[D]*(1-U)+R[B]*U,k=z[D]*(1-U)+z[B]*U;y=L,m=L>1e-6?k/L:0}let M=0;function x(_,E,O,D){if(!a)return;let B=l==="cum"?a.topicMaxCum:a.topicMaxNow,U=0;for(let L=0;L<o.length;L++)f(L,_),y>U&&(U=y);let R=Math.max(U,.3*B,1e-6),z=D?1:1-Math.exp(-E*3.2);for(let L=0;L<o.length;L++){let k=o[L];f(L,_);let Y=y,tt=m;k.val=Y,k.target=ko+(Ny-ko)*Math.sqrt(Math.min(1,Y/R)),k.r+=(k.target-k.r)*z,k.proj+=(tt-k.proj)*z;let rt=c===k.topic.id,bt=c&&!rt,Z=(.2+.4*Math.min(1,Y/R*1.4+.15))*(1-.4*k.proj)*(bt?.45:1)*(rt?1.5:1);k.matA.opacity=Math.min(.85,Z),k.matB.opacity=Math.min(.9,Z*1.1),k.matA.color.copy(k.baseCol).lerp(Ju,k.proj*.65),k.matB.color.copy(k.lightCol).lerp(Ju,k.proj*.55),k.g.visible=h,k.hit.scale.setScalar(k.r*1.1);let j=k.r;for(let pt=0;pt<ju;pt++){let st=k.puffs[pt],vt=st.userData,X=Math.sin(O*.5+vt.ph)*.06;st.position.set((vt.x+X)*j,(vt.y+X*.6)*j,vt.z*j);let it=vt.s*j*.95;st.scale.set(it,it,1)}k.g.position.y=k.baseY+Math.sin(O*.3+L)*.8}M++%6===0&&v()}function v(){let _=n.clientWidth,E=n.clientHeight,O=o.map((B,U)=>U).sort((B,U)=>o[U].r-o[B].r),D=[];for(let B of O){let U=o[B];if(!h){U.shown&&(U.label.style.display="none",U.shown=!1);continue}d.copy(U.g.position),d.y+=U.r*.15,d.project(e);let R=(d.x+1)*.5*_,z=(1-d.y)*.5*E;if(d.z>1||R<-50||R>_+50||z<-20||z>E+20){U.shown&&(U.label.style.display="none",U.shown=!1);continue}U.w||(U.w=U.label.offsetWidth||80,U.h=U.label.offsetHeight||24);let L=c===U.topic.id,k=[R-U.w/2,z-U.h/2,R+U.w/2,z+U.h/2],Y=!1;if(!L){for(let bt of D)if(k[0]<bt[2]+4&&k[2]>bt[0]-4&&k[1]<bt[3]+2&&k[3]>bt[1]-2){Y=!0;break}}if(Y){U.shown&&(U.label.classList.add("off"),U.shown=!1);continue}D.push(k),U.shown||(U.label.classList.remove("off"),U.shown=!0),U.label.style.display="",(Math.abs(R-U.lx)>.6||Math.abs(z-U.ly)>.6)&&(U.lx=R,U.ly=z,U.label.style.transform=`translate(-50%,-50%) translate(${R.toFixed(1)}px,${z.toFixed(1)}px)`);let tt=U.proj>.5,rt=c&&!L?.35:1;U.hlS!==L&&(U.hlS=L,U.label.classList.toggle("hl",L)),U.pjS!==tt&&(U.pjS=tt,U.label.classList.toggle("proj",tt)),U.opS!==rt&&(U.opS=rt,U.label.style.opacity=rt)}}function I(_){l=_}function C(_){c=_,v()}function P(_){h=_;for(let E of o)E.g.visible=_;v()}function N(){return o.map(_=>_.r)}function w(_){let E=o[_];return E?{topic:E.topic,val:E.val,proj:E.proj}:null}return{setModel:g,update:x,setMode:I,setHighlight:C,setVisible:P,sizes:N,hitSpheres:u,describe:w,get clouds(){return o},get mode(){return l}}}var se=(i,t=document)=>t.querySelector(i),Oy=new Intl.DateTimeFormat("en-GB",{timeZone:er,hour:"2-digit",minute:"2-digit",hour12:!1}),Fy=new Intl.DateTimeFormat("en-GB",{timeZone:er,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),ky=new Intl.DateTimeFormat("en-GB",{timeZone:er,weekday:"short",day:"numeric",month:"short"}),Dn=i=>Oy.format(i),Sc=i=>Fy.format(i),_n=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),By={open:"Open",filling:"Filling",full:"Full",running:"Running",none:"Idle"},zy={millennium:"#7c9cff",studio4:"#59c9d9",studio6:"#8f8cf2",studio3:"#e09bd0",studio1:"#7fd6a0"};function td(i){let t=null,e={play:se("#btn-play"),prev:se("#btn-prev"),next:se("#btn-next"),speed:se("#sel-speed"),live:se("#btn-live"),clockT:se("#clock-t"),clockSub:se("#clock-sub"),tl:se("#timeline"),rows:se(".tl-rows"),ticks:se(".tl-ticks"),cov:se(".tl-cov"),now:se(".tl-now"),head:se(".tl-head"),hover:se(".tl-hover"),panel:se("#panel"),tip:se("#tip"),legend:se("#legend"),chipMode:se("#chip-mode"),chipData:se("#chip-data"),btnClouds:se("#btn-clouds"),btnTopic:se("#btn-topicmode")},n=new Map,s=null,r=null,o="";e.play.addEventListener("click",()=>i.togglePlay()),e.prev.addEventListener("click",()=>i.jump(-1)),e.next.addEventListener("click",()=>i.jump(1)),e.speed.addEventListener("change",()=>i.setSpeed(+e.speed.value)),e.live.addEventListener("click",()=>i.goLive()),se("#btn-reset").addEventListener("click",()=>i.resetView()),e.btnClouds.addEventListener("click",()=>{let M=i.toggleClouds();e.btnClouds.classList.toggle("on",M),e.btnClouds.setAttribute("aria-pressed",M)}),e.btnTopic.addEventListener("click",()=>i.toggleTopicMode()),se("#btn-legend").addEventListener("click",()=>{e.legend.hidden=!e.legend.hidden}),se("#legend .close").addEventListener("click",()=>{e.legend.hidden=!0});let a=M=>(M-t.t0)/(t.t1-t.t0)*100,l=M=>{let x=e.tl.getBoundingClientRect();return t.t0+Math.min(1,Math.max(0,(M-x.left)/x.width))*(t.t1-t.t0)},c=!1;e.tl.addEventListener("pointerdown",M=>{t&&(c=!0,e.tl.setPointerCapture(M.pointerId),i.seek(l(M.clientX)))}),e.tl.addEventListener("pointermove",M=>{if(!t)return;let x=l(M.clientX);e.hover.hidden=!1,e.hover.style.left=a(x)+"%",e.hover.textContent=Dn(x),c&&i.seek(x)}),e.tl.addEventListener("pointerup",()=>{c=!1}),e.tl.addEventListener("pointerleave",()=>{e.hover.hidden=!0}),e.tl.addEventListener("keydown",M=>{M.key==="ArrowLeft"&&(i.seek(i.getT()-6e4),M.preventDefault(),M.stopPropagation()),M.key==="ArrowRight"&&(i.seek(i.getT()+6e4),M.preventDefault(),M.stopPropagation())});function h(){e.rows.innerHTML="",e.ticks.innerHTML="",n=new Map;let M=t.t1-t.t0;for(let v=0;v<=M/36e5;v++){let I=t.t0+v*36e5,C=document.createElement("i");C.style.left=a(I)+"%",C.innerHTML=`<span>${Dn(I)}</span>`,e.ticks.appendChild(C)}let x=100/Wt.length;Wt.forEach((v,I)=>{let C=document.createElement("div");C.className="tl-row",C.style.top=`calc(${I} * (100% - 8px) / ${Wt.length-1})`,C.innerHTML=`<span class="rn">${v.short}</span>`;for(let P of t.sessions.filter(N=>N.roomId===v.id)){let N=document.createElement("div");N.className="blk"+(P.hasData?"":" proj"),N.style.left=a(P.start)+"%",N.style.width=Math.max(.35,a(P.end)-a(P.start))+"%",N.style.setProperty("--c",zy[v.id]),N.style.setProperty("--o",(.35+.6*Math.min(1,P.pop.score)).toFixed(2)),N.title=`${Dn(P.start)}\u2013${Dn(P.end)} \xB7 ${v.name} \xB7 ${P.title}`,N.dataset.sid=P.id,C.appendChild(N),n.set(P.id,N)}e.rows.appendChild(C)}),e.rows.onclick=null}function u(){e.cov.innerHTML="";let M=t.covered,x=0;for(;x<t.K;){if(!M[x]){x++;continue}let v=x;for(;v+1<t.K&&M[v+1];)v++;let I=document.createElement("i");I.style.left=a(t.t0+x*t.step)+"%",I.style.width=Math.max(.2,a(t.t0+(v+1)*t.step)-a(t.t0+x*t.step))+"%",e.cov.appendChild(I),x=v+1}}function d(M){let x=M>=t.t0&&M<=t.t1;e.now.style.display=x?"block":"none",x&&(e.now.style.left=a(M)+"%")}function p(M){if(!M.hasData)return"No room samples yet for this session, so everything shown for it is a projection from its format, room size and the popularity of its topics so far.";let x=M.points,v=x[0],I=w=>Math.round((M.start-w)/6e4),C=x.find(w=>w.level==="filling"||w.level==="full"),P=x.find(w=>w.level==="full"),N=[];return v.level==="running"?N.push("First recorded sample was already \u201Crunning\u201D, so the fill history before the start is missing and the level is carried over from the previous session / a prior."):(C?N.push(C.t<M.start?`Reached \u201C${C.level}\u201D ${I(C.t)} min before the start.`:`Reached \u201C${C.level}\u201D only after the start.`):N.push("Stayed \u201Copen\u201D until the start."),P&&P!==C&&N.push(`\u201CFull\u201D ${P.t<M.start?I(P.t)+" min before the start":"after the start"}.`)),N.join(" ")}function g(M,x){let v=t.sessions.filter(I=>I.roomId===M);return v.find(I=>x>=I.start&&x<I.end)||v.find(I=>I.start>x)||v[v.length-1]}function y(M,x){if(!s){e.panel.hidden=!0;return}let v=Wt.find(D=>D.id===s),I=g(s,M),P=t.at(M).rooms[s],N=t.levelAt(s,M),w=[s,I&&I.id,N.level,N.rec,Math.round(P.count),t.nSamples].join("|");if(!x&&w===o&&!e.panel.hidden)return;o=w;let _=Jn[N.idle?"none":N.level]||Jn.none,E=t.sessions.filter(D=>D.roomId===s),O=`<button class="close" aria-label="Close">\xD7</button><h2>${_n(v.name)}</h2><div class="sub">${v.cap} seats (assumed) \xB7 ${_n(i.floorLabel(v.floor))}</div>`;if(O+=`<div class="lv"><i style="background:${_}"></i>${_n(By[N.idle?"none":N.level])} <span class="tag ${N.rec?"":"p"}">${N.rec?"measured level":"projected"}</span></div>`,O+=`<div class="big">\u2248 ${Math.round(P.count)} <small>of ${v.cap} \xB7 estimated headcount</small></div><div class="meter"><u style="width:${Math.min(100,P.fill*100).toFixed(0)}%"></u></div>`,I){let D=I.speakers.length?I.speakers.join(", ")+(I.company.length?" \xB7 "+[...new Set(I.company)].join(", "):""):"";O+=`<div class="sess"><div class="sub">${M>=I.start&&M<I.end?"Now":M<I.start?"Next":"Last"} \xB7 ${Dn(I.start)}\u2013${Dn(I.end)} \xB7 ${_n(I.format)}</div><h3>${_n(I.title)}</h3>`,D&&(O+=`<div class="sub">${_n(D)}</div>`),O+=`<div>${I.topics.slice(0,4).map(U=>{let R=t.topics.find(z=>z.id===U.id);return R?`<span class="tag">${_n(R.short)}</span>`:""}).join("")}</div>`;let B=Math.round(Math.min(1,I.pop.score)*100);O+=`<div class="why"><b>Popularity ${B}/100</b> ${I.hasData?"":'<span class="tag p">projected</span>'}<div class="meter"><u style="width:${B}%"></u></div>${_n(p(I))}</div>`,I.pop.unmet&&(O+=`<div class="warn">Full room with only ${v.cap} seats: likely unmet demand (more people wanted in than fitted).</div>`),I.hasData&&(O+=`<div class="why" style="color:var(--muted)">Estimated peak \u2248 ${Math.round(I.peakCount)} of ${v.cap} seats.</div>`)}O+=`<div class="sess"><div class="sub">Schedule in this room</div><ul class="up">${E.map(D=>`<li data-t="${D.start}" style="${I&&D.id===I.id?"color:var(--text)":""}">${Dn(D.start)} \xB7 ${_n(D.title.slice(0,44))}${D.title.length>44?"\u2026":""}</li>`).join("")}</ul></div>`,e.panel.innerHTML=O,e.panel.hidden=!1,se(".close",e.panel).onclick=()=>i.selectRoom(null),e.panel.querySelectorAll("li[data-t]").forEach(D=>{D.onclick=()=>i.seek(+D.dataset.t-5*6e4)})}function m(M,x,v){if(!M){e.tip.hidden=!0;return}let{topic:I,val:C,proj:P}=M,N=t.sessions.filter(B=>B.topics.some(U=>U.id===I.id)),w=i.topicMode()==="cum"?`\u2248 ${Math.round(C)} audience-minutes so far`:`\u2248 ${Math.round(C)} people in sessions on this topic now`;e.tip.innerHTML=`<b>${_n(I.label)}</b><div class="row">${w}${P>.5?' <span class="row p">(mostly projected)</span>':""}</div><div class="row">${I.kind==="keyword"?"Keyword from session descriptions":"Curated session topic"} \xB7 ${N.length} session${N.length===1?"":"s"}</div><div class="row">${N.slice(0,6).map(B=>`${Dn(B.start)} ${Wt.find(U=>U.id===B.roomId).short}`).join(" \xB7 ")}${N.length>6?" \u2026":""}</div>`,e.tip.hidden=!1;let _=e.tip.offsetWidth,E=e.tip.offsetHeight,O=window.innerWidth,D=window.innerHeight;e.tip.style.left=Math.max(8,Math.min(O-_-8,x+14))+"px",e.tip.style.top=Math.max(8,Math.min(D-E-8,v+14))+"px"}function f(M){r=M;for(let[x,v]of n){let I=t.sessions.find(C=>C.id===x);v.classList.toggle("hl",!!M&&I.topics.some(C=>C.id===M))}}return{setModel(M){let x=!t;t=M,h(),u(),s&&y(i.getT(),!0),r&&f(r),x&&(se("#lg-crowd").textContent=M.crowd)},setHead(M){e.head.style.left=a(M)+"%"},update(M,x){let v=t.at(M).covered;e.clockT.textContent=Sc(M),e.clockSub.textContent=ky.format(M)+(x.live?" \xB7 live":"")+(v?"":" \xB7 projected"),e.chipMode.textContent=v?x.demo?"Synthetic data":"Recorded levels":"Projected \xB7 not measured",e.chipMode.className="chip "+(v?x.demo?"demo":"":"proj");let I=t.lastSample;e.chipData.textContent=x.demo?"demo mode \xB7 no real data":I?`last sample ${Sc(I)} \xB7 ${t.nSamples} samples \xB7 ${x.src}`:`no samples yet \xB7 ${x.src}`,e.live.classList.toggle("on",x.live),e.live.disabled=!x.liveAvailable,e.live.title=x.liveAvailable?"Follow real time (L)":"Live is only available between 12:00 and 17:00 on the conference day",e.play.textContent=x.playing||x.live?"\u23F8":"\u25B6",e.play.setAttribute("aria-label",x.playing||x.live?"Pause":"Play"),e.speed.disabled=x.live,e.btnTopic.textContent="Topics: "+(i.topicMode()==="cum"?"so far":"now"),d(x.nowMs),e.tl.setAttribute("aria-valuenow",Math.round(a(M))),e.tl.setAttribute("aria-valuetext",Dn(M)),se("#lg-meta").textContent=x.demo?"Demo: all data synthetic.":`Source: recording.jsonl (${x.src}); ${t.nSamples} samples, last ${I?Sc(I):"none"}. Crowd total ${t.crowd} and room capacities are assumptions.`,y(M,!1)},selectRoom(M){s=M,o="",M||(e.panel.hidden=!0);for(let[x,v]of n){let I=t.sessions.find(C=>C.id===x);v.classList.toggle("sel",!!M&&I.roomId===M)}M&&y(i.getT(),!0)},get selectedRoom(){return s},showTip:m,setHighlightTopic:f,updateNow:d,updateCoverage:u,toggleLegend(){e.legend.hidden=!e.legend.hidden},closeLegend(){e.legend.hidden=!0},showDemoLink(M){se("#lg-demo").hidden=!M}}}var Me=new URLSearchParams(location.search),zo=Me.get("demo"),Qn=zo!==null,Ks=_s(ms),Rc=(i,t,e)=>i<t?t:i>e?e:i,Ov=Date.now(),Hy=performance.now();function rd(i){if(!i)return null;let t=/^(\d{1,2}):(\d\d)(?::(\d\d))?$/.exec(i);return t?Ks.t0+((+t[1]-12)*3600+ +t[2]*60+(+t[3]||0))*1e3:null}var Ys=null;Me.get("now")?Ys=rd(Me.get("now")):Qn&&(Ys=zo==="live"?Ks.t0+2.5*36e5:Ks.t1);var Ho=Ys!=null?()=>zo==="live"||Me.get("now")?Ys+(performance.now()-Hy):Ys:()=>Date.now(),Vy=Xo(zc),od=[],Ec="embedded snapshot";function ad(){return Qn?th(ms,{seed:+Me.get("seed")||7,gaps:Me.has("gaps"),to:zo==="live"?Ks.t0+2.5*36e5:void 0}):Yc(Vy,od)}var Kt=Ko({sessions:ms,recording:ad()}),ld=document.getElementById("stage"),Js=document.getElementById("labels"),ue=Zu(ld,Js),js=Ku(ue.scene,650),$e=Qu(ue.scene,Js,ue.camera,ld);js.setModel(Kt);$e.setModel(Kt);var Rt={t:Ks.t0,playing:!1,live:!1,speed:5,topicMode:"cum",selected:null,hlTopic:null,stickyTopic:null},Ic=()=>{let i=Ho();return i>=Kt.t0&&i<=Kt.t1},be={getT:()=>Rt.t,seek(i){Rt.t=Rc(i,Kt.t0,Kt.t1),Rt.live=!1},togglePlay(){if(Rt.live){Rt.live=!1,Rt.playing=!1;return}Rt.t>=Kt.t1-1e3&&!Rt.playing&&(Rt.t=Kt.t0),Rt.playing=!Rt.playing},setSpeed(i){Rt.speed=i,Rt.live=!1,Rt.playing||(Rt.playing=!1)},goLive(){Ic()&&(Rt.live=!0,Rt.playing=!1)},jump(i){let t=[...new Set(Kt.sessions.flatMap(e=>[e.start,e.end]))].filter(e=>e>Kt.t0&&e<Kt.t1).sort((e,n)=>e-n);if(Rt.live=!1,i>0)Rt.t=t.find(e=>e>Rt.t+1e3)??Kt.t1;else{let e=[...t].reverse().find(n=>n<Rt.t-2e3);Rt.t=e??Kt.t0}},resetView(){ue.resetView(),be.selectRoom(null)},toggleClouds(){return ds=!ds,$e.setVisible(ds),ds},toggleTopicMode(){Rt.topicMode=Rt.topicMode==="cum"?"now":"cum",$e.setMode(Rt.topicMode)},topicMode:()=>Rt.topicMode,floorLabel:i=>ue.FLOOR_LABEL[i],selectRoom(i){Rt.selected=i,De.selectRoom(i),i&&ue.focusRoom(i);for(let t of ue.labels)t.roomId&&t.el.classList.toggle("sel",t.roomId===i)}},ds=!0,De=td(be);De.setModel(Kt);De.showDemoLink(!Qn);Qn&&(document.title="Demo \xB7 "+document.title);{Me.get("speed")&&(Rt.speed=+Me.get("speed")||5,document.getElementById("sel-speed").value=String(Rt.speed));let i=rd(Me.get("t"));i!=null?(Rt.t=i,Rt.playing=Me.get("play")==="1"):Me.get("live")!=="0"&&Ic()&&!Qn?Rt.live=!0:(Rt.t=Kt.t0,Rt.playing=Me.get("play")!=="0"),Me.get("mode")==="now"&&be.toggleTopicMode(),Me.get("room")&&setTimeout(()=>be.selectRoom(Me.get("room")),50),Me.has("legend")&&De.toggleLegend()}window.addEventListener("keydown",i=>{if(i.target&&/^(INPUT|SELECT|TEXTAREA)$/.test(i.target.tagName)||i.metaKey||i.ctrlKey||i.altKey)return;let t=i.key;t===" "?(be.togglePlay(),i.preventDefault()):t==="ArrowLeft"?(be.seek(Rt.t-(i.shiftKey?6e5:6e4)),i.preventDefault()):t==="ArrowRight"?(be.seek(Rt.t+(i.shiftKey?6e5:6e4)),i.preventDefault()):t==="["?be.jump(-1):t==="]"?be.jump(1):t==="l"||t==="L"?be.goLive():t==="r"||t==="R"?be.resetView():t==="c"||t==="C"?document.getElementById("btn-clouds").click():t==="t"||t==="T"?be.toggleTopicMode():t==="?"||t==="i"?De.toggleLegend():t==="Escape"&&(be.selectRoom(null),De.closeLegend(),jn(null,!0))});var Zs=ue.renderer.domElement,qs=null;Zs.addEventListener("pointerdown",i=>{qs={x:i.clientX,y:i.clientY}});Zs.addEventListener("pointerup",i=>{if(!qs)return;let t=Math.hypot(i.clientX-qs.x,i.clientY-qs.y);if(qs=null,t>5)return;let e=ds?ue.pick(i.clientX,i.clientY,$e.hitSpheres):null;if(e){jn(e.userData.topicIdx,!0,i.clientX,i.clientY);return}let n=ue.pick(i.clientX,i.clientY,ue.hitMeshes);n?be.selectRoom(n.userData.roomId):(be.selectRoom(null),jn(null,!0))});Zs.addEventListener("pointermove",i=>{if(i.buttons)return;let t=ds?ue.pick(i.clientX,i.clientY,$e.hitSpheres):null;if(t){jn(t.userData.topicIdx,!1,i.clientX,i.clientY),Zs.style.cursor="pointer";return}Rt.stickyTopic||jn(null,!1),Zs.style.cursor=ue.pick(i.clientX,i.clientY,ue.hitMeshes)?"pointer":""});Js.addEventListener("pointerover",i=>{let t=i.target.closest&&i.target.closest(".lbl.cloud");t&&jn(+t.dataset.topic,!1,i.clientX,i.clientY)});Js.addEventListener("pointerout",i=>{i.target.closest&&i.target.closest(".lbl.cloud")&&!Rt.stickyTopic&&jn(null,!1)});Js.addEventListener("click",i=>{let t=i.target.closest&&i.target.closest(".lbl.cloud");if(t){jn(+t.dataset.topic,!0,i.clientX,i.clientY);return}let e=i.target.closest&&i.target.closest(".lbl.room");if(e){let n=ue.labels.find(s=>s.el===e);n&&be.selectRoom(Rt.selected===n.roomId?null:n.roomId)}});var $s=new Set;function jn(i,t,e,n){if(i==null){t&&(Rt.stickyTopic=null),Rt.stickyTopic||(Rt.hlTopic=null,$e.setHighlight(null),De.setHighlightTopic(null),De.showTip(null),$s=new Set);return}let s=Kt.topics[i];s&&(t&&(Rt.stickyTopic=Rt.stickyTopic===s.id?null:s.id),Rt.hlTopic=s.id,$e.setHighlight(s.id),De.setHighlightTopic(s.id),$s=new Set(Kt.sessions.filter(r=>r.topics.some(o=>o.id===s.id)).map(r=>r.roomId)),De.showTip($e.describe(i),e??0,n??0),t&&!Rt.stickyTopic&&(Rt.hlTopic=null,$e.setHighlight(null),De.setHighlightTopic(null),De.showTip(null),$s=new Set))}var Gy=Kt.locIds.length,cd=Wt.map(i=>Kt.locIds.indexOf(i.id)),hd=new Uint8Array(Gy);je.forEach(i=>{hd[Kt.locIds.indexOf(i.id)]=1});var ud=new Float32Array(Wt.length),Bo=Wt.map(()=>"none"),Tc=Wt.map(()=>!1),Cc={};for(let[i,t]of Object.entries(Jn)){let e=new Ft(t),n=new Ft("#dbe7ff");e.lerp(n,.4),Cc[i]=[e.r,e.g,e.b]}var hs=Kt;function Wy(i){let t=Rc((i-hs.t0)/hs.step,0,hs.K-1),e=t|0,n=Math.min(hs.K-1,e+1),s=t-e;for(let r=0;r<Wt.length;r++){let o=hs.counts[cd[r]];ud[r]=(o[e]*(1-s)+o[n]*s)/Wt[r].cap}}function Pc(i){let t=Kt.at(i);for(let e=0;e<Wt.length;e++){let n=Wt[e].id,s=Kt.levelAt(n,i);Bo[e]=s.idle&&s.level!=="running"?"none":s.level,Tc[e]=s.rec||t.rooms[n].rec;let r=Cc[Bo[e]]||Cc.none;js.setLocColor(cd[e],r[0],r[1],r[2])}for(let e of ue.labels)if(e.roomId){let n=Wt.findIndex(r=>r.id===e.roomId),s=t.rooms[e.roomId];e.cnt.textContent=`\u2248${Math.round(s.count)}/${Wt[n].cap}`,e.bar.style.width=Math.min(100,s.fill*100).toFixed(0)+"%",e.bar.style.background=Jn[Bo[n]]||Jn.none,e.barWrap.classList.toggle("proj",!Tc[n]),e.el.classList.toggle("hl",$s.has(e.roomId))}else e.hubId&&(e.cnt.textContent="\u2248"+Math.round(t.hubs[e.hubId].count));De.update(i,{live:Rt.live,playing:Rt.playing,demo:Qn,nowMs:Ho(),liveAvailable:Ic(),src:Ec})}var ed=performance.now(),nd=0;var id=!0,us={frames:0,sum:0,max:0,worst:[]};function dd(i){requestAnimationFrame(dd);let t=Math.min(.1,(i-ed)/1e3);ed=i,Rt.live?Rt.t=Rc(Ho(),Kt.t0,Kt.t1):Rt.playing&&(Rt.t+=t*Rt.speed*6e4,Rt.t>=Kt.t1&&(Rt.t=Kt.t1,Rt.playing=!1));let e=Rt.t,n=i/1e3;Wy(e),js.update(e,n,hd),$e.update(e,t,n,id),id=!1;for(let s=0;s<Wt.length;s++)ue.setRoomState(Wt[s].id,ud[s],Bo[s],Tc[s],Rt.selected===Wt[s].id,$s.has(Wt[s].id));if(ue.stepAnim(i),ue.controls.update(),ue.updateLabels(),ue.renderer.render(ue.scene,ue.camera),De.setHead(e),i-nd>200&&(nd=i,Pc(e)),us.on){let s=performance.now()-i;us.frames++,us.sum+=s,s>us.max&&(us.max=s)}}function Xy(i){Kt=i,hs=i,js.setModel(i),$e.setModel(i),De.setModel(i),Pc(Rt.t)}var Ac=!1;async function sd(){if(!(Qn||Me.has("nofetch")||Ac)){Ac=!0;try{let i=new AbortController,t=setTimeout(()=>i.abort(),15e3),e=await fetch(Hc+"?cb="+Math.floor(Date.now()/6e4),{signal:i.signal,cache:"no-store"});if(clearTimeout(t),!e.ok)throw new Error("http "+e.status);let n=await e.text(),s=Xo(n);if(s.length){let r=Kt.nSamples,o=Kt.lastSample;od=s;let a=Ko({sessions:ms,recording:ad()});a.nSamples!==r||a.lastSample!==o?(Ec="live from GitHub",Xy(a)):Ec="live from GitHub"}}catch{}Ac=!1}}!Qn&&!Me.has("nofetch")&&(setTimeout(sd,800),setInterval(sd,6e4));Pc(Rt.t);requestAnimationFrame(dd);window.AED={get state(){return{t:Rt.t,playing:Rt.playing,live:Rt.live,speed:Rt.speed,selected:Rt.selected,topicMode:Rt.topicMode}},app:be,model:()=>Kt,clouds:$e,scene:ue,crowd:js,perf:us,setTime:i=>be.seek(i),nowFn:Ho};window.AED_READY=!0;})();
