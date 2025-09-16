import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Toast } from '@/components/Toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    message: { description: 'Text of toast' },
  },
} as Meta<typeof Toast>

export default meta

type Story = StoryObj<typeof meta>

export const ToastSuccess: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'center',
          width: 'auto',
          height: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],

  args: {
    message: 'Success',
  },
}

export const ToastError: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'center',
          width: 'auto',
          height: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],

  args: {
    message: 'Error',
    color: 'red',
  },
}
