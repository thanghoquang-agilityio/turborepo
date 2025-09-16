import { useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

// Mocks
import { MOCK_SIZE_RADIO_GROUP } from '@/mocks'

import SizeRadioGroup, { SizeRadioGroupProps } from '.'

const meta = {
  title: 'Components/SizeRadioGroup',
  tags: ['autodocs'],
  component: SizeRadioGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<SizeRadioGroupProps>

export default meta
const Template: StoryFn<SizeRadioGroupProps> = (args) => {
  const [valueSize, setValueSize] = useState(args.valueSize)

  return (
    <SizeRadioGroup
      {...args}
      valueSize={valueSize}
      setValueSize={setValueSize}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  items: MOCK_SIZE_RADIO_GROUP,
  valueSize: MOCK_SIZE_RADIO_GROUP[0].size,
}
