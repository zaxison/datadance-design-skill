# DataDance Visual Language

## Character

DataDance is a dense desktop operation product. Interfaces should feel clear, restrained, efficient, and production-ready. The main screen should be the actual tool surface: sidebar, header, filter controls, content area, table/form/detail panel, and relevant actions.

Avoid marketing-style composition, oversized decorative panels, huge hero typography, large rounded cards, and ornamental gradients.

## Core Tokens

Use local CSS variables when present:

```css
--primary-color: #5364FF;
--primary-light: #F0F2FF;
--primary-bg-hover: /* local primary hover surface */;
--primary-bg-light: /* local light primary surface */;
--color-sidebar: #EFF3F6;
--color-border: #E5E6EB;
```

Fallback token values:

- Primary: `#5364FF`
- Link/action blue: `#2166FF` or `#0D6EFD` when matching existing pages
- Primary text: `#1D2129` or `#0B0B0F`
- Strong title text: `#020814`
- Secondary text: `#4E5969`, `#555B65`, `#3F3F51`
- Tertiary text: `#86909C`, `#737A87`, `#BBBDD8`
- Placeholder: `#86909C`
- Border: `#E5E6EB`, `#E2E5F1`, `#EAEDF1`, `#DDE2EA`
- Page subtle fill: `#F7F8FA`, `#F6F8FA`, `#F6F7FA`, `#F7F9FC`
- Control hover fill: `#F2F3F5`, `#F2F3F8`, `#F1F2F9`
- Danger: `#F53F3F`
- Warning: `#FF7D00`
- Success: `#00AA2A` or `#2BA471`

## Typography

- Font stack: `PingFang SC`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`, sans-serif.
- Body text: 14px / 22px.
- Auxiliary labels and metadata: 13px / 20px or 13px / 22px.
- Page title: 16px-18px, semibold.
- Section heading: 14px-16px, medium or semibold.
- Table header: 13px, bold or 600.
- Button text: 14px / 22px.

Use compact typography. Do not use hero-scale type inside operational pages.

## Layout Rhythm

Common dimensions from DataDance examples:

- App frame: 1440x900 is the canonical design target.
- Expanded sidebar: 200px wide.
- Collapsed sidebar: 72px wide.
- Main content width with expanded sidebar in 1440px: about 1200px.
- Main content width with collapsed sidebar in 1440px: about 1320-1328px.
- Header title/action region: 54px high in list examples.
- Tabs row: 32px high.
- Filter row: 32px high.
- Table body example: 600-640px high.
- Compact control height: 32px.
- Dialog action/footer controls: 32-34px high.
- User avatar in expanded sidebar: 32px; collapsed sidebar: 40px.

Spacing defaults:

- Page horizontal padding after sidebar: 20px-24px.
- Header/filter/table stacked gap: 12px-16px.
- Toolbar item gap: 8px-12px.
- Form label to input gap in vertical layout: 4px.
- Form fields vertical gap: 16px-20px.
- Popup menu padding: 8px.
- Popup item padding: 12px.

## Shape And Shadow

- Normal controls: 4px radius.
- Menu rows and medium controls: 8px radius.
- Dialogs: 6px-8px radius.
- User profile card: 8px-12px radius when matching existing implementation.
- Avoid large pill shapes except avatars, tags, and explicit pill controls.

Shadows should be subtle and functional:

- Popup/dropdown: `0 8px 24px rgba(29,33,41,0.12)` or the sidebar menu shadow.
- User menu: `0 15px 35px -2px rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.05)`.
- Avoid heavy card shadows across the page.

## Color Use

Use primary color for:

- Primary buttons.
- Active tabs.
- Active sidebar item.
- Focus border.
- Links and table actions.
- AI affordances when the page includes assistant behavior.

Use neutral surfaces for most layout. Page should not read as a one-color purple/blue composition; primary color is an accent, not a background wash.

