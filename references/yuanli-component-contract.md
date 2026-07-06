# Yuanli Component Contract

This file defines how DataDance pages must consume Yuanli-style components. It is the operational contract between the Figma source, the local code component library, and generated pages.

## Source Priority

1. Use code components from `@datadance/ui` or `packages/datadance-ui`.
2. If the target project does not have the package yet, copy/install the package before building the page.
3. During the transition period, `src/components/datadance/index.jsx` is the local implementation reference for Yuanli-derived components.
4. Only hand-write a component when neither package nor local component exists, and then match the relevant state contract below.

Do not use raw browser-native controls for final UI when Yuanli behavior is expected. In particular, do not use native `<select>` dropdowns, native date picker popups, or unstyled checkbox/switch controls.

## Required Component Set

Every DataDance project should provide these components:

- Shell/sidebar: `DataDanceShell`, `DataDanceSidebar`, `DataDanceWorkSurface`.
- Page structure: `DDPageHeader`, `DDCard`.
- Actions: `DDButton`, `DDIconButton`.
- Inputs: `DDInput`, `DDSelect`, `DDCascader`, `DDDatePicker`, `DDTreeSelect`, `DDSwitch`.
- Navigation/data: `DDTabs`, `DDTable`, `DDTag`.
- Feedback/overlays: `DDAlert`, `DDModal`, `DDDrawer`.

Generated pages must import and use these components instead of recreating equivalent controls in page code.

## State Contract

Each component implementation must cover:

- default
- hover
- active/pressed where relevant
- focus-visible
- selected/current state
- disabled
- loading when relevant
- error when validation applies
- open/closed state for dropdown, cascader, date picker, tree select, modal, and drawer

## Size Contract

- Default toolbar/input/button height: `32px`.
- Small control: `28px`.
- Large control: `36px`.
- Table header/body row height: `40px`.
- Dropdown option row: `32px`.
- Modal/drawer header: about `56px`.
- Icon button: `28px-32px` square.

## Visual Contract

- Normal control radius: `4px-6px`.
- Menu/card medium radius: `8px`.
- Main work surface radius is governed by app shell rules, normally `12px`.
- Border color: `#E2E5F1`, `#E5E6EB`, or `#EAEDF1`.
- Primary color: DataDance/Yuanli primary token, normally `#5364FF`.
- Placeholder: `#737A87` or `#86909C`.
- Primary text: `#1D2129` or `#0B0B0F`.
- Secondary text: `#3F3F51`, `#4E5969`, or `#555B65`.
- Dropdown/menu shadow: `0 8px 24px rgba(29,33,41,0.12)`.

## Component-Specific Rules

### Button

- Use `DDButton`.
- Primary buttons are solid primary with white text.
- Secondary/icon buttons are compact and neutral.
- Loading state uses a spinner and disables repeat action.

### Input

- Use `DDInput`.
- Built-in-label controls use a left label segment and right input segment.
- Focus state uses primary border/shadow.
- Error state must show danger border and compact error text.

### Select / Dropdown

- Use `DDSelect`.
- Render the dropdown panel in code; do not rely on browser-native select visuals.
- Chevron rotates in open state.
- Selected option uses light primary background and primary text.
- Hover option uses neutral hover fill.
- Keyboard support should include Escape, ArrowUp, ArrowDown, and Enter where possible.

### Cascader / Tree Select

- Use `DDCascader` and `DDTreeSelect`.
- Panels use 32px rows, hierarchical indentation or columns, hover fill, and selected primary state.
- Selecting a leaf closes the panel unless multi-select behavior is explicitly required.

### Date Picker

- Use `DDDatePicker`.
- Render a Yuanli-style panel. Do not use native date input popup as final UI.
- Date cells are compact, selected date uses primary fill.

### Tabs

- Use `DDTabs`.
- Active tab uses primary text and a clear indicator.
- Keep tab height compact, normally 32px.

### Table

- Use `DDTable`.
- Header background is light neutral.
- Rows are compact with subtle dividers and hover fill.
- Operation column actions use text buttons or icon buttons, not oversized CTAs.

### Modal / Drawer

- Use `DDModal` and `DDDrawer`.
- Include mask, header, close action, scrollable body, and right-aligned footer actions.

## Verification

Before finishing a generated page:

- Confirm no raw native select/date dropdown is visible.
- Confirm all toolbar controls are 32px-class compact controls.
- Confirm dropdowns/pickers open with Yuanli-style panels.
- Confirm every interactive state needed by the page exists.
- Confirm components are imported from the component library or a local copied equivalent.
