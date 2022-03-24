import React from 'react'
import Facebook from '../../assets/Icons/Icon-facebook.svg'
import Twitter from '../../assets/Icons/Icon-twitter.svg'
import Instagram from '../../assets/Icons/Icon-instagram.svg'

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer__tablet-wrapper'>
          <h2 className='footer__header'>Get In Touch</h2>
          <div className='footer__icon-wrapper'>
            <img className='footer__icon' src={Facebook} />
            <img className='footer__icon' src={Twitter} />
            <img className='footer__icon' src={Instagram} />
          </div>
        </div>
        <div className='footer__tablet-wrapper'>
          <div class='footer__title-wrapper'>
            <h2 class='footer__title'>StockPile</h2>
          </div>
          <div class='footer__copyright--wrapper'>
            <p class='footer__copyright--text'>
              Copyright StockPile © 2022 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
