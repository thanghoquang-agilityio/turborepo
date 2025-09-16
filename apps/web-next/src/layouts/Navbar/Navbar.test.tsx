import { fireEvent, render } from '@testing-library/react'
import { useTheme } from 'next-themes'

import { MOCK_USER } from '@/mocks'

// Components
import { Navbar } from '.'

// Mocking dependencies
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}))

describe('Navbar component', () => {
  const mockUseTheme = useTheme as jest.Mock

  beforeEach(() => {
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: jest.fn(),
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should match snapshot with error user', () => {
    const { container } = render(<Navbar user={null} />)
    expect(container).toMatchSnapshot()
  })

  it('Should match snapshot', () => {
    const { container } = render(<Navbar user={MOCK_USER} />)
    expect(container).toMatchSnapshot()
  })

  it('should toggle theme when theme button is clicked', () => {
    const setThemeMock = jest.fn()
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
    })

    const { getByTestId } = render(<Navbar user={MOCK_USER} />)

    fireEvent.click(getByTestId('btn-switch-theme'))

    expect(setThemeMock).toHaveBeenCalledWith('dark')
  })

  it('should toggle theme when theme button is clicked', () => {
    const setThemeMock = jest.fn()
    mockUseTheme.mockReturnValue({
      theme: 'dark',
      setTheme: setThemeMock,
    })

    const { getByTestId } = render(<Navbar user={MOCK_USER} />)

    fireEvent.click(getByTestId('btn-switch-theme'))

    expect(setThemeMock).toHaveBeenCalledWith('light')
  })
})
