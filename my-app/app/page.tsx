import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Plus,
  Trash,
  MagnifyingGlass,
  Check,
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
    </div>
  )
}
