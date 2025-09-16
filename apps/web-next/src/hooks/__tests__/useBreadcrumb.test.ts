import { usePathname } from 'next/navigation'

import { renderHook } from '@testing-library/react'

import { ROUTER } from '@/constants'

import { useBreadcrumb } from '../useBreadcrumb'

// Mock the usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

describe('useBreadcrumb', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return empty breadcrumb for an empty pathname', () => {
    (usePathname as jest.Mock).mockReturnValue('')

    const { result } = renderHook(() => useBreadcrumb())

    expect(result.current).toEqual([{}])
  })

  it('should return Products breadcrumb for /products path', () => {
    (usePathname as jest.Mock).mockReturnValue('/products')

    const { result } = renderHook(() => useBreadcrumb())

    expect(result.current).toEqual([{}])
  })

  it('should return Products and Detail Products breadcrumb for /products/123 path', () => {
    (usePathname as jest.Mock).mockReturnValue('/products/123')

    const { result } = renderHook(() => useBreadcrumb())

    expect(result.current).toEqual([
      {
        name: 'Products',
        link: ROUTER.PRODUCTS,
      },
      {
        name: 'Detail Products',
        link: '#',
      },
    ])
  })

  it('should return custom breadcrumb for a non-product path', () => {
    (usePathname as jest.Mock).mockReturnValue('/about')

    const { result } = renderHook(() => useBreadcrumb())

    expect(result.current).toEqual([{}])
  })
})
