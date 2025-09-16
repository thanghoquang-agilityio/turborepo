import { render } from '@testing-library/react'

import { Content } from '.'

describe('Content', () => {
  it('Renders empty title and subtitle match snapshot', () => {
    const { container } = render(<Content />)
    expect(container).toMatchSnapshot()
  })

  it('Renders have title and subtitle match snapshot', () => {
    const { container } = render(<Content title='Title' subTitle='subTitle' />)
    expect(container).toMatchSnapshot()
  })
})
