import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Items from '../pages/market/items.jsx';

import Login from "../pages/userManagement/login"
import Register from "../pages/userManagement/register"
import Cart from "../pages/cartPage/cartPage.jsx"
import { AuthProvider } from '../auth/AuthContext.jsx';

function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/ProjetoMarketPlace">
        <Routes>
          <Route element={<Home />} >
            <Route path="/" element={<Items />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/carrinho' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
