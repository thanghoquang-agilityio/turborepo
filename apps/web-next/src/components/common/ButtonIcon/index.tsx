import { memo } from 'react'

import { ButtonProps, Button as NextUiButton } from '@nextui-org/react'

const variantClasses = {
  solid: 'bg-background-300 text-primary-300',
  bordered:
    'bg-background-100  text-primary-100 border-small border-foreground-300',
  light: 'bg-warning-300 font-medium text-sm',
  faded: 'bg-danger-300 text-danger-100 font-semibold sm:text-base text-sm',
  ghost: 'bg-background-100 border-none text-primary-500',
}

const sizeSquareClasses = {
  sm: 'sm:min-w-[34px] sm:min-h-[34px] p-[7px] h-[30px] sm:w-auto w-[30px] min-w-[30px]',
  md: 'sm:min-h-[31px] px-[10px] py-[7px] h-[30px] min-h-[30px]',
}

const sizeCircleClasses = {
  sm: 'sm:min-w-[46px] sm:min-h-[46px] sm:p-[11px] h-[30px] p-[7px] w-[30px]',
  md: 'lg:min-w-[50px] lg:min-h-[50px] lg:p-[15px] md:max-h-[40px] md:max-w-[40px] md:p-[10px] max-w-[30px] max-h-[30px] p-[7px] min-w-[30px]',
}

const typeClasses = {
  circle: 'rounded-[100%]',
  square: 'rounded-[10px]',
  ellipse: 'rounded-[28px]',
}

interface CustomButtonIconProps extends ButtonProps {
  variant?: 'solid' | 'bordered' | 'light' | 'faded' | 'ghost'
  size?: 'sm' | 'md'
  shape?: 'circle' | 'square' | 'ellipse'
  disabled?: boolean
  additionalClass?: string
}

export const ButtonIcon = memo(
  ({
    variant = 'solid',
    size = 'md',
    shape = 'circle',
    disabled = false,
    additionalClass = '',
    ...props
  }: CustomButtonIconProps) => {
    const sizeClasses =
      shape === 'circle' ? sizeCircleClasses[size] : sizeSquareClasses[size]
    const colorLight = variant === 'light' ? 'text-warning-100' : ''
    const classes = `gap-2.5 font-semibold ${variantClasses[variant]} ${colorLight} ${typeClasses[shape]} ${sizeClasses} ${disabled ? 'cursor-default' : ''} ${additionalClass}`

    return (
      <NextUiButton
        aria-label='Button Icon'
        className={classes}
        disabled={disabled}
        {...props}
      />
    )
  }
)

ButtonIcon.displayName = 'ButtonIcon'
