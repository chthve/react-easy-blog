import React from 'react'

export interface SizeProps {
  theme: {}
  setTheme: React.Dispatch<React.SetStateAction<{}>>
  style: string
}

export default function Size({ theme, setTheme }: SizeProps) {
  function handleChange(e: any) {
    let { name, value } = e.target
    value = `${value}px`
    console.log(value)
    setTheme({ ...theme, [name]: value })
    console.log(theme)
  }
  return (
    <div className='size-container'>
      <h2>What size do you prefer ?</h2>
      <label className='label'>Height</label>
      <input
        className='input'
        type='range'
        min='100'
        max='1000'
        name='height'
        onChange={handleChange}
      />
      <label className='label'>Width</label>
      <input
        className='input'
        type='range'
        min='100'
        max='1000'
        name='width'
        onChange={handleChange}
      />
    </div>
  )
}
