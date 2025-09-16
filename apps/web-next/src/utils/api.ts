// This is special for MockAPI.io Service
const API_NOT_FOUND = 'Not Found'

export const isNotFound = (data: unknown) =>
  typeof data === 'string' && data.includes(API_NOT_FOUND)
