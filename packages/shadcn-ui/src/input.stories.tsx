import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta: Meta<typeof Input> = {
  title: 'shadcn/Input',
  component: Input,
}

export default meta
export type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'Type here...' },
}

export const Invalid: Story = {
  args: { placeholder: 'Invalid input', 'aria-invalid': true },
}
