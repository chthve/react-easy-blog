import * as React from 'react'
import { CategoryText } from './styles'

export interface CategoryProps {
  content?: string
}

export const Category: React.FC<CategoryProps> = ({
  content
}: CategoryProps) => {
  return <CategoryText>{content}</CategoryText>
}
