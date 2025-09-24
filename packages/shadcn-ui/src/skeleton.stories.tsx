import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'shadcn/Skeleton',
  component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  ),
}


