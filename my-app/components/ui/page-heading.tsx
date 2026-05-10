import * as React from "react"

import { cn } from "@/lib/utils"

function PageHeading({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-heading"
      className={cn(
        "flex flex-row items-end justify-between gap-4 border-b border-zinc-200 px-20 pb-10 pt-20",
        className
      )}
      {...props}
    />
  )
}

function PageHeadingContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-heading-content"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function PageHeadingEyebrow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-heading-eyebrow"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function PageHeadingTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="page-heading-title"
      className={cn(
        "text-4xl font-bold tracking-tight text-zinc-950",
        className
      )}
      {...props}
    />
  )
}

function PageHeadingDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="page-heading-description"
      className={cn("text-sm text-zinc-500", className)}
      {...props}
    />
  )
}

function PageHeadingActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-heading-actions"
      className={cn("flex shrink-0 items-center gap-3", className)}
      {...props}
    />
  )
}

export {
  PageHeading,
  PageHeadingContent,
  PageHeadingEyebrow,
  PageHeadingTitle,
  PageHeadingDescription,
  PageHeadingActions,
}
