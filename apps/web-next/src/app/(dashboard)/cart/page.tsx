import { Metadata } from 'next'

import dynamic from 'next/dynamic'

// Constants
import { USER_ID_DEFAULT } from '@/constants'
// Service
import { getCartByUserId } from '@/services'

// Components
const CartDetail = dynamic(() => import('@/ui/cart/CartDetail'))

export const metadata: Metadata = {
  title: 'Cart',
}

const CartPage = async () => {
  const searchParams = new URLSearchParams()
  searchParams.set('filters[userId][$eq]', USER_ID_DEFAULT)
  searchParams.set(`sort[0]`, 'createdAt:desc')
  searchParams.set('populate', 'productVariantId.productId.image')

  const { cartItems } = await getCartByUserId(searchParams)

  return <CartDetail cartItems={cartItems} />
}

export default CartPage
