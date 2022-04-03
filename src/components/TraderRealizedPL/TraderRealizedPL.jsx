import React, { Component } from 'react'
import './TraderRealizedPL.scss'
import axios from 'axios'
import ReactApexChart from 'react-apexcharts'

class TraderRealizedPL extends Component {
  state = {
    series: [
      {
        name: 'Profit Loss',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'straight',
        colors: ['#5F9EA0'],
      },
      title: {
        text: 'Realized Profit Loss',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#B0C4DE', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [], //
      },
    },
  }

  componentDidMount() {
    axios
      .get('http://localhost:44317/api/traderealizedpl')
      .then((response) => {
        let TotalRealizeds = []
        let dates = []
        response.data.map((entry) => {
          TotalRealizeds.push(entry.TotalRealized)
          dates.push(entry.Date.substring(0, 10))
        })

        this.setState({ series: [{ data: TotalRealizeds }] })
        this.setState({ options: { xaxis: { categories: dates } } })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className='traderealizedPL__chart'>
        <h2 className='traderealizedPL__chart--header'>Realized Profit/Loss</h2>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='line'
          height={350}
        />
      </div>
    )
  }
}

export default TraderRealizedPL
