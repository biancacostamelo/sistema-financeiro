import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pesquisa from "../components/pesquisa"
import { Bar, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)




const Dashboard = () => {
    const [topGastos, setTopgastos] = useState([])
    const [topCategorias, setTopcategorias] = useState([])
    const [tipoPag, setTipopag] = useState([])

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

    const topProdutosGastos = {
        labels: topGastos.map(item => item.categoria),
        datasets: [
            {
                label: 'Top gastos',
                data: topGastos.map(item => item.preco),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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

    return (
        <div className='campo'>
            <Pesquisa />
            <div className='dados'>
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
            </div>
            <div className='dados'>
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
            </div>
        </div>
    );
}

export default Dashboard