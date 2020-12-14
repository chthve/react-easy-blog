import * as React from 'react'
import { BannerDescription } from './styles'

export interface DescriptionProps {
  content?: string
}

export const Description: React.FC<DescriptionProps> = ({
  content
}: DescriptionProps) => {
  return <BannerDescription>{content}</BannerDescription>
}
