import type { Meta, StoryObj } from '@storybook/react'

import { SRC_BANNER_HEADPHONE } from '@/constants'

import Banner from '../Banner'

const meta = {
  title: 'Components/Banner',
  tags: ['autodocs'],
  component: Banner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className='w-[1024px] min-w-[375px]'>
        <Story />
      </div>
    ),
  ],

  args: {
    image: SRC_BANNER_HEADPHONE,
    description: 'Grab Upto 50% Off On Selected Headphone',
  },
}
