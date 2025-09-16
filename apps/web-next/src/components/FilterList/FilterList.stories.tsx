import type { Meta, StoryObj } from '@storybook/react'

import FilterList from '@/components/FilterList'
// Mocks
import { MOCK_CATEGORY_LIST } from '@/mocks'

const meta = {
  title: 'Components/FilterList',
  tags: ['autodocs'],
  component: FilterList,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof FilterList>

export default meta
type Story = StoryObj<typeof FilterList>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className='mt-5 w-[304px] rounded-medium border-medium border-background-300 p-4'>
        <Story />
      </div>
    ),
  ],

  args: {
    title: 'Category',
    isOpen: true,
    items: MOCK_CATEGORY_LIST,
  },
}
