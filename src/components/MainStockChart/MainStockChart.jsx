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
        tooltip: {
          enabled: true,
        },
        labels: {
          formatter: function (value) {
            return value.toFixed(2)
          },
        },
      },
    },
  }

  componentDidMount() {
    this.fetchStockData()
  }

  timestampToDate = (timestamp) => {
    var convDate = new Date(timestamp)
    return convDate
  }

  fetchStockData = () => {
    var options = {
      method: 'GET',
      url: 'https://yfapi.net/v8/finance/chart/AAPL?range=5d&region=US&interval=5m&lang=en',
      params: { modules: 'defaultKeyStatistics,assetProfile' },
      headers: {
        'x-api-key': '9l4Vorm2Kb7Z5HeFpMN8raQTY4X8z0HL9bMNChR6',
      },
    }

    axios
      .request(options)
      .then((response) => {
        let data = response.data.chart.result[0].indicators.quote[0]
        let timestampData = response.data.chart.result[0].timestamp
        let timestamps = []
        for (let i = 0; i < timestampData.length; i++) {
          timestamps.push(this.timestampToDate(timestampData[i]))
        }
        let lows = data.low
        let closes = data.close
        let highs = data.high
        let opens = data.open

        let chartData = []
        for (let i = 0; i < closes.length; i++) {
          chartData.push({
            x: timestamps[i],
            y: [opens[i], highs[i], lows[i], closes[i]],
          })
        }
        this.setState({ series: [{ data: chartData }] })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  componentDidUpdate() {
    console.log(this.state.series[0])
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
              height={350}
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
