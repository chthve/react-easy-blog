import * as React from 'react'
import { DescriptionText } from './styles'

export interface DescriptionProps {
  content?: string
}

export const Description: React.FC<DescriptionProps> = ({
  content
}: DescriptionProps) => {
  return <DescriptionText>{content}</DescriptionText>
}
