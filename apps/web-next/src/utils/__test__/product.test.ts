import { MOCK_PRODUCT_VARIANTS } from '@/mocks'

import {
  calculateAmount,
  getOverStock,
  getSizeVariants,
  updateStockVariant,
} from '../product'

describe('getSizeVariants', () => {
  it('should return the correct size variants for a given color', () => {
    const result = getSizeVariants(MOCK_PRODUCT_VARIANTS, 'slate blue')
    expect(result).toEqual([
      { size: 'Small', stock: 20 },
      { size: 'Medium', stock: 20 },
      { size: 'Large', stock: 20 },
      { size: 'Extra Large', stock: 20 },
      { size: 'XXL', stock: 20 },
    ])
  })

  it('should return an empty array if the color is not found', () => {
    const result = getSizeVariants(MOCK_PRODUCT_VARIANTS, 'green')
    expect(result).toEqual([])
  })

  it('should handle empty size or stock strings correctly', () => {
    const mockDataWithEmptySize = [
      {
        id: 1,
        color: 'Red',
        size: '',
        stock: '',
        tax: 5,
      },
    ]
    const result = getSizeVariants(mockDataWithEmptySize, 'Red')
    expect(result).toEqual([
      {
        size: '',
        stock: 0,
      },
    ])
  })
})

describe('calculateAmount', () => {
  it('should calculate the correct price and total with tax and discount', () => {
    const result = calculateAmount(10, 20, 100)
    expect(result).toEqual({
      price: 100,
      total: 88,
    })
  })

  it('should handle a 0% tax correctly', () => {
    const result = calculateAmount(0, 20, 100)
    expect(result).toEqual({
      price: 100,
      total: 80,
    })
  })

  it('should return the original price if tax and discount are 0', () => {
    const result = calculateAmount(0, 0, 100)
    expect(result).toEqual({
      price: 100,
      total: 100,
    })
  })
})

describe('updateStockVariant', () => {
  it('should update the stock correctly for a given size', () => {
    const result = updateStockVariant({
      sizes: MOCK_PRODUCT_VARIANTS[0].size,
      stocks: MOCK_PRODUCT_VARIANTS[0].stock,
      size: 'small',
      quantity: 2,
    })
    expect(result).toBe('18,20,20,20,20')
  })

  it('should handle reducing stock to zero', () => {
    const result = updateStockVariant({
      sizes: MOCK_PRODUCT_VARIANTS[0].size,
      stocks: MOCK_PRODUCT_VARIANTS[0].stock,
      size: 'large',
      quantity: 2,
    })
    expect(result).toBe('20,20,18,20,20')
  })

  it('should not change stock if the size is not found', () => {
    const result = updateStockVariant({
      sizes: MOCK_PRODUCT_VARIANTS[0].size,
      stocks: MOCK_PRODUCT_VARIANTS[0].stock,
      size: 'XL',
      quantity: 2,
    })
    expect(result).toBe(MOCK_PRODUCT_VARIANTS[0].stock)
  })
})

describe('getOverStock', () => {
  it('should return false for isOverStock if stock is sufficient', () => {
    const result = getOverStock({
      sizes: MOCK_PRODUCT_VARIANTS[0].size,
      stocks: MOCK_PRODUCT_VARIANTS[0].stock,
      size: 'medium',
      quantity: 3,
    })
    expect(result).toEqual({ isOverStock: false, stock: 20 })
  })

  it('should return true for isOverStock if stock is insufficient', () => {
    const result = getOverStock({
      sizes: MOCK_PRODUCT_VARIANTS[0].size,
      stocks: MOCK_PRODUCT_VARIANTS[0].stock,
      size: 'large',
      quantity: 25,
    })
    expect(result).toEqual({ isOverStock: true, stock: 20 })
  })

  it('should handle the case where the size is not found', () => {
    const result = getOverStock({
      sizes: MOCK_PRODUCT_VARIANTS[0].size,
      stocks: MOCK_PRODUCT_VARIANTS[0].stock,
      size: 'XL',
      quantity: 1,
    })
    expect(result).toEqual({ isOverStock: false, stock: undefined })
  })
})
