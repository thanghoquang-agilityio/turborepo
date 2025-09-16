import { render } from '@testing-library/react'

import { SRC_BANNER_HEADPHONE } from '@/constants'

import Banner from '.'

describe('Banner', () => {
  const renderComponent = () =>
    render(
      <Banner
        image={SRC_BANNER_HEADPHONE}
        description='Grab Upto 50% Off On Selected Headphone'
      />
    )

  it('should match snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
