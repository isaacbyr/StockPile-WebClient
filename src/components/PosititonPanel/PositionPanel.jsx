import { Component } from 'react'
import React from 'react'
import './PositionPanel.scss'

class PositionPanel extends Component {
  state = {
    accountBalance: 0,
    ticker: '',
    currentPositonShares: 0,
    newPositionShares: 0,
    averagePrice: 0,
    profitLoss: 0,
    cashAmount: 0,
    price: 0,
  }

  componentDidMount() {}
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
            <tr>
              <th>Stock</th>
              <th>Shares</th>
              <th>Average Price</th>
              <th>Profit/Loss</th>
            </tr>
            <tr>
              <td>{this.state.ticker}</td>
              <td>{this.state.currentPositonShares}</td>
              <td>{this.state.averagePrice}</td>
              <td>{this.state.profitLoss}</td>
            </tr>
          </table>
        </div>
        <div className='position-wrapper'>
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
              <td>{this.state.currentPositonShares}</td>
              <td>{this.state.price}</td>
              <td>{this.state.cashAmount}</td>
            </tr>
          </table>
        </div>
        <div className='position__button-wrapper'>
          <button className='position__button buy'>Buy</button>
          <button className='position__button sell'>Sell</button>
        </div>
      </section>
    )
  }
}

export default PositionPanel
