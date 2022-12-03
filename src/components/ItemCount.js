import React from 'react'
import './../App.css'
import {useState, useEffect} from 'react';

const ItemCount = ({initial,stock,onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))

    const sumarProductos = () => {
        setCount(count + 1)
    }

    const restarProductos = () => {
        setCount(count - 1)
    }
    useEffect ( ()=> {
        setCount(parseInt(initial))
    }, [initial])

    return (
    <div className="ItemCount">
        <div className="contenedorContador">
            <button className="contador" disabled = {count <= 1} onClick={restarProductos}> - </button>
            <p className="cantidad">{count}</p>
            <button className="contador" disabled = {count >= stock} onClick={sumarProductos}> + </button>
        </div>
        <div>
            <button className="carrito" disabled = {stock <= 0} onClick={()=> onAdd(count)}> Agregar al carrito </button>
        </div>
    </div>
    )
}

export default ItemCount;