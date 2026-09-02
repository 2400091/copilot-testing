agent: blockwright
stage: Implement
input-packet:
  ADLC run id: `2026-09-02T10-39Z-about-us-racing-page`

  You are the Implement-stage specialist for this run. Execute the approved reuse-first implementation for the About Us racing page and prepare the pre-deploy Playwright UI harness/specs. Write source changes in the repository and write your run artifacts under the run folder before you return.

  Workspace root:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

  Project identifiers:
  - `project: Copilot-test`
  - `package: com.copilottest.aem`
  - `group: CopilotTest`

  Approved upstream checkpoint and implementation envelope:
  - The mandatory dialog-spec confirmation is approved and recorded in `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`.
  - Approved implementation direction is strict reuse-first.
  - Use existing `Copilot-test/components/container`, `image`, `teaser`, `title`, and `text` proxies only.
  - No new custom component is planned or authorized for this checkpoint.
  - Layout control must come from named containers / authored node names plus page-scoped CSS.
  - Reuse `/conf/Copilot-test/settings/wcm/templates/page-content`.
  - Page path is `/content/Copilot-test/us/en/about-us`.
  - DAM path is `/content/dam/Copilot-test/about-us`.

  Mandatory upstream inputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\PLAN.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\strategist.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\designforge.yaml`
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

  Confirmed repository context:
  - The repository already contains the `page-content` template subtree under `ui.content/.../conf/Copilot-test/settings/wcm/templates/page-content/`.
  - Existing content already uses `Copilot-test/components/page`, `container`, `title`, `text`, `image`, and `teaser` proxies.
  - `ui.tests` is currently Cypress-based (`ui.tests/test-module/cypress.config.js`, Cypress deps in `package.json`, and `ui.tests/Dockerfile` based on `cypress/included`).

  Implementation responsibilities:
  1. Implement the approved page buildout without introducing a new custom component:
     - use existing container/image/teaser/title/text proxies only
     - keep the template as `/conf/Copilot-test/settings/wcm/templates/page-content`
     - do not add a Sling Model, Java class, OSGi service, or dialog unless an actual blocker proves reuse-only impossible
  2. Add the required page-scoped presentation styling in `ui.frontend` using the wrapper-class technique from the approved design:
     - `.about-us-page`
     - `.about-us-hero`
     - `.section-we-stop`
     - `.section-why-we-race`
     - `.section-apr`
     - `.section-oreca`
     - `.section-globe`
     - `.section-win-one`
  3. Reuse existing template/policy infrastructure. Only touch template/policy files if a minimal allowlist or structure adjustment is truly required by the approved page composition.
  4. Own the PRE-DEPLOY `ui.tests` migration to Playwright and spec authoring:
     - migrate the current Cypress harness to Playwright per your contract
     - remove Cypress configs/dependencies so Cloud Manager cannot run the wrong runner
     - regenerate `package-lock.json`
     - keep `pom.xml` and `assembly-ui-test-docker-context.xml` unmodified unless your contract explicitly requires otherwise
     - author one Playwright spec per scenario ID in `design/ui-test-scenarios.md` (`UI-001` through `UI-005`)
     - parameterize for both author and publish targets (`AEM_AUTHOR_URL`, `AEM_PUBLISH_URL`) with no hardcoded hosts or credentials
     - run the static validation steps from your contract (`npm install`, `npx playwright test --list`, `npx eslint .`) but do not execute the suite against a live environment
  5. If no code/template changes are required beyond styling and `ui.tests`, state that explicitly in your handoff; zero-Java is acceptable and expected for this scope.
  6. Write `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\implement\blockwright\ui-test-harness.md` and `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\blockwright.yaml` before returning.

  Normalization note:
  - If any lower-priority design artifact still mentions a custom `aboutsection` component or author-controlled reverse/hero/accent toggles, treat the approved reuse-first decision in `DECISIONS.md` plus `component-specifications.md`, `dialog-specifications.md`, and `authoring-guidelines.md` as authoritative. Do NOT scaffold `aboutsection`.

  Constraints:
  - Do not invoke Maven.
  - Do not create or route external integrations.
  - Do not introduce repoinit, service-user, dispatcher, or CDN work unless a concrete blocker forces a follow-up for `configsmith`.
  - Do not seed the page content or DAM assets; that runs in parallel with `composer`.
  - If reuse-only proves impossible, stop and report the blocker in your handoff instead of silently expanding scope.

  Required outputs:
  - Any approved repository changes needed for styling/template/policy reuse and `ui.tests` Playwright migration.
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\implement\blockwright\ui-test-harness.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\blockwright.yaml`

  Parent-materialization fallback is pre-authorized:
  - If write access to `.claude/agents/runs/...` is denied for any run artifact, write the intended content to a clearly named repo-root staging file and print:
    `PARENT_MATERIALIZATION_REQUIRED: source=<repo-root-file> target=<intended-runs-path>`
  - Still complete the implementation work and include all artifact payloads via that fallback if needed.
expected-handoff: C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\blockwright.yaml
gate-criteria:
  - The implementation stays within the approved reuse-first envelope: existing container/image/teaser/title/text proxies only, with no new custom `aboutsection` or other bespoke component introduced.
  - Any styling changes are page-scoped and use the approved wrapper-class technique without global bleed.
  - The current Cypress-based `ui.tests` harness is migrated to Playwright, with Cypress fully removed and `package-lock.json` regenerated.
  - Every scenario ID from `design/ui-test-scenarios.md` has a corresponding Playwright spec and `scenario_coverage.unmapped` is empty in `handoffs/blockwright.yaml`.
  - `handoffs/blockwright.yaml` records `ui_tests.harness_state_on_entry`, `cypress_fully_removed: true`, `package_lock_regenerated: true`, and `executed: false`.
  - Static validation for the Playwright harness completes (`npm install`, `npx playwright test --list`, and `npx eslint .`) and the discovery counts are recorded in the handoff.
  - No Maven invocation occurs in this stage.
