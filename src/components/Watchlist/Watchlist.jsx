import React, { Component } from 'react'
import './Watchlist.scss'
import axios from 'axios'
import uuid from 'react-uuid'
import WatchlistItem from '../WatchlistItem/WatchlistItem'
class Watchlist extends Component {
  state = {
    watchlistStocks: [],
  }

  componentDidMount() {
    this.fetchWatchlist()
  }

  fetchWatchlist = () => {
    axios
      .get('http://localhost:44317/api/watchlist')
      .then((response) => {
        let data = response.data
        if (response.data.length > 0) {
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
              let marketPercentages = []
              let marketPrices = []
              results.map((result) => {
                marketPercentages.push(result.regularMarketChangePercent)
                marketPrices.push(result.regularMarketPrice)
              })
              let portfolio = []
              for (let i = 0; i < data.length; i++) {
                var stock = {
                  Ticker: data[i].Ticker,
                  MarketPrice: marketPrices[i],
                  PercentChanged: marketPercentages[i],
                }
                portfolio.push(stock)
              }
              console.log(portfolio)
              this.setState({ watchlistStocks: portfolio })
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
        <section className='watchlist'>
          <h2 className='watchlist__header'>Watchlist</h2>
          <div className='watchlist__table--header'>
            <p className='watchlist__table--item'>Ticker</p>
            <p className='watchlist__table--item'>Mkt. Price</p>
            <p className='watchlist__table--item'>Daily %</p>
          </div>
          <div>
            {this.state.watchlistStocks.length > 0 ? (
              this.state.watchlistStocks.map((stock) => {
                return (
                  <WatchlistItem
                    key={uuid()}
                    ticker={stock.Ticker}
                    marketPrice={stock.MarketPrice}
                    percentChanged={stock.PercentChanged}
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

export default Watchlist
