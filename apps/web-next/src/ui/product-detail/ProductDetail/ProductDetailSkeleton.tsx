// Constants
// Components
import { Skeleton } from '@repo/next-ui'

import { borderStyle } from '@/constants'
// Styles
import '@/styles/card-list.css'
import '@/styles/card.css'

import { MediaPreviewImageSkeleton } from '../MediaPreview/MediaPreviewSkeleton'

export const ProductDetailSkeleton = () => {
  const classBorder = `relative ${borderStyle} before:top-[-30px]`

  return (
    <div className='container grid max-w-full py-4 lg:grid-cols-2 lg:gap-[22px] lg:py-8 xl:gap-[106px] xl:py-10'>
      <div className='block lg:hidden'>
        <Skeleton className='bg-default-200 h-[30px] w-[350px] rounded-large' />
        <div className='mt-[30px] flex flex-col justify-between gap-3 sm:flex-row'>
          <div className='overflow-hidden'>
            <Skeleton className='bg-default-200 h-[32px] w-[200px] rounded-large' />
            <Skeleton className='bg-default-200 mt-1 h-[18px] w-[150px] rounded-large' />
          </div>
          <div className='flex gap-[13px]'>
            <Skeleton className='bg-default-200 h-[28px] w-[80px] rounded-small' />
            <Skeleton className='bg-default-200 h-[28px] w-[28px] rounded-small' />
            <Skeleton className='bg-default-200 h-[28px] w-[28px] rounded-small' />
          </div>
        </div>
      </div>
      <MediaPreviewImageSkeleton />
      <div className='flex flex-col gap-[60px] lg:max-w-[582px]'>
        <div className='hidden lg:block'>
          <Skeleton className='bg-default-200 h-[30px] w-[350px] rounded-large' />
          <div className='mt-[30px] flex flex-col justify-between gap-3 sm:flex-row'>
            <div className='overflow-hidden'>
              <Skeleton className='bg-default-200 h-[32px] w-[200px] rounded-large' />
              <Skeleton className='bg-default-200 mt-1 h-[18px] w-[150px] rounded-large' />
            </div>
            <div className='flex gap-[13px]'>
              <Skeleton className='bg-default-200 h-[32px] w-[76px] rounded-small' />
              <Skeleton className='bg-default-200 h-[32px] w-[32px] rounded-small' />
              <Skeleton className='bg-default-200 h-[32px] w-[32px] rounded-small' />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 sm:flex-row sm:gap-[41px] lg:before:absolute lg:before:top-[-30px] lg:before:w-full lg:before:border-t-small lg:before:border-background-300 lg:before:content-['']">
          <div className='flex flex-row gap-3 sm:flex-col sm:gap-0'>
            <Skeleton className='bg-default-200 h-[38px] w-[140px] rounded-large' />
            <Skeleton className='bg-default-200 mt-1 h-[28px] w-[100px] rounded-large' />
          </div>
          <div>
            <div className='mt-[5px] flex gap-3'>
              <Skeleton className='bg-default-200 h-[32px] w-[60px] rounded-large' />
              <Skeleton className='bg-default-200 h-[32px] w-[120px] rounded-large' />
            </div>
            <Skeleton className='bg-default-200 mt-1 h-[14px] w-[250px] rounded-large' />
          </div>
        </div>
        <div className={classBorder}>
          <Skeleton className='bg-default-200 mb-3 h-[22px] w-[100px] rounded-large' />
          <div className='flex gap-5'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={`product-image-${index}`}
                  className='bg-default-200 h-[46px] w-[46px] rounded-full sm:h-[64px] sm:w-[64px]'
                />
              ))}
          </div>
        </div>
        <div className={classBorder}>
          <Skeleton className='bg-default-200 mb-3 h-[22px] w-[100px] rounded-large' />
          <div className='flex gap-3 sm:gap-5'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={`product-image-${index}`}
                  className='bg-default-200 h-[30px] w-[80px] rounded-[14px]'
                />
              ))}
          </div>
          <Skeleton className='bg-default-200 mt-2 h-[18px] w-[120px] rounded-large' />
        </div>
        <div
          className={`${classBorder} flex flex-col items-center gap-[30px] sm:items-start`}
        >
          <div className='flex gap-5'>
            <Skeleton className='bg-default-200 h-[40px] w-[160px] rounded-[30px] sm:h-[60px] sm:w-[170px]' />
            <Skeleton className='bg-default-200 h-[40px] w-[160px] rounded-[30px] sm:h-[60px] sm:w-[260px] xl:w-[310px]' />
          </div>
          <Skeleton className='bg-default-200 h-[116px] w-full rounded-[14px]' />
        </div>
      </div>
    </div>
  )
}
