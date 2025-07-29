import React from 'react'
import {Link} from 'react-router-dom'

import './CartIcon.css'

import { FaShoppingCart } from "react-icons/fa";
const CartIcon = ({count}) => {
  return (
    <div>
      <Link to='/carrinho' classname='cartIconLink'>
      <FaShoppingCart size={"2rem"} />
      {count>0 && <span className='cartItemCount'>{count}</span>}
      </Link>
    </div>
  )
}

export default CartIcon