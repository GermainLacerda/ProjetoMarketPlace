
import './NavBar.css';
import { useState, React } from 'react'
import { Link } from 'react-router-dom'
import { FaShop, FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { PiNotebookDuotone } from "react-icons/pi";


import CartIcon from '../CartIcon';

const NavBar = ({ onFilterChange, onSearchChange, currentSearch , cartItemCount}) => {
  const [filtroStatus, setStatus] = useState("All");
  const [busca, setBusca] = useState("");

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
        <Link to='/'>
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
            <option value="Cama">Cama</option>
            <option value="Banho">Banho</option>
            <option value="Cozinha">Cozinha</option>
          </select>
          <input type="text" placeholder='Busque aqui!' value={currentSearch}
            onChange={(e) => onSearchChange(e.target.value)} />
          {/* <button type="submit">
            <FaMagnifyingGlass />
          </button> */}
        </form>
        <div className='loginLinksAndCart '>
          <Link to={"/login"} className='loginLink'>
            <IoIosLogIn />Login
          </Link>
          <Link to={"/register"} className='loginLink'>
            <PiNotebookDuotone />Cadastro
          </Link>
          <CartIcon count={cartItemCount}/>
        </div>
      </div>

    </div>
  )
}

export default NavBar