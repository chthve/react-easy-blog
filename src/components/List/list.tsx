import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { Image } from './image'
import { ListContainer, Separation } from './styles'
import { Text } from './text'
import { Category } from './category'

export interface ListProps {
  article?: {
    image?: string
    title?: string
    description?: string
    author?: string
    date?: number
    category?: string
  }

  theme: {
    width?: string
    height?: string
    imagePostion?: string
    primary?: string
    secondary?: string
    smallFont?: string
    mediumFont?: string
    largeFont?: string
  }
  showCategory?: boolean
  route?: string
}

const defaultTheme = {
  width: '700px',
  height: '170px',
  smallFont: '14px',
  mediumFont: '16px',
  largeFont: '16px',
  fontFamily: 'New Times Roman',
  fontColor: 'black',
  imagePosition: 'left',
  primary: 'rgb(230, 96, 96)',
  secondary: 'white'
}

export default function List({
  article,
  theme,
  showCategory,
  route
}: ListProps) {
  Object.assign(defaultTheme, theme)
  return (
    <ThemeProvider theme={defaultTheme}>
      <ListContainer>
        {showCategory && <Category content={article && article.category} />}
        <Image image={article && article.image} route={route} />
        <Text article={article && article} />
        <Separation />
      </ListContainer>
    </ThemeProvider>
  )
}
