import React, { useState } from 'react';
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Return from './pages/Return'
import Sale from './pages/Sale'
import NewIn from './pages/NewIn'
import BestSeller from './pages/BestSeller'
import Footer from './components/Footer'
import Mirror from './pages/Mirror'
import BulkOrder from './pages/BulkOrder'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from 'react-icons/io5'
import { CartContext } from './createContext/index'; 
import CartPanel from './components/CartPanel';
import Cart from './pages/Cart';
import Verify from './pages/Verify';
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './pages/ForgotPassword';
import Checkout from './pages/Checkout';
import MyAccount from './pages/MyAccount';
import MyList from './pages/MyList';
import Orders from './pages/Orders';

const App = () => {
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const openAlertBox = (status, msg) => {
    if (status === 'success') {
      toast.success(msg);
    }
    else if (status === 'error') {
      toast.error(msg);
    }
  };

  const values = {
    setOpenCartPanel,
    openAlertBox,
    isLoggedIn,
    setIsLoggedIn
  };

  return (
    <CartContext.Provider value={values}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/return' element={<Return />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/new' element={<NewIn />} />
          <Route path='/bestseller' element={<BestSeller />} />
          <Route path='/mirror' element={<Mirror />} />
          <Route path='/bulkorders' element={<BulkOrder />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/my-account' element={<MyAccount/>} />
            <Route path='/my-list' element={<MyList/>} />
            <Route path='/my-orders' element={<Orders/>}/>
        </Routes>
        <Footer />

        <Drawer
          open={openCartPanel}
          onClose={() => setOpenCartPanel(false)}
          anchor="right"
          className="cartPanel"
        >
          <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-gray-200">
            <h4>Shopping Cart (1)</h4>
            <IoCloseSharp
              className="text-[25px] cursor-pointer"
              onClick={() => setOpenCartPanel(false)}
            />
          </div>
          <CartPanel />
        </Drawer>
      </BrowserRouter>

      {/* ✅ Toaster inside Provider */}
      <Toaster position="top-right" reverseOrder={false} />
    </CartContext.Provider>
  );
};

export default App;