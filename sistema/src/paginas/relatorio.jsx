import React from "react"
import Pesquisa from "../components/pesquisa"
import { Link } from "react-router-dom/cjs/react-router-dom"

const Relatorio = () => {
    return (
        <div className="campo">
            <Pesquisa/>
            <div className="div2">
            <h2>Relatório</h2>
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
                            <td  className="p-2">Bianca</td>
                            <td  className="p-2">19</td>
                            <td  className="p-2">Brasil</td>
                            <td  className="p-2">Brasil</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Relatorio