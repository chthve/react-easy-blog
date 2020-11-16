import React, { useState } from 'react'

import { Banner, Card, List } from 'react-easy-blog-post-component'

import { article } from './mocks.json'

const App = () => {
  const [component, setComponent] = useState('banner')
  const handleClick = (component: any) => {
    setComponent(component)
  }
  return (
    <div className='main-container'>
      <div className='left-container'>
        {component === 'banner' && <Banner article={article} theme={{}} />}
        {component === 'card' && <Card article={article} theme={{}} />}
        {component === 'list' && <List article={article} theme={{}} />}
      </div>
      <div className='right-container'>
        <button onClick={() => handleClick('banner')}>Option 1</button>
        <button onClick={() => handleClick('card')}>Option 2</button>
        <button onClick={() => handleClick('list')}>Option 3</button>
        <button className='next'>Next</button>
      </div>
    </div>
  )
}

export default App
