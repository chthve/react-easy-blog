import * as React from 'react'
import { BannerImage } from './styles'

export interface ImageProps {
  image?: string
}

export default function Image({ image }: ImageProps) {
  return <BannerImage src={image} />
}
