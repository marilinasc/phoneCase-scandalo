import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({data}) => {

    const onAdd = (cantidadFinal) => {
        console.log (`Cantidad total de productos seleccionados: ${cantidadFinal}`)
    }

    return (
        <div className="ItemDetail">
            <div>
                <img src={data.pictureUrl}></img>
            </div>
            <div className="ItemData">
                <h1>{data.title}</h1>
                <h2>${data.price}</h2>
                <p>{data.description}</p>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;