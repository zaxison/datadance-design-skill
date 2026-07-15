# DataDance Design Skill

DataDance Design Skill helps AI coding tools generate or refactor desktop web pages so they follow the DataDance app shell, sidebar, page layout, Yuanli-style components, and B2B SaaS dashboard visual direction.

This repository contains two usable forms:

- **Codex skill**: `SKILL.md`, `references/`, and `agents/openai.yaml`.
- **General AI rules**: `prompts/`, for tools such as Trae or other AI coding assistants that do not natively support Codex skills.

## Required UI Package

New projects should install the shared DataDance UI package before generating pages:

```bash
npm install github:zaxison/datadance-ui#v0.2.0
```

The repository also includes deterministic setup and verification scripts. Run them from the target React project root:

```bash
/absolute/path/to/datadance-design/scripts/bootstrap-datadance-ui.sh
node /absolute/path/to/datadance-design/scripts/verify-datadance-ui.mjs
```

Do not generate the page when verification fails. Fix the package installation or report the blocker instead of producing an approximate sidebar or control set.

Use it like this:

```jsx
import { DataDanceShell } from '@datadance/ui';
import '@datadance/ui/styles.css';

export default function App() {
  return (
    <DataDanceShell
      activePath={window.location.pathname}
      onNavigate={(path) => {
        window.history.pushState({}, '', path);
      }}
    >
      <YourPage />
    </DataDanceShell>
  );
}
```

`DataDanceShell` provides the canonical DataDance sidebar, shell background, white 12px rounded work surface, and 8px top/right/bottom browser-edge gutters.

## Use With Codex

Install or copy this repository as a Codex skill named `datadance-design`.

The Codex-specific entry point is:

```txt
SKILL.md
```

Codex will read the relevant files in `references/` when the skill is triggered.

## Use With Trae Or Other AI Tools

If your tool does not support Codex skills, use the files in `prompts/`:

1. Install `@datadance/ui` in the project.
2. Add `prompts/datadance-system-prompt.md` to the AI tool's project rules or system prompt.
3. When refactoring an existing page, also provide `prompts/datadance-refactor-flow.md`.
4. After generation, run through `prompts/datadance-checklist.md`.

Suggested instruction:

```txt
Please build/refactor this page following the DataDance Design Guide.
Use @datadance/ui DataDanceShell. Do not hand-write the sidebar.
Use Yuanli/DataDance DD components for controls. Do not use native select/date picker popups.
After implementation, verify against the DataDance checklist.
```

## What Must Stay Fixed

- DataDance sidebar and user menu.
- App shell background `#EFF3F6`.
- White main work surface with 12px radius.
- 8px top/right/bottom outer gutter around the work surface.
- Yuanli-style components and interaction states.
- Sidebar icons must render as real icons, never black rectangles or broken assets.

## Repository Layout

```txt
.
├── SKILL.md
├── agents/
├── references/
├── prompts/
└── scripts/
```
