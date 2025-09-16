import { render } from '@testing-library/react'

// Components
import { Profile } from '.'

describe('Profile component', () => {
  const props = {
    src: 'sx',
    name: 'Scarlet Johnson',
    subText: 'Good Morning!',
  }

  it('Should match snapshot', () => {
    const { container } = render(<Profile {...props} />)
    expect(container).toMatchSnapshot()
  })
})
