import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from '@/components/Profile'

const meta = {
  title: 'Components/Profile',
  tags: ['autodocs'],
  component: Profile,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof Profile>

export const ProfileDefault: Story = {
  args: {
    src: 'sx',
    name: 'Scarlet Johnson',
    subText: 'Good Morning!',
  },
}
