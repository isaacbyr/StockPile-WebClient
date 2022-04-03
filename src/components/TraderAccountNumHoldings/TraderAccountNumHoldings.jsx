import React, { Component } from 'react'
import axios from 'axios'
import './TraderAccountNumHoldings.scss'
import ReactApexChart from 'react-apexcharts'

class TraderAccountNumHoldings extends Component {
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
        height: 300,
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
      .get('http://localhost:44317/api/tradesportfolio/topholdings')
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
      <div className='tradernumholdings'>
        <h2 className='tradernumholdings__header'>Top Holdings</h2>
        <div>
          {this.state.series[0].data.length > 0 ? (
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type='bar'
              height={300}
            />
          ) : (
            <h2 className='tradernumholdings__empty'>No Holdings</h2>
          )}
        </div>
      </div>
    )
  }
}

export default TraderAccountNumHoldings
