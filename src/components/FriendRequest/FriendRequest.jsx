import React from 'react'
import './FriendRequest.scss'
import Approve from '../../assets/Icons/approve_icon.png'
import Delete from '../../assets/Icons/delete_icon.png'

const FriendRequest = ({ firstName, lastName }) => {
  return (
    <div className='request'>
      <div className='request-wrapper'>
        <p className='request__text'>
          {firstName} {lastName}
        </p>
        <div className='request__button-wrapper'>
          <button className='request__button'>
            <img className='request__img approve' src={Approve} />
          </button>
          <button className='request__button'>
            <img src={Delete} className='request__img' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FriendRequest
