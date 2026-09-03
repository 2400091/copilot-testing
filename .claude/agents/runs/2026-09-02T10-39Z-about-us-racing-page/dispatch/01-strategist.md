agent: strategist
stage: Plan
input-packet:
  ADLC run id: `2026-09-02T10-39Z-about-us-racing-page`

  You are the Plan-stage specialist for this run. Produce the planning artifacts for a traditional headful AEM Sites page implementation. Do not write source code. Your outputs must be written under the run folder and your handoff must be written before you return.

  Workspace root:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

  Project identifiers:
  - `project: Copilot-test`
  - `package: com.copilottest.aem`
  - `group: CopilotTest`

  User objective:
  - Create an AEM About Us page using `https://crowdstrikeracing.com/about-us/` as the visual/content basis.
  - Implementation must be headful / traditional page implementation, not headless.
  - Use the local asset folder as the source for required images: `C:\Users\2400091\Downloads\Picflow Images Sep 2`

  Confirmed workspace context:
  - This is a standard AEMaaCS archetype-style project with modules `core`, `ui.apps`, `ui.content`, `ui.frontend`, `ui.tests`, `it.tests`.
  - Existing editable template exists at `/conf/Copilot-test/settings/wcm/templates/page-content`.
  - Existing site content root exists at `/content/Copilot-test/us/en`.
  - Existing site pages use `Copilot-test/components/page`.
  - Existing Core Component proxy coverage is available for common building blocks including container, title, text, image, teaser, accordion, tabs, carousel, button, and related page primitives.
  - The direct HTML fetch of the reference URL was blocked from this environment. Use the confirmed page summary below as seed context and inspect the repository directly as needed.

  Confirmed reference-page summary:
  - About Us / We Stop Breaches
  - Why We Race
  - CrowdStrike Racing by APR
  - No. 4 CrowdStrike Oreca 07
  - Protection Around the Globe
  - We Win as One
  - Theme: racing + cybersecurity narrative with partnership and performance positioning

  Confirmed local source assets:
  - `D_ABOUTUS_Hero_Interior.jpg`
  - `Falcon-2.jpg`
  - `IMSAROLEX26_01_23_26_111222_FH_8052.jpg`
  - `IMSA_D24_26_01_25_001036_JP35529.jpg`
  - `we-stop-breaches.jpg`
  - `why-we-race.jpg`

  Required outputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\plan\requirements.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\plan\technical-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\plan\reference-deconstruction.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\strategist.yaml`

  Planning responsibilities:
  1. Canonicalize the intake into requirements with explicit acceptance criteria.
  2. Define the solution architecture for a headful AEM Sites page and confirm the pattern remains server-rendered/traditional.
  3. Propose the page information architecture and section breakdown derived from the provided summary and any repository context you inspect.
  4. Prefer reuse of existing Core Component proxies and existing template/content structures where feasible; clearly mark any likely need for net-new component work.
  5. Identify the downstream specialist routing needed after Designforge:
     - expected: `blockwright` for implementation
     - expected: `composer` for DAM asset seeding / authored content setup
     - conditional: `configsmith` only if security / repoinit / dispatcher / CDN / service-user work is required
     - conditional: `bridgesmith` only if an external integration boundary is actually in scope
  6. Include content, DAM, authoring, testing, and NFR risks relevant to this page buildout.
  7. Because the intake is reference-driven, `reference-deconstruction.md` must contain a per-region breakdown for every visible section you can infer from the provided basis.
  8. Include a concise architecture-checkpoint summary in the handoff so the Program Agent can ask for human approval before dispatching Designforge.

  Constraints:
  - Do not implement code.
  - Do not convert this request into a headless architecture.
  - Do not assume external integrations unless evidence supports them.
  - Keep Maven budget untouched; no `mvn` execution belongs in this stage.

  Parent-materialization fallback is pre-authorized:
  - If write access to `.claude/agents/runs/...` is denied for any run artifact, write the intended content to a clearly named repo-root staging file and print:
    `PARENT_MATERIALIZATION_REQUIRED: source=<repo-root-file> target=<intended-runs-path>`
  - Still complete the planning work and include all artifact payloads via that fallback if needed.
expected-handoff: C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\strategist.yaml
gate-criteria:
  - No open question is marked blocking.
  - Every requirement has at least one acceptance criterion.
  - Every requirement traces to a work-breakdown item.
  - No deprecated AEM API is required by the proposed approach.
  - `plan/reference-deconstruction.md` exists and covers every visible/inferred reference-page region.
  - `handoffs/strategist.yaml` provides a clear pass/blocked recommendation and architecture-checkpoint summary for human review.
