import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Notfound from './pages/Notfound'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import New from './pages/New'
import Login from './pages/Login'
import Product from './pages/Product'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
        <Route index='true' path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:pid' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router