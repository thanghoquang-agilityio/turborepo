'use client'

import { Suspense, memo, useCallback, useEffect, useState } from 'react'

import Link from 'next/link'

// Components
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@repo/next-ui'
import { useTheme } from 'next-themes'

import { ButtonIcon, Profile, Text } from '@/components'
// Constants
import { NAVBAR_LIST, ROUTER } from '@/constants'
import { BrightnessIcon, MoonIcon, ShoppingBagIcon } from '@/icons'
// Types
import type { NavbarItemProps, UserModel } from '@/types'

export const Navbar = memo(({ user }: { user: UserModel | null }) => {
  const { username = '', cartItems = [] } = user || {}

  let totalQuantity = 0
  cartItems?.map(({ quantity }) => {
    totalQuantity += quantity
  })

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const onSwitchTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const onClose = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <NextUINavbar
      isBordered
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='min-h-[65px] px-[10px] md:min-h-[80px] md:px-[20px] lg:min-h-[90px] lg:px-[40px] xl:px-[80px]'
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className='pr-3 sm:hidden' justify='center'>
        <NavbarBrand>
          <Link href={ROUTER.DASHBOARD}>
            <Text className='overflow-visible text-2xl font-extrabold italic leading-10 text-primary-100'>
              FashionHub
            </Text>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden gap-[20px] sm:flex md:gap-[30px] lg:gap-[40px] xl:gap-[50px]'
        justify='center'
      >
        <NavbarItem>
          <NavbarBrand>
            <Link href={ROUTER.DASHBOARD}>
              <Text className='overflow-visible text-3xl font-extrabold italic leading-10 text-primary-100 lg:text-4xl'>
                FashionHub
              </Text>
            </Link>
          </NavbarBrand>
        </NavbarItem>
        {NAVBAR_LIST.map((item: NavbarItemProps) => (
          <NavbarItem
            key={`navbar-item-${item.id}`}
            className='text-base text-primary-200'
          >
            <Link href={`/${item.value}`}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Link href={ROUTER.CART}>
            <ButtonIcon
              variant='light'
              size='md'
              shape='circle'
              additionalClass='relative overflow-visible'
              aria-label={`Total ${totalQuantity}`}
            >
              <ShoppingBagIcon />
              <span className='absolute right-[-5px] top-[-5px] z-40 h-4 w-4 rounded-full border border-background-100 bg-primary-100 text-center text-xs text-background-100 md:right-[-2px] md:top-[-2px] md:h-5 md:w-5 md:pt-0.5'>
                {totalQuantity}
              </span>
            </ButtonIcon>
          </Link>
        </NavbarItem>
        <NavbarItem>
          {!mounted ? (
            <Suspense>
              <ButtonIcon
                variant='solid'
                size='md'
                shape='circle'
                isLoading={true}
              />
            </Suspense>
          ) : (
            <ButtonIcon
              variant='solid'
              size='md'
              shape='circle'
              additionalClass={
                theme === 'light' ? 'text-default' : 'text-warning-200'
              }
              data-testid='btn-switch-theme'
              onClick={onSwitchTheme}
            >
              {theme === 'light' ? <MoonIcon /> : <BrightnessIcon />}
            </ButtonIcon>
          )}
        </NavbarItem>
        <NavbarItem>
          <Profile
            src=''
            name={username}
            subText='Good Morning!'
            additionalClass='sm:flex hidden max-w-[190px] overflow-hidden'
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='gap-4'>
        {NAVBAR_LIST.map((item: NavbarItemProps) => (
          <NavbarMenuItem
            key={`navbar-menu-item-${item.id}`}
            className='text-lg text-primary-200'
          >
            <Link href={`/${item.value}`} onClick={onClose}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  )
})

Navbar.displayName = 'Navbar'
