'use client'

import React, { ReactNode, useState } from 'react'

import { Toast, ToastColor } from '@/components'

export enum TOAST_TYPE {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}
export interface ToastProps {
  type?: TOAST_TYPE
  message?: string
}

export const buildToastRenderer = ({ type, message }: ToastProps) => {
  switch (type) {
    case TOAST_TYPE.WARNING:
      return {
        message: message ?? 'Warning!',
        color: 'yellow' as ToastColor,
      }

    case TOAST_TYPE.ERROR:
      return {
        message: message ?? 'Error!',
        color: 'red' as ToastColor,
      }

    case TOAST_TYPE.SUCCESS:
    default:
      return {
        message: message ?? 'Success!',
        color: 'green' as ToastColor,
      }
  }
}

type ToastState = ToastProps & { isOpen: boolean }

export type TWithToast<T> = {
  openToast: (toast: ToastProps, callback?: () => void) => void
} & T

export const withToast = <T,>(
  Child: (props: TWithToast<T>) => ReactNode,
  enableLoading?: boolean
) => {
  const RenderToast = (props: T) => {
    const [isLoading, setIsLoading] = useState(false)
    const [toast, setToast] = useState<ToastState>({
      isOpen: false,
      type: TOAST_TYPE.SUCCESS,
    })

    const closeToast = () => {
      setToast({
        ...toast,
        isOpen: false,
      })
    }

    const openToast = (
      { type = TOAST_TYPE.SUCCESS, message }: ToastProps,
      callback?: () => void
    ) => {
      const isShowLoading = callback && enableLoading

      void (isShowLoading && setIsLoading(true))

      setToast({ isOpen: true, type, message })

      setTimeout(() => {
        closeToast()
        void (isShowLoading && setIsLoading(false))
        callback?.()
      }, 3000)
    }

    const { message, color } = buildToastRenderer(toast)

    return (
      <>
        {toast.isOpen && (
          <Toast message={message} color={color} onClose={closeToast} />
        )}
        {isLoading ? <>loading</> : <Child {...props} openToast={openToast} />}
      </>
    )
  }

  return RenderToast
}
