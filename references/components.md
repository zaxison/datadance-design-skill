# DataDance Components And Interactions

DataDance visually follows Arco/Yuanli-style components. If actual Arco packages are not available, replicate the visual and interaction behavior with local React/Tailwind.

## Buttons

- Height: 32px by default; 34px is acceptable in modal/action-heavy flows.
- Radius: 4px.
- Font: 14px / 22px, medium for primary.
- Primary: solid primary blue, white text, slightly darker hover.
- Secondary: white or light neutral background, neutral border, primary/neutral hover depending on action.
- Text/link button: primary color, no heavy background.
- Icon button: square 28px-32px, icon centered, neutral hover fill.
- Disabled: low contrast neutral background and text; no hover emphasis.

Avoid oversized CTA styling. Operational actions should stay compact.

## Inputs And Textareas

- Height: 32px for normal input.
- Radius: 4px.
- Border: `#DDE2EA`, `#E2E5F1`, or local equivalent.
- Placeholder: `#86909C`.
- Focus: primary border plus subtle 2px primary shadow.
- Error: danger border and compact error text below.
- Disabled: neutral fill, muted text, no pointer-heavy hover.

For forms, prefer top label layout:

- Label 13px / 22px.
- Required marker before/near label with 4px gap.
- 4px label-to-input gap.

## Select, Dropdown, Date Picker

- Same base shape as input.
- Use chevron icon on the right.
- Open state rotates chevron when appropriate.
- Dropdown menu: white surface, 4px-8px radius, 4px-8px padding, subtle shadow.
- Option height: 32px-36px.
- Selected option: light primary background and primary text.
- Hover option: neutral hover fill.
- Do not render huge custom dropdowns unless the information architecture requires it.

## Tabs

- Height: 32px.
- Active tab uses primary text and a bottom indicator.
- In compact page headers, tabs often sit directly above filters/table.
- Avoid large segmented-control tabs for page navigation unless matching an existing DataDance pattern.

## Table

- Header background: `#F6F7FA` or similar.
- Header text: 13px, semibold/bold, `#42464E` or `#4E5969`.
- Row text: 13px-14px, primary text.
- Row height: about 40px.
- Borders: `#EAEDF1` or `#E2E5F1`.
- Operation column may be sticky right with white/header background and a left divider shadow.
- Status fields should use compact tags or icon+text. Keep colors semantic.
- Empty table state should use the empty-state pattern, not a blank rectangle.

## Pagination

- Compact 32px controls.
- Active page uses primary color or primary light surface.
- Keep pagination near table footer, typically bottom right.
- Show total count or page size selector only when useful.

## Advanced Filter

Canonical DataDance Figma page: `高级筛选`.

- Use a compact trigger in the filter row.
- Dropdown/panel width can be wider than the trigger, commonly 360px.
- Prefer vertical form layout inside the panel.
- Include reset and confirm actions when the filter is multi-field.
- Keep labels compact and avoid turning advanced filter into a full settings page.

## Dialogs

- Overlay: full-screen black with low opacity.
- Dialog surface: white, 6px-8px radius.
- Header: title left, close icon right.
- Body: content with clear vertical rhythm.
- Footer: actions right-aligned.
- Big vertical-step dialog in examples: about 600px wide; height adapts to content.

## Alerts And Feedback

- Keep alerts compact and close to the affected region.
- Use semantic colors only for actual semantic meaning.
- Toasts should be top-centered or near the action context, with 4px radius and subtle shadow.

## Loading And Thinking States

- Use compact spinner/dot/pulse states.
- For AI thinking, a light neutral or light primary surface is acceptable.
- Do not block the whole page unless the whole page is genuinely loading.

## Interaction Checklist

Every interactive component should cover:

- default
- hover
- active/pressed when relevant
- focus-visible
- selected/current state
- disabled
- loading when relevant
- error when form validation applies

