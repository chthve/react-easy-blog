import * as React from 'react'
import SocialMedia from './socialMedia'
import { ImageContainer, Img } from './styles'

export interface ImageProps {
  image?: string
  socialMedia?: boolean
}

export default function Image({ image, socialMedia }: ImageProps) {
  return (
    <ImageContainer>
      <Img src={image} />
      {socialMedia && <SocialMedia />}
    </ImageContainer>
  )
}
