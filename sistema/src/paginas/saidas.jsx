import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Saidas = () => {
    return(
        <div className="campo">
            <div className="navbarmenu">
                <div className="group ml-2 mt-4">
                    <svg className="icon " aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                    <input placeholder="Search" type="search" class="pesquisa mr-5" />
                    <button className="iconMoon"><FontAwesomeIcon icon={faMoon} style={{ height: 30 + 'px', color: '#6F799F' }} /></button>
                    <button className="iconUser fr"><FontAwesomeIcon icon={faUser} style={{ color: '#6F799F', height: 25 + 'px' }} /></button>
                </div>
            </div>
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