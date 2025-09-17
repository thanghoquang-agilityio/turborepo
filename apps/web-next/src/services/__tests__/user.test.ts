import { USER_ID_DEFAULT } from '@/constants'
import { MOCK_USER } from '@/mocks'

import { apiClient } from '../api'
import { getUserById } from '../user'

jest.mock('@/services/api')

describe('User service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('getUserById will return value correctly', async () => {
    const mockUserRes = MOCK_USER
    jest.spyOn(apiClient, 'get').mockResolvedValue(mockUserRes)

    expect(await getUserById(USER_ID_DEFAULT.toString())).toStrictEqual(mockUserRes)
  })

  it('getUserById returns null when API call fails with an Error object', async () => {
    const mockErrorMessage = 'Request failed'
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error(mockErrorMessage))

    const result = await getUserById(USER_ID_DEFAULT.toString())
    expect(result).toBe(null)
  })

  it('getUserById returns null when API call fails with a non-Error object', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(false)

    const result = await getUserById(USER_ID_DEFAULT.toString())
    expect(result).toBe(null)
  })
})
