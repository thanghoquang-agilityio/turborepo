'use client'

import { Suspense, useCallback, useMemo, useTransition } from 'react'

import dynamic from 'next/dynamic'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

// Components
import { Skeleton } from '@nextui-org/react'

import { Button, Content, Text } from '@/components'
import {
  COMMENTS_DEFAULT,
  PAGE_DEFAULT,
  PAGE_SIZE_DEFAULT,
  STAR_DEFAULT,
} from '@/constants'
// Styles
import '@/styles/card-list.css'
// Types
import { FilterItem, MetaResponse, ProductModel } from '@/types'

import { ProductCardListSkeleton } from './ProductCardListSkeleton'

const FilterList = dynamic(() => import('@/components/FilterList'))
const ProductCard = dynamic(() => import('../ProductCard'))
const Pagination = dynamic(() => import('@/components/Pagination'))
const SelectMultiple = dynamic(
  () => import('@/components/common/SelectMultiple')
)

interface ProductListProps extends MetaResponse {
  products: ProductModel[]
  categories: FilterItem[]
  valueCategories?: string[]
  isFilter?: boolean
}

const ProductList = ({
  products,
  pagination,
  categories,
  isFilter,
  valueCategories = [],
}: ProductListProps) => {
  const {
    page = PAGE_DEFAULT,
    pageSize = PAGE_SIZE_DEFAULT,
    total = PAGE_SIZE_DEFAULT * PAGE_DEFAULT,
  } = pagination

  const [isPending, startTransition] = useTransition()

  const searchParams = useSearchParams() ?? ''
  const pathname = usePathname() ?? ''
  const router = useRouter()

  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  )

  const handleReplaceURL = useCallback(
    (params: URLSearchParams) => {
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`)
      })
    },
    [pathname, router]
  )

  const handlePageChange = useCallback(
    (page: number) => {
      if (page === 1) {
        params.delete('page')
      } else if (!params.getAll('page').includes(String(page))) {
        params.append('page', String(page))
      }

      handleReplaceURL(params)
    },
    [handleReplaceURL, params]
  )

  const handleClearFilter = useCallback(() => {
    startTransition(() => {
      router.replace(`${pathname}`)
    })
  }, [pathname, router])

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
        <div className='mb-8 flex w-[304px] flex-col'>
          <div className='flex justify-between'>
            <Text
              variant='default'
              className='text-xl font-medium text-secondary-200'
            >
              Filters
            </Text>

            <Button
              variant='bordered'
              size='sm'
              additionalClass='min-w-[95px] w-[95px] text-foreground-100 font-normal'
              onClick={handleClearFilter}
            >
              Clear All
            </Button>
          </div>
          <div className='mt-5 w-[304px] rounded-medium border-medium border-background-300 p-4'>
            <Suspense>
              <FilterList
                title='Category'
                isOpen={true}
                items={categories}
                defaultValue={valueCategories}
                handleReplaceURL={handleReplaceURL}
              />
            </Suspense>
          </div>
        </div>
      )}

      <div className='w-full'>
        <div
          className={`flex flex-col items-center gap-4 sm:flex-row lg:justify-between ${isFilter ? 'mb-[20px] justify-between' : 'mb-6 justify-end xl:mb-12'}`}
        >
          <div className='flex gap-3'>
            {isFilter ? (
              <>
                {isPending ? (
                  <Skeleton className='bg-default-200 hidden h-[37px] w-[200px] rounded-large sm:block' />
                ) : (
                  <Text variant='title' size='sm'>
                    {page === 1
                      ? `Showing ${total < pageSize ? total : pageSize} Result from total ${total}`
                      : `Showing ${pageSize * (page - 1) + 1} to ${pageSize * page > total ? total : pageSize * page} Result from total ${total}`}
                  </Text>
                )}
              </>
            ) : (
              <Suspense>
                <SelectMultiple
                  placeholder='Category'
                  items={categories}
                  additionalClass='w-[160px] block'
                  defaultValue={valueCategories}
                  handleReplaceURL={handleReplaceURL}
                />
                <SelectMultiple
                  placeholder='Price'
                  items={[]}
                  additionalClass='w-[88px] lg:block hidden'
                  isDisabled={true}
                />
                <SelectMultiple
                  placeholder='Review'
                  items={[]}
                  additionalClass='w-[102px] lg:block hidden'
                  isDisabled={true}
                />
                <SelectMultiple
                  placeholder='Color'
                  items={[]}
                  additionalClass='w-[98px] lg:block hidden'
                  isDisabled={true}
                />
                <SelectMultiple
                  placeholder='Material'
                  items={[]}
                  additionalClass='w-[108px] lg:block hidden'
                  isDisabled={true}
                />
                <SelectMultiple
                  placeholder='Offer'
                  items={[]}
                  additionalClass='w-[88px] lg:block hidden'
                  isDisabled={true}
                />
              </Suspense>
            )}
          </div>
          <Suspense>
            <SelectMultiple
              placeholder='Headphone type'
              items={[]}
              additionalClass={`w-[166px] bg-background-100 border-small border-foreground-300 ${isFilter ? 'sm:block hidden' : 'lg:block hidden'}`}
              isDisabled={true}
            />
          </Suspense>
        </div>
        {isPending ? (
          <ProductCardListSkeleton additionalClass={classProductList} />
        ) : (
          <>
            {products.length > 0 ? (
              <>
                <div
                  className={`card-list mx-auto mb-[110px] grid w-fit grid-cols-2 gap-x-[20px] gap-y-[30px] ${classProductList}`}
                >
                  {products.map((product: ProductModel) => {
                    const {
                      id = '',
                      name = '',
                      price = 0,
                      star = STAR_DEFAULT,
                      comments = COMMENTS_DEFAULT,
                      image
                    } = product

                    const imageUrl = image?.url
                    
                    const variantsCount = product.productVariants?.length || 0

                    return (
                      <Suspense key={`card-product-suspense-${id}`}>
                        <ProductCard
                          key={`card-product-${id}`}
                          id={id.toString()}
                          image={imageUrl}
                          name={name}
                          price={price}
                          star={star}
                          comments={comments}
                          variants={variantsCount}
                        />
                      </Suspense>
                    )
                  })}
                </div>
                <Suspense>
                  <Pagination
                    currentPage={page}
                    pageSize={pageSize}
                    totalCount={total}
                    onPageChange={handlePageChange}
                  />
                </Suspense>
              </>
            ) : (
              <div className='flex h-[320px] min-h-[320px] flex-col items-center justify-center gap-4'>
                <Content title='Empty product' subTitle='' />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ProductList
