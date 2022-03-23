import React from 'react'
import './Banner.scss'

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='banner__text-wrapper'>
          <div>
            <h2 className='banner__header'>StockPile</h2>
            <p className='banner__tagline'>Get Your Edge On The Market Today</p>
          </div>
          <div className='banner__subheader--tablet-wrapper'>
            <div className='banner__subheader-wrapper'>
              <img src={''} />
              <p>Get the tool you need to beat the market</p>
            </div>
            <div className='banner__subheader-wrapper'>
              <img src={''} />
              <p>Trade like the pros</p>
            </div>
          </div>
        </div>

        <div className='banner__img-wrapper'>
          <img
            className='banner__img'
            src={
              'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
          />
        </div>
      </section>
    </>
  )
}

export default Banner
