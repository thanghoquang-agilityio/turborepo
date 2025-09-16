'use client'

import { useOptimistic } from 'react'

import { CartItemResponse } from '@/types'
import { calculateAmount } from '@/utils'

export const useOrderSummary = (cartItems: CartItemResponse[]) => {
  const [optimisticCartItems, addOptimisticCartItems] = useOptimistic(
    cartItems,
    (state: CartItemResponse[], newCartItem: CartItemResponse) => {
      const existingItemIndex = state.findIndex(
        (item) => item.id === newCartItem.id
      )

      if (existingItemIndex !== -1) {
        const updatedState = [...state]
        updatedState[existingItemIndex] = {
          ...updatedState[existingItemIndex],
          quantity: newCartItem.quantity,
        }

        return updatedState
      } else {
        return [...state, newCartItem]
      }
    }
  )

  const { totalAmount, totalItems } = optimisticCartItems.reduce(
    (acc, cartItem) => {
      const { quantity = 0, productVariantId } = cartItem
      const { tax = 0 } = productVariantId || {}
      
      // Handle product relationship in new API structure
      // These values could come from:
      // 1. Extended cart item with product data: cartItem.productDiscount, cartItem.productPrice
      // 2. Product data on variant: productVariantId?.product?.discount, productVariantId?.product?.price
      // 3. Separate product data passed to hook
      const discount = 0 // cartItem.productDiscount || productVariantId?.product?.discount || 0
      const price = 0 // cartItem.productPrice || productVariantId?.product?.price || 0

      const amount = calculateAmount(tax, discount, price)

      return {
        totalAmount: acc.totalAmount + amount.price * quantity,
        totalItems: acc.totalItems + quantity,
      }
    },
    { totalAmount: 0, totalItems: 0 }
  )

  return {
    totalAmount,
    totalItems,
    addOptimisticCartItems,
  }
}
