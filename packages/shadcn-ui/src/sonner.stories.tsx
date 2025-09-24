import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { Toaster, toast } from './sonner'

const meta: Meta<typeof Toaster> = {
  title: 'shadcn/Sonner',
  component: Toaster,
}

export default meta
export type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Button onClick={() => toast.success('Saved successfully!')}>Toast</Button>
      <Toaster />
    </div>
  ),
}
