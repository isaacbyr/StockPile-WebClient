import React from 'react'
import './Friend.scss'

const Friend = ({ firstName, lastName }) => {
  return (
    <div className='friend'>
      <div className='friend__img-wrapper'>
        <img className='friend__img' />
      </div>
      <div className='friend__text-wrapper'>
        <p className='friend__text'>
          {firstName} {lastName}
        </p>
      </div>
    </div>
  )
}

export default Friend
