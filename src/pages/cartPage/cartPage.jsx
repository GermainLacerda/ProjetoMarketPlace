import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CartItem from '../../components/interfaces/CartItem'; 

import './CartPage.css';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useOutletContext();

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio! Adicione itens para finalizar a compra.");
      return;
    }

    const phoneNumber = "5581997277201"; 
    let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.titulo} (Qtde: ${item.quantity}) - R$${(parseFloat(item.price) * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `\nTotal do Pedido: R$${totalPrice.toFixed(2).replace('.', ',')}\n`;
    message += "\nPor favor, me informe sobre os próximos passos para a compra.";
    message += "\n\nObrigado!";

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    clearCart();
    alert("Seu pedido foi enviado! Por favor, continue a conversa no WhatsApp.");
  };

  return (
    <div className="cart-page-wrapper">
      <h1>Seu Carrinho de Compras</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Seu carrinho está vazio!</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>
          <div className="cart-summary">
            <h2>Resumo do Pedido</h2>
            <p>Total de itens: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
            <p className="total-price">Total: R${totalPrice.toFixed(2).replace('.', ',')}</p>
            <button className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;