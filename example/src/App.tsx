import React, { useState } from 'react'
import { Banner, Card, List } from 'react-easy-blog-post-component'
import { Intro } from './components/intro'
import { Article } from './components/article'
import { FontSelector } from './components/fontSelector'
import { Color } from './components/color'
import { Size } from './components/size'
import { ComponentStyle } from './components/style'
import { OptionsContainer } from './components/container'
import { CodeSnippet } from './components/codeSnippet'

const App = () => {
  const [component, setComponent] = useState('banner')
  const [theme, setTheme] = useState({})
  const [socialMedia, setSocialMedia] = useState(false)
  const [showCategory, setShowCategory] = useState(true)
  const [hover, setHover] = useState(false)
  const [article, setArticle] = useState({
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Poetry',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image:
      'https://images.unsplash.com/photo-1605453302863-85c32f2adc76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    author: 'Charles Bukowski',
    date: 1605188922555
  })

  return (
    <>
      <div className='main-container'>
        <div className='left-container'>
          {component === 'banner' && (
            <Banner article={article} theme={theme} hover={hover} />
          )}
          {component === 'card' && (
            <Card article={article} theme={theme} socialMedia={socialMedia} />
          )}
          {component === 'list' && (
            <List article={article} theme={theme} showCategory={showCategory} />
          )}
        </div>
        <div className='right-container'>
          <h1>Save some time to create your post !</h1>
          <Intro />
          <Article article={article} setArticle={setArticle} />
          <ComponentStyle component={component} setComponent={setComponent} />
          <Size theme={theme} setTheme={setTheme} style={component} />
          <FontSelector theme={theme} setTheme={setTheme} />
          <Color theme={theme} setTheme={setTheme} />
          <OptionsContainer
            style={component}
            theme={theme}
            setTheme={setTheme}
            socialMedia={socialMedia}
            setSocialMedia={setSocialMedia}
            showCategory={showCategory}
            setShowCategory={setShowCategory}
            hover={hover}
            setHover={setHover}
          />
          <CodeSnippet
            article={article}
            theme={theme}
            socialMedia={socialMedia}
            showCategory={showCategory}
            hover={hover}
            component={component}
          />
        </div>
      </div>
    </>
  )
}

export default App
