'use client'

import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react'

// Component
import { Select, SelectItem } from '@nextui-org/react'

// Hooks
import { useDebounce } from '@/hooks'
// Types
import { FilterItem } from '@/types'

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

    const debounceSelect = useDebounce((value: Set<string>) => {
      if (!value) return

      updateSearchParams(Array.from(value), items)
    })

    const handleSelectionChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        setValues(new Set(e.target.value.split(',')))
        debounceSelect(new Set(e.target.value.split(',')))
      },
      [debounceSelect]
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
export default SelectMultiple
