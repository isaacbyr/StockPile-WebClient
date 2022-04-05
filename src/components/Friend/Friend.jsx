import React from 'react'
import './Friend.scss'
import { Link } from 'react-router-dom'

const Friend = ({ id, firstName, lastName }) => {
  return (
    <div className='friend'>
      <div className='friend__img-wrapper'>
        <img className='friend__img' />
      </div>
      <div className='friend__text-wrapper'>
        <Link to={`/profile/${id}`}>
          <p className='friend__text'>
            {firstName} {lastName}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Friend
