window.MODERNIZEBENCH_DATA.learning.push(...[
  {
    "id":"failure-analysis","number":"15","stage":"Evaluation science","title":"Failure taxonomy and root-cause analysis","oneLiner":"Convert every failed run into a reusable diagnosis, dataset slice, or new evaluator.",
    "overview":"Learn failure classification, causal hypotheses, trace inspection, artifact diffing, cluster analysis, counterfactual reruns, minimal reproductions, and the distinction between task, agent, model, tool, grader, and infrastructure failures.",
    "why":"An overall score tells you whether something changed; a failure system tells you what to build next.",
    "prerequisites":["Modules 13–14"],
    "concepts":["Failure taxonomies","First-failure versus downstream symptoms","Task and harness failures","Trace and artifact comparison","Clustering and slice discovery","Counterfactual reruns","Eval-driven development loop"],
    "technical":["Label the earliest causal failure, not every later symptom.","Allow multiple contributing factors but one primary owner.","Promote recurrent production failures into offline evals.","Track unknown and disputed labels."],
    "build":"Review 25 runs, define a taxonomy, label them, and produce a Pareto chart plus three targeted regression tasks.",
    "projectConnection":"Powers the diagnostic workbench and the feedback loop from incidents to benchmark growth.",
    "deliverables":["Failure taxonomy","Labeled run set","Regression-task proposals"],
    "resources":[["LangSmith — Offline and online evaluation loop","https://docs.langchain.com/langsmith/evaluation"],["MLflow — Evaluating production traces","https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/traces/"],["Anthropic — Demystifying evals","https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"]]
  },
  {
    "id":"benchmark-integrity","number":"16","stage":"Evaluation science","title":"Benchmark integrity, leakage, and reward hacking","oneLiner":"Protect the signal from contamination, brittle tests, overfitting, shortcut solutions, and leaderboard gaming.",
    "overview":"Study contamination, memorization, public-test overfitting, canaries, narrow tests, task ambiguity, benchmark saturation, harness effects, agent-specific hacks, submission review, task freshness, and retirement.",
    "why":"A trusted benchmark is a maintained measurement system, not a static dataset. Integrity failures can invalidate months of model and product conclusions.",
    "prerequisites":["Modules 10–15"],
    "concepts":["Training contamination and leakage","Canary strings and recall probes","Reward hacking and shortcut solutions","Hidden-test breadth","Task ambiguity and solvability","Leaderboard governance","Task retirement and refresh"],
    "technical":["Keep sealed holdouts inaccessible to agent developers.","Continuously run gold and adversarial solutions.","Inspect suspiciously efficient trajectories.","Publish benchmark versions and integrity incidents."],
    "build":"Create an integrity plan with canaries, sealed siblings, suspicious-run rules, task health checks, and retirement criteria.",
    "projectConnection":"Protects the credibility of public ModernizeBench results.",
    "deliverables":["Integrity policy","Contamination probes","Task health dashboard spec"],
    "resources":[["OpenAI — Why we no longer evaluate SWE-bench Verified","https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/"],["Terminal-Bench 2.1","https://www.tbench.ai/news/terminal-bench-2-1"],["Terminal-Bench leaderboard integrity news","https://www.tbench.ai/news"]]
  },
  {
    "id":"observability-tracing","number":"17","stage":"Platform engineering","title":"Tracing and agent observability","oneLiner":"Capture a portable causal record of model turns, tools, handoffs, state, cost, and evaluator feedback.",
    "overview":"Learn traces, spans, events, attributes, baggage, sampling, correlation IDs, artifact pointers, sensitive-data controls, semantic conventions, and provider adapters. Distinguish operational observability from evaluation evidence.",
    "why":"Without a canonical trace, cross-framework comparison and failure diagnosis become impossible. Without privacy controls, traces become a new data leak.",
    "prerequisites":["Modules 03–05 and 13"],
    "concepts":["Trace and span hierarchy","Agent, model, tool, handoff, guardrail spans","Context propagation","OpenTelemetry semantic conventions","Artifact and state references","Sampling and retention","Redaction and sensitive data"],
    "technical":["Use OpenTelemetry-compatible IDs and propagation.","Retain raw source events for forensic fidelity.","Store large artifacts out of band.","Make sensitive-content capture configurable and audited."],
    "build":"Define the ModernizeBench canonical trace schema and write one adapter from Copilot session artifacts.",
    "projectConnection":"Creates the trace store contract and enables trajectory evaluation across runtimes.",
    "deliverables":["Canonical trace schema","Copilot trace adapter","Redaction policy"],
    "resources":[["OpenTelemetry GenAI conventions","https://github.com/open-telemetry/semantic-conventions-genai"],["OpenAI Agents SDK — tracing","https://openai.github.io/openai-agents-python/tracing/"],["MLflow tracing","https://mlflow.org/docs/latest/genai/tracing"]]
  },
  {
    "id":"sandbox-security","number":"18","stage":"Platform engineering","title":"Sandboxing, permissions, and agent security","oneLiner":"Assume repository content, tools, model output, and external data may be hostile.",
    "overview":"Study workspace isolation, filesystem and network policy, secrets handling, least privilege, read and write profiles, approval gates, prompt injection, tool poisoning, dependency threats, resource limits, and auditability.",
    "why":"Correctness and safety are separate dimensions. A capable agent with broad credentials can create unacceptable blast radius even when it completes the task.",
    "prerequisites":["Modules 04, 08, and 17","Container fundamentals"],
    "concepts":["Threat modeling for agents","Container and VM isolation","Filesystem and network controls","Secrets and identity","Prompt injection and untrusted content","Approval and policy enforcement","Resource exhaustion and cleanup"],
    "technical":["Run graders outside the agent trust boundary.","Default tools to read-only and add scoped mutation capabilities.","Never place long-lived credentials in model-visible context.","Record every privileged action and approval."],
    "build":"Create read-only and write-capable sandbox profiles. Add adversarial tests for injection, secret access, out-of-scope writes, destructive commands, and approval bypass.",
    "projectConnection":"Defines the Task Pack execution security model and safety graders.",
    "deliverables":["Threat model","Sandbox profiles","Adversarial safety suite"],
    "resources":[["OWASP — Agentic AI threats and mitigations","https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/"],["NIST Generative AI Profile","https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"],["MCP security best practices","https://modelcontextprotocol.io/specification/2025-11-25/basic/security_best_practices"]]
  },
  {
    "id":"experiment-platform","number":"19","stage":"Platform engineering","title":"Evaluation platform and experiment tracking","oneLiner":"Build a reproducible control plane for datasets, runs, graders, artifacts, comparisons, and release gates.",
    "overview":"Design the task registry, run scheduler, runner adapters, configuration snapshots, trace ingestion, grader workers, artifact store, experiment model, result store, comparison UI, and CI integration.",
    "why":"Scripts prove a concept; a platform makes evaluations repeatable, comparable, governable, and usable by other teams.",
    "prerequisites":["Modules 09–18","Distributed systems fundamentals"],
    "concepts":["Immutable run configuration","Task and grader registries","Work queues and isolation","Artifact storage","Experiment and comparison model","Caching and deduplication","CI gates and audit logs"],
    "technical":["Make every result reproducible from versioned inputs.","Separate control plane from untrusted execution workers.","Use content hashes for artifacts and environment images.","Model infrastructure errors distinctly from agent failures."],
    "build":"Implement one vertical slice: task registration, five repeated runs, trace ingestion, grader execution, and comparison report.",
    "projectConnection":"This is the core ModernizeBench product.",
    "deliverables":["Platform architecture","Run manifest","Vertical-slice implementation"],
    "resources":[["MLflow GenAI evaluation and tracing","https://mlflow.org/docs/latest/genai/overview/"],["LangSmith evaluation workflow","https://docs.langchain.com/langsmith/evaluation"],["Harbor framework overview","https://www.tbench.ai/news/announcement-2-0"]]
  },
  {
    "id":"economics-performance","number":"20","stage":"Platform engineering","title":"Cost, latency, and performance engineering","oneLiner":"Optimize the frontier between quality, reliability, wall-clock time, and spend.",
    "overview":"Learn token accounting, cached input, model and tool latency, concurrency, queueing, targeted tests, early termination, adaptive evaluation, task indices, and cost-normalized metrics.",
    "why":"A workflow that is accurate but too slow or expensive cannot be adopted. Efficiency is a product requirement and an eval dimension.",
    "prerequisites":["Modules 14 and 19"],
    "concepts":["Cost attribution by span","Latency decomposition","Concurrency and rate limits","Cache effectiveness","Early stopping and fail-fast graders","Index suites and adaptive sampling","Quality-cost Pareto frontiers"],
    "technical":["Attribute cost to task, agent, stage, and tool.","Report median and tail latency.","Avoid hidden cache advantages in benchmark comparisons.","Use targeted regression suites before full runs."],
    "build":"Profile five runs and identify the top three cost and latency contributors. Test one model-routing, caching, or targeted-test optimization without reducing reliability.",
    "projectConnection":"Powers budget controls, scorecard economics, and CI execution strategy.",
    "deliverables":["Cost model","Latency waterfall","Optimization experiment"],
    "resources":[["Terminal-Bench leaderboard cost reporting","https://www.tbench.ai/leaderboard/terminal-bench/2.1"],["OpenAI Agents SDK — running agents","https://openai.github.io/openai-agents-python/running_agents/"],["OpenTelemetry metrics concepts","https://opentelemetry.io/docs/concepts/signals/metrics/"]]
  },
  {
    "id":"human-governance","number":"21","stage":"Platform engineering","title":"Human oversight, governance, and decision rights","oneLiner":"Define who can approve, override, investigate, publish, and accept risk.",
    "overview":"Study human-in-the-loop patterns, escalation design, reviewer interfaces, evidence packets, audit trails, model and tool change management, incident response, materiality, risk acceptance, and evaluation ownership.",
    "why":"Enterprise adoption depends on decision transparency, not only model capability. Stakeholders need to know what the system proves, what remains uncertain, and who is accountable.",
    "prerequisites":["Modules 02, 18, and 19"],
    "concepts":["Approval versus review versus intervention","Risk-tiered autonomy","Evidence packets","Change management","Materiality and acceptance thresholds","Incident-to-eval feedback","Roles and accountability"],
    "technical":["Place approval at irreversible or high-risk boundaries.","Show reviewers the relevant evidence, not the entire trace.","Version policies and approval decisions.","Maintain an exception and risk-acceptance register."],
    "build":"Design the reviewer experience for architecture approval and write-capable implementation. Define SLA, evidence, override, and audit requirements.",
    "projectConnection":"Makes ModernizeBench pitchable to risk, architecture, platform, and business stakeholders.",
    "deliverables":["RACI matrix","Approval policy","Reviewer evidence packet"],
    "resources":[["NIST AI RMF","https://www.nist.gov/itl/ai-risk-management-framework"],["NIST Generative AI Profile","https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"],["OpenAI Agents SDK — human in the loop","https://openai.github.io/openai-agents-python/human_in_the_loop/"]]
  }
]);
