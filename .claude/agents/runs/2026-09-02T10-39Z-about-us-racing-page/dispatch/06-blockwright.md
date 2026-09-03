agent: blockwright
stage: Implement
input-packet:
  ADLC run id: `2026-09-02T10-39Z-about-us-racing-page`

  You are being re-dispatched for a remediation verification pass after Auditron failed the runtime selector contract. Do not treat this as a net-new implementation. Inspect the current repository state, verify the remediation on the code/build branch you own, and refresh your run artifacts/handoff so the next Auditron pass inherits an accurate selector/runtime contract.

  Workspace root:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

  Project identifiers:
  - `project: Copilot-test`
  - `package: com.copilottest.aem`
  - `group: CopilotTest`

  Failed gate you are remediating:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\auditron.yaml`
  - Auditron finding `AQ-001` routed to `blockwright`: the audited build expected wrapper classes that did not render at runtime, so page-scoped SCSS and Playwright selectors were unreachable.

  Current repository state to verify and treat as the candidate remediation:
  - The repository has already been updated away from assumed wrapper classes and now uses explicit HTML IDs instead.
  - Page content nodes author IDs such as `about-us-page`, `about-us-hero`, `section-we-stop`, `section-why-we-race`, `section-apr`, `section-oreca`, `section-globe`, and `section-win-one`.
  - `ui.frontend/src/main/webpack/site/styles/about-us-page.scss` now targets `#about-us-page` and `#section-*`.
  - Playwright helpers/specs now target the same IDs.

  Mandatory upstream inputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.aem-skills-config.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\pom.xml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\PLAN.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\strategist.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\designforge.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\composer.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\auditron.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\component-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\dialog-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\template-design.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\authoring-guidelines.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\functional-test-cases.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\ui-test-scenarios.md`

  Repository areas you own for this verification pass:
  - `ui.frontend/src/main/webpack/site/styles/about-us-page.scss`
  - `ui.tests/test-module/tests/helpers/aboutUs.js`
  - `ui.tests/test-module/tests/ui-001-page-structure.spec.js`
  - `ui.tests/test-module/tests/ui-002-desktop-alternating-layout.spec.js`
  - `ui.tests/test-module/tests/ui-003-mobile-stack.spec.js`
  - `ui.tests/test-module/tests/ui-004-dam-images.spec.js`
  - `ui.tests/test-module/tests/ui-005-scoped-theme.spec.js`
  - Any closely related `ui.tests` harness files that must still describe the current Playwright contract accurately

  Responsibilities for this remediation verification dispatch:
  1. Verify that the current selector/styling implementation no longer relies on non-rendering wrapper classes and now uses runtime-valid explicit HTML IDs consistently across SCSS, Playwright helpers, and Playwright specs.
  2. If any Blockwright-owned file is still inconsistent with that ID-based contract, apply the minimal correction needed and report it.
  3. Re-run your static Playwright harness validation steps as warranted by the changed `ui.tests` scope (`npm install` only if needed for lock/dependency integrity, `npx playwright test --list`, and `npx eslint .`), but do not execute browser tests against a live environment and do not invoke Maven.
  4. Refresh `implement/blockwright/ui-test-harness.md` and overwrite `handoffs/blockwright.yaml` so they explicitly describe the verified runtime contract:
     - selector basis is explicit HTML IDs, not wrapper classes
     - `ui_tests.harness_state_on_entry`
     - `cypress_fully_removed: true`
     - `scenario_coverage.unmapped: []`
     - any static-validation discovery counts you actually verified on this remediation pass
  5. Call out whether Composer-owned authored content IDs are the dependency that makes your selector contract valid at runtime; do not edit Composer-owned seeded content yourself.

  Constraints:
  - Do not invoke Maven.
  - Do not create new components, dialogs, Java code, templates, or policies.
  - Do not absorb Composer's content-seeding ownership.
  - If the current repository state is already correct for your owned files, your job is still to verify that state and refresh the artifacts/handoff accordingly.

  Required outputs before return:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\implement\blockwright\ui-test-harness.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\blockwright.yaml`

  Parent-materialization fallback is pre-authorized:
  - If write access to `.claude/agents/runs/...` is denied for any run artifact, write the intended content to a clearly named repo-root staging file and print:
    `PARENT_MATERIALIZATION_REQUIRED: source=<repo-root-file> target=<intended-runs-path>`
  - Still complete the verification work and include all artifact payloads via that fallback if needed.
expected-handoff: C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\blockwright.yaml
gate-criteria:
  - `handoffs/blockwright.yaml` exists and explicitly records that the verified page-scoped styling and Playwright selector contract is based on runtime-valid explicit HTML IDs rather than non-rendered wrapper classes.
  - `implement/blockwright/ui-test-harness.md` exists and reflects the remediation verification pass.
  - Every `UI-*` scenario remains mapped to a Playwright spec and `scenario_coverage.unmapped` is empty.
  - `cypress_fully_removed: true` remains true and no Cypress runtime path is reintroduced.
  - Static validation completes for the verified Playwright scope, and no Maven invocation occurs in this stage.
