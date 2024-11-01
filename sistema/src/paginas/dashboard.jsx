import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pesquisa from "../components/pesquisa"
import { Bar, Pie, Line } from 'react-chartjs-2'
import { format } from 'date-fns'
import 'chartjs-plugin-datalabels';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const Dashboard = () => {
    const [topGastos, setTopgastos] = useState([])
    const [topCategorias, setTopcategorias] = useState([])
    const [tipoPag, setTipopag] = useState([])
    const [gastostempo, setGastostempo] = useState([])
    const [saldototal, setSaldototal] = useState([])
    const [saidastotais, setSaidastotais] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/topgastos')
            .then((resposta) => {
                setTopgastos(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar dados')
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3005/topgastosporcategoria')
            .then((resposta) => {
                setTopcategorias(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar total por categoria')
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3005/gastosportipopagamento')
            .then((resposta) => {
                setTipopag(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar total por tipo de pagamento')
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3005/gastosaolongodotempo')
            .then((resposta) => {
                setGastostempo(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar total gastos ao longo do tempo')
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3005/saldototal')
            .then((resposta) => {
                setSaldototal(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar saldo total')
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3005/saidastotais')
            .then((resposta) => {
                setSaidastotais(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar saldo total')
            })
    }, [])

    const topProdutosGastos = {
        labels: topGastos.map(item => item.categoria),
        datasets: [
            {
                label: 'Top gastos',
                data: topGastos.map(item => item.preco),
                backgroundColor: [
                    'rgba(7, 19, 192, 0.3)',
                    'rgba(7, 19, 192, 0.25)',
                    'rgba(7, 19, 192, 0.2)',
                    'rgba(7, 19, 192, 0.15)',
                    'rgba(7, 19, 192, 0.1)'

                ],
                borderColor: [
                    'rgba(7, 19, 192, 0.3)',
                    'rgba(7, 19, 192, 0.25)',
                    'rgba(7, 19, 192, 0.2)',
                    'rgba(7, 19, 192, 0.15)',
                    'rgba(7, 19, 192, 0.1)'
                ],
                borderWidth: 1,
            }
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    anchor: 'end', // Anexa o rótulo ao final da barra
                    align: 'end',  // Alinha o rótulo ao final da barra
                    formatter: (value) => value, // Formata o rótulo para mostrar o valor
                    color: 'black'
                }
            }
        }
    }

    const topGastosCategoria = {
        labels: topCategorias.map(item2 => item2.categoria),
        datasets: [
            {
                label: 'Gastos por Categoria',
                data: topCategorias.map(item2 => item2.total),
                backgroundColor: [
                    'rgba(7, 19, 192, 0.1)',
                    'rgba(7, 19, 192, 0.115)',
                    'rgba(7, 19, 192, 0.13)',
                    'rgba(7, 19, 192, 0.145)',
                    'rgba(7, 19, 192, 0.16)',
                    'rgba(7, 19, 192, 0.175)',
                    'rgba(7, 19, 192, 0.19)',
                    'rgba(7, 19, 192, 0.205)',
                    'rgba(7, 19, 192, 0.22)',
                    'rgba(7, 19, 192, 0.235)',
                    'rgba(7, 19, 192, 0.25)',
                    'rgba(7, 19, 192, 0.275)',
                    'rgba(7, 19, 192, 0.3)'
                ],
                borderColor: 'rgba(7, 19, 192, 0.2)',
                borderWidth: 1,
            }
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    anchor: 'end', // Anexa o rótulo ao final da barra
                    align: 'end',  // Alinha o rótulo ao final da barra
                    formatter: (value) => value, // Formata o rótulo para mostrar o valor
                    color: 'black'
                }
            }
        }
    }

    const topGastosPag = {
        labels: tipoPag.map(item3 => item3.tipoPagamento),
        datasets: [
            {
                label: 'Gastos por Tipo de Pagamento',
                data: tipoPag.map(item3 => item3.total),
                backgroundColor: [
                    'rgba(7, 19, 192, 0.3)',
                    'rgba(61, 53, 192, 0.3)',
                    'rgba(115, 87, 192, 0.3)',
                    'rgba(185, 96, 192, 0.3)',
                    'rgba(255, 105, 180, 0.3)'
                ],
                borderColor: [
                    'rgba(255,255,255)'
                ],
                borderWidth: 3,
            }
        ],
        options: {
            plugins: {
                datalabels: {
                    anchor: 'center', // Anexa o rótulo no centro da fatia
                    align: 'center', // Alinha o rótulo no centro
                    formatter: (value) => value, // Formata o rótulo para mostrar o valor
                    color: 'black'
                }
            }
        }
    }

    const Gastosaolongodotempo = {
        labels: gastostempo.map(item4 => format(new Date(item4.dataSaidas), 'dd/MM/yyyy')), // Formato dia/mês/ano
        datasets: [
            {
                label: 'Gastos ao Longo do Tempo',
                data: gastostempo.map(item4 => item4.total),
                backgroundColor: 'rgba(7, 19, 192, 0.2)',
                borderColor: 'rgba(7, 19, 192, 0.2)',
                borderWidth: 1,
                tension: 0.4
            }
        ],
        options: {
            plugins: {
                datalabels: {
                    display: true, // Exibe os rótulos
                    color: 'black'
                }
            }
        }
    }

    return (
        <div className='campo'>
            <Pesquisa />
            <div className='dados pt-4'>
                <div className="row">
                    <div className="col-xl-6" style={{ width: '436px' }}>
                        <div className='border pl-4 pt-3'>
                            <h6>Saldo total</h6>
                            {saldototal.map((e) => <p>{e['SUM(preco)']}</p>)}
                        </div>
                    </div>
                    <div className="col-xl-6" style={{ width: '436px' }}>
                        <div className='border pl-4 pt-3'>
                            <h6>Saldo total</h6>
                            {saidastotais.map((e) => <p>{e['sum(preco)']}</p>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className='dados pb-5 pt-5'>
                <div className="row">
                    <div className="col-xl-4">
                        <div className='border p-4'>
                            <h5>Top 5 maiores gastos</h5>
                            <div style={{ height: '300px', width: '380px' }}>
                                <Bar data={topProdutosGastos} options={{responsive: true, maintainAspectRatio: false, indexAxis: 'y' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className='border p-4'>
                            <h5>Total de gastos por data</h5>
                            <div style={{ height: '300px', width: '380px' }}>
                                <Line data={Gastosaolongodotempo} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className='border p-4'>
                            <h5>Gastos por Tipo de Pagamento</h5>
                            <div style={{ height: '300px', width: '380px' }}>
                                <Pie data={topGastosPag} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dados'>
                <div className="row">
                    <div className="col-xl-12">
                        <div className='border p-3'>
                            <h5 style={{ width: '300px' }}>Gastos por Categoria</h5>
                            <div style={{ height: '300px', width: '380px' }}>
                                <Bar data={topGastosCategoria} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard