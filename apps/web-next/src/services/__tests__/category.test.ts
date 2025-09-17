import { afterEach } from 'node:test'

import { MOCK_CATEGORY_RESPONSE } from '@/mocks'

import { apiClient } from '../api'
import { getCategoryList } from '../category'

jest.mock('@/services/api')

describe('Category service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('getCategoryList will return value correctly', async () => {
    const mockCategoryRes = MOCK_CATEGORY_RESPONSE
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: mockCategoryRes })

    expect(await getCategoryList()).toStrictEqual({
      categories: mockCategoryRes,
    })
  })
  it('getCategoryList returns empty categories when API call fails with an Error object', async () => {
    const mockErrorMessage = 'Request failed'
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error(mockErrorMessage))

    const result = await getCategoryList()
    expect(result).toStrictEqual({ categories: [] })
  })

  it('getCategoryList returns empty categories when API call fails with a non-Error object', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(false)

    const result = await getCategoryList()
    expect(result).toStrictEqual({ categories: [] })
  })
})
