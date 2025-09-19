'use client'

import { memo, useCallback, useMemo, useState } from 'react'

import { Card as CardNextUI, Spinner } from '@repo/next-ui'

// Components
import { Button, CustomImage, Text } from '@/components'
// Constants
import { API_IMAGE_URL, USER_ID_DEFAULT, borderStyle } from '@/constants'
// Hooks
import { useCart, useDebounce } from '@/hooks'
import { CloseIcon, MinusIcon, PlusIcon } from '@/icons'
// Styles
import '@/styles/card.css'
// Types
import type { CartItemResponse } from '@/types'
// Utils
import { calculateAmount, formatAmountCurrency } from '@/utils'

interface CartItemProps {
  documentId: string
  variantId: string
  image?: string
  name: string
  color: string
  size: string
  quantityDefault: number
  stock: number
  price: number
  tax: number
  discount: number
  additionalClass?: string
  addOptimisticCartItems: (action: CartItemResponse) => void
}

const CartItem = memo(
  ({
    documentId,
    variantId,
    image,
    name,
    color,
    size,
    quantityDefault,
    stock,
    price,
    tax,
    discount,
    additionalClass = '',
    addOptimisticCartItems,
  }: CartItemProps) => {
    const [quantity, setQuantity] = useState(quantityDefault)
    const [oldQuantity, setOldQuantity] = useState(quantityDefault)

    const cartItem = useMemo(() => {
      return {
        id: 0, // Not used for updates
        documentId,
        productVariantId: Number(variantId),
        userId: Number(USER_ID_DEFAULT),
        quantity,
        size,
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
      }
    }, [documentId, quantity, size, variantId])

    const { isPending, handleQuantityChange, handleRemove } = useCart()
    const debounceQuantityChange = useDebounce(async (value: number) => {
      let res
      if (!value) {
        addOptimisticCartItems({
          ...cartItem,
          productVariantId: undefined,
          quantity: 0,
        })

        res = await handleRemove(documentId)
      } else if (value !== oldQuantity) {
        addOptimisticCartItems({
          ...cartItem,
          productVariantId: undefined,
          quantity: value,
        })

        res = await handleQuantityChange(documentId, {
          productVariantId: cartItem.productVariantId,
          userId: cartItem.userId || 0,
          size: cartItem.size,
          quantity: value,
        })
      }

      if (!res) setQuantity(oldQuantity)
      else setOldQuantity(value)
    })

    // Handle change quantity
    const onChange = useCallback(
      async (operation: 'increment' | 'decrement') => {
        const quantityChange =
          operation === 'increment' ? quantity + 1 : quantity - 1

        setQuantity(quantityChange)
        debounceQuantityChange(quantityChange)
      },
      [debounceQuantityChange, quantity]
    )

    const handleDecrement = useCallback(async () => {
      onChange('decrement')
    }, [onChange])

    const handleIncrement = useCallback(async () => {
      onChange('increment')
    }, [onChange])

    // Handle remove item
    const onRemove = useCallback(async () => {
      addOptimisticCartItems({
        ...cartItem,
        productVariantId: undefined,
        quantity: 0,
      })

      await handleRemove(documentId)
    }, [addOptimisticCartItems, cartItem, handleRemove, documentId])

    const amount = useMemo(
      () => calculateAmount(tax, discount, price),
      [discount, price, tax]
    )

    const altImage = name.split('')[0]
    const subTotal = amount.price * quantity
    const formatSubTotal = useMemo(
      () => formatAmountCurrency(subTotal.toString()),
      [subTotal]
    )

    return (
      <CardNextUI
        className={`card relative flex max-w-[305px] flex-col items-center overflow-hidden rounded-large border-medium border-background-300 pb-5 pt-3 ${additionalClass}`}
      >
        {isPending && (
          <>
            <div className='absolute inset-0 z-50 flex items-center justify-center bg-foreground-100 opacity-40' />
            <Spinner
              size='lg'
              classNames={{
                circle1:
                  'border-[5px] border-b-primary-100 border-l-primary-100',
                circle2:
                  'border-[5px] border-b-primary-100 border-l-primary-100',
              }}
              className='z-60 absolute inset-0 m-auto'
            />
          </>
        )}
        <Button
          variant='ghost'
          additionalClass='absolute top-0 right-0 text-primary-300'
          data-testid='button-close'
          onClick={onRemove}
        >
          <CloseIcon customClass='w-[12px] h-[12px]' />
        </Button>
        <Text
          variant='primary'
          className='max-w-[250px] text-xl text-primary-400'
        >
          {name}
        </Text>
        <Text
          variant='subTitle'
          size='sm'
          className='max-w-[250px] capitalize text-secondary-500'
        >
          {color} / {size}
        </Text>
        <CustomImage
          src={`${API_IMAGE_URL}${image}`}
          alt={altImage}
          className='card-image mb-5 mt-4 h-[303px] w-[305px]'
          width={305}
          height={303}
        />

        <div className='flex h-[40px] w-[150px] justify-between rounded-[30px] border-small border-background-300 bg-background-100 p-2'>
          <Button
            variant='ghost'
            additionalClass='h-full text-primary-100'
            isDisabled={quantity === 0}
            data-testid='button-minus'
            onClick={handleDecrement}
          >
            <MinusIcon customClass='w-[12px] h-[12px]' />
          </Button>
          <Text className='text-[20px] font-bold leading-[22px] text-primary-300'>
            {quantity}
          </Text>
          <Button
            variant='ghost'
            additionalClass='h-full text-primary-100'
            isDisabled={quantity === stock}
            data-testid='button-plus'
            onClick={handleIncrement}
          >
            <PlusIcon customClass='w-[12px] h-[12px]' />
          </Button>
        </div>

        <div
          className={`relative mt-10 flex w-full justify-between px-4 ${borderStyle} before:top-[-20px]`}
        >
          <Text variant='title' size='lg' className='max-w-[100px]'>
            Subtotal
          </Text>
          <Text variant='title' size='lg' className='max-w-[100px]'>
            {formatSubTotal}
          </Text>
        </div>
      </CardNextUI>
    )
  }
)

CartItem.displayName = 'CartItem'
export default CartItem
