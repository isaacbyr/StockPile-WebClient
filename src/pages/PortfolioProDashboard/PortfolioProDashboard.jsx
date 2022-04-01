import React from 'react'
import './PortfolioProDashboard.scss'
import Navbar from '../../components/Navbar/Navbar'
import AccountPieChart from '../../components/AccountPieChart/AccountPieChart'
import Footer from '../../components/Footer/Footer'
import Watchlist from '../../components/Watchlist/Watchlist'
import PortfolioList from '../../components/PortfolioList/PortfolioList'
import AccountNumHoldings from '../../components/AccountNumHoldings/AccountNumHoldings'
import TransactionList from '../../components/TransactionList/TransactionList'
import RealizedPL from '../../components/RealizedPL/RealizedPL'
import PortfolioOverview from '../../components/PortfolioOverview/PortfolioOverview'

const PortfolioProDashboard = () => {
  return (
    <>
      <Navbar />
      <section className='portfoliodashboard'>
        <h2 className='portfoliodashboard__header'>PortfolioPro Dashboard</h2>
        <div className='portfoliodashboard-wrapper'>
          <div className='portfoliodashboard-container'>
            <AccountNumHoldings />
            <AccountPieChart />
          </div>
        </div>
        <div className='portfoliodashboard-wrapper middle'>
          <div className='portfoliodashboard-container middle'>
            <div className='portfoliodashboard__tablet-first'>
              <PortfolioList />
            </div>
            <div className='portfoliodashboard__tablet-second'>
              <Watchlist />
              <PortfolioOverview />
            </div>
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
