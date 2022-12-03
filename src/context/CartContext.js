import React, {useState,useContext} from 'react'
import {getFirestore, addDoc, collection} from 'firebase/firestore'
const CartContext = React.createContext([])

export const useCartContext = () => useContext (CartContext)

const CartProvider = ({children}) => {

    const [cart,setCart] = useState ([])
    const [user, setUser] = useState ([])
    const [order, setOrder] = useState ([])

    const addProduct = (item, quantity) => {
        let newCart
        let product = cart.find (product=> product.id === item.id)
        if (product) {
            product.quantity += quantity
            newCart = [...cart]
        } else {
            product = {...item, quantity: quantity}
            newCart = [...cart,product]
        }
        setCart (newCart)
    }
    
    const totalPrice = () => {
        return cart.reduce ((prev, act)=> prev + act.quantity * act.price, 0) 
    }

    const totalProducts = () => cart.reduce ((acumulador, productoActual)=> acumulador + productoActual.quantity, 0)

    const clearCart = () => setCart([])

    const isInCart = (id) => cart.find (product => product.id ===id) ? true : false

    const removeProduct = (id) => setCart (cart.filter (product =>product.id !==id))

    const generateOrder =()=> {
        const order = {
            user: {
                name: user.name,
                email: user.email,
           },
            items: cart.map(product =>({id:product.id, title:product.title, price:product.price, quantity: product.quantity})),
            total: totalPrice(),
       }
    
        const db = getFirestore ()
        const queryInsert = collection (db, "orders")
        addDoc (queryInsert,order)
        .then ((resp)=> {
            setOrder(resp.id)
        })
        .finally (()=>clearCart())
    }

    return (
        <CartContext.Provider value={{addProduct,clearCart,isInCart,removeProduct, totalPrice, totalProducts, cart, generateOrder, order,user, setUser}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider