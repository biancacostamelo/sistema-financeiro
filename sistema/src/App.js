import Entradas from './paginas/entradas.jsx'
import Sidebar from './components/sidebar.jsx'
import React from 'react'
import Dashboard from './paginas/dashboard.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Saidas from './paginas/saidas.jsx'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/Entradas'>
            <Entradas />
          </Route>
          <Route path='/Saidas'>
            <Saidas />
          </Route>
          <Route path='/'>
            <Dashboard />
          </Route>
          
        </Switch>
      </Router>
    </>

  )
}

export default App