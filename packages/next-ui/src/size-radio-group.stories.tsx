import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SizeRadioGroup } from './size-radio-group'

const meta: Meta<typeof SizeRadioGroup> = {
  title: 'NextUI/SizeRadioGroup',
  component: SizeRadioGroup,
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

// Sample size data
const basicSizes = [
  { size: 'XS', stock: 10 },
  { size: 'S', stock: 25 },
  { size: 'M', stock: 15 },
  { size: 'L', stock: 8 },
  { size: 'XL', stock: 5 },
]

const shoeSizes = [
  { size: '7', stock: 3 },
  { size: '8', stock: 12 },
  { size: '9', stock: 18 },
  { size: '10', stock: 15 },
  { size: '11', stock: 7 },
  { size: '12', stock: 2 },
]

const outOfStockSizes = [
  { size: 'XS', stock: 0 },
  { size: 'S', stock: 5 },
  { size: 'M', stock: 0 },
  { size: 'L', stock: 3 },
  { size: 'XL', stock: 0 },
]

// Wrapper component for stateful stories
const SizeRadioGroupWrapper = ({ 
  items, 
  defaultValue = 'M',
  ...props 
}: { 
  items: any[], 
  defaultValue?: string,
  [key: string]: any 
}) => {
  const [valueSize, setValueSize] = useState(defaultValue)
  
  return (
    <SizeRadioGroup
      items={items}
      valueSize={valueSize}
      setValueSize={setValueSize}
      {...props}
    />
  )
}

export const Default: Story = {
  render: (args) => (
    <SizeRadioGroupWrapper 
      items={basicSizes}
      {...args}
    />
  ),
}

export const ClothingSizes: Story = {
  render: (args) => (
    <SizeRadioGroupWrapper 
      items={basicSizes}
      defaultValue="L"
      {...args}
    />
  ),
}

export const ShoeSizes: Story = {
  render: (args) => (
    <SizeRadioGroupWrapper 
      items={shoeSizes}
      defaultValue="9"
      {...args}
    />
  ),
}

export const WithOutOfStock: Story = {
  render: (args) => (
    <SizeRadioGroupWrapper 
      items={outOfStockSizes}
      defaultValue="S"
      {...args}
    />
  ),
}

export const LimitedStock: Story = {
  render: (args) => {
    const limitedSizes = [
      { size: 'S', stock: 1 },
      { size: 'M', stock: 2 },
      { size: 'L', stock: 1 },
    ]
    
    return (
      <SizeRadioGroupWrapper 
        items={limitedSizes}
        defaultValue="M"
        {...args}
      />
    )
  },
}

export const HighStock: Story = {
  render: (args) => {
    const highStockSizes = [
      { size: 'S', stock: 100 },
      { size: 'M', stock: 150 },
      { size: 'L', stock: 75 },
      { size: 'XL', stock: 50 },
    ]
    
    return (
      <SizeRadioGroupWrapper 
        items={highStockSizes}
        defaultValue="M"
        {...args}
      />
    )
  },
}

export const WithCustomClass: Story = {
  render: (args) => (
    <SizeRadioGroupWrapper 
      items={basicSizes}
      additionalClass="p-4 bg-gray-50 rounded-lg"
      {...args}
    />
  ),
}

export const InternationalSizes: Story = {
  render: (args) => {
    const intlSizes = [
      { size: 'XXS', stock: 5 },
      { size: 'XS', stock: 12 },
      { size: 'S', stock: 25 },
      { size: 'M', stock: 30 },
      { size: 'L', stock: 20 },
      { size: 'XL', stock: 15 },
      { size: 'XXL', stock: 8 },
      { size: '3XL', stock: 3 },
    ]
    
    return (
      <SizeRadioGroupWrapper 
        items={intlSizes}
        defaultValue="L"
        {...args}
      />
    )
  },
}

export const NumericSizes: Story = {
  render: (args) => {
    const numericSizes = [
      { size: '30', stock: 8 },
      { size: '32', stock: 15 },
      { size: '34', stock: 20 },
      { size: '36', stock: 12 },
      { size: '38', stock: 6 },
      { size: '40', stock: 3 },
    ]
    
    return (
      <SizeRadioGroupWrapper 
        items={numericSizes}
        defaultValue="34"
        {...args}
      />
    )
  },
}
