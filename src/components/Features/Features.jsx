import React from 'react'
import './Features.scss'
import PortfolioPro from '../../assets/Images/PortfolioPro.PNG'
const Features = () => {
  return (
    <>
      <div className='features-banner'>
        <div className='features-banner__title-wrapper'>
          <h2 className='features-banner__title'>Features</h2>
        </div>
      </div>
      <div className='feature'>
        <div className='feature-container'>
          <div className='feature__text-wrapper'>
            <h2 className='feature__header'>PortolioPro</h2>
            <div className='feature__tablet-wrapper'>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>Get real time data</p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>
                    Compare results to friends
                  </p>
                </div>
              </div>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>
                    Track stock in real time
                  </p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>Get real time data</p>
                </div>
              </div>
            </div>
            <div className='feature__description-wrapper'>
              <p className='feature__description--text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita rem accusantium repellendus voluptatum ea illo dolorem
              </p>
            </div>
            <button className='feature__button'>View Pricing</button>
          </div>
          <div className='feature__img-wrapper'>
            <img className='feature__img' src={PortfolioPro} alt='' />
          </div>
        </div>
        <div className='feature-container middle'>
          <div className='feature__text-wrapper middle'>
            <h2 className='feature__header'>TraderPro</h2>
            <div className='feature__tablet-wrapper'>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>Get real time data</p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>
                    Compare results to friends
                  </p>
                </div>
              </div>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>
                    Track stock in real time
                  </p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>Get real time data</p>
                </div>
              </div>
            </div>
            <div className='feature__description-wrapper'>
              <p className='feature__description--text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita rem accusantium repellendus voluptatum ea illo dolorem
              </p>
            </div>
            <button className='feature__button'>View Pricing</button>
          </div>
          <div className='feature__img-wrapper middle'>
            <img className='feature__img' src={PortfolioPro} alt='' />
          </div>
        </div>
        <div className='feature-container'>
          <div className='feature__text-wrapper'>
            <h2 className='feature__header'>AlgoPro</h2>
            <div className='feature__tablet-wrapper'>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>Get real time data</p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>
                    Compare results to friends
                  </p>
                </div>
              </div>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>
                    Track stock in real time
                  </p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img />
                  <p className='feature__subheader--text'>Get real time data</p>
                </div>
              </div>
            </div>
            <div className='feature__description-wrapper'>
              <p className='feature__description--text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita rem accusantium repellendus voluptatum ea illo dolorem
              </p>
            </div>
            <button className='feature__button'>View Pricing</button>
          </div>
          <div className='feature__img-wrapper'>
            <img className='feature__img' src={PortfolioPro} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
