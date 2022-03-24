import React from 'react'
import './TraderProInfo.scss'

const TraderProInfo = () => {
  return (
    <>
      <section className='info'>
        <div className='info__text-wrapper'>
          <div>
            <h2 className='info__header'>TraderPro</h2>
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
                'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              }
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default TraderProInfo
