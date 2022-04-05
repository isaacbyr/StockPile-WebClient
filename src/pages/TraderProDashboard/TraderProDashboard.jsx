import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BackArrow from '../../assets/Icons/back_arrow_blue.png'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import Watchlist from '../../components/Watchlist/Watchlist'
import PortfolioList from '../../components/PortfolioList/PortfolioList'
import AccountHeader from '../../components/AccountHeader/AccountHeader'
import './TraderProDashboard.scss'
import TraderPortfolioOverview from '../../components/TraderPortfolioOverview/TraderPortfolioOverview'
import TraderAccountNumHoldings from '../../components/TraderAccountNumHoldings/TraderAccountNumHoldings'
import TraderAccountPieChart from '../../components/TraderAccountPieChart/TraderAccountPieChart'
import TraderRealizedPL from '../../components/TraderRealizedPL/TraderRealizedPL'
import TraderAccountTransactionList from '../../components/TraderAccountTransactionList/TraderAccountTransactionList'

class TraderProDashboard extends Component {
  state = {
    portfolioStocks: [],
    unRealizedPL: 0,
  }
  componentDidMount() {
    this.fetchPortfolioStock()
  }

  fetchPortfolioStock = () => {
    axios
      .get('http://localhost:44317/api/tradesportfolio')
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
            let unrealizedPL = 0

            for (let i = 0; i < data.length; i++) {
              var stock = {
                Ticker: data[i].Ticker,
                AveragePrice: data[i].AveragePrice,
                Shares: data[i].Shares,
                MarketPrice: marketPrices[i],
                ProfitLoss:
                  (marketPrices[i] - data[i].AveragePrice) * data[i].Shares,
              }
              unrealizedPL += stock.ProfitLoss
              portfolio.push(stock)
            }
            console.log(portfolio)
            this.setState({ portfolioStocks: portfolio })
            this.setState({ unRealizedPL: unrealizedPL })
          })
          .catch((err) => {
            console.log(err)
          })
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
        <Navbar />
        <section className='traderdashboard'>
          <div className='traderdashboard__header-wrapper'>
            <Link to={'/dashboard'}>
              <img src={BackArrow} className='traderdashboard__header--img' />
            </Link>
            <h1 className='traderdashboard__header'>TraderPro Dashboard</h1>
          </div>
          <AccountHeader />
          <TraderPortfolioOverview unrealizedPL={this.state.unRealizedPL} />

          <div className='traderdashboard-wrapper'>
            <div className='traderdashboard-container'>
              <TraderAccountNumHoldings />
              <TraderAccountPieChart />
            </div>
          </div>
          <div className='traderdashboard-wrapper middle'>
            <div className='traderdashboard-container middle'>
              <div className='traderdashboard__tablet-first'>
                <PortfolioList
                  portfolioStocks={this.state.portfolioStocks}
                  title={'Portfolio'}
                />
              </div>
              <div className='portfoliodashboard__tablet-second'>
                <Watchlist />
              </div>
            </div>
          </div>

          <div className='portfoliodashboard-wrapper'>
            <div className='portfoliodashboard-container'>
              <TraderAccountTransactionList />
              <TraderRealizedPL />
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default TraderProDashboard
