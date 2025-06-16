import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"

const Tableentradas = () => {

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

    const [startData, setStartData] = useState('')
    const [endData, setEndData] = useState('')
    const params = { startData, endData }

    const Filtrar = () => {
        if (startData === '' || endData === '') {
            alert('Preencha os campos de data')
            return
        }
        axios.get('http://localhost:3005/filtroreceitas', { params })
            .then((resposta) => {
                setEntradas(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar dados')
            })
    }
    return (
        <>
            <div className="campo overflow mx-52">
                <div className="div3">
                    <h2>Tabela de Entradas</h2>
                </div>
                <div className="div3 filtroDashboard">
                            <div>
                                <label>Data Início</label>
                                <input
                                    type="date"
                                    value={startData}
                                    onChange={(e) => setStartData(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <label>Data Fim</label>
                                <input
                                    type="date"
                                    value={endData}
                                    onChange={(e) => setEndData(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <button onClick={Filtrar} className="btn mt-4" style={{ backgroundColor: '#003366', color: '#fff' }}>Filtrar</button>
                    </div >
                {/* <div className="div3 filtroData ">
                    <span>Filtrar</span>
                    <div className="position-relative">
                        <label htmlFor="startData" className="label">Data começo</label>
                        <input type="date" className="input2" name="startData" value={startData} onChange={(e) => setStartData(e.target.value)} />
                    </div>
                    <p>até</p>
                    <div className="position-relative">
                        <label htmlFor="endData" className="label">Data final</label>
                        <input type="date" className="input2" name="endData" value={endData} onChange={(e) => setEndData(e.target.value)} />
                    </div>
                    <button className="botao2" onClick={Filtrar}>filtrar</button>
                </div> */}
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
                                    <td className="v-a fw-bolder">{entradas.categoria}</td>
                                    <td className="v-a text-success fw-medium">R$ {entradas.preco}</td>
                                    <td className="v-a">{new Date(entradas.dataEntrada).toLocaleDateString('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
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
                                    <td className="v-a">
                                        <Link to={`/updateentrada/${entradas.id}`} className="mb-2 mt-2 align-middle">
                                            <FontAwesomeIcon icon={faPenToSquare} style={{ color: '#204A77', height: '18px' }} />
                                        </Link>
                                    </td>
                                    <td className="v-a">
                                        <button onClick={e => Handledelete(entradas.id)} className="btn mb-2 mt-2 align-middle">
                                            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#E9332E', height: '18px' }} />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
    function Handledelete(id) {
        const confirm = window.confirm('Deseja apagar o dado?')
        if (confirm) {
            axios.delete('http://localhost:3005/todasentradas/' + id)
                .then(res => {
                    alert('dado apagado com sucesso!')
                    window.location.reload()
                })
        }
    }
}

export default Tableentradas