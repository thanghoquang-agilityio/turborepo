'use client'

import { memo } from 'react'

// Component
import { FilterList as SharedFilterList } from '@repo/next-ui'

import { ArrowDownIcon, ArrowUpIcon } from '@/icons'
import { useDebounce } from '@/hooks'
// Types
import type { FilterItem } from '@/types'

interface FilterListProps {
  title: string
  items: FilterItem[]
  isOpen: boolean
  defaultValue?: string[]
  additionalClass?: string
  handleReplaceURL?: (params: URLSearchParams) => void
}

const FilterList = memo(
  (props: FilterListProps) => {
    return (
      <SharedFilterList
        {...props}
        ArrowDownIcon={ArrowDownIcon}
        ArrowUpIcon={ArrowUpIcon}
        useDebounce={useDebounce}
      />
    )
  }
)

FilterList.displayName = 'FilterList'
export default FilterList
