import './../App.css'
import {useCartContext} from '../context/CartContext'
import { Container } from 'react-bootstrap'

const ItemCart = ({product}) => {

    const {removeProduct} = useCartContext ()
    return (
        <Container>
            <div className="ItemDetail">
                <div>
                    <img className= "imagen" src={product.pictureUrl}></img>
                </div>
                <div className="form">
                    <h1>{product.title}</h1>
                    <h2> ${product.price}</h2>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Subtotal: $ {product.quantity * product.price}</p>
                    <button className="carrito"  onClick={()=> removeProduct (product.id)}> Eliminar </button>
                </div>
            </div>
        </Container>
    )
}

export default ItemCart