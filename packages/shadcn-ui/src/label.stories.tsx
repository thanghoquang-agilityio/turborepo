import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './label'

const meta: Meta<typeof Label> = {
  title: 'shadcn/Label',
  component: Label,
}

export default meta
export type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Label htmlFor="name">Name</Label>
      <input id="name" className="border rounded p-1 text-sm" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="group flex items-center gap-2" data-disabled>
      <Label htmlFor="email">Email</Label>
      <input id="email" className="border rounded p-1 text-sm" disabled />
    </div>
  ),
}
