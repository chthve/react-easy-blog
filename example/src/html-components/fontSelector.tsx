import React from 'react'

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

interface FontSelectorProps {
  theme: {}
  setTheme: React.Dispatch<React.SetStateAction<{}>>
}

export default function FontSelector({ setTheme, theme }: FontSelectorProps) {
  function handleChange(e: any) {
    let { name, value } = e.target
    value =
      name === 'smallFont' || name === 'mediumFont' || name === 'largeFont'
        ? (value = `${value}px`)
        : value
    setTheme({ ...theme, [name]: value })
  }

  return (
    <div className='font-container'>
      <h2>Compose your font</h2>
      <div className='font-rule-container'>
        <label className='label'>Font Family</label>
        <select name='fontFamily' onChange={handleChange}>
          {fonts.map((font) => (
            <option value={font}>{font}</option>
          ))}
        </select>
        <label className='label'>Small Font</label>
        <input
          className='input'
          type='range'
          min='5'
          max='20'
          name='smallFont'
          onChange={handleChange}
        />
        <label className='label'>Medium Font</label>
        <input
          className='input'
          type='range'
          min='10'
          max='25'
          name='mediumFont'
          onChange={handleChange}
        />
        <label className='label'>Large Font</label>
        <input
          className='input'
          type='range'
          min='15'
          max='30'
          name='largeFont'
          onChange={handleChange}
        />
        <label className='label'>Color</label>
        <input
          className='input-color'
          type='color'
          name='fontColor'
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
