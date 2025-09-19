'use client'

import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react'

// Component
import { Select, SelectItem } from '@nextui-org/react'

// Types
interface FilterItem {
  name: string
  value: string
  total?: number
}

interface SelectMultipleProps {
  items: FilterItem[]
  placeholder?: string
  defaultValue?: string[]
  additionalClass?: string
  isDisabled?: boolean
  handleReplaceURL?: (params: URLSearchParams) => void
}

const SelectMultiple = memo(
  ({
    items,
    placeholder = '-- Select --',
    defaultValue = [],
    additionalClass = '',
    isDisabled = false,
    handleReplaceURL,
  }: SelectMultipleProps) => {
    const [values, setValues] = useState(new Set(defaultValue))
    const searchParams = useMemo(() => new URLSearchParams(), [])

    const updateSearchParams = useCallback(
      (values: string[], items: { [key: number]: { value: string } }) => {
        searchParams.delete('category')

        values
          .filter((element) => element !== '')
          .forEach((value) => {
            const valueSplit = value.split('-')
            const index = Number(valueSplit[1])

            const itemValue = items[index].value

            if (!searchParams.getAll('category').includes(itemValue)) {
              searchParams.append('category', itemValue)
            }
          })
        handleReplaceURL?.(searchParams)
      },
      [handleReplaceURL, searchParams]
    )

    const handleSelectionChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        setValues(new Set(e.target.value.split(',')))
        
        // Call updateSearchParams with proper items format
        const itemsIndexed = items.reduce((acc, item, index) => {
          acc[index] = { value: item.value }
          return acc
        }, {} as { [key: number]: { value: string } })
        
        updateSearchParams(e.target.value.split(','), itemsIndexed)
      },
      [items, updateSearchParams]
    )

    return (
      <Select
        className={`bg-background-400 text-sm font-medium text-primary-200 ${additionalClass}`}
        classNames={{
          base: 'rounded-[28px] opacity-100',
          trigger: 'min-h-9 h-9 px-3.5 rounded-[28px]',
          value: 'text-primary-200 font-medium text-sm',
        }}
        selectionMode='multiple'
        placeholder={placeholder}
        selectedKeys={values}
        onChange={handleSelectionChange}
        isDisabled={isDisabled}
        aria-label={placeholder}
        data-testid={placeholder}
      >
        {items.map((item: FilterItem, index) => (
          <SelectItem
            key={`${placeholder}-${index}`}
            value={item.value}
            className='data-[hover=true]:text-text-primary-200 rounded-[28px] text-sm font-medium data-[selectable=true]:focus:bg-background-200 data-[selectable=true]:focus:text-primary-200'
          >
            {item.name}
          </SelectItem>
        ))}
      </Select>
    )
  }
)

SelectMultiple.displayName = 'SelectMultiple'
export { SelectMultiple }
