'use client'

import { Inter } from 'next/font/google'

import { Button, Text } from '@/components'
// Components
import { Navbar } from '@/layouts'
// Styles
import '@/styles/globals.css'
// Types
import { PageErrorProps } from '@/types'

const inter = Inter({ subsets: ['latin'] })

export default function GlobalError({
  // error,
  reset,
}: PageErrorProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar user={null} />
        <main>
          <div className='flex h-full flex-col items-center justify-center gap-4'>
            <Text className='text-3xl font-bold leading-[28px] text-primary-300 md:text-5xl md:leading-10'>
              Something went wrong
            </Text>
            <Button variant='solid' size='md' onClick={() => reset()}>
              Try again
            </Button>
          </div>
        </main>
      </body>
    </html>
  )
}
