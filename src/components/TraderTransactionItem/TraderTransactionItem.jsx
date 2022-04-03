import React from 'react'

const TraderTransactionItem = ({ ticker, shares, buy, price }) => {
  return (
    <div className='transactionItem'>
      <p className='transactionItem__item'>{ticker}</p>
      <p className='transactionItem__item'>{shares}</p>
      <p className='transactionItem__item'>{buy == 1 ? 'Buy' : 'Sell'}</p>
      <p className='transactionItem__item'>{price}</p>
    </div>
  )
}

export default TraderTransactionItem
