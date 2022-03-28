import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import axios from 'axios'
import './AccountNumHoldings.scss'

class AccountNumHoldings extends Component {
  state = {
    series: [
      {
        name: 'Top Holdings',
        data: [],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '15%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        title: {
          text: 'Shares',
        },
      },
      fill: {
        opacity: 1,
      },
    },
  }

  componentDidMount() {
    axios
      .get('http://localhost:44317/api/portfolio/topholdings')
      .then((response) => {
        let stocks = []
        let shares = []
        response.data.map((stock) => {
          stocks.push(stock.Ticker)
          shares.push(stock.Shares)
        })
        this.setState({
          series: [{ data: shares }],
          options: { xaxis: { categories: stocks } },
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className='numholdings'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='bar'
          height={350}
        />
      </div>
    )
  }
}

export default AccountNumHoldings
