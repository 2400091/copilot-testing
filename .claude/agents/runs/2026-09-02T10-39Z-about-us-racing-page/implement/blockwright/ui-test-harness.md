# Blockwright UI Test Harness — About Us Racing Page Remediation Verification

Run: `2026-09-02T10-39Z-about-us-racing-page`

## Remediation scope

- Purpose of this pass: verify the Auditron `AQ-001` remediation, not scaffold a net-new harness.
- Verified runtime selector contract: page-scoped styling and Playwright locators now target **explicit HTML IDs** that render at runtime.
- Verified selector basis:
  - `#about-us-page`
  - `#about-us-hero`
  - `#section-we-stop`
  - `#section-why-we-race`
  - `#section-apr`
  - `#section-oreca`
  - `#section-globe`
  - `#section-win-one`
- Wrapper-class assumption removed from the Blockwright-owned SCSS and Playwright surfaces; no `.about-us-page` / `.section-*` class contract remains in those owned files.

## Harness state on entry

- Detected existing Playwright harness: **playwright-present**
- Evidence:
  - `ui.tests/test-module/playwright.config.js` present
  - `ui.tests/test-module/package.json` contains `@playwright/test` `1.49.1`
  - `ui.tests/test-module/node_modules` already present for static verification
- `npm install` was **not rerun** on this remediation pass because:
  - no `package.json` or `package-lock.json` change was required for the selector remediation
  - local dependencies were already installed

## Runtime dependency confirmation

- The selector contract is only valid at runtime when Composer-owned authored content emits the same explicit IDs in page content.
- Verified authored dependency in `ui.content/.../about-us/.content.xml`:
  - page wrapper node `about-us-page` carries `id="about-us-page"`
  - section wrapper nodes carry the matching `id` values for hero and each content section
- This pass did **not** edit Composer-owned seeded content; it verified the dependency only.

## Playwright harness retained

- Docker image: `mcr.microsoft.com/playwright:v1.49.1-jammy`
- Playwright package: `@playwright/test` `1.49.1`
- Accessibility package: `@axe-core/playwright`
- Configured Playwright projects:
  - `publish-chromium`
  - `publish-firefox`
  - `publish-webkit`
  - `publish-mobile-safari`
  - `author-chromium`
- Author login flow: `global-setup.js` posts to Granite `j_security_check` and stores `.auth/state.json`

## Tier parameterization

- Publish base URL env var: `AEM_PUBLISH_URL`
- Author base URL env var: `AEM_AUTHOR_URL`
- Author credentials env vars:
  - `AEM_AUTHOR_USERNAME`
  - `AEM_AUTHOR_PASSWORD`
- Reports env var: `REPORTS_PATH`
- No deployment hostnames or credentials are hardcoded into the specs.
- Author-side requests append `?wcmmode=disabled` so editor chrome does not affect assertions.

## Verified file contract

- Page-scoped SCSS:
  - `ui.frontend/src/main/webpack/site/styles/about-us-page.scss`
- Shared Playwright helper:
  - `ui.tests/test-module/tests/helpers/aboutUs.js`
- Scenario specs:
  - `ui.tests/test-module/tests/ui-001-page-structure.spec.js`
  - `ui.tests/test-module/tests/ui-002-desktop-alternating-layout.spec.js`
  - `ui.tests/test-module/tests/ui-003-mobile-stack.spec.js`
  - `ui.tests/test-module/tests/ui-004-dam-images.spec.js`
  - `ui.tests/test-module/tests/ui-005-scoped-theme.spec.js`

## Scenario coverage

| Scenario ID | Spec file | Verified selector basis |
|---|---|---|
| UI-001 | `ui.tests/test-module/tests/ui-001-page-structure.spec.js` | `#about-us-page`, ordered section IDs |
| UI-002 | `ui.tests/test-module/tests/ui-002-desktop-alternating-layout.spec.js` | `#section-why-we-race`, `#section-oreca` |
| UI-003 | `ui.tests/test-module/tests/ui-003-mobile-stack.spec.js` | `#about-us-page` and section IDs |
| UI-004 | `ui.tests/test-module/tests/ui-004-dam-images.spec.js` | `#about-us-page img` plus section IDs |
| UI-005 | `ui.tests/test-module/tests/ui-005-scoped-theme.spec.js` | `#section-win-one`, `#about-us-page` |

Shared assertions remain in `ui.tests/test-module/tests/helpers/aboutUs.js`.

## Static validation on this remediation pass

| Command | Result |
|---|---|
| `npx playwright test --list` | exit `0`; discovered `5` spec files / `25` tests across configured projects |
| `npx eslint .` | exit `0` |

Additional local evidence:

- `node_modules` present before validation: `true`
- No browser execution was performed.
- No Maven invocation was performed.

## Cypress state

- `cypress_fully_removed: true`
- No Cypress config files were found under `ui.tests/`.
- Remaining `cypress` strings are limited to legacy naming in `ui.tests/pom.xml`, which remains intentionally unmodified per dispatch constraints and does not reintroduce a Cypress runtime path.

## Notes for downstream stages

- Auditron should evaluate this page-scoped frontend/UI-test surface against the **explicit HTML ID** runtime contract, not the superseded wrapper-class assumption.
- Sentinel remains the execution owner for live-environment browser runs.
- `pom.xml` and `assembly-ui-test-docker-context.xml` remain unchanged on this remediation pass.
