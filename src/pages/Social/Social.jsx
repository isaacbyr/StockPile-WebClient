import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Friends from '../../components/Friends/Friends'
import AccountHeader from '../../components/AccountHeader/AccountHeader'
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
          <Friends />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Social
