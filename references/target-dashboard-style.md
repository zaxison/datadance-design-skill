# DataDance Target Dashboard Style

Use this reference when the user asks for DataDance page creation or visual refactoring and no more specific visual direction is provided.

The target direction is a classic B2B SaaS data dashboard: restrained, calm, data-dense, and production-ready. It should feel like an internal operations product rather than a marketing page or a highly expressive concept mock.

## Visual Traits

- Canvas: light warm gray or DataDance shell gray, never a saturated gradient.
- Surfaces: white cards/panels with subtle borders, 10px-12px radius for content cards, 4px-8px radius for controls.
- Header: compact sticky or fixed page header when useful; title around 24px-32px only when outside the fixed DataDance primary page header, with concise supporting text.
- Metrics: top or side metric cards with strong tabular numbers, small muted labels, and clear unit text.
- Filters: either a compact top filter row or a left filter panel. Filter options can use compact pill buttons when the information architecture benefits from scan-first filtering.
- Content: responsive card grid or compact table. Cards should expose title, metadata, key metrics, tags, status, owner/contact, and the main action without decorative clutter.
- Shadows: subtle hover lift only, such as `0 12px 24px -8px rgba(0,0,0,0.06)`.
- Typography: system sans for most UI. A restrained serif title may be used only for standalone content pages when it does not conflict with the fixed DataDance header pattern.
- Color: keep the fixed DataDance shell/sidebar/components on DataDance tokens. Page-specific accents may be used sparingly for domain emphasis, but do not override Yuanli component states or sidebar colors.

## Structure Patterns

For dashboard-like pages, prefer one of these:

- Header metrics + filter sidebar + responsive card grid.
- Header + compact toolbar/filter row + table with summary cards.
- Header + tabs + filter row + split content/detail panel.

Do not use:

- Oversized hero sections.
- Decorative illustration-first layouts.
- One-off gradients, bokeh, or ornamental shapes.
- Large marketing cards that hide operational data.
- Generic admin dashboard templates that replace the DataDance shell/sidebar.

## Interaction Expectations

- Search and filters update result counts immediately.
- Sorting and view switches preserve the current filter state.
- Card/list rows open detail drawer or route to detail page without losing context.
- Empty states offer a clear reset action.
- Hover/focus/selected/disabled states are implemented for every interactive control.
