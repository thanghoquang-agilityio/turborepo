'use client'

// Types
// Components
import { Button, Text } from '@/components'
import { PageErrorProps } from '@/types'

const error = ({ error, reset }: PageErrorProps) => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-4'>
      <Text className='text-3xl font-bold leading-[28px] text-primary-300 md:text-5xl md:leading-10'>
        Sorry page has some problems
      </Text>
      <Text
        size='lg'
        className='maxW-[650px] whitespace-pre-wrap text-center font-semibold text-primary-200 dark:text-primary-300'
      >
        {error.message}
      </Text>
      <Button variant='solid' size='md' onClick={() => reset()}>
        Reset me
      </Button>
    </div>
  )
}

export default error
