import { headers } from 'next/headers'

import { Skeleton } from '@nextui-org/react'

import { ProductListSkeleton } from '@/ui/product/ProductList/ProductListSkeleton'

const Loading = () => {
  const headersList = headers()
  const refererUrl = headersList.get('referer') || ''

  const category = refererUrl
    ? new URL(refererUrl).searchParams.get('category')
    : ''

  return (
    <>
      <Skeleton className='h-[180px] rounded-none md:h-[287px] 2xl:rounded-large' />
      <ProductListSkeleton isFilter={!!category} />
    </>
  )
}

export default Loading
