import React, { Component } from 'react'
import axios from 'axios'
import TransactionItem from '../TransactionItem/TransactionItem'
import './TraderAccountTransactionList.scss'
import uuid from 'react-uuid'

class TraderAccountTransactionList extends Component {
  state = {
    transactions: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:44317/api/tradetransaction')
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
        <div className='tradeAccTransactions'>
          <h2 className='tradeAccTransactions__header'>Transactions</h2>
          <div className='tradeAccTransactions__container'>
            <div className='tradeAccTransactions__table'>
              <p className='tradeAccTransactions__table--header'>Date</p>
              <p className='tradeAccTransactions__table--header'>Ticker</p>
              <p className='tradeAccTransactions__table--header'>Shares</p>
              <p className='tradeAccTransactions__table--header'>Buy/Sell</p>
              <p className='tradeAccTransactions__table--header'>Price</p>
            </div>
            <div className='tradeAccTransactions__list'>
              {this.state.transactions.length > 0 ? (
                this.state.transactions.map((transaction) => {
                  return (
                    <TransactionItem
                      key={uuid()}
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
        </div>
      </>
    )
  }
}

export default TraderAccountTransactionList
