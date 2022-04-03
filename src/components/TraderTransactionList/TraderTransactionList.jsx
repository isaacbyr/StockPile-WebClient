import React, { Component } from 'react'
import TraderTransactionItem from '../TraderTransactionItem/TraderTransactionItem'
import './TraderTransactionList.scss'
import axios from 'axios'
import uuid from 'react-uuid'

class TraderTransactionList extends Component {
  state = {
    transactions: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:44317/api/tradetransaction/today')
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
        <div className='traderTransactions'>
          <h2 className='traderTransactions__header'>Transactions</h2>
          <div className='transactions__container'>
            <div className='traderTransactions__table'>
              <p className='traderTransactions__table--header'>Ticker</p>
              <p className='traderTransactions__table--header'>Shares</p>
              <p className='traderTransactions__table--header'>Buy/Sell</p>
              <p className='traderTransactions__table--header'>Price</p>
            </div>
            <div className='traderTransactions__list'>
              {this.state.transactions.length > 0 ? (
                this.state.transactions.map((transaction) => {
                  return (
                    <TraderTransactionItem
                      key={uuid()}
                      ticker={transaction.Ticker}
                      shares={transaction.Shares}
                      price={transaction.Price}
                      buy={transaction.Buy}
                      sell={transaction.Sell}
                    />
                  )
                })
              ) : (
                <h2 className='traderTransactions__empty'>
                  No Transactions Today
                </h2>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default TraderTransactionList
