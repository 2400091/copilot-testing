# Technical Specifications — About Us Racing Page

Run: `2026-09-02T10-39Z-about-us-racing-page`

## 1. Architectural decision

**Pattern:** headful AEM Sites page using the existing `page-content` editable template and current Core Component proxy layer.

**Why this is the right fit**

- The request explicitly requires a traditional page implementation.
- The current project already has the required page, container, title, text, image, and teaser proxies.
- The visual requirement is primarily editorial/layout-driven, which can be handled with authored page content plus page-scoped SCSS.

## 2. Planned repository impact

| Module | Planned change |
|---|---|
| `ui.apps` | Add a page-specific presentation component or template-safe section component if needed; keep logic minimal and HTL-first. |
| `ui.content` | Add DAM assets and author the new `/content/Copilot-test/us/en/about-us` page content. |
| `ui.frontend` | Add page-scoped SCSS for the dark motorsport presentation. |
| `core` | No Java work expected unless implementation reveals a genuine rendering gap. |

## 3. Template strategy

- Reuse `/conf/Copilot-test/settings/wcm/templates/page-content`.
- Reuse the page title component already included by the template for the H1.
- Reuse the existing header/footer experience fragments already defined in the template structure.

## 4. Content strategy

**Page path:** `/content/Copilot-test/us/en/about-us`  
**DAM path:** `/content/dam/Copilot-test/about-us`

**Recommended section order**

1. Hero image
2. We Stop Breaches
3. Why We Race
4. CrowdStrike Racing by APR
5. No. 4 CrowdStrike Oreca 07
6. Protection Around the Globe
7. We Win as One

## 5. Reuse-versus-new recommendation

- Prefer existing proxy components for title, text, image, teaser, and container.
- If the composition becomes too brittle with only raw authored proxy nodes, introduce **one** page-specific, layout-oriented HTL component for repeatable feature sections rather than multiple bespoke components.
- Do not introduce an external integration, Sling Model, OSGi service, or dispatcher/config work unless a later stage proves it necessary.

## 6. Specialist routing

| Stage | Specialist | Reason |
|---|---|---|
| Design | `designforge` | Translate the reference into section/component/dialog/template/content specs and a source-content inventory. |
| Implement | `blockwright` | Build the headful page structure and any minimal page-specific component/scss required. |
| Integrate/content | `composer` | Seed DAM assets and author demo-ready page content. |
| Test | `auditron` | Quality review and build/test gate. |

`configsmith` and `bridgesmith` are not expected for this scope unless downstream design uncovers config or external-system needs.

## 7. Risks and mitigations

1. **Reference fidelity risk:** live copy could not be directly fetched.  
   **Mitigation:** keep headings/structure aligned to confirmed source summary and let Designforge produce a content inventory for final implementation.

2. **Visual-overreach risk:** global styles could be affected if styling is not scoped.  
   **Mitigation:** keep selectors page-scoped and avoid changes to global navigation/footer treatments.

3. **Asset packaging risk:** DAM assets must be structured in repository content, not left as external file references.  
   **Mitigation:** route explicit DAM seeding to Composer.

## 8. Architecture checkpoint summary

- **Chosen pattern:** headful AEM Sites page, server-rendered
- **Component plan:** reuse existing template, page chrome, and Core Component proxies; allow one minimal page-specific layout component only if needed
- **Integration touchpoints:** none expected
- **NFR risks:** responsive fidelity, style scoping, and asset packaging
