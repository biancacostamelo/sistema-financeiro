import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"
import { useEffect } from "react"
import { faPlusCircle, faMinusCircle, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/style.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Sidebar = () => {
    const location = useLocation()
    useEffect(() => {
        const menuItems = document.querySelectorAll('.areaMenu')
        
        menuItems.forEach(menuItem => {
            const path = menuItem.getAttribute('data-path')
            if (location.pathname.includes(path)) {
                menuItem.classList.add('active')
            } else {
                menuItem.classList.remove('active')
            }
        })
    }, [location.pathname])

    const history = useHistory()
    const Sair =()=>{
        history.push('/')
    }

    return (
        <>
            <div id="sidebar" className="d-flex flex-column justify-content-between">
                <div className="menu">
                    <div data-path='/Entradas' className="areaMenu pb-2 pt-2 pl-1" >
                        <Link to='/Entradas' className="Link">
                            <button data-path='/Entradas' className="areaMenu">
                                <FontAwesomeIcon icon={faPlusCircle} color="#003366" style={{ marginRight: '5px', fontSize: '16px' }} />
                                <span id="text-navbar">Entradas</span>
                            </button>
                        </Link>
                    </div>
                    <div data-path='/Saidas' className="areaMenu pb-2 pt-2 pl-1" >
                        <Link to='/Saidas' className="Link">
                            <button data-path='/Saidas' className="areaMenu">
                                <FontAwesomeIcon icon={faMinusCircle} color="#003366" style={{ marginRight: '5px', fontSize: '16px' }} />
                                <span id="text-navbar">Saidas</span>
                            </button>
                        </Link>
                    </div>
                    <div data-path='/Dashboard' className="areaMenu pb-2 pt-2 pl-1" >
                        <Link to='/Dashboard' className="Link">
                            <button data-path='/Dashboard' className="areaMenu">
                                <FontAwesomeIcon icon={faChartSimple} color="#003366" style={{ marginRight: '5px', fontSize: '16px' }} />
                                <span id="text-navbar">Dashboard</span>
                            </button>
                        </Link>
                    </div>
                    <div data-path='/Relatorio' className="areaMenu pb-2 pt-2 pl-1" >
                        <button data-path='/Relatorio' className="areaMenu">
                            <NavDropdown title="Relatório" id="navbarScrollingDropdown" className="anavbar">
                                <Link to='/Relatorio' className="Link">
                                    <NavDropdown.Item> <Link data-path='/tableentradas' to='/tableentradas'>• Entradas</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link data-path='/tablesaidas' to='/tablesaidas'>• Saídas</Link></NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        </button>
                    </div>
                </div>
                <button className="botao mb-3" onClick={Sair}>sair</button>
            </div>
        </>
    )

    
}

export default Sidebar