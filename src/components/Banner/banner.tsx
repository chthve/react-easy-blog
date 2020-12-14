import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { BannerContainer } from './styles'
import { Image } from './image'
import { Text } from './text'

export interface BannerProps {
  article?: {
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
  route?: string
}

const defaultTheme = {
  width: '550px',
  height: '400px',
  style: 1,
  fontColor: 'black',
  hoverButton: true,
  largeFont: '18px',
  mediumFont: '14px',
  fontFamily: 'New Times Roman',
  primary: 'white'
}

export default function Banner({ article, theme, hover, route }: BannerProps) {
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
          <Image image={article && article.image} />
          {isShown && <Text article={article} route={route} />}
        </BannerContainer>
      )}
      {!hover && (
        <BannerContainer>
          <Image image={article && article.image} />
          <Text article={article && article} route={route} />
        </BannerContainer>
      )}
    </ThemeProvider>
  )
}
