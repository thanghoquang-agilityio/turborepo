import { API_IMAGE_URL } from '@/constants'
import { ImageExtension } from '@/types'

import { generateImageURL, getStars } from '../common'

describe('getStars', () => {
  it('should return full stars for a whole number value', () => {
    const result = getStars(4)
    expect(result).toEqual([100, 100, 100, 100, 0])
  })

  it('should return full and partial stars for a decimal value', () => {
    const result = getStars(4.5)
    expect(result).toEqual([100, 100, 100, 100, 50])
  })

  it('should handle values with no decimal part', () => {
    const result = getStars(3.0)
    expect(result).toEqual([100, 100, 100, 0, 0])
  })

  it('should handle values with no decimal part', () => {
    const result = getStars(Number(NaN))
    expect(result).toEqual([100, 100, 100, 100, 100])
  })
})

describe('generateImageURL', () => {
  it('should generate the correct URL with a variant', () => {
    const result = generateImageURL({
      variant: 'thumbnail',
      hash: 'example_hash',
      ext: 'png' as ImageExtension,
    })
    expect(result).toBe(`${API_IMAGE_URL}/uploads/thumbnail_example_hashpng`)
  })

  it('should generate the correct URL without a variant', () => {
    const result = generateImageURL({
      hash: 'example_hash',
      ext: 'webp' as ImageExtension,
    })
    expect(result).toBe(`${API_IMAGE_URL}/uploads/example_hashwebp`)
  })

  it('should default to webp extension if no extension is provided', () => {
    const result = generateImageURL({
      hash: 'example_hash',
    })
    expect(result).toBe(`${API_IMAGE_URL}/uploads/example_hashwebp`)
  })

  it('should handle empty hash value', () => {
    const result = generateImageURL({
      variant: 'thumbnail',
      hash: '',
      ext: 'jpg' as ImageExtension,
    })
    expect(result).toBe(`${API_IMAGE_URL}/uploads/thumbnail_jpg`)
  })

  it('should handle missing hash value', () => {
    const result = generateImageURL({
      variant: 'thumbnail',
    })
    expect(result).toBe(`${API_IMAGE_URL}/uploads/thumbnail_undefinedwebp`)
  })
})
