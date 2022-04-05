import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './UserProfile.scss'
import AccountHeader from '../../components/AccountHeader/AccountHeader'
import axios from 'axios'
import PortfolioList from '../../components/PortfolioList/PortfolioList'
import FriendTraderPL from '../../components/FriendTraderPL/FriendTraderPL'
import FriendPortfolioPL from '../../components/FriendPortfolioPL/FriendPortfolioPL'

class UserProfile extends Component {
  state = {
    firstName: '',
    portfolioStocks: [],
    traderStocks: [],
  }

  componentDidMount() {
    this.loadFriendData()
    this.fetchPortfolioStock()
    this.fetchTraderStocks()
  }

  loadFriendData = () => {
    var id = this.props.match.params.id
    axios
      .get(`http://localhost:44317/api/friends/${id}`)
      .then((response) => {
        console.log(response)
        this.setState({ firstName: response.data.FirstName })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchTraderStocks = () => {
    var id = this.props.match.params.id
    //var id = '3c0056da-6bfa-40f5-81cf-b0e34b8a198f'
    axios
      .get(`http://localhost:44317/api/tradesportfolio/id/${id}`)
      .then((response) => {
        console.log(response)
        let data = response.data
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
            console.log(response)
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
            this.setState({ traderStocks: portfolio })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchPortfolioStock = () => {
    var id = this.props.match.params.id
    //var id = '3c0056da-6bfa-40f5-81cf-b0e34b8a198f'
    axios
      .get(`http://localhost:44317/api/portfolio/id/${id}`)
      .then((response) => {
        console.log(response)
        let data = response.data
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
        <AccountHeader />
        <section className='profile'>
          <div className='profile-container'>
            <div className='profile__header-wrapper'>
              <div className='profile__img-wrapper'>
                <img className='profile__img' />
              </div>
              <div className='profile__header--info-wrapper'>
                <h2>{this.state.firstName}'s Profile</h2>
                <p>5 Friends</p>
              </div>
            </div>
            <div className='profile__portfolio-wrapper'>
              <div className='profile__portfolio'>
                {this.state.portfolioStocks.length > 0 ? (
                  <PortfolioList
                    portfolioStocks={this.state.portfolioStocks}
                    title={'PortfolioPro'}
                  />
                ) : (
                  <h2>Loading</h2>
                )}
              </div>
              <div className='profile__portfolio'>
                {this.state.traderStocks.length > 0 ? (
                  <PortfolioList
                    portfolioStocks={this.state.traderStocks}
                    title={'TraderPro'}
                  />
                ) : (
                  <h2>Loading</h2>
                )}
              </div>
            </div>
            <div className='profile__pl-wrapper'>
              <div className='profile__pl'>
                <FriendPortfolioPL id={this.props.match.params.id} />
              </div>
              <div className='profile__pl'>
                <FriendTraderPL id={this.props.match.params.id} />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default UserProfile
