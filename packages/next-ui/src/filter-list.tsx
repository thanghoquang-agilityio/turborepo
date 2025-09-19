'use client'

import { memo, useCallback, useMemo, useState } from 'react'

// Component
import { Checkbox, CheckboxGroup, cn } from '@nextui-org/react'
import { Button } from './button'
import { Text } from './text'

// Types
interface FilterItem {
  name: string
  value: string
  total?: number
}

interface FilterListProps {
  title: string
  items: FilterItem[]
  isOpen: boolean
  defaultValue?: string[]
  additionalClass?: string
  handleReplaceURL?: (params: URLSearchParams) => void
  ArrowDownIcon?: React.ComponentType<{ customClass?: string }>
  ArrowUpIcon?: React.ComponentType<{ customClass?: string }>
  useDebounce?: (callback: (value?: string[]) => void) => (value?: string[]) => void
}

const FilterList = memo(
  ({
    title,
    items,
    isOpen,
    defaultValue = [],
    additionalClass = '',
    handleReplaceURL,
    ArrowDownIcon,
    ArrowUpIcon,
    useDebounce,
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

    const debounceSelect = useDebounce ? useDebounce((value?: string[]) => {
      if (value) {
        updateSearchParams(value)
      } else {
        handleReplaceURL?.(searchParams)
      }
    }) : (value?: string[]) => {
      if (value) {
        updateSearchParams(value)
      } else {
        handleReplaceURL?.(searchParams)
      }
    }

    const handleSelectionChange = useCallback(
      (selectedValues: string[]) => {
        setGroupSelected(selectedValues)
        debounceSelect(selectedValues)
      },
      [debounceSelect]
    )

    return (
      <div
        className={`flex flex-col gap-[30px] items-center max-w-[270px] ${additionalClass}`}
      >
        <Button
          variant="ghost"
          className="bg-background-100 w-full"
          data-testid="btn-toggle-filter"
          onClick={handleToggle}
        >
          <div className="flex justify-between w-full h-6">
            <Text
              variant="default"
              className="text-secondary-200 text-xl font-medium leading-5"
            >
              {title}
            </Text>
            {open ? (
              <div className="flex">
                {ArrowDownIcon && <ArrowDownIcon customClass="w-3.5 mt-2" />}
              </div>
            ) : (
              <div className="flex">
                {ArrowUpIcon && <ArrowUpIcon customClass="w-3.5 mb-2 mr-0.5" />}
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
                    'cursor-pointer rounded-medium gap-1.5 border-transparent',
                  ),
                  label: 'w-full p-0',
                  wrapper:
                    'before:rounded-none after:rounded-none rounded-none border-none border-large before:border-primary-500 h-4 w-4 after:bg-primary-200 ',
                }}
              >
                <div className="flex w-full justify-between">
                  <Text
                    variant="subTitle"
                    size="sm"
                    className="text-primary-400"
                  >
                    {item.name}
                  </Text>
                  <Text
                    variant="subTitle"
                    size="sm"
                    className="text-primary-400"
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
