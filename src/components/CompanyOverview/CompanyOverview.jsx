import React, { Component } from 'react'
import axios from 'axios'
import './CompanyOverview.scss'

class CompanyOverview extends Component {
  state = {
    symbol: '',
    sector: 0,
    peRatio: 0,
    pegRatio: 0,
    marketCap: 0,
    ebitda: 0,
    eps: 0,
    shares: 0,
    dividendYield: 0,
    forwardPE: 0,
    trailingPE: 0,
    beta: 0,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    var options = {
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${this.props.ticker}&apikey=RHMBFDRST81LETMU`,
    }

    axios
      .request(options)
      .then((response) => {
        let data = response.data
        console.log(data)
        this.setState({
          symbol: data.Symbol,
          sector: data.Sector,
          peRatio: data.PERatio,
          pegRatio: data.PEGRatio,
          marketCap: data.MarketCapitalization,
          ebitda: data.EBITDA,
          eps: data.EPS,
          shares: data.SharesOutstanding,
          dividendYield: data.DividendYield,
          forwardPE: data.ForwardPE,
          trailingPE: data.TrailingPE,
          beta: data.Beta,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.ticker != this.props.ticker) {
    //   this.fetchData()
    // }
  }

  render() {
    return (
      <div className='overview'>
        <h4 className='overview__header'>Company Overview</h4>
        <table className='overview__table'>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Sector</th>
              <th>P/E Ratio</th>
              <th>PEG Ratio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.symbol}</td>
              <td>{this.state.sector}</td>
              <td>{this.state.peRatio}</td>
              <td>{this.state.pegRatio}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Shares</th>
              <th>EPS</th>
              <th>Market Cap</th>
              <th>Beta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.shares}</td>
              <td>{this.state.eps}</td>
              <td>{this.state.marketCap}</td>
              <td>{this.state.beta}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>EBITDA</th>
              <th>Forward PE</th>
              <th>Trailing PE</th>
              <th>Dividend Yield</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.ebitda}</td>
              <td>{this.state.forwardPE}</td>
              <td>{this.state.trailingPE}</td>
              <td>{this.state.dividendYield}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CompanyOverview
