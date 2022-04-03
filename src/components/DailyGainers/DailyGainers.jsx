import axios from 'axios'
import React, { Component } from 'react'
import DaileyItem from '../DailyItem/DaileyItem'
import uuid from 'react-uuid'
import './DailyGainers.scss'

class DailyGainers extends Component {
  state = {
    gainers: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    var options = {
      method: 'GET',
      url: 'https://yfapi.net/ws/screeners/v1/finance/screener/predefined/saved?count=15&scrIds=day_gainers',
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
      this.setState({ gainers: stocks })
    })
  }

  render() {
    return (
      <div className='dailyGainers'>
        <h2 className='dailyGainers__header'>Gainers</h2>
        <div className='dailyGainers__table--header'>
          <p className='dailyGainers__table--item '>Ticker</p>
          <p className='dailyGainers__table--item'>Price</p>
          <p className='dailyGainers__table--item'>% </p>
        </div>
        <div className='dailyGainers__list'>
          {this.state.gainers.length > 0 ? (
            this.state.gainers.map((stock) => {
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

export default DailyGainers
