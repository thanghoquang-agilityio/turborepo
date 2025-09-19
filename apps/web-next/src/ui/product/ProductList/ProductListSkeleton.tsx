import { Skeleton } from '@repo/next-ui'

// Styles
import '@/styles/card-list.css'
import '@/styles/card.css'

import { ProductCardListSkeleton } from './ProductCardListSkeleton'

export const ProductListSkeleton = ({
  isFilter = false,
}: {
  isFilter?: boolean
}) => {
  const classProductList = isFilter
    ? '2xl:grid-cols-3 lg:grid-cols-2'
    : '2xl:grid-cols-4 lg:grid-cols-3'

  const classLayoutProductList = isFilter
    ? 'flex lg:flex-row flex-col lg:gap-[21px] lg:items-start items-center'
    : ''

  return (
    <div
      className={`container w-full max-w-full py-8 lg:py-12 xl:py-16 ${classLayoutProductList}`}
    >
      {isFilter && (
        <Skeleton className='bg-default-200 mb-8 h-[334px] w-[304px] min-w-[304px] rounded-medium border-medium border-background-300 p-4' />
      )}
      <div className='w-full'>
        <div
          className={`flex lg:justify-between ${isFilter ? 'justify-center sm:justify-between' : 'justify-end'} lg:mb mb-6 xl:mb-12`}
        >
          {isFilter ? (
            <>
              <Skeleton className='bg-default-200 hidden h-[37px] w-[200px] rounded-large sm:block' />
              <Skeleton className='bg-default-200 h-[37px] w-[160px] rounded-large' />
            </>
          ) : (
            <div className='flex gap-3'>
              <Skeleton className='bg-default-200 block h-[37px] w-[160px] rounded-large' />
              <Skeleton className='bg-default-200 hidden h-[37px] w-[88px] rounded-large lg:block' />
              <Skeleton className='bg-default-200 hidden h-[37px] w-[102px] rounded-large lg:block' />
              <Skeleton className='bg-default-200 hidden h-[37px] w-[98px] rounded-large lg:block' />
              <Skeleton className='bg-default-200 hidden h-[37px] w-[108px] rounded-large lg:block' />
              <Skeleton className='bg-default-200 hidden h-[37px] w-[88px] rounded-large lg:block' />
            </div>
          )}
          <Skeleton
            className={`bg-default-200 h-[37px] w-[166px] rounded-large ${isFilter ? 'hidden' : 'hidden lg:block'}`}
          />
        </div>
        <ProductCardListSkeleton additionalClass={classProductList} />
        <div className='flex w-full justify-center'>
          <Skeleton className='bg-default-200 h-[37px] w-[300px] rounded-large' />
        </div>
      </div>
    </div>
  )
}
