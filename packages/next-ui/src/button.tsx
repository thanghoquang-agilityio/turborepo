'use client'

import { memo } from 'react'

import { ButtonProps, Button as NextUiButton } from '@nextui-org/react'

const variantClasses = {
  solid: 'bg-primary-300 text-background-100',
  bordered:
    'bg-background-100  text-primary-100 border-small border-foreground-300',
  light:
    'border-small border-background-200 dark:border-foreground-300 min-w-10 min-h-10',
  faded:
    'bg-background-100 text-primary-400 border-small border-background-200 dark:border-foreground-300 font-normal',
  ghost: 'bg-transparent border-none min-w-3 min-h-5 rounded-full',
}

const sizeClasses = {
  sm: 'py-2 min-w-32 h-9 text-sm rounded-[30px]',
  md: 'sm:py-4 sm:min-w-[136px] sm:h-12 sm:text-base sm:rounded-[50px] py-2 min-w-20 h-9 text-sm rounded-[30px]',
  lg: 'py-5 xl:min-w-[310px] lg:min-w-[260px] sm:min-w-[310px] min-w-[160px] h-14 text-base rounded-[30px]',
}

interface CustomButtonProps extends ButtonProps {
  variant?: 'solid' | 'bordered' | 'light' | 'faded' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  additionalClass?: string
}

export const Button = memo(
  ({
    variant = 'solid',
    size,
    disabled = false,
    additionalClass = '',
    ...props
  }: CustomButtonProps) => {
    const lightStyles =
      variant === 'light'
        ? disabled
          ? 'bg-linear-purple dark:bg-linear-black-green disabled:text-primary-100'
          : 'bg-background-100 text-primary-500'
        : ''

    const classes = `gap-2.5 font-semibold ${variantClasses[variant]} ${size ? sizeClasses[size] : ''} ${disabled ? 'cursor-default' : ''} ${lightStyles} ${additionalClass}`

    return (
      <NextUiButton
        aria-label='Button'
        className={classes}
        disabled={disabled}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
