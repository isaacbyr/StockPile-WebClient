import React from 'react'
import './TransactionItem.scss'

const TransactionItem = ({ buy, sell, price, date, shares, ticker }) => {
  return (
    <div className='transactionItem'>
      <p className='transactionItem__item'>{date.substring(0, 10)}</p>
      <p className='transactionItem__item'>{ticker}</p>
      <p className='transactionItem__item'>{shares}</p>
      <p className='transactionItem__item'>{buy == 1 ? 'Buy' : 'Sell'}</p>
      <p className='transactionItem__item'>{price}</p>
    </div>
  )
}

export default TransactionItem
