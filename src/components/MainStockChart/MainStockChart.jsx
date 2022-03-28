import React, { Component } from 'react'
import axios from 'axios'
import ReactApexChart from 'react-apexcharts'
import './MainStockChart.scss'

class MainStockChart extends Component {
  state = {
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
      },

      xaxis: {
        type: 'date',
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value.toFixed(2)
          },
        },
      },
    },
  }

  componentWillReceiveProps() {
    console.log(this.props.chartData)
    this.setState({ series: [{ data: this.props.chartData }] })
  }

  componentDidMount() {
    console.log(this.props.chartData)
    this.setState({ series: [{ data: this.props.chartData }] })
  }

  render() {
    return (
      <>
        <div className='chart'>
          {this.state.series[0].data.length > 0 ? (
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type='candlestick'
              height={450}
            />
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </>
    )
  }
}

export default MainStockChart
