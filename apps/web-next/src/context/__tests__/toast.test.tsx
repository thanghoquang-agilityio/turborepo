// Libs
import React from 'react'

import { fireEvent, render, waitFor } from '@testing-library/react'

// Contexts
import ToastProvider, { useToast } from '@/context/toast'
// Hocs
import { TOAST_TYPE } from '@/hocs/withToast'

// Component that uses the toast context
const ChildWithOpenToast = () => {
  const openToast = useToast()

  const handleOpenToast = () => {
    openToast({
      type: TOAST_TYPE.SUCCESS,
      message: 'Test open toast success',
    })
  }

  return (
    <div>
      Test Toast Context
      <button onClick={handleOpenToast}>Open Toast</button>
    </div>
  )
}

// Test Suite
describe('ToastProvider and useToast', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const setupRenderWithOpenToast = () => {
    return render(
      <ToastProvider>
        <ChildWithOpenToast />
      </ToastProvider>
    )
  }

  it('should render and open toast correctly and display the content message', async () => {
    const { container, getByText, queryByTestId } = setupRenderWithOpenToast()

    // Snapshot test
    expect(container).toMatchSnapshot()

    const button = getByText('Open Toast')
    fireEvent.click(button)

    // Verify toast visibility and content
    await waitFor(() => {
      expect(queryByTestId('toast')).toBeTruthy()
      expect(getByText('Test open toast success')).toBeTruthy()
    })
  })
})
