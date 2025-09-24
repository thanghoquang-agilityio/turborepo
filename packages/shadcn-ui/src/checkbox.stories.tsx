import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'shadcn/Checkbox',
  component: Checkbox,
}

export default meta
export type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean>(false)
    return (
      <label className="inline-flex items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
        <span>Accept terms</span>
      </label>
    )
  },
}
