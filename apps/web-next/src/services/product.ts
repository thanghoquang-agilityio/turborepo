// Constants
import { API_ENDPOINT } from '@/constants'
// Services
import { apiClient } from '@/services'
// Types
import {
  APIRelatedResponse,
  ProductResponse,
  ProductsDataResponse,
  ProductsResponse,
} from '@/types'

interface FetchDataProps {
  searchParams?: URLSearchParams
  options?: RequestInit
}

export const getProducts = async ({
  searchParams = new URLSearchParams(),
  options = { next: { tags: [API_ENDPOINT.PRODUCTS] } },
}: FetchDataProps = {}): ProductsDataResponse => {
  try {
    const url = decodeURIComponent(
      `/${API_ENDPOINT.PRODUCTS}?${searchParams.toString()}`
    )
    const { data, meta } = await apiClient.get<ProductsResponse>(url, {
      ...options,
      next: { revalidate: 3600 },
    })

    return {
      products: data,
      ...meta,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred in the request get products'

    // During build time or when API is unavailable, return empty products
    // eslint-disable-next-line no-console
    console.warn('Failed to fetch products:', errorMessage)
    return {
      products: [],
      pagination: {
        page: 1,
        pageSize: 10,
        total: 0,
      },
    }
  }
}

export const getProductById = async (
  id: string,
  searchParams: URLSearchParams = new URLSearchParams()
): Promise<ProductResponse | null> => {
  try {
    const url = `/${API_ENDPOINT.PRODUCTS}/${id}?${searchParams.toString()}`
    const { data } = await apiClient.get<APIRelatedResponse<ProductResponse>>(
      url,
      {
        next: {
          tags: [API_ENDPOINT.PRODUCTS, `${API_ENDPOINT.PRODUCTS}/${id}`],
          revalidate: 3600,
        },
      }
    )

    return data
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred in the request get product detail'

    // During build time or when API is unavailable, return null
    // eslint-disable-next-line no-console
    console.warn('Failed to fetch product detail:', errorMessage)
    return null
  }
}
