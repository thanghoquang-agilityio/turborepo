import {
  ImageModel,
  MetaResponse,
} from '@/types'

export interface ProductVariantModel {
  id: number
  color: string
  size: string
  stock: string
  tax: number
  productId?: ProductModel
}

export interface ProductModel {
  id: number
  documentId: string
  name: string
  description: string
  image?: ImageModel
  imageList?: ImageModel[]
  discount: number
  price: number
  likes: number
  star: number
  comments: number
  brand: string
  productVariants?: ProductVariantModel[]
}

export type ProductsDataResponse = Promise<
  { products: ProductModel[]; error?: Error } & MetaResponse
>

export type ProductsResponse = {
  data: ProductModel[]
  meta: MetaResponse
}
