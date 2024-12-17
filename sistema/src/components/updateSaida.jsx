import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Update = () => {
    const { id } = useParams()
    const history = useHistory()

    const [categoria, setCategoria] = useState('')
    const [preco, setPreco] = useState('')
    const [tipoPagamento, setTipopagamento] = useState('')
    const [dataSaidas, setDatasaidas] = useState('')
    const [descricao, setDescricao] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3005/details/${id}`)
            .then(resposta => {
                const dados = resposta.data[0]
                setCategoria(dados.categoria)
                setPreco(dados.preco)
                setTipopagamento(dados.tipoPagamento)
                setDatasaidas(dados.dataSaidas)
                setDescricao(dados.descricao)
            })
            .catch(() => {
                alert('Erro ao buscar dados')
            })
    }, [id])

    const Handlesubmit = (evento) => {
        evento.preventDefault()
        const saidaAtualizada = { categoria, preco, tipoPagamento, dataSaidas, descricao }
        axios.put(`http://localhost:3005/update/${id}`, saidaAtualizada)
            .then(() => {
                alert('Dados atualizados com sucesso!')
                history.push('/tablesaidas')
            })
            .catch(() => {
                alert('Erro ao atualizar')
            })
    }

    return (
        <div className="corpoUpdate">
            <form onSubmit={Handlesubmit}>
                <div className="areaUpdate p-5">
                    <div className="mb-4">
                        <h2>Modificar Saída</h2>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-12 campoLabel">
                            <label htmlFor="id" className="label">ID</label>
                            <input type="number" id='id' name='id' value={id} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-6 campoLabel">
                            <label htmlFor="categoria" className="label">Categoria</label>
                            <select name="categoria" id="categoria" required value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="alimentacao">Alimentação</option>
                                <option value="moradia">Moradia</option>
                                <option value="transporte">Transporte</option>
                                <option value="educacao">Educação</option>
                                <option value="saude">Saúde</option>
                                <option value="lazer_entretenimento">Lazer e entretenimento</option>
                                <option value="vestuario">Vestuário</option>
                                <option value="tecnologia_comunicacao">Tecnologia e comunicação</option>
                                <option value="seguros_protecao">Seguros e proteção</option>
                                <option value="impostos_taxas">Impostos e taxas</option>
                                <option value="despesas_animais">Despesas com animais de estimação</option>
                                <option value="doacoes_caridade">Doações e caridade</option>
                            </select>
                        </div>
                        <div className="col-sm-6 campoLabel">
                            <label htmlFor="preco" className="label">Preço</label>
                            <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-6 campoLabel">
                            <label htmlFor="tipoPagamento" className="label">Tipo de Pagamento</label>
                            <select name="tipoPagamento" id="categoria" required value={tipoPagamento} onChange={(e) => setTipopagamento(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="Pix">Pix</option>
                                <option value="cartaocredito">Cartão de Crédito</option>
                                <option value="cartaodebito">Cartão de Débito</option>
                                <option value="dinheiro">Dinheiro</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                        <div className="col-sm-6 campoLabel">
                            <label htmlFor="dataSaidas" className="label">Data</label>
                            <input type="date" className="input" value={dataSaidas} onChange={(e) => setDatasaidas(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-12 campoLabel">
                            <label htmlFor="descricao" className="label">Descrição</label>
                            <textarea id="descricao" name="descricao" style={{ width: '100%', height: '100px' }} value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button className="botao" type="submit">Atualizar</button>
                        </div>
                        <div className="col-sm-12">
                            <Link className='Link' to='/tablesaidas'>
                                <div className="btn btn-light w-100 mt-2" style={{ borderRadius: '10px' }}>Voltar</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Update
