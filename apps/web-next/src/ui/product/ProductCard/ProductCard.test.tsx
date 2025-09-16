import { fireEvent, render } from '@testing-library/react'

import { MOCK_CART_ITEM } from '@/mocks'

import ProductCard from '.'

const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
}))

describe('ProductCard', () => {
  const product = { ...MOCK_CART_ITEM, image: '' }
  const renderComponent = () => render(<ProductCard {...product} />)
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should match snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should navigate to the product detail page when "Add To Cart" is clicked', () => {
    const { getByTestId } = renderComponent()
    fireEvent.click(getByTestId('btn-add-to-cart'))
    expect(mockPush).toHaveBeenCalledWith('/products/1')
  })
})
