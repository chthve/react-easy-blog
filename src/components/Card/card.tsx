import React from 'react'
import { ThemeProvider } from 'styled-components'
import { CardContainer } from './styles'

import Image from './image'
import Text from './text'

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
}

const defaultTheme = {
  primary: '#af2d2d',
  secondary: 'black',
  smallFont: '12px',
  mediumFont: 'px',
  largeFont: '20px',
  backgroundColor: 'white',
  fontFamily: 'Times New Roman',
  border: false,
  socialMediaBackground: false,
  size: {
    height: '500px',
    width: '460px'
  }
}

export default function Card({ article, theme }: CardProps) {
  Object.assign(defaultTheme, theme)
  return (
    <ThemeProvider theme={defaultTheme}>
      <CardContainer>
        <Image image={article.image} />
        <Text article={article} />
      </CardContainer>
    </ThemeProvider>
  )
}
