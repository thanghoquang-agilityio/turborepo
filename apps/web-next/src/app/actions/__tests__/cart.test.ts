import { USER_ID_DEFAULT } from '@/constants'
import { MOCK_CART_RESPONSE } from '@/mocks'
import { apiClient } from '@/services'

import { createOrUpdateCartItem, deleteCartItem, updateCartItem } from '../cart'

jest.mock('@/services/api')
jest.mock('next/cache')

describe('Cart actions', () => {
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

  it('updateCartItem will return value correctly', async () => {
    jest
      .spyOn(apiClient, 'put')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[0] })

    expect(await updateCartItem(cartItemId, cartPayload)).toStrictEqual(
      MOCK_CART_RESPONSE[0]
    )
  })

  it('updateCartItem throws an error with a specific message when API call fails with an Error object', async () => {
    jest.spyOn(apiClient, 'put').mockRejectedValue(new Error('Failed'))

    const result = await updateCartItem(cartItemId, cartPayload)
    expect(result).toBeNull()
  })

  it('createOrUpdateCartItem will return value correctly', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: [] })

    jest
      .spyOn(apiClient, 'post')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[0] })

    expect(await createOrUpdateCartItem(cartPayload)).toStrictEqual({
      cartItem: MOCK_CART_RESPONSE[0],
      isOverStock: false,
    })
  })

  it('createOrUpdateCartItem will return value correctly', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: MOCK_CART_RESPONSE })

    jest
      .spyOn(apiClient, 'put')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[0] })

    expect(await createOrUpdateCartItem(cartPayload)).toStrictEqual({
      cartItem: MOCK_CART_RESPONSE[0],
      isOverStock: false,
    })
  })

  it('createOrUpdateCartItem will return value correctly', async () => {
    jest
      .spyOn(apiClient, 'get')
      .mockResolvedValue({ data: [MOCK_CART_RESPONSE[1]] })

    jest
      .spyOn(apiClient, 'put')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[1] })

    expect(await createOrUpdateCartItem(cartPayload)).toStrictEqual({
      cartItem: MOCK_CART_RESPONSE[1],
      isOverStock: false,
    })
  })

  it('createOrUpdateCartItem will return value correctly', async () => {
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
