import { revalidateTag } from 'next/cache'

// Constants
import { API_ENDPOINT } from '@/constants'
// Services
import { apiClient } from '@/services'
// Models
import {
  CartItemPayload,
  CartItemResponse,
  CartItemsDataResponse,
  CartItemsResponse,
} from '@/types'
// Utils
import { getOverStock } from '@/utils'

export const getCartByUserId = async (
  searchParams: URLSearchParams = new URLSearchParams()
): CartItemsDataResponse => {
  try {
    const url = decodeURIComponent(
      `/${API_ENDPOINT.CARTS}?${searchParams.toString()}`
    )

    const { data } = await apiClient.get<CartItemsResponse>(url, {
      next: {
        tags: [API_ENDPOINT.CARTS],
        revalidate: 3600,
      },
    })

    return {
      cartItems: data,
    }
  } catch (_error) {
    const errorMessage =
      _error instanceof Error
        ? _error.message
        : 'An unexpected error occurred in the request get cart'

    // During build time or when API is unavailable, return empty cart
    // eslint-disable-next-line no-console
    console.warn('Failed to fetch cart data:', errorMessage)
    return {
      cartItems: [],
    }
  }
}

export const addCartItem = async (
  cartItem: CartItemPayload
): Promise<CartItemResponse | null> => {
  try {
    const data = await apiClient.post<CartItemResponse>(
      `/${API_ENDPOINT.CARTS}`,
      {
        body: cartItem,
      }
    )
    revalidateTag(API_ENDPOINT.CARTS)
    revalidateTag(API_ENDPOINT.USERS)

    return data
  } catch (_error) {
    const errorMessage =
      _error instanceof Error
        ? _error.message
        : 'An unexpected error occurred in the request add cart item'

    // eslint-disable-next-line no-console
    console.warn('Failed to add cart item:', errorMessage)

    return null
  }
}

export const updateCartItem = async (
  documentId: string,
  cartItem: CartItemPayload
): Promise<CartItemResponse | null> => {
  try {
    const data = await apiClient.put<CartItemResponse>(
      `/${API_ENDPOINT.CARTS}/${documentId}`,
      {
        body: {
          quantity: cartItem.quantity,
        },
      }
    )
    revalidateTag(API_ENDPOINT.CARTS)
    revalidateTag(API_ENDPOINT.USERS)

    return data
  } catch (_error) {
    const errorMessage =
      _error instanceof Error
        ? _error.message
        : 'An unexpected error occurred in the request update cart item'

    // eslint-disable-next-line no-console
    console.warn('Failed to update cart item:', errorMessage)

    return null
  }
}

export const deleteCartItem = async (documentId: string) => {
  try {
    const response = await apiClient.delete<CartItemResponse>(
      `/${API_ENDPOINT.CARTS}/${documentId}`
    )
    if (response) {
      revalidateTag(API_ENDPOINT.CARTS)
      revalidateTag(API_ENDPOINT.USERS)

      return true
    }

    return false
  } catch (_error) {
    const errorMessage =
      _error instanceof Error
        ? _error.message
        : 'An unexpected error occurred in the request delete cart item'

    // eslint-disable-next-line no-console
    console.warn('Failed to delete cart item:', errorMessage)
    return false
  }
}

export const createOrUpdateCartItem = async (
  cartItem: CartItemPayload,
  searchParams: URLSearchParams = new URLSearchParams()
): Promise<{
  cartItem: CartItemResponse | null
  isOverStock: boolean
} | null> => {
  try {
    const url = decodeURIComponent(
      `/${API_ENDPOINT.CARTS}?${searchParams.toString()}`
    )

    const data = await apiClient.get<CartItemResponse[]>(url)
    const existingCartItem = data[0] || {}
    const { productVariantId } = existingCartItem
    const stocks = productVariantId?.stock || ''
    const sizes = productVariantId?.size || ''

    let overStock = {
      isOverStock: false,
      stock: 1,
    }

    let response: CartItemResponse | null

    if (data.length) {
      const newQuantity = existingCartItem.quantity + cartItem.quantity
      overStock = getOverStock({
        sizes,
        stocks,
        size: cartItem.size,
        quantity: newQuantity,
      })
      const documentId = existingCartItem.documentId || ''
      response = await updateCartItem(documentId, {
        productVariantId: cartItem.productVariantId,
        userId: cartItem.userId,
        size: cartItem.size,
        quantity: overStock.isOverStock ? overStock.stock : newQuantity,
      })
    } else {
      response = await addCartItem(cartItem)
    }

    return {
      cartItem: response,
      isOverStock: overStock.isOverStock,
    }
  } catch (_error) {
    const errorMessage =
      _error instanceof Error
        ? _error.message
        : 'An unexpected error occurred in the request get cart'

    // During build time or when API is unavailable, return empty cart
    // eslint-disable-next-line no-console
    console.warn('Failed to fetch cart data:', errorMessage)

    return null
  }
}
