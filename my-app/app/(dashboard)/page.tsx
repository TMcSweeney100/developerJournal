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
