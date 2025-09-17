import { API_ENDPOINT } from '@/constants'
import { apiClient } from '@/services'
import { UserModel } from '@/types'

export const getUserById = async (id: string): Promise<UserModel | null> => {
  try {
    const url = `/${API_ENDPOINT.USERS}/${id}?populate[cartItems][filters][publishedAt][$notNull]=true`
    const data = await apiClient.get<UserModel>(url, {
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
