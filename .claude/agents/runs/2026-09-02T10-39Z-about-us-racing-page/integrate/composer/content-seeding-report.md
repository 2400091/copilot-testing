# Composer Content Seeding Report — About Us Racing Page

Run: `2026-09-02T10-39Z-about-us-racing-page`

## Dispatch purpose

This is a remediation verification pass for the Composer-owned authored-content side of Auditron's failed selector contract. The repository moved away from assumed wrapper classes and now uses explicit authored HTML IDs on the seeded About Us page structure.

## Verification outcome

- **Pass for Composer-owned source.**
- No content-tree or package-filter correction was required in Composer-owned files.
- The required refresh in this pass was the run-artifact/handoff description so Auditron inherits the explicit-ID runtime contract instead of the superseded wrapper-class assumption.

## Verified runtime hook contract

The About Us page source at `ui.content/src/main/content/jcr_root/content/Copilot-test/us/en/about-us/.content.xml` now authors explicit `id` properties on the container nodes that define the page-scoped structure:

- `about-us-page`
- `about-us-hero`
- `section-we-stop`
- `section-why-we-race`
- `section-apr`
- `section-oreca`
- `section-globe`
- `section-win-one`

These IDs are authored on instances of `Copilot-test/components/container`, whose proxy supertype is `core/wcm/components/container/v1/container`. That makes the remediation align to a runtime-supported hook contract instead of relying on non-rendered wrapper classes.

Blockwright-owned selector consumers already point at these IDs and were not edited in this pass:

- `ui.frontend/src/main/webpack/site/styles/about-us-page.scss`
- `ui.tests/test-module/tests/helpers/aboutUs.js`
- `ui.tests/test-module/tests/ui-001-page-structure.spec.js`
- `ui.tests/test-module/tests/ui-002-desktop-alternating-layout.spec.js`
- `ui.tests/test-module/tests/ui-003-mobile-stack.spec.js`
- `ui.tests/test-module/tests/ui-004-dam-images.spec.js`
- `ui.tests/test-module/tests/ui-005-scoped-theme.spec.js`

## Approved composition still preserved

- Template remains `/conf/Copilot-test/settings/wcm/templates/page-content`
- Page component remains `Copilot-test/components/page`
- Approved existing proxies only:
  - `Copilot-test/components/container`
  - `Copilot-test/components/image`
  - `Copilot-test/components/teaser`
  - `Copilot-test/components/title`
  - `Copilot-test/components/text`
- No headless, Content Fragment, GraphQL, Java, dialog, or stylesheet work was introduced by Composer

## Section order and heading fidelity

Approved authored order remains:

1. `about-us-hero`
2. `section-we-stop`
3. `section-why-we-race`
4. `section-apr`
5. `section-oreca`
6. `section-globe`
7. `section-win-one`

Verified verbatim headings from `design/source-content-inventory.md`:

- `About Us`
- `We Stop Breaches`
- `Why We Race`
- `CrowdStrike Racing by APR`
- `No. 4 CrowdStrike Oreca 07`
- `Protection Around the Globe`
- `We Win as One`

Derived copy remains limited to section body text and accessibility-oriented alt text, which is consistent with the design inventory's fidelity notes.

## DAM/package verification

Verified DAM references remain inside `/content/dam/Copilot-test/about-us` and still align to the approved inventory:

| Section / use | DAM asset |
|---|---|
| Hero | `/content/dam/Copilot-test/about-us/D_ABOUTUS_Hero_Interior.jpg` |
| We Stop Breaches | `/content/dam/Copilot-test/about-us/we-stop-breaches.jpg` |
| Why We Race | `/content/dam/Copilot-test/about-us/why-we-race.jpg` |
| CrowdStrike Racing by APR | `/content/dam/Copilot-test/about-us/IMSAROLEX26_01_23_26_111222_FH_8052.jpg` |
| No. 4 CrowdStrike Oreca 07 | `/content/dam/Copilot-test/about-us/IMSA_D24_26_01_25_001036_JP35529.jpg` |
| Protection Around the Globe | `/content/dam/Copilot-test/about-us/Falcon-2.jpg` |

Package coverage remains present in `ui.content/src/main/content/META-INF/vault/filter.xml` for:

- `/content/Copilot-test`
- `/content/dam/Copilot-test/about-us`

## Runtime note for the next Auditron pass

An authenticated local probe to `http://localhost:4506/content/Copilot-test/us/en/about-us.html` returned HTTP 200, but the currently running local author instance still appears to serve pre-remediation markup rather than the newly authored ID-based source. Because this dispatch forbids Maven and is a repository-state verification pass, Composer did not attempt redeploy work here.

**Implication:** treat the checked-in source and refreshed handoff as the authoritative remediation contract for Composer scope, and let Auditron's rerun rebuild/redeploy before making the final runtime selector verdict.

## Smoke-render request

After the next rebuild/redeploy, validate:

1. HTTP 200 for `/content/Copilot-test/us/en/about-us.html`
2. Single H1 with `About Us`
3. Rendered ID hooks:
   - `#about-us-page`
   - `#about-us-hero`
   - `#section-we-stop`
   - `#section-why-we-race`
   - `#section-apr`
   - `#section-oreca`
   - `#section-globe`
   - `#section-win-one`
4. DAM-backed hero and teaser images resolve from `/content/dam/Copilot-test/about-us`
5. Closing section renders `We Win as One` with title + text and no image-slot breakage
