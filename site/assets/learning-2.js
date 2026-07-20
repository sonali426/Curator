window.MODERNIZEBENCH_DATA.learning.push(...[
  {
    "id": "mcp-interoperability", "number": "08", "stage": "Context & knowledge", "title": "MCP and interoperability", "oneLiner": "Expose capabilities through a portable protocol without coupling the product to one IDE or agent framework.",
    "overview": "Learn MCP’s client-server architecture, tools, resources, prompts, capability negotiation, transports, authorization, extensions, and evolving state model. Study adapter boundaries and conformance testing.",
    "why": "Portability is the path from a personal Copilot workflow to a platform that anyone can run. Protocol compliance does not remove the need for product-specific safety and evaluation.",
    "prerequisites": ["Module 04","OAuth and HTTP basics"],
    "concepts": ["MCP primitives and lifecycle","STDIO versus HTTP transports","Authorization and scopes","Capability negotiation","Tool annotations and schemas","Stateless core and explicit state handles","Versioning and conformance tests"],
    "technical": ["Keep an internal domain contract behind MCP adapters.","Pin protocol versions in run metadata.","Propagate trace context across tool calls.","Test least privilege and malicious tool responses."],
    "build": "Convert Schema Index and Reuse Scout into MCP services behind an internal interface. Add conformance, auth, retry, and trace-propagation tests.",
    "projectConnection": "Becomes the portable tool layer for all runner integrations.",
    "deliverables": ["MCP servers","Protocol adapter interface","Conformance suite"],
    "resources": [["MCP specification","https://modelcontextprotocol.io/specification/2025-11-25"],["MCP 2026 release candidate","https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/"],["MCP security best practices","https://modelcontextprotocol.io/specification/2025-11-25/basic/security_best_practices"]]
  },
  {
    "id": "task-specification", "number": "09", "stage": "Evaluation design", "title": "Task and EvalSpec design", "oneLiner": "Define the exact initial state, permitted actions, desired outcomes, and evidence needed for a valid claim.",
    "overview": "Learn to convert real engineering work into evaluable tasks. Specify prompt, starting repository, database state, tool inventory, policies, time and cost limits, required artifacts, hidden assertions, and reset behavior.",
    "why": "The task specification is the most important benchmark artifact. Ambiguous instructions and hidden assumptions make scores uninterpretable.",
    "prerequisites": ["Modules 02–04"],
    "concepts": ["Initial and terminal state","Agent-visible versus hidden information","Tool and policy surface","Success dimensions and milestones","Timeouts and budgets","Reset and reproducibility","Human-solvability review"],
    "technical": ["One task should test a named capability, not every capability.","Keep hidden tests aligned with stated requirements.","Record environment hashes and dependency locks.","Provide diagnostic but non-leaking grader output."],
    "build": "Write the full EvalSpec for the coupon-management modernization scenario and have another engineer solve it manually.",
    "projectConnection": "Defines the ModernizeBench Task Pack schema.",
    "deliverables": ["EvalSpec YAML","Human solution log","Ambiguity review checklist"],
    "resources": [["SWE-bench — evaluation harness","https://www.swebench.com/SWE-bench/reference/harness/"],["Terminal-Bench task examples","https://www.tbench.ai/benchmarks"],["Anthropic — Agent eval tasks and trials","https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"]]
  },
  {
    "id": "benchmark-construction", "number": "10", "stage": "Evaluation design", "title": "Dataset and benchmark construction", "oneLiner": "Build a representative, versioned task population rather than a collection of impressive demos.",
    "overview": "Study task sourcing, coverage matrices, difficulty calibration, stratified sampling, development and sealed splits, index suites, task QA, metadata, versioning, and benchmark governance.",
    "why": "A benchmark should support a claim about a population of work. Coverage, freshness, and quality matter more than raw task count.",
    "prerequisites": ["Module 09"],
    "concepts": ["Task population and sampling frame","Capability and domain coverage","Difficulty calibration","Public, validation, and sealed splits","Index suites versus full suites","Task QA and retirement","Versioned benchmark releases"],
    "technical": ["Maintain a task lineage and change log.","Never compare versions without declaring task-set changes.","Use small regression indices plus scheduled full-suite runs.","Audit performance by slice, not just average."],
    "build": "Design a 30-task roadmap across three legacy patterns, three risk levels, and multiple business domains. Select a 10-task CI index.",
    "projectConnection": "Creates the benchmark registry and public-versus-sealed release policy.",
    "deliverables": ["Coverage matrix","Task registry","Benchmark versioning policy"],
    "resources": [["Terminal-Bench 2.1 — continuous validation","https://www.tbench.ai/news/terminal-bench-2-1"],["Harbor-Index announcement","https://www.tbench.ai/news"],["SWE-bench overview","https://www.swebench.com/SWE-bench/"]]
  },
  {
    "id": "deterministic-graders", "number": "11", "stage": "Evaluation design", "title": "Deterministic and state-based graders", "oneLiner": "Use executable truth for everything that software can verify directly.",
    "overview": "Design graders for compilation, tests, API contracts, database state, UI behavior, authorization, idempotency, audit logs, static analysis, dependency policy, filesystem scope, and performance budgets.",
    "why": "Deterministic graders are faster, cheaper, and more reproducible than model judges. They should carry the release gate whenever the requirement is executable.",
    "prerequisites": ["Modules 09–10","Testing fundamentals"],
    "concepts": ["Black-box and white-box grading","State assertions and invariants","Hidden tests","Partial credit and milestone scoring","Grader isolation","Diagnostic output","False positives and brittle graders"],
    "technical": ["Run graders outside the agent workspace.","Capture pre- and post-state.","Test the grader against gold, near-miss, and adversarial solutions.","Separate task failure from infrastructure failure."],
    "build": "Implement a grader bundle for business parity, database effects, access control, audit logging, reuse, and prohibited file changes.",
    "projectConnection": "Forms the trusted core of the ModernizeBench evaluation engine.",
    "deliverables": ["Grader SDK","Six deterministic graders","Grader test corpus"],
    "resources": [["Playwright testing documentation","https://playwright.dev/docs/intro"],["Testcontainers for Java","https://java.testcontainers.org/"],["Pact contract testing","https://docs.pact.io/"],["SWE-bench harness","https://www.swebench.com/SWE-bench/reference/harness/"]]
  },
  {
    "id": "llm-judges", "number": "12", "stage": "Evaluation design", "title": "LLM judges and rubric calibration", "oneLiner": "Use model grading for semantic qualities only after defining evidence, scales, and calibration.",
    "overview": "Study pointwise, pairwise, and reference-based judging; analytic rubrics; evidence grounding; position and verbosity bias; self-preference; judge ensembles; abstention; and calibration against expert labels.",
    "why": "Architecture coherence and requirement completeness cannot always be reduced to tests, but an opaque ‘score from another LLM’ is not evidence.",
    "prerequisites": ["Modules 02 and 11"],
    "concepts": ["Analytic versus holistic rubrics","Pointwise and pairwise judging","Reference-based grading","Bias and variance","Calibration datasets","Inter-rater agreement","Abstention and escalation"],
    "technical": ["Require citations to artifacts or trace evidence.","Keep rubric criteria independent and behaviorally anchored.","Blind the judge to model identity where possible.","Measure agreement with expert labels before gating releases."],
    "build": "Create an evidence-grounding rubric, label 40 examples manually, compare two judge models, and document confusion matrices and abstentions.",
    "projectConnection": "Powers semantic requirement, architecture, and maintainability graders without hiding uncertainty.",
    "deliverables": ["Rubric specification","Calibration set","Judge validation report"],
    "resources": [["OpenAI GDPval grading","https://evals.openai.com/gdpval/grading"],["LangSmith evaluators","https://docs.langchain.com/langsmith/evaluators"],["Anthropic — Evaluating AI systems","https://www.anthropic.com/research/evaluating-ai-systems"]]
  },
  {
    "id": "trajectory-evaluation", "number": "13", "stage": "Evaluation design", "title": "Trajectory and process evaluation", "oneLiner": "Evaluate whether the agent used the right evidence, tools, approvals, and recovery strategy—not merely whether the final code passed.",
    "overview": "Learn strict, unordered, subset, and superset trajectory matching; milestone traces; process invariants; tool-argument scoring; evidence-use checks; retry analysis; and trajectory-aware model judges.",
    "why": "Two agents can produce the same output with radically different cost, safety, and repeatability. Process evaluation explains why a workflow succeeds or fails.",
    "prerequisites": ["Modules 03–04 and 11–12"],
    "concepts": ["Reference trajectories and acceptable path sets","Tool selection and argument accuracy","Process invariants","Milestone completion","Retry and loop detection","Evidence utilization","Outcome-process disagreement"],
    "technical": ["Avoid enforcing one exact path when several are valid.","Use hard invariants for required approvals and prohibited actions.","Evaluate arguments and downstream use, not tool name only.","Store the raw provider trace alongside the canonical trace."],
    "build": "Define trajectory rules for ‘inspect schema before proposing persistence,’ ‘run Reuse Scout before new service,’ and ‘verify before completion.’",
    "projectConnection": "Creates ModernizeBench’s differentiating trace-grading layer.",
    "deliverables": ["Trajectory policy language","Reference path set","Trajectory grader"],
    "resources": [["LangSmith — Trajectory evaluations","https://docs.langchain.com/langsmith/trajectory-evals"],["LangSmith — Evaluate a complex agent","https://docs.langchain.com/langsmith/evaluate-complex-agent"],["OpenAI Agents SDK — tracing","https://openai.github.io/openai-agents-python/tracing/"]]
  },
  {
    "id": "reliability-statistics", "number": "14", "stage": "Evaluation science", "title": "Reliability, experimental design, and statistics", "oneLiner": "Measure distributions, uncertainty, and repeated success instead of reporting the best run.",
    "overview": "Study repeated trials, pass@k, pass^k, confidence intervals, paired experiments, bootstrap methods, effect size, power, variance decomposition, stratification, multiple comparisons, and cost-quality frontiers.",
    "why": "Nondeterministic systems require statistical claims. A five-point score increase is meaningless without trial count, uncertainty, task pairing, and failure distribution.",
    "prerequisites": ["Module 02","Basic statistics"],
    "concepts": ["Bernoulli trials and success probability","Pass@k versus all-k reliability","Confidence intervals","Paired and blocked experiments","Bootstrap and permutation tests","Effect size and practical significance","Variance across task, model, and run"],
    "technical": ["Pair workflow variants on the same task and seed conditions.","Report task-level distributions and confidence intervals.","Predefine primary metrics and stopping rules.","Track cost and latency alongside quality."],
    "build": "Run five trials across two workflow variants. Report uncertainty, failure clusters, median cost, p95 latency, and probability of three consecutive successes.",
    "projectConnection": "Defines experiment comparison and release-confidence logic.",
    "deliverables": ["Statistical analysis notebook","Experiment protocol","Reliability dashboard spec"],
    "resources": [["Anthropic — Statistical approach to model evaluations","https://www.anthropic.com/research/statistical-approach-to-model-evals"],["τ-bench paper","https://arxiv.org/abs/2406.12045"],["NIST Engineering Statistics Handbook","https://www.itl.nist.gov/div898/handbook/"]]
  }
]);
