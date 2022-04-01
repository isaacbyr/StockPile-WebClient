import React from 'react'
import { Link } from 'react-router-dom'
import './WatchlistItem.scss'

const WatchlistItem = ({ ticker, marketPrice, percentChanged }) => {
  return (
    <>
      <div className='watchlistItem'>
        <Link className='watchlistItem__link' to={`/portfoliopro/${ticker}`}>
          <p
            className={
              percentChanged < 0 ? 'watchlistItem__red' : 'watchlistItem__green'
            }
          >
            {ticker}
          </p>
        </Link>
        <p
          className={
            percentChanged < 0 ? 'watchlistItem__red' : 'watchlistItem__green'
          }
        >
          {marketPrice}
        </p>
        <p
          className={
            percentChanged < 0 ? 'watchlistItem__red' : 'watchlistItem__green'
          }
        >
          {percentChanged.toFixed(2) + ' %'}
        </p>
      </div>
    </>
  )
}

export default WatchlistItem
