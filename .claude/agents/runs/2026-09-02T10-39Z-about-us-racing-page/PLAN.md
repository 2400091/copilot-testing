# ADLC Run Plan

- run_id: `2026-09-02T10-39Z-about-us-racing-page`
- feature_slug: `about-us-racing-page`
- intake: `Create a headful AEM About Us page using https://crowdstrikeracing.com/about-us/ as the visual/content basis and C:\Users\2400091\Downloads\Picflow Images Sep 2 as the image source.`
- workspace: `C:\aemproject\aem-sites-adlc-2.0\copilot-test`

## Confirmed intake constraints

- Traditional headful page implementation only; no headless delivery pattern.
- Existing editable template available: `/conf/Copilot-test/settings/wcm/templates/page-content`.
- Existing site content root available: `/content/Copilot-test/us/en`.
- Existing page component available: `Copilot-test/components/page`.
- Existing proxy components available for common Core Components such as container, title, text, image, and teaser.
- Reference URL HTML could not be fetched directly from this environment; available page summary indicates these sections:
  - About Us / We Stop Breaches
  - Why We Race
  - CrowdStrike Racing by APR
  - No. 4 CrowdStrike Oreca 07
  - Protection Around the Globe
  - We Win as One
- Local source asset folder confirmed:
  - `D_ABOUTUS_Hero_Interior.jpg`
  - `Falcon-2.jpg`
  - `IMSAROLEX26_01_23_26_111222_FH_8052.jpg`
  - `IMSA_D24_26_01_25_001036_JP35529.jpg`
  - `we-stop-breaches.jpg`
  - `why-we-race.jpg`

## Initial stage routing

| Seq | Stage | Specialist | Mode | Status | Notes |
|---|---|---|---|---|---|
| 01 | Plan | `strategist` | required | dispatching | Mandatory first stage. Produce requirements, architecture, work breakdown, and reference deconstruction. |
| 02 | Architecture checkpoint | human | required | pending | Await approval after Strategist outputs. |
| 03 | Design | `designforge` | required | pending | Produce implementation-ready component, dialog, template, authoring, functional, and UI-test specs. |
| 04 | Dialog-spec checkpoint | human | required | pending | Await approval after Designforge outputs. |
| 05 | Implement | `blockwright` | planned | pending | Expected owner for headful page buildout, component wiring, template usage, and Playwright harness/spec work if needed. |
| 06 | Integrate / content orchestration | `composer` | planned | pending | Expected owner for DAM asset seeding and authored sample page/content creation. |
| 07 | Implement | `configsmith` | conditional | pending | Dispatch only if Strategist/Designforge surface security, repoinit, dispatcher, CDN, or service-user needs. |
| 08 | Integrate | `bridgesmith` | conditional | pending | Dispatch only if Strategist surfaces an external system boundary. |
| 09 | Test | `auditron` | required | pending | Owns the 2-`mvn` build/test budget and quality gate. |
| 10 | Release | `pilot` | required | pending | Raise PR after Auditron passes, then suspend for Lead actions. |
| 11 | Real-environment validation approval | human Lead | required | pending | Resume only after PR merge, Adobe Git sync, deploy, and recorded approval block. |
| 12 | Test (post-deploy) | `sentinel` | required | pending | Final real-environment UI/NFR validation stage. |

## Routing assumptions to validate in Plan stage

- This appears to be a server-rendered marketing/content page with no explicit external integration.
- Reuse of existing Core Component proxies is preferred over net-new custom components unless the design cannot be expressed cleanly with existing proxies and style/policy configuration.
- The page likely needs authored content plus local DAM asset ingestion, making `composer` a probable downstream participant.
- Because the request is reference-driven, `plan/reference-deconstruction.md` is mandatory before Designforge can run.

## Run artifacts initialized

- `PLAN.md`
- `DECISIONS.md`
- `dispatch/01-strategist.md`

