import React from 'react'
import './WatchlistItem.scss'

const WatchlistItem = ({ ticker, marketPrice, percentChanged }) => {
  return (
    <>
      <div className='watchlistItem'>
        <p
          className={
            percentChanged < 0 ? 'watchlistItem__red' : 'watchlistItem__green'
          }
        >
          {ticker}
        </p>
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
