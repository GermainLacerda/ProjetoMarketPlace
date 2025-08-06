import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import Logo from '../../../public/Loja-logo.png'

import {loginUser} from '../../services/api'
import './login.css'

const login = () => {


  const [errors, setErrors] = useState('');

  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    setErrors([]);
    
    const newErrors = [];

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim(); // .trim() remove espaços em branco no início/fim
    const password = passwordInput.value.trim();

    // 4. Validar os campos
    if (email === '' || password === '') {
      newErrors.push('Todos os campos são obrigatórios.');
      return; // Interrompe a execução se os campos estiverem vazios
    } 

    if (!email.includes('@') || (!email.includes('.com') && !email.includes('.br')) ){
      newErrors.push('Formato de email inválido!');
      return;
    }

    if(password.length<8){
      newErrors.push("A senha deve ter ao menos 8 caracteres!");
    }

    if (newErrors.length) {
      setErrors(newErrors);
      return;
    }

      try {
        const data = await loginUser (email, password);
        navigate('/');
      } catch (err) {
        setErrors([err.response?.data?.message || 'Erro na tentativa de entrar com este usuário.']);
      }
    }

  return (
    <div className="loginContainer">

      <img src={Logo} alt="" />
      <div className="auth-container">
        <form className="auth-form">
          <h2>Entrar</h2>

          {errors.length > 0 && (
            <div className="error-box">
              {errors.map((err, i) => <p key={i}>{err}</p>)}
            </div>
          )}

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