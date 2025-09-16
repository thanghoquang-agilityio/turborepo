import type { Meta, StoryObj } from '@storybook/react'

import { Breadcrumb } from '@/components/Breadcrumb'
import { MOCK_BREADCRUMB_ITEMS } from '@/mocks'

const meta = {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: { items: MOCK_BREADCRUMB_ITEMS },
}
