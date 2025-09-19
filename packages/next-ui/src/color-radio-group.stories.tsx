import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ColorRadioGroup } from './color-radio-group'

// Mock Stick Icon for demonstration
const StickIcon = ({ customClass }: { customClass?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={customClass}>
    <polyline points="20,6 9,17 4,12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const meta: Meta<typeof ColorRadioGroup> = {
  title: 'NextUI/ColorRadioGroup',
  component: ColorRadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    additionalClass: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample color data
const basicColors = [
  { color: 'red', backgroundColor: 'bg-red-500', borderColor: 'border-red-600' },
  { color: 'blue', backgroundColor: 'bg-blue-500', borderColor: 'border-blue-600' },
  { color: 'green', backgroundColor: 'bg-green-500', borderColor: 'border-green-600' },
  { color: 'yellow', backgroundColor: 'bg-yellow-500', borderColor: 'border-yellow-600' },
  { color: 'purple', backgroundColor: 'bg-purple-500', borderColor: 'border-purple-600' },
]

const multipleColors = [
  { color: 'red-blue-green' },
  { color: 'yellow-purple' },
  { color: 'pink-orange-cyan' },
]

const productColors = [
  { color: 'black', backgroundColor: 'bg-black', borderColor: 'border-gray-800' },
  { color: 'white', backgroundColor: 'bg-white', borderColor: 'border-gray-300' },
  { color: 'navy', backgroundColor: 'bg-blue-900', borderColor: 'border-blue-800' },
  { color: 'crimson', backgroundColor: 'bg-red-600', borderColor: 'border-red-700' },
]

// Wrapper component for stateful stories
const ColorRadioGroupWrapper = ({ 
  items, 
  defaultValue = 'red',
  ...props 
}: { 
  items: any[], 
  defaultValue?: string,
  [key: string]: any 
}) => {
  const [valueColor, setValueColor] = useState(defaultValue)
  
  return (
    <ColorRadioGroup
      items={items}
      valueColor={valueColor}
      setValueColor={setValueColor}
      StickIcon={StickIcon}
      {...props}
    />
  )
}

export const Default: Story = {
  render: (args) => (
    <ColorRadioGroupWrapper 
      items={basicColors}
      {...args}
    />
  ),
}

export const BasicColors: Story = {
  render: (args) => (
    <ColorRadioGroupWrapper 
      items={basicColors}
      defaultValue="blue"
      {...args}
    />
  ),
}

export const MultipleColors: Story = {
  render: (args) => (
    <ColorRadioGroupWrapper 
      items={multipleColors}
      defaultValue="red-blue-green"
      {...args}
    />
  ),
}

export const ProductColors: Story = {
  render: (args) => (
    <ColorRadioGroupWrapper 
      items={productColors}
      defaultValue="black"
      {...args}
    />
  ),
}

export const WithoutStickIcon: Story = {
  render: (args) => {
    const [valueColor, setValueColor] = useState('red')
    
    return (
      <ColorRadioGroup
        items={basicColors}
        valueColor={valueColor}
        setValueColor={setValueColor}
        {...args}
      />
    )
  },
}

export const WithCustomClass: Story = {
  render: (args) => (
    <ColorRadioGroupWrapper 
      items={basicColors}
      additionalClass="p-4 bg-gray-50 rounded-lg"
      {...args}
    />
  ),
}

export const MixedColors: Story = {
  render: (args) => {
    const mixedItems = [
      ...basicColors.slice(0, 3),
      ...multipleColors.slice(0, 2),
    ]
    
    return (
      <ColorRadioGroupWrapper 
        items={mixedItems}
        defaultValue="red"
        {...args}
      />
    )
  },
}

export const CustomColors: Story = {
  render: (args) => {
    const customColors = [
      { color: 'coral', backgroundColor: 'bg-orange-400', borderColor: 'border-orange-500' },
      { color: 'teal', backgroundColor: 'bg-teal-500', borderColor: 'border-teal-600' },
      { color: 'indigo', backgroundColor: 'bg-indigo-500', borderColor: 'border-indigo-600' },
      { color: 'rose', backgroundColor: 'bg-rose-500', borderColor: 'border-rose-600' },
    ]
    
    return (
      <ColorRadioGroupWrapper 
        items={customColors}
        defaultValue="coral"
        {...args}
      />
    )
  },
}
