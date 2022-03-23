import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <>
      <section className='nav'>
        <div className='nav__tablet-wrapper'>
          <h2 className='nav__header'>SP</h2>

          <p className='nav__link'>HOME</p>
          <p className='nav__link'>COMPONENTS</p>
          <p className='nav__link'>LOGIN</p>
        </div>
      </section>
    </>
  )
}

export default Navbar
