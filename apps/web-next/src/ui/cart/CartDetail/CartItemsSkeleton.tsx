import { Skeleton } from '@nextui-org/react'

import { PAGE_SIZE_DEFAULT, borderStyle } from '@/constants'
// Styles
import '@/styles/card-list.css'
import '@/styles/card.css'

export const CartItemsSkeleton = () => {
  return (
    <div
      className={`card-list mx-auto grid w-fit grid-cols-2 gap-x-[20px] gap-y-[30px] 2xl:grid-cols-3`}
    >
      {Array(PAGE_SIZE_DEFAULT)
        .fill(0)
        .map((_, index) => (
          <div
            key={`card-product-skeleton-${index}`}
            className={`card flex max-w-[305px] flex-col items-center overflow-hidden rounded-large border-medium border-background-300 pb-5 pt-3`}
          >
            <Skeleton className='bg-default-200 h-[26px] w-[170px] rounded-large' />
            <Skeleton className='bg-default-200 mt-1 h-[18px] w-[100px] rounded-large' />
            <Skeleton className='card-image bg-default-200 mb-5 mt-4 h-[185px] w-full md:h-[303px] md:w-[305px]' />
            <Skeleton className='bg-default-200 h-[38px] w-[150px] rounded-large' />

            <div
              className={`relative mt-10 flex w-full justify-between px-4 ${borderStyle} before:top-[-20px]`}
            >
              <Skeleton className='bg-default-200 h-[26px] w-[90px] rounded-large' />
              <Skeleton className='bg-default-200 h-[26px] w-[100px] rounded-large' />
            </div>
          </div>
        ))}
    </div>
  )
}
