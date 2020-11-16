import * as React from 'react'
import { CategoryText } from './styles'

export interface CategoryProps {
  content?: string
}

export default function Category({ content }: CategoryProps) {
  return <CategoryText>{content}</CategoryText>
}
