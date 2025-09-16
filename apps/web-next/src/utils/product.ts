import { ProductVariantResponse } from '@/types'

export const getSizeVariants = (
  data: ProductVariantResponse[],
  color: string
) => {
  const selectedItem = data.find((item) => item.color === color)

  if (!selectedItem) {
    return []
  }

  const sizes = selectedItem.size.split(',')
  const stocks = selectedItem.stock.split(',')

  const sizeVariants = sizes.map((size: string, index: number) => {
    return {
      size: size.trim().replace(/\b\w/g, (c: string) => c.toUpperCase()),
      stock: Number(stocks[index]) || 0,
    }
  })

  return sizeVariants
}

export const calculateAmount = (
  tax: number,
  discount: number,
  price: number
) => {
  const taxPercentage = tax || 0
  const finalDiscount = 100 - discount
  const finalTax = taxPercentage ? (100 + taxPercentage) / 100 : 1

  return {
    price,
    total: (finalDiscount / 100) * price * finalTax,
  }
}

export const updateStockVariant = ({
  sizes,
  stocks,
  size,
  quantity,
}: {
  sizes: string
  stocks: string
  size: string
  quantity: number
}) => {
  const sizeList = sizes.split(',')
  const stockList = stocks.split(',').map(Number)

  const sizeIndex = sizeList.indexOf(size)
  stockList[sizeIndex] -= quantity

  return stockList.join(',')
}

export const getOverStock = ({
  sizes,
  stocks,
  size,
  quantity,
}: {
  sizes: string
  stocks: string
  size: string
  quantity: number
}) => {
  const sizeList = sizes.split(',')
  const stockList = stocks.split(',').map(Number)

  const sizeIndex = sizeList.indexOf(size)

  return {
    isOverStock: stockList[sizeIndex] - quantity < 0,
    stock: stockList[sizeIndex],
  }
}
