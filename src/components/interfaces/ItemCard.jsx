import React, { useEffect, useState, useContext  } from 'react'
import './ItemCard.css'
import {AuthContext} from '../../auth/AuthContext';
import { useOutletContext } from 'react-router-dom'
import { fetchCurrentUser } from '../../services/api';

const ItemCard = ({ testItem, onClick }) => {
  const { addToCart } = useOutletContext();
  const {user} = useContext(AuthContext);

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); 
    if(!user){
      alert('É necessário fazer login primeiro!');
      return;
    }
    addToCart(testItem);
    alert(`${testItem.titulo} adicionado ao carrinho!`); 
  };

  

  return (
    <div className='ItemCard' onClick={() => onClick(testItem)}>
      <div className='itemDiv'>
        <img src={testItem.imagem} alt="" />
        <h2>{testItem.titulo}</h2>
        <p>{testItem.descricao}</p>
        <p>R${testItem.preco.replace('.', ',')}</p>
      </div>
      <div className='itemButton'>
        <button onClick={handleAddToCartClick} >Adicionar ao carrinho</button>
      </div>
    </div>
  )
}

export default ItemCard