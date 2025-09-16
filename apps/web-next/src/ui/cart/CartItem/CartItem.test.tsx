import { fireEvent, render, waitFor } from '@testing-library/react'

import { useCart } from '@/hooks'
import { MOCK_CART_ITEM } from '@/mocks'

import CartItem from '.'

// Mock hooks
jest.mock('@/hooks', () => ({
  useCart: jest.fn(),
  useDebounce: jest.fn((fn) => fn), // Assuming that useDebounce is called with a function.
}))

const mockHandleQuantityChange = jest.fn()
const mockHandleRemove = jest.fn()

// Explicitly set the mock implementation for useCart
;(useCart as jest.Mock).mockReturnValue({
  handleQuantityChange: mockHandleQuantityChange,
  handleRemove: mockHandleRemove,
})

// Mock utils functions
jest.mock('@/utils', () => ({
  formatAmountCurrency: jest.fn((value) => `$${value}`),
  calculateAmount: jest.fn(() => ({
    price: 100, // Mocked return value of calculateAmount
  })),
}))

describe('CartItem', () => {
  const renderComponent = () =>
    render(<CartItem {...MOCK_CART_ITEM} addOptimisticCartItems={() => {}} />)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should match snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should increment quantity and call debounceQuantityChange', async () => {
    const { getByTestId } = renderComponent()
    const incrementButton = getByTestId('button-plus')

    fireEvent.click(incrementButton)

    await waitFor(() => {
      expect(mockHandleQuantityChange).toHaveBeenCalledWith(
        MOCK_CART_ITEM.id,
        expect.objectContaining({
          quantity: MOCK_CART_ITEM.quantityDefault + 1,
        })
      )
    })
  })

  it('should decrement quantity and call debounceQuantityChange', async () => {
    const { getByTestId } = renderComponent()
    const decrementButton = getByTestId('button-minus')

    fireEvent.click(decrementButton)

    await waitFor(() => {
      expect(mockHandleQuantityChange).toHaveBeenCalledWith(
        MOCK_CART_ITEM.id,
        expect.objectContaining({
          quantity: MOCK_CART_ITEM.quantityDefault - 1,
        })
      )
    })
  })

  it('should handle removal of item and show spinner', async () => {
    const { getByTestId } = renderComponent()
    const removeButton = getByTestId('button-close')

    fireEvent.click(removeButton)

    await waitFor(() => {
      // Check that the remove handler was called
      expect(mockHandleRemove).toHaveBeenCalledWith(MOCK_CART_ITEM.id)
    })
  })
})
