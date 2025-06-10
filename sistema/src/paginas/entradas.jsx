import React, { useState } from "react"
import axios from "axios"
import Tableentradas from "../components/tableentradas"

const Entradas = () => {
    const [categoria, setCategoria] = useState('')
    const [preco, setPreco] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')

    const Enviardados = (evento) => {
        evento.preventDefault()
        const novaEntrada = { categoria, preco, data, descricao }
        axios.post('http://localhost:3005/entradas', novaEntrada)
            .then(() => {
                alert('entrada adicionada!')
                setCategoria('')
                setPreco('')
                setData('')
                setDescricao('')
            })
            .catch((erro) => {
                alert('erro ao cadastrar entrada', erro)
            })
    }

    return (
        <>
            <div className="campo2 mt-5 mx-5">
                <h2 className="mt-4 m-225">Entradas</h2>
                <form onSubmit={Enviardados}>
                    <div className="formcadastro">
                        <h5>Adicionar nova receita</h5>
                        <div className="row mb-3 mt-4">
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
                            <div className="col-md-6 campoLabel">
                                <label htmlFor="data" className="label">data</label>
                                <input required type="date" id="data" className="input" value={data} onChange={(e) => setData(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mb-3 gap-3">
                            <div className="col-md-12 r campoLabel">
                                <label htmlFor="tipo_pagamento" className="label">Tipo Pagamento</label>
                                <select name="tipo_pagamento" id="tipo_pagamento">
                                    <option value="selecione">selecione</option>
                                    <option value="pix">pix</option>
                                    <option value="debito">debito</option>
                                </select>
                            </div>
                            <div className="col-md-12 campoLabel">
                                <label htmlFor="valor" className="label">Valor</label>
                                <input type="number" className="input" id="valor" name="valor" value={preco} onChange={(e) => setPreco(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mb-3 gap-3">
                            <div className="col-md-12 r campoLabel">
                                <label htmlFor="conta" className="label">Conta</label>
                                <select name="conta" id="conta">
                                    <option value="nubank">nubank</option>
                                    <option value="itau">itau</option>
                                </select>
                            </div>
                            <div className="col-md-12 campoLabel">
                                <label htmlFor="descricao" className="label">descrição</label>
                                <textarea id="descricao" name="descricao" style={{ width: '100%', height: '100px' }} value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <button className="botao fw-medium" type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Tableentradas />
        </>
    )
}

export default Entradas