import * as React from 'react'

export const Intro: React.FC = () => {
  return (
    <div className='intro'>
      <p className='intro_welcome'>Welcome everyone ! </p>
      <p>
        Follow the step of this customisation page to create your new blog post
        in a fraction of time. Don't forget to:
      </p>
      <span className='intro_span'>npm i react-easy-blog-post</span>
      <p>
        and to have a look at the READ.me file on GitHub. Enjoy your writing ✍️
      </p>
    </div>
  )
}
