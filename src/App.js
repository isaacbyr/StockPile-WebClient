import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import FeaturesPage from './pages/FeaturesPage/FeaturesPage'
import PricingPage from './pages/PricingPage/PricingPage'
import PortfolioProPage from './pages/PortfolioProPage/PortfolioProPage'
import TraderProPage from './pages/TraderProPage/TraderProPage'
import PortfolioProDashboard from './pages/PortfolioProDashboard/PortfolioProDashboard'
import Dashboard from './pages/Dashboard/Dashboard'
import Social from './pages/Social/Social'

function App() {
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
          <Route
            path='/portfolioprodashboard'
            component={PortfolioProDashboard}
          />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/social' component={Social} />
        </Switch>
      </Router>
    </>
  )
}

export default App
