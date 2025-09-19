import type { Meta, StoryObj } from '@storybook/react'
import { ButtonIcon } from './button-icon'

// Mock icons for demonstration
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const meta: Meta<typeof ButtonIcon> = {
  title: 'NextUI/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'bordered', 'light', 'faded', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'ellipse'],
    },
    disabled: {
      control: 'boolean',
    },
    additionalClass: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <PlusIcon />,
  },
}

export const Solid: Story = {
  args: {
    children: <PlusIcon />,
    variant: 'solid',
  },
}

export const Bordered: Story = {
  args: {
    children: <HeartIcon />,
    variant: 'bordered',
  },
}

export const Light: Story = {
  args: {
    children: <SearchIcon />,
    variant: 'light',
  },
}

export const Faded: Story = {
  args: {
    children: <PlusIcon />,
    variant: 'faded',
  },
}

export const Ghost: Story = {
  args: {
    children: <HeartIcon />,
    variant: 'ghost',
  },
}

export const SmallSize: Story = {
  args: {
    children: <PlusIcon />,
    size: 'sm',
  },
}

export const MediumSize: Story = {
  args: {
    children: <PlusIcon />,
    size: 'md',
  },
}

export const CircleShape: Story = {
  args: {
    children: <PlusIcon />,
    shape: 'circle',
  },
}

export const SquareShape: Story = {
  args: {
    children: <PlusIcon />,
    shape: 'square',
  },
}

export const EllipseShape: Story = {
  args: {
    children: <PlusIcon />,
    shape: 'ellipse',
  },
}

export const Disabled: Story = {
  args: {
    children: <PlusIcon />,
    disabled: true,
  },
}

export const WithCustomClass: Story = {
  args: {
    children: <HeartIcon />,
    additionalClass: 'shadow-lg hover:shadow-xl transition-shadow',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <ButtonIcon variant="solid"><PlusIcon /></ButtonIcon>
      <ButtonIcon variant="bordered"><HeartIcon /></ButtonIcon>
      <ButtonIcon variant="light"><SearchIcon /></ButtonIcon>
      <ButtonIcon variant="faded"><PlusIcon /></ButtonIcon>
      <ButtonIcon variant="ghost"><HeartIcon /></ButtonIcon>
    </div>
  ),
}

export const AllShapes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ButtonIcon shape="circle"><PlusIcon /></ButtonIcon>
      <ButtonIcon shape="square"><HeartIcon /></ButtonIcon>
      <ButtonIcon shape="ellipse"><SearchIcon /></ButtonIcon>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ButtonIcon size="sm"><PlusIcon /></ButtonIcon>
      <ButtonIcon size="md"><PlusIcon /></ButtonIcon>
    </div>
  ),
}
