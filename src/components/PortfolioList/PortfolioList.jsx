import React, { Component } from 'react'
import './PortfolioList.scss'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import axios from 'axios'
import uuid from 'react-uuid'

class PortfolioList extends Component {
  state = {
    portfolioStocks: [],
  }
  componentDidMount() {
    axios
      .get('http://localhost:44317/api/portfolio')
      .then((response) => {
        //console.log(response)
        this.setState({ portfolioStocks: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <>
        <section className='portfolio'>
          <h2 className='portfolio__header'>Portfolio</h2>
          <div className='portfolio__table--header'>
            <p className='portfolio__table--item'>Ticker</p>
            <p className='portfolio__table--item'>Shares</p>
            <p className='portfolio__table--item'>Profit/Loss</p>
          </div>
          <div>
            {this.state.portfolioStocks.length > 0 ? (
              this.state.portfolioStocks.map((stock) => {
                return (
                  <PortfolioItem
                    key={uuid()}
                    ticker={stock.Ticker}
                    shares={stock.Shares}
                    averagePrice={stock.AveragePrice}
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
}

export default PortfolioList
