# Test Report — About Us Racing Page

Status: **PASS**

Run: `2026-09-02T10-39Z-about-us-racing-page`  
Agent: `auditron`

## Build Validation Gate

| Item | Result |
|---|---|
| Command | `mvn -q clean install -PautoInstallSinglePackage` |
| Exit code | `0` |
| Result | `BUILD_SUCCESS` |
| Maven invocations used | `1 / 2` |
| Deployable `all` package | `all/target/copilot-test.all-1.0.0-SNAPSHOT.zip` |
| `all` package size | `2,933,424` bytes |
| Unit test summary from Surefire | `Tests run: 5, Failures: 0, Errors: 0, Skipped: 0` |
| Local SDK author probe | Authenticated render at `http://localhost:4506/content/Copilot-test/us/en/about-us.html?wcmmode=disabled` returned `200`, all required IDs, authored section content, header, footer, and a single `About Us` H1 |
| Local SDK publish probe | Not revalidated in this refresh; no second Maven invocation was required |

## Test layers

| Layer | Result |
|---|---|
| Unit | PASS — 5 passed, 0 failed, 0 skipped (ran inside the `install` phase) |
| Integration | NOT RUN — no changed Java or `it.tests` scope warranted the second Maven invocation |
| Playwright UI | NOT RUN by Auditron — owned by Sentinel |

functional test cases: 10 total — 10 auditron_executed, 0 deferred_to_sentinel, 0 blocked

## Functional test case attribution

Auditron discharged all 10 functional cases in this refresh using authored source inspection plus the authenticated local runtime probe. Sentinel still owns post-deploy browser execution, but no pre-release functional case remains deferred.

| ID | Bucket | Result | Evidence |
|---|---|---|---|
| TC-001 | auditron_executed | PASS | `ui.content/src/main/content/jcr_root/content/Copilot-test/us/en/about-us/.content.xml` sets `cq:template="/conf/Copilot-test/settings/wcm/templates/page-content"`, and the authenticated local page render returned HTTP `200`. |
| TC-002 | auditron_executed | PASS | The authenticated local HTML probe returned `HAS_HEADER=True` and `HAS_FOOTER=True`. |
| TC-003 | auditron_executed | PASS | The authenticated local HTML probe returned `H1_COUNT=1` and `H1_ABOUT_US=True`. |
| TC-004 | auditron_executed | PASS | `ui.content/src/main/content/META-INF/vault/filter.xml` includes `/content/dam/Copilot-test/about-us`; the seeded DAM assets remain present in the changed-file inventory. |
| TC-005 | auditron_executed | PASS | `ui.content/src/main/content/jcr_root/content/Copilot-test/us/en/about-us/.content.xml` maps the hero and editorial sections to the expected DAM asset paths carried in `handoffs/composer.yaml`. |
| TC-006 | auditron_executed | PASS | The authenticated local HTML probe showed ascending marker positions: `about-us-hero` at `8611`, then `section-we-stop` at `11490`, confirming the hero renders before the editorial sections. |
| TC-007 | auditron_executed | PASS | The authenticated local HTML probe showed ascending marker positions for `section-we-stop` (`11490`), `section-why-we-race` (`15343`), `section-apr` (`19145`), `section-oreca` (`23220`), `section-globe` (`27280`), and `section-win-one` (`31078`), matching the approved narrative order. |
| TC-008 | auditron_executed | PASS | `section-win-one` is authored as copy-only in `ui.content/.../about-us/.content.xml`, `ui.frontend/src/main/webpack/site/styles/about-us-page.scss` provides a dedicated `#section-win-one` layout block, and the authenticated runtime fragment returned `WIN_ONE_HAS_IMG=False`, `WIN_ONE_HAS_TITLE=True`, and `WIN_ONE_HAS_COPY=True`. |
| TC-009 | auditron_executed | PASS | The dark theme remains fully scoped under `#about-us-page` in `ui.frontend/src/main/webpack/site/styles/about-us-page.scss`, and the authenticated local render now exposes `id="about-us-page"` plus all required section IDs, making the scoped styling contract valid at runtime. |
| TC-010 | auditron_executed | PASS | The mobile override selectors remain nested under `#about-us-page` in `ui.frontend/src/main/webpack/site/styles/about-us-page.scss`, and the authenticated local render now exposes `id="about-us-page"` plus the editorial section IDs those overrides target. |

## Coverage / configuration notes

- No `jacoco-maven-plugin` configuration was found in the project `pom.xml`.
- No new Java test source was authored in this dispatch because the approved scope was frontend styling, UI-test harness migration, and content seeding only.
- No silent scope narrowing: browser-executed Playwright remained out of scope for Auditron, but no functional test case attribution was omitted.

## Gate decision

**PASS** — the Maven build remains green, the local runtime state now matches the authored selector contract, and the pre-release functional gate passes.
