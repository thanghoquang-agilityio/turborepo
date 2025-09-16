import { ReactNode, memo } from 'react'

import Link from 'next/link'

// Components
import { Text } from '@/components'
// Constants
import { borderStyle } from '@/constants'
import { ShoppingBagIcon, TruckIcon } from '@/icons'

interface RelatedInfoItem {
  icon: ReactNode
  title: string
  subTitle?: ReactNode
}

export const RELATED_INFO = [
  {
    icon: <TruckIcon />,
    title: 'Free Delivery',
    subTitle: (
      <Link href='#'>
        <Text
          variant='secondary'
          size='sm'
          type='link'
          className='overflow-visible whitespace-pre-wrap leading-6 text-foreground-100 underline-offset-4 sm:leading-4'
        >
          Enter your Postal code for Delivery Availability
        </Text>
      </Link>
    ),
  },
  {
    icon: <ShoppingBagIcon />,
    title: 'Return Delivery',
    subTitle: (
      <Text
        variant='secondary'
        size='sm'
        className='overflow-visible whitespace-pre-wrap leading-6 text-foreground-100 sm:leading-4'
      >
        Free 30 days Delivery Return.&nbsp;
        <Link href='#'>
          <span className='underline underline-offset-4'>Details</span>
        </Link>
      </Text>
    ),
  },
]

const RelatedInfo = memo(
  ({ items = RELATED_INFO }: { items?: RelatedInfoItem[] }) => (
    <div
      className={`flex w-full flex-col gap-10 rounded-[14px] border-small border-background-300 p-[17px]`}
    >
      {items.map(({ icon, title, subTitle }, index) => {
        const borderClass =
          index !== 0 ? `${borderStyle} before:top-[-20px]` : ''

        return (
          <div
            key={`related-info-item-${index}`}
            className={`relative flex gap-[14px] sm:h-[45px] ${borderClass}`}
          >
            <div className='h-6 w-6 text-danger-100'>{icon}</div>
            <div className='flex flex-col gap-[7px] overflow-hidden'>
              <Text className='text-[17px] font-bold leading-5 text-primary-100'>
                {title}
              </Text>
              {subTitle}
            </div>
          </div>
        )
      })}
    </div>
  )
)

RelatedInfo.displayName = 'RelatedInfo'
export default RelatedInfo
