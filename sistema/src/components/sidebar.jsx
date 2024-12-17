import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"
import { useEffect } from "react"
import { faPlusCircle, faMinusCircle, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/style.css'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Sidebar = () => {
    useEffect(() => {
        const menuItems = document.querySelectorAll('.areaMenu')

        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', function (event) {
                menuItems.forEach(menuItem => {
                    menuItem.classList.remove("active")
                })
                event.currentTarget.classList.add("active")
            })
        })
    }, [])

    return (
        <>
            <div id="sidebar">
                <div className="menu">
                    <div className="areaMenu pb-2 pt-2 pl-1" >
                        <Link to='/Entradas' className="Link">
                            <button className="areaMenu">
                                <FontAwesomeIcon icon={faPlusCircle} color="#003366" style={{ marginRight: '5px', fontSize: '16px' }} />
                                Entradas
                            </button>
                        </Link>
                    </div>
                    <div className="areaMenu pb-2 pt-2 pl-1" >
                        <Link to='/Saidas' className="Link">
                            <button className="areaMenu">
                                <FontAwesomeIcon icon={faMinusCircle} color="#003366" style={{ marginRight: '5px', fontSize: '16px' }} />
                                Saidas
                            </button>
                        </Link>
                    </div>
                    <div className="areaMenu pb-2 pt-2 pl-1" >
                        <Link to='/Dashboard' className="Link">
                            <button className="areaMenu">
                                <FontAwesomeIcon icon={faChartSimple} color="#003366" style={{ marginRight: '5px', fontSize: '16px' }} />
                                Dashboard
                            </button>
                        </Link>
                    </div>
                    <div className="areaMenu pb-2 pt-2 pl-1" >
                        <button className="areaMenu">
                            <NavDropdown title="Relatório" id="navbarScrollingDropdown" className="anavbar">
                                <Link to='/Relatorio' className="Link">
                                    <NavDropdown.Item> <Link to='/tableentradas'>• Entradas</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link to='/tablesaidas'>• Saídas</Link></NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar