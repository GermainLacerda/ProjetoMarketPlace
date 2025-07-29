import {React}  from 'react'
import { useNavigate } from 'react-router-dom';

import './login.css'

const login = () => {

  const navigate = useNavigate(); 

  const handleLoginClick = () => {

    console.log("Botão de Login clicado! Redirecionando para a página inicial...");

    navigate('/');
  };
  return (
    <div className="loginContainer">
      <img src="/Loja-logo.png" alt="" />
      <div class="auth-container">
        <form class="auth-form">
          <h2>Entrar</h2>

          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Digite seu email" required />

          <label for="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha" required />

          <button onClick={handleLoginClick} type="submit">Login</button>
          <p class="auth-link">
            Ainda não tem conta? <a href="/register">Cadastre-se</a>
          </p>
        </form>

      </div>
    </div>
  )
}

export default login