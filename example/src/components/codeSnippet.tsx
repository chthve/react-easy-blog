import React, { useEffect } from 'react'
import Prism from 'prismjs'

export interface CodeSnippetProps {
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
    primary?: string
    secondary?: string
    smallFont?: string
    mediumFont?: string
    largeFont?: string
    backgroundColor?: string
    imagePostion?: string
    socialMediaBackground?: boolean
    border?: boolean
  }
  showCategory?: boolean
  dateFormat?: string
  socialMedia?: boolean
  hover?: boolean
  component?: string
  route?: string
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  article,
  theme,
  component,
  showCategory,
  route,
  socialMedia,
  hover
}) => {
  useEffect(() => {
    Prism.highlightAll()
  })
  const keys = Object.keys(theme)
  const string = keys
    .reduce((a, b) => {
      if (!theme[b]) return a
      else
        return (
          a +
          `${b}: "${theme[b]}",
    `
        )
    }, ``)
    .trim()

  const propArticle = article
    ? `
      article={author:${article.author}
      category: ${article.category}
      title: ${article.title}
      description: ${article.description}
      date: ${article.date}
      image: ${article.image}}
 `
    : ''
  const propHover = hover ? `hover=${hover}` : ''
  const propSocialMedia = socialMedia ? `socialMedia=${socialMedia}` : ''
  const propShowCategory = showCategory ? `showCategory=${showCategory}` : ''
  const propRoute = route ? `route="${route}"` : ''

  const bannerCode = `
  <Banner article={article} theme={${string}} ${propHover} ${propRoute}/>
  `

  const cardCode = `
  <Card article={article} theme={${string}} ${propSocialMedia} ${propRoute}/>
  `

  const listCode = `
  <List article={article} theme={${string}} ${propShowCategory} ${propRoute}/>
  `
  return (
    <>
      <h2>Grab your code !</h2>
      <div className='separation-line'>
        <hr />
      </div>
      <div className='code_snippet'>
        <pre>
          <code>{propArticle}</code>
          {component === 'banner' && <code>{bannerCode}</code>}
          {component === 'card' && <code>{cardCode}</code>}
          {component === 'list' && <code>{listCode}</code>}
        </pre>
      </div>
    </>
  )
}
