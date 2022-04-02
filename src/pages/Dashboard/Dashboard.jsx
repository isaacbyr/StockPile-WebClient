import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import LeftStockChart from '../../components/LeftStockChart/LeftStockChart'
import RightStockChart from '../../components/RightStockChart/RightStockChart'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className='dashboard__charts'>
        <LeftStockChart />
        <RightStockChart />
      </section>
      <Footer />
    </>
  )
}

export default Dashboard
