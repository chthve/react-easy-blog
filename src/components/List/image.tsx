import * as React from 'react'
import { ImageContainer, Img, Route } from './styles'

export interface ImageProps {
  image?: string
  route?: string
}

export const Image: React.FC<ImageProps> = ({ image, route }: ImageProps) => {
  return (
    <ImageContainer>
      <Route href={route}>
        <Img src={image} />
      </Route>
    </ImageContainer>
  )
}
