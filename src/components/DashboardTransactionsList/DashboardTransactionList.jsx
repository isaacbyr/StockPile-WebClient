import React, { Component } from 'react'
import './DashboardTransactionList.scss'
import DashboardTransactionItem from '../DashboardTransactionItem/DashboardTransactionItem'
import axios from 'axios'
import uuid from 'react-uuid'

class DashboardTransactionList extends Component {
  state = {
    transactions: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:44317/api/transaction/all')
      .then((response) => {
        this.setState({ transactions: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <>
        <div className='dashTransactions'>
          <h2 className='dashTransactions__header'>Transactions</h2>
          <div className='dashTransactions__list'>
            {this.state.transactions.length > 0 ? (
              this.state.transactions.map((transaction) => {
                return (
                  <DashboardTransactionItem
                    key={uuid()}
                    fullName={transaction.FullName}
                    ticker={transaction.Ticker}
                    shares={transaction.Shares}
                    date={transaction.Date}
                    price={transaction.Price}
                    buy={transaction.Buy}
                    sell={transaction.Sell}
                  />
                )
              })
            ) : (
              <h2>Loading</h2>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default DashboardTransactionList
