import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import axios from 'axios'
import './FriendTraderPL.scss'

class FriendTraderPL extends Component {
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
    //var id = this.props.id
    var id = '3c0056da-6bfa-40f5-81cf-b0e34b8a198f'
    axios
      .get(`http://localhost:44317/api/traderealizedpl/history/${id}`)
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
      <div className='friendTraderPL__chart'>
        <h2 className='friendTraderPL__chart--header'>
          TraderPro Realized P/L
        </h2>
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

export default FriendTraderPL
