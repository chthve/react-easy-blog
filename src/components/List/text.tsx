import * as React from 'react'
import Description from './description'
import { InfoContainer, TextContainer } from './styles'
import Title from './title'
import Author from './author'
import Date from './date'

export interface TextProps {
  article?: {
    title?: string
    description?: string
    author?: string
    date?: number
    category?: string
  }
}

export default function Text({ article }: TextProps) {
  return (
    <TextContainer>
      <Title content={article && article.title} />
      <Description content={article && article.description} />
      <InfoContainer>
        <Author content={article && article.author} />
        <Date content={article && article.date} />
      </InfoContainer>
    </TextContainer>
  )
}
