import React from 'react'
import './DailyItem.scss'
import { Link } from 'react-router-dom'

const DaileyItem = ({ ticker, price, percentChanged }) => {
  return (
    <div className='dailyItem'>
      <Link to={`/portfoliopro/${ticker}`} className='dailyItem__link'>
        <p className='dailyItem__item'>{ticker}</p>
      </Link>
      <p className='dailyItem__item'>{price}</p>
      <p className='dailyItem__item'>{percentChanged}</p>
    </div>
  )
}

export default DaileyItem
