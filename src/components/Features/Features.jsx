import React from 'react'
import './Features.scss'
import TraderPro from '../../assets/Images/TraderPro.PNG'
import PortfolioPro from '../../assets/Images/PortfolioPro.PNG'
import ChartArrow from '../../assets/Icons/chart_arrow_icon.png'
import FriendsIcon from '../../assets/Icons/friends_icon.png'
import Scales from '../../assets/Icons/scales_icon.png'
import Realtime from '../../assets/Icons/realtime_icon.png'
import AlgoPro from '../../assets/Images/AlgoPro.PNG'
import Live from '../../assets/Icons/live_icon.png'
import Past from '../../assets/Icons/past_icon.png'
import Dollar from '../../assets/Icons/dollar_blue_icon.png'
import SaveLater from '../../assets/Icons/savelate_icon.png'
import BackTest from '../../assets/Icons/backtest_icon.png'
import Trending from '../../assets/Icons/trending_chart.png'

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
                  <img className='feature__icon' src={Scales} />
                  <p className='feature__subheader--text'>
                    Manage your portfolio
                  </p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img className='feature__icon' src={FriendsIcon} />
                  <p className='feature__subheader--text'>
                    Trade with your friends
                  </p>
                </div>
              </div>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img className='feature__icon' src={Realtime} />
                  <p className='feature__subheader--text'>
                    Track stocks in real time
                  </p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img className='feature__icon' src={ChartArrow} />
                  <p className='feature__subheader--text'>
                    View stock charts and data
                  </p>
                </div>
              </div>
            </div>
            <div className='feature__description-wrapper'>
              <p className='feature__description--text'>
                Given a starting amount of $100,000, PortfolioPro allows you to
                buy and sell any stock in the stock market. Get real time
                charting and company data on over 1000 different stocks
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
                  <img src={Live} className='feature__icon' />
                  <p className='feature__subheader--text'>
                    Get live data and prices
                  </p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img src={Scales} className='feature__icon' />
                  <p className='feature__subheader--text'>Manage a portfolio</p>
                </div>
              </div>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img className='feature__icon' src={Realtime} />
                  <p className='feature__subheader--text'>
                    Track stocks in real time
                  </p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img src={Past} className='feature__icon' />
                  <p className='feature__subheader--text'>
                    Practice on past days
                  </p>
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
            <img className='feature__img' src={TraderPro} alt='' />
          </div>
        </div>
        <div className='feature-container'>
          <div className='feature__text-wrapper'>
            <h2 className='feature__header'>AlgoPro</h2>
            <div className='feature__tablet-wrapper'>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img className='feature__icon' src={BackTest} />
                  <p className='feature__subheader--text'>
                    Back-test trading strategies
                  </p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img className='feature__icon' src={SaveLater} />
                  <p className='feature__subheader--text'>
                    Save strategies for later
                  </p>
                </div>
              </div>
              <div>
                <div className='feature__subheader-wrapper'>
                  <img src={Dollar} className='feature__icon' />
                  <p className='feature__subheader--text'>
                    Link to IB trader workstation
                  </p>
                </div>
                <div className='feature__subheader-wrapper'>
                  <img src={Trending} className='feature__icon' />
                  <p className='feature__subheader--text'>
                    Use AlgoPro to trade for you
                  </p>
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
            <img className='feature__img' src={AlgoPro} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
