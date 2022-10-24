import React from 'react'
import './../App.css'
import Greeting from './../greeting.png'

const ItemListContainer = ({text}) => {
    return (
    <div className="greeting">
        <h1>{text}</h1>
        <img src={Greeting}></img>
    </div>
    )
}

export default ItemListContainer;