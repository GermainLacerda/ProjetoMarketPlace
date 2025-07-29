import React from 'react'
import { useNavigate } from 'react-router-dom';

import './register.css'

const register = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {

    console.log("Botão de Login clicado! Redirecionando para a página inicial...");

    navigate('/Login');
  };
  return (
    <div className='registerContainer'>
      <img src="/Loja-logo.png" alt="pq vc sumiu" />
      <div class="auth-container">
        <form class="auth-form">
          <h2>Cadastro</h2>

          <label for="name">Nome completo</label>
          <input type="text" id="name" placeholder="Digite seu nome" required />

          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Digite seu email" required />

          <label for="password">Senha</label>
          <input type="password" id="password" placeholder="Crie uma senha" required />

          <label for="confirm">Confirmar senha</label>
          <input type="password" id="confirm" placeholder="Confirme a senha" required />

          <button onClick={handleLoginClick} type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  )
}

export default register