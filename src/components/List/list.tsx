import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import Image from './image'
import { ListContainer, Separation } from './styles'
import Text from './text'

export interface ListProps {
  article?: {
    image?: string
    title?: string
    description?: string
    author?: string
    date?: number
  }

  theme: {
    size?: {
      width?: string
      height?: string
    }
    imagePostion?: string
    primary?: string
    secondary?: string
    smallFont?: string
    mediumFont?: string
    largeFont?: string
  }
}

const defaultTheme = {
  size: {
    width: '700px',
    height: '170px'
  },
  smallFont: '14px',
  mediumFont: '16px',
  largeFont: '18px',
  imagePosition: 'left',
  primary: '#af2d2d',
  secondary: 'black'
}

export default function List({ article, theme }: ListProps) {
  Object.assign(defaultTheme, theme)
  return (
    <ThemeProvider theme={defaultTheme}>
      <ListContainer>
        <Image image={article && article.image} />
        <Text article={article && article} />
        <Separation />
      </ListContainer>
    </ThemeProvider>
  )
}
