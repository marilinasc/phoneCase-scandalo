import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;