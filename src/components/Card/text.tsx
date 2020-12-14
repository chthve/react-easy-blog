import * as React from 'react'

import { Category } from './category'
import { Title } from './title'
import { Description } from './description'
import { Author } from './author'
import { Date } from './date'

import styled from 'styled-components'

import { InfoContainer } from './styles'

export interface TextProps {
  article: {
    title?: string
    description?: string
    category?: string
    date?: number
    author?: string
  }
}

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Text: React.FC<TextProps> = ({ article }: TextProps) => {
  return (
    <Div>
      <Category content={article.category} />
      <Title content={article.title} />
      <Description content={article.description} />
      <InfoContainer>
        <Author content={article.author} />
        <Date content={article.date} />
      </InfoContainer>
    </Div>
  )
}
