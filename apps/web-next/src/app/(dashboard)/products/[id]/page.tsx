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
  
  const images = product.imageList
  const productVariants = product.productVariants
  
  return (
    <ProductDetail 
      product={product}
      images={images}
      productVariants={productVariants}
    />
  )
}

export default ProductDetailPage
