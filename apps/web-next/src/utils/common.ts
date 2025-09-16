import { API_IMAGE_URL, STAR_DEFAULT } from '@/constants'
import { ImageExtension } from '@/types/image'

export const getStars = (value: number): number[] => {
  const stars: number[] = []
  const star = value || STAR_DEFAULT

  const [whole, part] = star.toFixed(1).split('.').map(Number)
  for (let i = 0; i < whole; i++) stars.push(100)
  if (part > 0) stars.push(part * 10)
  const length = part > 0 ? STAR_DEFAULT - 1 : STAR_DEFAULT
  for (let i = whole; i < length; i++) stars.push(0)

  return stars
}

export function generateImageURL({
  variant = '',
  hash,
  ext = 'webp',
}: {
  variant?: string
  hash?: string
  ext?: ImageExtension
}) {
  const variantPrefix = variant ? `${variant}_` : ''

  return `${API_IMAGE_URL}/uploads/${variantPrefix}${hash}${ext}`
}
