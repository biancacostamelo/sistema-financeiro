import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"
import Pesquisa from "../components/pesquisa"
import axios from "axios"

const Relatorio = () => {
    const [entradas, setEntradas] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3005/todasentradas')
            .then((resposta) => {
                setEntradas(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar dados')
            })
    }, [])

    return (
        <>
            <div className="campo">
                <Pesquisa />
                <div className="div3">
                    <h2>Relatório Entradas</h2>
                    <Link to='/tableentradas'> <button className="botaoRelatorio mb-1">Entradas</button></Link>
                    <Link to='/tablesaidas'> <button className="botaoRelatorio mb-1">Saidas</button></Link>
                </div>
                <div className="div2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="pr-5">Categoria</th>
                                <th className="pr-5">Preço</th>
                                <th className="pr-5">Data</th>
                                <th className="pr-5">Descrição</th>
                                <th className="pr-5">Modificar</th>
                                <th className="pr-5">Deletar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entradas.map((entradas) => (
                                <tr key={entradas.id}>
                                    <td className="pr-5">{entradas.categoria}</td>
                                    <td className="pr-5">{entradas.preco}</td>
                                    <td className="pr-5">{new Date(entradas.dataEntrada).toLocaleDateString('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })}</td>
                                    <td className="pr-5">
                                        <div
                                            style={{
                                                maxWidth: "220px",
                                                whiteSpace: "nowrap",
                                                overflowX: "auto",
                                                textOverflow: "ellipsis",
                                                display: "block"
                                            }}
                                        >
                                            {entradas.descricao}
                                        </div>
                                    </td>
                                    <td className="pr-5"><button className="btn btn-primary mb-2 mt-2 align-middle">modificar</button></td>
                                    <td className="pr-5"><button className="btn btn-danger mb-2 mt-2 align-middle">deletar</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Relatorio