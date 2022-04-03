import React from 'react'
import { Link } from 'react-router-dom'
import './AccountHeader.scss'

const AccountHeader = () => {
  return (
    <section className='dashboard__header'>
      <div className='dashboard__header-container'>
        <div className='dashboard__header-wrapper'>
          <Link className='dashboard__header--link' to={'/portfoliopro'}>
            PortfolioPro Buy/Sell
          </Link>
          <Link
            className='dashboard__header--link'
            to={'/portfolioprodashboard'}
          >
            PortfolioPro Dashboard
          </Link>
          <Link to='/traderpro' className='dashboard__header--link'>
            TraderPro Buy/Sell
          </Link>
          <Link className='dashboard__header--link'>TraderPro Dashboard</Link>
          <Link to={'/social'} className='dashboard__header--link'>
            Social Dashboard
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AccountHeader
