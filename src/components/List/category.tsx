import * as React from 'react'
import { CategoryText, CategoryContainer } from './styles'

export interface CategoryProps {
  content?: string
}

export const Category: React.FC<CategoryProps> = ({
  content
}: CategoryProps) => {
  return (
    <CategoryContainer>
      <CategoryText>{content}</CategoryText>
    </CategoryContainer>
  )
}
