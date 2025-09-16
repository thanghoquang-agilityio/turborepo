import { memo } from 'react'

import { Textarea } from '@nextui-org/react'

// Components
import { Button, Text } from '@/components'
// Constants
import { borderStyle } from '@/constants'
// Utils
import { formatAmountCurrency } from '@/utils'

interface OrderSummaryProps {
  subTotal: number
  itemTotal: number
  onPress?: () => void
}

const OrderSummary = memo(
  ({ subTotal, itemTotal, onPress }: OrderSummaryProps) => {
    const formatSubTotal = formatAmountCurrency(subTotal.toString())
    const classBorder = `${borderStyle} before:top-[0px] before:left-[0px]`

    return (
      <div className='flex max-w-[305px] flex-col gap-4 bg-background-100'>
        <div className='w-full rounded-medium border-large border-background-300 bg-background-100'>
          <Text variant='title' size='lg' className='p-4 text-center'>
            Order Summary
          </Text>
          <div className={`relative flex justify-between p-4 ${classBorder}`}>
            <Text variant='primary' size='md' className='max-w-[100px]'>
              Sub Total
            </Text>
            <Text variant='primary' size='md' className='max-w-[100px]'>
              {formatSubTotal}
            </Text>
          </div>
          <div className={`relative flex justify-between p-4 ${classBorder}`}>
            <Text variant='primary' size='md' className='max-w-[100px]'>
              Items Total
            </Text>
            <Text variant='primary' size='md' className='max-w-[100px]'>
              {itemTotal}
            </Text>
          </div>
        </div>
        <Textarea
          label='Add a gift message to your order'
          labelPlacement='outside'
          classNames={{
            base: 'w-full p-4 bg-background-100 border-large border-background-300 rounded-medium',
            label:
              'text-primary-300 text-base font-semibold group-data-[filled-within=true]:text-primary-300',
            inputWrapper:
              'border-medium border-background-300 rounded-none mt-1 min-h-[100px]',
            input: 'text-primary-300 text-sm font-medium',
          }}
        />
        <Text variant='subTitle' size='sm' className='text-secondary-500'>
          Shipping & taxes calculated at checkout
        </Text>
        <Button
          variant='solid'
          size='lg'
          additionalClass='h-[50px]'
          onClick={onPress}
          aria-label='Go To Checkout'
        >
          Go To Checkout
        </Button>
      </div>
    )
  }
)

OrderSummary.displayName = 'OrderSummary'
export default OrderSummary
