# Yuanli Component Library For DataDance

Use DataDance/Yuanli code components before hand-writing basic controls. The goal is to make Yuanli consistency come from reusable code, not from the model reinterpreting Figma on every page.

Source file:

- Figma: `源力基础组件 light（周鸿翔）`, file key `HebSNPzZ5J8amDStIBiKLu`.
- Canonical package target: `@datadance/ui` / `packages/datadance-ui`.
- Canonical React/Vite implementation: `@datadance/ui` v0.2.1.

The copied Figma file contains 69 pages, including global styles, layout primitives, and components across basic, navigation, data display, data input, and feedback categories. The implemented subset focuses on high-frequency page generation components.

For exact usage rules, states, sizes, and verification, read `references/yuanli-component-contract.md`.

## Implemented Components

Preferred import, once the shared package exposes the component:

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
} from '@datadance/ui';
```

The DataDance source repo may use this development import while maintaining the package:

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
} from './components/datadance';
```

Implemented v1 components:

- `DDPageHeader`: primary-page standardized header container.
- `DDButton`: primary, secondary, outline, text; mini/small/default/large; default/danger/success/warning semantics; loading and disabled states.
- `DDIconButton`: 32px square secondary icon button.
- `DDInput`: plain and built-in-label input.
- `DDSelect`: plain and built-in-label custom select with Yuanli dropdown menu; do not use browser-native select menus for final UI.
- `DDSwitch`: custom switch with primary enabled state and neutral disabled/off state.
- `DDCascader`: custom cascader menu with multi-column Yuanli dropdown behavior.
- `DDDatePicker`: custom date picker panel; do not use browser-native date inputs for final UI.
- `DDTreeSelect`: custom tree dropdown with hierarchical options.
- `DDTabs`: first-level tab visual style.
- `DDPagination`: compact pagination with total count, previous/next controls, page states, and ellipsis.
- `DDTag`: default/primary/success/warning/danger tags, optional close icon.
- `DDCard`: white bordered card with DataDance hover state.
- `DDTable`: compact table with 40px header/rows.
- `DDAlert`: info/success/warning/danger alert.
- `DDModal`: centered modal with mask, header, body, footer.
- `DDDrawer`: left/right drawer with mask, header, body, footer.

## Required Usage Rules

- Do not use generic Arco defaults, shadcn defaults, raw Tailwind controls, or browser-native popups when a Yuanli/DataDance component exists.
- If working in another project, first install `@datadance/ui` v0.2.1. If the package does not expose a needed shared component, stop and extend the package in its own repository; do not copy an ad hoc page-local approximation.
- For primary pages, use `DDPageHeader` and choose the same variant logic as the Figma `header` page.
- For filter rows, use `DDInput label="..."` and `DDSelect label="..."` to reproduce the built-in-label source component.
- `DDSelect` must use the packaged source implementation: 32px control height, 4px radius, neutral `#DDE2E9` outline, `#3370FF` hover outline, blue focus halo, and a custom single/multiple-select panel. Multiple selection uses removable compact tags in the trigger and checkbox rows in the panel.
- Date picker, cascader, and tree select must render their panels themselves. Do not rely on browser-native picker/dropdown UI.
- For header auxiliary actions, use `DDIconButton`; do not render labeled secondary buttons unless the Figma header variant calls for them.
- For normal creation actions, use `DDButton` default primary with a 32px height.
- For cards in generated pages, use `DDCard` rather than ad hoc borders/shadows.
- For labels and statuses, use `DDTag` when the status can be expressed as a compact token.
- Do not hand-roll Button/Input/Select/Tabs/Table/Modal/Drawer/Alert styles unless the component library lacks the needed behavior.

## Visual Defaults

- Default control height: 32px.
- Button text: 13px / 22px, medium, 0.039px tracking.
- Built-in label Select: left label segment and right selector segment, both white, 4px outer radius, `#DDE2E9` 1px outline.
- Input placeholder: `#737A87`.
- Select filled text: `#0B0B0F`; open state rotates the chevron and uses primary focus border.
- Select dropdown menu: 2px top offset, white surface, `#E5E6EB` border, 4px radius, 34px option rows, and `0 8px 20px rgba(29,33,41,0.12)` shadow.
- Switch: 40px by 22px, 18px handle, primary fill when checked, `#C9CDD4` when off.
- Date picker panel: white surface, 6px radius, `#ECEEF9` border, compact 28px date cells, selected date uses primary fill.
- Cascader/tree panels: 32px rows, hover `#F6F8FA`, selected light-primary background and primary text.
- Icon button: 32px square, 4px radius, `#F6F8FA` fill, `0 0 0 1px #DDE2E9, 0 2px 1px rgba(0,0,0,0.08)` shadow.
- Tabs: 32px high, active tab uses white surface, primary text, and inset 2px top indicator.
- Table: `#F6F7FA` header, 40px rows, `#EAEDF1` dividers, 13px text.

## Figma Pages Covered In V1

- `按钮/Button`
- `链接/Link`
- `下拉菜单/Dropdown`
- `分页/Pagination`
- `表格/Table`
- `选项卡/Tabs`
- `标签/Tag`
- `表单/Form`
- `输入框/Input`
- `选择器/Select`
- `开关/Switch`
- `级联选择/Cascader`
- `日期选择器/Datepicker`
- `树选择/Treeselect`
- `警告提示/Alert`
- `抽屉/Drawer`
- `对话框/Modal`

## Expansion Backlog

Add these next when a page needs them:

- Add `Timepicker`
- Add `Autocomplete`, `Transfer`
- Add `Checkbox`, `Radio`, `Slider`, `Inputnumber`
- `Upload`
- `Popover`, `Tooltip`, `Popconfirm`, `Message`, `Notification`, `Progress`
