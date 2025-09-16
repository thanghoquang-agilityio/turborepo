// Components
import { Button, Text } from '@/components'
import { CloseIcon } from '@/icons'

export type ToastColor = 'green' | 'red' | 'yellow'

interface ToastProps {
  message: string
  onClose?: () => void
  color?: ToastColor
}

const BGR_COLOR = {
  green: 'bg-success-100',
  red: 'bg-danger-100',
  yellow: 'bg-warning-200',
}

export const Toast = ({ message, color = 'green', onClose }: ToastProps) => {
  return (
    <div
      className={`fixed right-5 top-5 z-[9999] mb-4 flex w-full max-w-xs items-center rounded-lg p-4 pr-8 ${BGR_COLOR[color]}`}
      role='alert'
      data-testid='toast'
    >
      <Text className='overflow-visible whitespace-pre-wrap text-background-100'>
        {message}
      </Text>
      <Button
        variant='ghost'
        additionalClass='absolute top-[-2px] right-[-2px] text-background-100'
        onClick={onClose}
      >
        <CloseIcon customClass='w-[12px] h-[12px]' />
      </Button>
    </div>
  )
}
