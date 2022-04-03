import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainStockChart from '../../components/MainStockChart/MainStockChart'
import Navbar from '../../components/Navbar/Navbar'
import TraderPositionPanel from '../../components/TraderPositionPanel/TraderPositionPanel'
import TraderTransactionList from '../../components/TraderTransactionList/TraderTransactionList'
import BackArrow from '../../assets/Icons/back_arrow_blue.png'
import NewsList from '../../components/NewsList/NewsList'
import CommentsList from '../../components/CommentsList/CommentsList'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import AccountHeader from '../../components/AccountHeader/AccountHeader'
import './TraderProPage.scss'

class TraderProPage extends Component {
  state = {
    ticker: '',
    range: '5d',
    price: 0,
    interval: '5m',
    chartData: [],
    maxChart: 5,
    minChart: 0,
    updateId: 0,
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
    if (this.state.range == '1d' || this.state.range == '5d') {
      return convDate.toLocaleTimeString()
    } else {
      return convDate.toLocaleDateString()
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const stockTicker = this.props.match.params.id
    if (stockTicker) {
      this.setState({ ticker: stockTicker }, () => this.fetchStockData())
    } else {
      this.setState({ ticker: 'AAPL' }, () => this.fetchStockData())
    }
  }

  fetchStockData = () => {
    var options = {
      method: 'GET',
      url: `https://yfapi.net/v8/finance/chart/${this.state.ticker}?range=${this.state.range}&region=US&interval=${this.state.interval}&lang=en`,
      params: { modules: 'defaultKeyStatistics,assetProfile' },
      headers: {
        'x-api-key': '9l4Vorm2Kb7Z5HeFpMN8raQTY4X8z0HL9bMNChR6',
      },
    }

    axios
      .request(options)
      .then((response) => {
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
        this.setState({ chartData: chartData })
        this.setState({ price: closes[closes.length - 1].toFixed(2) })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <Navbar />
        <section className='traderpro'>
          <div className='traderpro__header-wrapper'>
            <Link to={'/dashboard'}>
              <img src={BackArrow} className='traderpro__header--img' />
            </Link>
            <h1 className='traderpro__header'>TraderPro</h1>
          </div>
          <AccountHeader />
          <div className='traderpro-container'>
            <div className='traderpro__chart-wrapper'>
              <div className='traderpro__chart-container'>
                <div className='chart-header'>
                  <div className='chart-header-wrapper-1'>
                    <h4 className='chart-header__stock'>{this.state.ticker}</h4>
                    <p className='chart-header__price'>
                      {this.state.price != 0 ? this.state.price : 'Loading'}
                    </p>
                  </div>
                  <div className='chart-header-wrapper-2'>
                    <form
                      className='chart-header__search'
                      onSubmit={this.handleSubmit}
                    >
                      <input
                        type={'text'}
                        // onChange={this.handleChange}
                        name='ticker'
                        //value={this.state.ticker}
                        className='chart-header__input'
                        placeholder='Ticker'
                      />
                      <div className='chart-header__search-container'>
                        <label
                          className='chart-header__search--label'
                          htmlFor='range'
                        >
                          Range
                        </label>
                        <select
                          className='chart-header__select'
                          name='range'
                          onChange={this.handleChange}
                          placeholder='Range'
                          value={this.state.range}
                        >
                          <option value={'1d'}>1d</option>
                          <option value={'5d'}>5d</option>
                          <option value={'1mo'}>1mo</option>
                          <option value={'3mo'}>3mo</option>
                          <option value={'6mo'}>6mo</option>
                          <option value={'1y'}>1y</option>
                        </select>
                      </div>
                      <div className='chart-header__search-container'>
                        <label
                          className='chart-header__search--label'
                          htmlFor='interval'
                        >
                          Interval
                        </label>
                        <select
                          className='chart-header__select'
                          name='interval'
                          onChange={this.handleChange}
                          placeholder='Interval'
                          value={this.state.interval}
                        >
                          <option value={'1m'}>1m</option>
                          <option value={'5m'}>5m</option>
                          <option value={'15m'}>15m</option>
                          <option value={'1h'}>1h</option>
                          <option value={'1d'}>1d</option>
                        </select>
                      </div>
                      <button type='submit' className='chart-header__button'>
                        Search
                      </button>
                    </form>
                  </div>
                </div>
                {this.state.chartData.length > 0 ? (
                  <MainStockChart
                    fetchStockData={this.fetchStockData}
                    chartData={this.state.chartData}
                    maxChart={this.state.maxChart}
                    minChart={this.state.minChart}
                  />
                ) : (
                  <h1>Loading</h1>
                )}
              </div>
            </div>
            <div className='traderpro__info-wrapper'>
              <div className='traderpro__info-container'>
                <div className='traderpro__position'>
                  <TraderPositionPanel
                    updatedId={this.state.updateId}
                    ticker={this.state.ticker}
                    price={this.state.price}
                  />
                </div>
                <div className='traderpro__transactions'>
                  <TraderTransactionList key={this.state.updateId} />
                </div>
              </div>
            </div>
            <div className='traderpro__news'>
              <div className='traderpro__news-wrapper'>
                <div className='traderpro__articles'>
                  <NewsList ticker={this.state.ticker} />
                </div>
                <div className='traderpro__comments'>
                  <CommentsList ticker={this.state.ticker} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default TraderProPage
