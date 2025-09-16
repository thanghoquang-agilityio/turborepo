import type { Meta, StoryObj } from '@storybook/react'

import SelectMultiple from '@/components/common/SelectMultiple'
// Mocks
import { MOCK_CATEGORY_LIST } from '@/mocks'

const meta = {
  title: 'Components/SelectMultiple',
  tags: ['autodocs'],
  component: SelectMultiple,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof SelectMultiple>

export default meta
type Story = StoryObj<typeof SelectMultiple>

export const Default: Story = {
  args: {
    items: MOCK_CATEGORY_LIST,
    additionalClass: 'w-[200px]',
  },
}
