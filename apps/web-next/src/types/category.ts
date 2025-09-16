import { ProductModel} from '@/types'

export interface CategoryModel {
  name: string
  type?: number
  products?: ProductModel[]
}

// New flattened category response structure
export interface CategoryResponse {
  id: number
  documentId: string
  name: string
  type?: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  products: ProductModel[]
}

// Keep the old type for backward compatibility if needed
export type LegacyCategoryResponse = CategoryModel

export type CategoriesDataResponse = Promise<{
  categories: CategoryResponse[]
  error?: Error
}>

export type CategoriesResponse = {
  data: CategoryResponse[]
}
