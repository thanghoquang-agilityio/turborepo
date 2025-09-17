import React from 'react'

import { fireEvent, render } from '@testing-library/react'

// Constants
import { SRC_IMAGE_NOT_AVAILABLE } from '@/constants'

// Components
import { CustomImage } from '..'

// Mock next/image component
jest.mock('next/image', () => {
  return jest.fn((props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={props.src} alt={props.alt} onError={props.onError} />
  })
})

// Mock useState
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('CustomImage Component', () => {
  const props = {
    width: 100,
    height: 100,
    className: 'mock-class',
    alt: 'Mock Alt',
    src: 'mock.src',
  }

  const customImageComponent = () => {
    return render(<CustomImage {...props} />)
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Match snapshot', () => {
    const useStateSpy = jest.spyOn(React, 'useState')

    useStateSpy.mockReturnValue([true, jest.fn()])

    const { container } = render(
      <CustomImage {...props} src={SRC_IMAGE_NOT_AVAILABLE} />
    )

    expect(container).toMatchSnapshot()
  })

  it('Sets fallback source on error', () => {
    const setState = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')

    useStateSpy.mockReturnValue([false, setState])

    const { getByAltText } = customImageComponent()
    const image = getByAltText(props.alt)

    fireEvent.error(image)

    expect(setState).toHaveBeenCalledWith(true)
  })
})
