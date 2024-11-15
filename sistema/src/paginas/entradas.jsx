import React, { useState } from "react"
import Pesquisa from "../components/pesquisa"
import axios from "axios"

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
        <div className="campo2">
            <Pesquisa />
            <form onSubmit={Enviardados}>
                <div className="formcadastro p-5">
                    <div className="mb-4">
                        <h2>Entradas</h2>
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
                            <button className="botao" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Entradas