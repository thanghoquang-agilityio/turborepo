// Constants
import { API_ENDPOINT } from '@/constants/api-endpoint'
// Services
import { apiClient } from '@/services'
// Models
import { CategoriesDataResponse, CategoriesResponse } from '@/types'

export const getCategoryList = async (): CategoriesDataResponse => {
  try {
    // Note: With flattened API structure, populate=* may not be needed 
    // or may work differently. Update based on your API requirements
    const url = decodeURIComponent(`/${API_ENDPOINT.CATEGORIES}?populate=*`)
    const { data } = await apiClient.get<CategoriesResponse>(url, {
      next: {
        revalidate: 3600,
      },
    })

    return {
      categories: data,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred in the request get categories'

    // During build time or when API is unavailable, return empty categories
    // eslint-disable-next-line no-console
    console.warn('Failed to fetch categories:', errorMessage)
    return {
      categories: [],
    }
  }
}

// Alternative version without populate for fully flattened API
export const getCategoryListFlat = async (): CategoriesDataResponse => {
  try {
    const url = `/${API_ENDPOINT.CATEGORIES}`
    const { data } = await apiClient.get<CategoriesResponse>(url, {
      next: {
        revalidate: 3600,
      },
    })

    return {
      categories: data,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred in the request get categories'

    // eslint-disable-next-line no-console
    console.warn('Failed to fetch categories:', errorMessage)
    return {
      categories: [],
    }
  }
}
