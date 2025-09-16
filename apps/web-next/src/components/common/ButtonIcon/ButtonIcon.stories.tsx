import type { Meta, StoryObj } from '@storybook/react'

import { ButtonIcon } from '@/components/common/ButtonIcon'
import { HeartIcon, SavedIcon, ShoppingBagIcon, StarLineIcon } from '@/icons'

const meta = {
  title: 'Components/ButtonIcon',
  tags: ['autodocs'],
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonIcon>

export default meta
type Story = StoryObj<typeof ButtonIcon>

export const ButtonIconSolidSquare: Story = {
  args: {
    children: <SavedIcon />,
    variant: 'solid',
    size: 'sm',
    shape: 'square',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const ButtonIconLightCircle: Story = {
  args: {
    children: <ShoppingBagIcon />,
    variant: 'light',
    size: 'md',
    shape: 'circle',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const ButtonIconLightEllipse: Story = {
  args: {
    children: (
      <>
        <StarLineIcon customClass='w-4 h-4' /> 4.8
      </>
    ),
    variant: 'light',
    size: 'md',
    shape: 'ellipse',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const ButtonIconFadedSquare: Story = {
  args: {
    children: (
      <>
        <HeartIcon /> 109
      </>
    ),
    variant: 'faded',
    size: 'md',
    shape: 'square',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const ButtonIconGhostCircle: Story = {
  args: {
    children: <HeartIcon />,
    variant: 'ghost',
    size: 'sm',
    shape: 'circle',
    disabled: false,
  },

  argTypes: {
    onClick: { action: 'clicked' },
  },
}
