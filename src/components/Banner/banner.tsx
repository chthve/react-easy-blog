import React, { useState } from 'react'
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
    width?: string
    height?: string
  }
  hover?: boolean
}

const defaultTheme = {
  width: '800px',
  height: '500px',
  style: 1,
  fontColor: 'black',
  hoverButton: true,
  largeFont: '20px',
  mediumFont: '16px',
  fontFamily: 'New Times Roman',
  primary: 'white'
}

export default function Banner({ article, theme, hover }: BannerProps) {
  Object.assign(defaultTheme, theme)
  const [isShown, setIsShown] = useState(false)
  function toggleShow() {
    setIsShown(!isShown)
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      {hover && (
        <BannerContainer
          onMouseEnter={() => toggleShow()}
          onMouseLeave={() => toggleShow()}
        >
          <Image image={article.image} />
          {isShown && <Text article={article} />}
        </BannerContainer>
      )}
      {!hover && (
        <BannerContainer>
          <Image image={article.image} />
          <Text article={article} />
        </BannerContainer>
      )}
    </ThemeProvider>
  )
}
