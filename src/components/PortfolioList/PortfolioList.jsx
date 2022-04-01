import React, { Component } from 'react'
import './PortfolioList.scss'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import axios from 'axios'
import uuid from 'react-uuid'

const PortfolioList = ({ portfolioStocks }) => {
  return (
    <>
      <section className='portfolio'>
        <h2 className='portfolio__header'>Portfolio</h2>
        <div className='portfolio__table--header'>
          <p className='portfolio__table--item'>Ticker</p>
          <p className='portfolio__table--item'>Shares</p>
          <p className='portfolio__table--item'>Avg. Price</p>
          <p className='portfolio__table--item'>Mkt. Price</p>
          <p className='portfolio__table--item'>Profit/Loss</p>
        </div>
        <div>
          {portfolioStocks.length > 0 ? (
            portfolioStocks.map((stock) => {
              return (
                <PortfolioItem
                  key={uuid()}
                  ticker={stock.Ticker}
                  shares={stock.Shares}
                  averagePrice={stock.AveragePrice}
                  marketPrice={stock.MarketPrice}
                  profitLoss={stock.ProfitLoss}
                />
              )
            })
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </section>
    </>
  )
}

export default PortfolioList
