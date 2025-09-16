'use client'

import { ReactNode, createContext, useContext, useMemo } from 'react'

import { TWithToast, ToastProps, withToast } from '@/hocs/withToast'

interface IToastContext {
  openToast: (toast: ToastProps, callback?: () => void) => void
}

const initialToastContext: IToastContext = { openToast: () => {} }

const ToastContext = createContext<IToastContext>(initialToastContext)

const ToastProvider = ({
  children,
  openToast,
}: TWithToast<{
  children: ReactNode
}>) => {
  const value = useMemo(() => ({ openToast }), [openToast])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

const ToastProviderWithToast = withToast(ToastProvider)
export default ToastProviderWithToast

export const useToast = () => {
  const context = useContext(ToastContext)
  return context.openToast
}
