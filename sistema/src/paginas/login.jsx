import React, { useState } from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.js"

function Login() {
  const history = useHistory()
  const [isCadastro, setIsCadastro] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    history.push('/Dashboard')
  }

  const handleCadastro = (e) => {
    e.preventDefault()
    alert('Cadastrou com sucesso!')
    setIsCadastro(false) // Volta para o login após cadastro
  }

  const toggleFormulario = () => {
    setIsCadastro(prev => !prev)
  }

  return (
    <div className='bg-login'>
      {isCadastro ? (
        <form onSubmit={handleCadastro}>
          <div className="card-login">
            <p className='text-login'>Faça seu cadastro</p>
            <div className='campoLabel w-100'>
              <label htmlFor="email" className="label">E-mail</label>
              <input required type="email" id="email" className="input" placeholder='Insira seu email' />
            </div>
            <div className='campoLabel w-100'>
              <label htmlFor="telefone" className="label">Telefone</label>
              <input required type="text" id="telefone" className="input" placeholder='Insira seu telefone' />
            </div>
            <div className='campoLabel w-100'>
              <label htmlFor="senha" className="label">Senha</label>
              <input required type="password" id="senha" className="input" placeholder='Crie sua senha' />
            </div>
            <button className='botao' type='submit'>Cadastrar</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="card-login">
            <p className='text-login'>Faça seu login</p>
            <div className='campoLabel w-100'>
              <label htmlFor="email" className="label">E-mail</label>
              <input required type="email" id="email" className="input" placeholder='Insira seu email' />
            </div>
            <div className='campoLabel w-100'>
              <label htmlFor="senha" className="label">Senha</label>
              <input required type="password" id="senha" className="input" placeholder='Insira sua senha' />
            </div>
            <a href='#ooo' className='align-self-end text-esqueciminhasenha'>esqueci minha senha</a>
            <button className='botao' type='submit'>Login</button>
          </div>
        </form>
      )}

      <button onClick={toggleFormulario} className='mt-2 btn text-light'>
        {isCadastro ? 'Já tem login? (Fazer login)' : 'Não tem login? (Cadastrar)'}
      </button>
    </div>
  )
}

export default Login
