import { Dispatch, SetStateAction, memo } from 'react'

// Components
import { Radio, RadioGroup, Tooltip } from '@nextui-org/react'

import { InView } from '@/components'
import { cn } from '@/lib/utils'
// Constants
import { COLOR_ITEMS, COLOR_ITEM_DEFAULT } from '@/constants'
import { StickIcon } from '@/icons'

interface ColorItems {
  color: string
}

export interface ColorRadioGroupProps {
  items: ColorItems[]
  valueColor: string
  setValueColor: Dispatch<SetStateAction<string>>
  additionalClass?: string
}

const ColorRadioGroup = memo(
  ({
    items,
    valueColor,
    setValueColor,
    additionalClass,
  }: ColorRadioGroupProps) => (
    <RadioGroup
      label='Choose a Color'
      orientation='horizontal'
      value={valueColor}
      onValueChange={setValueColor}
      classNames={{
        base: 'sm:gap-4 gap-2',
        wrapper: 'sm:gap-4 gap-2',
        label: 'text-base text-foreground-300 font-medium',
      }}
      className={additionalClass || ''}
    >
      {items.map(({ color }, index) => {
        const colorList = color.split('-')
        const isMultipleColor = colorList.length > 1

        const colorItem =
          COLOR_ITEMS.find((item) => item.color === color) || COLOR_ITEM_DEFAULT

        const isSelected = valueColor === color
        const borderColor = isMultipleColor
          ? 'border-danger-300'
          : `${colorItem.borderColor}`
        const backgroundColor = isMultipleColor
          ? 'bg-gradient-conic'
          : `${colorItem.backgroundColor} group-data-[hover-unselected=true]:${colorItem.backgroundColor}`
        const styleSelected =
          valueColor === color ? `${borderColor} p-0` : 'border-background-100'

        return (
          <Tooltip
            key={`tooltip-radio-${index}`}
            showArrow
            placement='top'
            content={color}
            classNames={{
              base: ['before:bg-primary-300'],
              content: [
                'py-2 px-4 shadow-xl',
                'text-background-100 bg-primary-300',
              ],
            }}
          >
            <Radio
              key={`color-item-${index}`}
              aria-label='Radio Color'
              value={color}
              className={`m-0 h-[54px] w-[54px] max-w-[64px] items-center justify-center rounded-full border-[3px] capitalize sm:h-[64px] sm:w-[64px] ${styleSelected}`}
              classNames={{
                wrapper: cn(
                  `inline-flex ${backgroundColor} sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] hover:opacity-80 p-0 m-0`,
                  'cursor-pointer rounded-full border-none'
                ),
                control: 'bg-background-100 hidden',
                labelWrapper:
                  'absolute sm:top-[19px] top-[16px] sm:left-[10px] left-[6px] sm:w-6 sm:h-5 w-5 h-4',
              }}
            >
              {isSelected && (
                <InView>
                  <StickIcon customClass='text-background-100' />
                </InView>
              )}
            </Radio>
          </Tooltip>
        )
      })}
    </RadioGroup>
  )
)

ColorRadioGroup.displayName = 'ColorRadioGroup'
export default ColorRadioGroup
