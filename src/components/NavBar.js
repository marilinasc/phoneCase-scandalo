import React from 'react'
import './../App.css'
import reactLogo from './../logo.png'
import Cart from './CartWidget'

const Navbar = () => {
    return (
    <div className="Navbar">
        <a href=""><img src={reactLogo}></img></a>
        <ul className = "nav-items">
            <li><a href=""> INICIO </a></li>
            <li><a href=""> PRODUCTOS </a>
                <ul>
                    <li><a href=""> Deporte </a></li>
                    <li><a href=""> Mandalas </a></li>
                    <li><a href=""> Mundo animal </a></li>
                    <li><a href=""> Personajes </a></li>
                    <li><a href=""> Botanic </a></li>
                    <li><a href=""> Astrologia </a></li>
                    <li><a href=""> Lifestyle </a></li>
                    <li><a href=""> Design </a></li>
                    <li><a href=""> Fantasy </a></li>
                    <li><a href=""> Ver todas </a></li>
                </ul>
            </li>
            <li><a href=""> PERSONALIZÁ TU FUNDA </a></li>
            <li><a href=""> LOCALES </a></li>
            <li><a href=""> <Cart/> 0 </a></li>
        </ul>
    </div>
    )
}

export default Navbar;