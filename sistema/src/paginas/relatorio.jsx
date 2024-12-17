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
            <div className="campo"  style={{ overflow: 'scroll' }}>
                <Pesquisa />
                <div className="div3">
                    <h2>Entradas</h2>
                    <Link to="/tableentradas">
                        <button className="botaoRelatorio mb-1">Entradas</button>
                    </Link>
                    <Link to="/tablesaidas">
                        <button className="botaoRelatorio mb-1">Saidas</button>
                    </Link>
                </div>
                <div className="div2">
                    <table className="table">
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
                            {entradas.map((entradas) => (
                                <tr key={entradas.id}>
                                    <th scope="row" className="v-a">{entradas.id}</th>
                                    <td className="v-a">{entradas.categoria}</td>
                                    <td className="v-a">{entradas.preco}</td>
                                    <td className="v-a">{new Date(entradas.dataEntrada).toLocaleDateString('pt-BR', {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric"
                                    })}</td>
                                    <td className="v-a">
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
                                    <td className="v-a"><Link to={`/updateentrada/${entradas.id}`} className="btn btn-primary mb-2 mt-2 align-middle">modificar</Link></td>
                                    <td className="v-a"><button onClick={e => Handledelete(entradas.id)} className="btn btn-danger mb-2 mt-2 align-middle">deletar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
    function Handledelete (id) {
        const confirm = window.confirm('Deseja apagar o dado?')
        if (confirm){
            axios.delete('http://localhost:3005/todasentradas/' + id)
            .then(res =>{
                alert('dado apagado com sucesso!')
                window.location.reload()
            })
        }
    }
}

export default Relatorio