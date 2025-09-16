import { act } from 'react'

import { renderHook } from '@testing-library/react'

import { useDebounce } from '../useDebounce'

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('debounces the callback execution', () => {
    const callback = jest.fn()
    const { result } = renderHook(() => useDebounce(callback))

    act(() => {
      result.current('first call')
      result.current('second call')
    })

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('second call')
  })

  it('debounces with updated delay', () => {
    const callback = jest.fn()
    const { result, rerender } = renderHook(
      ({ delay }) => useDebounce(callback, delay),
      {
        initialProps: { delay: 500 },
      }
    )

    act(() => {
      result.current('first call')
    })

    act(() => {
      jest.advanceTimersByTime(300)
    })

    rerender({ delay: 1000 })

    act(() => {
      result.current('second call')
    })

    act(() => {
      jest.advanceTimersByTime(700)
    })

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(300)
    })

    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('second call')
  })
})
