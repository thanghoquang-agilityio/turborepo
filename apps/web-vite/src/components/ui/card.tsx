// Keep the CardAction component as it's specific to this app
import * as React from 'react'

import { cn } from '@/lib/utils'

// Re-export the shared Card components from @repo/shadcn-ui
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@repo/shadcn-ui/card'

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-action'
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className
      )}
      {...props}
    />
  )
}

export { CardAction }
