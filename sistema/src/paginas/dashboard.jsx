import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pesquisa from "../components/pesquisa"
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)



const Dashboard = () => {
    const [topGastos, setTopgastos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/topgastos')
            .then((resposta) => {
                setTopgastos(resposta.data)
            })
            .catch(() => {
                alert('erro ao buscar dados')
            })
    }, [])

    const topProdutosGastos = {
        labels: topGastos.map(item => item.categoria),
        datasets: [
            {
                label: 'Quantidade em Estoque',
                data: topGastos.map(item => item.preco),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }
        ]
    }

    return (
        <div className='campo'>
            <Pesquisa />
            <div className='dados'>
                <div className="row">
                        <div className="col-xl-6 p-3">
                            <h2>Top 5 maiores gastos por categoria</h2>
                            <div>
                                <Bar data={topProdutosGastos} options={{ responsive: true }} />
                            </div>
                        </div>
                        <div className="col-xl-6 p-3">
                            <h2>Top 5 maiores gastos por categoria</h2>
                            <div>
                                <Bar data={topProdutosGastos} options={{ responsive: true }} />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard
