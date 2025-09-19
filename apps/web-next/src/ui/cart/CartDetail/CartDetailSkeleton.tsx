import { Skeleton } from '@repo/next-ui'

// Styles
import '@/styles/card-list.css'
import '@/styles/card.css'

import { CartItemsSkeleton } from './CartItemsSkeleton'

export const CartDetailSkeleton = () => (
  <div className='container flex w-full max-w-full flex-col items-center gap-[40px] py-8 lg:flex-row lg:items-start lg:py-12 xl:py-16'>
    <CartItemsSkeleton />
    <Skeleton className='bg-default-200 mb-8 h-[464px] w-[304px] min-w-[304px] rounded-medium border-medium border-background-300 p-4' />
  </div>
)
