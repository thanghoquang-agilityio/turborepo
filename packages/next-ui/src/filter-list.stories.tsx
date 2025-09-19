import type { Meta, StoryObj } from '@storybook/react'
import FilterList from './filter-list'

// Mock Arrow Icons for demonstration
const ArrowDownIcon = ({ customClass }: { customClass?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={customClass}>
    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowUpIcon = ({ customClass }: { customClass?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={customClass}>
    <path d="M18 15l-6-6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const meta: Meta<typeof FilterList> = {
  title: 'NextUI/FilterList',
  component: FilterList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    isOpen: {
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

const brands = [
  { name: 'Apple', value: 'apple', total: 42 },
  { name: 'Samsung', value: 'samsung', total: 38 },
  { name: 'Sony', value: 'sony', total: 25 },
  { name: 'LG', value: 'lg', total: 18 },
  { name: 'Panasonic', value: 'panasonic', total: 12 },
  { name: 'Nintendo', value: 'nintendo', total: 8 },
]

const colors = [
  { name: 'Red', value: 'red', total: 15 },
  { name: 'Blue', value: 'blue', total: 23 },
  { name: 'Green', value: 'green', total: 18 },
  { name: 'Black', value: 'black', total: 42 },
  { name: 'White', value: 'white', total: 38 },
]

const priceRanges = [
  { name: 'Under $25', value: '0-25', total: 156 },
  { name: '$25 - $50', value: '25-50', total: 89 },
  { name: '$50 - $100', value: '50-100', total: 67 },
  { name: '$100 - $200', value: '100-200', total: 34 },
  { name: 'Over $200', value: '200+', total: 12 },
]

const ratings = [
  { name: '5 Stars', value: '5', total: 45 },
  { name: '4 Stars & Up', value: '4+', total: 123 },
  { name: '3 Stars & Up', value: '3+', total: 267 },
  { name: '2 Stars & Up', value: '2+', total: 298 },
  { name: '1 Star & Up', value: '1+', total: 312 },
]

export const Default: Story = {
  args: {
    title: 'Categories',
    items: categories,
    isOpen: true,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const CategoryFilter: Story = {
  args: {
    title: 'Categories',
    items: categories,
    isOpen: true,
    defaultValue: ['electronics', 'clothing'],
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const BrandFilter: Story = {
  args: {
    title: 'Brands',
    items: brands,
    isOpen: false,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const ColorFilter: Story = {
  args: {
    title: 'Colors',
    items: colors,
    isOpen: true,
    defaultValue: ['black', 'white'],
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const PriceFilter: Story = {
  args: {
    title: 'Price Range',
    items: priceRanges,
    isOpen: true,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const RatingFilter: Story = {
  args: {
    title: 'Customer Rating',
    items: ratings,
    isOpen: false,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const Closed: Story = {
  args: {
    title: 'Categories',
    items: categories,
    isOpen: false,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const WithoutIcons: Story = {
  args: {
    title: 'Simple Filter',
    items: categories,
    isOpen: true,
  },
}

export const WithCustomClass: Story = {
  args: {
    title: 'Custom Styled',
    items: categories,
    isOpen: true,
    additionalClass: 'bg-blue-50 p-4 rounded-lg border-2 border-blue-200',
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const EmptyFilter: Story = {
  args: {
    title: 'No Items',
    items: [],
    isOpen: true,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const SingleItem: Story = {
  args: {
    title: 'Single Option',
    items: [{ name: 'Only Choice', value: 'only', total: 1 }],
    isOpen: true,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const LargeList: Story = {
  args: {
    title: 'Large Category List',
    items: [
      ...categories,
      { name: 'Automotive', value: 'automotive', total: 67 },
      { name: 'Beauty', value: 'beauty', total: 89 },
      { name: 'Health', value: 'health', total: 45 },
      { name: 'Jewelry', value: 'jewelry', total: 23 },
      { name: 'Music', value: 'music', total: 34 },
      { name: 'Pet Supplies', value: 'pets', total: 56 },
      { name: 'Software', value: 'software', total: 78 },
      { name: 'Tools', value: 'tools', total: 29 },
      { name: 'Toys', value: 'toys', total: 91 },
      { name: 'Video Games', value: 'games', total: 123 },
    ],
    isOpen: true,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const ZeroTotals: Story = {
  args: {
    title: 'Out of Stock',
    items: [
      { name: 'Red Items', value: 'red', total: 0 },
      { name: 'Blue Items', value: 'blue', total: 0 },
      { name: 'Green Items', value: 'green', total: 0 },
    ],
    isOpen: true,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const HighNumbers: Story = {
  args: {
    title: 'Popular Categories',
    items: [
      { name: 'Electronics', value: 'electronics', total: 1247 },
      { name: 'Fashion', value: 'fashion', total: 2156 },
      { name: 'Home Improvement', value: 'home', total: 989 },
      { name: 'Books & Media', value: 'books', total: 3421 },
    ],
    isOpen: true,
    ArrowDownIcon,
    ArrowUpIcon,
  },
}

export const PreSelected: Story = {
  args: {
    title: 'Pre-selected Items',
    items: categories,
    isOpen: true,
    defaultValue: ['electronics', 'books', 'sports'],
    ArrowDownIcon,
    ArrowUpIcon,
  },
}
