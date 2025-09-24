import type { Meta, StoryObj } from '@storybook/react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'
import { Button } from './button'

const meta: Meta<typeof Sheet> = {
  title: 'shadcn/Sheet',
  component: Sheet,
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Panel</SheetTitle>
          <SheetDescription>Some info in a side panel.</SheetDescription>
        </SheetHeader>
        <div className="p-4">Sheet body content.</div>
        <SheetFooter>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}


