agent: composer
stage: Integrate
input-packet:
  ADLC run id: `2026-09-02T10-39Z-about-us-racing-page`

  You are being re-dispatched for a remediation verification pass after Auditron failed the runtime selector contract. Do not treat this as a net-new content-seeding run. Inspect the current repository state, verify the remediation on the content-seeding branch you own, and refresh your run artifacts/handoff so the next Auditron pass inherits an accurate authored-content/runtime-hook contract.

  Workspace root:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

  Project identifiers:
  - `project: Copilot-test`
  - `package: com.copilottest.aem`
  - `group: CopilotTest`

  Failed gate you are assisting in remediating:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\auditron.yaml`
  - Auditron reported that the audited build did not render the wrapper classes assumed by the page-scoped SCSS and Playwright selectors.

  Current repository state to verify and treat as the candidate remediation:
  - The repository has already been updated away from assumed wrapper classes and now uses explicit HTML IDs instead.
  - The authored About Us page content now carries ID properties such as `about-us-page`, `about-us-hero`, `section-we-stop`, `section-why-we-race`, `section-apr`, `section-oreca`, `section-globe`, and `section-win-one`.
  - Blockwright-owned SCSS and Playwright selectors now target those IDs.

  Mandatory upstream inputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.aem-skills-config.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\PLAN.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\strategist.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\designforge.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\blockwright.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\auditron.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\component-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\dialog-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\template-design.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\authoring-guidelines.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\source-content-inventory.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\functional-test-cases.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\authoring-test-cases.md`

  Repository areas you own for this verification pass:
  - `ui.content/src/main/content/jcr_root/content/Copilot-test/us/en/about-us/.content.xml`
  - Any related content-package or DAM filter entries already used by your seeded About Us subtree

  Responsibilities for this remediation verification dispatch:
  1. Verify that the current seeded page structure uses explicit authored HTML IDs that the existing AEM components will actually render, rather than relying on non-rendered wrapper-class assumptions.
  2. Confirm the About Us page still stays within the approved reuse-first content composition: existing template, existing proxy components, approved section order, approved verbatim headings, and approved DAM references.
  3. If any Composer-owned seeded content or packaging entry is still inconsistent with that ID-based runtime contract, apply the minimal correction needed and report it.
  4. Refresh `integrate/composer/content-seeding-report.md` and overwrite `handoffs/composer.yaml` so they explicitly describe the verified runtime hook:
     - authored page/root/section IDs present
     - approved section order preserved
     - template/resource type/DAM resolution still passes
     - no headless track for this run
  5. Call out that Blockwright-owned SCSS and Playwright selectors depend on these authored IDs, but do not edit Blockwright-owned files yourself.

  Constraints:
  - Do not invoke Maven.
  - Do not introduce Content Fragments, GraphQL, new components, dialogs, Java, or stylesheet logic.
  - If the current repository state is already correct for your owned files, your job is still to verify that state and refresh the artifacts/handoff accordingly.

  Required outputs before return:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\integrate\composer\content-seeding-report.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\composer.yaml`

  Parent-materialization fallback is pre-authorized:
  - If write access to `.claude/agents/runs/...` is denied for any run artifact, write the intended content to a clearly named repo-root staging file and print:
    `PARENT_MATERIALIZATION_REQUIRED: source=<repo-root-file> target=<intended-runs-path>`
  - Still complete the verification work and include all artifact payloads via that fallback if needed.
expected-handoff: C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\composer.yaml
gate-criteria:
  - `handoffs/composer.yaml` exists and explicitly records the authored explicit-ID runtime contract for the seeded About Us page structure.
  - `integrate/composer/content-seeding-report.md` exists and reflects the remediation verification pass.
  - The page remains authored against the existing `page-content` template and uses only the approved existing proxies.
  - The authored section order, headings, and DAM references remain aligned with the approved design/content inventory.
  - Template, `sling:resourceType`, and DAM reference resolution still pass, and no Maven invocation occurs in this stage.
