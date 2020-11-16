import * as React from 'react'
import { BannerTitle } from './styles'

export interface TitleProps {
  content?: string
}

export default function Title({ content }: TitleProps) {
  return <BannerTitle>{content}</BannerTitle>
}
