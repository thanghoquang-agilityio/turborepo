import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/common/Button'

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const ButtonSolid: Story = {
  args: {
    children: 'Add To Cart',
    variant: 'solid',
    size: 'sm',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const ButtonBordered: Story = {
  args: {
    children: 'Add Shortlist',
    variant: 'bordered',
    size: 'sm',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const ButtonLight: Story = {
  args: {
    children: '1',
    variant: 'light',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const ButtonLightActive: Story = {
  args: {
    children: '1',
    variant: 'light',
    disabled: true,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const ButtonFaded: Story = {
  args: {
    children: 'Previews',
    variant: 'faded',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const ButtonGhost: Story = {
  args: {
    children: '+',
    variant: 'ghost',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}
