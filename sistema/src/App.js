import Entradas from "./paginas/entradas.jsx";
import Sidebar from "./components/sidebar.jsx";
import React from "react";
import Dashboard from "./paginas/dashboard.jsx";
import Relatorio from "./paginas/relatorio.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saidas from "./paginas/saidas.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Tableentradas from "./components/tableentradas.jsx";
import Tablesaidas from "./components/tablesaidas.jsx";
import Update from "./components/updateSaida.jsx";
import Updateentrada from "./components/updateEntrada.jsx";
import Login from "./paginas/login.jsx";
import Categorias from "./paginas/categorias.jsx";
import Contas from "./paginas/contas.jsx";
import TPPagamento from "./paginas/tpPagamento.jsx";

function LoginPage() {
  return (
    <Login />
  )
}

function LayoutWithSidebar() {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/Entradas' component={Entradas} />
        <Route path='/Saidas' component={Saidas} />
        <Route path='/Relatorio' component={Relatorio} />
        <Route path='/Tableentradas' component={Tableentradas} />
        <Route path='/Tablesaidas' component={Tablesaidas} />
        <Route path='/update/:id' component={Update} />
        <Route path='/updateentrada/:id' component={Updateentrada} />
        <Route path='/Categorias' component={Categorias}/>
        <Route path='/Contas' component={Contas}/>
        <Route path='/TPPagamento' component={TPPagamento}/>
      </Switch>
    </>
  )
}

function AppRoutes() {
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      {/* Todas as outras rotas têm Sidebar */}
      <Route path='/' component={LayoutWithSidebar} />
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
