import { act } from 'react'

import { renderHook } from '@testing-library/react'

// Adjust the import path
import { CartItemResponse } from '@/types'

import { useOrderSummary } from '..'

// Mock the calculateAmount function if necessary
jest.mock('@/utils', () => ({
  calculateAmount: jest.fn(() => ({ price: 100 })), // Mock a default return value
}))

// Mock cart items
const MOCK_CART_ITEMS: CartItemResponse[] = [
  {
    id: '1',
    attributes: {
      quantity: 2,
      size: 'M',
      productVariantId: undefined,
    },
  },
  {
    id: '2',
    attributes: {
      quantity: 1,
      size: 'L',
      productVariantId: undefined,
    },
  },
]

// Mock the useOptimistic hook from React
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useOptimistic: jest.fn((initialState, updateFn) => {
    let state = initialState

    const updateState = (newItem: CartItemResponse) => {
      state = updateFn(state, newItem)
    }

    return [state, updateState]
  }),
}))

describe('useOrderSummary', () => {
  it('should calculate totalAmount and totalItems correctly', () => {
    const { result } = renderHook(() => useOrderSummary(MOCK_CART_ITEMS))

    expect(result.current.totalAmount).toBe(300) // Assuming calculateAmount mock returns 100 per item
    expect(result.current.totalItems).toBe(3) // 2 items for id '1' and 1 item for id '2'
  })

  it('should update optimistic cart items correctly', () => {
    const { result } = renderHook(() => useOrderSummary(MOCK_CART_ITEMS))

    const newCartItem: CartItemResponse = {
      id: '1', // Existing item
      attributes: {
        quantity: 3, // Updated quantity
        size: 'M',
        productVariantId: undefined,
      },
    }

    act(() => {
      result.current.addOptimisticCartItems(newCartItem)
    })

    expect(result.current.totalItems).toBe(3) // 3 items for id '1' and 1 for id '2'
    expect(result.current.totalAmount).toBe(300) // Updated based on calculateAmount mock
  })

  it('should add a new cart item if not already in the state', () => {
    const { result } = renderHook(() => useOrderSummary(MOCK_CART_ITEMS))

    const newCartItem: CartItemResponse = {
      id: '3', // New item
      attributes: {
        quantity: 1,
        size: 'S',
        productVariantId: undefined,
      },
    }

    act(() => {
      result.current.addOptimisticCartItems(newCartItem)
    })

    expect(result.current.totalItems).toBe(3) // Previous 3 items + 1 new item
    expect(result.current.totalAmount).toBe(300) // Updated amount, assuming calculateAmount mock
  })
})
