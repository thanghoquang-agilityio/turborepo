import { ProductVariantModel } from '@/types'

import { MOCK_IMAGE } from './image'

// New flattened product variants for testing
export const MOCK_PRODUCT_VARIANTS: ProductVariantModel[] = [
  {
    id: 1,
    color: 'slate blue',
    size: 'small,medium,large,extra large,XXL',
    stock: '20,20,20,20,20',
    tax: 5,
  },
  {
    id: 2,
    color: 'blue',
    size: 'small,medium,large,extra large,XXL',
    stock: '20,20,20,20,20',
    tax: 5,
  },
]

export const MOCK_PRODUCT = {
  id: 1,
  documentId: 'mock-product-1',
  image: MOCK_IMAGE,
  name: 'TDX Sinkers',
  variants: 5,
  price: 675.0,
  star: 5,
  comments: 121,
  description: '',
  discount: 0,
  likes: 11,
  brand: 'MOCK BRAND',
  productVariants: MOCK_PRODUCT_VARIANTS,
}

export const MOCK_PRODUCTS_RESPONSE = [
  {
    id: 1,
    documentId: 'mock-product-1',
    name: 'TDX Sinkers',
    variants: 5,
    price: 675.0,
    star: 5,
    comments: 121,
    brand: 'MOCK BRAND',
    description: '',
    discount: 0,
    likes: 11,
    productVariants: [],
  },
  {
    id: 2,
    documentId: 'mock-product-2',
    name: 'TDX Sinkers',
    variants: 5,
    price: 675.0,
    star: 5,
    comments: 121,
    brand: 'MOCK BRAND',
    description: '',
    discount: 0,
    likes: 11,
    productVariants: [],
  },
  {
    id: 3,
    documentId: 'mock-product-3',
    name: 'TDX Sinkers',
    variants: 5,
    price: 675.0,
    star: 5,
    comments: 121,
    brand: 'MOCK BRAND',
    description: '',
    discount: 0,
    likes: 11,
    productVariants: [],
  },
  {
    id: 4,
    documentId: 'mock-product-4',
    name: 'TDX Sinkers',
    variants: 5,
    price: 675.0,
    star: 5,
    comments: 121,
    brand: 'MOCK BRAND',
    description: '',
    discount: 0,
    likes: 11,
    productVariants: MOCK_PRODUCT_VARIANTS,
    image: MOCK_IMAGE,
  },
]
