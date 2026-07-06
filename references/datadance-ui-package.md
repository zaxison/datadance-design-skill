# DataDance UI Package

The DataDance sidebar and app shell should be reused as code, not regenerated from prose.

Yuanli-style base components should also be reused as code. The package is the preferred home for the DataDance shell/sidebar and the `DD*` component family. During migration, the local `src/components/datadance` implementation is the fallback reference.

Source repository:

- GitHub: `https://github.com/zaxison/datadance`
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

The component package currently lives inside the DataDance repo at `packages/datadance-ui`. For cross-project use, this package must be distributed as a reusable dependency, not rewritten from prose.

Current standalone package repository:

- GitHub: `https://github.com/zaxison/datadance-ui`
- Install: `npm install github:zaxison/datadance-ui#v0.1.0`

Recommended approach for future updates:

1. Move or mirror `packages/datadance-ui` into a standalone GitHub repo, for example `zaxison/datadance-ui`.
2. Keep `package.json` at that repo root with package name `@datadance/ui`.
3. Tag stable releases, for example `v0.1.0`, `v0.1.1`.
4. Install from new projects with:

```bash
npm install github:zaxison/datadance-ui#v0.1.0
```

GitHub works well for this as long as the reusable package is at the repo root. If the package remains only inside a monorepo subdirectory such as `packages/datadance-ui`, direct `npm install github:...` is less reliable. In that case, prefer a standalone repo or publish to npm/GitHub Packages.

Alternative approaches:

- Publish the package to a private or public npm registry as `@datadance/ui`.
- Copy the entire `packages/datadance-ui` directory into the target project when network installation is unavailable.

Until a standalone package is published, a target project can use a local copy:

```jsx
import { DataDanceShell } from './packages/datadance-ui/src';
```

## Package Contents

- `DataDanceShell`: canonical app shell with DataDance sidebar, `#EFF3F6` background, `8px` top/right/bottom gutters, and white `12px` main surface.
- `DataDanceAppShell`: shell primitive for custom composition.
- `DataDanceWorkSurface`: white `12px` rounded work surface primitive.
- `DataDanceSidebar`: exact reusable DataDance sidebar implementation.
- `defaultMenuConfig`: default DataDance menu structure.
- `DD*` components: Yuanli-derived base components for actions, inputs, selectors, tabs, tables, cards, tags, alerts, modals, drawers, and pickers. If a component has not yet been migrated into this package, copy/use the matching local implementation from `src/components/datadance` before generating page-specific controls.
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
   - Preferred: `npm install github:zaxison/datadance-ui#v0.1.0`.
   - If the repo/tag differs, use the user-provided GitHub package source.
   - If network installation is unavailable, copy the full `packages/datadance-ui` directory into the target project.
5. Import Yuanli/DataDance `DD*` components from the package when available.
6. If a needed `DD*` component is not yet exposed by the package, copy the equivalent from `src/components/datadance`.
7. Only if package installation/copying is impossible, implement a fallback from `references/app-shell.md`, `references/sidebar.md`, and `references/yuanli-component-contract.md`.

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

When adding the package to a new project, verify the dependency is present before implementing the page. Do not continue with a hand-written sidebar unless install/copy has clearly failed.
