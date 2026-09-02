# Functional Test Cases — About Us Racing Page

Run: `2026-09-02T10-39Z-about-us-racing-page`

| ID | Requirement | Test case |
|---|---|---|
| TC-001 | FR-001 | The page exists at `/content/Copilot-test/us/en/about-us` and uses the page-content template. |
| TC-002 | FR-001 | The page renders the existing header and footer experience fragments. |
| TC-003 | FR-001 | The page H1 is `About Us` and appears only once. |
| TC-004 | FR-002 | All provided local assets are packaged under `/content/dam/Copilot-test/about-us`. |
| TC-005 | FR-002 | Each authored section references the expected DAM asset. |
| TC-006 | FR-003 | The hero section renders before the editorial sections. |
| TC-007 | FR-003 | The sections appear in the approved narrative order. |
| TC-008 | FR-003 | The closing `We Win as One` section renders without layout breakage when image is omitted. |
| TC-009 | FR-004 | The page applies dark scoped styling without altering unrelated pages. |
| TC-010 | NFR-001 | The layout stacks cleanly on mobile-sized widths. |
