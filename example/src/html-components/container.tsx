import * as React from 'react'

export interface OptionsContainerProps {
  style?: string
  theme?: {}
  setTheme?: React.Dispatch<React.SetStateAction<{}>>
  setSocialMedia?: React.Dispatch<React.SetStateAction<boolean>>
  setShowCategory?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function OptionsContainer({
  style,
  theme,
  setTheme,
  setSocialMedia,
  setShowCategory
}: OptionsContainerProps) {
  function handleSocialMedia(state: boolean) {
    setSocialMedia && setSocialMedia(state)
  }
  function handleSocialMediaBackground(name: string, state: boolean) {
    setTheme && setTheme({ ...theme, [name]: state })
  }
  function handleImageSide(name: string, position: string) {
    setTheme && setTheme({ ...theme, [name]: position })
  }
  function handleShowCategory(state: boolean) {
    setShowCategory && setShowCategory(state)
  }
  return (
    <div className='options-container'>
      <h2>Toggle your options</h2>
      {style === 'banner' && (
        <section className='banner-options'>
          <label>Social Media</label>
        </section>
      )}
      {style === 'card' && (
        <section className='banner-options'>
          <label>Social Media</label>
          <button className='button' onClick={() => handleSocialMedia(true)}>
            Yes
          </button>
          <button className='button' onClick={() => handleSocialMedia(false)}>
            No
          </button>
          <label>Social Media Background</label>
          <button
            className='button'
            onClick={() =>
              handleSocialMediaBackground('socialMediaBackground', true)
            }
          >
            Yes
          </button>
          <button
            className='button'
            onClick={() =>
              handleSocialMediaBackground('socialMediaBackground', false)
            }
          >
            No
          </button>
        </section>
      )}
      {style === 'list' && (
        <section className='banner-options'>
          <label>Side of the image</label>
          <button
            className='button'
            onClick={() => handleImageSide('imagePosition', 'left')}
          >
            Left
          </button>
          <button
            className='button'
            onClick={() => handleImageSide('imagePosition', 'right')}
          >
            Right
          </button>
          <label>Show Category</label>
          <button className='button' onClick={() => handleShowCategory(true)}>
            Yes
          </button>
          <button className='button' onClick={() => handleShowCategory(false)}>
            No
          </button>
        </section>
      )}
    </div>
  )
}
