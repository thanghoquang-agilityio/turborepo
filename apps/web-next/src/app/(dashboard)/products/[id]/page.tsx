import { Metadata } from 'next'

import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

import { PRODUCT_RELATIONSHIP } from '@/constants'
// Service
import { getProductById } from '@/services'

// Components
const ProductDetail = dynamic(() => import('@/ui/product-detail/ProductDetail'))

type ProductDetailProps = {
  params: { id: string }
}

// Note: With flattened API structure, populate parameters may not be needed
// or may work differently. Keeping for now but may need adjustment based on your API
const searchParams = new URLSearchParams({
  'populate[0]': PRODUCT_RELATIONSHIP.IMAGE,
  'populate[1]': PRODUCT_RELATIONSHIP.IMAGE_LIST,
  'populate[2]': PRODUCT_RELATIONSHIP.PRODUCT_VARIANTS,
})

export async function generateMetadata({
  params,
}: ProductDetailProps): Promise<Metadata> {
  const id = params.id

  const product = await getProductById(id, searchParams)

  if (!product) return { title: 'Not Found' }
  const { name = 'Name Default' } = product

  // TODO: If product has direct image property or you fetch images separately
  // const images = product.images || await getProductImages(id)
  // const ogImages = images?.length > 0 ? [images[0].url] : []

  return {
    title: name,
    openGraph: {
      images: [], // Will be updated when image relationship is clarified
    },
  }
}

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const product = await getProductById(id, searchParams)

  if (!product) {
    notFound()
  }

  // TODO: With flattened API structure, you may need to:
  // 1. Check if images/variants are included in the product response directly
  // 2. Make separate API calls to get related images and variants
  // 3. Update the API to include them in the populate response
  
  // Example of how you might handle this:
  // const images = product.images || await getProductImages(id)
  // const productVariants = product.productVariants || await getProductVariants(id)
  
  return (
    <ProductDetail 
      product={product}
      // images={images}
      // productVariants={productVariants}
    />
  )
}

export default ProductDetailPage
