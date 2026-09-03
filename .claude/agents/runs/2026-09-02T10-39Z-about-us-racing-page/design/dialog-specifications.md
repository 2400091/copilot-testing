# Dialog Specifications — About Us Racing Page

Run: `2026-09-02T10-39Z-about-us-racing-page`

## Reused dialogs

### Image dialog

Used for the hero image.

| Field | Property | Notes |
|---|---|---|
| Asset reference | `fileReference` | Required |
| Alt text | `alt` | Required |

### Teaser dialog

Used for each editorial feature section.

| Field | Property | Notes |
|---|---|---|
| Title | `jcr:title` | Required |
| Description | `jcr:description` | Required, rich text enabled |
| Asset reference | `fileReference` | Required |
| Alt text | `alt` | Required |
| Pretitle | `pretitle` | Optional short label |
| Actions enabled | `actionsEnabled` | Disabled for this page unless a later revision needs CTAs |

### Title dialog

Used only when a standalone content title is needed below the template H1.

### Text dialog

Used for the closing message and any freeform supporting copy.

## Layout control

- Layout alternation is handled by container/node naming plus scoped CSS, not a custom dialog.
- Hero treatment is handled by the hero wrapper container plus scoped CSS.
- The closing section uses container/title/text composition instead of a custom component.
