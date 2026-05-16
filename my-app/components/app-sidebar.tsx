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
