import { usePathname } from 'next/navigation'

import { BreadcrumbItem } from '@/components'
import { PRODUCT_LIST_REGEX, ROUTER } from '@/constants'

export const useBreadcrumb = () => {
  const pathname = usePathname()

  const newPath = pathname?.split('/').filter((path) => path)
  const pathLength = newPath.length

  const parentPage = pathname.match(PRODUCT_LIST_REGEX)
    ? {
        name: 'Products',
        link: ROUTER.PRODUCTS,
      }
    : ({} as BreadcrumbItem)

  const itemsBreadcrumb: BreadcrumbItem[] = [parentPage]

  if (pathLength > 1 && pathname.match(PRODUCT_LIST_REGEX))
    itemsBreadcrumb.push({
      name: 'Detail Products',
      link: '#',
    })

  return itemsBreadcrumb
}
