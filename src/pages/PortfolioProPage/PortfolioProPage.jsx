import React, { Component } from 'react'
import MainStockChart from '../../components/MainStockChart/MainStockChart'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './PortfolioProPage.scss'

class PortfolioProPage extends Component {
  state = {
    ticker: '',
    range: '',
    price: '',
    interval: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {}

  render() {
    return (
      <>
        <Navbar />
        <section className='portfoliopro'>
          <h1 className='portfoliopro__header'>PortfolioPro</h1>
          <div className='portfoliopro-container'>
            <div className='portfoliopro__chart-wrapper'>
              <div className='chart-header'>
                <div className='chart-header-wrapper-1'>
                  <h4 className='chart-header__stock'>AAPL</h4>
                  <p className='chart-header__price'>173.00</p>
                </div>
                <div className='chart-header-wrapper-2'>
                  <form className='chart-header__search'>
                    <input
                      type={'text'}
                      onChange={this.handleChange}
                      name='ticker'
                      value={this.state.ticker}
                      className='chart-header__input'
                      placeholder='Ticker'
                    />
                    <div className='chart-header__search-container'>
                      <label
                        className='chart-header__search--label'
                        for='range'
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
                        <option value={'6mo'}>6mo</option>
                        <option value={'3mo'}>3mo</option>
                        <option value={'1mo'}>1mo</option>
                        <option value={'5d'}>5d</option>
                        <option value={'1d'}>1d</option>
                      </select>
                    </div>
                    <div className='chart-header__search-container'>
                      <label
                        className='chart-header__search--label'
                        for='interval'
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
                        <option value={'1d'}>1d</option>
                        <option value={'1h'}>1h</option>
                        <option value={'15m'}>15m</option>
                        <option value={'5m'}>5m</option>
                        <option value={'1m'}>1m</option>
                      </select>
                    </div>
                  </form>
                  <button className='chart-header__button'>Search</button>
                </div>
              </div>
              <MainStockChart />
            </div>
            <div className='portfoliopro__info-wrapper'></div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default PortfolioProPage
