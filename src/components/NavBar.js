import './../App.css'
import React from 'react'
import reactLogo from './../logo.png'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
    <div className="Navbar">
        <NavLink to="/"> <img src={reactLogo}></img></NavLink>
        <ul className = "nav-items">
            <li><NavLink to="/"> INICIO </NavLink></li>
            <li><NavLink to="/"> PRODUCTOS </NavLink>
                <ul>
                    <li><NavLink to="/categoria/Mandalas"> Mandalas </NavLink></li>
                    <li><NavLink to="/categoria/Animales"> Mundo animal </NavLink></li>
                    <li><NavLink to="/categoria/Personajes"> Personajes </NavLink></li>
                    <li><NavLink to="/categoria/Botanic"> Botanic </NavLink></li>
                    <li><NavLink to="/categoria/Lifestyle"> Lifestyle </NavLink></li>
                </ul>
            </li>
            <li><NavLink to="/cart"> <CartWidget/> 0 </NavLink></li>
        </ul>
    </div>
    )
}

export default Navbar;