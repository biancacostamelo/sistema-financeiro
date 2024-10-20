import React from "react"
import Pesquisa from "../components/pesquisa";

const Entradas = () => {
    return (
        <div className="campo">
            <Pesquisa/>
            <form>
                <div className="div p-5">
                    <div className="mb-4">
                        <h2>Entradas</h2>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6 r campoLabel">
                            <label htmlFor="categoria" className="label">categoria</label>
                            <select name="categoria" id="categoria" required>
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
                            <input type="number" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6 campoLabel">
                            <label htmlFor="data" className="label">data</label>
                            <input type="date" className="input" />
                        </div>
                        <div className="col-md-6 campoLabel">
                            <label htmlFor="data" className="label">descrição</label>
                            <input type="text" className="input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button className="botaologin">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Entradas