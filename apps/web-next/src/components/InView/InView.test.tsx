import { render } from '@testing-library/react'

// Components
import { InView } from '.'

describe('InView component', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('Should match snapshot', () => {
    const { container } = render(<InView />)
    expect(container).toMatchSnapshot()
  })
})
