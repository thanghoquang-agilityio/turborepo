import { act } from 'react'

import { renderHook } from '@testing-library/react'

import { deleteCartItem, updateCartItem } from '@/app/actions'
import { CART_MESSAGES } from '@/constants'
import { useToast } from '@/context/toast'
import { TOAST_TYPE } from '@/hocs/withToast'

import { useCart } from '../useCart'

// Mock dependencies
jest.mock('@/app/actions', () => ({
  deleteCartItem: jest.fn(),
  updateCartItem: jest.fn(),
}))

jest.mock('@/context/toast', () => ({
  useToast: jest.fn(),
}))

describe('useCart', () => {
  const openToast = jest.fn()

  beforeEach(() => {
    (useToast as jest.Mock).mockReturnValue(openToast)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  const MOCK_PAYLOAD = {
    size: 'small',
    quantity: 1,
    productVariantId: 1,
    userId: 1,
  }

  it('should handle quantity change and show success toast', async () => {
    (updateCartItem as jest.Mock).mockResolvedValue(true) // Mocking successful response

    const { result } = renderHook(() => useCart())

    await act(async () => {
      await result.current.handleQuantityChange('123', MOCK_PAYLOAD)
    })

    expect(updateCartItem).toHaveBeenCalledWith('123', MOCK_PAYLOAD)
    expect(openToast).toHaveBeenCalledWith({
      type: TOAST_TYPE.SUCCESS,
      message: CART_MESSAGES.UPDATE.SUCCESS,
    })
  })

  it('should handle quantity change and show error toast on failure', async () => {
    (updateCartItem as jest.Mock).mockResolvedValue(false) // Mocking failure response

    const { result } = renderHook(() => useCart())

    await act(async () => {
      await result.current.handleQuantityChange('123', MOCK_PAYLOAD)
    })

    expect(updateCartItem).toHaveBeenCalledWith('123', MOCK_PAYLOAD)
    expect(openToast).toHaveBeenCalledWith({
      type: TOAST_TYPE.ERROR,
      message: CART_MESSAGES.UPDATE.FAILED,
    })
  })

  it('should handle item removal and show success toast', async () => {
    (deleteCartItem as jest.Mock).mockResolvedValue(true) // Mocking successful response

    const { result } = renderHook(() => useCart())

    await act(async () => {
      await result.current.handleRemove('123')
    })

    expect(deleteCartItem).toHaveBeenCalledWith('123')
    expect(openToast).toHaveBeenCalledWith({
      type: TOAST_TYPE.SUCCESS,
      message: CART_MESSAGES.REMOVE.SUCCESS,
    })
    expect(result.current.isPending).toBe(false)
  })

  it('should handle item removal and show error toast on failure', async () => {
    (deleteCartItem as jest.Mock).mockResolvedValue(false) // Mocking failure response

    const { result } = renderHook(() => useCart())

    await act(async () => {
      await result.current.handleRemove('123')
    })

    expect(deleteCartItem).toHaveBeenCalledWith('123')
    expect(openToast).toHaveBeenCalledWith({
      type: TOAST_TYPE.ERROR,
      message: CART_MESSAGES.REMOVE.FAILED,
    })
    expect(result.current.isPending).toBe(false)
  })

  it('should set isPending to true when removing an item', async () => {
    (deleteCartItem as jest.Mock).mockResolvedValue(true) // Mocking successful response

    const { result } = renderHook(() => useCart())

    expect(result.current.isPending).toBe(false)

    await act(async () => {
      await result.current.handleRemove('123')
    })

    expect(result.current.isPending).toBe(false)
  })
})
