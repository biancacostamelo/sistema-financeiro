import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pesquisa from "../components/pesquisa"
import { Bar, Pie, Line } from 'react-chartjs-2'
import { format } from 'date-fns'
import 'chartjs-plugin-datalabels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faChartLine, faChartPie, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
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
                label: 'Categoria',
                data: topGastos.map(item => item.preco),
                backgroundColor: [
                    'rgba(0, 51, 102, 1)',        // Cor 1 (Início, azul escuro)
                    'rgba(18, 72, 106)',     // Cor 3
                    'rgba(54, 114, 114)',    // Cor 4
                    'rgba(72, 135, 118)',    // Cor 7
                    'rgba(126, 198, 130)',   // Cor 8
                    'rgba(144, 219, 134)',   // Cor 9
                    'rgb(158, 221, 174)'     // Cor 10 (Final, verde claro com opacidade)
                ],
                borderColor: [
                    'rgba(0, 51, 102, 1)',        // Cor 1 (Início, azul escuro)
                    'rgba(18, 72, 106)',     // Cor 3
                    'rgba(54, 114, 114)',    // Cor 4
                    'rgba(72, 135, 118)',    // Cor 7
                    'rgba(126, 198, 130)',   // Cor 8
                    'rgba(144, 219, 134)',   // Cor 9
                    'rgba(43, 253, 95)'
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
                    'rgba(0, 51, 102, 0.500)',
                    'rgba(0, 51, 102, 0.995)',
                    'rgba(0, 51, 102, 0.849)',
                    'rgba(0, 51, 102, 0.705)',
                    'rgba(0, 51, 102, 0.534)'
                ],
                borderColor: [
                    '#fff'
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
                backgroundColor: 'rgba(144, 219, 134)',
                borderColor: '#003366',
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
                    <div className="col-sm-4">
                        <label>Data Início</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-4">
                        <label>Data Fim</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-4">
                        <button onClick={fetchData} className="btn mt-4" style={{ backgroundColor: '#003366', color: '#fff' }}>Filtrar</button>
                    </div>
                    <div className='row'>
                        <div className="col-sm-12" style={{ width: '360px' }}>
                            <div className='border  mt-4 p-3 d-flex align-items-center' style={{ width: '100%' }}>
                                <FontAwesomeIcon icon={faCircleDollarToSlot} style={{ color: '#003366', height: 35 + 'px', marginRight: 20 + 'px', marginLeft: 20 + 'px' }} />
                                <div>
                                    <h6 style={{ color: '#003366', margin: 0 }}>Saldo total</h6>
                                    {saldototal.length > 0 && saidastotais.length > 0 ? (
                                        <p style={{ fontSize: 15 + 'pt', margin: 0 }}>
                                            $
                                            {saldototal[0]['SUM(preco)'] - saidastotais[0]['sum(preco)']}
                                        </p>
                                    ) : (
                                        <p style={{ margin: 0 }}>Não há dados suficientes.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dados mb-3 pt-2'>
                <div className="row">
                    <div className="col-sm-4 mb-3" style={{ width: '360px' }}>
                        <div className='border p-4'>
                            <div className='d-flex'>
                                <h5 style={{ marginRight: 8 + "px" }}>Top 5 maiores gastos</h5>
                                <FontAwesomeIcon icon={faChartBar} color='#003366' />
                            </div>
                            <div style={{ height: '280px', width: '100%' }}>
                                <Bar data={topProdutosGastos} options={{ responsive: true, maintainAspectRatio: false, indexAxis: 'y' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3" style={{ width: '360px' }}>
                        <div className='border p-4'>
                            <div className='d-flex'>
                                <h5 style={{ marginRight: 8 + "px" }}>Total de gastos por data</h5>
                                <FontAwesomeIcon icon={faChartLine} color='#003366' />
                            </div>
                            <div style={{ height: '280px', width: '100%' }}>
                                <Line data={Gastosaolongodotempo} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3" style={{ width: '360px' }}>
                        <div className='border p-4'>
                            <div className='d-flex'>
                                <h5 style={{ marginRight: 8 + "px" }}>Gastos por Tipo de Pagamento</h5>
                                <FontAwesomeIcon icon={faChartPie} color='#003366' />
                            </div>
                            <div style={{ height: '280px', width: '100%' }}>
                                <Pie data={topGastosPag} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dados'>
                <div className="row">
                    <div className="col-xxl-12" style={{ width: '360px' }}>
                        <div className='border p-3'>
                            <div className='d-flex'>
                                <h5 style={{ marginRight: 8 + "px" }}>Gastos por Categoria</h5>
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
    );
}

export default Dashboard