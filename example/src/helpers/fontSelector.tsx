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

function handleChange(e) {
  console.log(e.target.value)
}

export default function FontSelector() {
  return (
    <select name='fontFamily' onChange={(e) => handleChange(e)}>
      {fonts.map((font) => (
        <option value={font}>{font}</option>
      ))}
    </select>
  )
}
