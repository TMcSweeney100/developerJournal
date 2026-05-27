# Daily Log Sheet Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a slide-in sheet form that lets the user create a daily log entry, wired up on the frontend only (submit logs to console; backend connection comes later).

**Architecture:** A single `DailyLogSheet` component owns the `Sheet` and the `react-hook-form` form inside it. The dashboard page (`app/(dashboard)/page.tsx`) manages open state with `useState` and passes `open`/`onOpenChange` props to the sheet. Three labeled sections — Today, Reflections, Tomorrow — group the 10 fields.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, shadcn/ui, react-hook-form, zod, @hookform/resolvers, Tailwind CSS

---

### Task 1: Install npm dependencies

**Files:**
- Modify: `package.json` (via npm install)

- [ ] **Step 1: Install react-hook-form, zod, and @hookform/resolvers**

Run from `my-app/`:
```bash
npm install react-hook-form zod @hookform/resolvers
```

Expected output: three packages added to `dependencies` in `package.json`.

- [ ] **Step 2: Verify installation**

```bash
node -e "require('react-hook-form'); require('zod'); require('@hookform/resolvers/zod'); console.log('ok')"
```

Expected: `ok`

---

### Task 2: Add shadcn components

**Files:**
- Create: `components/ui/form.tsx`
- Create: `components/ui/textarea.tsx`
- Create: `components/ui/slider.tsx`

- [ ] **Step 1: Add the Form component**

Run from `my-app/`:
```bash
npx shadcn add form
```

Expected: `components/ui/form.tsx` created.

- [ ] **Step 2: Add the Textarea component**

```bash
npx shadcn add textarea
```

Expected: `components/ui/textarea.tsx` created.

- [ ] **Step 3: Add the Slider component**

```bash
npx shadcn add slider
```

Expected: `components/ui/slider.tsx` created.

- [ ] **Step 4: Verify all three files exist**

```bash
ls components/ui/form.tsx components/ui/textarea.tsx components/ui/slider.tsx
```

Expected: all three paths printed, no errors.

---

### Task 3: Create DailyLogSheet skeleton

**Files:**
- Create: `components/DailyLogSheet.tsx`

- [ ] **Step 1: Create the skeleton file**

Create `components/DailyLogSheet.tsx`:

```tsx
"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

interface DailyLogSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DailyLogSheet({ open, onOpenChange }: DailyLogSheetProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[440px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>New Daily Log</SheetTitle>
          <SheetDescription>{today}</SheetDescription>
        </SheetHeader>
        <div className="px-4 py-4 text-sm text-muted-foreground">
          Form coming soon...
        </div>
      </SheetContent>
    </Sheet>
  )
}
```

- [ ] **Step 2: Check TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

### Task 4: Wire "New Daily Log" button to open the sheet

**Files:**
- Modify: `app/(dashboard)/page.tsx`

- [ ] **Step 1: Replace the dashboard page with this**

```tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Plus } from "@phosphor-icons/react/dist/ssr"
import { DailyLogSheet } from "@/components/DailyLogSheet"

export default function DashboardPage() {
  const [sheetOpen, setSheetOpen] = useState(false)

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
          <Button size="sm" onClick={() => setSheetOpen(true)}>
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
      <DailyLogSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </>
  )
}
```

- [ ] **Step 2: Start dev server and manually verify sheet opens**

```bash
npm run dev
```

Open `http://localhost:3000`. Click "New Daily Log". Expected: sheet slides in from the right showing "New Daily Log" title and today's date. Close it with the X button or by clicking outside. Expected: sheet closes cleanly.

- [ ] **Step 3: Check TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

### Task 5: Add zod schema and form skeleton

**Files:**
- Modify: `components/DailyLogSheet.tsx`

- [ ] **Step 1: Replace the file with the schema and form structure**

```tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  workedOn: z.string().min(1, "Please describe what you worked on"),
  tasksCompleted: z.string().optional(),
  blockers: z.string().optional(),
  difficulties: z.string().optional(),
  thingsLearned: z.string().optional(),
  toolsUsed: z.string().optional(),
  notesForTomorrow: z.string().optional(),
  confidenceRating: z.number().min(1).max(10).optional(),
})

type FormValues = z.infer<typeof formSchema>

interface DailyLogSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DailyLogSheet({ open, onOpenChange }: DailyLogSheetProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      workedOn: "",
      tasksCompleted: "",
      blockers: "",
      difficulties: "",
      thingsLearned: "",
      toolsUsed: "",
      notesForTomorrow: "",
      confidenceRating: 5,
    },
  })

  function onSubmit(values: FormValues) {
    const payload = {
      userId: 1,
      logDate: new Date().toISOString().split("T")[0],
      ...values,
    }
    console.log("Daily log payload:", payload)
    form.reset()
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[440px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>New Daily Log</SheetTitle>
          <SheetDescription>{today}</SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 px-4">

            {/* Today section — Task 6 */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-500">Today</h3>
              <p className="text-sm text-muted-foreground">Fields coming in Task 6...</p>
            </div>

            <Separator />

            {/* Reflections section — Task 7 */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-500">Reflections</h3>
              <p className="text-sm text-muted-foreground">Fields coming in Task 7...</p>
            </div>

            <Separator />

            {/* Tomorrow section — Task 8 */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-500">Tomorrow</h3>
              <p className="text-sm text-muted-foreground">Fields coming in Task 8...</p>
            </div>

            <SheetFooter className="pb-6">
              <SheetClose asChild>
                <Button type="button" variant="outline" onClick={() => form.reset()}>
                  Cancel
                </Button>
              </SheetClose>
              <Button type="submit" disabled={!form.formState.isValid}>
                Save Log
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
```

- [ ] **Step 2: Check TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

### Task 6: Build the Today section

**Files:**
- Modify: `components/DailyLogSheet.tsx`

- [ ] **Step 1: Replace the Today section placeholder with real fields**

Find this block in `components/DailyLogSheet.tsx`:
```tsx
{/* Today section — Task 6 */}
<div className="space-y-4">
  <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-500">Today</h3>
  <p className="text-sm text-muted-foreground">Fields coming in Task 6...</p>
</div>
```

Replace with:
```tsx
{/* Today section */}
<div className="space-y-4">
  <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-500">Today</h3>

  <FormField
    control={form.control}
    name="title"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Title <span className="text-destructive">*</span></FormLabel>
        <FormControl>
          <Input placeholder="e.g. Authentication refactor" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="workedOn"
    render={({ field }) => (
      <FormItem>
        <FormLabel>What did you work on? <span className="text-destructive">*</span></FormLabel>
        <FormControl>
          <Textarea placeholder="Describe what you worked on today..." rows={3} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="tasksCompleted"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Tasks completed</FormLabel>
        <FormControl>
          <Textarea placeholder="List tasks you completed..." rows={2} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</div>
```

- [ ] **Step 2: Add the missing imports at the top of the file**

Add these to the existing imports block:
```tsx
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
```

- [ ] **Step 3: Check TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Manually verify in browser**

Open the sheet. Expected: Title and "What did you work on?" show a red asterisk. Try clicking Save Log without filling them in — button should remain disabled. Fill in both required fields — Save Log button should become enabled.

---

### Task 7: Build the Reflections section

**Files:**
- Modify: `components/DailyLogSheet.tsx`

- [ ] **Step 1: Replace the Reflections section placeholder**

Find:
```tsx
{/* Reflections section — Task 7 */}
<div className="space-y-4">
  <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-500">Reflections</h3>
  <p className="text-sm text-muted-foreground">Fields coming in Task 7...</p>
</div>
```

Replace with:
```tsx
{/* Reflections section */}
<div className="space-y-4">
  <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-500">Reflections</h3>

  <FormField
    control={form.control}
    name="blockers"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Blockers</FormLabel>
        <FormControl>
          <Textarea placeholder="Any blockers you hit?" rows={2} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="difficulties"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Difficulties</FormLabel>
        <FormControl>
          <Textarea placeholder="What was difficult?" rows={2} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="thingsLearned"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Things learned</FormLabel>
        <FormControl>
          <Textarea placeholder="What did you learn today?" rows={2} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="toolsUsed"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Tools used</FormLabel>
        <FormControl>
          <Textarea placeholder="Libraries, tools, frameworks..." rows={2} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</div>
```

- [ ] **Step 2: Check TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

### Task 8: Build the Tomorrow section

**Files:**
- Modify: `components/DailyLogSheet.tsx`

- [ ] **Step 1: Replace the Tomorrow section placeholder**

Find:
```tsx
{/* Tomorrow section — Task 8 */}
<div className="space-y-4">
  <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-500">Tomorrow</h3>
  <p className="text-sm text-muted-foreground">Fields coming in Task 8...</p>
</div>
```

Replace with:
```tsx
{/* Tomorrow section */}
<div className="space-y-4">
  <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-500">Tomorrow</h3>

  <FormField
    control={form.control}
    name="notesForTomorrow"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Notes for tomorrow</FormLabel>
        <FormControl>
          <Textarea placeholder="What are you picking up tomorrow?" rows={2} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="confidenceRating"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Confidence rating — {field.value}/10</FormLabel>
        <FormControl>
          <Slider
            min={1}
            max={10}
            step={1}
            value={[field.value ?? 5]}
            onValueChange={([val]) => field.onChange(val)}
            className="py-2"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</div>
```

- [ ] **Step 2: Add Slider import**

Add to the existing imports block:
```tsx
import { Slider } from "@/components/ui/slider"
```

- [ ] **Step 3: Check TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Manually verify the full form in browser**

Open the sheet and scroll through it. Check:
- Three section headings (Today / Reflections / Tomorrow) appear in blue
- Separator lines divide the sections
- Confidence rating slider starts at 5 and the label updates as you drag it
- All Textarea fields are present and accept input

---

### Task 9: Final verification

**Files:** none

- [ ] **Step 1: Run the dev server**

```bash
npm run dev
```

- [ ] **Step 2: Full happy-path check**

1. Click "New Daily Log" — sheet slides in from the right
2. Sheet header shows "New Daily Log" and today's date (e.g. "Tuesday, May 27, 2026")
3. Save Log button is **disabled**
4. Fill in Title and "What did you work on?" — Save Log becomes **enabled**
5. Fill in a few optional fields
6. Drag the confidence rating slider — label shows the selected number
7. Click Save Log
8. Open browser DevTools console — verify the payload is logged:
   ```json
   {
     "userId": 1,
     "logDate": "2026-05-27",
     "title": "...",
     "workedOn": "...",
     ...
     "confidenceRating": 7
   }
   ```
9. Sheet closes and form resets

- [ ] **Step 3: Cancel check**

Open the sheet, type something in Title, click Cancel. Reopen the sheet — form should be blank.

- [ ] **Step 4: Final TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.
