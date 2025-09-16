import { useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

// Mocks
import { MOCK_COLOR_RADIO_GROUP } from '@/mocks'

import ColorRadioGroup, { ColorRadioGroupProps } from '.'

const meta = {
  title: 'Components/ColorRadioGroup',
  tags: ['autodocs'],
  component: ColorRadioGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<ColorRadioGroupProps>

export default meta

const Template: StoryFn<ColorRadioGroupProps> = (args) => {
  const [valueColor, setValueColor] = useState(args.valueColor)

  return (
    <ColorRadioGroup
      {...args}
      valueColor={valueColor}
      setValueColor={setValueColor}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  items: MOCK_COLOR_RADIO_GROUP,
  valueColor: MOCK_COLOR_RADIO_GROUP[0].color,
}
