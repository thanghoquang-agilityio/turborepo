import { render } from '@testing-library/react'

import { MOCK_CATEGORY_RESPONSE, MOCK_PRODUCTS_RESPONSE } from '@/mocks'

import ProductList from '.'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockImplementation(() => '/products'),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams('page=1')),
}))

describe('ProductList', () => {
  const renderComponent = () =>
    render(
      <ProductList
        products={MOCK_PRODUCTS_RESPONSE}
        categories={MOCK_CATEGORY_RESPONSE}
        pagination={{ page: 1, pageSize: 2, total: 5 }}
      />
    )

  it('should match snapshot value error', () => {
    const { container } = render(
      <ProductList
        products={[]}
        categories={[]}
        pagination={{ page: 1, pageSize: 2, total: 5 }}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('should match snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
