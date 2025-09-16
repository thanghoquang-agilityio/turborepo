'use client'

import { InView as RIOInView } from 'react-intersection-observer'

export const InView = ({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string
  fallback?: React.ReactNode
}>) => {
  return (
    <RIOInView triggerOnce threshold={0.2}>
      {({ ref }) => (
        <div ref={ref} className={className}>
          {children}
        </div>
      )}
    </RIOInView>
  )
}
