import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"
import Pesquisa from "./pesquisa"
import axios from "axios"

const Tablesaidas = () => {

    const [saidas, setSaidas] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3005/todassaidas')
            .then((resposta) => {
                setSaidas(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar dados')
            })
    }, [])

    return (
        <>
            <div className="">
                <Pesquisa />
                <div className="div3">
                    <h2>Entradas</h2>
                    <Link to='/tableentradas'> <button className="botaoRelatorio mb-3">Entradas</button></Link>
                    <Link to='/tablesaidas'> <button className="botaoRelatorio mb-3">Saidas</button></Link>
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
                            {saidas.map((saidas) => (
                                <tr key={saidas.id}>
                                    <td className="pr-5">{saidas.categoria}</td>
                                    <td className="pr-5">{saidas.preco}</td>
                                    <td className="pr-5">{new Date(saidas.dataSaidas).toLocaleDateString('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })}</td>
                                    <td className="pr-5">
                                        <div
                                            style={{
                                                maxWidth: "220px", // Limita a largura
                                                maxHeight: "100px", // Limita a altura, ajustando conforme necessário
                                                whiteSpace: "normal", // Permite que o texto quebre em várias linhas
                                                overflowY: "auto", // Adiciona a rolagem vertical
                                                textOverflow: "ellipsis", // Trunca o texto se necessário
                                                display: "block", // Garante que o conteúdo tenha comportamento de bloco
                                            }}
                                        >
                                            {saidas.descricao}
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

export default Tablesaidas