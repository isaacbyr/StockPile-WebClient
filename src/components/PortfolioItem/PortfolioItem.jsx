import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to={`/portfoliopro/${ticker}`} className='portfolioItem__link'>
          <p
            className={
              profitLoss < 0 ? 'portfolioItem__red' : 'portfolioItem__green'
            }
          >
            {ticker}
          </p>
        </Link>

        <p
          className={
            profitLoss < 0 ? 'portfolioItem__red' : 'portfolioItem__green'
          }
        >
          {shares}
        </p>
        <p
          className={
            profitLoss < 0 ? 'portfolioItem__red' : 'portfolioItem__green'
          }
        >
          {averagePrice}
        </p>
        <p
          className={
            profitLoss < 0 ? 'portfolioItem__red' : 'portfolioItem__green'
          }
        >
          {marketPrice}
        </p>
        <p
          className={
            profitLoss < 0 ? 'portfolioItem__red' : 'portfolioItem__green'
          }
        >
          {profitLoss.toFixed(2)}
        </p>
      </div>
    </>
  )
}

export default PortfolioItem
