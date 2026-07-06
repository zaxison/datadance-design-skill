# DataDance Refactor Flow

Use this flow when converting an existing generated page into DataDance style.

## 1. Inventory Existing Behavior

Before changing code, list:

- Page purpose and primary user workflow.
- Visible data fields and labels.
- Filters, search boxes, sort controls, tabs, and view switches.
- Tables: columns, row actions, pagination, empty state.
- Cards: title, metadata, metrics, tags, owner/avatar, actions.
- Forms: fields, required state, validation, disabled/loading/error states.
- Modals, drawers, popovers, dropdowns, date pickers, cascaders, tree selects.
- Route changes and URL/state persistence.
- Keyboard shortcuts or special interactions.

This inventory is the preservation target.

## 2. Add DataDance Foundation

Check for `@datadance/ui`.

If missing:

```bash
npm install github:zaxison/datadance-ui#v0.1.0
```

Wrap the page with:

```jsx
import { DataDanceShell } from '@datadance/ui';
import '@datadance/ui/styles.css';
```

Do not build the page around a generic sidebar.

## 3. Replace Structure

- Replace any existing outer nav/sidebar with `DataDanceShell`.
- Keep the current business page inside the white work surface.
- Use the DataDance primary page header pattern.
- Use compact filter rows or filter panels.
- Use `DDTable` for dense tabular data.
- Use `DDCard` for repeated card items.
- Use `DDDrawer` or `DDModal` for detail/edit flows.

## 4. Replace Components

Replace raw or generic controls with Yuanli/DataDance components:

- Button -> `DDButton` / `DDIconButton`
- Input -> `DDInput`
- Select/dropdown -> `DDSelect`
- Switch -> `DDSwitch`
- Cascader -> `DDCascader`
- Date picker -> `DDDatePicker`
- Tree select -> `DDTreeSelect`
- Tabs -> `DDTabs`
- Table -> `DDTable`
- Tag/status -> `DDTag`
- Modal/drawer -> `DDModal` / `DDDrawer`

Never leave native browser dropdown/date picker visuals in final UI.

## 5. Preserve And Improve Interactions

For each inventory item:

- Preserve the original behavior.
- Normalize the visual style to DataDance/Yuanli.
- Improve obvious interaction issues only when it does not remove user capability.
- Keep loading, disabled, error, and empty states.

## 6. Verify

Run the checklist in `datadance-checklist.md`.

If a check fails, fix the component/package usage first rather than approximating with local ad hoc styles.

