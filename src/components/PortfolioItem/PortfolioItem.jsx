import React from 'react'
import './PortfolioItem.scss'
export const PortfolioItem = ({ ticker, shares, averagePrice }) => {
  return (
    <>
      <div className='portfolioItem'>
        <p>{ticker}</p>
        <p>{shares}</p>
        <p>{averagePrice}</p>
      </div>
    </>
  )
}

export default PortfolioItem
