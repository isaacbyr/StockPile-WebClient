import React from 'react'
import './PortfolioProInfo.scss'

const PortfolioProInfo = () => {
  return (
    <section className='info'>
      <div className='info__text-wrapper'>
        <div>
          <h2 className='info__header'>PortfolioPro</h2>
          <p className='info__tagline'>Get Your Edge On The Market Today</p>
        </div>
        <div className='info__subheader--tablet-wrapper'>
          <div className='info__subheader-wrapper'>
            <img src={''} />
            <p>Get the tool you need to beat the market</p>
          </div>
          <div className='info__subheader-wrapper'>
            <img src={''} />
            <p>Trade like the pros</p>
          </div>
        </div>
        <button className='info__button'>View Pricing</button>
      </div>

      <div className='info__img-wrapper'>
        <div className='info__img--overlay'>
          <img
            className='info__img'
            src={
              'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
          />
        </div>
      </div>
    </section>
  )
}

export default PortfolioProInfo
