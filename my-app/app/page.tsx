import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
    <div className="min-h-screen bg-background p-10 font-sans">
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
    </div>
  )
}
