// src/components/Modal.js
import React from 'react';
import './ItemModal.css'; // Importe o CSS do Modal
import {useOutletContext } from 'react-router-dom'

function Modal({ testItem, onClose }) {

  const { addToCart } = useOutletContext();

  if (!testItem) {
    return null; // Não renderiza se não houver item
  }

  const handleAddToCartClick = () => {
    addToCart(testItem);
    alert(`${testItem.titulo} adicionado ao carrinho!`); // Feedback para o usuário
    onClose(); // Opcional: fechar o modal após adicionar ao carrinho
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times; 
        </button>
        <img src={testItem.imgLink} alt={testItem.name} />
        <h2>{testItem.titulo}</h2>
        <p>{testItem.description}</p>
        <p className="modal-price">Preço: R${testItem.price.replace('.', ',')}</p>
        <div className='modalButton'>
          <button onClick={handleAddToCartClick}>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;