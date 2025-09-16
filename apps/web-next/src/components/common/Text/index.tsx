import { type ReactNode, memo } from 'react'

interface TextProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'title'
    | 'subTitle'
    | 'success'
    | 'warning'
    | 'error'
    | 'default'
  size?: 'sm' | 'md' | 'lg'
  type?: 'default' | 'link' | 'line'
  className?: string
  children: ReactNode
}

const variantClasses = {
  primary: 'text-primary-300 font-semibold',
  secondary: 'text-foreground-100 font-medium',
  title: 'text-primary-200 dark:text-primary-300 font-semibold',
  subTitle: 'text-foreground-300 font-normal',
  success: 'text-success-100',
  warning: 'text-warning-100',
  error: 'text-danger-100',
  default: '',
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

const typeTextClasses = {
  default: 'no-underline',
  link: 'underline',
  line: 'line-through',
}

export const Text = memo(
  ({
    variant = 'default',
    size,
    type = 'default',
    className,
    children,
  }: TextProps) => {
    const classes = `${variantClasses[variant]} ${size ? sizeClasses[size] : ''} ${typeTextClasses[type]} text-ellipsis whitespace-nowrap overflow-hidden ${className || ''}`

    return <p className={classes}>{children}</p>
  }
)

Text.displayName = 'Text'
