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
        <p>{ticker}</p>
        <p>{shares}</p>
        <p>{averagePrice}</p>
        <p>{marketPrice}</p>
        <p>{profitLoss}</p>
      </div>
    </>
  )
}

export default PortfolioItem
