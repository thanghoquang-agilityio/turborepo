import { CartItemModel, ImageModel } from '@/types'

type CartItems = Omit<CartItemModel, 'productVariantId'> & {
  id: number
}

export interface UserModel {
  username: string
  email: string
  image?: ImageModel
  cartItems: CartItems[]
}

