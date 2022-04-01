import React, { Component } from 'react'
import './PortfolioProDashboard.scss'
import Navbar from '../../components/Navbar/Navbar'
import AccountPieChart from '../../components/AccountPieChart/AccountPieChart'
import Footer from '../../components/Footer/Footer'
import Watchlist from '../../components/Watchlist/Watchlist'
import PortfolioList from '../../components/PortfolioList/PortfolioList'
import AccountNumHoldings from '../../components/AccountNumHoldings/AccountNumHoldings'
import TransactionList from '../../components/TransactionList/TransactionList'
import RealizedPL from '../../components/RealizedPL/RealizedPL'
import PortfolioOverview from '../../components/PortfolioOverview/PortfolioOverview'
import axios from 'axios'

class PortfolioProDashboard extends Component {
  state = {
    portfolioStocks: [],
    unRealizedPL: 0,
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
        <section className='portfoliodashboard'>
          <h1 className='portfoliodashboard__header'>PortfolioPro Dashboard</h1>
          <div className='portfoliodashboard-wrapper'>
            <div className='portfoliodashboard-container'>
              <AccountNumHoldings />
              <AccountPieChart />
            </div>
          </div>
          <div className='portfoliodashboard-wrapper middle'>
            <div className='portfoliodashboard-container middle'>
              <div className='portfoliodashboard__tablet-first'>
                {this.state.portfolioStocks.length > 0 ? (
                  <PortfolioList portfolioStocks={this.state.portfolioStocks} />
                ) : (
                  <h2>Loading</h2>
                )}
              </div>
              <div className='portfoliodashboard__tablet-second'>
                <Watchlist />
                <PortfolioOverview unrealizedPL={this.state.unRealizedPL} />
              </div>
            </div>
          </div>

          <div className='portfoliodashboard-wrapper'>
            <div className='portfoliodashboard-container'>
              <TransactionList />
              <RealizedPL />
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default PortfolioProDashboard
