import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from './sidebar'

const meta: Meta<typeof SidebarProvider> = {
  title: 'shadcn/Sidebar',
  component: SidebarProvider,
}

export default meta
export type Story = StoryObj<typeof SidebarProvider>

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar className="border-e">
        <SidebarHeader className="flex items-center justify-between">
          <div className="text-sm font-semibold">Brand</div>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Dashboard</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Settings</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="p-4">
          <Button>Page Action</Button>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}
