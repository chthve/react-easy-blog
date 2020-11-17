import * as React from 'react'

export interface OptionsContainerProps {
  style?: string
  theme?: {
    style?: number
    socialMediaBackground?: boolean
    imagePosition?: string
  }
  setTheme?: React.Dispatch<React.SetStateAction<{}>>
  socialMedia?: boolean
  setSocialMedia?: React.Dispatch<React.SetStateAction<boolean>>
  showCategory?: boolean
  setShowCategory?: React.Dispatch<React.SetStateAction<boolean>>
  hover: boolean
  setHover?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function OptionsContainer({
  style,
  theme,
  setTheme,
  socialMedia,
  setSocialMedia,
  showCategory,
  setShowCategory,
  hover,
  setHover
}: OptionsContainerProps) {
  function handleSocialMedia(state: boolean) {
    setSocialMedia && setSocialMedia(state)
  }
  function handleSocialMediaBackground(state: boolean) {
    setTheme && setTheme({ ...theme, socialMediaBackground: state })
  }
  function handleImageSide(position: string) {
    setTheme && setTheme({ ...theme, imagePosition: position })
  }
  function handleShowCategory(state: boolean) {
    setShowCategory && setShowCategory(state)
  }
  function handleBannerStyle(state: number) {
    setTheme && setTheme({ ...theme, style: state })
  }
  function handleHover(state: boolean) {
    setHover && setHover(state)
  }
  return (
    <>
      <h2>Toggle your options</h2>
      <div className='separation-line'>
        <hr />
      </div>
      <div className='options-container'>
        {style === 'banner' && (
          <section className='banner-options'>
            <label className='label fontRule'>Style</label>
            <button
              className={` fontButton ${
                theme && theme.style === 1 ? 'activated-component' : ''
              }`}
              onClick={() => handleBannerStyle(1)}
            >
              1
            </button>
            <button
              className={` fontButton ${
                theme && theme.style === 2 ? 'activated-component' : ''
              }`}
              onClick={() => handleBannerStyle(2)}
            >
              2
            </button>
            <label className='label fontRule'>Hovering</label>
            <button
              className={` fontButton ${
                hover && hover ? 'activated-component' : ''
              }`}
              onClick={() => handleHover(true)}
            >
              Yes
            </button>
            <button
              className={` fontButton ${
                hover === false ? 'activated-component' : ''
              }`}
              onClick={() => handleHover(false)}
            >
              No
            </button>
          </section>
        )}
        {style === 'card' && (
          <section className='banner-options'>
            <label className='label fontRule'>Social Media</label>
            <button
              className={` fontButton ${
                socialMedia && socialMedia === true ? 'activated-component' : ''
              }`}
              onClick={() => handleSocialMedia(true)}
            >
              Yes
            </button>
            <button
              className={` fontButton ${
                socialMedia === false ? 'activated-component' : ''
              }`}
              onClick={() => handleSocialMedia(false)}
            >
              No
            </button>
            <label className='label fontRule'>Social Media Background</label>
            <button
              className={` fontButton ${
                theme && theme.socialMediaBackground === true
                  ? 'activated-component'
                  : ''
              }`}
              onClick={() => handleSocialMediaBackground(true)}
            >
              Yes
            </button>
            <button
              className={` fontButton ${
                theme && theme.socialMediaBackground === false
                  ? 'activated-component'
                  : ''
              }`}
              onClick={() => handleSocialMediaBackground(false)}
            >
              No
            </button>
          </section>
        )}
        {style === 'list' && (
          <section className='banner-options'>
            <label className='label fontRule'>Side of the image</label>
            <button
              className={` fontButton ${
                theme && theme.imagePosition === 'left'
                  ? 'activated-component'
                  : ''
              }`}
              onClick={() => handleImageSide('left')}
            >
              Left
            </button>
            <button
              className={` fontButton ${
                theme && theme.imagePosition === 'right'
                  ? 'activated-component'
                  : ''
              }`}
              onClick={() => handleImageSide('right')}
            >
              Right
            </button>
            <label className='label fontRule'>Show Category</label>
            <button
              className={` fontButton ${
                showCategory && showCategory === true
                  ? 'activated-component'
                  : ''
              }`}
              onClick={() => handleShowCategory(true)}
            >
              Yes
            </button>
            <button
              className={` fontButton ${
                showCategory === false ? 'activated-component' : ''
              }`}
              onClick={() => handleShowCategory(false)}
            >
              No
            </button>
          </section>
        )}
      </div>
    </>
  )
}
