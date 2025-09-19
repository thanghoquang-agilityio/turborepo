'use client'

import { Dispatch, SetStateAction, memo } from 'react'
import { cn } from '@nextui-org/react'

// Components
import { Radio, RadioGroup, Tooltip } from '@nextui-org/react'

interface ColorItems {
  color: string
  backgroundColor?: string
  borderColor?: string
}

export interface ColorRadioGroupProps {
  items: ColorItems[]
  valueColor: string
  setValueColor: Dispatch<SetStateAction<string>>
  additionalClass?: string
  StickIcon?: React.ComponentType<{ customClass?: string }>
}

const ColorRadioGroup = memo(
  ({
    items,
    valueColor,
    setValueColor,
    additionalClass,
    StickIcon,
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
      {items.map(({ color, backgroundColor, borderColor }, index) => {
        const colorList = color.split('-')
        const isMultipleColor = colorList.length > 1

        const isSelected = valueColor === color
        const finalBorderColor = isMultipleColor
          ? 'border-danger-300'
          : borderColor || 'border-primary-300'
        const finalBackgroundColor = isMultipleColor
          ? 'bg-gradient-conic'
          : backgroundColor || 'bg-primary-300'
        const styleSelected =
          valueColor === color ? `${finalBorderColor} p-0` : 'border-background-100'

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
                  `inline-flex ${finalBackgroundColor} sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] hover:opacity-80 p-0 m-0`,
                  'cursor-pointer rounded-full border-none'
                ),
                control: 'bg-background-100 hidden',
                // Center the check icon regardless of font metrics and element size
                labelWrapper:
                  'absolute inset-0 flex items-center justify-center sm:w-6 sm:h-6 w-5 h-5 m-auto',
              }}
            >
              {isSelected && StickIcon && (
                <StickIcon customClass='text-background-100' />
              )}
            </Radio>
          </Tooltip>
        )
      })}
    </RadioGroup>
  )
)

ColorRadioGroup.displayName = 'ColorRadioGroup'
export { ColorRadioGroup }
