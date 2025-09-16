import { memo, useCallback } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Card } from '@nextui-org/react'

// Components
import { Button, ButtonIcon, CustomImage, Text } from '@/components'
// Constants
import { API_IMAGE_URL, COMMENTS_DEFAULT, ROUTER } from '@/constants'
import { HeartIcon, StarIcon } from '@/icons'
// Styles
import '@/styles/card.css'
// Utils
import { formatAmountCurrency, getStars } from '@/utils'

interface ProductCardProps {
  id: string
  image?: string
  name: string
  variants?: number
  price: number
  star: number
  comments: number
  additionalClass?: string
}

const ProductCard = memo(
  ({
    id,
    image,
    name,
    variants,
    star,
    comments,
    price,
    additionalClass = '',
  }: ProductCardProps) => {
    const altImage = name.split('')[0]
    const formatPrice = formatAmountCurrency(price.toString())

    const router = useRouter()
    const handleAddToCart = useCallback(() => {
      router.push(`${ROUTER.PRODUCTS}/${id}`)
    }, [id, router])

    return (
      <Card
        className={`card relative flex max-w-[305px] flex-col items-center overflow-hidden rounded-large border-medium border-background-300 ${additionalClass}`}
      >
        <ButtonIcon
          variant='ghost'
          size='sm'
          shape='circle'
          additionalClass='absolute top-3 right-2 min-w-[30px]'
        >
          <HeartIcon />
        </ButtonIcon>
        <Link href={`${ROUTER.PRODUCTS}/${id}`}>
          <CustomImage
            src={`${API_IMAGE_URL}${image}`}
            alt={altImage}
            className='card-image w-full md:h-[303px] md:w-[305px]'
            width={305}
            height={303}
          />
        </Link>

        <div className='flex w-full flex-col gap-[5px] overflow-hidden p-5'>
          <div className='card-content flex flex-col justify-between md:flex-row'>
            <Text
              variant='primary'
              size='lg'
              className='max-w-[150px] text-primary-400'
            >
              {name}
            </Text>
            <Text variant='title' size='lg' className='max-w-[100px]'>
              {formatPrice}
            </Text>
          </div>
          <Text
            variant='subTitle'
            size='sm'
            className='max-w-[263px] text-secondary-500'
          >
            {variants} types of shoos available
          </Text>
          <div className='mt-2 flex gap-2'>
            <div className='gap-0.25 flex h-[17px] text-warning-200'>
              {getStars(star).map((value, index) => (
                <StarIcon key={`star-product-${id}-${value}-${index}`} />
              ))}
            </div>
            <Text variant='subTitle' size='sm' className='text-secondary-500'>
              ({comments || COMMENTS_DEFAULT})
            </Text>
          </div>
        </div>

        <div className='card-content mb-6 mt-1 flex w-full flex-col items-end gap-3 px-5 md:flex-row md:justify-between'>
          <Button
            variant='solid'
            size='sm'
            additionalClass='md:max-w-[128px] w-full'
            onClick={handleAddToCart}
            data-testid='btn-add-to-cart'
            aria-label='Add To Cart'
          >
            Add To Cart
          </Button>
          <Button
            variant='bordered'
            size='sm'
            additionalClass='md:max-w-[128px] w-full cursor-not-allowed'
            aria-label='Add Shortlist'
          >
            Add Shortlist
          </Button>
        </div>
      </Card>
    )
  }
)

ProductCard.displayName = 'ProductCard'
export default ProductCard
