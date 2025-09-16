import { memo } from 'react'

import { Button, CustomImage, Text } from '@/components'

interface BannerProps {
  description: string
  image: string
  onBuyNow?: () => void
}

const Banner = memo(({ description, image, onBuyNow }: BannerProps) => {
  const name = description.split('')
  const altImage = name[name.length - 1]

  return (
    <div className='relative flex flex-col items-center gap-4 rounded-none bg-linear-purple pt-[20px] dark:bg-linear-black-green sm:h-[180px] sm:items-start sm:gap-[22px] sm:pl-[75px] md:h-[287px] md:gap-[44px] md:pt-[50px] lg:pl-[135px] lg:pt-[65px] 2xl:rounded-large'>
      <Text className='max-w-[261px] whitespace-pre-wrap text-2xl font-bold text-primary-300 md:max-w-[377px] md:text-5xl md:leading-10'>
        {description}
      </Text>
      <div className='flex items-center'>
        <Button
          variant='solid'
          size='md'
          additionalClass='max-w-[136px]'
          onClick={onBuyNow}
          aria-label='Buy Now'
        >
          Buy Now
        </Button>
        <CustomImage
          src={image}
          alt={altImage}
          className='top-[18px] h-[104px] w-[96px] sm:absolute sm:right-[68px] sm:h-[161px] sm:w-[146px] md:h-[269px] md:w-[244px] lg:right-[178px]'
          width={244}
          height={269}
        />
      </div>
    </div>
  )
})

Banner.displayName = 'Banner'
export default Banner
