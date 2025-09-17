import { CartItemResponse } from '@/types'
import { MOCK_PRODUCT_VARIANTS } from './product'

export const MOCK_CART_ITEM = {
  id: '1',
  variantId: '1',
  documentId: '1',
  name: 'Embrace Sideboard',
  color: 'wheat',
  size: 'small',
  quantityDefault: 2,
  stock: 4,
  price: 53,
  star: 1,
  comments: 1,
  tax: 1,
  discount: 1,
}

// New flattened cart response structure
export const MOCK_CART_RESPONSE: CartItemResponse[] = [
  {
    id: 1,
    documentId: 'cart-item-1',
    size: 'small',
    quantity: 2,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    publishedAt: '2024-01-01T00:00:00.000Z',
    productVariantId: MOCK_PRODUCT_VARIANTS[0],
    userId: 1,
  },
  {
    id: 2,
    documentId: 'cart-item-2',
    size: 'large',
    quantity: 2,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    publishedAt: '2024-01-01T00:00:00.000Z',
    productVariantId: MOCK_PRODUCT_VARIANTS[1],
    userId: 1,
  },
]

export const MOCK_ORDER_SUMMARY = {
  subTotal: 396,
  itemTotal: 3,
}
