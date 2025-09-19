import { Dispatch, SetStateAction, memo } from 'react'

// Components
import { SizeRadioGroup as SharedSizeRadioGroup } from '@repo/next-ui'

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
  (props: SizeRadioGroupProps) => {
    return <SharedSizeRadioGroup {...props} />
  }
)

SizeRadioGroup.displayName = 'SizeRadioGroup'
export default SizeRadioGroup
