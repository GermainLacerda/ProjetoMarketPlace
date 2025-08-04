import { React } from 'react'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import Logo from '../../../public/Loja-logo.png'
import './login.css'

const login = () => {

  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim(); // .trim() remove espaços em branco no início/fim
    const password = passwordInput.value.trim();

    // 4. Validar os campos
    if (email === '' || password === '') {
      alert('Por favor, preencha todos os campos de e-mail e senha.');
      return; // Interrompe a execução se os campos estiverem vazios
    } 

    if (!email.includes('@')){
      alert('email invalido');
      return;
    }

      navigate('/');
    }

  return (
    <div className="loginContainer">

      <img src={Logo} alt="" />
      <div className="auth-container">
        <form className="auth-form">
          <h2>Entrar</h2>

          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Digite seu email" required />

          <label for="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha" required />

          <button onClick={handleLoginClick} type="submit">Login</button>
          <p className="auth-link">
            <Link to={"/register"}>
              Ainda não tem conta?
              Cadastre-se
            </Link>
          </p>
        </form>

      </div>
    </div>
  )
}

export default login