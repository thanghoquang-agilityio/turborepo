import type { Meta, StoryObj } from '@storybook/react'

import OrderSummary from '../OrderSummary'

const meta = {
  title: 'Components/OrderSummary',
  tags: ['autodocs'],
  component: OrderSummary,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OrderSummary>

export default meta
type Story = StoryObj<typeof OrderSummary>

export const Default: Story = {
  args: {
    subTotal: 369,
    itemTotal: 3,
  },
  argTypes: {
    onPress: { action: 'checkout' },
  },
}
