export type ImageExtension = 'webp' | 'png'

type Formats = {
  large?: { url: string }
  small?: { url: string }
  medium?: { url: string }
  thumbnail?: { url: string }
}

export interface ImageModel {
  name: string
  hash?: string
  ext?: ImageExtension
  formats?: Formats
  url: string
}
