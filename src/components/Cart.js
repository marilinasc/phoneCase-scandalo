import React from 'react'
import {Link} from 'react-router-dom'
import {useCartContext} from './../context/CartContext'
import ItemCart from './ItemCart'
import FormOrder from './FormOrder'
import { Container } from 'react-bootstrap'


const Cart = () => {
    const {cart, totalPrice, generateOrder,user} = useCartContext ()

    if (cart.length === 0) {
        return (
            <div className="order">
                <h1> Tu carrito esta vacio</h1>
                <Link className="carrito" to="/" > Ir a comprar! </Link>
            </div>
        )
    }  return (  
        <Container>
            <div className="d-md-flex">
                <div className="col-md-6">
                    {cart.map (product=> <ItemCart key = {product.id} product = {product}/>)}
                </div>

                <div className="col-md-6">
                    <div className= "form">
                        <FormOrder></FormOrder>
                        <h3> Total: ${totalPrice()}</h3>
                        {user.name && user.email? (
                        <Link className="carrito" onClick={generateOrder} to="/order"> Crear orden</Link>
                        ) : (
                        <div></div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Cart;