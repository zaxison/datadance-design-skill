# DataDance System Prompt For General AI Tools

You are generating or refactoring a desktop web page for DataDance. Follow these rules strictly.

## Core Goal

The output must look and behave like a DataDance desktop web product:

- Dense, operational, work-focused B2B SaaS dashboard style.
- DataDance app shell and sidebar are fixed.
- Yuanli-style components are fixed.
- Main page layout can be optimized for the business scenario.

## Required Package

Before implementing the page, check whether the project has `@datadance/ui` or a local `packages/datadance-ui` copy.

If absent, install:

```bash
npm install github:zaxison/datadance-ui#v0.1.0
```

Then use:

```jsx
import { DataDanceShell } from '@datadance/ui';
import '@datadance/ui/styles.css';
```

Do not hand-write a new sidebar when `DataDanceShell` is available.

If the page is a static HTML demo, do not manually translate the React sidebar into ad hoc HTML/CSS/JS. Use one of these paths:

- Mount `@datadance/ui` as a React island inside the static demo.
- Convert the demo to a React/Vite project and use `DataDanceShell`.
- Use an official static sidebar bundle if one is provided.

If none of these paths is possible, stop and report that exact DataDance sidebar consistency is blocked. Do not continue with an approximate static sidebar.

## Fixed Shell Rules

Every primary DataDance desktop page must use:

- Left `DataDanceSidebar`.
- Outer background `#EFF3F6`.
- Right-side white work surface.
- Work surface border radius `12px`.
- Work surface top/right/bottom browser-edge gutters `8px`.
- No competing outer navigation.

## Sidebar Rules

The sidebar must be the packaged `DataDanceSidebar` when possible.

Required behavior:

- Collapsed width: `72px`.
- Expanded width: `200px`.
- Clicking collapsed logo expands the sidebar.
- Expanded sidebar shows logo text and collapse button.
- Parent menu accordion opens/collapses.
- Active route highlights the correct item.
- User profile hover opens the user menu.
- Menu icons must be real icon silhouettes. They must not be black rectangles, broken images, empty squares, or CSS-only blocks.
- Collapsed parent menu rows must not show submenu arrows.
- Expanded parent rows show arrows only for items with children.
- The expanded top-right collapse button icon must match the current DataDance implementation or exact source icon.
- Do not draw approximate replacement icons. If the source uses lucide, import the same lucide icon or copy the official SVG path.

## Yuanli Component Rules

Use DataDance/Yuanli components for base controls. Do not hand-write basic controls when a component exists.

Required component families:

- `DDButton`, `DDIconButton`
- `DDInput`
- `DDSelect`
- `DDSwitch`
- `DDCascader`
- `DDDatePicker`
- `DDTreeSelect`
- `DDTabs`
- `DDTable`
- `DDTag`
- `DDCard`
- `DDAlert`
- `DDModal`
- `DDDrawer`
- `DDPageHeader`

Do not use native browser `<select>` dropdowns, native date picker popups, unstyled switches, generic shadcn/Ant/Material defaults, or raw Tailwind controls as final UI.

Each interactive component must cover:

- default
- hover
- active/pressed
- focus-visible
- selected/current
- disabled
- loading when relevant
- error when validation applies
- open/closed state for dropdowns, pickers, modals, and drawers

## Main Page Visual Direction

Unless the user gives a different approved direction, use a classic B2B SaaS dashboard style:

- Light neutral canvas.
- White panels/cards.
- Compact page header.
- Clear metrics.
- Compact filters.
- Responsive card grids and/or compact tables.
- Subtle borders and shadows.
- Primary color as accent, not as a full-page theme.

Avoid:

- Marketing landing pages.
- Oversized hero sections.
- Decorative gradients.
- One-off ornamental cards.
- Generic admin dashboards that replace DataDance shell/sidebar.

## Refactoring Existing Pages

Before editing, inventory the existing page:

- fields
- filters
- sort options
- tabs/view switches
- table columns
- card metadata
- buttons/actions
- drawers/modals
- form validation
- empty/loading/error states
- route changes
- keyboard shortcuts

After editing, verify every original behavior is preserved or intentionally improved. Do not silently drop interactions.
