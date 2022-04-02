import React, { Component } from 'react'
import './RightStockChart.scss'
import ReactApexChart from 'react-apexcharts'
import axios from 'axios'

class RightStockChart extends Component {
  state = {
    ticker: '^DJI',
    price: 0,
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
      },

      xaxis: {
        tickAmount: 32,
        type: 'date',
      },
      yaxis: {
        forceNiceScale: true,
        labels: {
          formatter: function (value) {
            return Math.round(value)
          },
        },
      },
    },
  }

  componentDidMount() {
    this.fetchStockData()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({ ticker: e.target.ticker.value }, () =>
      this.fetchStockData()
    )
  }

  timestampToDate = (timestamp) => {
    var convDate = new Date(timestamp * 1000)
    return convDate.toLocaleDateString()
  }

  fetchStockData = () => {
    var options = {
      method: 'GET',
      url: `https://yfapi.net/v8/finance/chart/${this.state.ticker}?range=3mo&region=US&interval=1d&lang=en`,
      params: { modules: 'defaultKeyStatistics,assetProfile' },
      headers: {
        'x-api-key': '9l4Vorm2Kb7Z5HeFpMN8raQTY4X8z0HL9bMNChR6',
      },
    }
    axios
      .request(options)
      .then((response) => {
        console.log(response)
        let data = response.data.chart.result[0].indicators.quote[0]
        let timestampData = response.data.chart.result[0].timestamp
        let timestamps = []
        for (let i = 0; i < timestampData.length; i++) {
          timestamps.push(this.timestampToDate(timestampData[i]))
        }
        let lows = data.low
        let closes = data.close
        let highs = data.high
        let opens = data.open

        var min = 10000
        var max = -10000
        let chartData = []
        for (let i = 0; i < closes.length; i++) {
          chartData.push({
            x: timestamps[i],
            y: [opens[i], highs[i], lows[i], closes[i]],
          })
          if (lows[i] < min) {
            min = Math.round(lows[i])
          }
          if (highs[i] > max) {
            max = Math.round(highs[i])
          }
        }
        console.log(chartData)
        this.setState({ series: [{ data: chartData }] })
        this.setState({ price: closes[closes.length - 1].toFixed(2) })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <>
        <section className='rightChart'>
          <div className='rightChart-header'>
            <div className='rightChart-header-wrapper-1'>
              <h4 className='rightChart-header__stock'>{this.state.ticker}</h4>
              <p className='rightChart-header__price'>
                {this.state.price != 0 ? this.state.price : 'Loading'}
              </p>
            </div>
            <div className='rightChart-header-wrapper-2'>
              <form
                className='rightChart-header__search'
                onSubmit={this.handleSubmit}
              >
                <input
                  type={'text'}
                  // onChange={this.handleChange}
                  name='ticker'
                  //value={this.state.ticker}
                  className='rightChart-header__input'
                  placeholder='Ticker'
                />
                <button type='submit' className='rightChart-header__button'>
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className='rightChart__chart'>
            {this.state.series[0].data.length > 0 ? (
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type='candlestick'
                height={450}
              />
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </section>
      </>
    )
  }
}

export default RightStockChart
