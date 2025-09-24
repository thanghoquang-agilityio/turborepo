import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta: Meta<typeof Tabs> = {
  title: 'shadcn/Tabs',
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-80">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Change your password</TabsContent>
    </Tabs>
  ),
}


