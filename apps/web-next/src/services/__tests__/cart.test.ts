import { USER_ID_DEFAULT } from '@/constants'
import { MOCK_CART_RESPONSE } from '@/mocks'

import { apiClient } from '../api'
import {
  addCartItem,
  createOrUpdateCartItem,
  deleteCartItem,
  getCartByUserId,
  updateCartItem,
} from '../cart'

jest.mock('@/services/api')
jest.mock('next/cache')

describe('Cart Service tests', () => {
  const cartItemId = '1'
  const cartPayload = {
    productVariantId: 1,
    userId: Number(USER_ID_DEFAULT),
    size: 'small',
    quantity: 2,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('getCartByUserId returns value correctly', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: MOCK_CART_RESPONSE })

    const result = await getCartByUserId()
    expect(result).toStrictEqual({ cartItems: MOCK_CART_RESPONSE })
  })

  it('getCartByUserId returns empty cart when API call fails', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error('Failed'))

    const result = await getCartByUserId()
    expect(result).toStrictEqual({ cartItems: [] })
  })

  it('addCartItem returns value correctly', async () => {
    jest
      .spyOn(apiClient, 'post')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[0] })

    const result = await addCartItem(cartPayload)
    expect(result).toStrictEqual(MOCK_CART_RESPONSE[0])
  })

  it('addCartItem returns null when API call fails', async () => {
    jest.spyOn(apiClient, 'post').mockRejectedValue(new Error('Failed'))

    const result = await addCartItem(cartPayload)
    expect(result).toBeNull()
  })

  it('updateCartItem returns value correctly', async () => {
    jest
      .spyOn(apiClient, 'put')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[0] })

    const result = await updateCartItem(cartItemId, cartPayload)
    expect(result).toStrictEqual(MOCK_CART_RESPONSE[0])
  })

  it('updateCartItem returns null when API call fails', async () => {
    jest.spyOn(apiClient, 'put').mockRejectedValue(new Error('Failed'))

    const result = await updateCartItem(cartItemId, cartPayload)
    expect(result).toBeNull()
  })

  it('createOrUpdateCartItem adds a new item when the cart is empty', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: [] })
    jest
      .spyOn(apiClient, 'post')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[0] })

    const result = await createOrUpdateCartItem(cartPayload)
    expect(result).toStrictEqual({
      cartItem: MOCK_CART_RESPONSE[0],
      isOverStock: false,
    })
  })

  it('createOrUpdateCartItem updates an existing item when the cart is not empty and overstocked', async () => {
    jest
      .spyOn(apiClient, 'get')
      .mockResolvedValue({ data: [MOCK_CART_RESPONSE[0]] })
    jest
      .spyOn(apiClient, 'put')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[0] })

    const result = await createOrUpdateCartItem(cartPayload)
    expect(result).toStrictEqual({
      cartItem: MOCK_CART_RESPONSE[0],
      isOverStock: false,
    })
  })

  it('createOrUpdateCartItem returns null when API call fails', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error('Failed'))

    const result = await createOrUpdateCartItem(cartPayload)
    expect(result).toBeNull()
  })

  it('deleteCartItem returns true when the delete operation is successful', async () => {
    jest.spyOn(apiClient, 'delete').mockResolvedValue(true)

    const result = await deleteCartItem(cartItemId)
    expect(result).toBe(true)
  })

  it('deleteCartItem returns false when the response is not as expected', async () => {
    jest.spyOn(apiClient, 'delete').mockResolvedValue(undefined)

    const result = await deleteCartItem(cartItemId)
    expect(result).toBe(false)
  })

  it('deleteCartItem returns false when API call fails', async () => {
    jest.spyOn(apiClient, 'delete').mockRejectedValue(new Error('Failed'))

    const result = await deleteCartItem(cartItemId)
    expect(result).toBe(false)
  })
})
