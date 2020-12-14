import * as React from 'react'
import { BannerTitle } from './styles'

export interface TitleProps {
  content?: string
}

export const Title: React.FC<TitleProps> = ({ content }: TitleProps) => {
  return <BannerTitle>{content}</BannerTitle>
}
