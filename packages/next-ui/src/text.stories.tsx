import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'

const meta: Meta<typeof Text> = {
  title: 'NextUI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'title', 'subTitle', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default text',
  },
}

export const Title: Story = {
  args: {
    children: 'Title text',
    variant: 'title',
  },
}

export const Subtitle: Story = {
  args: {
    children: 'Subtitle text',
    variant: 'subTitle',
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary text',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary text',
    variant: 'secondary',
  },
}

export const Large: Story = {
  args: {
    children: 'Large text',
    size: 'lg',
  },
}

export const Small: Story = {
  args: {
    children: 'Small text',
    size: 'sm',
  },
}
