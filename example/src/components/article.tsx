import * as React from 'react'

export interface ArticleProps {
  article: {
    title: string
    category: string
    description: string
    image: string
    author: string
    date: number
  }
  setArticle: React.Dispatch<
    React.SetStateAction<{
      title: string
      category: string
      description: string
      image: string
      author: string
      date: number
    }>
  >
}

export const Article: React.FC<ArticleProps> = ({
  article,
  setArticle
}: ArticleProps) => {
  const handleInputChange = (e: any, identifier: any) => {
    const newArticle = { ...article }
    newArticle[identifier] = e.target.value
    setArticle(newArticle)
  }

  return (
    <>
      <h2>Compose your article</h2>
      <div className='separation-line'>
        <hr />
      </div>
      <div className='article-container'>
        <label className='label'>Image</label>
        <input
          className='input'
          onChange={(e) => handleInputChange(e, 'image')}
          placeholder='Pass in a URL'
        />
        <label className='label'>Title</label>
        <input
          className='input'
          onChange={(e) => handleInputChange(e, 'title')}
        />
        <label className='label'>Description</label>
        <input
          className='input'
          onChange={(e) => handleInputChange(e, 'description')}
        />
        <label className='label'>Category</label>
        <input
          className='input'
          onChange={(e) => handleInputChange(e, 'category')}
        />
        <label className='label'>Author</label>
        <input
          className='input'
          onChange={(e) => handleInputChange(e, 'author')}
        />
        <label className='label'>Date</label>
        <input
          className='input'
          onChange={(e) => handleInputChange(e, 'date')}
          placeholder='Pass in a timestamp'
        />
      </div>
    </>
  )
}
