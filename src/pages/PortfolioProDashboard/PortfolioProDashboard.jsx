import React from 'react'
import './PortfolioProDashboard.scss'
import Navbar from '../../components/Navbar/Navbar'
import AccountPieChart from '../../components/AccountPieChart/AccountPieChart'
import Footer from '../../components/Footer/Footer'
import PortfolioList from '../../components/PortfolioList/PortfolioList'
import AccountNumHoldings from '../../components/AccountNumHoldings/AccountNumHoldings'
import TransactionList from '../../components/TransactionList/TransactionList'
import RealizedPL from '../../components/RealizedPL/RealizedPL'

const PortfolioProDashboard = () => {
  return (
    <>
      <Navbar />
      <section className='portfoliodashboard'>
        <div className='portfoliodashboard-wrapper'>
          <PortfolioList />
          {/*Watchlist */}
        </div>
        <div className='portfoliodashboard-wrapper middle'>
          <div className='portfoliodashboard-container'>
            <AccountNumHoldings />
            <AccountPieChart />
          </div>
        </div>
        <div className='portfoliodashboard-wrapper'>
          <div className='portfoliodashboard-container'>
            <TransactionList />
            <RealizedPL />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PortfolioProDashboard
