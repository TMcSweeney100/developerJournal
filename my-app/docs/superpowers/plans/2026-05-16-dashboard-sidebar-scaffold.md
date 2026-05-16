# Dashboard Sidebar Scaffold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the component-showcase root route with a personalised DevLog sidebar rendered inside a proper Next.js App Router dashboard layout.

**Architecture:** A route group `app/(dashboard)/` owns a shared layout that mounts `SidebarProvider` + `AppSidebar` + `SidebarInset`. The dashboard page (`/`) is the only child for now. `app-sidebar.tsx` data is updated to match the DevLog domain; `NavLogs` section label is corrected.

**Tech Stack:** Next.js 16.2.5 App Router, React 19, shadcn/ui sidebar primitives (`SidebarProvider`, `SidebarInset`, `SidebarTrigger`), Tabler Icons, Phosphor Icons, Tailwind CSS 4.

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Modify | `components/NavLogs.tsx` | Change hardcoded label from "Documents" → "Recent Logs" |
| Modify | `components/app-sidebar.tsx` | Replace all placeholder data with DevLog-specific nav, brand, and user |
| Create | `app/(dashboard)/layout.tsx` | Sidebar shell: `SidebarProvider` + `AppSidebar` + `SidebarInset` |
| Create | `app/(dashboard)/page.tsx` | Dashboard placeholder: header bar + greeting |
| Delete | `app/page.tsx` | Component showcase — no longer needed |

---

## Task 1: Fix NavLogs section label

**Files:**
- Modify: `components/NavLogs.tsx:41`

- [ ] **Step 1: Change the label**

In `components/NavLogs.tsx` replace line 41:

```tsx
// Before
<SidebarGroupLabel>Documents</SidebarGroupLabel>

// After
<SidebarGroupLabel>Recent Logs</SidebarGroupLabel>
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd my-app && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/NavLogs.tsx
git commit -m "fix: rename NavLogs section label to Recent Logs"
```

---

## Task 2: Personalise app-sidebar.tsx

**Files:**
- Modify: `components/app-sidebar.tsx`

Replace the entire file with the following. Key changes:
- Import list trimmed to only what's used; adds `IconCalendar`, `IconFileText`, `IconNotebook`, `IconPresentation`, `IconTarget`, `IconTerminal2`
- All generic data replaced with DevLog domain data
- `navClouds` removed (was defined but never rendered)
- `data.documents` renamed to `data.navLogs` and updated to log entries

- [ ] **Step 1: Replace the file**

```tsx
"use client"

import * as React from "react"
import {
  IconCalendar,
  IconDashboard,
  IconFileText,
  IconHelp,
  IconNotebook,
  IconPresentation,
  IconSearch,
  IconSettings,
  IconTarget,
  IconTerminal2,
} from "@tabler/icons-react"

import { NavLogs } from "@/components/NavLogs"
import { NavMain } from "@/components/NavMain"
import { NavSecondary } from "@/components/NavSecondary"
import { NavUser } from "@/components/NavUser"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Tim McSweeney",
    email: "timmcsweeney50@gmail.com",
    avatar: "",
  },
  navMain: [
    { title: "Dashboard", url: "#", icon: IconDashboard },
    { title: "Daily Log", url: "#", icon: IconNotebook },
    { title: "Goals", url: "#", icon: IconTarget },
    { title: "Search", url: "#", icon: IconSearch },
    { title: "Standup", url: "#", icon: IconPresentation },
    { title: "Summaries", url: "#", icon: IconFileText },
  ],
  navLogs: [
    { name: "May 15, 2026", url: "#", icon: IconCalendar },
    { name: "May 14, 2026", url: "#", icon: IconCalendar },
    { name: "May 13, 2026", url: "#", icon: IconCalendar },
    { name: "May 12, 2026", url: "#", icon: IconCalendar },
    { name: "May 9, 2026", url: "#", icon: IconCalendar },
  ],
  navSecondary: [
    { title: "Settings", url: "#", icon: IconSettings },
    { title: "Help", url: "#", icon: IconHelp },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <IconTerminal2 className="size-5!" />
                <span className="text-base font-semibold">Dev Log</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavLogs items={data.navLogs} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd my-app && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/app-sidebar.tsx
git commit -m "feat: personalise sidebar with DevLog nav, brand, and user"
```

---

## Task 3: Create the dashboard layout

**Files:**
- Create: `app/(dashboard)/layout.tsx`

This layout wraps all dashboard routes. It mounts `SidebarProvider`, renders `AppSidebar` as the left column, and `SidebarInset` (a `<main>` element from shadcn) as the right column that receives page content via `children`.

- [ ] **Step 1: Create the directory and file**

Create `app/(dashboard)/layout.tsx` with:

```tsx
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd my-app && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add "app/(dashboard)/layout.tsx"
git commit -m "feat: add dashboard route group layout with sidebar shell"
```

---

## Task 4: Create the dashboard page

**Files:**
- Create: `app/(dashboard)/page.tsx`

The page renders inside `SidebarInset` (`<main>`). Do not add another `<main>` tag — use a fragment wrapper instead. Content: sticky header bar with `SidebarTrigger`, today's date, and a non-functional "New Daily Log" button; then a greeting block below.

- [ ] **Step 1: Create the file**

Create `app/(dashboard)/page.tsx` with:

```tsx
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Plus } from "@phosphor-icons/react/dist/ssr"

export default function DashboardPage() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <>
      <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-end gap-2">
          <span className="text-sm text-muted-foreground">{today}</span>
          <Button size="sm">
            <Plus />
            New Daily Log
          </Button>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div>
          <h1 className="text-2xl font-semibold">Good morning</h1>
          <p className="text-sm text-muted-foreground">
            Here&apos;s your progress for today.
          </p>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd my-app && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add "app/(dashboard)/page.tsx"
git commit -m "feat: add dashboard placeholder page with greeting and header"
```

---

## Task 5: Remove component showcase and verify

**Files:**
- Delete: `app/page.tsx`

The component showcase in `app/page.tsx` is replaced by `app/(dashboard)/page.tsx`. With the route group, `(dashboard)/page.tsx` resolves to `/` — deleting the old `app/page.tsx` prevents a route conflict.

- [ ] **Step 1: Delete the old page**

```bash
rm my-app/app/page.tsx
```

- [ ] **Step 2: Run the full build**

```bash
cd my-app && npm run build
```

Expected: build succeeds with no errors. The output should show route `/` compiled from `app/(dashboard)/page.tsx`.

- [ ] **Step 3: Start dev server and verify visually**

```bash
cd my-app && npm run dev
```

Open `http://localhost:3000`. Verify:
- Sidebar is visible on the left with "Dev Log" brand and `IconTerminal2`
- Nav items: Dashboard, Daily Log, Goals, Search, Standup, Summaries
- Recent Logs section shows five placeholder date entries with calendar icons
- Header bar shows `SidebarTrigger` (toggle button), today's date, and "New Daily Log" button
- "Good morning" greeting below the header
- Sidebar toggle (click the trigger button) collapses and expands the sidebar

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: complete dashboard sidebar scaffold"
```
