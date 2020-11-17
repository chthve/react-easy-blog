import React, { useState } from 'react'
import { Banner, Card, List } from 'react-easy-blog-post-component'
import FontSelector from './html-components/fontSelector'
import Color from './html-components/color'
import Size from './html-components/size'
import ComponentStyle from './html-components/style'
import OptionsContainer from './html-components/container'

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
  const handleInputChange = (e: any, identifier: any) => {
    const newArticle = { ...article }
    newArticle[identifier] = e.target.value
    setArticle(newArticle)
  }
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
          <h2>Compose your article</h2>
          <div className='separation-line'>
            <hr />
          </div>
          <div className='article-container'>
            <label className='label'>Image</label>
            <input
              className='input'
              onChange={(e) => handleInputChange(e, 'image')}
              placeholder='Pass in a URL'
            />
            <label className='label'>Title</label>
            <input
              className='input'
              onChange={(e) => handleInputChange(e, 'title')}
            />
            <label className='label'>Description</label>
            <input
              className='input'
              onChange={(e) => handleInputChange(e, 'description')}
            />
            <label className='label'>Category</label>
            <input
              className='input'
              onChange={(e) => handleInputChange(e, 'category')}
            />
            <label className='label'>Author</label>
            <input
              className='input'
              onChange={(e) => handleInputChange(e, 'author')}
            />
          </div>
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
        </div>
      </div>
    </>
  )
}

export default App
