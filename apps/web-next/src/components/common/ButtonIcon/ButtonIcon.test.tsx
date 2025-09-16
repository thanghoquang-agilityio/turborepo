import { render } from '@testing-library/react'

import { ButtonIcon } from '.'

describe('ButtonIcon', () => {
  it('Renders empty title and subtitle match snapshot', () => {
    const { container } = render(<ButtonIcon disabled />)
    expect(container).toMatchSnapshot()
  })
})
