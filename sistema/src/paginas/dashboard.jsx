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

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const fetchData = async () => {
        try {
            const params = { startDate, endDate };
            const [gastosResponse, categoriasResponse, tipoPagResponse, gastostempoResponse, saldoResponse, saidasResponse] = await Promise.all([
                axios.get('http://localhost:3005/topgastos', { params }),
                axios.get('http://localhost:3005/topgastosporcategoria', { params }),
                axios.get('http://localhost:3005/gastosportipopagamento', { params }),
                axios.get('http://localhost:3005/gastosaolongodotempo', { params }),
                axios.get('http://localhost:3005/saldototal', { params }),
                axios.get('http://localhost:3005/saidastotais', { params }),
            ]);

            setTopgastos(gastosResponse.data);
            setTopcategorias(categoriasResponse.data);
            setTipopag(tipoPagResponse.data);
            setGastostempo(gastostempoResponse.data);
            setSaldototal(saldoResponse.data);
            setSaidastotais(saidasResponse.data);

        } catch (error) {
            alert('Erro ao buscar dados filtrados');
            console.error(error);
        }
    };

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
    }, []) // A lista de dependências continua vazia
    

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
                <div className="row mb-4">
                    <div className="col-sm-3">
                        <label>Data Início</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-3">
                        <label>Data Fim</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-3">
                        <button onClick={fetchData} className="btn btn-primary mt-4">Filtrar</button>
                    </div>
                    <div className="col-sm-3" style={{ width: '436px' }}>
                        <div className='border pl-4 pt-3 mt-4 pr-5'>
                            <h6>Saldo total</h6>
                            {saldototal.length > 0 && saidastotais.length > 0 ? (
                                <p>
                                    {saldototal[0]['SUM(preco)'] - saidastotais[0]['sum(preco)']}
                                </p>
                            ) : (
                                <p>Não há dados suficientes para calcular a subtração.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='dados mb-3 pt-2'>
                <div className="row">
                    <div className="col-xxl-4 mb-3">
                        <div className='border p-4'>
                            <h5>Top 5 maiores gastos</h5>
                            <div style={{ height: '280px', width: '360px' }}>
                                <Bar data={topProdutosGastos} options={{ responsive: true, maintainAspectRatio: false, indexAxis: 'y' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 mb-3">
                        <div className='border p-4'>
                            <h5>Total de gastos por data</h5>
                            <div style={{ height: '280px', width: '360px' }}>
                                <Line data={Gastosaolongodotempo} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 mb-3">
                        <div className='border p-4'>
                            <h5>Gastos por Tipo de Pagamento</h5>
                            <div style={{ height: '280px', width: '360px' }}>
                                <Pie data={topGastosPag} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dados'>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className='border p-3'>
                            <h5 style={{ width: '280px' }}>Gastos por Categoria</h5>
                            <div style={{ height: '280px', width: '360px' }}>
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