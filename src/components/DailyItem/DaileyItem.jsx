import React from 'react'
import './DailyItem.scss'
import { Link } from 'react-router-dom'

const DaileyItem = ({ ticker, price, percentChanged }) => {
  return (
    <div className='dailyItem'>
      <Link to={`/portfoliopro/${ticker}`} className='dailyItem__link'>
        <p
          className={percentChanged < 0 ? 'dailyItem__red' : 'dailyItem__green'}
        >
          {ticker}
        </p>
      </Link>
      <p className={percentChanged < 0 ? 'dailyItem__red' : 'dailyItem__green'}>
        {price}
      </p>
      <p className={percentChanged < 0 ? 'dailyItem__red' : 'dailyItem__green'}>
        {percentChanged}
      </p>
    </div>
  )
}

export default DaileyItem
