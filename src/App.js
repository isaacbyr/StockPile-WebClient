import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    isAuth: false,
  }

  handleLogin = (username, password) => {
    console.log(username)
    console.log(password)

    var formData = new FormData()
    formData.append('grant_type', 'password')
    formData.append('username', username)
    formData.append('password', password)

    console.log(formData)
    axios({
      method: 'post',
      url: 'http://localhost:44317/token',
      data: formData,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/features' component={FeaturesPage} />
            <Route path='/pricing' component={PricingPage} />
            <Route path='/portfoliopro/:id' component={PortfolioProPage} />
            <Route path='/portfoliopro' component={PortfolioProPage} />
            <Route path='/traderpro/:id' component={TraderProPage} />
            <Route path='/traderpro' component={TraderProPage} />
            <Route path='/traderprodashboard' component={TraderProDashboard} />
            <Route
              path='/portfolioprodashboard'
              component={PortfolioProDashboard}
            />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/social' component={Social} />
            <Route path='/login'>
              <LoginPage handleLogin={this.handleLogin} />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
