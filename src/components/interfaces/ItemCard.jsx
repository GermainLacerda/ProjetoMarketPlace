import React from 'react'
import './ItemCard.css'

import {useOutletContext } from 'react-router-dom'

const ItemCard = ({ testItem, onClick }) => {
  const { addToCart } = useOutletContext();

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Impede que o clique no botão ative o onClick do ItemCard (abrir modal)
    addToCart(testItem);
    alert(`${testItem.titulo} adicionado ao carrinho!`); // Feedback para o usuário
  };

  return (
    <div className='ItemCard' onClick={() => onClick(testItem)}>
      <div className='itemDiv'>
        <img src={testItem.imagem} alt="" />
        <h2>{testItem.titulo}</h2>
        <p>{testItem.descricao}</p>
        <p>R${testItem.preco.replace('.',',')}</p>
      </div>
      <div className='itemButton'>
        <button onClick={handleAddToCartClick}>Adicionar ao carrinho</button>
      </div>
    </div>
  )
}

export default ItemCard