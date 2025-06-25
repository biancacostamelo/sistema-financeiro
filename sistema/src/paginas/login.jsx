import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function Login({navigation}) {
  const history = useHistory();
  const [isCadastro, setIsCadastro] = useState(false);

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    history.replace("/Dashboard");
  } catch (err) {
    console.error("Erro no login:", err);
    setError("Erro ao fazer o login: " + err.message);
    alert("Erro ao fazer o login: " + err.message);
  }
};


const handleCadastro = async (e) => {
  e.preventDefault();

  if (!nome || !email || !password || !telefone) {
    setError("Todos os campos são obrigatórios.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(db, "usuarios", user.uid), {
      nome,
      telefone,
    });

    alert("Usuário cadastrado com sucesso!");
    history.replace("/Dashboard");

  } catch (err) {
    console.error("Erro no cadastro:", err); // Mostra o erro no console
    setError("Erro ao cadastrar: " + err.message);
    alert("Erro ao cadastrar: " + err.message);
  }
};

  const toggleFormulario = () => {
    setIsCadastro((prev) => !prev);
  };

  return (
    <div className="bg-login">
      {isCadastro ? (
        <form onSubmit={handleCadastro}>
          <div className="card-login gap-3">
            <p className="text-login">Faça seu cadastro</p>
            <div className="campoLabel w-100">
              <label htmlFor="nome" className="label">
                Nome
              </label>
              <input
                required
                type="text"
                id="nome"
                name="nome"
                className="input"
                placeholder="Insira seu email"
                onChange={(e)=>setNome(e.target.value)}
                value={nome}
              />
            </div>
            <div className="campoLabel w-100">
              <label htmlFor="email" className="label">
                E-mail
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="Insira seu email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="campoLabel w-100">
              <label htmlFor="telefone" className="label">
                Telefone
              </label>
              <input
                required
                type="number"
                id="telefone"
                name="telefone"
                className="input"
                placeholder="Insira seu telefone"
                onChange={(e)=>setTelefone(e.target.value)}
                value={telefone}
              />
            </div>
            <div className="campoLabel w-100">
              <label htmlFor="senha" className="label">
                Senha
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                className="input"
                placeholder="Crie sua senha"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button className="botao" type="submit">
              Cadastrar
              {error ? <p className="text-danger">{error}</p> : null}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="card-login gap-3">
            <p className="text-login">Faça seu login</p>
            <div className="campoLabel w-100">
              <label htmlFor="email" className="label">
                E-mail
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="Insira seu email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="campoLabel w-100">
              <label htmlFor="password" className="label">
                Senha
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                className="input"
                placeholder="Insira sua senha"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
              />
            </div>
            <a href="#ooo" className="align-self-end text-esqueciminhasenha">
              esqueci minha senha
            </a>
            <button className="botao" type="submit">
              Login
              {error ? <p className="text-danger">{error}</p> : null}
            </button>
          </div>
        </form>
      )}

      <button onClick={toggleFormulario} className="mt-2 btn text-light">
        {isCadastro
          ? "Já tem login? (Fazer login)"
          : "Não tem login? (Cadastrar)"}
      </button>
    </div>
  );
}

export default Login;
