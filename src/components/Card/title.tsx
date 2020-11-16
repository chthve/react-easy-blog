import * as React from 'react'
import { TitleText } from './styles'

export interface TitleProps {
  content?: string
}

export default function Title({ content }: TitleProps) {
  return <TitleText>{content}</TitleText>
}
