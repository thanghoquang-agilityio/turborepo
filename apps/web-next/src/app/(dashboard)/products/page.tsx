import dynamic from 'next/dynamic'

// Constants
import {
  PAGE_DEFAULT,
  PAGE_SIZE_DEFAULT,
  PRODUCT_RELATIONSHIP,
  SRC_BANNER_HEADPHONE,
} from '@/constants'
// Services
import { getCategoryList, getProducts } from '@/services'
// Types
import {
  CategoryResponse,
  FilterItem,
  SearchParams,
  StringFilter,
} from '@/types'

// Components
const Banner = dynamic(() => import('@/ui/product/Banner'))
const ProductList = dynamic(() => import('@/ui/product/ProductList'))

const Dashboard = async ({ searchParams }: { searchParams?: SearchParams }) => {
  const { category = '', page = PAGE_DEFAULT } = searchParams as SearchParams
  const { categories } = await getCategoryList()
  
  const categoryItems: FilterItem[] = categories.map(
    (category: CategoryResponse) => {
      const { name = '' , products: listProduct = []} = category || {}

      return {
        name: name,
        value: name,
        total: listProduct.length,
      }
    }
  )

  const filters: StringFilter[] = []
  const valueCategories: string[] = []
  if (typeof category === 'string') {
    filters.push({
      field: '[categoryId][name]',
      operator: '[$eq]',
      value: category,
    })
    valueCategories.push(category)
  } else {
    category.map((value) => {
      filters.push({
        field: '[categoryId][name]',
        operator: '[$in]',
        value: value,
      })
      valueCategories.push(value)
    })
  }

  const searchParamsAPI = new URLSearchParams()
  searchParamsAPI.set('pagination[page]', `${page}`)
  searchParamsAPI.set('pagination[pageSize]', `${PAGE_SIZE_DEFAULT}`)
  searchParamsAPI.set('populate[0]', PRODUCT_RELATIONSHIP.IMAGE)
  searchParamsAPI.set('populate[1]', PRODUCT_RELATIONSHIP.PRODUCT_VARIANTS)
  searchParamsAPI.set('populate[2]', PRODUCT_RELATIONSHIP.CATEGORY_ID)
  searchParamsAPI.set(`sort[0]`, 'createdAt:desc')
  if (category)
    filters.forEach(({ field, operator, value }) => {
      searchParamsAPI.append(`filters${field}${operator}`, value)
    })

  const { products, pagination } = await getProducts({
    searchParams: searchParamsAPI,
  })
  console.log(products)
  return (
    <>
      <Banner
        image={SRC_BANNER_HEADPHONE}
        description='Grab Upto 50% Off On Selected Headphone'
      />
      <ProductList
        categories={categoryItems}
        products={products}
        pagination={pagination}
        isFilter={!!category}
        valueCategories={valueCategories}
      />
    </>
  )
}

export default Dashboard
