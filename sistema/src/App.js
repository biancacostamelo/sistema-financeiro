import Entradas from './paginas/entradas.jsx'
import Sidebar from './components/sidebar.jsx'
import React from 'react'
import Dashboard from './paginas/dashboard.jsx'
import Relatorio from './paginas/relatorio.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Saidas from './paginas/saidas.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import Tableentradas from './components/tableentradas.jsx'
import Tablesaidas from './components/tablesaidas.jsx'
import Update from './components/updateSaida.jsx'
import Updateentrada from './components/updateEntrada.jsx'

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
          <Route path='/Relatorio'>
            <Relatorio />
          </Route>
          <Route path='/Tableentradas'>
            <Tableentradas />
          </Route>
          <Route path='/Tablesaidas'>
            <Tablesaidas />
          </Route>
          <Route path='/update/:id'>
            <Update />  
          </Route> 
          <Route path='/updateentrada/:id'>
            <Updateentrada/>  
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