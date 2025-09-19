import { Skeleton } from '@repo/next-ui'

export const MediaPreviewImageSkeleton = () => (
  <div className='img-preview my-[30px] h-auto lg:my-0'>
    <div className='flex h-full flex-col items-center gap-4 lg:gap-[37px]'>
      <div className='flex h-[375px] w-full justify-center sm:h-[450px] md:h-[525px] lg:h-full lg:max-w-[498px] xl:max-w-[587px]'>
        <Skeleton className='bg-default-200 h-full w-full rounded-[17px]' />
      </div>
      <div className='hidden items-center sm:flex lg:gap-2.5'>
        <div className='sm:flex sm:gap-3 xl:gap-5'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={`product-image-${index}`}
                className='bg-default-200 flex items-center justify-center rounded-[14px] sm:h-[106px] sm:w-[106px] xl:h-[115px] xl:w-[115px]'
              />
            ))}
        </div>
      </div>
    </div>
  </div>
)
