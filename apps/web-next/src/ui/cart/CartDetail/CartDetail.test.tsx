import { render } from '@testing-library/react'

import { MOCK_CART_RESPONSE } from '@/mocks'
import type { CartItemResponse } from '@/types'

import CartDetail from '.'

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

describe('CartDetail', () => {
  it('should match snapshot', () => {
    const { container } = render(<CartDetail cartItems={MOCK_CART_RESPONSE} />)
    expect(container).toMatchSnapshot()
  })
})
