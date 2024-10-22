import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"
import Pesquisa from "./pesquisa"

const Tableentradas = () =>{
    return(
    <>
        <div className="campo">
            <Pesquisa/>
            <div className="div2">
            <h2>Entradas</h2>
                <Link to='/tableentradas'> <button className="botaoRelatorio mb-3">Entradas</button></Link>
                <Link to='/tablesaidas'> <button className="botaoRelatorio mb-3">Saidas</button></Link>
            
                <table className="table">
                    <thead>
                        <tr>
                            <th  className="p-2">Categoria</th>
                            <th  className="p-2">Preço</th>
                            <th  className="p-2">Data</th>
                            <th  className="p-2">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td  className="p-2">Salário</td>
                            <td  className="p-2">800,00</td>
                            <td  className="p-2">20/09/2024</td>
                            <td  className="p-2">''</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default Tableentradas