import React, { Component } from 'react'
import './PortfolioOverview.scss'

class PortfolioOverview extends Component {
  render() {
    return (
      <>
        <section className='portfolioOverview'>
          <h2 className='portfolioOverview__header'>Overview</h2>
          <table className='portfolioOverview__table'>
            <div className='portfolioOverview__table--left'>
              <tr>
                <th>Starting Amount</th>
                <td>100000</td>
              </tr>
              <tr>
                <th>Account Balance</th>
                <td>99000</td>
              </tr>
            </div>
            <div className='portfolioOverview__table--right'>
              <tr>
                <th>Unrealized PL</th>
                <td>1000</td>
              </tr>
              <tr>
                <th>Realized PL</th>
                <td>568</td>
              </tr>
            </div>
          </table>
        </section>
      </>
    )
  }
}

export default PortfolioOverview
