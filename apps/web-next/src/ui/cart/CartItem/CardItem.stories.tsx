import type { Meta, StoryObj } from '@storybook/react'

import { MOCK_CART_ITEM } from '@/mocks'

import CartItem from '../CartItem'

const meta = {
  title: 'Components/CartItem',
  tags: ['autodocs'],
  component: CartItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CartItem>

export default meta
type Story = StoryObj<typeof CartItem>

export const Default: Story = {
  args: MOCK_CART_ITEM,
}
