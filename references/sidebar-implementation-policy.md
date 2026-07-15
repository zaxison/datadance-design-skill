# Sidebar Implementation Policy

The DataDance sidebar is a product component, not a visual suggestion. Do not translate it by hand as the default path.

## Required Order

Use this order for every DataDance page:

1. **Package reuse**: install `github:zaxison/datadance-ui#v0.2.0`, run the skill verification script, and use `DataDanceShell` / `DataDanceSidebar`.
2. **Local package copy**: copy `packages/datadance-ui` into the target project and import `DataDanceShell` from the copied package.
3. **React local source reuse**: only when package installation is unavailable, copy the complete current package/source implementation with every asset and dependency, preserving behavior, then run equivalent acceptance checks.
4. **Static official bundle**: use an official static sidebar bundle only when one exists.
5. **Stop and report**: if none of the above is possible, do not hand-write an approximate sidebar. Explain that exact sidebar reuse is blocked.

Hand-writing a visually similar sidebar from memory, screenshots, or translated React is not an acceptable default path.

## Static Demo Rule

For static HTML demos, do not manually translate the React sidebar into ad hoc HTML/CSS/JS.

Allowed paths:

- Mount `@datadance/ui` as a small React island inside the static demo.
- Convert the demo to a React/Vite project and use `DataDanceShell`.
- Use an official static sidebar bundle, if the package/repo provides one.

Disallowed paths:

- Recreating the sidebar with approximate static DOM.
- Drawing replacement SVG icons by hand.
- Dropping portal behavior, hover timing, collapsed submenu behavior, or user-menu behavior.
- Keeping only width/DOM checks while skipping visual comparison.

If a static-only environment cannot use React and no official static bundle exists, stop and tell the user that exact sidebar consistency cannot be guaranteed in that environment.

## Icon Source Rule

Icons must come from one of these sources:

- `@datadance/ui` packaged assets or packaged icon components.
- The current DataDance source implementation copied with its dependencies.
- `lucide-react` icons with the exact icon name used by the source implementation.
- Official SVG paths copied from the source icon, not re-drawn approximations.

Do not invent approximate icons. In particular, sidebar collapse/expand controls must match the current DataDance implementation. If the source uses `PanelLeftClose` or another lucide icon, import the same icon from `lucide-react` or copy its official SVG path.

## Visual Acceptance

For any task that includes the DataDance sidebar, verify the sidebar visually, not only through DOM checks.

Required states:

- collapsed sidebar
- expanded sidebar
- hover on a top-level menu item
- expanded parent menu with submenu
- active child item
- user profile hover menu

If possible, compare these states against the current `@datadance/ui` / DataDance source implementation with screenshots. If screenshot comparison is not possible, perform manual visual inspection and state the limitation.

## Known Detail Checks

- Collapsed parent menu rows do not show submenu arrows inside the 40px icon row.
- Expanded parent menu rows show arrow only when the item has children.
- Expanded top-right collapse affordance matches the current DataDance component.
- Menu icons are silhouettes, not black rectangles or filled blocks.
- Profile hover menu is rendered in a portal/top-level overlay and is not clipped.
- User menu remains open while moving pointer between profile and popup.
- Sidebar transitions match the current implementation timing, about 300ms.
