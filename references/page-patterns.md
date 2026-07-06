# DataDance Page Patterns

## Page Levels

DataDance pages are split into two levels:

- Primary page: a page reached directly after clicking the sidebar menu.
- Secondary page: a page reached from a primary page by clicking a button, link, row action, card, or other entry.

Primary pages must use the standardized header from the DataDance standardized design specification, Figma page `header` (`8v0blpg1QYokdWihBG02gb`, node `1:48954`). Do not improvise the top structure on primary pages.

Header variants:

- `单按钮 + tab + 筛选`
- `多按钮 + tab + 筛选`
- `按钮 + 筛选`
- `tab + 筛选`
- `筛选`

Each variant has a title/subtitle version and a no-subtitle version. Choose the variant by actual page needs:

- Use `按钮 + 筛选` when a primary page has top actions and filter controls but no first-level tabs.
- Use `单按钮 + tab + 筛选` or `多按钮 + tab + 筛选` when tabs are part of the primary page information architecture.
- Use `tab + 筛选` when the page has tabs but no top action.
- Use `筛选` when the page only needs title plus filter controls.

Header implementation rules:

- Header surface is white.
- Header padding is 20px top, 20px horizontal, and 16px bottom.
- Header internal vertical gap is 16px.
- Title is 16px / 24px, medium, `#020814`.
- Primary header button is 32px high, 13px / 22px, with 16px horizontal padding and 6px radius.
- Filter row controls are 32px high.
- Filter controls use the Arco/Yuanli built-in label pattern: left label segment plus right input/select segment.
- Auxiliary filter/settings buttons are 32px square icon buttons with `#F6F8FA` fill and the standard button shadow.
- Do not add decorative badges, large subtitles, arbitrary borders, or custom header layouts to primary pages.

## List Page

Use for operational search, management, review, and task pages.

Structure:

1. DataDance sidebar on the left.
2. Main content area with white background.
3. Standardized primary-page header from Figma page `header`.
4. Optional first-level tabs with bottom indicator.
5. Filter row with search, select/date/status filters, and advanced filter entry.
6. Dense table with sticky operation column when needed.
7. Pagination at bottom right or table footer.

Canonical Figma examples:

- `示例页面-列表页`: frames named `列表页`, `一级页面/布局`.
- `交互演示`: interaction demo with collapsed sidebar.
- `配色试验田`: color variants; treat as exploratory, not the default source.

Implementation rules:

- Use the DataDance standardized design specification as the layout source. Do not replace this with a generic dashboard/list template.
- Keep controls 32px high.
- Keep table row height around 40px.
- Use 13px table text and 13px table headers.
- Use a white table surface with `#EAEDF1`/`#E2E5F1` borders.
- Table header background should be `#F6F7FA` or similar.
- Keep operation actions compact text links or icon buttons, not large buttons.

## Form/Create/Edit Page

Use for creation, configuration, and edit flows.

Canonical Figma examples:

- `示例页面-表单页`: frames named `二级页面/表单结构1`, `二级页面/表单结构2`, `二级页面/表单布局`, and `创建需求`.

Rules:

- Use the DataDance standardized design specification as the structure source for form pages.
- Prefer vertical label/input layout for internationalization.
- Label: 13px / 22px. Required marker has 4px gap to label text.
- Label to input gap: 4px.
- Use left-aligned form for most practical pages.
- Use centered form only for short, lightweight forms.
- Use full-width/grid form for complex multi-card or multi-column content.
- Keep page title compact with a back icon when inside a secondary page.
- Use a bottom or header action area with primary/secondary buttons.

Form types:

- Short form: few fields, lightweight creation, may also fit a modal or drawer.
- Long form: many fields, more immersive page.
- Step form: clear sections or data saved in steps.
- Complex form: multi-column, multi-card, or strong relationships between fields.

## Detail Page

Canonical Figma examples:

- `示例页面-详情页/任务管理动线调整`: frames named `任务详情`, `任务数据`, `任务统计`, `任务分配`, `任务分发`.

Rules:

- Keep action access close to the detail context.
- Do not force users to return to a list page to act on the current item.
- Provide compact title/action region, then tabs or detail sections.
- Use information groups, tables, and metrics in dense layouts.
- Keep destructive or irreversible actions visually available but not overemphasized.

## Modal And AI Fill

Canonical Figma examples:

- `示例页面-弹窗/AI填充`: frames named `弹窗`, with vertical-step dialog variants.

Rules:

- Use a dim overlay over the whole app.
- Dialog should be centered and sized to content; large modal examples are about 600px wide.
- Vertical-step dialogs may use a left step rail and right content region.
- Keep footer actions aligned right with 32px controls.
- Preserve keyboard and click-away expectations unless the flow is destructive.

## AI Suggestion And Assistant

Canonical Figma examples:

- `示例页面-AI建议/确认`: frames named `ai建议`, `AIDP助手`, and small loading/thinking components.
- `AI 助手`: visual assets and assistant-related imagery.

Rules:

- AI affordances should be helpful but compact.
- Assistant panel width in examples is about 328px.
- When assistant opens, main content may shrink; do not cover the table or form in a way that blocks normal work.
- Provide thinking/loading state, generated state, confirmation state, and dismiss/close state.
- Use DataDance primary color and light primary backgrounds for AI highlights.

## Empty And Error States

Canonical Figma examples:

- `缺省页`: `加载页面资源失败`, `未找到访问页面`, `搜索结果为空`, `暂无权限访问`.

Rules:

- Center the empty/error state inside the content region.
- Keep illustration modest.
- Include a short title and one clear action if recovery is possible.
- Avoid playful or marketing-style empty pages.
