import { Outlet } from 'react-router-dom'
import './Home.css'
import NavBar from '../../components/layouts/NavBar.jsx';
import Footer from '../../components/layouts/Footer.jsx';
import { useState } from 'react';
import { RiInsertRowBottom } from 'react-icons/ri';

function App() {
  const [filtro, setFiltro] = useState('All')
  const [busca, setBusca] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        return prevItems.map((item) => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prevItems, { ...itemToAdd, quantity: 1 }];
      }
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) => {
      // Garante que newQuantity seja um número e positivo
      const quantity = Math.max(1, parseInt(newQuantity, 10) || 1); // Garante que é no mínimo 1

      return prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: quantity } : item
      );
    });

  }

  const clearCart = () => {
  setCartItems([]);
};


  return (
    <div className='homePage'>
      <header>
        <NavBar
          onFilterChange={setFiltro}
          onSearchChange={setBusca}
          currentSearch={busca}
          cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        />
      </header>
      <main>
        <Outlet context={{ filtro, busca, cartItems, addToCart, removeFromCart, updateQuantity, clearCart }} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
