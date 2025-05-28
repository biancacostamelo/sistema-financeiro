import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"
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
            <div className="campo" style={{ overflow: 'scroll' }}>
                <div className="div3">
                    <h2>Saídas</h2>
                </div>
                <div className="div2">
                    <table className="table" >
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Data</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Modificar</th>
                                <th scope="col">Deletar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {saidas.map((saidas) => (
                                <tr key={saidas.id}>
                                    <th scope="row" className="v-a">{saidas.id}</th>
                                    <td className="v-a">{saidas.categoria}</td>
                                    <td className="v-a">{saidas.preco}</td>
                                    <td className="v-a">{new Date(saidas.dataSaidas).toLocaleDateString('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })}</td>
                                    <td className="v-a">
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
                                    <td className="v-a"><Link to={`/update/${saidas.id}`} className="btn btn-primary mb-2 mt-2 align-middle">modificar</Link></td>
                                    <td className="v-a"><button onClick={e => Handledelete(saidas.id)} className="btn btn-danger mb-2 mt-2 align-middle">deletar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
    function Handledelete(id) {
        const confirma = window.confirm('Deseja apagar o dado?')
        if (confirma) {
            axios.delete('http://localhost:3005/todassaidas/' + id)
                .then(res => {
                    alert('dado apagado com sucesso!')
                    window.location.reload()
                })
        }
    }
}

export default Tablesaidas