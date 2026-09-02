# Reference Deconstruction — About Us Racing Page

Run: `2026-09-02T10-39Z-about-us-racing-page`  
Reference URL: `https://crowdstrikeracing.com/about-us/`

Direct fetch of the live reference was blocked from this environment, so this deconstruction uses the confirmed page summary plus the provided local asset folder as the planning baseline for a headful AEM Sites page.

## Confirmed section structure

1. `About Us` / lead positioning
2. `We Stop Breaches`
3. `Why We Race`
4. `CrowdStrike Racing by APR`
5. `No. 4 CrowdStrike Oreca 07`
6. `Protection Around the Globe`
7. `We Win as One`

## Confirmed local asset inventory

Source folder: `C:\Users\2400091\Downloads\Picflow Images Sep 2`

| Asset | Dimensions | Recommended use |
|---|---:|---|
| `D_ABOUTUS_Hero_Interior.jpg` | 2048x744 | Hero banner |
| `we-stop-breaches.jpg` | 1024x683 | Mission section |
| `why-we-race.jpg` | 1024x683 | Racing rationale section |
| `IMSAROLEX26_01_23_26_111222_FH_8052.jpg` | 2048x1365 | APR partnership section |
| `IMSA_D24_26_01_25_001036_JP35529.jpg` | 2048x1365 | Oreca 07 feature section |
| `Falcon-2.jpg` | 408x320 | Accent / support image only |

## Page architecture implications

- Delivery mode is **headful**: a traditional server-rendered AEM Sites page.
- Existing page chrome should be reused through the current header/footer experience fragments already wired into the page template.
- Existing Core Component proxy components should be preferred over net-new custom business logic.
- The asset folder is sufficient to support a marketing-style narrative page with a hero plus alternating image/text content sections.

## Layout recommendation

- Keep the existing `page-content` template.
- Author a new page below `/content/Copilot-test/us/en/about-us`.
- Use the template title component as the semantic H1 (`About Us`).
- Build the body as a hero image followed by a sequence of editorial sections matching the confirmed headings above.
- Add page-specific styling in `ui.frontend` to establish the dark motorsport visual treatment without changing global site chrome.
