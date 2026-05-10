import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  PageHeading,
  PageHeadingContent,
  PageHeadingEyebrow,
  PageHeadingTitle,
  PageHeadingDescription,
  PageHeadingActions,
} from "@/components/ui/page-heading"
import {
  ArrowRight,
  Plus,
  Trash,
  MagnifyingGlass,
  Check,
  EnvelopeSimple,
  Lock,
} from "@phosphor-icons/react/dist/ssr"

const variants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const

const sizes = ["xs", "sm", "default", "lg"] as const
const iconSizes = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">

      {/* ── PAGE HEADING ── */}
      <section className="mb-12">
        <h2 className="px-10 pb-4 pt-10 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Page Heading
        </h2>

        <div className="mb-6">
          <p className="px-10 pb-3 text-xs text-muted-foreground">With title, description, and actions</p>
          <PageHeading>
            <PageHeadingContent>
              <PageHeadingEyebrow>Dashboard</PageHeadingEyebrow>
              <PageHeadingTitle>Daily Logs</PageHeadingTitle>
              <PageHeadingDescription>
                Track what you worked on, learned, and found difficult each day.
              </PageHeadingDescription>
            </PageHeadingContent>
            <PageHeadingActions>
              <Button variant="outline">Export</Button>
              <Button>New Log</Button>
            </PageHeadingActions>
          </PageHeading>
        </div>

        <div className="mb-6">
          <p className="px-10 pb-3 text-xs text-muted-foreground">Title only</p>
          <PageHeading>
            <PageHeadingContent>
              <PageHeadingTitle>Goals</PageHeadingTitle>
            </PageHeadingContent>
          </PageHeading>
        </div>
      </section>

      <div className="p-10">
      <h1 className="mb-2 text-2xl font-semibold text-foreground">
        Button Showcase
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">
        shadcn/ui buttons — all variants, sizes, and states
      </p>

      {/* Variants × Sizes */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Variants &amp; Sizes
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-28 pb-3 text-left text-xs font-medium text-muted-foreground">
                  Variant
                </th>
                {sizes.map((s) => (
                  <th
                    key={s}
                    className="pb-3 text-left text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {variants.map((v) => (
                <tr key={v} className="border-t border-border">
                  <td className="py-3 pr-4 text-xs text-muted-foreground">
                    {v}
                  </td>
                  {sizes.map((s) => (
                    <td key={s} className="py-3 pr-6">
                      <Button variant={v} size={s}>
                        Label
                      </Button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          With Icons
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Plus />
            New Entry
          </Button>
          <Button variant="secondary">
            Save
            <Check />
          </Button>
          <Button variant="outline">
            Search
            <MagnifyingGlass />
          </Button>
          <Button variant="destructive">
            <Trash />
            Delete
          </Button>
          <Button variant="ghost">
            Continue
            <ArrowRight />
          </Button>
          <Button variant="link">
            View all
            <ArrowRight />
          </Button>
        </div>
      </section>

      {/* Icon-only buttons */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Icon Only
        </h2>
        <div className="flex flex-wrap items-end gap-4">
          {iconSizes.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Button size={s} variant="default" aria-label="Add">
                <Plus />
              </Button>
              <span className="text-xs text-muted-foreground">{s}</span>
            </div>
          ))}
          <div className="ml-4 flex gap-2">
            <Button size="icon" variant="outline" aria-label="Search">
              <MagnifyingGlass />
            </Button>
            <Button size="icon" variant="ghost" aria-label="Delete">
              <Trash />
            </Button>
            <Button size="icon" variant="destructive" aria-label="Delete">
              <Trash />
            </Button>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Disabled State
        </h2>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <Button key={v} variant={v} disabled>
              {v}
            </Button>
          ))}
        </div>
      </section>

      {/* ── INPUT ── */}
      <h1 className="mb-2 mt-16 text-2xl font-semibold text-foreground">
        Input Showcase
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">
        shadcn/ui inputs — states and common patterns
      </p>

      {/* Basic states */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          States
        </h2>
        <div className="flex max-w-sm flex-col gap-3">
          <Input placeholder="Default" />
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Read only" readOnly value="Read-only value" />
          <Input aria-invalid placeholder="Error state" />
          <Input type="password" placeholder="Password" />
          <Input type="file" />
        </div>
      </section>

      {/* With labels */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          With Labels
        </h2>
        <div className="flex max-w-sm flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Email</label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Password</label>
            <Input type="password" placeholder="••••••••" />
            <p className="text-xs text-muted-foreground">Must be at least 8 characters.</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-destructive">Email</label>
            <Input aria-invalid type="email" placeholder="you@example.com" />
            <p className="text-xs text-destructive">Please enter a valid email address.</p>
          </div>
        </div>
      </section>

      {/* Input + Button combos */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          With Button
        </h2>
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex gap-2">
            <Input placeholder="Search logs…" />
            <Button variant="outline" size="icon" aria-label="Search">
              <MagnifyingGlass />
            </Button>
          </div>
          <div className="flex gap-2">
            <Input type="email" placeholder="Subscribe to updates" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* ── CARD ── */}
      <h1 className="mb-2 mt-16 text-2xl font-semibold text-foreground">
        Card Showcase
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">
        shadcn/ui cards — structure and common patterns
      </p>

      {/* Basic card */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Basic
        </h2>
        <div className="flex flex-wrap gap-6">
          <Card className="w-72">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>A short description of the card content goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground">This is the main content area of the card.</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Confirm</Button>
              <Button size="sm" variant="outline">Cancel</Button>
            </CardFooter>
          </Card>

          {/* Header only */}
          <Card className="w-72">
            <CardHeader>
              <CardTitle>Header Only</CardTitle>
              <CardDescription>No content or footer — just a header.</CardDescription>
            </CardHeader>
          </Card>

          {/* No footer */}
          <Card className="w-72">
            <CardHeader>
              <CardTitle>Without Footer</CardTitle>
              <CardDescription>Card with header and content but no footer.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Content lives here.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* With form */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          With Form
        </h2>
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>Enter your credentials to continue.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Sign in
              <ArrowRight />
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Destructive / alert card */}
      <section className="mb-12">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Destructive
        </h2>
        <Card className="w-80 border-destructive/30">
          <CardHeader>
            <CardTitle className="text-destructive">Delete account</CardTitle>
            <CardDescription>This action cannot be undone.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All your data will be permanently removed from our servers.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="destructive">
              <Trash />
              Delete
            </Button>
            <Button variant="outline">Cancel</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
    </div>
  )
}
