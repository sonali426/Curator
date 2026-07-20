window.MODERNIZEBENCH_DATA = {
  newsletter: [
    {
      id: "materiality-matrix-2026-07-21",
      date: "2026-07-21",
      label: "Learning note",
      category: "learning",
      relevance: "LEARNING ONLY",
      material: false,
      affected: "Evaluation governance",
      title: "How to decide whether agent-eval news should change your architecture",
      summary: "A daily research feed becomes noise unless every development is tested against an explicit materiality model. For ModernizeBench, a change is material only when it alters what is measured, how evidence is collected, how reliably results can be reproduced, or the operational risk of running an agent.",
      impact: "Use a four-part impact test: benchmark validity, evaluation coverage, runtime portability, and safety or governance. News that does not change one of these dimensions should remain a learning note rather than becoming a product requirement.",
      action: "Create a design-impact register with the fields signal, evidence strength, affected component, reversible experiment, adoption threshold, decision, and review date. Require a small experiment before changing the core architecture for a research trend.",
      exercise: "Take three recent agent-evaluation announcements. Score each from 0–3 on validity, coverage, portability, and risk. Treat scores of 8 or more as candidates for a ModernizeBench experiment, not automatic adoption.",
      urgency: "Learning edition",
      source: "ModernizeBench editorial",
      url: "#newsletter"
    },
    {
      id: "harbor-index-2026",
      relevance: "HIGH",
      material: true,
      affected: "Task-pack sampling and CI cost",
      date: "2026-07-06",
      label: "Benchmark",
      category: "benchmarks",
      title: "Harbor-Index reframes agent benchmarking around smaller, harder, cleaner task sets",
      summary: "The Terminal-Bench team introduced Harbor-Index as a lightweight, diverse, difficult benchmark intended to make repeated agent evaluation cheaper without collapsing task quality.",
      impact: "ModernizeBench should support curated index suites alongside full suites. This makes five-to-ten repeated trials, model comparisons, and pull-request regression gates economically practical.",
      action: "Add an index manifest with stratified sampling, difficulty coverage, domain coverage, and a periodic full-suite audit to detect index overfitting.",
      urgency: "Adopt now",
      source: "Terminal-Bench",
      url: "https://www.tbench.ai/news"
    },
    {
      id: "osworld-2-2026",
      relevance: "HIGH",
      material: true,
      affected: "Milestone graders and long-horizon tasks",
      date: "2026-06-26",
      label: "Benchmark",
      category: "benchmarks",
      title: "OSWorld 2.0 moves evaluation toward genuinely long-horizon, stateful workflows",
      summary: "OSWorld 2.0 introduced 108 professional-style workflows with long trajectories, dynamic environments, cross-source reasoning, hidden state, and partial-credit scoring.",
      impact: "Modernization tasks are closer to these long workflows than to single-issue coding benchmarks. A binary pass/fail score will hide where an agent recovered requirements correctly but failed during implementation or verification.",
      action: "Design milestone graders and state checkpoints: discovery, evidence coverage, architecture, backend, frontend, migration, and verification. Preserve both partial score and final business-parity score.",
      urgency: "Design input",
      source: "OSWorld 2.0",
      url: "https://arxiv.org/abs/2606.29537"
    },
    {
      id: "tbench-2-1-2026",
      relevance: "CRITICAL",
      material: true,
      affected: "Benchmark QA and task versioning",
      date: "2026-05-06",
      label: "Benchmark integrity",
      category: "benchmarks",
      title: "Terminal-Bench 2.1 shows benchmark maintenance can move scores by double digits",
      summary: "Terminal-Bench corrected 28 of 89 tasks and introduced continuous validation. Several agent-model pairs changed materially after task fixes.",
      impact: "A benchmark is production software. Faulty fixtures, brittle tests, environment drift, and ambiguous tasks can dominate the measured model difference.",
      action: "Version every task pack, continuously validate fixtures, run a human-solvability audit, record environment fingerprints, and never compare scores across task-pack versions without normalization.",
      urgency: "Core requirement",
      source: "Terminal-Bench",
      url: "https://www.tbench.ai/news/terminal-bench-2-1"
    },
    {
      id: "swebench-contamination-2026",
      relevance: "CRITICAL",
      material: true,
      affected: "Holdout design and contamination controls",
      date: "2026-02-23",
      label: "Benchmark integrity",
      category: "research",
      title: "OpenAI stops reporting SWE-bench Verified as contamination weakens the signal",
      summary: "OpenAI reported that SWE-bench Verified increasingly suffers from flawed tests and training-set exposure, and recommended moving frontier comparisons to newer evaluation sets.",
      impact: "Public legacy repositories and gold migrations can become memorized. ModernizeBench needs private or freshly generated holdouts, rotated tasks, and contamination probes rather than one permanent leaderboard set.",
      action: "Separate public development tasks from sealed evaluation tasks. Add canary facts, patch-recall probes, task retirement rules, and benchmark freshness metadata.",
      urgency: "Core requirement",
      source: "OpenAI",
      url: "https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/"
    },
    {
      id: "anthropic-agent-evals-2026",
      relevance: "HIGH",
      material: true,
      affected: "Trial, grader, and transcript model",
      date: "2026-01-09",
      label: "Evaluation method",
      category: "research",
      title: "Anthropic formalizes agent evaluation as tasks, trials, graders, and transcripts",
      summary: "Anthropic's agent-evals guidance emphasizes multi-trial testing and combining code-based, model-based, and human graders across outcomes and full transcripts.",
      impact: "This validates ModernizeBench's evaluation hierarchy: deterministic business invariants first, calibrated rubric graders second, and trace inspection for failure diagnosis.",
      action: "Make trial count and confidence intervals first-class. Store complete transcripts, grader versions, assertions, and disagreements instead of emitting a single opaque score.",
      urgency: "Architecture anchor",
      source: "Anthropic",
      url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
    },
    {
      id: "mcp-2025-11",
      relevance: "HIGH",
      material: true,
      affected: "MCP portability and tool security",
      date: "2025-11-25",
      label: "Protocol",
      category: "protocols",
      title: "MCP's authorization and capability model strengthens the portability layer",
      summary: "The November 2025 MCP specification includes explicit authorization, capability negotiation, and standardized tools, resources, prompts, sampling, roots, and elicitation.",
      impact: "Schema Index and Reuse Scout should be portable MCP services, but their permissions and data exposure must be evaluated—not assumed safe because the interface is standardized.",
      action: "Add MCP conformance tests, least-privilege scopes, tool-risk metadata, approval expectations, and adversarial tests for data exfiltration and unsafe writes.",
      urgency: "Build into v1",
      source: "Model Context Protocol",
      url: "https://modelcontextprotocol.io/specification/2025-11-25"
    },
    {
      id: "otel-genai-2026",
      relevance: "HIGH",
      material: true,
      affected: "Canonical trace schema",
      date: "2026-05-14",
      label: "Observability",
      category: "protocols",
      title: "OpenTelemetry GenAI conventions make traces portable across agent frameworks",
      summary: "OpenTelemetry's GenAI conventions standardize model, token, agent, workflow, tool, and evaluation telemetry so systems can be inspected without locking all traces to one vendor.",
      impact: "A neutral trace envelope is essential if ModernizeBench will compare Copilot, OpenAI Agents SDK, LangGraph, Claude tooling, and future runtimes.",
      action: "Use OpenTelemetry as the canonical internal trace model. Write adapters from framework-native traces and retain raw provider events for forensic inspection.",
      urgency: "Build into v1",
      source: "OpenTelemetry",
      url: "https://opentelemetry.io/blog/2026/genai-observability/"
    }
  ],
  learning: [
    {
      id: "eval-foundations",
      stage: "foundation",
      number: "01",
      title: "Evaluation foundations",
      overview: "Learn why probabilistic systems require datasets, trials, graders, baselines, slices, and error taxonomies rather than conventional unit tests alone.",
      build: "Write an eval specification for one legacy feature: success criteria, failure modes, task inputs, hidden assertions, and metrics.",
      resources: [
        { name: "Anthropic — Demystifying evals for AI agents", url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents" },
        { name: "LangSmith — Evaluation concepts", url: "https://docs.langchain.com/langsmith/evaluation-concepts" },
        { name: "Anthropic — A statistical approach to model evaluations", url: "https://www.anthropic.com/research/statistical-approach-to-model-evals" }
      ]
    },
    {
      id: "agent-architecture",
      stage: "foundation",
      number: "02",
      title: "Agent and workflow architecture",
      overview: "Understand the agent loop, orchestrator-worker patterns, routing, parallelization, evaluator-optimizer loops, handoffs, guardrails, and human checkpoints.",
      build: "Express your current Copilot workflow as a framework-neutral state machine with typed inputs, outputs, failure states, and resumability boundaries.",
      resources: [
        { name: "Anthropic — Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" },
        { name: "OpenAI Agents SDK — Core concepts", url: "https://openai.github.io/openai-agents-python/" },
        { name: "OpenAI Agents SDK — Tracing", url: "https://openai.github.io/openai-agents-python/tracing/" }
      ]
    },
    {
      id: "context-memory",
      stage: "systems",
      number: "03",
      title: "Context engineering and memory",
      overview: "Study context selection, compaction, working memory, durable memory, provenance, stale-memory failures, retrieval policy, and cross-session handoff artifacts.",
      build: "Run the same task with no memory, summary memory, and structured evidence memory; compare repeated exploration, cost, correctness, and stale-assumption errors.",
      resources: [
        { name: "Anthropic — Effective context engineering for AI agents", url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" },
        { name: "Anthropic — Effective harnesses for long-running agents", url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents" }
      ]
    },
    {
      id: "tool-mcp",
      stage: "systems",
      number: "04",
      title: "Tool design and MCP",
      overview: "Learn how agents interpret tool names, descriptions, schemas, errors, results, permissions, and context payloads. Study MCP primitives and trust boundaries.",
      build: "Convert Schema Index and Reuse Scout into MCP servers; create held-out tasks that measure tool discovery, argument correctness, result use, and unnecessary calls.",
      resources: [
        { name: "MCP — Latest specification", url: "https://modelcontextprotocol.io/specification/2025-11-25" },
        { name: "Anthropic — Writing effective tools for agents", url: "https://www.anthropic.com/engineering/writing-tools-for-agents" },
        { name: "MCP — Tools", url: "https://modelcontextprotocol.io/specification/2025-11-25/server/tools" }
      ]
    },
    {
      id: "trace-observability",
      stage: "systems",
      number: "05",
      title: "Tracing and agent observability",
      overview: "Instrument agent runs as traces and spans: model turns, tool calls, handoffs, retries, guardrails, memory reads, environment mutations, costs, and evaluator feedback.",
      build: "Define a canonical trace schema and build one adapter from Copilot session artifacts into OpenTelemetry-compatible events.",
      resources: [
        { name: "OpenTelemetry — GenAI observability", url: "https://opentelemetry.io/blog/2026/genai-observability/" },
        { name: "OpenAI Agents SDK — Tracing", url: "https://openai.github.io/openai-agents-python/tracing/" },
        { name: "LangSmith — Trajectory evaluations", url: "https://docs.langchain.com/langsmith/trajectory-evals" }
      ]
    },
    {
      id: "task-environments",
      stage: "evaluation",
      number: "06",
      title: "Task packs and reproducible environments",
      overview: "Learn benchmark task anatomy: initial state, prompt, tools, fixtures, network policy, timeouts, hidden tests, state verification, cleanup, and environment fingerprints.",
      build: "Containerize one PHP modernization task with fixed database state, target skeleton, hidden business invariants, and deterministic reset between trials.",
      resources: [
        { name: "SWE-bench — Official benchmark", url: "https://www.swebench.com/" },
        { name: "Terminal-Bench — Benchmark design", url: "https://www.tbench.ai/benchmarks" },
        { name: "OSWorld 2.0 — Long-horizon environments", url: "https://arxiv.org/abs/2606.29537" }
      ]
    },
    {
      id: "deterministic-graders",
      stage: "evaluation",
      number: "07",
      title: "Deterministic and state-based graders",
      overview: "Prioritize executable truth: compilation, tests, contracts, database invariants, UI behavior, authorization, idempotency, static analysis, and filesystem scope.",
      build: "Create a grader package that checks functional parity, database effects, access control, audit logging, reuse, and prohibited file modifications.",
      resources: [
        { name: "Anthropic — Code-based graders in agent evals", url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents" },
        { name: "Playwright — Test documentation", url: "https://playwright.dev/docs/intro" },
        { name: "Testcontainers — Java guides", url: "https://java.testcontainers.org/" }
      ]
    },
    {
      id: "model-graders",
      stage: "evaluation",
      number: "08",
      title: "LLM judges and rubric calibration",
      overview: "Use model graders only for qualities that cannot be fully executed: evidence completeness, architecture coherence, requirement quality, and maintainability. Learn calibration and judge bias.",
      build: "Create a narrow evidence-grounding rubric, compare two judge models against expert labels, and document disagreement and abstention behavior.",
      resources: [
        { name: "LangSmith — LLM and code evaluators", url: "https://docs.langchain.com/langsmith/evaluators" },
        { name: "Anthropic — Challenges in evaluating AI systems", url: "https://www.anthropic.com/research/evaluating-ai-systems" }
      ]
    },
    {
      id: "reliability-statistics",
      stage: "evaluation",
      number: "09",
      title: "Reliability, experiments, and statistics",
      overview: "Study repeated trials, pass@k, all-k reliability, confidence intervals, effect sizes, paired comparisons, variance decomposition, and cost-performance frontiers.",
      build: "Run five trials across two workflow variants. Report confidence intervals, failure clusters, median cost, p95 latency, and probability of three consecutive successes.",
      resources: [
        { name: "Anthropic — Statistical approach to model evaluations", url: "https://www.anthropic.com/research/statistical-approach-to-model-evals" },
        { name: "τ-bench paper", url: "https://arxiv.org/abs/2406.12045" },
        { name: "LangSmith — Offline evaluation experiments", url: "https://docs.langchain.com/langsmith/evaluation" }
      ]
    },
    {
      id: "benchmark-integrity",
      stage: "advanced",
      number: "10",
      title: "Benchmark integrity and contamination",
      overview: "Learn task ambiguity, narrow and wide tests, leakage, contamination, reward hacking, benchmark saturation, harness effects, and task retirement.",
      build: "Create a benchmark QA checklist, a contamination probe, canary facts, and a process for versioning or retiring compromised tasks.",
      resources: [
        { name: "OpenAI — Why SWE-bench Verified no longer measures frontier coding", url: "https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/" },
        { name: "Terminal-Bench 2.1 — Continuous validation", url: "https://www.tbench.ai/news/terminal-bench-2-1" },
        { name: "Anthropic — Quantifying infrastructure noise in coding evals", url: "https://www.anthropic.com/engineering" }
      ]
    },
    {
      id: "safety-sandboxing",
      stage: "advanced",
      number: "11",
      title: "Sandboxing, permissions, and agent safety",
      overview: "Treat agent reliability and blast radius separately. Learn isolation, network controls, secrets, least privilege, approvals, policy evaluation, and malicious repository content.",
      build: "Create read-only and write-capable execution profiles. Add tests for prompt injection, secret access, out-of-scope writes, unsafe shell commands, and bypassed approvals.",
      resources: [
        { name: "Anthropic — How we contain Claude across products", url: "https://www.anthropic.com/engineering/how-we-contain-claude" },
        { name: "MCP — Security and trust principles", url: "https://modelcontextprotocol.io/specification/2025-11-25" }
      ]
    },
    {
      id: "eval-platform",
      stage: "advanced",
      number: "12",
      title: "Evaluation platform engineering",
      overview: "Bring the pieces together: task registry, run scheduler, adapters, trace store, grader service, artifact store, experiment comparison, CI gates, and governance.",
      build: "Ship the first ModernizeBench vertical slice: one task pack, one runner, five graders, repeated trials, a trace viewer, and a publishable scorecard.",
      resources: [
        { name: "OpenAI Agents SDK", url: "https://openai.github.io/openai-agents-python/" },
        { name: "LangSmith — Evaluate a complex agent", url: "https://docs.langchain.com/langsmith/evaluate-complex-agent" },
        { name: "Empirical Study of Automating Agent Evaluation", url: "https://arxiv.org/abs/2605.11378" }
      ]
    }
  ]
};
