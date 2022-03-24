import React from 'react'
import { Link } from 'react-router-dom'
import './HomeComponent.scss'

const HomeComponent = () => {
  return (
    <>
      <section className='banner'>
        <header className='nav'>
          <div className='nav__tablet-wrapper'>
            <Link to='/home' className='nav__link'>
              <h2 className='nav__header'>SP</h2>
            </Link>
            <Link className='nav__link' to='/features'>
              <p className='nav__link--text'>FEATURES</p>
            </Link>
            <Link className='nav__link' to='/pricing'>
              <p className='nav__link--text'>PRICING</p>
            </Link>
          </div>
          <Link to='/login' className='nav__link'>
            <p className='nav__link--text'>LOGIN</p>
          </Link>
        </header>
        <img
          className='banner__img'
          src={
            'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          }
        />
        <div className='banner__text-wrapper'>
          <div>
            <h2 className='banner__header'>StockPile</h2>
            <p className='banner__tagline'>Get Your Edge On The Market Today</p>
          </div>
          <div className='banner__subheader--tablet-wrapper'>
            <div className='banner__subheader-wrapper'>
              {/* <img src={''} /> */}
              <p className='banner__text'>
                Get the tool you need to beat the market
              </p>
            </div>
            <div className='banner__subheader-wrapper'>
              {/* <img src={''} /> */}
              <p className='banner__text'>Trade like the pros</p>
            </div>
            <div className='banner__subheader-wrapper'>
              {/* <img src={''} /> */}
              <p className='banner__text'>Trade and Track Any Stock</p>
            </div>
          </div>
          <button className='banner__button'>Sign Up Now!</button>
        </div>
      </section>
    </>
  )
}

export default HomeComponent
