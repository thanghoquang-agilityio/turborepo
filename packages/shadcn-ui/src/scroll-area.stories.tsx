import type { Meta, StoryObj } from '@storybook/react'

import { ScrollArea } from './scroll-area'

const meta: Meta<typeof ScrollArea> = {
  title: 'shadcn/ScrollArea',
  component: ScrollArea,
}

export default meta
type Story = StoryObj<typeof ScrollArea>

export const Default: Story = {
  render: () => (
    <div className="h-48 w-64">
      <ScrollArea className="h-full w-full">
        <div className="space-y-2 p-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="rounded bg-accent px-2 py-1 text-sm">
              Item {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
}


