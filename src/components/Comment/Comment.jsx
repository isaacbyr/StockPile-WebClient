import React from 'react'
import './Comment.scss'

const Comment = ({ id, comment, postedAt, fullname }) => {
  return (
    <>
      <div className='comment'>
        <div className='comment__img-wrapper'>
          <img className='comment__img' />
        </div>
        <div className='comment__text-wrapper'>
          <div className='comment__text--header'>
            <h4 className='comment__username'>{fullname}</h4>
            <p className='comment__date'>{postedAt.substring(0, 10)}</p>
          </div>

          <p className='comment__text'>{comment}</p>
        </div>
      </div>
    </>
  )
}

export default Comment
