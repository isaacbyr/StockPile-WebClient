import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import DailyLosers from '../../components/DailyLosers/DailyLosers'
import DailyGainers from '../../components/DailyGainers/DailyGainers'
import NewsList from '../../components/NewsList/NewsList'
import LeftStockChart from '../../components/LeftStockChart/LeftStockChart'
import RightStockChart from '../../components/RightStockChart/RightStockChart'
import DashboardCommentsList from '../../components/DashboardCommentsList/DashboardCommentsList'
import DashboardTransactionList from '../../components/DashboardTransactionsList/DashboardTransactionList'
import AccountHeader from '../../components/AccountHeader/AccountHeader'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <h1 className='dashboard__header--title'>Dashboard</h1>
      <AccountHeader />
      <section className='dashboard__charts'>
        <LeftStockChart />
        <RightStockChart />
      </section>
      <section className='dashboard__info'>
        <div className='dashboard__info-container'>
          <div className='dashboard__info--news'>
            <NewsList ticker={'SPY'} />
          </div>
          <div className='dashboard__info-wrapper'>
            <DailyGainers />
            <DailyLosers />
          </div>
        </div>
      </section>
      <section className='dashboard__social'>
        <div className='dashboard__social-container'>
          <DashboardCommentsList />
          <DashboardTransactionList />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Dashboard
