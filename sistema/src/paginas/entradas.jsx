import React from "react"

const Entradas = () => {
    return (
        <div className="campo">
            <form>
                <div className="div p-5">
                    <div className="mb-4">
                        <h1>Entradas</h1>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-6 r campoLabel">
                            <label htmlFor="categoria" className="label">categoria</label>
                            <select name="categoria" id="categoria" required>
                                {/* <option value="">Selecione</option>
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
                                    <option value="doacoes_caridade">Doações e caridade</option> */}
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
                        <div className="col-sm-6 r campoLabel">
                            <label htmlFor="preco" className="label">preço</label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-6 campoLabel">
                            <label htmlFor="data" className="label">data</label>
                            <input type="date" className="input" />
                        </div>
                        <div className="col-sm-6 campoLabel">
                            <label htmlFor="data" className="label">descrição</label>
                            <input type="text" className="input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button className="botaologin"><b>ok</b></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Entradas