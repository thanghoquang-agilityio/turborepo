import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { MOCK_CATEGORY_LIST } from '@/mocks'

import SelectMultiple from '.'

describe('SelectMultiple Component', () => {
  const renderComponent = (props = {}) => {
    return render(<SelectMultiple items={MOCK_CATEGORY_LIST} {...props} />)
  }

  it('renders with default props', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('handles selection change', () => {
    const { getByTestId } = renderComponent()
    const selectElement = getByTestId('-- Select --')

    fireEvent.change(selectElement, { target: { value: 'Man' } })

    waitFor(() => {
      expect(screen.getByText('Man')).toBeInTheDocument()
    })
  })
})
