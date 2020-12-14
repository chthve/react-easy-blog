import React from 'react'

export interface SizeProps {
  theme: { height?: string; width?: string }
  setTheme: React.Dispatch<React.SetStateAction<{}>>
  style: string
}

export const Size: React.FC<SizeProps> = ({
  theme,
  setTheme,
  style
}: SizeProps) => {
  console.log(theme)
  function handleChange(e: any) {
    let { name, value } = e.target
    value = `${value}px`
    console.log(value)
    setTheme({ ...theme, [name]: value })
    console.log(theme)
  }
  return (
    <>
      <h2>What size will suit you ?</h2>
      <div className='separation-line'>
        <hr />
      </div>
      <div className='size-container'>
        {style === 'banner' && (
          <>
            <label className='label'>Height</label>
            <input
              className='input'
              type='range'
              min='350'
              max='1000'
              value={theme.height ? theme.height.slice(0, -2) : '500'}
              name='height'
              onChange={handleChange}
            />
            <label className='label'>Width</label>
            <input
              className='input'
              type='range'
              min='400'
              value={theme.width ? theme.width.slice(0, -2) : '800'}
              max='1000'
              name='width'
              onChange={handleChange}
            />
          </>
        )}
        {style === 'card' && (
          <>
            <label className='label'>Height</label>
            <input
              className='input'
              type='range'
              min='350'
              max='550'
              value={theme.height ? theme.height.slice(0, -2) : '500'}
              name='height'
              onChange={handleChange}
            />
            <label className='label'>Width</label>
            <input
              className='input'
              type='range'
              min='350'
              value={theme.width ? theme.width.slice(0, -2) : '450'}
              max='550'
              name='width'
              onChange={handleChange}
            />
          </>
        )}
        {style === 'list' && (
          <>
            <label className='label'>Height</label>
            <input
              className='input'
              type='range'
              min='170'
              max='500'
              value={theme.height ? theme.height.slice(0, -2) : '170'}
              name='height'
              onChange={handleChange}
            />
            <label className='label'>Width</label>
            <input
              className='input'
              type='range'
              min='550'
              value={theme.width ? theme.width.slice(0, -2) : '700'}
              max='800'
              name='width'
              onChange={handleChange}
            />
          </>
        )}
      </div>
    </>
  )
}
