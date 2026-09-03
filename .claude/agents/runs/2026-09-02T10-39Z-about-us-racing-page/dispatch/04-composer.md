agent: composer
stage: Integrate
input-packet:
  ADLC run id: `2026-09-02T10-39Z-about-us-racing-page`

  You are the Integrate-stage specialist for this run on the content-seeding track only. Seed the About Us page content and DAM assets for the approved reuse-first implementation. Write the repository content changes and your run artifacts before you return.

  Workspace root:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

  Project identifiers:
  - `project: Copilot-test`
  - `package: com.copilottest.aem`
  - `group: CopilotTest`

  Approved upstream checkpoint and content envelope:
  - The mandatory dialog-spec confirmation is approved and recorded in `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`.
  - Approved implementation direction is strict reuse-first.
  - Use existing `Copilot-test/components/container`, `image`, `teaser`, `title`, and `text` proxies only.
  - No headless delivery, no Content Fragments, and no GraphQL work are in scope.
  - Reuse `/conf/Copilot-test/settings/wcm/templates/page-content`.
  - Page path is `/content/Copilot-test/us/en/about-us`.
  - DAM path is `/content/dam/Copilot-test/about-us`.
  - Local fixture source is `C:\Users\2400091\Downloads\Picflow Images Sep 2`.

  Mandatory upstream inputs:
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\PLAN.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\DECISIONS.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\strategist.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\designforge.yaml`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\component-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\dialog-specifications.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\template-design.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\authoring-guidelines.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\reference-assets.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\source-content-inventory.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\functional-test-cases.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\design\authoring-test-cases.md`

  Confirmed repository context:
  - Existing content roots are already present under `ui.content/src/main/content/jcr_root/content/Copilot-test/us/en/`.
  - The page-content template subtree already exists under `ui.content/src/main/content/jcr_root/conf/Copilot-test/settings/wcm/templates/page-content/`.
  - No existing `/content/dam/Copilot-test/about-us` fixture subtree is currently present in the repository.

  Content-seeding responsibilities:
  1. Run the content-seeding track only. Do not author CF Models, persisted queries, endpoints, or Sling Models.
  2. Seed the page at `/content/Copilot-test/us/en/about-us` using the existing `page-content` template.
  3. Seed the DAM assets under `/content/dam/Copilot-test/about-us` from the provided local folder and follow the approved asset mapping:
     - `D_ABOUTUS_Hero_Interior.jpg` -> Hero
     - `we-stop-breaches.jpg` -> We Stop Breaches
     - `why-we-race.jpg` -> Why We Race
     - `IMSAROLEX26_01_23_26_111222_FH_8052.jpg` -> CrowdStrike Racing by APR
     - `IMSA_D24_26_01_25_001036_JP35529.jpg` -> No. 4 CrowdStrike Oreca 07
     - `Falcon-2.jpg` -> Protection Around the Globe
  4. Author the page content in this exact section order using the approved node names/wrappers:
     - `about-us-page`
     - `about-us-hero`
     - `section-we-stop`
     - `section-why-we-race`
     - `section-apr`
     - `section-oreca`
     - `section-globe`
     - `section-win-one`
  5. Use the source content inventory as the content authority:
     - keep the page title and section headings verbatim
     - only derive concise supporting body copy where the inventory explicitly marks copy as `derived`
     - do not invent additional sections, CTAs, or alternate taxonomy
  6. Compose the page with existing proxies only:
     - hero container with one image component
     - five teaser sections for the editorial body
     - closing container with one title plus one text component for `We Win as One`
  7. Verify every `cq:template`, `sling:resourceType`, and DAM reference resolves inside the seeded repository content.
  8. Write `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\integrate\composer\content-seeding-report.md` and `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\composer.yaml` before returning.

  Normalization note:
  - If any lower-priority design artifact still mentions a custom `aboutsection` component or reverse/hero/accent toggles, treat the approved reuse-first decision in `DECISIONS.md` plus `component-specifications.md`, `dialog-specifications.md`, and `authoring-guidelines.md` as authoritative. Do NOT seed content for `aboutsection`.

  Constraints:
  - Do not invoke Maven.
  - Do not create new components, dialogs, Java code, or stylesheet logic.
  - Do not introduce headless or GraphQL assets.
  - If any required local fixture is unavailable, generate the fixture manifest and record the gap instead of fabricating an asset.

  Required outputs:
  - Seeded page content under `ui.content/src/main/content/jcr_root/content/Copilot-test/us/en/about-us/`.
  - Seeded DAM asset content under `ui.content/src/main/content/jcr_root/content/dam/Copilot-test/about-us/` where local fixtures are available.
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\integrate\composer\content-seeding-report.md`
  - `C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\composer.yaml`

  Parent-materialization fallback is pre-authorized:
  - If write access to `.claude/agents/runs/...` is denied for any run artifact, write the intended content to a clearly named repo-root staging file and print:
    `PARENT_MATERIALIZATION_REQUIRED: source=<repo-root-file> target=<intended-runs-path>`
  - Still complete the content-seeding work and include all artifact payloads via that fallback if needed.
expected-handoff: C:\aemproject\aem-sites-adlc-2.0\copilot-test\.claude\agents\runs\2026-09-02T10-39Z-about-us-racing-page\handoffs\composer.yaml
gate-criteria:
  - `handoffs/composer.yaml` reports the content-seeding track and no headless track for this run.
  - The page `/content/Copilot-test/us/en/about-us` is authored against the existing `page-content` template and uses only the approved existing proxies.
  - DAM fixtures are seeded under `/content/dam/Copilot-test/about-us` for every available local source asset, with any missing fixture surfaced via the manifest rather than silently skipped.
  - The authored section order and wrapper/node names match `design/authoring-guidelines.md`.
  - Verbatim headings from `design/source-content-inventory.md` are preserved, and any non-verbatim body copy is limited to fields the inventory marks `derived`.
  - Every component `sling:resourceType`, every `cq:template`, and every DAM asset reference resolves inside the seeded tree.
  - `integrate/composer/content-seeding-report.md` exists and includes the smoke-render request handed to `pilot`.
  - No Maven invocation occurs in this stage.
