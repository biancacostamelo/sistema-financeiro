import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.js";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function Login({navigation}) {
  const [isCadastro, setIsCadastro] = useState(false);

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace("Home");
    } catch (err) {
      setError(err + "erro ao fazer o login . verifique suas credenciais");
      alert("Erro ao fazer o login. Verifique suas credenciais.");
    }
  };

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        telefone,
        senha
      );
      const user = userCredential.user;

      await setDoc(doc(db, "usuario", user.uid), {
        nome,
        telefone,
        email
      });

      alert("Sucesso!", "Usuário cadastrado com sucesso!", [
        { text: "OK", onPress: () => navigation.replace("Home") },
      ]);
    } catch (err) {
      alert("Erro", "Erro não foi possivel cadastrar. Tente novamente!");
    }
  };

  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   history.push('/Dashboard')
  // }

  // const handleCadastro = (e) => {
  //   e.preventDefault()
  //   alert('Cadastrou com sucesso!')
  //   setIsCadastro(false) // Volta para o login após cadastro
  // }

  const toggleFormulario = () => {
    setIsCadastro((prev) => !prev);
  };

  return (
    <div className="bg-login">
      {isCadastro ? (
        <form onSubmit={handleCadastro}>
          <div className="card-login">
            <p className="text-login">Faça seu cadastro</p>
            <div className="campoLabel w-100">
              <label htmlFor="email" className="label">
                E-mail
              </label>
              <input
                required
                type="email"
                id="email"
                className="input"
                placeholder="Insira seu email"
                onChangeText={setEmail}
                value={email}
              />
            </div>
            <div className="campoLabel w-100">
              <label htmlFor="telefone" className="label">
                Telefone
              </label>
              <input
                required
                type="text"
                id="telefone"
                className="input"
                placeholder="Insira seu telefone"
                onChangeText={setTelefone}
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
                id="senha"
                className="input"
                placeholder="Crie sua senha"
                onChangeText={setSenha}
                value={senha}
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
          <div className="card-login">
            <p className="text-login">Faça seu login</p>
            <div className="campoLabel w-100">
              <label htmlFor="email" className="label">
                E-mail
              </label>
              <input
                required
                type="email"
                id="email"
                className="input"
                placeholder="Insira seu email"
                onChangeText={setEmail}
                value={email}
              />
            </div>
            <div className="campoLabel w-100">
              <label htmlFor="senha" className="label">
                Senha
              </label>
              <input
                required
                type="password"
                id="senha"
                className="input"
                placeholder="Insira sua senha"
                onChangeText={setSenha}
                value={senha}
              />
            </div>
            <a href="#ooo" className="align-self-end text-esqueciminhasenha">
              esqueci minha senha
            </a>
            <button className="botao" type="submit">
              Login
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
