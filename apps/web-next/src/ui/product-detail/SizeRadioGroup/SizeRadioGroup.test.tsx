import { render } from '@testing-library/react'

import { MOCK_SIZE_RADIO_GROUP } from '@/mocks'

import SizeRadioGroup from '.'

const mockSetValueSize = jest.fn()

const renderComponent = () =>
  render(
    <SizeRadioGroup
      items={MOCK_SIZE_RADIO_GROUP}
      valueSize={MOCK_SIZE_RADIO_GROUP[0].size}
      setValueSize={mockSetValueSize}
    />
  )
describe('SizeRadioGroup', () => {
  it('should render with default props', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
