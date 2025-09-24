import type { Meta, StoryObj } from '@storybook/react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'
import { Button } from './button'

const meta: Meta<typeof Card> = {
  title: 'shadcn/Card',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short description.</CardDescription>
        <CardAction>
          <Button size="sm" variant="secondary">
            Action
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Primary</Button>
      </CardFooter>
    </Card>
  ),
}


