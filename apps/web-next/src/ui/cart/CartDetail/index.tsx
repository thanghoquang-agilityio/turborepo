'use client'

import { Suspense } from 'react'

import dynamic from 'next/dynamic'

import { useOrderSummary } from '@/hooks'
// Styles
import '@/styles/card-list.css'
// Types
import { CartItemResponse } from '@/types'
import { Content } from '@/components'

// Components
const CartItem = dynamic(() => import('../CartItem'))
const OrderSummary = dynamic(() => import('../OrderSummary'))

interface CartDetailProps {
  cartItems: CartItemResponse[]
}

const CartDetail = ({ cartItems }: CartDetailProps) => {
  const { totalAmount, totalItems, addOptimisticCartItems } =
    useOrderSummary(cartItems)

  if(!cartItems.length) {
    return <Content title='Empty items in your cart' subTitle='Continue shopping' />
  }

  return (
    <div className='container flex w-full max-w-full flex-col items-center gap-[40px] py-8 lg:flex-row lg:items-start lg:py-12 xl:py-16'>
      <div
        className={`card-list mx-auto grid w-fit grid-cols-2 gap-x-[20px] gap-y-[30px] 2xl:grid-cols-3`}
      >
        {cartItems.map((cartItem) => {
          const { 
            id = '', 
            documentId = '',
            quantity = 0, 
            size = '', 
            productVariantId 
          } = cartItem
          
          const {
            id: variantId = '',
            color = '',
            size: sizeList = '',
            stock: stockList = '',
            tax = 0,
          } = productVariantId || {}

          const name = productVariantId?.productId?.name || ''
          const image = productVariantId?.productId?.image?.url || ''
          const discount = productVariantId?.productId?.discount || 0
          const price = productVariantId?.productId?.price || 0

          const sizes = sizeList.split(',')
          const stocks = stockList.split(',')
          const sizeIndex = sizes.indexOf(size)
          const stock = Number(stocks[sizeIndex])

          return (
            <Suspense key={`cart-item-suspense-${id}`}>
              <CartItem
                key={`cart-item${id}`}
                variantId={variantId.toString()}
                documentId={documentId}
                quantityDefault={quantity}
                size={size}
                color={color}
                name={name}
                image={image}
                price={price}
                tax={tax}
                discount={discount}
                stock={stock}
                addOptimisticCartItems={addOptimisticCartItems}
              />
            </Suspense>
          )
        })}
      </div>
      <div className='w-[305px]'>
        <Suspense>
          <OrderSummary subTotal={totalAmount} itemTotal={totalItems} />
        </Suspense>
      </div>
    </div>
  )
}

export default CartDetail
