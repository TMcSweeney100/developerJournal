# Daily Log Creation Form — Design Spec

**Date:** 2026-05-27
**Phase:** 2 — Daily Logs Frontend
**Status:** Approved

---

## Overview

A slide-in sheet form that lets the user create a daily log entry. Frontend only for now — the submit handler logs to the console. The backend connection (`POST /api/logs`) is wired up in a later session.

---

## Surface

The form lives inside a shadcn `Sheet` component that slides in from the right edge of the screen. The dashboard remains visible behind it. It is triggered by the "New Daily Log" button in the dashboard header (`app/(dashboard)/page.tsx`).

The dashboard page controls open state via `useState`, passing `open` and `onOpenChange` props down to the sheet component.

---

## Component

**One new file:** `components/DailyLogSheet.tsx`

Props:
```ts
interface DailyLogSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}
```

The component is a client component (`"use client"`). It owns the `Sheet`, the `Form`, and all form fields.

---

## Form Fields

`userId` (hardcoded `1`) and `logDate` (today's date as `YYYY-MM-DD`) are injected automatically and not shown in the UI.

The sheet header displays today's date as a read-only label.

Fields are grouped into three labeled sections:

### Today
| Field | Component | Required |
|-------|-----------|----------|
| Title | `Input` | Yes |
| What did you work on? | `Textarea` | Yes |
| Tasks completed | `Textarea` | No |

### Reflections
| Field | Component | Required |
|-------|-----------|----------|
| Blockers | `Textarea` | No |
| Difficulties | `Textarea` | No |
| Things learned | `Textarea` | No |
| Tools used | `Textarea` | No |

### Tomorrow
| Field | Component | Required |
|-------|-----------|----------|
| Notes for tomorrow | `Textarea` | No |
| Confidence rating | `Slider` (1–10) | No |

---

## State Management

Uses `react-hook-form` + `zod`.

**Zod schema** validates:
- `title` — non-empty string
- `workedOn` — non-empty string
- All other fields — optional strings / optional number

**`useForm` defaultValues:**
```ts
{
  title: "",
  workedOn: "",
  tasksCompleted: "",
  blockers: "",
  difficulties: "",
  thingsLearned: "",
  toolsUsed: "",
  notesForTomorrow: "",
  confidenceRating: 5,
}
```

---

## Submit Behaviour (Frontend Only)

The `onSubmit` handler receives the validated form data, merges in `userId: 1` and `logDate: today`, and `console.log`s the full payload. This is the exact spot to replace with a `fetch` call to `POST /api/logs` in the backend integration session.

The Save button is disabled while required fields are empty (`formState.isValid`). On submit, the sheet closes and the form resets.

---

## Footer

- **Cancel** — closes the sheet, resets the form
- **Save Log** — submits; disabled until form is valid

---

## Future Considerations (out of scope for this session)

- Bookmarkable daily log URL (`/logs/today`) that opens with today's date pre-filled and read-only
- Separate page for logging past dates
- Conditional rendering of optional fields
- Backend integration via `POST /api/logs`
