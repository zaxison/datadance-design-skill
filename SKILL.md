---
name: datadance-design
description: Use this skill when creating a new DataDance web page or refactoring an existing vibecoding page so its visual design, layout, sidebar, header, Arco/Yuanli-style components, and interactions match the DataDance desktop web design system. Applies to React/Vite/Tailwind-style local prototypes and visual replication tasks where implementation details may vary, but DataDance styling and interaction consistency matter.
---

# DataDance Design

Use this skill to make web desktop pages look and behave like DataDance. It supports two common tasks:

- Create a new DataDance page from a product requirement.
- Convert an existing vibecoding page with inconsistent styling into the DataDance design language.

This skill is for desktop web only. Do not optimize for mobile unless the user explicitly changes scope.

## Source Of Truth

- DataDance standardized design specification Figma file: `8v0blpg1QYokdWihBG02gb`
- Yuanli light component library Figma file: `HebSNPzZ5J8amDStIBiKLu`
- Canonical implementation: `@datadance/ui` release `v0.2.0`, source repository `https://github.com/zaxison/datadance-ui`
- Current DataDance app implementation is a maintenance reference only: `src/components/Sidebar/index.jsx`, `src/App.jsx`, `src/index.css`, `src/config/menu.js`

Important: the Figma page named `菜单栏` contains older sidebar work. For sidebar behavior and visuals, use the packaged `DataDanceSidebar` unless the user explicitly approves a newer implementation.

## Workflow

1. Inspect the target page or requirement.
   - For existing pages, first create a short interaction/data inventory: visible fields, filters, sort options, tabs/view switches, table columns, card metadata, buttons, drawers/modals, form validation, empty/loading/error states, route changes, keyboard shortcuts, and any URL/local state.
2. Identify the page pattern:
   - list page
   - form/create/edit page
   - detail page
   - modal or AI-fill flow
   - AI assistant flow
   - empty/error state
3. Read only the relevant references:
   - `references/source-priority.md` for mandatory source priority and non-negotiable constraints.
   - `references/datadance-ui-package.md` for the reusable DataDance shell/sidebar package.
   - `references/app-shell.md` for the required viewport shell, white work surface, 12px radius, and 8px top/right/bottom gutters.
   - `references/visual-language.md` for tokens, typography, spacing, and surface rules.
   - `references/target-dashboard-style.md` for the default classic B2B SaaS data dashboard direction.
   - `references/page-patterns.md` for list, form, detail, modal, AI, and empty-state page layouts.
   - `references/components.md` for buttons, inputs, selectors, tabs, tables, filters, dialogs, pagination, and interaction states.
   - `references/yuanli-component-contract.md` for mandatory Yuanli component consumption rules, component states, and verification checks.
   - `references/yuanli-component-library.md` for the local reusable component library and Yuanli component implementation rules.
   - `references/sidebar-implementation-policy.md` before implementing any DataDance sidebar, especially in static demos or non-React projects.
   - `references/sidebar.md` for the required DataDance sidebar and user menu behavior.
   - `references/new-environment-acceptance.md` when the target repo is new or does not already contain `@datadance/ui`.
4. Implement using the local project's current approach:
   - Before implementing a new React/Vite project, run `scripts/bootstrap-datadance-ui.sh` from the skill directory or install `github:zaxison/datadance-ui#v0.2.0` directly.
   - Run the skill's `scripts/verify-datadance-ui.mjs` with the target project as the current working directory. Do not begin page composition until it passes.
   - React components.
   - Tailwind utility classes plus CSS variables.
   - `lucide-react` or existing SVG assets for icons.
   - `cn()` / `clsx` / `tailwind-merge` where available.
   - Do not hand-write Button/Input/Select/Tabs/Table/Modal/Drawer/DatePicker/Cascader/TreeSelect when a `DD*` component exists.
5. Verify visually:
   - The page starts with the actual work surface, not a marketing landing page.
   - Sidebar, header, filters, tables, forms, and dialogs align to the DataDance spacing and state rules.
   - Run the required sidebar acceptance check in `references/sidebar.md`.
   - Run the new-environment geometry and asset checks in `references/new-environment-acceptance.md`.
   - Text does not overflow controls.
   - Hover, active, focus, disabled, loading, and empty states are present where expected.
6. For existing-page refactors, run a post-change regression check against the inventory from step 1:
   - Every original field, action, filter, sort, view switch, drawer/modal, route transition, and validation behavior is either preserved or intentionally improved.
   - No interactive feature is silently dropped.
   - New interactions still follow Yuanli/DataDance component behavior.

## Hard Rules

- Page layout, page hierarchy, headers, app shell, spacing relationships, and major patterns must follow the DataDance standardized design specification (`8v0blpg1QYokdWihBG02gb`). Do not use generic admin/dashboard/page templates as substitutes.
- Base components and their states/interactions must follow the Yuanli light component library (`HebSNPzZ5J8amDStIBiKLu`) through the approved `@datadance/ui` implementation. Do not use raw browser-native or third-party default component visuals for final UI.
- Yuanli consistency is enforced through code components first, not prose. Use `@datadance/ui` / `packages/datadance-ui` or a copied local equivalent. Read `references/yuanli-component-contract.md` when building or refactoring any page that contains inputs, selects, tabs, tables, date pickers, cascaders, tree selects, switches, modals, or drawers.
- For React/Vite projects, `@datadance/ui` v0.2.0 or a newer user-approved release is the only allowed implementation source for the shared shell/sidebar and the exported `DD*` components. Do not re-create an exported component from Figma notes, screenshots, prose, or generic Arco defaults.
- Every generated DataDance web app must use the DataDance app shell from `references/app-shell.md`: left `DataDanceSidebar`, `#EFF3F6` outer background, and a white `12px` rounded main work surface with `8px` top/right/bottom browser-edge gutters.
- Install and reuse the tagged `@datadance/ui` package from `https://github.com/zaxison/datadance-ui`. A complete local package copy is allowed only when network installation is unavailable.
- Do not manually translate or approximate the DataDance sidebar from React into static HTML/CSS/JS. Follow `references/sidebar-implementation-policy.md`: package reuse, local package copy, React source reuse, official static bundle if available, otherwise stop and report the blocker.
- Treat pages reached directly from the sidebar as primary pages. Primary pages must use one of the fixed header variants from the DataDance Figma `header` page; do not improvise the top header structure.
- Use the `DD*` exports from `@datadance/ui` for Button/Input/Select/Tabs/Table/Tag/Pagination/Card/Alert/Modal/Drawer/PageHeader and the supported pickers. A missing required export or failed package installation is a blocker, not permission to hand-write an approximation.
- Keep the sidebar/menu behavior consistent with the current implemented DataDance sidebar.
- Sidebar icons must render as real icons. Do not use black rectangles, empty SVG placeholders, CSS-only icon boxes, or mask spans whose URL failure can become a solid block. Prefer packaged `DataDanceSidebar` icons; otherwise use imported SVG/image assets or stable lucide icons with the same 16px-20px sizing and hover/active color behavior.
- Sidebar non-asset icons must use the same source as the current implementation. If the source uses lucide, import the same lucide icon or copy the official SVG path. Do not draw approximate replacement icons.
- Use Arco/Yuanli visual behavior for basic components: input, select, dropdown, button, tabs, table, pagination, modal, alert, slider, and date picker.
- Do not use browser-native select/date picker popups as final UI; Yuanli dropdown/picker panels must be rendered by component code.
- Keep DataDance pages dense, operational, and work-focused. Avoid oversized hero sections, decorative cards, marketing layouts, and single-use visual flourishes.
- For the main content area, default to the classic B2B SaaS dashboard direction in `references/target-dashboard-style.md`: light canvas, white surfaces, clear metrics, compact filters, responsive cards/tables, and subtle hover lift. Keep fixed shell/sidebar/components on DataDance/Yuanli rules.
- Do not invent a new color theme. Use the DataDance token set in `visual-language.md`.
- Do not nest cards inside cards. Use cards only for individual repeated items, modals, framed tools, and genuinely grouped widgets.
- Prefer icons for compact commands and pair them with tooltips when the meaning is not obvious.
- Use 8px or smaller border radius for normal operational UI unless a local component already uses a different DataDance-specific radius.

## Implementation Defaults

- Page background: white or very light neutral, with the sidebar in the DataDance sidebar surface color.
- Primary color: DataDance blue/purple family from `--primary-color`, normally `#5364FF`.
- Text: `#1D2129` for primary text, `#4E5969` or `#555B65` for secondary text, `#86909C` for tertiary/placeholder text.
- Borders: `#E5E6EB`, `#E2E5F1`, or the local equivalent.
- Typography: PingFang SC / system UI, 14px body, 13px auxiliary text, 16-18px compact page titles.
- Component height: 32px is the default for toolbar controls; tables use compact 40px rows.

## When Refactoring Existing Vibecoding Pages

Preserve the user's business logic and page structure unless the layout itself conflicts with DataDance rules. Replace ad hoc styling with DataDance primitives:

- Before editing, list the existing page's interactive behavior and data fields so the refactor has a concrete preservation target.
- Replace decorative sidebars with the DataDance sidebar.
- Replace inconsistent filters with the standard header/filter row.
- Replace custom table styling with the DataDance compact table pattern.
- Replace large marketing-style cards with dense content regions, toolbars, forms, or tables.
- Keep feature behavior intact while normalizing spacing, colors, radius, typography, and component states.
- After editing, compare the generated page to the inventory and fix missing behavior before finishing.

## Figma Coverage Notes

DataDance Figma pages available through API:

- `封面`, `标准化logo（待确定）`, `组件-火山AML`, `示例页面-列表页`, `示例页面-弹窗/AI填充`, `示例页面-AI建议/确认`, `示例页面-表单页`, `示例页面-详情页/任务管理动线调整`, `菜单栏`, `header`, `高级筛选`, `AI 助手`, `缺省页`, `IP 形象`, `配色试验田`, `草稿杂图`, `交互演示`, `icon/组件`, `杂图`.

Yuanli copied component library pages available through API:

- 69 pages including `颜色/Color`, `文字/Font`, `圆角/Radius`, `投影/Shadow`, `栅格/Grid`, `布局/Layout`, `间距/Space`, `按钮/Button`, `链接/Link`, `导航/Menu`, `下拉菜单/Dropdown`, `分页/Pagination`, `页头/Pageheader`, `表格/Table`, `选项卡/Tabs`, `表单/Form`, `输入框/Input`, `选择器/Select`, `开关/Switch`, `级联选择/Cascader`, `日期选择器/Datepicker`, `树选择/Treeselect`, `警告提示/Alert`, `抽屉/Drawer`, `对话框/Modal`, and related data display/input/feedback components.
