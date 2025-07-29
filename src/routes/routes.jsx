import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Items from '../pages/market/items.jsx';

import Login from "../pages/userManagement/login"
import Register from "../pages/userManagement/register"
import Cart from "../pages/cartPage/cartPage.jsx"

function AppRoutes() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} >
          <Route path="/" element={<Items />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/carrinho' element={<Cart />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
