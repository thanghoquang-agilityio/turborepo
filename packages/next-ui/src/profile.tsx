import { memo } from 'react'

import { Avatar } from '@nextui-org/react'

import { Text } from './text'

interface ProfileProps {
  src: string
  name: string
  subText?: string
  additionalClass?: string
}

export const Profile = memo(
  ({ src, name, subText, additionalClass = '' }: ProfileProps) => (
    <div className={`flex items-center gap-[14px] ${additionalClass}`}>
      <Avatar
        showFallback
        src={src}
        className='h-[30px] w-[30px] bg-background-200 md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]'
      />
      <div className='flex flex-col gap-[7px] lg:flex hidden max-w-[126px] overflow-hidden'>
        <Text variant='subTitle' className='text-xs'>
          {subText}
        </Text>
        <Text variant='title' size='md'>
          {name}
        </Text>
      </div>
    </div>
  )
)

Profile.displayName = 'Profile'
