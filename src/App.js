import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import FeaturesPage from './pages/FeaturesPage/FeaturesPage'
import PricingPage from './pages/PricingPage/PricingPage'
import PortfolioProPage from './pages/PortfolioProPage/PortfolioProPage'
import TraderProPage from './pages/TraderProPage/TraderProPage'
import PortfolioProDashboard from './pages/PortfolioProDashboard/PortfolioProDashboard'
import TraderProDashboard from './pages/TraderProDashboard/TraderProDashboard'
import Dashboard from './pages/Dashboard/Dashboard'
import Social from './pages/Social/Social'
import LoginPage from './pages/LoginPage/LoginPage'
import UserProfile from './pages/UserProfile/UserProfile'
import { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
  state = {
    isAuth: false,
    redirect: false,
  }

  handleLogin = (username, password) => {
    console.log(username)
    console.log(password)

    var params = new URLSearchParams()
    params.append('grant_type', 'password')
    params.append('username', username)
    params.append('password', password)

    axios
      .post('http://localhost:44317/token', params)
      .then((response) => {
        var access_token = response.data.access_token
        const config = {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
        axios
          .get('http://localhost:44317/api/user', config)
          .then((res) => {
            console.log(res)
            this.setState({ isAuth: true })
            this.setState({ redirect: true })
            toast.success(`Welcome Back ${res.data[0].FirstName}!`)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <ToastContainer />

        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/features' component={FeaturesPage} />
            <Route path='/pricing' component={PricingPage} />
            <Route path='/portfoliopro/:id'>
              {this.state.isAuth ? (
                <PortfolioProPage />
              ) : (
                <Redirect to='/login' />
              )}
            </Route>
            <Route path='/portfoliopro'>
              {this.state.isAuth ? (
                <PortfolioProPage />
              ) : (
                <Redirect to='/login' />
              )}
            </Route>
            <Route path='/traderpro/:id'>
              {this.state.isAuth ? <TraderProPage /> : <Redirect to='/login' />}
            </Route>
            <Route path='/traderpro' component={TraderProPage}>
              {this.state.isAuth ? <TraderProPage /> : <Redirect to='/login' />}
            </Route>
            <Route path='/traderprodashboard'>
              {this.state.isAuth ? <TraderProPage /> : <Redirect to='/login' />}
            </Route>
            <Route path='/portfolioprodashboard'>
              {this.state.isAuth ? (
                <PortfolioProPage />
              ) : (
                <Redirect to='/login' />
              )}
            </Route>
            <Route path='/profile/:id'>
              {this.state.isAuth ? <UserProfile /> : <Redirect to='/login' />}
            </Route>
            <Route path='/dashboard'>
              {this.state.isAuth ? <Dashboard /> : <Redirect to='/login' />}
            </Route>
            <Route path='/social'>
              {this.state.isAuth ? <Social /> : <Redirect to='/login' />}
            </Route>
            <Route path='/login'>
              {this.state.redirect ? (
                <Redirect to='/dashboard' />
              ) : (
                <LoginPage handleLogin={this.handleLogin} />
              )}
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
