import { USER_ID_DEFAULT } from '@/constants'
import { MOCK_PRODUCTS_RESPONSE } from '@/mocks'
import { apiClient } from '@/services/api'
import { getProductById, getProducts } from '@/services/product'

jest.mock('@/services/api')

describe('Product service tests', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('getProducts will return value correctly', async () => {
    jest
      .spyOn(apiClient, 'get')
      .mockResolvedValue({ data: MOCK_PRODUCTS_RESPONSE })

    expect(await getProducts()).toStrictEqual({
      products: MOCK_PRODUCTS_RESPONSE,
    })
  })

  it('getProducts returns default values when API call fails', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(false)

    await expect(getProducts()).rejects.toThrow(
      'An unexpected error occurred in the request get products'
    )
  })

  it('getProductById will return value correctly', async () => {
    const mockProductRes = MOCK_PRODUCTS_RESPONSE[0]
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: mockProductRes })

    expect(await getProductById(USER_ID_DEFAULT)).toStrictEqual(mockProductRes)
  })

  it('getProductById will return value correctly', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: null })

    expect(await getProductById(USER_ID_DEFAULT)).toEqual(null)
  })

  it('getProductById will return value correctly', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(false)

    await expect(getProductById(USER_ID_DEFAULT)).rejects.toThrow(
      'An unexpected error occurred in the request get product detail'
    )
  })
})
