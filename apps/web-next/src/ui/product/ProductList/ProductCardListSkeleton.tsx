import { Skeleton } from '@nextui-org/react'

import { PAGE_SIZE_DEFAULT } from '@/constants'
// Styles
import '@/styles/card-list.css'
import '@/styles/card.css'

export const ProductCardListSkeleton = ({
  additionalClass,
}: {
  additionalClass?: string
}) => {
  return (
    <div
      className={`card-list mx-auto mb-[110px] grid w-fit grid-cols-2 gap-x-[20px] gap-y-[30px] ${additionalClass}`}
    >
      {Array(PAGE_SIZE_DEFAULT)
        .fill(0)
        .map((_, index) => (
          <div
            key={`card-product-skeleton-${index}`}
            className={`card flex max-w-[305px] flex-col items-center overflow-hidden rounded-large border-medium border-background-300`}
          >
            <Skeleton className='card-image bg-default-200 h-[185px] w-full md:h-[303px] md:w-[305px]' />
            <div className='w-full p-5'>
              <div className='h-12 w-full space-y-[5px]'>
                <Skeleton className='bg-default-200 h-[18px] w-full rounded-large' />
                <Skeleton className='bg-default-200 h-[16px] w-[150px] rounded-large' />
              </div>
              <Skeleton className='bg-default-200 h-5 w-[100px] rounded-large' />
            </div>
            <div className='card-content mb-6 mt-1 flex w-full flex-col items-end gap-3 px-5 md:flex-row md:justify-between'>
              <Skeleton className='bg-default-200 h-9 w-full max-w-full rounded-large md:max-w-[128px]' />
              <Skeleton className='bg-default-200 h-9 w-full max-w-full rounded-large md:max-w-[128px]' />
            </div>
          </div>
        ))}
    </div>
  )
}
