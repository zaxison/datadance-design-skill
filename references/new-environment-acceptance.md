# New Environment Acceptance

Use this acceptance flow whenever a DataDance page is created in a repo that did not already contain an approved `@datadance/ui` installation. The first supported target is React + Vite desktop web.

## Mandatory Bootstrap

From the target project root, run:

```bash
/absolute/path/to/datadance-design/scripts/bootstrap-datadance-ui.sh
```

Or install and verify explicitly:

```bash
npm install github:zaxison/datadance-ui#v0.2.0
node /absolute/path/to/datadance-design/scripts/verify-datadance-ui.mjs
```

Do not begin page composition until verification passes. A failed install, missing export, missing stylesheet, or unsupported non-React target is a blocker. It is not permission to create a visually similar substitute.

## Required Imports

```jsx
import {
  DataDanceShell,
  DDButton,
  DDInput,
  DDSelect,
} from '@datadance/ui';
import '@datadance/ui/styles.css';
```

Use `DataDanceShell` at the application shell boundary. Keep the package's `defaultMenuConfig` unless the user explicitly requests a menu update.

## Runtime Geometry Checks

Run the app and inspect computed browser geometry at a desktop viewport. All checks must pass:

- Shell starts at viewport `x: 0`, `y: 0`, independent of browser default body margins.
- Collapsed sidebar width is `72px`.
- Expanded sidebar width is `200px` after its approximately `300ms` transition.
- Collapsed menu rows are `40px x 40px` and aligned inside the sidebar.
- Main work surface has `8px` top, right, and bottom viewport gutters.
- Main work surface has a computed `12px` border radius and white background.
- Sidebar image assets have `naturalWidth > 0`; no icon is a solid black rectangle, empty square, or broken image.

## Component Interaction Checks

- `DDSelect`, `DDCascader`, and `DDTreeSelect` open package-owned overlay panels; no native `<select>` popup is used.
- `DDDatePicker` opens the package-owned calendar; no native date input popup is used.
- `DDModal` and `DDDrawer` render above the work surface, close from their close controls, and obey disabled/loading states where applicable.
- Focus, hover, selected, disabled, loading, error, and open states are exercised for every component used by the page.

## Sidebar Visual Checks

Capture or inspect these states against the current packaged component:

- collapsed
- expanded
- top-level hover
- expanded parent and active child
- collapsed parent popup
- user profile hover menu

The collapsed parent row must not display a submenu arrow. The expanded collapse button must use the exact packaged icon. The profile menu must stay open while the pointer moves from the profile into the portal.

## Delivery Gate

Do not claim DataDance consistency when any mandatory check fails. Fix the package usage or report the blocker. Do not compensate with page-local HTML/CSS, approximate icons, generic Arco defaults, or native browser controls.

