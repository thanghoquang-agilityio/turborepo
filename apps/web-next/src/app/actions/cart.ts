'use server'

// Types
// Services
import {
  createOrUpdateCartItem as createOrUpdateCartItemSV,
  deleteCartItem as deleteCartItemSV,
  updateCartItem as updateCartItemSV,
} from '@/services'
import { CartItemPayload } from '@/types'

export const createOrUpdateCartItem = async (cartItem: CartItemPayload) => {
  const searchParams = new URLSearchParams()
  searchParams.set('filters[userId][$eq]', `${cartItem.userId}`)
  searchParams.set(
    'filters[productVariantId][$eq]',
    `${cartItem.productVariantId}`
  )
  searchParams.set('filters[size][$eq]', `${cartItem.size}`)
  searchParams.set('populate[productVariantId]', '*')

  return await createOrUpdateCartItemSV(cartItem, searchParams)
}

export const deleteCartItem = async (id: string) => await deleteCartItemSV(id)

export const updateCartItem = async (id: string, cartItem: CartItemPayload) =>
  await updateCartItemSV(id, cartItem)
