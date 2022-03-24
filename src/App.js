import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import FeaturesPage from './pages/FeaturesPage/FeaturesPage'
import PricingPage from './pages/PricingPage/PricingPage'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/features' component={FeaturesPage} />
          <Route path='/pricing' component={PricingPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
