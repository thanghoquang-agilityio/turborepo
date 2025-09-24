import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'shadcn/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Button', variant: 'default' },
}

export const Destructive: Story = {
  args: { children: 'Delete', variant: 'destructive' },
}

export const Outline: Story = {
  args: { children: 'Outline', variant: 'outline' },
}

export const Secondary: Story = {
  args: { children: 'Secondary', variant: 'secondary' },
}

export const Ghost: Story = {
  args: { children: 'Ghost', variant: 'ghost' },
}

export const Link: Story = {
  args: { children: 'Link', variant: 'link' },
}


