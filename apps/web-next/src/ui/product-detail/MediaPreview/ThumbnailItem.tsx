import { memo } from 'react'

// Component
import { CustomImage } from '@/components'
import { cn } from '@/lib/utils'
// Constants
import { API_IMAGE_URL } from '@/constants'

interface ThumbnailItemProps {
  onSelect: (id: number) => void
  id: number
  alt: string
  url: string
  isSelected?: boolean
}

export const ThumbnailItem = memo(
  ({ alt, url, isSelected, onSelect, id }: ThumbnailItemProps) => {
    return (
      <button
        data-testid={`thumbnail-item-${id}`}
        onClick={() => {
          onSelect(id)
        }}
        className={cn(
          'relative flex items-center justify-center rounded-[14px] sm:h-[106px] sm:w-[106px] xl:h-[115px] xl:w-[115px]',
          isSelected ? 'bg-linear-blue dark:bg-linear-white' : ''
        )}
      >
        <CustomImage
          alt={alt}
          src={`${API_IMAGE_URL}${url}`}
          className='h-full w-full rounded-[14px] p-[3px]'
          width={115}
          height={115}
          style={{ objectFit: 'cover' }}
        />
      </button>
    )
  }
)

ThumbnailItem.displayName = 'ThumbnailItem'
