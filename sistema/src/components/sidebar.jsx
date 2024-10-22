import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import '../css/style.css'

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
        </>
    )
}

export default Sidebar