import React, { Component } from 'react'
import TransactionItem from '../TransactionItem/TransactionItem'
import './TransactionList.scss'
import axios from 'axios'
import uuid from 'react-uuid'

class TransactionList extends Component {
  state = {
    transactions: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:44317/api/transaction')
      .then((response) => {
        console.log(response)
        this.setState({ transactions: response.data.reverse() })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <div className='transactions'>
          <h2 className='transactions__header'>Transactions</h2>
          <div className='transactions__container'>
            <div className='transactions__table'>
              <p className='transactions__table--header'>Date</p>
              <p className='transactions__table--header'>Ticker</p>
              <p className='transactions__table--header'>Shares</p>
              <p className='transactions__table--header'>Buy/Sell</p>
              <p className='transactions__table--header'>Price</p>
            </div>
            <div className='transactions__list'>
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

export default TransactionList
