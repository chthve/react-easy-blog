import * as React from 'react'
import { TitleText } from './styles'

export interface TitleProps {
  content?: string
}

export const Title: React.FC<TitleProps> = ({ content }: TitleProps) => {
  return <TitleText>{content}</TitleText>
}
