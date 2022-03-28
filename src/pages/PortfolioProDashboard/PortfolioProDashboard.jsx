import React from 'react'
import './PortfolioProDashboard.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PortfolioList from '../../components/PortfolioList/PortfolioList'

const PortfolioProDashboard = () => {
  return (
    <>
      <Navbar />
      <section className='portfoliodashboard'>
        <div className='portfoliodashboard-wrapper'>
          <PortfolioList />
          {/* Pie Chart */}
        </div>
        <div className='portfoliodashboard-wrapper'>
          {/*Watchlist */}
          {/* Num Holdings? */}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PortfolioProDashboard
