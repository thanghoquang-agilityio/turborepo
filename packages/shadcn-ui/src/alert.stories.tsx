import type { Meta, StoryObj } from '@storybook/react'

import { Alert, AlertDescription, AlertTitle } from './alert'

const meta: Meta<typeof Alert> = {
  title: 'shadcn/Alert',
  component: Alert,
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>This is an alert message.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong.</AlertDescription>
    </Alert>
  ),
}


