# Coverage Ledger — About Us Racing Page

Status: **PASS**

Run: `2026-09-02T10-39Z-about-us-racing-page`

## Functional test case census

- Source file: `design/functional-test-cases.md`
- Census method: manual enumeration of unique `TC-*` IDs from the design artifact
- `total_from_file`: **10**
- `total`: **10**
- `auditron_executed`: **10**
- `deferred_to_sentinel`: **0**
- `blocked`: **0**

## Attribution table

| ID | Bucket | Result | Evidence |
|---|---|---|---|
| TC-001 | auditron_executed | PASS | The page source sets `cq:template="/conf/Copilot-test/settings/wcm/templates/page-content"` and the authenticated local page render returned HTTP `200`. |
| TC-002 | auditron_executed | PASS | The authenticated local HTML probe returned header and footer tags. |
| TC-003 | auditron_executed | PASS | The authenticated local HTML probe returned one `<h1>` with text `About Us`. |
| TC-004 | auditron_executed | PASS | DAM subtree filter coverage remains present and the six authored assets remain on disk. |
| TC-005 | auditron_executed | PASS | Each authored hero/editorial section points to the expected DAM asset path. |
| TC-006 | auditron_executed | PASS | The authenticated local HTML probe showed `about-us-hero` before the editorial section IDs. |
| TC-007 | auditron_executed | PASS | The authenticated local HTML probe showed the approved narrative order through `section-win-one`. |
| TC-008 | auditron_executed | PASS | The closing section renders as copy-only content: runtime fragment returned no image and did return the expected title and body copy. |
| TC-009 | auditron_executed | PASS | The stylesheet scopes the dark theme under `#about-us-page`, and runtime HTML now exposes `id="about-us-page"` plus the related section IDs. |
| TC-010 | auditron_executed | PASS | The mobile override selectors target IDs now present in the authenticated local runtime HTML. |

## Code coverage note

- JaCoCo is not configured in the project POMs inspected during this dispatch.
- Unit tests executed inside the Maven build still passed: **5 passed, 0 failed, 0 skipped**.
- Functional test-case attribution is complete for all 10 IDs even without a JaCoCo report.
