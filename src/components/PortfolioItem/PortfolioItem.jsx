import React from 'react'
import './PortfolioItem.scss'
export const PortfolioItem = ({
  ticker,
  shares,
  averagePrice,
  marketPrice,
  profitLoss,
}) => {
  return (
    <>
      <div className='portfolioItem'>
        <p
          className={
            profitLoss < 0 ? 'watchlistItem__red' : 'watchlistItem__green'
          }
        >
          {ticker}
        </p>
        <p
          className={
            profitLoss < 0 ? 'watchlistItem__red' : 'watchlistItem__green'
          }
        >
          {shares}
        </p>
        <p
          className={
            profitLoss < 0 ? 'watchlistItem__red' : 'watchlistItem__green'
          }
        >
          {averagePrice}
        </p>
        <p
          className={
            profitLoss < 0 ? 'watchlistItem__red' : 'watchlistItem__green'
          }
        >
          {marketPrice}
        </p>
        <p
          className={
            profitLoss < 0 ? 'watchlistItem__red' : 'watchlistItem__green'
          }
        >
          {profitLoss.toFixed(2)}
        </p>
      </div>
    </>
  )
}

export default PortfolioItem
