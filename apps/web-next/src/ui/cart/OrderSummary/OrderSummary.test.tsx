import { render } from '@testing-library/react'

import { MOCK_ORDER_SUMMARY } from '@/mocks'

import OrderSummary from '.'

describe('OrderSummary', () => {
  const renderComponent = () => render(<OrderSummary {...MOCK_ORDER_SUMMARY} />)

  it('should match snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
