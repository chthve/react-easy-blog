import React from 'react'
import { Button } from './button'
import { Title } from './title'
import { BannerTextContainer } from './styles'
import { Description } from './description'

export interface TextProps {
  article?: {
    image?: string
    title?: string
    description?: string
  }
  route?: string
  style?: number
}

export const Text: React.FC<TextProps> = ({ article, route }: TextProps) => {
  return (
    <BannerTextContainer>
      <Title content={article && article.title} />
      <Description content={article && article.description} />
      <Button route={route} />
    </BannerTextContainer>
  )
}
