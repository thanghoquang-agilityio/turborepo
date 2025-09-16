import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '@/components/common/Text'

const meta = {
  title: 'Components/Text',
  tags: ['autodocs'],

  component: Text,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

export const TextPrimary: Story = {
  args: {
    children: 'Sideboard',
    variant: 'primary',
    size: 'sm',
    type: 'default',
  },
}

export const TextSecondary: Story = {
  args: {
    children: 'Content',
    variant: 'secondary',
    size: 'sm',
    type: 'default',
  },
}

export const TextTitle: Story = {
  args: {
    children: 'Title',
    variant: 'title',
    size: 'lg',
    type: 'default',
  },
}

export const TextSubTitle: Story = {
  args: {
    children: 'Sub Title',
    variant: 'subTitle',
    size: 'sm',
    type: 'default',
  },
}

export const TextSuccess: Story = {
  args: {
    children: 'Success',
    variant: 'success',
    size: 'sm',
    type: 'default',
  },
}

export const TextWarning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
    size: 'sm',
    type: 'default',
  },
}

export const TextError: Story = {
  args: {
    children: 'Error',
    variant: 'error',
    size: 'sm',
    type: 'default',
  },
}
