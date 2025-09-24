import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './textarea'

const meta: Meta<typeof Textarea> = {
  title: 'shadcn/Textarea',
  component: Textarea,
}

export default meta
export type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: { placeholder: 'Write something…', rows: 4 },
}
