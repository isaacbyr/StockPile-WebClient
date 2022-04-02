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
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className='dashboard__header'>
        <div className='dashboard__header-container'>
          <h1 className='dashboard__header--title'>Dashboard</h1>
          <div className='dashboard__header-wrapper'>
            <Link className='dashboard__header--link' to={'/portfoliopro'}>
              PortfolioPro Buy/Sell
            </Link>
            <Link
              className='dashboard__header--link'
              to={'/portfolioproperformance'}
            >
              PortfolioPro Dashboard
            </Link>
            <Link className='dashboard__header--link'>TraderPro Buy/Sell</Link>
            <Link className='dashboard__header--link'>TraderPro Dashboard</Link>
            <Link className='dashboard__header--link'>Social Dashboard</Link>
          </div>
        </div>
      </section>
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
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Dashboard
