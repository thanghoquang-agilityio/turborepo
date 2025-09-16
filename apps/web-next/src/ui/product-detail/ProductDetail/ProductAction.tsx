'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import dynamic from 'next/dynamic'

// Components
import { Button, ButtonIcon, Text } from '@/components'
// Constants
import { USER_ID_DEFAULT, borderStyle } from '@/constants'
import { useCart } from '@/hooks'
import {
  MessageIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  StarLineIcon,
} from '@/icons'
// Types
import { ProductVariantModel } from '@/types'
// Utils
import { calculateAmount, formatAmountCurrency, getSizeVariants } from '@/utils'

const ColorRadioGroup = dynamic(
  () => import('@/ui/product-detail/ColorRadioGroup')
)
const SizeRadioGroup = dynamic(
  () => import('@/ui/product-detail/SizeRadioGroup')
)
const RelatedInfo = dynamic(() => import('@/ui/product-detail/RelatedInfo'))

interface ProductActionProps {
  productVariants?: ProductVariantModel[]
  discount: number
  price: number
  star: number
  comments: number
}

const ProductAction = ({
  productVariants,
  discount,
  price,
  star,
  comments,
}: ProductActionProps) => {
  const colorVariants =
    productVariants?.map((item) => ({
      color: item.color,
    })) || []

  const { isPending, handleCreateOrUpdate } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [sizeVariant, setSizeVariant] = useState('')
  const [colorVariant, setColorVariant] = useState(
    colorVariants?.[0]?.color ?? ''
  )
  const [stock, setStock] = useState(0)

  const sizeVariants = getSizeVariants(productVariants ?? [], colorVariant)
  const currentVariant = productVariants?.find(
    (item) => item.color === colorVariant
  )

  const amount = useMemo(() => {
    return calculateAmount(
      currentVariant?.tax ?? 0,
      discount,
      price
    )
  }, [currentVariant?.tax, discount, price])

  const formatTotal = formatAmountCurrency(amount.total.toString())
  const formatAmount = formatAmountCurrency(amount.price.toString())

  // Handle select size not empty
  useEffect(() => {
    const selectedSize = sizeVariants?.find((item) => item.size === sizeVariant)
    const stockItem = selectedSize?.stock || 0

    if (selectedSize && stockItem > 0) {
      setStock(stockItem ?? 0)
      if (quantity > stockItem) setQuantity(stock ?? 0)

      return
    }

    const firstAvailableSize = sizeVariants?.find((item) => item.stock > 0)
    setSizeVariant(firstAvailableSize?.size ?? '')
    setStock(firstAvailableSize?.stock ?? 0)
  }, [
    colorVariant,
    productVariants,
    quantity,
    sizeVariant,
    sizeVariants,
    stock,
  ])

  // Handle change quantity
  const onChange = useCallback((operation: 'increment' | 'decrement') => {
    setQuantity((prevQuantity) =>
      operation === 'increment' ? prevQuantity + 1 : prevQuantity - 1
    )
  }, [])

  const handleDecrement = useCallback(async () => {
    onChange('decrement')
  }, [onChange])

  const handleIncrement = useCallback(async () => {
    onChange('increment')
  }, [onChange])

  // Handle add to cart
  const handleAddToCart = useCallback(async () => {
    const cartItem = {
      id: 0,
      userId: Number(USER_ID_DEFAULT),
      productVariantId: Number(currentVariant?.id) || 0,
      size: sizeVariant.toLowerCase(),
      quantity,
    }

    await handleCreateOrUpdate(cartItem)
  }, [currentVariant?.id, handleCreateOrUpdate, quantity, sizeVariant])

  const classBorder = `relative ${borderStyle} before:top-[-30px]`

  return (
    <>
      <div className="relative flex flex-col gap-3 sm:flex-row sm:gap-[41px] lg:before:absolute lg:before:top-[-30px] lg:before:w-full lg:before:border-t-small lg:before:border-background-300 lg:before:content-['']">
        <div className='flex flex-row gap-3 sm:flex-col sm:gap-0'>
          <Text variant='primary' className='text-5xl leading-[41px]'>
            {formatAmount}
          </Text>
          {formatTotal && (
            <Text
              type='line'
              className='text-[21px] font-normal text-foreground-100'
            >
              {formatTotal}
            </Text>
          )}
        </div>
        <div>
          <div className='mt-[5px] flex gap-3'>
            <ButtonIcon
              variant='light'
              size='md'
              shape='ellipse'
              additionalClass='font-semibold min-w-[65px] w-[65px] h-[30px] gap-[7px] items-stretch'
              aria-label={`Star ${star.toFixed(1)}`}
            >
              <StarLineIcon customClass='w-4 h-4' />
              {star.toFixed(1)}
            </ButtonIcon>
            <ButtonIcon
              variant='solid'
              size='sm'
              shape='ellipse'
              additionalClass='font-semibold min-w-[121px] h-[30px] gap-[7px] px-2.5'
              aria-label={`${comments} Reviews`}
            >
              <MessageIcon /> {comments} Reviews
            </ButtonIcon>
          </div>
          <Text variant='success' size='sm' className='font-normal'>
            93%{' '}
            <span className='text-foreground-300'>
              of buyers have recommended this.
            </span>
          </Text>
        </div>
      </div>
      {colorVariants.length > 0 && (
        <ColorRadioGroup
          items={colorVariants}
          valueColor={colorVariant}
          setValueColor={setColorVariant}
          additionalClass={classBorder}
        />
      )}
      {sizeVariants.length > 0 && (
        <div className={classBorder}>
          <SizeRadioGroup
            items={sizeVariants}
            valueSize={sizeVariant}
            setValueSize={setSizeVariant}
          />
          <Text variant='warning' size='sm' className='mt-3'>
            {stock} {stock > 1 ? 'items' : 'item'} left in stock
          </Text>
        </div>
      )}
      <div
        className={`${classBorder} flex flex-col items-center gap-[30px] sm:items-start`}
      >
        <div className='flex gap-5'>
          <div
            className='flex h-[40px] w-[160px] justify-between rounded-[30px] bg-background-200 px-2 py-2 sm:h-[60px] sm:w-[170px] sm:py-4'
            data-testid='text-quantity'
          >
            <Button
              variant='ghost'
              additionalClass='h-full text-primary-100'
              data-testid='btn-decrement'
              onClick={handleDecrement}
              isDisabled={quantity === 1}
            >
              <MinusIcon customClass='w-[12px] h-[12px]' />
            </Button>
            <Text className='text-[22px] font-bold leading-[26px] text-primary-300'>
              {quantity}
            </Text>
            <Button
              variant='ghost'
              additionalClass='h-full text-primary-100'
              onClick={handleIncrement}
              data-testid='btn-increment'
              isDisabled={quantity === stock}
            >
              <PlusIcon customClass='w-[12px] h-[12px]' />
            </Button>
          </div>
          <Button
            variant='solid'
            size='lg'
            additionalClass='sm:h-[60px] h-[40px] gap-[10px]'
            onClick={handleAddToCart}
            isLoading={isPending}
            data-testid='btn-add-to-cart'
            aria-label='Add To Cart'
          >
            {!isPending && (
              <>
                <ShoppingBagIcon customClass='sm:h-[22px] h-5' />
                <span className='hidden sm:block'>Add To Cart</span>
              </>
            )}
          </Button>
        </div>
        <RelatedInfo />
      </div>
    </>
  )
}

export default ProductAction
