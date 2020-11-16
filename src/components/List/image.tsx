import * as React from 'react'
import { ImageContainer } from './styles'
import { Img } from './styles'

export interface ImageProps {
  image?: string
}

export default function Image({ image }: ImageProps) {
  return (
    <ImageContainer>
      <Img src={image} />
    </ImageContainer>
  )
}
