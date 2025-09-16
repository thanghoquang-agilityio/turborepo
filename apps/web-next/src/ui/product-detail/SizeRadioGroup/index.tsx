import { Dispatch, SetStateAction, memo } from 'react'

// Components
import { Radio, RadioGroup as RadioGroupNextUI } from '@nextui-org/react'
import { cn } from '@/lib/utils'

interface SizeItems {
  size: string
  stock: number
}

export interface SizeRadioGroupProps {
  items: SizeItems[]
  valueSize: string
  setValueSize: Dispatch<SetStateAction<string>>
  additionalClass?: string
}

const SizeRadioGroup = memo(
  ({
    items,
    valueSize,
    setValueSize,
    additionalClass,
  }: SizeRadioGroupProps) => (
    <RadioGroupNextUI
      label='Choose a Size'
      orientation='horizontal'
      value={valueSize}
      onValueChange={setValueSize}
      classNames={{
        base: 'gap-4',
        wrapper: 'gap-4',
        label: 'text-base text-foreground-300 font-medium',
      }}
      className={additionalClass || ''}
    >
      {items.map(({ size, stock }, index) => {
        const isSelected = valueSize === size
        const isDisable = stock < 1

        return (
          <Radio
            key={`size-item--${index}`}
            value={size}
            className={`m-0 h-8 w-auto rounded-medium px-2.5 capitalize ${isSelected ? 'bg-background-300' : 'bg-background-200'}`}
            classNames={{
              wrapper: cn(
                `inline-flex hover:opacity-80 p-0 m-0 h-4 w-4`,
                'cursor-pointer border-small rounded-full border-foreground-100 group-data-[selected=true]:border-primary-300'
              ),
              control: 'bg-primary-300 w-2.5 h-2.5',
              label: `text-sm font-medium ${isSelected ? 'text-primary-300' : 'text-foreground-100'}`,
            }}
            isDisabled={isDisable}
          >
            {size}
          </Radio>
        )
      })}
    </RadioGroupNextUI>
  )
)

SizeRadioGroup.displayName = 'SizeRadioGroup'
export default SizeRadioGroup
