'use client'

// Hooks
// Components
import { Breadcrumb, ButtonIcon, Text } from '@/components'
import { useBreadcrumb } from '@/hooks'
import { CopyLinkIcon, HeartIcon, SavedIcon } from '@/icons'

interface ProductHeaderInfoProps {
  name: string
  likes: number
  brand: string
}

const ProductHeaderInfo = ({ name, likes, brand }: ProductHeaderInfoProps) => {
  const breadcrumbItems = useBreadcrumb()

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='mt-[30px] flex flex-col justify-between gap-3 sm:flex-row'>
        <div className='overflow-hidden'>
          <Text className='text-3xl font-semibold leading-[34px] text-default'>
            {name}
          </Text>
          {brand && (
            <Text className='text-base font-normal text-foreground-300 sm:mt-[11px]'>
              {brand}
            </Text>
          )}
        </div>
        <div className='flex gap-[13px]'>
          <ButtonIcon
            variant='faded'
            size='md'
            shape='square'
            additionalClass='sm:h-[34px]'
            aria-label={`Total ${likes}`}
          >
            <HeartIcon /> {likes}
          </ButtonIcon>
          <ButtonIcon variant='solid' size='sm' shape='square'>
            <SavedIcon />
          </ButtonIcon>
          <ButtonIcon variant='solid' size='sm' shape='square'>
            <CopyLinkIcon />
          </ButtonIcon>
        </div>
      </div>
    </>
  )
}

export default ProductHeaderInfo
