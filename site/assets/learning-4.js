window.MODERNIZEBENCH_DATA.learning.push(...[
  {
    "id":"program-analysis","number":"22","stage":"Modernization domain","title":"Program analysis and business-rule recovery","oneLiner":"Recover behavior from code, data, configuration, UI, and runtime evidence with explicit provenance.",
    "overview":"Study static and dynamic program analysis, ASTs, control and data flow, route and template discovery, SQL and stored-procedure analysis, feature flags, authorization paths, logs, tests, and evidence-backed requirement synthesis.",
    "why":"The hardest modernization problem is not code translation; it is discovering the real behavior scattered across implementation layers and historical exceptions.",
    "prerequisites":["Module 06","Backend and database experience"],
    "concepts":["Static versus dynamic analysis","Control and data flow","Cross-language dependency mapping","UI-to-backend traceability","Database and stored-procedure behavior","Feature flags and configuration","Evidence-to-requirement traceability"],
    "technical":["Every requirement must cite source evidence.","Separate observed behavior from inferred intent.","Capture contradictions and unresolved questions.","Use runtime probes to validate static hypotheses."],
    "build":"Analyze one PHP page end to end and produce an evidence graph linking UI actions, routes, code branches, SQL, roles, and side effects to normalized requirements.",
    "projectConnection":"Defines the Legacy Analyst agent, evidence graph, and requirement fidelity graders.",
    "deliverables":["Evidence graph","Requirements catalogue","Uncertainty register"],
    "resources":[["GitHub CodeQL CLI","https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-cli"],["Tree-sitter documentation","https://tree-sitter.github.io/tree-sitter/"],["OpenTelemetry tracing concepts","https://opentelemetry.io/docs/concepts/signals/traces/"]]
  },
  {
    "id":"architecture-reuse","number":"23","stage":"Modernization domain","title":"Architecture transformation and reuse intelligence","oneLiner":"Map business capabilities to target boundaries while proving when existing services should be reused.",
    "overview":"Learn domain decomposition, bounded contexts, service and module boundaries, API design, transaction boundaries, eventing, nonfunctional requirements, ADRs, dependency analysis, similarity search, compatibility checks, and reuse economics.",
    "why":"A migration agent can generate compilable code while creating duplicated services, wrong boundaries, or operational complexity. Architecture and reuse need explicit evidence and evaluation.",
    "prerequisites":["Module 22","System design fundamentals"],
    "concepts":["Capability and domain mapping","Target architecture constraints","Service boundaries and transactions","API and event contracts","Architecture decision records","Reuse candidate retrieval","Compatibility and rejection rationale"],
    "technical":["Require explicit build-versus-reuse decisions.","Evaluate architecture against stated constraints, not style preference.","Check runtime and organizational ownership compatibility.","Preserve business transaction semantics before splitting services."],
    "build":"Create an architecture packet for the sample feature with context map, API contract, data ownership, transaction strategy, reuse candidates, ADRs, and risk analysis.",
    "projectConnection":"Defines the Architecture Agent and Reuse Scout evaluation surface.",
    "deliverables":["Target architecture","Reuse decision record","Architecture rubric"],
    "resources":[["OpenRewrite modernization recipes","https://docs.openrewrite.org/recipes/java/migrate"],["Martin Fowler — Strangler Fig application","https://martinfowler.com/bliki/StranglerFigApplication.html"],["AWS Prescriptive Guidance — decomposition patterns","https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-decomposing-monoliths/welcome.html"]]
  },
  {
    "id":"behavioral-parity","number":"24","stage":"Modernization domain","title":"Behavioral parity and differential testing","oneLiner":"Prove that the new system preserves intended behavior, state transitions, permissions, and integrations.",
    "overview":"Study characterization tests, golden master tests, differential execution, contract tests, database state assertions, UI automation, role matrices, idempotency, audit behavior, observability parity, and controlled divergence.",
    "why":"Passing new unit tests does not prove parity with a legacy system. The benchmark must compare externally observable behavior and hidden side effects.",
    "prerequisites":["Modules 11 and 22–23"],
    "concepts":["Characterization and golden-master tests","Differential testing","API and message contracts","Database state comparison","Role and permission matrices","Idempotency and retries","Approved intentional divergence"],
    "technical":["Normalize nondeterministic fields before comparison.","Compare state and side effects, not just responses.","Tag known legacy defects separately from required parity.","Test retries, duplicate submissions, and partial failure."],
    "build":"Create a differential test harness that sends the same scenarios to legacy and modernized implementations and compares API, database, audit, and UI outcomes.",
    "projectConnection":"Provides the primary business-fidelity score and hidden graders.",
    "deliverables":["Scenario corpus","Differential harness","Parity report"],
    "resources":[["Pact contract testing","https://docs.pact.io/"],["Playwright testing","https://playwright.dev/docs/intro"],["Testcontainers for Java","https://java.testcontainers.org/"]]
  },
  {
    "id":"data-migration","number":"25","stage":"Modernization domain","title":"Schema, data, and migration evaluation","oneLiner":"Validate data meaning, transformations, constraints, cutover, and rollback—not only DDL generation.",
    "overview":"Study schema discovery, entity and relationship mapping, data profiling, constraints, reference data, transformation rules, reconciliation, dual writes, backfills, cutover, rollback, and privacy.",
    "why":"Data errors can preserve API shape while silently violating business meaning. Schema Index becomes much more valuable when it connects code usage to migration invariants.",
    "prerequisites":["Modules 06, 11, and 22"],
    "concepts":["Schema and usage discovery","Semantic mapping","Data quality profiling","Transformation invariants","Backfill and reconciliation","Dual-run and cutover strategy","Rollback and auditability"],
    "technical":["Measure row counts and business aggregates.","Preserve keys, ordering, precision, and timezone semantics.","Test null, orphan, duplicate, and historical edge cases.","Make migration scripts repeatable and observable."],
    "build":"Define a data migration pack with source fixtures, mapping specification, transformation code, reconciliation queries, and rollback tests.",
    "projectConnection":"Extends Schema Index into a migration evidence and grading service.",
    "deliverables":["Mapping specification","Reconciliation suite","Cutover runbook"],
    "resources":[["Flyway documentation","https://documentation.red-gate.com/flyway"],["Liquibase documentation","https://docs.liquibase.com/"],["Testcontainers databases","https://java.testcontainers.org/modules/databases/"]]
  },
  {
    "id":"platform-architecture","number":"26","stage":"Synthesis","title":"ModernizeBench platform architecture","oneLiner":"Assemble the control plane, execution plane, evidence plane, and publication plane into one coherent system.",
    "overview":"Synthesize all prior modules into the full architecture: web and API, task registry, experiment service, scheduler, sandbox workers, runner adapters, MCP services, trace gateway, artifact store, grader workers, results warehouse, comparison UI, access control, and publication pipeline.",
    "why":"The product must scale from one developer’s workflow to reproducible team and public benchmark use without making the core dependent on one model vendor.",
    "prerequisites":["Modules 01–25"],
    "concepts":["Control versus execution plane","Runner and tool adapter boundaries","Canonical manifests and traces","Isolation and tenancy","Storage and retention","Extension SDKs","Operational reliability"],
    "technical":["Use immutable task, run, and grader manifests.","Queue untrusted work onto isolated workers.","Keep framework adapters thin.","Design for local-first development and cloud execution."],
    "build":"Produce the v1 system design and implement a vertical slice with one task pack, Copilot runner import, MCP tools, five graders, repeated trials, trace viewer, and scorecard.",
    "projectConnection":"This is the integration milestone for the whole learning journey.",
    "deliverables":["System design document","Threat model","Running v1 vertical slice"],
    "resources":[["OpenAI Agents SDK","https://openai.github.io/openai-agents-python/"],["MLflow GenAI platform","https://mlflow.org/docs/latest/genai/overview/"],["OpenTelemetry GenAI conventions","https://github.com/open-telemetry/semantic-conventions-genai"],["Harbor framework announcement","https://www.tbench.ai/news/announcement-2-0"]]
  },
  {
    "id":"research-publication","number":"27","stage":"Synthesis","title":"Applied research and public technical communication","oneLiner":"Turn implementation evidence into credible experiments, reports, talks, and an SME body of work.",
    "overview":"Learn literature review, research questions, preregistered hypotheses, ablations, reproducible methods, result tables, limitations, artifact release, technical writing, stakeholder narratives, demos, and responsible benchmark communication.",
    "why":"Building the platform creates skill; publishing careful evidence creates professional credibility and advances the field.",
    "prerequisites":["Modules 14–16 and 26"],
    "concepts":["Research question and hypothesis design","Literature and source quality","Ablation studies","Reproducibility packages","Negative results and limitations","Technical and executive narratives","Responsible leaderboard reporting"],
    "technical":["Separate observed result from interpretation.","Publish task and grader versions with every claim.","Report uncertainty, cost, and limitations.","Avoid marketing conclusions broader than the task population supports."],
    "build":"Run and publish the first study: ‘How structured project memory changes business-rule fidelity, exploration cost, and reliability in multi-agent modernization.’",
    "projectConnection":"Creates the flagship paper, talk, and portfolio proof for your agentic-AI SME positioning.",
    "deliverables":["Research protocol","Reproducibility package","Technical report and talk deck"],
    "resources":[["OpenAI Evals research portal","https://evals.openai.com/"],["Papers with Code — reproducibility resources","https://paperswithcode.com/"],["ACM artifact review and badging","https://www.acm.org/publications/policies/artifact-review-and-badging-current"]]
  }
]);
