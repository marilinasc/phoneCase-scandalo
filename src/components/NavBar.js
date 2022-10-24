import React from 'react'
import './../App.css'
import reactLogo from './../logo.png'
import Cart from './CartWidget'

const Navbar = () => {
    return (
    <div className="Navbar">
        <img src={reactLogo}></img>
        <div className = "nav-items">
            <a href=""> INICIO </a>
            <a href=""> PRODUCTOS </a>
            <a href=""> PERSONALIZÁ TU FUNDA </a>
            <a href=""> LOCALES </a>
            <a href=""> <Cart/> 0 </a>
        </div>
    </div>
    )
}

export default Navbar;