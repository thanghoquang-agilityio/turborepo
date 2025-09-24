import type { Meta, StoryObj } from '@storybook/react'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from './select'

const meta: Meta<typeof Select> = {
  title: 'shadcn/Select',
  component: Select,
}

export default meta
export type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select defaultValue="apple">
      <SelectTrigger className="min-w-40">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectSeparator />
          <SelectItem value="kiwi">Kiwi</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
