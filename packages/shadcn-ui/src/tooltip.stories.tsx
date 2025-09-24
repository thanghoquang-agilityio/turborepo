import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'shadcn/Tooltip',
  component: Tooltip,
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
}


