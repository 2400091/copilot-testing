agent: auditron
stage: Test
input-packet:
  ADLC run id: `2026-09-02T10-39Z-about-us-racing-page`

  You are the Test-stage specialist for this run. Execute the pre-release implementation quality gate across the completed reuse-first About Us page work. Own the run-level code-quality review, the Build Validation Gate, unit/integration testing as warranted by the change set, and the mandatory functional-TC attribution ledger. Write your run artifacts under the run folder before you return.

  Workspace root:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

  Project identifiers:
  - `project: Copilot-test`
  - `package: com.copilottest.aem`
  - `group: CopilotTest`

  Stage status you are inheriting:
  - Strategist: pass
  - Designforge: pass
  - Blockwright: pass
  - Composer: pass
  - `configsmith`: not dispatched for this run; no security / repoinit / dispatcher / CDN need was surfaced.
  - `bridgesmith`: not dispatched for this run; no external system boundary is in scope.

  Approved scope and run context:
  - This is a traditional headful AEM Sites page only; no headless, GraphQL, Content Fragment, or external integration track is in scope.
  - The approved implementation direction is strict reuse-first on the existing `/conf/Copilot-test/settings/wcm/templates/page-content` template and existing proxy components.
  - Page path: `/content/Copilot-test/us/en/about-us`
  - DAM path: `/content/dam/Copilot-test/about-us`
  - Blockwright reports zero Java / zero template / zero policy change scope, with frontend styling and `ui.tests` Playwright migration as the implementation work.
  - Composer seeded the authored page content and DAM assets and updated filter coverage for `/content/dam/Copilot-test/about-us`.

  Mandatory upstream inputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.aem-skills-config.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\pom.xml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\PLAN.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\strategist.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\designforge.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\blockwright.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\composer.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\plan\requirements.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\plan\technical-specifications.md`
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

  Repository areas changed by upstream specialists:
  - `ui.frontend/src/main/webpack/site/_variables.scss`
  - `ui.frontend/src/main/webpack/site/styles/about-us-page.scss`
  - `ui.tests/Dockerfile`
  - `ui.tests/README.md`
  - `ui.tests/test-module/.eslintrc.js`
  - `ui.tests/test-module/.gitignore`
  - `ui.tests/test-module/README.md`
  - `ui.tests/test-module/global-setup.js`
  - `ui.tests/test-module/package.json`
  - `ui.tests/test-module/package-lock.json`
  - `ui.tests/test-module/playwright.config.js`
  - `ui.tests/test-module/run.sh`
  - `ui.tests/test-module/tests/helpers/aboutUs.js`
  - `ui.tests/test-module/tests/ui-001-page-structure.spec.js`
  - `ui.tests/test-module/tests/ui-002-desktop-alternating-layout.spec.js`
  - `ui.tests/test-module/tests/ui-003-mobile-stack.spec.js`
  - `ui.tests/test-module/tests/ui-004-dam-images.spec.js`
  - `ui.tests/test-module/tests/ui-005-scoped-theme.spec.js`
  - `ui.content/src/main/content/jcr_root/content/Copilot-test/us/en/about-us/**`
  - `ui.content/src/main/content/jcr_root/content/dam/Copilot-test/about-us/**`
  - Any `filter.xml` or content-package entries Composer updated so the DAM subtree deploys.

  Upstream outcomes to respect:
  - Blockwright already performed static Playwright harness validation (`npm install`, `npx playwright test --list`, `npx eslint .`) and recorded discovery counts. Do not treat UI execution as your responsibility; Sentinel owns Playwright runtime execution later against the real environment.
  - Composer verified template resolution, component resource type resolution, and DAM reference resolution in the authored content tree.
  - The run touched an authoring surface, so your review must consider whether authored content and repository packaging are internally consistent, but authoring-UI execution itself belongs to Sentinel.

  Auditron responsibilities for this dispatch:
  1. Run a unified code-quality / consistency review across every changed file from Blockwright and Composer.
  2. Run your run-level review skill and include any findings in `test/auditron/code-quality-report.md`.
  3. Perform the Build Validation Gate with exactly one `mvn -q clean install -PautoInstallSinglePackage` invocation as mvn call #1 of 2.
  4. If warranted by the changed codebase, author and execute unit and/or integration tests with at most one further Maven invocation as mvn call #2 of 2.
  5. Emit the mandatory functional-TC attribution ledger for every `TC-*` ID in `design/functional-test-cases.md`:
     - produce `test/auditron/coverage.md`
     - record `total_from_file`
     - bucket each ID into `auditron_executed`, `deferred_to_sentinel`, or `blocked`
     - ensure the buckets sum to `total`
     - mirror the same accounting in `handoffs/auditron.yaml`
     - if the design artifact omits `executor` markers, treat the unmarked case as Auditron-owned unless it genuinely requires the real deployed tier
  6. Produce `test/auditron/changed_files.txt` for Sentinel's downstream blast-radius and provenance needs.
  7. If you find a high-severity issue or a broken gate, report it plainly in the handoff rather than soft-passing.

  Run-specific review focus:
  - Verify the seeded About Us content resolves against the existing `page-content` template and approved proxy resource types.
  - Verify the page-scoped CSS contract matches the authored wrapper/node names Composer seeded.
  - Verify the Playwright migration is complete enough that Cloud Manager would run Playwright rather than Cypress from the committed `ui.tests` module.
  - Verify no orphaned Cypress runtime path remains that would break packaging or CI execution.
  - Verify no protected JCR properties or structurally invalid content package nodes were introduced in seeded page or DAM content.
  - Verify content checks use `design/source-content-inventory.md` as the oracle, never a specialist-authored expected payload.

  Constraints:
  - You own the entire run's Maven budget: maximum 2 `mvn` invocations total.
  - Do not run Playwright UI tests against a live environment; that is Sentinel's stage.
  - Do not dispatch or perform Pilot/Sentinel work.
  - Do not widen scope into configsmith or bridgesmith unless you surface a concrete blocking finding that requires re-routing.

  Required outputs before return:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\test\auditron\code-quality-report.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\test\auditron\changed_files.txt`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\test\auditron\test-report.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\test\auditron\coverage.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\auditron.yaml`

  Parent-materialization fallback is pre-authorized:
  - If write access to `.claude/agents/runs/...` is denied for any run artifact, write the intended content to a clearly named repo-root staging file and print:
    `PARENT_MATERIALIZATION_REQUIRED: source=<repo-root-file> target=<intended-runs-path>`
  - Still complete the review/build/test work and include all artifact payloads via that fallback if needed.
expected-handoff: C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\auditron.yaml
gate-criteria:
  - `handoffs/auditron.yaml` exists and reports the stage verdict explicitly; it must not soft-pass an `incomplete` tests track.
  - `test/auditron/code-quality-report.md`, `test/auditron/test-report.md`, `test/auditron/changed_files.txt`, and `test/auditron/coverage.md` all exist.
  - Zero severity `high` or above findings remain open unless each is explicitly accepted in `DECISIONS.md`.
  - Cross-file consistency passes for the approved reuse-first implementation: authored wrapper/node names align with page-scoped SCSS, seeded content resolves, DAM references package correctly, and no structurally invalid content nodes are introduced.
  - The Build Validation Gate succeeds with `mvn -q clean install -PautoInstallSinglePackage` as mvn call #1 of 2, and total Maven invocations for the entire run do not exceed 2.
  - Any unit/integration test execution is completed within the remaining Maven budget and returns zero failures.
  - The functional-TC attribution gate passes: every `TC-*` ID in `design/functional-test-cases.md` is enumerated in `test/auditron/coverage.md` and `handoffs/auditron.yaml`, `total == total_from_file`, and `auditron_executed + deferred_to_sentinel + blocked == total`.
  - Any case deferred to Sentinel is genuinely real-environment-dependent and is justified by ID with evidence, not by blanket deferral.
  - Playwright runtime execution is not claimed as completed by Auditron; Sentinel remains the owner of UI execution.
