import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './context/CartContext'
import Order from './components/Order'


function App () {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
                <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/order" element={<Order/>}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}
export default App;