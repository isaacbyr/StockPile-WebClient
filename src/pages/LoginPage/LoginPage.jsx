import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './LoginPage.scss'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogin(this.state.username, this.state.password)
  }

  render() {
    return (
      <>
        <Navbar />
        <section className='login'>
          <div className='login-container'>
            <h2 className='login__header'>Login</h2>
            <form className='login__form' onSubmit={this.handleSubmit}>
              <div className='login__form-wrapper'>
                <label htmlFor='username' className='login__form--label'>
                  Username
                </label>
                <input
                  type='text'
                  className='login__form--input'
                  name='username'
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder='Enter Username'
                />
              </div>
              <div className='login__form-wrapper'>
                <label htmlFor='password' className='login__form--label'>
                  Password
                </label>
                <input
                  className='login__form--input'
                  type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder='Enter Password'
                />
              </div>
              <button type='submit' className='login__form--button'>
                Login
              </button>
            </form>
            <div className='login__register-wrapper'>
              <p className='login__register--text'>
                Don't have an account?
                <Link className='login__register--link' to={'/register'}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default LoginPage
