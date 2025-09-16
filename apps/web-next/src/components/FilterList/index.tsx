'use client'

import { memo, useCallback, useMemo, useState } from 'react'

// Component
import { Checkbox, CheckboxGroup } from '@nextui-org/react'

import { Button, Text } from '@/components'
import { cn } from '@/lib/utils'
// Hooks
import { useDebounce } from '@/hooks'
import { ArrowDownIcon, ArrowUpIcon } from '@/icons'
// Types
import { FilterItem } from '@/types'

interface FilterListProps {
  title: string
  items: FilterItem[]
  isOpen: boolean
  defaultValue?: string[]
  additionalClass?: string
  handleReplaceURL?: (params: URLSearchParams) => void
}

const FilterList = memo(
  ({
    title,
    items,
    isOpen,
    defaultValue = [],
    additionalClass = '',
    handleReplaceURL,
  }: FilterListProps) => {
    const [groupSelected, setGroupSelected] = useState(defaultValue)
    const [open, setOpen] = useState(isOpen)

    const handleToggle = useCallback(() => {
      setOpen(!open)
    }, [open])

    const searchParams = useMemo(() => new URLSearchParams(), [])

    const updateSearchParams = useCallback(
      (values: string[]) => {
        searchParams.delete(title.toLowerCase())

        values
          .filter((element) => element !== '')
          .forEach((value) => {
            if (!searchParams.getAll(title.toLowerCase()).includes(value)) {
              searchParams.append(title.toLowerCase(), value)
            }
          })
        handleReplaceURL?.(searchParams)
      },
      [handleReplaceURL, searchParams, title]
    )

    const debounceSelect = useDebounce((value?: string[]) => {
      if (value) {
        updateSearchParams(value)
      } else {
        handleReplaceURL?.(searchParams)
      }
    })

    const handleSelectionChange = useCallback(
      (selectedValues: string[]) => {
        setGroupSelected(selectedValues)
        debounceSelect(selectedValues)
      },
      [debounceSelect]
    )

    return (
      <div
        className={`flex max-w-[270px] flex-col items-center gap-[30px] ${additionalClass}`}
      >
        <Button
          variant='ghost'
          className='w-full bg-background-100'
          data-testid='btn-toggle-filter'
          onClick={handleToggle}
        >
          <div className='flex h-6 w-full justify-between'>
            <Text
              variant='default'
              className='text-xl font-medium leading-5 text-secondary-200'
            >
              {title}
            </Text>
            {open ? (
              <div className='flex'>
                <ArrowDownIcon customClass='w-3.5 mt-2' />
              </div>
            ) : (
              <div className='flex'>
                <ArrowUpIcon customClass='w-3.5 mb-2 mr-0.5' />
              </div>
            )}
          </div>
        </Button>
        {open && (
          <CheckboxGroup
            value={groupSelected}
            onChange={handleSelectionChange}
            defaultValue={defaultValue}
            className='w-full'
            data-testid={`filter-${title}`}
          >
            {items.map((item: FilterItem, index) => (
              <Checkbox
                data-testid={`checkbox-item-${index}`}
                key={`${title}-${index}`}
                value={item.value}
                classNames={{
                  base: cn(
                    'inline-flex max-w-md w-full h-6 bg-background-100 m-0',
                    'hover:bg-background-200 items-center justify-start',
                    'cursor-pointer rounded-medium gap-1.5 border-transparent'
                  ),
                  label: 'w-full p-0',
                  wrapper:
                    'before:rounded-none after:rounded-none rounded-none border-none border-large before:border-primary-500 h-4 w-4 after:bg-primary-200 ',
                }}
              >
                <div className='flex w-full justify-between'>
                  <Text
                    variant='subTitle'
                    size='sm'
                    className='text-primary-400'
                  >
                    {item.name}
                  </Text>
                  <Text
                    variant='subTitle'
                    size='sm'
                    className='text-primary-400'
                  >
                    ({item.total})
                  </Text>
                </div>
              </Checkbox>
            ))}
          </CheckboxGroup>
        )}
      </div>
    )
  }
)

FilterList.displayName = 'FilterList'
export default FilterList
