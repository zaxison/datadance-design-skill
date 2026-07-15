# DataDance Generation Checklist

Run this checklist before considering a generated or refactored page complete.

## Package

- The approved `@datadance/ui` release is installed from `github:zaxison/datadance-ui#v0.2.1`, or a newer release explicitly approved by the user.
- `scripts/verify-datadance-ui.mjs` passes from the target project root.
- Page imports package styles.
- Page uses the packaged `DataDanceShell`.
- DataDance sidebar is not a hand-written approximate static translation.
- Package installation or verification failure stops delivery instead of triggering an approximate fallback.

## Shell

- Outer background is `#EFF3F6`.
- Right work surface is white.
- Right work surface has `12px` border radius.
- Right work surface has `8px` top/right/bottom browser-edge gutters.
- There is no competing outer nav/sidebar.

## Sidebar

- Sidebar collapsed width is `72px`.
- Sidebar expanded width is `200px`.
- Collapsed logo/expand affordance expands sidebar.
- Expanded collapse affordance collapses sidebar.
- Parent menu accordion works.
- Only one parent submenu is open at a time unless explicitly required.
- Active route highlights correct item.
- User profile hover opens user menu.
- User menu remains usable while moving pointer from profile to popup.
- Menu icons render as recognizable icons, not black rectangles, empty squares, broken images, or solid blocks.
- Collapsed parent menu rows do not show submenu arrows.
- Expanded parent menu rows show arrows only when the item has children.
- Expanded top-right collapse button icon matches the current DataDance implementation or exact source icon.
- Sidebar visual states were checked, not only DOM dimensions:
  - collapsed
  - expanded
  - top-level hover
  - expanded submenu and active child
  - user profile hover menu

## Yuanli Components

- Buttons use `DDButton` or `DDIconButton`.
- Inputs use `DDInput`.
- Selects use `DDSelect`; no native browser select popup remains.
- Date picker uses `DDDatePicker`; no native browser date popup remains.
- Cascader uses `DDCascader`.
- Tree select uses `DDTreeSelect`.
- Switch uses `DDSwitch`.
- Tabs use `DDTabs`.
- Tables use `DDTable`.
- Tags/status labels use `DDTag`.
- Modals/drawers use `DDModal` / `DDDrawer`.
- Pagination uses `DDPagination`.
- Page headers and content groups use `DDPageHeader` / `DDCard` where applicable.

## New Environment

- Target is a supported React + Vite desktop project.
- Shell computed position is `x: 0`, `y: 0`.
- Sidebar computed width is `72px` collapsed and `200px` expanded.
- Main surface computed top/right/bottom gutters are `8px` and radius is `12px`.
- Packaged sidebar image assets have `naturalWidth > 0`.
- A custom select overlay and custom date panel both open in the browser.
- No native `<select>` or native date input is used for final UI.

## Interaction States

Every applicable control has:

- default
- hover
- focus-visible
- selected/current
- disabled
- loading when relevant
- error when validation applies
- open/closed state for overlays and dropdowns

## Existing Page Refactor

- All original fields are preserved or intentionally improved.
- All original filters/search/sort controls are preserved or intentionally improved.
- All original actions are preserved.
- All original modals/drawers/dropdowns are preserved or intentionally improved.
- Empty/loading/error states are not lost.
- No business logic is silently removed.

## Visual Quality

- Page uses classic B2B SaaS dashboard style unless the user requested another approved direction.
- Content is compact and operational.
- No oversized hero sections.
- No decorative gradient/orb/background gimmicks.
- Text does not overflow controls.
- Cards are not nested inside cards.
