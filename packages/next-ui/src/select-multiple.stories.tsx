import type { Meta, StoryObj } from '@storybook/react'
import { SelectMultiple } from './select-multiple'

const meta: Meta<typeof SelectMultiple> = {
  title: 'NextUI/SelectMultiple',
  component: SelectMultiple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    additionalClass: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample data
const categories = [
  { name: 'Electronics', value: 'electronics', total: 125 },
  { name: 'Clothing', value: 'clothing', total: 89 },
  { name: 'Books', value: 'books', total: 67 },
  { name: 'Home & Garden', value: 'home-garden', total: 45 },
  { name: 'Sports', value: 'sports', total: 32 },
]

const colors = [
  { name: 'Red', value: 'red', total: 15 },
  { name: 'Blue', value: 'blue', total: 23 },
  { name: 'Green', value: 'green', total: 18 },
  { name: 'Black', value: 'black', total: 42 },
  { name: 'White', value: 'white', total: 38 },
  { name: 'Gray', value: 'gray', total: 29 },
]

const brands = [
  { name: 'Apple', value: 'apple' },
  { name: 'Samsung', value: 'samsung' },
  { name: 'Sony', value: 'sony' },
  { name: 'LG', value: 'lg' },
  { name: 'Panasonic', value: 'panasonic' },
]

const sizes = [
  { name: 'Extra Small', value: 'xs', total: 8 },
  { name: 'Small', value: 's', total: 25 },
  { name: 'Medium', value: 'm', total: 45 },
  { name: 'Large', value: 'l', total: 32 },
  { name: 'Extra Large', value: 'xl', total: 18 },
  { name: '2X Large', value: '2xl', total: 12 },
]

export const Default: Story = {
  args: {
    items: categories,
    placeholder: 'Select categories',
  },
}

export const Categories: Story = {
  args: {
    items: categories,
    placeholder: 'Choose categories',
    defaultValue: ['electronics', 'clothing'],
  },
}

export const Colors: Story = {
  args: {
    items: colors,
    placeholder: 'Select colors',
    defaultValue: ['red', 'blue'],
  },
}

export const Brands: Story = {
  args: {
    items: brands,
    placeholder: 'Choose brands',
  },
}

export const Sizes: Story = {
  args: {
    items: sizes,
    placeholder: 'Select sizes',
    defaultValue: ['m', 'l'],
  },
}

export const Disabled: Story = {
  args: {
    items: categories,
    placeholder: 'Disabled select',
    isDisabled: true,
    defaultValue: ['electronics'],
  },
}

export const WithCustomClass: Story = {
  args: {
    items: categories,
    placeholder: 'Custom styled',
    additionalClass: 'shadow-lg border-2 border-blue-300',
  },
}

export const EmptyItems: Story = {
  args: {
    items: [],
    placeholder: 'No items available',
  },
}

export const SingleItem: Story = {
  args: {
    items: [{ name: 'Only Option', value: 'only', total: 1 }],
    placeholder: 'Single option',
  },
}

export const LongLabels: Story = {
  args: {
    items: [
      { name: 'Very Long Category Name That Might Overflow', value: 'long1', total: 5 },
      { name: 'Another Extremely Long Category Name', value: 'long2', total: 3 },
      { name: 'Short', value: 'short', total: 10 },
    ],
    placeholder: 'Long labels',
  },
}

export const LargeList: Story = {
  args: {
    items: [
      ...categories,
      ...colors.map(c => ({ ...c, name: `Color: ${c.name}` })),
      ...brands.map(b => ({ ...b, name: `Brand: ${b.name}`, total: Math.floor(Math.random() * 50) })),
      ...sizes.map(s => ({ ...s, name: `Size: ${s.name}` })),
    ],
    placeholder: 'Large list of options',
  },
}

export const WithoutTotals: Story = {
  args: {
    items: brands,
    placeholder: 'No totals shown',
  },
}

export const MixedData: Story = {
  args: {
    items: [
      { name: 'With Total', value: 'with-total', total: 25 },
      { name: 'Without Total', value: 'without-total' },
      { name: 'Zero Total', value: 'zero-total', total: 0 },
      { name: 'High Total', value: 'high-total', total: 999 },
    ],
    placeholder: 'Mixed data types',
  },
}

export const PreSelected: Story = {
  args: {
    items: categories,
    placeholder: 'Pre-selected items',
    defaultValue: ['electronics', 'clothing', 'books'],
  },
}

export const CustomPlaceholder: Story = {
  args: {
    items: categories,
    placeholder: '🔍 Search and select multiple options...',
  },
}
