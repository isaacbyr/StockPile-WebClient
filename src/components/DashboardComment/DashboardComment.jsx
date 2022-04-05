import React from 'react'
import './DashboardComment.scss'
import { Link } from 'react-router-dom'

const DashboardComment = ({ fullname, ticker, postedAt, comment }) => {
  return (
    <>
      <div className='dashComment'>
        <div className='dashComment__img-wrapper'>
          <img className='dashComment__img' />
        </div>
        <div className='dashComment__text-wrapper'>
          <div className='dashComment__text--header'>
            <h4 className='dashComment__username'>
              {fullname} <span className='blue'>-</span>{' '}
              <span className='muted'>
                <Link className='link'>{ticker}</Link>
              </span>
            </h4>
            <p className='dashComment__date'>{postedAt.substring(0, 10)}</p>
          </div>
          <p className='dashComment__text'>{comment}</p>
        </div>
      </div>
    </>
  )
}

export default DashboardComment
