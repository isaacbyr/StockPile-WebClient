import { Component } from 'react'
import React from 'react'
import axios from 'axios'
import './PositionPanel.scss'

class PositionPanel extends Component {
  state = {
    accountBalance: 0,
    ticker: '',
    currentPositionShares: 0,
    newPositionShares: 0,
    averagePrice: 0,
    profitLoss: 0,
    cashAmount: 0,
    price: 0,
  }

  componentDidMount() {
    this.setState({ price: this.props.price })
    this.loadAccountBalance()
    this.loadPortfolioStock()
  }

  loadAccountBalance = () => {
    console.log('here')
    var options = {
      method: 'GET',
      url: 'http://localhost:44317/api/useraccount',
    }
    axios
      .request(options)
      .then((response) => {
        this.setState({ accountBalance: response.data.AccountBalance })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  loadPortfolioStock = () => {
    console.log('here')

    axios
      .get(`http://localhost:44317/api/portfolio/${this.props.ticker}`)
      .then((response) => {
        if (response.data != null) {
          var pl =
            (this.props.price - response.data.AveragePrice) *
            response.data.Shares
          this.setState({
            averagePrice: response.data.AveragePrice,
            ticker: response.data.Ticker,
            currentPositionShares: response.data.Shares,
            profitLoss: pl.toFixed(2),
          })
        } else {
          this.setState({
            averagePrice: 0,
            ticker: this.props.ticker,
            currentPositionShares: 0,
            profitLoss: 0,
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      cashAmount: (e.target.value * this.state.price).toFixed(2),
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (e.nativeEvent.submitter.name == 'buy') {
      this.handleBuy()
    } else {
      console.log('sell')
    }
  }

  handleBuy = () => {
    let data = {
      Amount: this.state.cashAmount,
      UserId: '',
    }

    axios
      .put(
        'http://localhost:44317/api/useraccount/updatebalance/portfolio',
        data
      )
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })

    //update transaction table
    var transaction = {
      Ticker: this.state.ticker,
      Buy: true,
      Price: this.state.price,
      Sell: false,
      Shares: this.state.newPositionShares,
      Date: new Date(),
    }

    axios
      .post('http://localhost:44317/api/transaction', transaction)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })

    // update portfolio table
    var stock = {
      Ticker: this.state.ticker,
      Price: this.state.price,
      Shares: this.state.newPositionShares,
    }

    if (this.state.currentPositionShares == 0) {
      axios
        .post('http://localhost:44317/api/portfolio', stock)
        .then((response) => {
          console.log(response)

          // reload account balance
          this.loadAccountBalance()
          //load updated positonn
          this.loadPortfolioStock()
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      axios
        .put('http://localhost:44317/api/portfolio/buy', stock)
        .then((response) => {
          console.log(response)

          // reload account balance
          this.loadAccountBalance()
          //load updated positonn
          this.loadPortfolioStock()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ticker != this.props.ticker) {
      this.loadPortfolioStock()
    }
    if (prevProps.price != this.props.price) {
      this.setState({ price: this.props.price })
    }
  }

  render() {
    return (
      <section className='position'>
        <div className='position__accountBalance-wrapper'>
          <p className='position__accountBalance--label'>Account Balance</p>
          <p className='position__accountBalance--text'>
            {this.state.accountBalance}
          </p>
        </div>
        <div className='position-wrapper first'>
          <h4 className='position__header'>Current Position</h4>
          <table className='position__table'>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Shares</th>
                <th>Average Price</th>
                <th>Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.ticker}</td>
                <td>{this.state.currentPositionShares}</td>
                <td>{this.state.averagePrice}</td>
                <td>{this.state.profitLoss}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='position-wrapper second'>
            <h4 className='position__header'>New Position</h4>
            <table className='position__table'>
              <tr>
                <th>Stock</th>
                <th>Shares</th>
                <th>Price</th>
                <th>Cash Amount</th>
              </tr>
              <tr>
                <td>{this.state.ticker}</td>
                <td>
                  <input
                    className='position__input--shares'
                    type='text'
                    name='newPositionShares'
                    onChange={this.handleChange}
                    value={this.state.newPositionShares}
                  />
                </td>
                <td>{this.state.price}</td>
                <td>{this.state.cashAmount}</td>
              </tr>
            </table>
          </div>
          <div className='position__button-wrapper'>
            <button className='position__button buy' type='submit' name='buy'>
              Buy
            </button>
            <button className='position__button sell' type='submit' name='sell'>
              Sell
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default PositionPanel
