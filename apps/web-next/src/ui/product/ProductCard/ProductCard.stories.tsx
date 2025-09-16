import type { Meta, StoryObj } from '@storybook/react'

import { MOCK_PRODUCT } from '@/mocks'
import ProductCard from '@/ui/product/ProductCard'

const meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  component: ProductCard,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  args: { ...MOCK_PRODUCT, image: '' },
}
