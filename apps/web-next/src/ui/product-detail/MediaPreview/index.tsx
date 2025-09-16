'use client'

import { memo, useState } from 'react'

// Components
import { ButtonIcon, CustomImage } from '@/components'
// Constants
import { API_IMAGE_URL } from '@/constants'
import { ArrowLeftIcon, ArrowRightIcon } from '@/icons'
// Types
import { ImageModel } from '@/types'

import { ThumbnailItem } from './ThumbnailItem'

const MediaPreview = memo(({ images }: { images: ImageModel[] }) => {
  const [select, setSelect] = useState<number>(0)

  const handleSelect = (direction: 'left' | 'right') => {
    setSelect((prev) => {
      if (direction === 'left') return prev > 0 ? prev - 1 : images.length - 1

      return prev < images.length - 1 ? prev + 1 : 0
    })
  }

  const image = images[select]
  const { url = '', name = '' } = image

  return (
    <div className='flex h-full flex-col items-center gap-4 lg:gap-[37px]'>
      <div className='flex h-[375px] w-full justify-center overflow-hidden rounded-[17px] sm:h-[450px] md:h-[525px] lg:h-auto lg:max-w-[498px] xl:max-w-[587px]'>
        <CustomImage
          src={`${API_IMAGE_URL}${url}`}
          alt={name}
          className='h-[375px] rounded-[17px] sm:h-[450px] md:h-[525px] lg:h-[600px] xl:h-[691px]'
          width={587}
          height={691}
          priority
        />
      </div>
      {images.length > 1 && (
        <div className='flex items-center gap-4 sm:hidden lg:gap-2.5'>
          <ButtonIcon
            variant='ghost'
            size='sm'
            shape='circle'
            additionalClass='p-0 min-w-6 min-h-6 w-6 h-6 text-default'
            data-testid='btn-arrow-mobile-left'
            onClick={() => handleSelect('left')}
          >
            <ArrowLeftIcon />
          </ButtonIcon>
          <ButtonIcon
            variant='ghost'
            size='sm'
            shape='circle'
            additionalClass='p-0 min-w-6 min-h-6 w-6 h-6 text-default'
            data-testid='btn-arrow-mobile-right'
            onClick={() => handleSelect('right')}
          >
            <ArrowRightIcon />
          </ButtonIcon>
        </div>
      )}
      {images.length > 1 && (
        <div className='hidden items-center sm:flex lg:gap-2.5'>
          <ButtonIcon
            variant='ghost'
            size='sm'
            shape='circle'
            additionalClass='p-0 min-w-6 min-h-6 w-6 h-6 text-default xl:block lg:hidden'
            data-testid='btn-arrow-left'
            onClick={() => handleSelect('left')}
          >
            <ArrowLeftIcon />
          </ButtonIcon>
          <div className='sm:flex sm:gap-3 xl:gap-5'>
            {images.slice(0, 4).map(({ name, url }, index) => (
              <ThumbnailItem
                onSelect={setSelect}
                alt={name}
                url={url}
                key={index}
                id={index}
                isSelected={index === select}
              />
            ))}
          </div>
          <ButtonIcon
            variant='ghost'
            size='sm'
            shape='circle'
            additionalClass='p-0 min-w-6 min-h-6 w-6 h-6 text-default xl:block lg:hidden'
            data-testid='btn-arrow-right'
            onClick={() => handleSelect('right')}
          >
            <ArrowRightIcon />
          </ButtonIcon>
        </div>
      )}
    </div>
  )
})

MediaPreview.displayName = 'MediaPreview'
export default MediaPreview
