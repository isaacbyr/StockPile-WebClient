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
        min: 0,
        max: 5,
        labels: {
          formatter: function (value) {
            return value.toFixed(2)
          },
        },
      },
    },
  }

  componentWillReceiveProps() {
    this.setState({ series: [{ data: this.props.chartData }] })
  }

  componentDidMount() {
    this.setState({ series: [{ data: this.props.chartData }] })
    this.setState({ options: [{}] })
  }

  render() {
    return (
      <>
        <div className='chart'>
          {this.state.series[0].data ? (
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type='candlestick'
              height={400}
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
