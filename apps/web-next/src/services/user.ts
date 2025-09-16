import { API_ENDPOINT } from '@/constants'
import { apiClient } from '@/services'
import { UserResponse, UserModel, APIRelatedResponse } from '@/types'

export const getUserById = async (id: string): Promise<UserResponse | null> => {
  try {
    // Note: With flattened API structure, populate may work differently or not be needed
    const url = `/${API_ENDPOINT.USERS}/${id}?populate[0]=cartItems`
    const { data } = await apiClient.get<APIRelatedResponse<UserResponse>>(url, {
      next: {
        tags: [API_ENDPOINT.USERS],
        revalidate: 3600,
      },
    })

    return data
  } catch (error) {
    // During build time or when API is unavailable, return null instead of throwing
    // eslint-disable-next-line no-console
    console.warn(
      'Failed to fetch user data:',
      error instanceof Error ? error.message : 'Unknown error'
    )
    return null
  }
}

// Keep legacy function for backward compatibility if needed
export const getUserByIdLegacy = async (id: string): Promise<UserModel | null> => {
  try {
    const url = `/${API_ENDPOINT.USERS}/${id}?populate[0]=cartItems`
    const res = await apiClient.get<UserModel>(url, {
      next: {
        tags: [API_ENDPOINT.USERS],
        revalidate: 3600,
      },
    })

    return res
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(
      'Failed to fetch user data:',
      error instanceof Error ? error.message : 'Unknown error'
    )
    return null
  }
}
