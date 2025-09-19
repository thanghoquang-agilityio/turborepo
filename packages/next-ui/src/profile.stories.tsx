import type { Meta, StoryObj } from '@storybook/react'
import { Profile } from './profile'

const meta: Meta<typeof Profile> = {
  title: 'NextUI/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    subText: {
      control: 'text',
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
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    name: 'John Doe',
    subText: 'Software Engineer',
  },
}

export const WithoutSubtext: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    name: 'Jane Smith',
  },
}

export const WithCustomClass: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
    name: 'Mike Johnson',
    subText: 'Product Manager',
    additionalClass: 'border-2 border-primary-300 rounded-lg p-4',
  },
}
