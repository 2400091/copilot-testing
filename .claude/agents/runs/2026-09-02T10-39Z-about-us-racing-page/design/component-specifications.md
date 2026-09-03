# Component Specifications — About Us Racing Page

Run: `2026-09-02T10-39Z-about-us-racing-page`

## Reused components

| Component | Resource type | Purpose |
|---|---|---|
| Page | `Copilot-test/components/page` | Existing page shell |
| Container | `Copilot-test/components/container` | Structural grouping |
| Title | `Copilot-test/components/title` | Template H1 and optional section titles |
| Text | `Copilot-test/components/text` | Rich copy where freeform HTML is needed |
| Image | `Copilot-test/components/image` | Hero and support imagery |
| Teaser | `Copilot-test/components/teaser` | Combined image + heading + copy feature sections |

## Layout strategy

The full page can be composed from existing proxies only:

- **Hero:** one `image` component inside a named container wrapper
- **Editorial features:** multiple `teaser` components with authored title, rich description, and file reference
- **Closing message:** one `title` + `text` pair inside a named container wrapper

## Wrapper-class technique

The archetype output shows that repository node names become author-side wrapper classes in the rendered grid. That allows page-scoped CSS like:

- `.about-us-page`
- `.about-us-hero`
- `.section-we-stop`
- `.section-why-we-race`
- `.section-apr`
- `.section-oreca`
- `.section-globe`
- `.section-win-one`

Using named containers and teaser node names gives enough control to match the required layout without introducing a custom component.

## No custom backend required

- No new HTL component is required.
- No Sling Model or Java code is expected for this scope.
