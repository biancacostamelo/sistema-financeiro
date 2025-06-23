import React, { useEffect, useState } from "react"
import axios from "axios"
import Pesquisa from "../components/pesquisa"
import { Bar, Pie, Line } from "react-chartjs-2"
import { format } from "date-fns"
import "chartjs-plugin-datalabels"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartColumn, faChartLine, faChartPie, faChartBar } from "@fortawesome/free-solid-svg-icons"
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from "chart.js"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement)

const Dashboard = () => {
    const [topGastos, setTopgastos] = useState([])
    const [topCategorias, setTopcategorias] = useState([])
    const [tipoPag, setTipopag] = useState([])
    const [gastostempo, setGastostempo] = useState([])
    const [saldototal, setSaldototal] = useState([])
    const [saidastotais, setSaidastotais] = useState([])
    const [entradas, setEntradas] = useState([])

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const fetchData = async () => {
        try {
            const params = { startDate, endDate }
            const [gastosResponse, categoriasResponse, tipoPagResponse, gastostempoResponse, saldoResponse, saidasResponse, entradasResponse] = await Promise.all([
                axios.get('http://localhost:3005/topgastos', { params }),
                axios.get('http://localhost:3005/topgastosporcategoria', { params }),
                axios.get('http://localhost:3005/gastosportipopagamento', { params }),
                axios.get('http://localhost:3005/gastosaolongodotempo', { params }),
                axios.get('http://localhost:3005/saldototal', { params }),
                axios.get('http://localhost:3005/saidastotais', { params }),
                axios.get('http://localhost:3005/gastosedespesas', { params })
            ])

            setTopgastos(gastosResponse.data)
            setTopcategorias(categoriasResponse.data)
            setTipopag(tipoPagResponse.data)
            setGastostempo(gastostempoResponse.data)
            setSaldototal(saldoResponse.data)
            setSaidastotais(saidasResponse.data)
            setEntradas(entradasResponse.data)

            console.log(entradasResponse.data)
        } catch (error) {
            alert('Erro ao buscar dados filtrados')
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchData = () => {
            axios.get('http://localhost:3005/topgastos')
                .then((resposta) => {
                    setTopgastos(resposta.data)
                })
                .catch(() => {
                    alert('erro ao buscar dados')
                })
        }
        fetchData()
    }, [])


    const topProdutosGastos = {
        labels: topGastos.map(item => item.categoria),
        datasets: [
            {
                label: 'Categoria',
                data: topGastos.map(item => item.preco),
                backgroundColor: [
                    'rgba(0, 51, 102, 1)',
                    'rgba(18, 72, 106)',
                    'rgba(54, 114, 114)',
                    'rgba(72, 135, 118)',
                    'rgba(126, 198, 130)',
                    'rgba(144, 219, 134)',
                    'rgb(158, 221, 174)'
                ],
                borderColor: [
                    'rgba(0, 51, 102, 1)',
                    'rgba(18, 72, 106)',
                    'rgba(54, 114, 114)',
                    'rgba(72, 135, 118)',
                    'rgba(126, 198, 130)',
                    'rgba(144, 219, 134)',
                    'rgba(43, 253, 95)'
                ],
                borderWidth: 1
            }
        ]
    }

    const topGastosCategoria = {
        labels: topCategorias.map(item2 => item2.categoria),
        datasets: [
            {
                label: 'Gastos por Categoria',
                data: topCategorias.map(item2 => item2.total),
                backgroundColor: [
                    'rgba(0, 51, 102)',
                    'rgba(18, 72, 106)',
                    'rgba(72, 135, 118)',
                    'rgba(126, 198, 130)',
                    'rgba(144, 219, 134)',
                    'rgba(160, 245, 149)'
                ],
                borderColor: [
                    'rgba(0, 51, 102)',
                    'rgba(18, 72, 106)',
                    'rgba(72, 135, 118)',
                    'rgba(126, 198, 130)',
                    'rgba(144, 219, 134)',
                    'rgba(144, 219, 134)'
                ],
                borderWidth: 1
            }
        ]
    }

    const topGastosPag = {
        labels: tipoPag.map(item3 => item3.tipoPagamento),
        datasets: [
            {
                label: 'Gastos por Tipo de Pagamento',
                data: tipoPag.map(item3 => item3.total),
                backgroundColor: [
                    'rgba(0, 51, 102, 0.500)',
                    'rgba(0, 51, 102, 0.995)',
                    'rgba(0, 51, 102, 0.849)',
                    'rgba(0, 51, 102, 0.705)',
                    'rgba(0, 51, 102, 0.534)'
                ],
                borderColor: '#fff',
                borderWidth: 3
            }
        ]
    }

    const Gastosaolongodotempo = {
        labels: gastostempo.map(item4 => format(new Date(item4.dataSaidas), 'dd/MM/yyyy')),
        datasets: [
            {
                label: 'Gastos ao Longo do Tempo',
                data: gastostempo.map(item4 => item4.total),
                backgroundColor: 'rgba(144, 219, 134)',
                borderColor: '#003366',
                borderWidth: 1,
                tension: 0.4
            }
        ]
    }

    return (
        <div className="campo">
            <Pesquisa />
            <div className="dados pt-4 w-100">
                <div className="row mb-4 w-60">
                    <div className="col-xl-6 align-items-center d-flex"><h2>Dashboard</h2></div>
                    <div className="col-xl-6 filtroDashboard">
                        <div>
                            <label>Data Início</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div>
                            <label>Data Fim</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <button onClick={fetchData} className="btn mt-4" style={{ backgroundColor: '#003366', color: '#fff' }}>Filtrar</button>
                    </div >
                    <div className="col-md-4">
                        <div className="border  mt-4 p-3 d-flex align-items-center" style={{ width: '96%' }}>
                            <FontAwesomeIcon icon={faCircleDollarToSlot} style={{ color: '#003366', height: '35px', marginRight: '20px', marginLeft: '20px' }} />
                            <div>
                                <h6 style={{ color: '#003366', margin: 0 }}>Saldo total</h6>
                                {saldototal.length > 0 && saidastotais.length > 0 ? (
                                    <p style={{ fontSize: '15pt', margin: 0 }}>
                                        ${saldototal[0]['SUM(preco)'] - saidastotais[0]['sum(preco)']}
                                    </p>
                                ) : (
                                    <p style={{ margin: 0 }}>Não há dados suficientes.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border  mt-4 p-3 d-flex align-items-center" style={{ width: '96%' }}>
                            <FontAwesomeIcon icon={faCircleDollarToSlot} style={{ color: '#003366', height: '35px', marginRight: '20px', marginLeft: '20px' }} />
                            <div>
                                <h6 style={{ color: '#003366', margin: 0 }}>Saldo total</h6>
                                {saldototal.length > 0 && saidastotais.length > 0 ? (
                                    <p style={{ fontSize: '15pt', margin: 0 }}>
                                        ${saldototal[0]['SUM(preco)'] - saidastotais[0]['sum(preco)']}
                                    </p>
                                ) : (
                                    <p style={{ margin: 0 }}>Não há dados suficientes.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border  mt-4 p-3 d-flex align-items-center" style={{ width: '96%' }}>
                            <FontAwesomeIcon icon={faCircleDollarToSlot} style={{ color: '#003366', height: '35px', marginRight: '20px', marginLeft: '20px' }} />
                            <div>
                                <h6 style={{ color: '#003366', margin: 0 }}>Saldo total</h6>
                                {saldototal.length > 0 && saidastotais.length > 0 ? (
                                    <p style={{ fontSize: '15pt', margin: 0 }}>
                                        ${saldototal[0]['SUM(preco)'] - saidastotais[0]['sum(preco)']}
                                    </p>
                                ) : (
                                    <p style={{ margin: 0 }}>Não há dados suficientes.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dados mb-3 pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 mb-3">
                            <div className="border2 p-4">
                                <div className="d-flex">
                                    <h5 style={{ marginRight: '8px' }}>Total de gastos por data</h5>
                                    <FontAwesomeIcon icon={faChartLine} color='#003366' />
                                </div>
                                <div style={{ height: '280px', width: '100%' }}>
                                    <Line data={Gastosaolongodotempo} options={{ responsive: true, maintainAspectRatio: false }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-3">
                            <div className="border2 p-4">
                                {entradas.map((e) => (
                                    <>
                                        <div className="row py-1">
                                            <div className="col-2 d-flex justify-content-center align-items-center">
                                                <span>{e.id}</span>
                                            </div>
                                            <div className="col-6 flex-column d-flex justify-content-center">
                                                <span>{e.categoria}</span>
                                                <p className="text-secondary p-0 m-0">
                                                    {new Date(e.data).toLocaleDateString('pt-BR')}
                                                </p>
                                            </div>
                                            <div className="col-4 d-flex justify-content-center align-items-center">
                                                {e.tipo === 'despesa' ?
                                                    <span className="text-danger">- R${e.preco}</span>
                                                    :
                                                    <span className="text-success">+ R${e.preco}</span>
                                                }
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-4 mb-3">
                            <div className="border2 p-4">
                                <div className="d-flex">
                                    <h5 style={{ marginRight: '8px' }}>Gastos por Tipo de Pagamento</h5>
                                    <FontAwesomeIcon icon={faChartPie} color='#003366' />
                                </div>
                                <div style={{ height: '280px', width: '100%' }}>
                                    <Pie data={topGastosPag} options={{ responsive: true, maintainAspectRatio: false }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 mb-3">
                            <div className="border2 p-3">
                                <div className="d-flex">
                                    <h5 style={{ marginRight: '8px' }}>Top 5 maiores gastos</h5>
                                    <FontAwesomeIcon icon={faChartBar} color='#003366' />
                                </div>
                                <div style={{ height: '280px', width: '100%' }}>
                                    <Bar data={topProdutosGastos} options={{ responsive: true, maintainAspectRatio: false, indexAxis: 'y' }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 mb-3">
                            <div className="border2 p-3">
                                <div className="d-flex">
                                    <h5 style={{ marginRight: '8px' }}>Gastos por Categoria</h5>
                                    <FontAwesomeIcon icon={faChartColumn} color='#003366' />
                                </div>
                                <div style={{ height: '280px', width: '100%' }}>
                                    <Bar data={topGastosCategoria} options={{ responsive: true, maintainAspectRatio: false }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="dados">
                <div className="row">
                    <div className="col-xxl-12" style={{ width: '360px' }}>
                        <div className="border p-3">
                            <div className="d-flex">
                                <h5 style={{ marginRight: '8px' }}>Gastos por Categoria</h5>
                                <FontAwesomeIcon icon={faChartColumn} color='#003366' />
                            </div>
                            <div style={{ height: '280px', width: '100%' }}>
                                <Bar data={topGastosCategoria} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> */}
        </div>
    )
}

export default Dashboard