import * as React from 'react'

export interface ColorProps {
  theme: {}
  setTheme: React.Dispatch<React.SetStateAction<{}>>
}

export default function Color({ theme, setTheme }: ColorProps) {
  function handleChange(e: any) {
    const { name, value } = e.target
    setTheme({ ...theme, [name]: value })
  }
  return (
    <div className='color-container'>
      <h2>Pick your colors</h2>
      <label className='label'>Primary Color</label>
      <input
        className='input-color'
        type='color'
        name='primary'
        onChange={handleChange}
      />
      <label className='label'>Secondary Color</label>
      <input
        className='input-color'
        type='color'
        name='secondary'
        onChange={handleChange}
      />
    </div>
  )
}
