
import './NavBar.css';
import { useState, React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShop, FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { PiNotebookDuotone } from "react-icons/pi";
import { AuthContext } from '../../auth/AuthContext';
import { CgProfile } from "react-icons/cg";


import CartIcon from '../CartIcon';

const NavBar = ({ onFilterChange, onSearchChange, currentSearch, cartItemCount }) => {
  const [filtroStatus, setStatus] = useState("All");
  const [busca, setBusca] = useState("");
  const {user} = useContext(AuthContext);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

  }

  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
    setStatus(event.target.value)
  }


  return (
    <div className='NavBar'>
      <h1>
        <Link to='/' className='tituloNavBar'>
          <FaShop /> Lojinha do Germain
        </Link>
      </h1>
      <div className="loginFormDiv">
        <form className='formNavBar' id='fomoasm' onSubmit={handleSearchSubmit}>
          <select
            value={filtroStatus}
            onChange={handleFilterChange}
          >
            <option value="All">Todos</option>
            <option value="Eletrônicos">Eletrônicos</option>
            <option value="Informática">Informática</option>
            <option value="Casa e Cozinha">Casa e Cozinha</option>
            <option value="Moda">Moda</option>
            <option value="Esporte e Lazer">Esporte e Lazer</option>
            <option value="Beleza e Saúde">Beleza e Saúde</option>
            <option value="Brinquedos e Jogos">Brinquedos e Jogos</option>
            <option value="Automotivo">Automotivo</option>
            <option value="Ferramentas e Construção">Ferramentas e Construção</option>
            <option value="Livros">Livros</option>
          </select>
          <input type="text" placeholder='Busque aqui!' value={currentSearch}
            onChange={(e) => onSearchChange(e.target.value)} />
          {/* <button type="submit">
            <FaMagnifyingGlass />
          </button> */}
        </form>
        {(!user ? <div className='loginLinksAndCart ' >
          <Link to={"/login"} className='loginLink'>
            <IoIosLogIn />Login
          </Link>
          <Link to={"/register"} className='loginLink'>
            <PiNotebookDuotone />Cadastro
          </Link>
          <CartIcon count={cartItemCount} />
        </div>: <div className='loginLinksAndCart ' >
          <Link to={"/login"} className='loginLink'>
            <CgProfile /> perfil
          </Link>
          <CartIcon count={cartItemCount} />
        </div>)}
      </div>

    </div>
  )
}

export default NavBar