import * as React from 'react'

export interface ColorProps {
  theme: {}
  setTheme: React.Dispatch<React.SetStateAction<{}>>
}

export const Color: React.FC<ColorProps> = ({
  theme,
  setTheme
}: ColorProps) => {
  function handleChange(e: any) {
    const { name, value } = e.target
    setTheme({ ...theme, [name]: value })
  }
  return (
    <>
      <h2>Pick your colors</h2>
      <div className='separation-line'>
        <hr />
      </div>
      <div className='color-container'>
        <label className='label pick'>Primary Color</label>
        <input
          className='input-color pick'
          type='color'
          name='primary'
          onChange={handleChange}
        />
        <label className='label pick'>Secondary Color</label>
        <input
          className='input-color pick'
          type='color'
          name='secondary'
          onChange={handleChange}
        />
      </div>
    </>
  )
}
