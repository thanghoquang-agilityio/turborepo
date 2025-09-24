import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'shadcn/Avatar',
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage alt="avatar" src="https://i.pravatar.cc/300" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}


