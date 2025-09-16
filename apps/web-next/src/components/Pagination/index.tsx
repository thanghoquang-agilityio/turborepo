'use client'

import { memo, useCallback } from 'react'

// Components
import { Button, Text } from '@/components'
// Hooks
import { DOTS, usePagination } from '@/hooks'

interface PaginationProps {
  onPageChange?: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

const Pagination = memo(
  ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  }: PaginationProps) => {
    const paginationRange = usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    })

    const onClickNextButton = useCallback(() => {
      onPageChange?.(currentPage + 1)
    }, [currentPage, onPageChange])

    const onClickPreviousButton = useCallback(() => {
      onPageChange?.(currentPage - 1)
    }, [currentPage, onPageChange])

    const paginationRangeLength = paginationRange.length
    const showItemsPagination = paginationRangeLength > 1
    const lastPage = paginationRange[paginationRangeLength - 1]

    return (
      <>
        {showItemsPagination && (
          <div className='flex w-full items-center justify-center gap-2 md:m-0 md:justify-center'>
            <Button
              variant='faded'
              onClick={onClickPreviousButton}
              disabled={currentPage === 1}
            >
              Previews
            </Button>

            {paginationRange.map((pageNumber, index) => {
              const isActivePage = currentPage === pageNumber

              if (pageNumber === DOTS) {
                return (
                  <Text
                    key={`pagination-${index}`}
                    variant='subTitle'
                    size='md'
                  >
                    ...
                  </Text>
                )
              }

              return (
                <Button
                  variant='light'
                  aria-label={'Page button ' + pageNumber}
                  key={`pagination-${index}-${pageNumber}`}
                  disabled={isActivePage}
                  onClick={() => onPageChange?.(pageNumber as number)}
                >
                  {pageNumber}
                </Button>
              )
            })}

            <Button
              variant='faded'
              onClick={onClickNextButton}
              disabled={currentPage === lastPage}
            >
              Next
            </Button>
          </div>
        )}
      </>
    )
  }
)

Pagination.displayName = 'Pagination'
export default Pagination
