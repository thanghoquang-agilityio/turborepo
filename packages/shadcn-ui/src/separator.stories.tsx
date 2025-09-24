import type { Meta, StoryObj } from '@storybook/react'

import { Separator } from './separator'

const meta: Meta<typeof Separator> = {
  title: 'shadcn/Separator',
  component: Separator,
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-64">
      <div>Above</div>
      <Separator {...args} />
      <div>Below</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-16 items-center gap-4">
      <div>Left</div>
      <Separator orientation="vertical" className="h-full" />
      <div>Right</div>
    </div>
  ),
}


