import type { Meta, StoryObj } from '@storybook/react'

import { Content } from '@/components/Content'

const meta = {
  title: 'Components/Content',
  tags: ['autodocs'],
  component: Content,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Content>

export default meta
type Story = StoryObj<typeof Content>

export const Default: Story = {
  args: {},
}
