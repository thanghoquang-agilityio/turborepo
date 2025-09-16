import { ReactNode } from 'react'

import { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider } from 'next-themes'

// Constants
import { USER_ID_DEFAULT } from '@/constants'
// Contexts
import ToastProvider from '@/context/toast'
// Components
import { Navbar } from '@/layouts'
import { getUserById } from '@/services/user'
// Styles
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FashionHub',
  description: 'E-commerce app',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const user = await getUserById(USER_ID_DEFAULT)
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProvider attribute='class' defaultTheme='light'>
            <ToastProvider>
              <Navbar user={user} />
              <main className='bg-background-100'>{children}</main>
            </ToastProvider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
