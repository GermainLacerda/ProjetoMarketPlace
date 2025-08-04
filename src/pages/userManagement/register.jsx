import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../../services/api'
import './register.css'

import Logo from '../../../public/Loja-logo.png'

const register = () => {
  const [errors, setErrors] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccessMsg('');

    console.log("Botão de Login clicado! Redirecionando para a página inicial...");
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPwd = document.getElementById('confirm').value;

    const newErrors = [];

    if (!name || !email || !password || !confirmPwd) {
      newErrors.push('Todos os campos são obrigatórios.');
    }
    if (email && !email.includes('@')) {
      newErrors.push('E-mail inválido. Deve conter “@”.');
    }
    if (password && password.length < 6) {
      newErrors.push('A senha deve ter ao menos 6 caracteres.');
    }
    if (password !== confirmPwd) {
      newErrors.push('As senhas não coincidem.');
    }

    if (newErrors.length) {
      setErrors(newErrors);
      return;
    }

    try {
      const data = await registerUser(name, email, password, confirmPwd);
      setSuccessMsg('Registro efetuado com sucesso!');
      navigate('/Login');
      // opcional: redirecionar, limpar form, etc.
    } catch (err) {
      setErrors([err.response?.data?.message || 'Erro ao cadastrar usuário.']);
    }
  };
  return (
    <div className='registerContainer'>
      <img src={Logo} alt="" />
      <div class="auth-container">
        <form class="auth-form">
          <h2>Cadastro</h2>

          {errors.length > 0 && (
            <div className="error-box">
              {errors.map((err, i) => <p key={i}>{err}</p>)}
            </div>
          )}
          {successMsg && <p className="success">{successMsg}</p>}

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