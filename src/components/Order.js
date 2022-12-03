import './../App.css'
import React, {useState,useContext} from 'react'
import {useCartContext} from './../context/CartContext'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap'


const Order = () => {
    const {order} = useCartContext ()
    const [loading, setLoading] = useState(true)

    setTimeout (()=> {
        setLoading (false)
    },3000)

    return loading? (
        <div className="order">
            <Spinner animation="border" role="status" variant = "info"/>
        </div>
    ) : (
        <div className="order">
            <h1> Su compra fue realizada con exito!</h1>
            <h2> Id de orden: {order}</h2>
            <Link className="carrito" to="/"> Ir a inicio </Link>
        </div>
    )
}

export default Order;

