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
  searchParams.set('filters[productVariantId][$eq]', `${cartItem.productVariantId}`)
  searchParams.set('filters[size][$eq]', `${cartItem.size}`)
  searchParams.set('filters[publishedAt][$notNull]', 'true')
  searchParams.set('populate', 'productVariantId')

  return await createOrUpdateCartItemSV(cartItem, searchParams)
}

export const deleteCartItem = async (documentId: string) => await deleteCartItemSV(documentId)

export const updateCartItem = async (documentId: string, cartItem: CartItemPayload) => await updateCartItemSV(documentId, cartItem)
