import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pesquisa from "../components/pesquisa"
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2'
import { format } from 'date-fns'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);





const Dashboard = () => {
    const [topGastos, setTopgastos] = useState([])
    const [topCategorias, setTopcategorias] = useState([])
    const [tipoPag, setTipopag] = useState([])
    const [gastostempo, setGastostempo] = useState([])

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

    const topProdutosGastos = {
        labels: topGastos.map(item => item.categoria),
        datasets: [
            {
                label: 'Top gastos',
                data: topGastos.map(item => item.preco),
                backgroundColor:[
                    'rgba(7, 19, 192, 0.3)',
                    'rgba(7, 19, 192, 0.3)',
                    'rgba(7, 19, 192, 0.2)',
                    'rgba(7, 19, 192, 0.2)',
                    'rgba(7, 19, 192, 0.1)',
                    'rgba(7, 19, 192, 0.1)'
                ],
                borderColor: 'rgba(7, 19, 192, 0.2)',
                borderWidth: 1,
            }
        ]
    }

    const topGastosCategoria = {
        labels: topCategorias.map(item2 => item2.categoria),
        datasets: [
            {
                label: 'Gastos por Categoria',
                data: topCategorias.map(item2 => item2.total),
                backgroundColor: 'rgba(7, 19, 192, 0.2)',
                borderColor: 'rgba(7, 19, 192, 0.2)',
                borderWidth: 1,
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
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1,
            }
        ]
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
        ]
    }

    return (
        <div className='campo'>
            <Pesquisa />
            <div className='dados pt-4'>
                <div className="row">
                    <div className="col-xl-6" style={{ width: '436px' }}>
                        <div className='border pl-4 pt-3'>
                            <h6>Saldo total</h6>
                            <p>R$2.500,00</p>
                        </div>
                    </div>
                    <div className="col-xl-6" style={{ width: '436px' }}>
                        <div className='border pl-4 pt-3'>
                            <h6>Saldo total</h6>
                            <p>R$2.500,00</p>
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
                                <Bar data={topProdutosGastos} options={{ responsive: true, maintainAspectRatio: false, indexAxis: 'y' }} />
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
                                <Doughnut data={topGastosCategoria} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='dados'>
                <div className="row">
                        <div className="col-xl-4 p-4">
                            <h5>Top 5 maiores gastos</h5>
                            <div  style={{ height: '300px' }}>
                                <Bar data={topProdutosGastos} options={{ responsive: true , maintainAspectRatio: false}} />
                            </div>
                        </div>
                        <div className="col-xl-4 p-4">
                            <h5>Top 5 maiores gastos por categoria</h5>
                            <div  style={{ height: '300px' }}>
                                <Bar data={topGastosCategoria} options={{ responsive: true , maintainAspectRatio: false}} />
                            </div>
                        </div>
                        <div className="col-xl-4 p-4">
                            <h5>Gastos por Tipo de Pagamento</h5>
                            <div style={{ height: '300px' }}>
                                <Pie data={topGastosPag} options={{ responsive: true , maintainAspectRatio: false}} />
                            </div>
                        </div>
                </div>
            </div> */}
        </div>
    );
}

export default Dashboard