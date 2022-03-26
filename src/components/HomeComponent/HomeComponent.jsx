import React from 'react'
import { Link } from 'react-router-dom'
import './HomeComponent.scss'

const HomeComponent = () => {
  return (
    <>
      <header className='nav'>
        <div className='nav-wrapper'>
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
        </div>
      </header>
      <section className='home-banner'>
        <div className='home-banner__text-wrapper'>
          <div>
            <h2 className='home-banner__header'>StockPile</h2>
            <p className='home-banner__tagline'>
              Get Your Edge On The Market Today
            </p>
          </div>
          <div className='home-banner__subheader--tablet-wrapper'>
            <div className='home-banner__subheader-wrapper'>
              {/* <img src={''} /> */}
              <p className='home-banner__text'>
                Get the tool you need to beat the market
              </p>
            </div>
            <div className='home-banner__subheader-wrapper'>
              {/* <img src={''} /> */}
              <p className='home-banner__text'>Trade like the pros</p>
            </div>
            <div className='home-banner__subheader-wrapper'>
              {/* <img src={''} /> */}
              <p className='home-banner__text'>Trade and Track Any Stock</p>
            </div>
          </div>
          <button className='home-banner__button'>Sign Up Now!</button>
        </div>
      </section>
    </>
  )
}

export default HomeComponent
