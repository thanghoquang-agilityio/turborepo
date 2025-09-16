import { render } from '@testing-library/react'

import { MOCK_BREADCRUMB_ITEMS } from '@/mocks'

import { Breadcrumb } from '.'

describe('Breadcrumb', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('Renders match snapshot', () => {
    const { container } = render(<Breadcrumb items={MOCK_BREADCRUMB_ITEMS} />)
    expect(container).toMatchSnapshot()
  })
})
