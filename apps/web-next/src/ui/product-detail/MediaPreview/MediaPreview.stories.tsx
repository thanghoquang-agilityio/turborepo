import type { Meta, StoryObj } from '@storybook/react'

import { IMAGE_DEFAULT } from '@/constants'

import MediaPreview from '.'

const meta = {
  title: 'Components/MediaPreview',
  tags: ['autodocs'],
  component: MediaPreview,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MediaPreview>

export default meta
type Story = StoryObj<typeof MediaPreview>

export const SingleImage: Story = {
  args: { images: [IMAGE_DEFAULT] },
}

export const MultipleImage: Story = {
  args: {
    images: [IMAGE_DEFAULT, IMAGE_DEFAULT, IMAGE_DEFAULT, IMAGE_DEFAULT],
  },
}
