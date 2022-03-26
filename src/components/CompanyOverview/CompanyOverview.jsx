import React, { Component } from 'react'
import './CompanyOverview.scss'

class CompanyOverview extends Component {
  state = {
    symbol: '',
    sector: '',
    peRatio: '',
    pegRatio: '',
    marketCap: '',
  }
  render() {
    return (
      <div className='overview'>
        <h4 className='overview__header'>Company Overview</h4>
        <table className='overview__table'>
          <tr>
            <th>Symbol</th>
            <th>Sector</th>
            <th>P/E Ratio</th>
            <th>PEG Ratio</th>
          </tr>
          <tr>
            <td>{this.state.symbol}</td>
            <td>{this.state.sector}</td>
            <td>{this.state.peRatio}</td>
            <td>{this.state.pegRatio}</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default CompanyOverview
