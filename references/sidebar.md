# DataDance Sidebar And User Menu

The sidebar is a strict DataDance rule. Prefer the shared `@datadance/ui` package / `packages/datadance-ui` implementation first, then the current local implementation in `src/components/Sidebar/index.jsx`, over the older Figma sidebar page. Also read `references/sidebar-implementation-policy.md` before implementing any sidebar.

When this skill is used outside the DataDance repo, do not merely describe, approximate, or manually translate the sidebar. Use the shared `DataDanceShell`/`DataDanceSidebar` component package where possible. If the package cannot be used, copy the package or source implementation with dependencies. A generic admin sidebar, shadcn sidebar, Arco Menu, marketing-style navigation, or hand-written static approximation is not acceptable.

For the right-side white work surface, browser-edge gutters, and global background, read `references/app-shell.md`. Those rules are not part of the sidebar itself.

Sidebar hard requirements:

- Sidebar is always present on DataDance desktop primary pages.
- Sidebar width is exactly `200px` expanded and `72px` collapsed.
- Page content should not create its own competing outer nav.

## Required Assets

Use the DataDance assets when available. If another project lacks them, copy equivalent assets from this repo or embed visually matching replacements:

- `/logo.png`
- `/expand-default.svg`
- `/expand-hover.svg`
- `/avatar.png`
- `/up.svg`
- `/menu-home.svg`
- `/menu-project-management.svg`
- `/menu-data-generation.svg`
- `/menu-model-evaluation.svg`
- `/menu-quality-management.svg`
- `/menu-template.svg`
- `/menu-asset-management.svg`
- `/menu-operator-management.svg`
- `/menu-user-management.svg`
- `/menu-tenant-management.svg`
- `/menu-interaction-demo.svg`
- `/user-setting-profile.svg`
- `/user-setting-permission.svg`
- `/user-setting-switch-tenant.svg`
- `/user-setting-language.svg`
- `/user-setting-timezone.svg`
- `/user-setting-clear-cache.svg`
- `/user-setting-logout.svg`

If the asset paths differ, keep the same visual size, hover behavior, and mask/color behavior.

## Icon Rendering Rule

Menu icons must be real icons, never black rectangles or placeholder blocks.

Preferred order:

1. Use `DataDanceSidebar` from `@datadance/ui` / `packages/datadance-ui`; it owns the icon assets and rendering.
2. If copying locally, copy the entire `packages/datadance-ui/src/assets` folder and import icons through JavaScript so the bundler returns valid URLs.
3. If assets cannot be copied, use stable lucide icons with equivalent meaning and 20px sidebar sizing.

Do not generate:

- Empty SVG files.
- SVG files containing only a filled rectangle as a placeholder.
- CSS-only icon boxes.
- `span` elements with a colored background and `mask: url(...)` when the URL may fail; a missing mask renders as a solid rectangle.
- Raw `/menu-*.svg` paths unless those files are actually present in the target project's public/assets path.

For fallback implementations, render icons as inline SVG React components or `<img alt="" aria-hidden="true" />` with real imported assets. Verify normal, hover, and active states show icon silhouettes rather than filled squares.

## Dimensions

- Expanded width: 200px.
- Collapsed width: 72px.
- Full height: 100% viewport.
- Header/logo area height: 76px.
- Expanded menu horizontal padding: 16px.
- Collapsed menu horizontal padding: 16px.
- Sidebar background: `#EFF3F6` via `bg-sidebar` or equivalent.
- Sidebar root classes should be equivalent to: `relative h-full flex flex-col flex-shrink-0 bg-[#EFF3F6] transition-[width,padding] duration-300 ease-in-out z-10 group/sidebar`.

## Logo Behavior

Expanded:

- Logo icon: 22px by 22px.
- Text: `DataDance`, 18px, semibold, gray/primary text.
- Logo group left offset: 16px.
- Collapse button appears at right, 28px square.

Collapsed:

- Logo icon: 28px by 28px.
- Text hidden.
- Hovering logo area reveals expand affordance.
- Clicking logo/expand affordance expands the sidebar.

Use existing public assets when available:

- `/logo.png`
- `/expand-default.svg`
- `/expand-hover.svg`
- `/avatar.png`
- menu icons in `/public/menu-*.svg`

## Menu Behavior

- Menu supports top-level items and accordion submenus.
- Default menu data should follow this structure unless the product has its own equivalent information architecture:
  - 首页
  - 项目管理
  - 数据生产: 任务列表, 我的任务, 组别管理
  - 模型评估: 题库管理, 抓取任务, 任务列表, 我的任务, 评估报告, 人员标签, 数据可视化
  - 质量管理: 申诉中心
  - 模板管理
  - 资产管理
  - 算子管理
  - 用户管理: 标签管理, 团队管理
  - 租户管理
- Expanded state:
  - Parent rows show icon, label, and arrow if they have children.
  - Only one parent submenu is expanded at a time.
  - Active submenu row uses light primary background, primary text, and medium weight.
  - Submenu item padding: `10px 12px 10px 40px`.
  - Submenu item font: 14px / 22px.
- Top-level menu item:
  - Expanded row height: 40px.
  - Expanded row radius: 8px.
  - Expanded icon: 16px.
  - Expanded label: 14px / 22px.
  - Expanded horizontal gap: 10px-12px.
  - Default text/icon: `#555B65` or `#3F3F51`.
  - Hover: `var(--primary-bg-hover)` background and `var(--primary-color)` icon/text.
  - Active: `var(--primary-bg-hover)` background, `var(--primary-color)` text/icon, medium weight.
- Collapsed state:
  - Width remains 72px.
  - Top-level icon rows are centered.
  - Active parent can indicate active child.
  - Hover can reveal affordance/tooltip.
  - Collapsed icon hit area is 40px by 40px with 8px radius.

Transitions:

- Width/padding transition duration: about 300ms.
- Submenu max-height/opacity transition: about 300ms.

## User Profile Area

Expanded:

- Container: 164px by 56px.
- Padding: 8px.
- Avatar: 32px.
- Name: 14px / 20px, medium, `#0B0B0F`.
- Secondary line: 12px / 20px, muted.
- Hover background: primary hover surface.

Collapsed:

- Profile area width: 72px.
- Avatar: 40px.
- User text hidden.

The user profile area is mandatory; do not omit it for generated apps. Use placeholder user data if the product does not provide a real user.

## User Menu Popup

Triggered by hover on the profile area.

- Render with a portal or top-level overlay to avoid clipping.
- Width: 196px.
- Padding: 8px.
- Gap between groups: 8px.
- Radius: 8px.
- Background: white.
- Shadow: `0 15px 35px -2px rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.05)`.
- Separator: 1px `#E2E5F1`, full popup width with negative horizontal margin if needed.

Menu item:

- Padding: 12px.
- Gap: 12px.
- Radius: 8px.
- Icon: 16px.
- Text: 14px / 22px.
- Default text/icon: `#3F3F51`.
- Hover: primary text/icon and primary light background.
- Destructive item: `#F53F3F`; hover background `#FFF5F6`.
- Items with submenus show a right arrow.

Hover timing:

- Keep popup open while pointer moves between profile, popup, and submenu.
- Small debounce around 50-150ms prevents flicker.

Required user menu groups:

- Group 1: 个人信息, 权限申请
- Group 2: 切换租户, 切换语言, 更换时区
- Group 3: 清除缓存, 退出登录

Use separators between groups. Destructive `退出登录` uses danger color.

## Tooltip

Use dark tooltip for sidebar collapse/expand affordances:

- Background: `#2B303A`.
- Text: white, 13px / 22px.
- Padding: 8px horizontal, 6px vertical.
- Radius: 4px.
- Include a small arrow pointing to the trigger.

## Implementation Checklist

Before finishing a generated page, verify:

- The root shell uses `#EFF3F6`, `8px` gutter, and white rounded main panel.
- Sidebar starts collapsed at `72px` unless the app explicitly asks for expanded default.
- Clicking collapsed logo expands the sidebar.
- Expanded sidebar shows DataDance logo text and a collapse button.
- Parent menu accordion opens one group at a time.
- Active menu item follows the current route.
- User profile hover opens the DataDance user menu.
- No generic sidebar/menu component is visible.
- No hand-written approximate static sidebar is visible.

## Required Sidebar Acceptance Check

Run this check before declaring any DataDance page complete. Use DOM inspection, screenshots, or manual browser verification depending on the project setup.

Structure:

- `DataDanceShell` or equivalent wraps the whole page.
- There is exactly one left sidebar.
- The main work surface is white, has `12px` radius, and sits inside `#EFF3F6`.
- The main work surface keeps `8px` top/right/bottom browser-edge gutters.

Dimensions:

- Collapsed sidebar width is `72px`.
- Expanded sidebar width is `200px`.
- Top-level menu rows are `40px` high.
- Expanded menu icons are visually `16px-20px`.
- User avatar is `40px` collapsed and `32px` expanded.

Icon rendering:

- Every top-level menu row displays a recognizable icon silhouette.
- No menu icon appears as a black rectangle, empty square, missing image icon, or solid block.
- Hover and active states recolor the icon or otherwise match the DataDance primary state.
- If icons are loaded from files, those files are bundled/imported by the project and not referenced as broken `/menu-*.svg` paths.

Interactions:

- Clicking the collapsed logo/expand affordance expands the sidebar.
- Clicking the collapse affordance returns to the collapsed sidebar.
- Parent menu rows with children open/collapse an accordion.
- Only one parent submenu is open at a time unless the product explicitly requires otherwise.
- Active route highlights the correct parent or child item.
- Collapsed submenu hover/flyout remains usable and does not clip.
- Profile hover opens the user menu.
- User menu remains open while moving from profile to popup, then closes after pointer leaves.
- User menu groups and destructive logout styling match the DataDance rules.
- Collapsed parent menu rows do not show submenu arrows.
- Expanded parent menu rows show arrows only for items with children.
- The expanded top-right collapse button icon matches the current DataDance component or exact same source icon.

Visual comparison:

- Capture or inspect collapsed sidebar.
- Capture or inspect expanded sidebar.
- Capture or inspect top-level hover state.
- Capture or inspect expanded submenu and active child state.
- Capture or inspect user profile hover menu.
- Compare against the current `@datadance/ui` / DataDance source implementation when possible.

Failure handling:

- If any check fails, fix the package import/copy first.
- Do not replace the sidebar with a newly hand-written approximation.
- Do not finish the task with a generic admin sidebar.
- Do not finish the task if the sidebar only passes width/DOM checks but fails visual details.
