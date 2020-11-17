import * as React from 'react'

export interface ComponentStyleProps {
  setComponent: React.Dispatch<React.SetStateAction<string>>
}

export default function ComponentStyle({ setComponent }: ComponentStyleProps) {
  const handleClick = (component: any) => {
    setComponent(component)
  }
  return (
    <>
      <h2>Choose your Style</h2>
      <div className='button-container'>
        <button
          className='button selected'
          onClick={() => handleClick('banner')}
        >
          Banner
        </button>
        <button className='button selected' onClick={() => handleClick('card')}>
          Card
        </button>
        <button className='button selected' onClick={() => handleClick('list')}>
          List
        </button>
      </div>
    </>
  )
}
