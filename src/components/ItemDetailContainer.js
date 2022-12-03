import React, {useState, useEffect} from 'react'
import ItemDetail from  './ItemDetail'
import {useParams} from 'react-router-dom'
import {getFirestore, doc, getDoc} from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [data,setData] = useState({})
    const {detalleId} = useParams();

    useEffect (() => {
        const querydb = getFirestore ()
        const queryDoc = doc (querydb, "productos", detalleId)
        getDoc (queryDoc)
        .then (res => setData ({id: res.id, ...res.data()}))
    }, [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer;