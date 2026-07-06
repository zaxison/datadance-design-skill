# DataDance App Shell

The app shell is a strict DataDance layout rule and is separate from the sidebar component. The sidebar controls navigation. The app shell controls the browser-edge gutters, the global background, and the main work surface.

Use the shared `DataDanceShell` from `@datadance/ui` whenever available. It combines the required `DataDanceSidebar` with the required main work surface.

If a page intentionally does not need the DataDance sidebar, it must still use the DataDance work surface rules unless the user explicitly requests a different layout.

## Required Desktop Shell

All DataDance desktop primary pages must use this layout:

```jsx
<div className="flex h-screen w-screen overflow-hidden bg-[#EFF3F6] text-[#1D2129]">
  <DataDanceSidebar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
  <main className="flex h-full flex-1 flex-col overflow-hidden py-[8px] pr-[8px]">
    <div className="relative flex flex-1 flex-col overflow-hidden rounded-[12px] bg-white">
      {page}
    </div>
  </main>
</div>
```

Hard requirements:

- App background outside the content panel is exactly `#EFF3F6`.
- Main work surface is white.
- Main work surface border radius is exactly `12px`.
- Main work surface has exactly `8px` distance from the browser top edge.
- Main work surface has exactly `8px` distance from the browser right edge.
- Main work surface has exactly `8px` distance from the browser bottom edge.
- There is no `8px` gap between the sidebar and the main work surface; the main surface starts immediately after the sidebar.
- The shell must fill the viewport: `100vw` by `100vh`, with hidden outer overflow.
- Page content should scroll inside the white work surface, not on the browser body.

## Component Package Contract

When `@datadance/ui` or a local `packages/datadance-ui` copy is available, generated apps must use:

```jsx
import { DataDanceShell } from '@datadance/ui';
import '@datadance/ui/styles.css';

export default function App() {
  return (
    <DataDanceShell activePath={location.pathname} onNavigate={navigate}>
      <Page />
    </DataDanceShell>
  );
}
```

Do not recreate the outer shell with ad hoc CSS when the package is available.

## Verification Checklist

Before finishing a generated page, verify:

- The outermost app area is `#EFF3F6`.
- The white work surface has `12px` radius.
- The visible browser-edge gutters are `8px` on top, right, and bottom.
- The white work surface is not replaced with a full-bleed generic dashboard canvas.
- The page does not add a second competing background or shell inside the work surface.
