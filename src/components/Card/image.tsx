import * as React from 'react'
import SocialMedia from './socialMedia'
import { ImageContainer, Img } from './styles'

export interface ImageProps {
  image?: string
}

export default function Image({ image }: ImageProps) {
  return (
    <ImageContainer>
      <Img src={image} />
      <SocialMedia />
    </ImageContainer>
  )
}
