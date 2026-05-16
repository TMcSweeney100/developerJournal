# Dashboard Sidebar Scaffold — Design Spec

**Date:** 2026-05-16
**Scope:** Scaffold the dashboard route with the personalised sidebar. No widget content yet.

---

## Goal

Replace the current component-showcase root route with a real dashboard shell. The sidebar must be personalised for the DevLog app and visible on the dashboard page. All nav links are placeholder (`#`) — functionality is not in scope for this phase.

---

## File Structure

```
app/
  layout.tsx                ← unchanged (HTML root shell)
  page.tsx                  ← DELETED (component showcase, no longer needed)
  (dashboard)/
    layout.tsx              ← NEW: SidebarProvider + AppSidebar + SidebarInset wrapper
    page.tsx                ← NEW: dashboard placeholder page

components/
  app-sidebar.tsx           ← UPDATED: personalised nav data
```

The route group `(dashboard)` uses no URL segment. The root `/` resolves to `app/(dashboard)/page.tsx`.

---

## app/(dashboard)/layout.tsx

Wraps all dashboard routes. Renders:
- `SidebarProvider` (from `@/components/ui/sidebar`)
- `AppSidebar` (left column)
- `SidebarInset` (right main area, receives `children`)

No authentication logic. No data fetching.

---

## app/(dashboard)/page.tsx

Minimal scaffold. Contains:
- A sticky top header bar inside `SidebarInset`:
  - Left: `SidebarTrigger` (hamburger toggle)
  - Right: a non-functional `New Daily Log` button + date display (today's date, static)
- Below header: greeting block
  - Heading: "Good morning"
  - Sub-line: "Here's your progress for today."
- Main content area: empty `<main>` — no widgets yet

All content is static — no API calls, no state.

---

## app-sidebar.tsx — Personalisation

### Brand (SidebarHeader)
- Icon: `IconTerminal2` (tabler)
- Name: `"Dev Log"`

### navMain
| Title | Icon |
|---|---|
| Dashboard | `IconDashboard` |
| Daily Log | `IconNotebook` |
| Goals | `IconTarget` |
| Search | `IconSearch` |
| Standup | `IconPresentation` |
| Summaries | `IconFileText` |

### navLogs (recent log entries — placeholder)
Five placeholder entries using recent dates:
- May 15, 2026
- May 14, 2026
- May 13, 2026
- May 12, 2026
- May 9, 2026

Each entry links to `#` and uses `IconCalendar` as its icon (NavLogs currently requires an icon per item).

The `NavLogs` component also hardcodes the section label as `"Documents"` — update it to `"Recent Logs"` as part of this work.

### navSecondary
| Title | Icon |
|---|---|
| Settings | `IconSettings` |
| Help | `IconHelp` |

Search is removed from secondary (it moves to navMain).

### NavUser
- name: `"Tim McSweeney"`
- email: `"timmcsweeney50@gmail.com"`
- avatar: `""` (empty — initials fallback)

The `navClouds` data block in the current file is dead (not rendered anywhere) and will be removed.

---

## Out of Scope

- Dashboard widget cards (stat row, recent logs, weekly progress chart, quick actions)
- Functioning navigation links
- Authentication
- Real data from the backend
