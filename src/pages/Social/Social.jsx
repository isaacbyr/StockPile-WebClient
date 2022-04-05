import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Friends from '../../components/Friends/Friends'
import FriendRequestList from '../../components/FriendRequestList/FriendRequestList'
import LeaderboardList from '../../components/LeaderboardList/LeaderboardList'
import AccountHeader from '../../components/AccountHeader/AccountHeader'
import TraderLeaderboardList from '../../components/TraderLeaderboardList/TraderLeaderboardList'
import './Social.scss'

const Social = () => {
  return (
    <>
      <Navbar />
      <div className='social__header-wrapper'>
        <h1 className='social__header'>Social Dashboard</h1>
      </div>
      <AccountHeader />
      <div className='social'>
        <div className='social-wrapper'>
          <div className='social__friends-wrapper'>
            <Friends />
            <FriendRequestList />
          </div>
          <div className='social__leaderboard-wrapper'>
            <LeaderboardList />
            <TraderLeaderboardList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Social
