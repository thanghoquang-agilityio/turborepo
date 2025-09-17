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

    const result = await getProducts()
    expect(result).toStrictEqual({
      products: [],
      pagination: { page: 1, pageSize: 10, total: 0 }
    })
  })

  it('getProductById will return value correctly', async () => {
    const mockProductRes = MOCK_PRODUCTS_RESPONSE[0]
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: mockProductRes })

    expect(await getProductById(USER_ID_DEFAULT.toString())).toStrictEqual(mockProductRes)
  })

  it('getProductById will return value correctly', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: null })

    expect(await getProductById(USER_ID_DEFAULT.toString())).toEqual(null)
  })

  it('getProductById returns null when API call fails', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(false)

    const result = await getProductById(USER_ID_DEFAULT.toString())
    expect(result).toBe(null)
  })
})
