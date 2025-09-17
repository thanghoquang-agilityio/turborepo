'use client'

import { useOptimistic } from 'react'

import { CartItemResponse } from '@/types'
import { calculateAmount } from '@/utils'

export const useOrderSummary = (cartItems: CartItemResponse[]) => {
  const [optimisticCartItems, addOptimisticCartItems] = useOptimistic(
    Array.isArray(cartItems) ? cartItems : [],
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

  const { totalAmount, totalItems } = (Array.isArray(optimisticCartItems) ? optimisticCartItems : []).reduce(
    (acc, cartItem) => {
      const { quantity = 0, productVariantId } = cartItem
      const { tax = 0 } = productVariantId || {}

      const discount = productVariantId?.productId?.discount || 0
      const price = productVariantId?.productId?.price || 0

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
