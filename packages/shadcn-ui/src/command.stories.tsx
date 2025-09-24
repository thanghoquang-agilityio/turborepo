import type { Meta, StoryObj } from '@storybook/react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './command'

const meta: Meta<typeof CommandDialog> = {
  title: 'shadcn/Command',
  component: CommandDialog,
}

export default meta
export type Story = StoryObj<typeof CommandDialog>

export const Dialog: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <CommandDialog {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Settings</CommandItem>
          <CommandItem>Logout</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Help">
          <CommandItem>Docs</CommandItem>
          <CommandItem>Support</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
}
