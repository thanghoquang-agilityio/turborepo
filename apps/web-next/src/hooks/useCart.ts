'use client'

import { useCallback, useState } from 'react'

// Actions
import {
  createOrUpdateCartItem,
  deleteCartItem,
  updateCartItem,
} from '@/app/actions'
// constants
import { CART_MESSAGES } from '@/constants'
// Toasts
import { useToast } from '@/context/toast'
import { TOAST_TYPE } from '@/hocs/withToast'
// Types
import { CartItemPayload } from '@/types'

export const useCart = () => {
  const openToast = useToast()
  const [isPending, setIsPending] = useState(false)

  const handleQuantityChange = useCallback(
    async (documentId: string, cartItem: CartItemPayload) => {
      const response = await updateCartItem(documentId, cartItem)

      const { FAILED, SUCCESS } = CART_MESSAGES.UPDATE
      const message = response ? SUCCESS : FAILED

      openToast({
        type: response ? TOAST_TYPE.SUCCESS : TOAST_TYPE.ERROR,
        message,
      })

      return response
    },
    [openToast]
  )

  const handleRemove = useCallback(
    async (documentId: string) => {
      setIsPending(true)

      const isSuccess = await deleteCartItem(documentId)

      const { FAILED, SUCCESS } = CART_MESSAGES.REMOVE
      const message = isSuccess ? SUCCESS : FAILED

      setIsPending(false)

      openToast({
        type: isSuccess ? TOAST_TYPE.SUCCESS : TOAST_TYPE.ERROR,
        message,
      })

      return isSuccess
    },
    [openToast]
  )

  const handleCreateOrUpdate = useCallback(
    async (cartItem: CartItemPayload) => {
      setIsPending(true)
      const response = await createOrUpdateCartItem(cartItem)
      setIsPending(false)

      const { FAILED, SUCCESS, WARNING } = CART_MESSAGES.ADD
      const message =
        response === null ? FAILED : response?.isOverStock ? WARNING : SUCCESS

      openToast({
        type:
          response === null
            ? TOAST_TYPE.ERROR
            : response?.isOverStock
              ? TOAST_TYPE.WARNING
              : TOAST_TYPE.SUCCESS,
        message,
      })

      return response
    },
    [openToast]
  )
  return {
    isPending,
    handleQuantityChange,
    handleRemove,
    handleCreateOrUpdate,
  }
}
