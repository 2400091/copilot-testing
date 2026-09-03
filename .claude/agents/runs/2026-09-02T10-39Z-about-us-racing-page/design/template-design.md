# Template Design — About Us Racing Page

Run: `2026-09-02T10-39Z-about-us-racing-page`

## Template decision

Reuse `/conf/Copilot-test/settings/wcm/templates/page-content`.

## Structural plan

The template already provides:

1. Header experience fragment
2. Title component region
3. Editable content container
4. Footer experience fragment

The new page will use:

- Template title component as the single H1: `About Us`
- Editable container for:
  1. one named hero container with a Core Image
  2. five named feature containers using Core Teaser instances
  3. one named closing container using Core Title + Text

## Rationale

- Preserves existing site chrome and authoring conventions.
- Avoids global template churn for a single-page marketing build.
- Keeps implementation scoped to page content plus page-specific CSS.
- Maximizes reuse of existing Core Component proxies.
