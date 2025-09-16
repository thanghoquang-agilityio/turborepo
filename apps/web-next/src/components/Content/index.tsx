import { memo } from 'react'

import Link from 'next/link'

// Components
import { Button, Text } from '@/components'
// Constants
import { ROUTER } from '@/constants'

export const Content = memo(
  ({
    title = 'COMING SOON',
    subTitle = 'Feature is under development',
  }: {
    title?: string
    subTitle?: string
  }) => (
    <div className='flex h-full flex-col items-center justify-center gap-4'>
      {title && (
        <Text className='text-3xl font-bold leading-[28px] text-primary-300 md:text-5xl md:leading-10'>
          {title}
        </Text>
      )}
      {subTitle && (
        <Text variant='title' size='lg'>
          {subTitle}
        </Text>
      )}
      <Link href={ROUTER.DASHBOARD} className='mt-3'>
        <Button variant='solid' size='md'>
          Go Home
        </Button>
      </Link>
    </div>
  )
)

Content.displayName = 'Content'
