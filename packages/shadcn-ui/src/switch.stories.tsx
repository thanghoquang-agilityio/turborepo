import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
  title: 'shadcn/Switch',
  component: Switch,
}

export default meta
export type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false)
    return (
      <div className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
        <span>{checked ? 'On' : 'Off'}</span>
      </div>
    )
  },
}
