import { Suspense } from 'react'

import dynamic from 'next/dynamic'

// Constants
import { COMMENTS_DEFAULT, IMAGE_DEFAULT, STAR_DEFAULT } from '@/constants'
// Types
import { ImageModel, ProductResponse, ImageResponse, ProductVariantResponse } from '@/types'

const MediaPreview = dynamic(() => import('@/ui/product-detail/MediaPreview'))
const ProductHeaderInfo = dynamic(
  () => import('@/ui/product-detail/ProductDetail/ProductHeaderInfo')
)
const ProductAction = dynamic(
  () => import('@/ui/product-detail/ProductDetail/ProductAction')
)

interface ProductDetailProps {
  product: ProductResponse
  // Add optional image and variant data that might come from relationships or separate calls
  images?: ImageResponse[]
  productVariants?: ProductVariantResponse[]
}

const ProductDetail = ({ product, images = [], productVariants = [] }: ProductDetailProps) => {
  const {
    name = '',
    discount = 0,
    price = 0,
    likes = 0,
    star,
    comments,
    brand = '',
  } = product

  // Convert ImageResponse to ImageModel format for MediaPreview component
  const mediaPreview: ImageModel[] = images.length > 0 
    ? images.map((img) => ({
        name: img.name,
        hash: img.hash,
        ext: img.ext,
        formats: img.formats,
        url: img.url,
      }))
    : [IMAGE_DEFAULT]

  return (
    <div className='container grid max-w-full py-4 lg:grid-cols-2 lg:gap-[22px] lg:py-8 xl:gap-[106px] xl:py-10'>
      <div className='block lg:hidden'>
        <ProductHeaderInfo name={name} likes={likes} brand={brand} />
      </div>
      <div className='img-preview my-[30px] h-auto lg:my-0'>
        <Suspense>
          <MediaPreview images={mediaPreview} />
        </Suspense>
      </div>
      <div className='flex flex-col gap-[60px] lg:max-w-[582px]'>
        <div className='hidden lg:block'>
          <ProductHeaderInfo name={name} likes={likes} brand={brand} />
        </div>
        <ProductAction
          productVariants={productVariants}
          discount={discount}
          price={price}
          star={star ?? STAR_DEFAULT}
          comments={comments ?? COMMENTS_DEFAULT}
        />
      </div>
    </div>
  )
}

export default ProductDetail
