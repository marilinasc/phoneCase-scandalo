import React, {useState} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import {useCartContext} from '../context/CartContext'
import { Container } from 'react-bootstrap'

const ItemDetail = ({data}) => {

    const [irAlCarrito, setIrAlCarrito] = useState(false);

    const {addProduct} = useCartContext ()

    const onAdd = (quantity) => {
        setIrAlCarrito(true)
        addProduct (data, quantity)
    }

    return (
        <Container>
            <div className="ItemDetail">
                <div>
                    <img src={data.pictureUrl}></img>
                </div>
                <div className="ItemData">
                    <h1>{data.title}</h1>
                    <h2>${data.price}</h2>
                    <p>{data.description}</p>
                    {
                        irAlCarrito
                        ? <div> 
                            <Link className="carrito" to="/cart"> Finalizar compra </Link> 
                            <Link className="carrito" to="/"> Seguir comprando </Link>
                        </div>
                        : <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </Container>
    )
}

export default ItemDetail;