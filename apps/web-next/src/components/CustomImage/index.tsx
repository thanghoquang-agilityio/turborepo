'use client'

import { memo, useState } from 'react'

import Image, { type ImageProps } from 'next/image'

// Constants
import { IMAGE_NOT_AVAILABLE, SRC_IMAGE_NOT_AVAILABLE } from '@/constants'

export const CustomImage = memo(
  ({ className, src, alt, style, ...rest }: ImageProps) => {
    const [fallbackSrc, setFallbackSrc] = useState(false)

    const handleOnError = () => setFallbackSrc(true)
    const altImage =
      src !== SRC_IMAGE_NOT_AVAILABLE && alt ? alt : IMAGE_NOT_AVAILABLE

    return (
      <Image
        className={className}
        src={fallbackSrc ? SRC_IMAGE_NOT_AVAILABLE : src}
        alt={altImage}
        onError={handleOnError}
        style={{ objectFit: 'cover', ...style }}
        {...rest}
      />
    )
  }
)

CustomImage.displayName = 'CustomImage'
