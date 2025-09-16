export type APIRelatedResponse<T extends object> = { data: T }

export type MetaResponse = {
  pagination: {
    page: number
    pageSize: number
    total: number
  }
}