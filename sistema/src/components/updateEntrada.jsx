import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'


const UpdateEntrada = () => {
    const {id} = useParams()
    const history = useHistory()

    const [categoria, setCategoria] = useState('')
    const [preco, setPreco] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:3005/detailsentradas/${id}`)
        .then(resposta =>{
            const dados = resposta.data[0]
            setCategoria(dados.categoria)
            setPreco(dados.preco)
            setData(dados.dataEntrada)
            setDescricao(dados.descricao)
        })
        .catch(() =>{
            alert('erro ao buscar dados')
        })
    },[id])

    const Handlesubmit = (event) =>{
        event.preventDefault()
        const entradaAtualizada = {categoria, preco, data, descricao}
        axios.put(`http://localhost:3005/updateentrada/${id}`, entradaAtualizada)
        .then(()=>{
            alert('dados atualizados com sucesso!')
            history.push('/tableentradas')
        })
        .catch(()=>{
            alert('erro ao atualizar dados de entrada')
        })
    }

  return (
    <div className="corpoUpdate">
        <form  onSubmit={Handlesubmit} >
                <div className="areaUpdate p-5">
                    <div className="mb-4">
                        <h2>Entradas</h2>
                    </div>
                    <div className='row mb-4'>
                        <div className="col-md-12">
                            <label htmlFor="id">ID</label>
                            <input type="number" id="id" name="id" value={id}/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6 r campoLabel">
                            <label htmlFor="categoria" className="label">categoria</label>
                            <select name="categoria" id="categoria" required value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="salario">Salário</option>
                                <option value="freelance">Freelance ou prestação de serviços</option>
                                <option value="investimentos">Rendimentos de investimentos</option>
                                <option value="aluguéis">Aluguéis</option>
                                <option value="pensao_aposentadoria">Pensão ou aposentadoria</option>
                                <option value="comissoes_bonificacoes">Comissões ou bonificações</option>
                                <option value="lucros_negocios">Lucros de negócios próprios</option>
                                <option value="premios_sorteios">Prêmios ou sorteios</option>
                                <option value="venda_bens">Venda de bens</option>
                                <option value="ajuda_familiar">Ajuda financeira de familiares ou amigos</option>
                                <option value="dividendos">Dividendos de ações</option>
                                <option value="reembolsos">Reembolsos</option>
                            </select>
                        </div>
                        <div className="col-md-6 r campoLabel">
                            <label htmlFor="preco" className="label">preço</label>
                            <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6 campoLabel">
                            <label htmlFor="data" className="label">data</label>
                            <input type="date" className="input" value={data} onChange={(e) => setData(e.target.value)} />
                        </div>
                        <div className="col-md-6 campoLabel">
                            <label htmlFor="data" className="label">descrição</label>
                            <input type="text" className="input" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button className="botao" type="submit">Atualizar</button>
                        </div>
                        <div className="col-sm-12">
                            <Link className='Link' to='/tableentradas'>
                                <div className="btn btn-light w-100 mt-2" style={{ borderRadius: '10px' }}>Voltar</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default UpdateEntrada