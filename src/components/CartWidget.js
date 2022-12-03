import React from 'react'
import cart from './../cart.png'
import {useCartContext} from '../context/CartContext'


const CartWidget = () => {
const {totalProducts} = useCartContext ()

    return (
        <>
            <img src={cart}></img>
            <span>{totalProducts() ||"0"}</span>
        </>
    )
}

export default CartWidget;