import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <>
      <header className='navbar'>
        <div className='navbar-container'>
          <div className='navbar__tablet-wrapper'>
            <Link to='/home' className='navbar__link'>
              <h2 className='navbar__header'>SP</h2>
            </Link>
            <Link className='navbar__link' to='/features'>
              <p className='navbar__link--text'>FEATURES</p>
            </Link>
            <Link className='navbar__link' to='/pricing'>
              <p className='navbar__link--text'>PRICING</p>
            </Link>
          </div>
          <Link to='/login' className='navbar__link'>
            <p className='navbar__link--text'>LOGIN</p>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar
