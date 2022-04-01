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
    this.fetchPortfolioStock()
  }
  fetchPortfolioStock = () => {
    axios
      .get('http://localhost:44317/api/portfolio')
      .then((response) => {
        console.log(response)
        var data = response.data
        let query = this.convertStocksIntoQuery(response.data)
        var options = {
          method: 'GET',
          url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${query}`,
          params: { modules: 'defaultKeyStatistics,assetProfile' },
          headers: {
            'x-api-key': '9l4Vorm2Kb7Z5HeFpMN8raQTY4X8z0HL9bMNChR6',
          },
        }
        axios
          .request(options)
          .then((response) => {
            let results = response.data.quoteResponse.result
            let marketPrices = []
            results.map((result) => {
              marketPrices.push(result.regularMarketPrice)
            })
            let portfolio = []

            for (let i = 0; i < data.length; i++) {
              var stock = {
                Ticker: data[i].Ticker,
                AveragePrice: data[i].AveragePrice,
                Shares: data[i].Shares,
                MarketPrice: marketPrices[i],
                ProfitLoss:
                  (marketPrices[i] - data[i].AveragePrice) * data[i].Shares,
              }
              portfolio.push(stock)
            }
            console.log(portfolio)
            this.setState({ portfolioStocks: portfolio })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // async loadMulitpleStockData(query) {
  //   var options = {
  //     method: 'GET',
  //     url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${query}`,
  //     params: { modules: 'defaultKeyStatistics,assetProfile' },
  //     headers: {
  //       'x-api-key': '9l4Vorm2Kb7Z5HeFpMN8raQTY4X8z0HL9bMNChR6',
  //     },
  //   }
  //   axios.request(options).then((response) => {
  //     let results = response.data.quoteResponse.result
  //     let marketPrices = []
  //     results.map((result) => {
  //       marketPrices.push(result.regularMarketPrice)
  //     })
  //     return marketPrices
  //   })
  // }

  convertStocksIntoQuery = (stocks) => {
    let query = ''
    let index = 1

    stocks.map((stock) => {
      if (index < stocks.length) {
        query = query + stock.Ticker + '%2C'
      } else {
        query = query + stock.Ticker
      }
      index++
    })
    return query
  }

  render() {
    return (
      <>
        <section className='portfolio'>
          <h2 className='portfolio__header'>Portfolio</h2>
          <div className='portfolio__table--header'>
            <p className='portfolio__table--item'>Ticker</p>
            <p className='portfolio__table--item'>Shares</p>
            <p className='portfolio__table--item'>Avg. Price</p>
            <p className='portfolio__table--item'>Market Price</p>
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
}

export default PortfolioList
