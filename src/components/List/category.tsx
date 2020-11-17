import * as React from 'react'
import { CategoryText, CategoryContainer } from './styles'

export interface CategoryProps {
  content?: string
}

export default function Category({ content }: CategoryProps) {
  return (
    <CategoryContainer>
      <CategoryText>{content}</CategoryText>
    </CategoryContainer>
  )
}
