import './../App.css'
import React from 'react'
import reactLogo from './../logo.png'
import CartWidget from './CartWidget'
import {NavLink, Link} from 'react-router-dom'
import {Navbar,Nav, Container,NavDropdown} from 'react-bootstrap'


function NavBar () {
    return (
        <Navbar expand="lg" className= "Navbar">
            <Container fluid>
                <NavLink to="/"> <img src={reactLogo}></img></NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav>
                        <NavLink to="/" className="nav-link"> INICIO </NavLink>
                        <NavDropdown title="PRODUCTOS">
                            <NavDropdown.Item> <NavLink className="nav-link" to="/categoria/Mandalas">Mandalas </NavLink></NavDropdown.Item>
                            <NavDropdown.Item> <NavLink className="nav-link" to="/categoria/Animales">Animales </NavLink> </NavDropdown.Item>
                            <NavDropdown.Item> <NavLink className="nav-link" to="/categoria/Personajes">Personajes </NavLink></NavDropdown.Item>
                            <NavDropdown.Item> <NavLink className="nav-link" to="/categoria/Botanic"> Botanic </NavLink> </NavDropdown.Item>
                            <NavDropdown.Item> <NavLink className="nav-link" to="/categoria/Lifestyle"> Lifestyle </NavLink> </NavDropdown.Item>
                        </NavDropdown>
                        <Link className="nav-link" to={"/cart"}> <CartWidget/></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;