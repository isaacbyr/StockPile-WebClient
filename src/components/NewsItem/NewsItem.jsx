import React from 'react'
import { Link } from 'react-router-dom'
import './NewsItem.scss'
const NewsItem = ({ logo_url, title, id, url }) => {
  return (
    <>
      <a className='link' href={url}>
        <div className='newsItem'>
          <img className='newsItem__img' src={logo_url} />
          <p className='newsItem__text'>{title}</p>
        </div>
      </a>
    </>
  )
}

export default NewsItem
