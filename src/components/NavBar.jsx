import { useState, React } from 'react'
import { Link } from 'react-router-dom'
import { FaShop, FaMagnifyingGlass } from "react-icons/fa6";


import './NavBar.css';

const NavBar = ({onFilterChange}) => {
  const [filtroStatus, setStatus] = useState("All");
  
  const handleEvent = (e) => {
    e.preventDefault()

    
  }

  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
    setStatus(event.target.value)
  }


  return (
    <div className='NavBar'>
      <h1>
        <Link to='/'>
          <FaShop /> Lojinha da 09
        </Link>
      </h1>
      <form className='formNavBar' onSubmit={handleEvent}>
        <select
          value={filtroStatus}
          onChange={handleFilterChange}
          >
          <option value="All">Todos</option>
          <option value="Cama">Cama</option>
          <option value="Banho">Banho</option>
          <option value="Cozinha">Cozinha</option>
        </select>
        <input type="text" placeholder='Busque aqui!' />
        <button type="submit">
          <FaMagnifyingGlass />
        </button>
      </form>
    </div>
  )
}

export default NavBar