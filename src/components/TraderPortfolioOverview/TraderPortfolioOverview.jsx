import React, { Component } from 'react'
import axios from 'axios'
import './TraderPortfolioOverview.scss'

class TraderPortfolioOverview extends Component {
  state = {
    accountBalance: 0,
    realizedPL: 0,
  }

  componentDidMount() {
    this.fetchAccountBalance()
    this.fetchRealizedPL()
  }

  fetchRealizedPL = () => {
    axios
      .get('http://localhost:44317/api/traderealizedpl')
      .then((response) => {
        this.setState({
          realizedPL: response.data[response.data.length - 1].TotalRealized,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchAccountBalance = () => {
    axios
      .get('http://localhost:44317/api/useraccount/trades')
      .then((response) => {
        this.setState({ accountBalance: response.data.AccountBalance })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <section className='traderOverview'>
          <div className='traderOverview-container'>
            <h2 className='traderOverview__header'>Overview</h2>
            <table className='traderOverview__table'>
              <div className='traderOverview__table--first'>
                <tr>
                  <th>Starting Amount</th>
                  <td>100000</td>
                </tr>
                <tr>
                  <th>Account Balance</th>
                  <td>{this.state.accountBalance}</td>
                </tr>
              </div>
              <div className='traderOverview__table--second'>
                <tr>
                  <th>Unrealized PL</th>
                  <td>{this.props.unrealizedPL.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Realized PL</th>
                  <td>{this.state.realizedPL}</td>
                </tr>
              </div>
            </table>
          </div>
        </section>
      </>
    )
  }
}

export default TraderPortfolioOverview
