import { APIRelatedResponse, CartItemModel, ImageResponse, CartItemResponse } from '@/types'

type CartItems = Omit<CartItemModel, 'productVariantId'> & {
  id: number
}

export interface UserModel {
  username: string
  email: string
  image?: APIRelatedResponse<ImageResponse>
  cartItems: CartItems[]
}

// New flattened user response structure
export interface UserResponse {
  id: number
  documentId: string
  username: string
  email: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image?: ImageResponse
  cartItems?: CartItemResponse[]
}
