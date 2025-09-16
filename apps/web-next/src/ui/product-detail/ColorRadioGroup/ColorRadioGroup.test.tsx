import { render } from '@testing-library/react'

import { MOCK_COLOR_RADIO_GROUP } from '@/mocks'

import ColorRadioGroup from '.'

const mockSetValueColor = jest.fn()

const renderComponent = () =>
  render(
    <ColorRadioGroup
      items={MOCK_COLOR_RADIO_GROUP}
      valueColor={MOCK_COLOR_RADIO_GROUP[0].color}
      setValueColor={mockSetValueColor}
    />
  )

describe('ColorRadioGroup', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('should render with default props', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
