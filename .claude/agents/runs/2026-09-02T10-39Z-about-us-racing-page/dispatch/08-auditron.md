agent: auditron
stage: Test
input-packet:
  ADLC run id: `2026-09-02T10-39Z-about-us-racing-page`

  You are being re-dispatched for the Auditron remediation-verification pass after your prior handoff failed on finding `AQ-001` (runtime selector contract). Do not treat this as a net-new stage. Re-evaluate the run against the current repository state, rebuild/reinstall locally so runtime HTML reflects the remediation, and refresh your run artifacts/handoff so the Program Agent can decide whether the pre-release gate is now green.

  Workspace root:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

  Project identifiers:
  - `project: Copilot-test`
  - `package: com.copilottest.aem`
  - `group: CopilotTest`

  Prior failed gate to remediate:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\auditron.yaml`
  - Your prior verdict was `status: fail` because the audited build did not render the wrapper classes assumed by the page-scoped SCSS and Playwright selectors, which left `AQ-001`, `TC-009`, and `TC-010` failing.

  Verified upstream remediation inputs now on disk:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\blockwright.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\composer.yaml`
  - Blockwright verified that page-scoped SCSS and Playwright helpers/specs now use runtime-valid explicit HTML IDs instead of non-rendering wrapper classes.
  - Composer verified that the seeded About Us page now authors the corresponding ID properties (`about-us-page`, `about-us-hero`, `section-we-stop`, `section-why-we-race`, `section-apr`, `section-oreca`, `section-globe`, `section-win-one`) on the existing Core Container-based content structure.
  - Composer also recorded that the checked-in content source is remediated but the currently running local author instance still appeared to serve pre-remediation markup before a rebuild/reinstall. Per ADLC-SPEC §8, this rerun must rebuild/reinstall locally before runtime HTML is treated as the oracle.

  Remaining Maven budget:
  - Your previous handoff recorded `mvn_invocations: 1`.
  - One in-budget Maven invocation remains. Use it for the required local rebuild/reinstall: `mvn -q clean install -PautoInstallSinglePackage` as mvn call #2 of 2.
  - Do not exceed the 2-mvn run budget unless you surface a concrete reason that requires a human-approved budget extension. No extension is currently approved.

  Mandatory upstream inputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.aem-skills-config.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\pom.xml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\PLAN.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\strategist.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\designforge.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\blockwright.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\composer.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\auditron.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\test\auditron\code-quality-report.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\test\auditron\test-report.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\test\auditron\coverage.md`
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

  Repository areas in the remediation blast radius:
  - `ui.frontend/src/main/webpack/site/styles/about-us-page.scss`
  - `ui.tests/test-module/tests/helpers/aboutUs.js`
  - `ui.tests/test-module/tests/ui-001-page-structure.spec.js`
  - `ui.tests/test-module/tests/ui-002-desktop-alternating-layout.spec.js`
  - `ui.tests/test-module/tests/ui-003-mobile-stack.spec.js`
  - `ui.tests/test-module/tests/ui-004-dam-images.spec.js`
  - `ui.tests/test-module/tests/ui-005-scoped-theme.spec.js`
  - `ui.content/src/main/content/jcr_root/content/Copilot-test/us/en/about-us/.content.xml`
  - Any packaging/filter entries that carry the About Us page or DAM subtree into the local install

  Auditron responsibilities for this re-dispatch:
  1. Re-run the unified code-quality / cross-file consistency review against the current repository state, using the refreshed Blockwright and Composer handoffs as the selector/runtime-hook contract.
  2. Rebuild and reinstall locally with exactly one Maven invocation: `mvn -q clean install -PautoInstallSinglePackage` as mvn call #2 of 2.
  3. After the reinstall, re-probe the local runtime and verify that the rendered About Us page exposes the authored explicit HTML IDs the SCSS and Playwright selectors now depend on.
  4. Re-evaluate `AQ-001` explicitly. If the runtime selector contract is now valid, close it; if not, keep the stage `fail` and state the residual blocker plainly.
  5. Refresh the functional-TC attribution ledger for every `TC-*` ID in `design/functional-test-cases.md`, with updated evidence. At minimum, re-evaluate the previously failing `TC-009` and `TC-010`; if you carry any unaffected results forward, make the provenance explicit and ensure no changed shared surface invalidates that carry-forward.
  6. Refresh `test/auditron/changed_files.txt` for Sentinel's downstream provenance/blast-radius needs.
  7. Refresh `test/auditron/code-quality-report.md`, `test/auditron/test-report.md`, `test/auditron/coverage.md`, and overwrite `handoffs/auditron.yaml` with the new build hash, Maven count, and stage verdict.
  8. Continue to respect stage ownership boundaries: do not claim Playwright browser execution, do not dispatch Pilot/Sentinel, and do not widen scope into `configsmith` or `bridgesmith` unless you surface a new concrete blocker that truly requires re-routing.

  Run-specific review focus for this remediation pass:
  - Verify the explicit-ID contract is internally consistent across authored content, page-scoped SCSS, and Playwright selectors.
  - Verify the local install/runtime now reflects that contract after the rebuild/reinstall, rather than the stale pre-remediation markup seen before this rerun.
  - Verify the page remains on the approved existing `page-content` template and approved proxy components only.
  - Verify no protected JCR properties, invalid package structure, or broken DAM references were introduced while remediating the runtime hook contract.
  - Verify Cloud Manager would still execute the committed Playwright-based `ui.tests` module rather than Cypress, without claiming live browser execution as completed in this stage.

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
  - `handoffs/auditron.yaml` exists and reports an explicit stage verdict after the remediation rerun; if the selector/runtime contract still fails, the handoff must remain `status: fail` and name the blocker plainly.
  - `test/auditron/code-quality-report.md`, `test/auditron/test-report.md`, `test/auditron/changed_files.txt`, and `test/auditron/coverage.md` all exist and reflect the rerun rather than the stale pre-remediation pass.
  - The local Build Validation Gate succeeds with `mvn -q clean install -PautoInstallSinglePackage` as mvn invocation #2 of 2, and the rerun records the resulting build hash and local install evidence.
  - The rebuilt local runtime reflects the explicit authored HTML ID contract, and `AQ-001` is re-evaluated against that rebuilt runtime rather than against stale markup.
  - Cross-file consistency passes for the remediated selector/runtime contract: authored IDs, page-scoped SCSS, and Playwright selectors align; seeded content resolves; DAM references package correctly; and no structurally invalid content nodes are introduced.
  - The functional-TC attribution gate still passes: every `TC-*` ID in `design/functional-test-cases.md` is enumerated in both `test/auditron/coverage.md` and `handoffs/auditron.yaml`, `total == total_from_file`, and the accounting buckets sum to `total`.
  - Any case deferred to Sentinel is justified per ID as genuinely real-environment-dependent; blanket deferral is not allowed.
  - Playwright browser execution is not claimed as completed by Auditron; Sentinel remains the owner of runtime UI execution.
