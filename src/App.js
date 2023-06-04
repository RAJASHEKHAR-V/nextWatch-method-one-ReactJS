import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
    </Switch>
  </>
)

export default App
