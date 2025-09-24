import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { Button } from './button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'

const meta: Meta<typeof Collapsible> = {
  title: 'shadcn/Collapsible',
  component: Collapsible,
}

export default meta
export type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline">Toggle</Button>
        </CollapsibleTrigger>
        <div className="mt-2 w-64">
          <CollapsibleContent>
            <div className="rounded border p-3 text-sm">Hidden content</div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    )
  },
}
