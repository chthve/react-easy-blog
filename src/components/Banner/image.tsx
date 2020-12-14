import * as React from 'react'
import { BannerImage } from './styles'

export interface ImageProps {
  image?: string
}

export const Image: React.FC<ImageProps> = ({ image }: ImageProps) => {
  return <BannerImage src={image} />
}
