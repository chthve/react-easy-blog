import * as React from 'react'
import { InfoText } from './styles'

export interface AuthorProps {
  content?: string
}

export const Author: React.FC<AuthorProps> = ({ content }: AuthorProps) => {
  return <InfoText>{content}</InfoText>
}
