import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import axios from 'axios'
import './AccountPieChart.scss'

class AccountPieChart extends Component {
  state = {
    portfolioStocks: [],
    series: [],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      colors: [
        '#5F9EA0',
        '#B0C4DE',
        '#B0E0E6',
        '#6495ED',
        '#87CEEB',
        '#87CEFA',
      ],
      labels: [],
      responsive: [
        {
          breakpoint: 420,
          options: {
            chart: {
              width: 320,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  }

  componentDidMount() {
    this.fetchData()
    this.fetchAccountBalance()
  }

  fetchData = () => {
    axios
      .get('http://localhost:44317/api/portfolio')
      .then((response) => {
        //this.setState({ portfolioStocks: response.data })
        let amountInvested = []
        let tickers = []
        response.data.map((stock) => {
          amountInvested.push(stock.AveragePrice * stock.Shares)
          tickers.push(stock.Ticker)
        })
        this.setState({ series: amountInvested })
        this.setState({ options: { labels: tickers } })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchAccountBalance = () => {
    var options = {
      method: 'GET',
      url: 'http://localhost:44317/api/useraccount',
    }
    axios
      .request(options)
      .then((response) => {
        let seriesData = [...this.state.series]
        let labelsData = [...this.state.options.labels]

        seriesData.push(response.data.AccountBalance)
        labelsData.push('Cash')

        this.setState({ series: seriesData })
        this.setState({ options: { labels: labelsData } })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidUpdate() {
    console.log(this.state.series)
    console.log(this.state.options.labels)
  }

  render() {
    return (
      <div className='accountpie'>
        <h2 className='accountpie__header'>Account Holdings</h2>
        <div>
          {this.state.series.length > 0 ? (
            <ReactApexChart
              className='accountpie__chart'
              options={this.state.options}
              series={this.state.series}
              height={300}
              type='pie'
            />
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    )
  }
}

export default AccountPieChart
