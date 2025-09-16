import { render } from '@testing-library/react'

import RelatedInfo, { RELATED_INFO } from '.'

describe('RelatedInfo', () => {
  const renderComponent = () => render(<RelatedInfo items={RELATED_INFO} />)

  it('should match snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
