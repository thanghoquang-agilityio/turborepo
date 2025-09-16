// Libs
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { CustomImage } from '@/components/CustomImage'

const meta = {
  title: 'Components/CustomImage',
  tags: ['autodocs'],
  component: CustomImage,
  argTypes: {
    className: {
      description: 'Class of custom image',
    },
    src: {
      description: 'Source of custom image',
    },
    width: {
      description: 'Width of custom image',
    },
    height: {
      description: 'Height of custom image',
    },
    alt: {
      description: 'Alt text of custom image',
    },
  },
} as Meta<typeof CustomImage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'rounded-md',
    src: '',
    width: 400,
    height: 300,
    alt: 'Product Image',
  },
}
