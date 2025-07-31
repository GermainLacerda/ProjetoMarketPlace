import React from 'react';
import './CartItem.css';

function CartItem({ item, onRemove, onUpdateQuantity }) {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const blockManualInput = (e) => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'Tab') {
      e.preventDefault(); 
    }
  };

  return (
    <div className="cart-item">
      <img src={item.imagem} alt={item.titulo} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.titulo}</h3>
        <p>Preço: R${parseFloat(item.preco).toFixed(2).replace('.', ',')}</p>
        <div className="cart-item-actions">
          <label htmlFor={`quantity-${item.id}`}>Quantidade:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            value={item.quantity}
            onChange={handleQuantityChange}
            onKeyDown={blockManualInput}
            min="1"
            className="cart-item-quantity-input"
          />
          <button onClick={() => onRemove(item.id)} className="remove-item-button">
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;