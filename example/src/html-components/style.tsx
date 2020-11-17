import * as React from 'react'

export interface ComponentStyleProps {
  component: string
  setComponent: React.Dispatch<React.SetStateAction<string>>
}

export default function ComponentStyle({
  component,
  setComponent
}: ComponentStyleProps) {
  const handleClick = (component: any) => {
    setComponent(component)
  }
  return (
    <>
      <h2>Choose your Style</h2>
      <div className='separation-line'>
        <hr />
      </div>
      <div className='button-container'>
        <button
          className={`button ${
            component === 'banner' ? 'activated-component' : ''
          }`}
          onClick={() => handleClick('banner')}
        >
          Banner
        </button>
        <button
          className={`button ${
            component === 'card' ? 'activated-component' : ''
          }`}
          onClick={() => handleClick('card')}
        >
          Card
        </button>
        <button
          className={`button ${
            component === 'list' ? 'activated-component' : ''
          }`}
          onClick={() => handleClick('list')}
        >
          List
        </button>
      </div>
    </>
  )
}
