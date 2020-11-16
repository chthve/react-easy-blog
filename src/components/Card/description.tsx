import * as React from 'react'
import { DescriptionText } from './styles'

export interface DescriptionProps {
  content?: string
}

export default function Description({ content }: DescriptionProps) {
  return <DescriptionText>{content}</DescriptionText>
}
