import type { Meta, StoryObj } from '@storybook/react'

import { LabelPrimitive } from './label'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'shadcn/RadioGroup',
  component: RadioGroup,
}

export default meta
export type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="option1" />
        <LabelPrimitive.Root htmlFor="option1">Option 1</LabelPrimitive.Root>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="option2" />
        <LabelPrimitive.Root htmlFor="option2">Option 2</LabelPrimitive.Root>
      </div>
    </RadioGroup>
  ),
}
