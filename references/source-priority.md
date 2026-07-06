# Source Priority

This skill has two mandatory design sources. They are not inspiration references; they are binding constraints.

## Mandatory Sources

1. DataDance standardized design specification
   - Figma file key: `8v0blpg1QYokdWihBG02gb`
   - Purpose: page structure, app shell, primary/secondary page rules, list/form/detail/modal/AI/empty-state patterns, header variants, spacing relationships, and DataDance product composition.

2. Yuanli light component library copied by Zhou Hongxiang
   - Figma file key: `HebSNPzZ5J8amDStIBiKLu`
   - Purpose: base component visual states and interactions, including button, input, select, dropdown, tabs, table, tag, form, switch, cascader, date picker, tree select, modal, drawer, alert, and other component behaviors.

## Non-Negotiable Rules

- Page layout and page-level structure must come from the DataDance standardized design specification.
- Component styling and component interaction states must come from Yuanli light components or the local `src/components/datadance` implementation derived from Yuanli.
- Do not substitute shadcn, raw Tailwind defaults, generic Arco defaults, Ant Design defaults, Material UI, Bootstrap, or browser-native component styling.
- Do not use browser-native dropdown/date-picker/cascader/tree-select panels for final visual UI.
- If the target project has another design system installed, use it only for implementation primitives when it can be visually overridden to match DataDance/Yuanli exactly.
- When there is conflict between a generic library default and this skill, this skill wins.
- When there is conflict between old DataDance Figma sidebar work and the current implemented DataDance sidebar contract, the current sidebar contract wins.

## Required Build Order

When creating or refactoring a page:

1. Establish the DataDance app shell and sidebar.
2. Identify whether the page is primary or secondary.
3. Apply the correct standardized DataDance header/page pattern.
4. Use `src/components/datadance` components or create equivalent local DataDance/Yuanli components.
5. Only then compose business content.

Do not start by choosing a generic UI template, admin dashboard kit, or landing-page layout.

## Verification

Before final delivery, explicitly check:

- The page uses the DataDance shell and sidebar, not a generic sidebar.
- The page header matches a standardized DataDance header variant when it is a primary page.
- Controls use Yuanli-derived states: default, hover, active/focus, selected, disabled, loading/error where relevant.
- Select/date/cascader/tree popups use custom Yuanli-style panels.
- Cards, tables, filters, forms, modals, and drawers use DataDance/Yuanli tokens and spacing.
