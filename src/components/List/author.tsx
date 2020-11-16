import * as React from 'react'
import { InfoText } from './styles'

export interface AuthorProps {
  content?: string
}

export default function Author({ content }: AuthorProps) {
  return <InfoText>{content}</InfoText>
}
