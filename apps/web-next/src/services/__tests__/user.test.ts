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

    expect(await getUserById(USER_ID_DEFAULT)).toStrictEqual(mockUserRes)
  })

  it('getUserById throws an error with a specific message when API call fails with an Error object', async () => {
    const mockErrorMessage = 'Request failed'
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error(mockErrorMessage))

    await expect(getUserById(USER_ID_DEFAULT)).rejects.toThrow(mockErrorMessage)
  })

  it('getUserById throws a generic error message when API call fails with a non-Error object', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(false)

    await expect(getUserById(USER_ID_DEFAULT)).rejects.toThrow(
      'An unexpected error occurred in the request get user'
    )
  })
})
