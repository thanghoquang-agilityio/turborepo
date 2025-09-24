import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

const meta: Meta<typeof Popover> = {
  title: 'shadcn/Popover',
  component: Popover,
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <p className="text-sm">This is some popover content.</p>
          <Button size="sm">Action</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}


