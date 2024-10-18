import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import '../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    useEffect(() => {
        const menuItems = document.querySelectorAll('.areaMenu');

        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', function (event) {

                menuItems.forEach(menuItem => {
                    menuItem.classList.remove("active");
                })

                event.currentTarget.classList.add("active");
            });
        });
    }, []);

    return (
        <>
            <div id="viewport">
                <div className="navbarmenu">
                    <div className="group ml-2 mt-4">
                        <svg className="icon " aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input placeholder="Search" type="search" class="pesquisa mr-5" />
                        <button className="iconMoon"><FontAwesomeIcon icon={faMoon} style={{height:30+'px' , color:'#6F799F'}}/></button>
                        <button className="iconMoon fr"><FontAwesomeIcon icon={faUser} style={{color:'#6F799F', height:25+'px'}}/></button>
                    </div>
                </div>
                <div id="sidebar">
                    <div className="menu">
                        <div className="areaMenu p-3" >
                            <Link to='/Entradas'><button className="areaMenu">● Entradas</button></Link>
                        </div>
                        <div className="areaMenu p-3" >
                            <Link to='/Saidas'><button className="areaMenu">● Saidas</button></Link>
                        </div>
                        <div className="areaMenu p-3" >
                            <Link to='/Dashboard'><button className="areaMenu">● Dashboard</button> </Link>
                        </div>
                        <div className="areaMenu p-3" >
                            <Link to='/Relatorio'><button className="areaMenu">● Relatório</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar