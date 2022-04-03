import React, { Component } from 'react'
import './PortfolioOverview.scss'
import axios from 'axios'

class PortfolioOverview extends Component {
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
      .get('http://localhost:44317/api/realizedpl')
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
      .get('http://localhost:44317/api/useraccount')
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
        <section className='portfolioOverview'>
          <div className='portfolioOverview-container'>
            <h2 className='portfolioOverview__header'>Overview</h2>
            <table className='portfolioOverview__table'>
              <div className='portfolioOverview__table--first'>
                <tr>
                  <th>Starting Amount</th>
                  <td>100000</td>
                </tr>
                <tr>
                  <th>Account Balance</th>
                  <td>{this.state.accountBalance}</td>
                </tr>
              </div>
              <div className='portfolioOverview__table--second'>
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

export default PortfolioOverview
