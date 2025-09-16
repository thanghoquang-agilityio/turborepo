import { fireEvent, render } from '@testing-library/react'

import { MOCK_LIST_IMAGE_RESPONSE } from '@/mocks'

import MediaPreview from '.'

describe('MediaPreview', () => {
  const renderComponent = () =>
    render(<MediaPreview images={MOCK_LIST_IMAGE_RESPONSE} />)

  it('should match snapshot', () => {
    const { container, getByTestId } = renderComponent()
    fireEvent.click(getByTestId('btn-arrow-left'))
    fireEvent.click(getByTestId('btn-arrow-mobile-left'))
    fireEvent.click(getByTestId('btn-arrow-right'))
    fireEvent.click(getByTestId('btn-arrow-mobile-right'))
    fireEvent.click(getByTestId('thumbnail-item-3'))

    expect(container).toMatchSnapshot()
  })
})
