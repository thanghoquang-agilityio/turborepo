import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Pagination } from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'NextUI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalCount: {
      control: { type: 'number', min: 1, max: 1000 },
    },
    pageSize: {
      control: { type: 'number', min: 1, max: 50 },
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 5 },
    },
    currentPage: {
      control: { type: 'number', min: 1 },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for stateful stories
const PaginationWrapper = ({ 
  initialPage = 1,
  totalCount = 100,
  pageSize = 10,
  ...props 
}: { 
  initialPage?: number,
  totalCount?: number,
  pageSize?: number,
  [key: string]: any 
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  
  return (
    <div className="space-y-4">
      <div className="text-center text-sm text-gray-600">
        Current page: <span className="font-semibold">{currentPage}</span>
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        {...props}
      />
    </div>
  )
}

export const Default: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={100}
      pageSize={10}
      {...args}
    />
  ),
}

export const SmallDataset: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={25}
      pageSize={5}
      initialPage={2}
      {...args}
    />
  ),
}

export const LargeDataset: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={1000}
      pageSize={20}
      initialPage={15}
      {...args}
    />
  ),
}

export const MiddlePage: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={200}
      pageSize={10}
      initialPage={10}
      {...args}
    />
  ),
}

export const FirstPage: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={100}
      pageSize={10}
      initialPage={1}
      {...args}
    />
  ),
}

export const LastPage: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={100}
      pageSize={10}
      initialPage={10}
      {...args}
    />
  ),
}

export const SmallPageSize: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={100}
      pageSize={3}
      initialPage={5}
      {...args}
    />
  ),
}

export const LargePageSize: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={100}
      pageSize={25}
      initialPage={2}
      {...args}
    />
  ),
}

export const NoSiblings: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={200}
      pageSize={10}
      siblingCount={0}
      initialPage={10}
      {...args}
    />
  ),
}

export const ManySiblings: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={200}
      pageSize={10}
      siblingCount={3}
      initialPage={10}
      {...args}
    />
  ),
}

export const SinglePage: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={5}
      pageSize={10}
      {...args}
    />
  ),
}

export const TwoPages: Story = {
  render: (args) => (
    <PaginationWrapper 
      totalCount={15}
      pageSize={10}
      initialPage={1}
      {...args}
    />
  ),
}

export const ProductCatalog: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">Product Catalog</h3>
        <p className="text-sm text-gray-600">Showing 24 products per page</p>
      </div>
      <PaginationWrapper 
        totalCount={567}
        pageSize={24}
        initialPage={3}
        {...args}
      />
    </div>
  ),
}

export const SearchResults: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">Search Results</h3>
        <p className="text-sm text-gray-600">Found 89 results, showing 12 per page</p>
      </div>
      <PaginationWrapper 
        totalCount={89}
        pageSize={12}
        initialPage={4}
        {...args}
      />
    </div>
  ),
}

export const ArticleList: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">Blog Articles</h3>
        <p className="text-sm text-gray-600">Latest articles, 8 per page</p>
      </div>
      <PaginationWrapper 
        totalCount={156}
        pageSize={8}
        initialPage={7}
        {...args}
      />
    </div>
  ),
}

export const MobileOptimized: Story = {
  render: (args) => (
    <div className="max-w-sm mx-auto space-y-4">
      <div className="text-center">
        <h3 className="text-base font-semibold text-gray-800">Mobile View</h3>
        <p className="text-xs text-gray-600">Optimized for small screens</p>
      </div>
      <PaginationWrapper 
        totalCount={50}
        pageSize={5}
        siblingCount={1}
        initialPage={5}
        {...args}
      />
    </div>
  ),
}

export const HighVolumeData: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">Database Records</h3>
        <p className="text-sm text-gray-600">10,000+ records, 50 per page</p>
      </div>
      <PaginationWrapper 
        totalCount={10485}
        pageSize={50}
        initialPage={42}
        siblingCount={2}
        {...args}
      />
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [totalCount, setTotalCount] = useState(100)
    const [pageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    
    return (
      <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800">Interactive Demo</h3>
          <p className="text-sm text-gray-600">Adjust the settings and see how pagination changes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Items
            </label>
            <input
              type="number"
              value={totalCount}
              onChange={(e) => setTotalCount(Number(e.target.value))}
              className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
              min="1"
              max="1000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Items per Page
            </label>
            <input
              type="number"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
              min="1"
              max="50"
            />
          </div>
        </div>
        
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        
        <div className="text-center text-sm text-gray-600">
          Page {currentPage} of {Math.ceil(totalCount / pageSize)} 
          (Total: {totalCount} items, {pageSize} per page)
        </div>
      </div>
    )
  },
}
