import React, { useState } from "react";
import Pesquisa from "../components/pesquisa";
import axios from "axios";

const Saidas = () => {
    
    const [categoria, setCategoria] = useState('')
    const [preco, setPreco] = useState('')
    const [tipoPagamento, setTipopagamento] = useState('')
    const [dataSaidas, setDatasaidas] = useState('')
    const [descricao, setDescricao] = useState('')

    const Handlesubmit = (evento) => {
        evento.preventDefault()
        const novaSaida = {categoria, preco, tipoPagamento, dataSaidas, descricao}
        axios.post('http://localhost:3005/saidas', novaSaida)
        .then(()=>{
            alert('saída adicionada com sucesso!')
            setCategoria('')
            setPreco('')
            setTipopagamento('')
            setDatasaidas('')
            setDescricao('')
        })
        .catch((erro)=>{
            alert('erro ao registrar saída', erro)
        })
    }

    return(
        <div className="campo2">
            <Pesquisa/>
            <form onSubmit={Handlesubmit}>
                <div className="formcadastro p-5">
                    <div className="mb-4">
                        <h2>Saidas</h2>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-6 r campoLabel">
                            <label htmlFor="categoria" className="label">categoria</label>
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
                        <div className="col-sm-6 r campoLabel">
                            <label htmlFor="preco" className="label">preço</label>
                            <input required type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-6 campoLabel">
                        <label htmlFor="tipoPagamento" className="label">tipo pagamento</label>
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
                            <label htmlFor="dataSaidas" className="label">data</label>
                            <input required type="date" className="input" value={dataSaidas} onChange={(e) => setDatasaidas(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-4" >
                        <div className="col-sm-12 campoLabel">
                            <label htmlFor="descricao" className="label" >descrição</label>
                            <textarea id="descricao" name="descricao" style={{ width: '100%' , height: '100px'}} value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button className="botao" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Saidas