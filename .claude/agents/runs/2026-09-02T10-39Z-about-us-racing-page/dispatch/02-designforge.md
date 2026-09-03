agent: designforge
stage: Design
input-packet:
  ADLC run id: `2026-09-02T10-39Z-about-us-racing-page`

  You are the Design-stage specialist for this run. Produce the implementation-ready design pack for the approved headful AEM Sites About Us page. Do not write source code. Your outputs must be written under the run folder and your handoff must be written before you return.

  Workspace root:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

  Project identifiers:
  - `project: Copilot-test`
  - `package: com.copilottest.aem`
  - `group: CopilotTest`

  Approved architecture checkpoint:
  - The human architecture review is approved and recorded in `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`.
  - Approved approach: headful AEM Sites page using the existing `page-content` template.
  - Reuse the current page chrome and existing Core Component proxy strategy wherever feasible.
  - DAM target path is `/content/dam/Copilot-test/about-us`.
  - Continue only within this approved architecture envelope; do not re-plan the run.

  Mandatory upstream inputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\PLAN.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\strategist.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\plan\requirements.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\plan\technical-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\plan\reference-deconstruction.md`

  User objective:
  - Create a polished About Us marketing page at `/content/Copilot-test/us/en/about-us`.
  - Keep the solution traditional and server-rendered; no headless architecture.
  - Reuse the existing page-content template and current page shell.
  - Use the provided local image set as the content/image source:
    - `C:\Users\2400091\Downloads\Picflow Images Sep 2\D_ABOUTUS_Hero_Interior.jpg`
    - `C:\Users\2400091\Downloads\Picflow Images Sep 2\Falcon-2.jpg`
    - `C:\Users\2400091\Downloads\Picflow Images Sep 2\IMSAROLEX26_01_23_26_111222_FH_8052.jpg`
    - `C:\Users\2400091\Downloads\Picflow Images Sep 2\IMSA_D24_26_01_25_001036_JP35529.jpg`
    - `C:\Users\2400091\Downloads\Picflow Images Sep 2\we-stop-breaches.jpg`
    - `C:\Users\2400091\Downloads\Picflow Images Sep 2\why-we-race.jpg`

  Confirmed reference structure to carry forward:
  - `About Us`
  - `We Stop Breaches`
  - `Why We Race`
  - `CrowdStrike Racing by APR`
  - `No. 4 CrowdStrike Oreca 07`
  - `Protection Around the Globe`
  - `We Win as One`

  Design responsibilities:
  1. Produce the required design artifacts under `design/` for this run:
     - `component-specifications.md`
     - `dialog-specifications.md`
     - `template-design.md`
     - `policy-mapping.md`
     - `authoring-guidelines.md`
     - `functional-test-cases.md`
     - `ui-test-scenarios.md`
     - `reference-assets.md`
     - `source-content-inventory.md`
     - `authoring-test-cases.md` (write an explicit N/A stub only if no authoring-surface-specific cases are warranted)
  2. Translate the approved architecture into implementation-ready specs for downstream `blockwright` and `composer`.
  3. Follow the reuse-first direction from Strategist and the approved checkpoint:
     - prefer existing proxy components for title, text, image, teaser, and container
     - allow at most one minimal page-specific layout/presentation component only if the composition cannot be expressed cleanly through existing proxies
  4. Define the section-by-section content/component mapping for hero plus all confirmed body sections.
  5. If any new component is warranted, specify its dialog fields completely. If reuse-only is sufficient, state clearly which reused components require no new dialog design.
  6. Attempt to extract source content from the reference URL as far as the environment allows and build `source-content-inventory.md` with `verbatim`, `derived`, and `invented-by-necessity` markings. If direct fetch remains blocked, document the limitation explicitly and keep every non-verbatim field clearly marked.
  7. Create stable test IDs and an ID index for `functional-test-cases.md`, `ui-test-scenarios.md`, and `authoring-test-cases.md`. Every case must include `executor: auditron` or `executor: sentinel`.
  8. Ensure every component in `component-specifications.md` includes Pixel-Verified Acceptance Criteria for desktop and mobile breakpoints.
  9. Ensure `policy-mapping.md` gives explicit allowlists for every parsys/container area; no wildcard allowlists.
  10. Ensure every requirement in `requirements.yaml` traces to one or more test cases.
  11. Keep this run non-headless. Do not create `content-fragment-models.md` unless you uncover an approved scope change from the human, which is not currently present.

  Required outputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\component-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\dialog-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\template-design.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\policy-mapping.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\authoring-guidelines.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\functional-test-cases.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\ui-test-scenarios.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\reference-assets.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\source-content-inventory.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\authoring-test-cases.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\designforge.yaml`

  Constraints:
  - Do not write source code, HTL, dialogs, XML, Java, SCSS, JavaScript, or Playwright specs.
  - Do not invoke Maven.
  - Do not expand the scope into integrations, dispatcher work, repoinit/security work, or headless content unless the existing approved architecture is explicitly changed by the human.
  - Your deliverable is the design pack only.

  Parent-materialization fallback is pre-authorized:
  - If write access to `.claude/agents/runs/...` is denied for any run artifact, write the intended content to a clearly named repo-root staging file and print:
    `PARENT_MATERIALIZATION_REQUIRED: source=<repo-root-file> target=<intended-runs-path>`
  - Still complete the design work and include all artifact payloads via that fallback if needed.
expected-handoff: C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\designforge.yaml
gate-criteria:
  - All required design artifacts are present under `design/`: `component-specifications.md`, `dialog-specifications.md`, `template-design.md`, `policy-mapping.md`, `authoring-guidelines.md`, `functional-test-cases.md`, `ui-test-scenarios.md`, `reference-assets.md`, `source-content-inventory.md`, and `authoring-test-cases.md` (or an explicit N/A stub where allowed).
  - `handoffs/designforge.yaml` exists and returns a clear `pass` or `blocked` recommendation for the dialog checkpoint.
  - `functional-test-cases.md`, `ui-test-scenarios.md`, and `authoring-test-cases.md` each open with an ID Index block whose declared IDs match the artifact body.
  - Every functional, UI, and authoring case carries a stable ID and an explicit `executor: auditron` or `executor: sentinel` marking.
  - `reference-assets.md` lists every reference URL, local asset fixture, and other reference source named in this run intake.
  - `source-content-inventory.md` exists and marks each field `verbatim`, `derived`, or `invented-by-necessity`.
  - Every component in `component-specifications.md` has a Pixel-Verified Acceptance Criteria table for desktop and mobile breakpoints.
  - `policy-mapping.md` uses explicit allowlists for every parsys/container area; no `*`.
  - Every requirement ID from `plan/requirements.yaml` traces to at least one test case.
  - No code artifacts are produced in this stage.
