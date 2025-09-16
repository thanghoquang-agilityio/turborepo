import { ProductVariantModel } from '@/types'

export interface CartItemModel {
  size: string
  quantity: number
  productVariantId?: ProductVariantModel
}

// New flattened cart item response structure
export interface CartItemResponse {
  id: number
  documentId: string
  size: string
  quantity: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  productVariantId?: ProductVariantModel
  userId?: number
}

export type CartItemPayload = {
  size: string
  quantity: number
  productVariantId: number
  userId: number
}

export type CartItemsDataResponse = Promise<{
  cartItems: CartItemResponse[]
  error?: Error
}>

export type CartItemsResponse = {
  data: CartItemResponse[]
}
