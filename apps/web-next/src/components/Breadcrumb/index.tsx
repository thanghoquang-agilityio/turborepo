'use client'

import { memo } from 'react'

// Components
import { BreadcrumbItem, Breadcrumbs } from '@repo/next-ui'

// Constants
import { ROUTER } from '@/constants'

import { InView } from '../InView'

export interface BreadcrumbItem {
  name: string
  link: string
}

export const Breadcrumb = memo(({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <InView>
      <Breadcrumbs
        variant='solid'
        className='w-fit rounded-medium bg-background-300'
        classNames={{
          list: 'gap-3.5',
        }}
        itemClasses={{
          base: 'gap-3.5',
          item: 'text-secondary-500 hover:text-primary-300 hover:opacity-1 data-[current=true]:text-primary-300 data-[current=true]:font-semibold',
          separator: 'text-secondary-500',
        }}
      >
        <BreadcrumbItem key='breadcrumb-item-dashboard' href={ROUTER.DASHBOARD}>
          Dashboard
        </BreadcrumbItem>

        {items.map(({ name, link }, index) => (
          <BreadcrumbItem key={`breadcrumb-item-${index}`} href={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </InView>
  )
})

Breadcrumb.displayName = 'Breadcrumb'
