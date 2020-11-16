import * as React from 'react'
import { BannerDescription } from './styles'

export interface DescriptionProps {
  content?: string
}

export default function Description({ content }: DescriptionProps) {
  return <BannerDescription>{content}</BannerDescription>
}
