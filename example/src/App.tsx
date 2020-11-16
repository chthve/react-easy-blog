import React, { useState } from 'react'
import { Banner, Card, List } from 'react-easy-blog-post-component'

const App = () => {
  const [component, setComponent] = useState('banner')

  const [article, setArticle] = useState({
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Poetry',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image:
      'https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    author: 'Charles Bukowski',
    date: 1605188922555
  })

  const fonts: string[] = [
    'Chivo',
    'Arial',
    'Helvetica',
    'Verdana',
    'Trebuchet MS',
    'Gill Sans',
    'Noto Sans',
    'Avantgarde',
    'Optima',
    'Arial Narrow',
    'sans-serif',
    'Times',
    'Times New Roman',
    'Didot',
    'Georgia',
    'Palatino',
    'Bookman',
    'New Century Schoolbook',
    'American Typewriter',
    'serif',
    'Andale Mono',
    'Courier New',
    'Courier',
    'FreeMono',
    'OCR A Std',
    'DejaVu Sans Mono',
    'monospace',
    'Comic Sans MS',
    'Apple Chancery',
    'Bradley Hand',
    'Brush Script MT',
    'Snell Roundhand',
    'URW Chancery L',
    'cursive',
    'Impact',
    'Luminari',
    'Chalkduster',
    'Jazz LET',
    'Blippo',
    'Stencil Std',
    'Marker Felt',
    'Trattatello',
    'fantasy'
  ]

  const handleClick = (component: any) => {
    setComponent(component)
  }

  const handleInputChange = (e: any, identifier: any) => {
    const newArticle = { ...article }
    newArticle[identifier] = e.target.value
    setArticle(newArticle)
  }

  return (
    <>
      <h1>Save some time to create your post !</h1>
      <div className='main-container'>
        <div className='left-container'>
          {component === 'banner' && <Banner article={article} theme={{}} />}
          {component === 'card' && <Card article={article} theme={{}} />}
          {component === 'list' && <List article={article} theme={{}} />}
        </div>
        <div className='right-container'>
          <div className='article-container'>
            <h2>Compose your article</h2>
            <label className='article-label'>Image</label>
            <input
              className='article-input'
              onChange={(e) => handleInputChange(e, 'image')}
              placeholder='Pass in a URL'
            />
            <label className='article-label'>Title</label>
            <input
              className='article-input'
              onChange={(e) => handleInputChange(e, 'title')}
            />
            <label className='article-label'>Description</label>
            <input
              className='article-input'
              onChange={(e) => handleInputChange(e, 'description')}
            />
            <label className='article-label'>Category</label>
            <input
              className='article-input'
              onChange={(e) => handleInputChange(e, 'category')}
            />
            <label className='article-label'>Author</label>
            <input
              className='article-input'
              onChange={(e) => handleInputChange(e, 'author')}
            />
          </div>
          <h2>Choose your Style</h2>
          <div className='button-container'>
            <button className='button' onClick={() => handleClick('banner')}>
              Banner
            </button>
            <button className='button' onClick={() => handleClick('card')}>
              Card
            </button>
            <button className='button' onClick={() => handleClick('list')}>
              List
            </button>
          </div>
          <div className='font-container'>
            <h2>Choose your font</h2>
            <select>
              {fonts.map((font) => (
                <option value={font}>{font}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
