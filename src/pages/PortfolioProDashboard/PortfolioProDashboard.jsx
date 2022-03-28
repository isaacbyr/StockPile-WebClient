import React from 'react'
import './PortfolioProDashboard.scss'
import Navbar from '../../components/Navbar/Navbar'
import AccountPieChart from '../../components/AccountPieChart/AccountPieChart'
import Footer from '../../components/Footer/Footer'
import PortfolioList from '../../components/PortfolioList/PortfolioList'
import AccountNumHoldings from '../../components/AccountNumHoldings/AccountNumHoldings'

const PortfolioProDashboard = () => {
  return (
    <>
      <Navbar />
      <section className='portfoliodashboard'>
        <div className='portfoliodashboard-wrapper'>
          <PortfolioList />
          <AccountPieChart />
        </div>
        <div className='portfoliodashboard-wrapper'>
          {/*Watchlist */}
          <AccountNumHoldings />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PortfolioProDashboard
