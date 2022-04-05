import React from 'react'
import './LeaderboardItem.scss'

const LeaderboardItem = ({ name, winningPerc, profitLoss }) => {
  console.log(name)
  return (
    <>
      <div className='leaderboardItem'>
        <p className='leaderboardItem--text'>{name}</p>
        <p className='leaderboardItem--text'>{winningPerc}%</p>
        <p className='leaderboardItem--text'>${profitLoss}</p>
      </div>
    </>
  )
}

export default LeaderboardItem
