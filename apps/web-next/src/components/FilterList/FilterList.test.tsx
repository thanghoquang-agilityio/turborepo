import { fireEvent, render, waitFor } from '@testing-library/react'

import { MOCK_CATEGORY_LIST } from '@/mocks'

import FilterList from '.'

describe('FilterList Component', () => {
  const renderComponent = (props = {}) => {
    return render(
      <FilterList
        title='Category'
        isOpen={true}
        items={MOCK_CATEGORY_LIST}
        {...props}
      />
    )
  }

  it('renders with default props', () => {
    const { container, getByTestId } = renderComponent()
    const toggleButton = getByTestId('btn-toggle-filter')

    fireEvent.click(toggleButton)
    expect(container).toMatchSnapshot()
  })

  it('handles selection change', () => {
    const { getByTestId } = renderComponent({ isOpen: true })
    const checkbox = getByTestId('checkbox-item-2')
    fireEvent.click(checkbox)

    waitFor(() => {
      expect(checkbox).toBeChecked()
    })
  })
})
