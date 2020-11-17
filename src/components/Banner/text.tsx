import React from 'react'
import Button from './button'
import Title from './title'
import { BannerTextContainer } from './styles'
import Description from './description'

export interface TextProps {
  article: {
    image?: string
    title?: string
    description?: string
  }
  style?: number
}

export default function Text({ article }: TextProps) {
  return (
    <BannerTextContainer>
      <Title content={article.title} />
      <Description content={article.description} />
      <Button />
    </BannerTextContainer>
  )
}
