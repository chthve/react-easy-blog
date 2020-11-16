import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { BannerContainer } from './styles'
import Image from './image'
import Text from './text'

export interface BannerProps {
  article: {
    author?: string
    category?: string
    title?: string
    description?: string
    date?: number
    image: string
  }
  theme: {
    size?: {
      width?: string
      height?: string
    }
  }
}

const defaultTheme = {
  size: {
    width: '1000px',
    height: '700px'
  },
  style: 1,
  fontColor: 'black',
  hoverButton: true,
  largeFont: '20px',
  mediumFont: '15px'
}

export default function Banner({ article, theme }: BannerProps) {
  Object.assign(defaultTheme, theme)
  return (
    <ThemeProvider theme={defaultTheme}>
      <BannerContainer>
        <Image image={article.image} />
        <Text article={article} />
      </BannerContainer>
    </ThemeProvider>
  )
}
