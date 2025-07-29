import React from 'react'
import { FaLinkedin } from "react-icons/fa";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Endereço</h3>
          <p>Recife - Pernambuco</p>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: germainlacerda@gmail.com</p>
          <p>Telefone: (81) 9 9727-7201</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <a href="https://www.linkedin.com/in/germain-lacerda/" target="_blank" className="linkedin-link"><FaLinkedin />LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Germain Lacerda. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer