import React from 'react'
import { ThemeProvider } from 'styled-components'
import { CardContainer } from './styles'

import { Image } from './image'
import { Text } from './text'

interface CardProps {
  article: {
    title?: string
    category?: string
    image: string
    author: string
    date?: number
  }
  theme: {
    primary?: string
    secondary?: string
    smallFont?: string
    mediumFont?: string
    largeFont?: string
    backgroundColor?: string
    socialMediaBackground?: boolean
    border?: boolean
    size?: {
      height: string
      width: string
    }
  }
  dateFormat?: string
  socialMedia?: boolean
  route?: string
}

const defaultTheme = {
  primary: 'rgb(230, 96, 96)',
  secondary: 'white',
  smallFont: '14px',
  mediumFont: '16px',
  largeFont: '18px',
  backgroundColor: 'white',
  fontFamily: 'Times New Roman',
  border: false,
  socialMediaBackground: false,
  height: '500px',
  width: '460px'
}

export default function Card({
  article,
  theme,
  socialMedia,
  route
}: CardProps) {
  Object.assign(defaultTheme, theme)
  return (
    <ThemeProvider theme={defaultTheme}>
      <CardContainer>
        <Image image={article.image} socialMedia={socialMedia} route={route} />
        <Text article={article} />
      </CardContainer>
    </ThemeProvider>
  )
}
