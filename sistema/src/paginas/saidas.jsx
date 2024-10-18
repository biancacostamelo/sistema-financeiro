import React from "react";

const Saidas = () => {
    return(
        <div className="campo">
            <form>
                <div className="div p-5">
                    <div className="mb-4">
                        <h2>Saidas</h2>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-6 r campoLabel">
                            <label htmlFor="categoria" className="label">categoria</label>
                            <select name="categoria" id="categoria" required>
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
                            <input type="number" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-6 campoLabel">
                        <label htmlFor="pagamento" className="label">pagamento</label>
                        <input type="date" className="input" />
                        </div>
                        <div className="col-sm-6 campoLabel">
                            <label htmlFor="data" className="label">data</label>
                            <input type="date" className="input" />
                        </div>
                    </div>
                    <div className="row mb-4" >
                        <div className="col-sm-12 campoLabel">
                            <label htmlFor="descricao" className="label" >descrição</label>
                            <textarea id="descricao" name="descricao" style={{ width: '100%' , height: '100px'}}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button className="botaologin">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Saidas