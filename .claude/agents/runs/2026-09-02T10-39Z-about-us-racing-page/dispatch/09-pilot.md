agent: pilot
stage: Release
input-packet:
  ADLC run id: `2026-09-02T10-39Z-about-us-racing-page`

  You are being dispatched for the mandatory Release stage after Auditron refreshed the pre-release gate to PASS. Your job is to raise the release Pull Request from this run's feature branch to the repository default branch `master` in the current GitHub repo, then return `status: awaiting_lead_approval` and stop. Do not merge, deploy, poll, or wait for the Lead.

  Workspace root:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

  Project identifiers:
  - `project: Copilot-test`
  - `package: com.copilottest.aem`
  - `group: CopilotTest`

  Release-stage precondition now satisfied:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\auditron.yaml`
  - Auditron now reports `status: pass`.
  - The successful pre-release gate includes a successful `mvn -q clean install -PautoInstallSinglePackage` build/deploy.
  - The local build-validation runtime confirmation now shows the explicit About Us IDs and authored section content required by the page-scoped SCSS and Playwright selector contract.

  Run summary to reflect in the PR body:
  - Strategist and Designforge routed this as a headful AEM Sites About Us page on the existing `page-content` template with reuse of existing proxy components only.
  - Blockwright verified the final frontend/ui.tests contract is based on runtime-valid explicit HTML IDs (`about-us-page`, `about-us-hero`, `section-we-stop`, `section-why-we-race`, `section-apr`, `section-oreca`, `section-globe`, `section-win-one`) and that `ui.tests` is Playwright-based with scenarios `UI-001` through `UI-005` mapped.
  - Composer verified the seeded page at `/content/Copilot-test/us/en/about-us` remains on `/conf/Copilot-test/settings/wcm/templates/page-content`, preserves the approved section order, and resolves the six DAM assets under `/content/dam/Copilot-test/about-us`.
  - Auditron verified zero high/medium blocking findings, `BUILD_SUCCESS`, surefire pass (`Tests run: 5, Failures: 0, Errors: 0, Skipped: 0`), local package install, and functional test case coverage for `TC-001` through `TC-010`.
  - Sentinel has NOT run yet. The PR body must state explicitly that Playwright UI execution, performance, SEO, accessibility, observability, and any real-environment validation remain outstanding until after merge/deploy and a later Sentinel dispatch.

  Mandatory upstream inputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.aem-skills-config.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\AGENTS.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\pom.xml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\ADLC-SPEC.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\pilot.md`
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
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\test\auditron\changed_files.txt`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\functional-test-cases.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\ui-test-scenarios.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\integrate\composer\content-seeding-report.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\implement\blockwright\ui-test-harness.md`

  Pilot responsibilities for this dispatch:
  1. Verify the Release-stage precondition from `handoffs/auditron.yaml`: `status: pass` with the 3-signal build success.
  2. Confirm the working tree is clean and `HEAD` is the run's feature branch, not `master`. If uncommitted changes remain or `HEAD` is `master`, return `status: blocked` and state the blocker plainly.
  3. Push the feature branch to `origin`.
  4. Resolve the canonical GitHub `owner/repo` from the API rather than trusting a possibly stale `origin` URL.
  5. Write `deploy/pr-body.md` with a reviewer-facing summary that includes:
     - what changed in this run,
     - Auditron evidence,
     - the explicit note that Sentinel validation has not run yet,
     - the post-merge Lead checklist: merge PR, sync to Adobe Git, deploy via Cloud Manager, then resume the ADLC run with Lead approval plus BOTH Author and Publish URLs and their auth modes for Sentinel.
  6. Open the PR against `master` using `gh pr create` when available/authenticated, else the GitHub REST API path described in your contract. Use a compare URL only if both automated PR-creation paths are verifiably unavailable, and record the fallback reason explicitly.
  7. Write `deploy/pr-request.md` and overwrite `handoffs/pilot.yaml` with the PR URL/number, branch/base, tool used, build hash, and `status: awaiting_lead_approval`.
  8. Stop after opening or reusing the PR. Do not merge, deploy, or invoke Sentinel.

  Constraints:
  - Pilot is non-deferrable once Auditron is green.
  - The real deployment is out of scope and belongs to the human Lead.
  - Do not claim Sentinel-stage validation as completed.
  - Do not request or use the `aem-rde` skill unless the human explicitly asks for an RDE track; no RDE work is authorized in this dispatch.

  Required outputs before return:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\deploy\pr-body.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\deploy\pr-request.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\pilot.yaml`

  Parent-materialization fallback is pre-authorized:
  - If write access to `.claude/agents/runs/...` is denied for any run artifact, write the intended content to a clearly named repo-root staging file and print:
    `PARENT_MATERIALIZATION_REQUIRED: source=<repo-root-file> target=<intended-runs-path>`
  - Still complete the PR-raising work and include all artifact payloads via that fallback if needed.
expected-handoff: C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\pilot.yaml
gate-criteria:
  - `handoffs/auditron.yaml` reports `status: pass` with the Release-stage precondition satisfied.
  - The working tree is clean and `HEAD` is the feature branch, not `master`.
  - The branch is pushed to `origin`, `compare/<base>...<head>` reports commits ahead of `master`, and the canonical `owner/repo` is resolved via the GitHub API rather than inferred only from `origin`.
  - A PR targeting `master` is opened via `gh` or the GitHub REST API; a compare URL is acceptable only when both automated paths were verifiably unavailable and `pr_tool_fallback_reason` is recorded.
  - `deploy/pr-body.md` and `deploy/pr-request.md` exist and state clearly that Sentinel validation has not yet run and that the run now pauses for the Lead's manual merge, Adobe Git sync, Cloud Manager deploy, and later Sentinel resume.
  - `handoffs/pilot.yaml` exists, includes the PR URL/number plus branch/base/build metadata, and returns `status: awaiting_lead_approval`.
  - Pilot does not merge, deploy, poll, or invoke Sentinel.
