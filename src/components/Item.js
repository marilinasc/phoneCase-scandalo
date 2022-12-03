import './../App.css'
import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({info}) => {
    return (
        <div className= "card">
            <Link to={`/detalle/${info.id}`}>
                <img src ={info.pictureUrl} alt =""/>
                <h1> {info.title} </h1>
            </Link>
        </div>
    )
}

export default Item;