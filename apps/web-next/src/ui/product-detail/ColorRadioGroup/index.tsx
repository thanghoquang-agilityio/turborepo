import { Dispatch, SetStateAction, memo } from 'react'

// Components
import { ColorRadioGroup as SharedColorRadioGroup } from '@repo/next-ui'

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
  }: ColorRadioGroupProps) => {
    // Transform items to include backgroundColor and borderColor from constants
    const enhancedItems = items.map(({ color }) => {
      const colorItem = COLOR_ITEMS.find((item) => item.color === color) || COLOR_ITEM_DEFAULT
      return {
        color,
        backgroundColor: colorItem.backgroundColor,
        borderColor: colorItem.borderColor,
      }
    })

    return (
      <SharedColorRadioGroup
        items={enhancedItems}
        valueColor={valueColor}
        setValueColor={setValueColor}
        additionalClass={additionalClass}
        StickIcon={StickIcon}
      />
    )
  }
)

ColorRadioGroup.displayName = 'ColorRadioGroup'
export default ColorRadioGroup
