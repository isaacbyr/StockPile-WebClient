import React, { Component } from 'react'
import axios from 'axios'
import uuid from 'react-uuid'
import DaileyItem from '../DailyItem/DaileyItem'
import './DailyLosers.scss'

class DailyLosers extends Component {
  state = {
    losers: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    var options = {
      method: 'GET',
      url: 'https://yfapi.net/ws/screeners/v1/finance/screener/predefined/saved?count=15&scrIds=day_losers',
      params: { modules: 'defaultKeyStatistics,assetProfile' },
      headers: {
        'x-api-key': '9l4Vorm2Kb7Z5HeFpMN8raQTY4X8z0HL9bMNChR6',
      },
    }
    axios.request(options).then((response) => {
      let data = response.data.finance.result[0].quotes

      let stocks = []
      data.map((stock) => {
        let item = {
          ticker: stock.symbol,
          price: stock.regularMarketPrice,
          percentChanged: stock.regularMarketChangePercent.toFixed(2),
        }
        stocks.push(item)
      })
      this.setState({ losers: stocks })
    })
  }

  render() {
    return (
      <div className='dailyLosers'>
        <h2 className='dailyLosers__header'>Losers</h2>
        <div className='dailyLosers__table--header'>
          <p className='dailyLosers__table--item '>Ticker</p>
          <p className='dailyLosers__table--item'>Price</p>
          <p className='dailyLosers__table--item'>% </p>
        </div>
        <div className='dailyLosers__list'>
          {this.state.losers.length > 0 ? (
            this.state.losers.map((stock) => {
              return (
                <DaileyItem
                  key={uuid()}
                  ticker={stock.ticker}
                  price={stock.price}
                  percentChanged={stock.percentChanged}
                />
              )
            })
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </div>
    )
  }
}

export default DailyLosers
