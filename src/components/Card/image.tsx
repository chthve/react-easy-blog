import * as React from 'react'
import { SocialMedia } from './socialMedia'
import { ImageContainer, Img, Route } from './styles'

export interface ImageProps {
  image?: string
  socialMedia?: boolean
  route?: string
}

export const Image: React.FC<ImageProps> = ({
  image,
  socialMedia,
  route
}: ImageProps) => {
  return (
    <ImageContainer>
      <Route href={route}>
        <Img src={image} />
        {socialMedia && <SocialMedia />}
      </Route>
    </ImageContainer>
  )
}
