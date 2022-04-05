import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Friends from '../../components/Friends/Friends'
import FriendRequestList from '../../components/FriendRequestList/FriendRequestList'
import LeaderboardList from '../../components/LeaderboardList/LeaderboardList'
import BackArrow from '../../assets/Icons/back_arrow_blue.png'
import AccountHeader from '../../components/AccountHeader/AccountHeader'
import TraderLeaderboardList from '../../components/TraderLeaderboardList/TraderLeaderboardList'
import './Social.scss'

const Social = () => {
  return (
    <>
      <Navbar />
      <div className='social__header-wrapper'>
        <Link to={'/dashboard'}>
          <img src={BackArrow} className='social__header--img' />
        </Link>
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
