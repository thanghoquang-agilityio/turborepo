import { useRef } from 'react'

export const useDebounce = <T>(callback: (params: T) => void, delay = 1000) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return function (params: T) {
    // Clear the previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      callback(params)
    }, delay)
  }
}
