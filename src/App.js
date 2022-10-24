import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App () {
  return (
  <div>
    <header>
      <NavBar/>
      <ItemListContainer text = '¡Bienvenido/a a la tienda virtual!'/>
    </header>
  </div>
  )
}
export default App;