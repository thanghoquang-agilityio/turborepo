import { fireEvent, render, waitFor } from '@testing-library/react'

import { CART_MESSAGES } from '@/constants'
import { MOCK_CART_RESPONSE, MOCK_PRODUCT } from '@/mocks'
import { apiClient } from '@/services'

import ProductDetail from '.'

// Mock necessary modules and hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockImplementation(() => '/products/7'),
}))

jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}))

describe('ProductDetail', () => {
  const renderComponent = () => render(<ProductDetail product={MOCK_PRODUCT} />)

  beforeEach(() => {
    // Mock IntersectionObserver
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('should match snapshot with error product', () => {
    const errorProduct = {
      ...MOCK_PRODUCT,
      productVariants: undefined,
    }
    const { container } = render(<ProductDetail product={errorProduct} />)
    expect(container).toMatchSnapshot()
  })

  it('should match snapshot with valid product', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should increment and decrement quantity correctly', async () => {
    const { getByTestId } = renderComponent()

    fireEvent.click(getByTestId('btn-increment'))
    await waitFor(() => {
      expect(getByTestId('text-quantity').textContent).toBe('2')
    })

    fireEvent.click(getByTestId('btn-decrement'))
    await waitFor(() => {
      expect(getByTestId('text-quantity').textContent).toBe('1')
    })
  })

  it('should call createOrUpdateCartItem when add to cart button is clicked', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: [] })

    jest
      .spyOn(apiClient, 'post')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[0] })

    const { getByText, getByTestId } = renderComponent()
    const addToCartButton = getByTestId('btn-add-to-cart')

    fireEvent.click(addToCartButton)

    waitFor(() => {
      expect(getByText(CART_MESSAGES.ADD.SUCCESS)).toBeInTheDocument()
    })
  })

  it('should call createOrUpdateCartItem when add to cart button is clicked', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue({ data: MOCK_CART_RESPONSE })

    jest
      .spyOn(apiClient, 'put')
      .mockResolvedValue({ data: MOCK_CART_RESPONSE[0] })

    const { getByText, getByTestId } = renderComponent()
    const addToCartButton = getByTestId('btn-add-to-cart')

    fireEvent.click(addToCartButton)

    waitFor(() => {
      expect(getByText(CART_MESSAGES.ADD.WARNING)).toBeInTheDocument()
    })
  })
})
