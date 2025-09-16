import { render } from '@testing-library/react'

// Components
import { Toast } from '.'

describe('Toast component', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Toast message='success!' />)
    expect(container).toMatchSnapshot()
  })
})
