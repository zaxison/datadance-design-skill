# DataDance UI Package

The DataDance sidebar and app shell should be reused as code, not regenerated from prose.

Yuanli-style base components must also be reused as code. The package is the canonical home for the DataDance shell/sidebar and the approved `DD*` component family.

Source repository:

- Standalone GitHub package: `https://github.com/zaxison/datadance-ui`
- Local package directory in this repo: `packages/datadance-ui`

Exports:

```jsx
import {
  DDAlert,
  DDButton,
  DDCard,
  DDCascader,
  DDDatePicker,
  DDDrawer,
  DDIconButton,
  DDInput,
  DDModal,
  DDPageHeader,
  DDPagination,
  DDSelect,
  DDSwitch,
  DDTable,
  DDTabs,
  DDTag,
  DDTreeSelect,
  DataDanceAppShell,
  DataDanceShell,
  DataDanceSidebar,
  DataDanceWorkSurface,
  defaultMenuConfig,
} from '@datadance/ui';
```

## Required Usage

Use `DataDanceShell` for generated desktop web apps. It is the canonical combination of the fixed DataDance app shell plus the fixed DataDance sidebar:

```jsx
import { DataDanceShell } from '@datadance/ui';

export default function App() {
  return (
    <DataDanceShell
      activePath={location.pathname}
      onNavigate={(path) => navigate(path)}
    >
      <YourPage />
    </DataDanceShell>
  );
}
```

Do not generate a new shell or sidebar when this component package is available.

## Stable Distribution Plan

The component package is distributed from its standalone repository. For cross-project use, install the approved tagged release rather than rewriting it from prose.

Current standalone package repository:

- GitHub: `https://github.com/zaxison/datadance-ui`
- Current approved release: `v0.2.0`
- Install: `npm install github:zaxison/datadance-ui#v0.2.0`

Install in new projects with:

```bash
npm install github:zaxison/datadance-ui#v0.2.0
```

The standalone repository contains compiled ESM and compiled CSS in `dist`. The target project does not need Tailwind to render the package correctly.

Alternative approaches:

- Publish the package to a private or public npm registry as `@datadance/ui`.
- Copy the entire `packages/datadance-ui` directory into the target project when network installation is unavailable.

When network installation is unavailable, a target project can use a complete local copy of the package:

```jsx
import { DataDanceShell } from './packages/datadance-ui/src';
```

## Package Contents

- `DataDanceShell`: canonical app shell with DataDance sidebar, `#EFF3F6` background, `8px` top/right/bottom gutters, and white `12px` main surface.
- `DataDanceAppShell`: shell primitive for custom composition.
- `DataDanceWorkSurface`: white `12px` rounded work surface primitive.
- `DataDanceSidebar`: exact reusable DataDance sidebar implementation.
- `defaultMenuConfig`: default DataDance menu structure.
- `DD*` components: Yuanli-derived base components for actions, inputs, selectors, tabs, tables, pagination, cards, tags, alerts, modals, drawers, and pickers.
- `src/styles.css`: package-owned CSS, independent of Tailwind scanning.
- `src/assets/*`: sidebar logo, expand icons, menu icons, user menu icons, avatar.

The package uses CSS classes and packaged assets so other projects do not need to recreate Tailwind utilities or public asset paths.

Icon reliability is part of the package contract. Menu and user-menu icons must render from real imported assets or inline SVG components. Avoid mask-only colored spans whose URL failure can display as a solid rectangle. After copying or installing the package in another project, verify every sidebar icon renders as an icon in default, hover, and active states.

## Implementation Rule

When using `$datadance-design` in another repo:

1. Check whether `@datadance/ui` exists in `package.json` or `node_modules`.
2. Check whether a local `packages/datadance-ui` copy exists.
3. If either exists, import `DataDanceShell` and package styles.
4. If neither exists, add the package before building pages:
   - Required React/Vite release: `npm install github:zaxison/datadance-ui#v0.2.0`.
   - If the repo/tag differs, use the user-provided GitHub package source.
   - If network installation is unavailable, copy the full `packages/datadance-ui` directory into the target project.
5. Import Yuanli/DataDance `DD*` components from the package when available.
6. If a required shared component is missing, stop and report the missing export. Do not invent an approximation inside page code.
7. For a component outside the approved v0.2.0 set, ask whether to extend `@datadance/ui` or use a page-specific control. Never label a page-specific approximation as a Yuanli component.

Never use a generic shell, sidebar, native dropdown, native date picker, or generic component-library default as a shortcut.

## Bootstrap Examples

Package install path:

```jsx
import { DataDanceShell } from '@datadance/ui';
import '@datadance/ui/styles.css';
```

Local copy path:

```jsx
import { DataDanceShell } from './packages/datadance-ui/src';
import './packages/datadance-ui/src/styles.css';
```

When adding the package to a new project, run `scripts/verify-datadance-ui.mjs` from the target project root before implementing the page. If install or verification fails, stop and report the blocker; do not continue with a hand-written sidebar or component.
