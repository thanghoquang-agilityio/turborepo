import type { Meta, StoryObj } from '@storybook/react'

import RelatedInfo from '.'

const meta = {
  title: 'Components/RelatedInfo',
  tags: ['autodocs'],
  component: RelatedInfo,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RelatedInfo>

export default meta
type Story = StoryObj<typeof RelatedInfo>

export const RelatedInfoDefault: Story = {}
