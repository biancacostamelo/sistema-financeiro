import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import '../css/style.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

const Sidebar = () => {
    useEffect(() => {
        const menuItems = document.querySelectorAll('.areaMenu');

        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', function (event) {

                menuItems.forEach(menuItem => {
                    menuItem.classList.remove("active");
                })

                event.currentTarget.classList.add("active")
            });
        });
    }, []);

    return (
        <>
            <div id="sidebar">
                <div className="menu">
                    <div className="areaMenu pb-2 pt-2 pl-1" >
                        <Link to='/Entradas'><button className="areaMenu">● Entradas</button></Link>
                    </div>
                    <div className="areaMenu pb-2 pt-2 pl-1" >
                        <Link to='/Saidas'><button className="areaMenu">● Saidas</button></Link>
                    </div>
                    <div className="areaMenu pb-2 pt-2 pl-1" >
                        <Link to='/Dashboard'><button className="areaMenu">● Dashboard</button> </Link>
                    </div>
                    <div className="areaMenu pb-2 pt-2 pl-1" >
                        <button className="areaMenu">
                            <NavDropdown title="● Relatório" id="navbarScrollingDropdown">
                                <Link to='/Relatorio'>
                                    <NavDropdown.Item> <Link to='/Relatorio'>o Relatorio</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link to='/tableentradas'>o Entradas</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link to='/tablesaidas'>o Saídas</Link></NavDropdown.Item>
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