import React, {useState, useEffect} from 'react'
import ItemDetail from  './ItemDetail'
import {useParams} from 'react-router-dom'


const cases = [
    {id:1, category: "Mandalas", title: "Mandala Clara", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1700", pictureUrl:"https://www.caseland.com.ar/532-large_default/mandala-clara.webp"},
    {id:2, category: "Mandalas", title: "Mandala Esmeralda", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1700", pictureUrl:"https://www.caseland.com.ar/494-thickbox_default/mandala-esmeralda.webp"},
    {id:3, category: "Mandalas", title: "Mandala Alma", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1700", pictureUrl:"https://www.caseland.com.ar/520-large_default/mandala-alma.webp"},
    {id:4, category: "Personajes", title: "El principito", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1500", pictureUrl:"https://www.caseland.com.ar/86-home_default/el-principito.webp"},
    {id:5, category: "Personajes", title: "Mafalda", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1500", pictureUrl:"https://www.caseland.com.ar/116-home_default/mafalda.webp"},
    {id:6, category: "Personajes", title: "Snoopy", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1500", pictureUrl:"https://www.caseland.com.ar/119-home_default/snoopy.webp"},
    {id:7, category: "Lifestyle", title: "Ojitos", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1200", pictureUrl:"https://www.caseland.com.ar/586-home_default/ojitos.webp"},
    {id:8, category: "Lifestyle", title: "Mariposas", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1200", pictureUrl:"https://www.caseland.com.ar/375-home_default/mariposas.webp"},
    {id:9, category: "Lifestyle", title: "Lines", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1200", pictureUrl:"https://www.caseland.com.ar/761-home_default/lines.webp"},
    {id:10, category: "Animales", title: "Selva", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1800", pictureUrl:"https://www.caseland.com.ar/405-home_default/selva.webp"},
    {id:11, category: "Animales", title: "Zebra", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1800", pictureUrl:"https://www.caseland.com.ar/423-home_default/animal-zebra.webp"},
    {id:12, category: "Animales", title: "Elefantes", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1800", pictureUrl:"https://www.caseland.com.ar/387-home_default/elefante-tai.webp"},
    {id:13, category: "Botanic", title: "Margaritas", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1800", pictureUrl:"https://www.caseland.com.ar/973-home_default/cielo-de-margaritas.webp"},
    {id:14, category: "Botanic", title: "Rosas", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1800", pictureUrl:"https://www.caseland.com.ar/1026-home_default/rosas.webp"},
    {id:15, category: "Botanic", title: "Girasoles", description: "Funda Doble Protección. Cubierta de silicona con exterior rigido e impreso con el diseño determinado en la imagen.", price: "1800", pictureUrl:"https://www.caseland.com.ar/975-home_default/girasoles.webp"},
]


const ItemDetailContainer = () => {
    const [data,setData] = useState({})
    const {detalleId} = useParams();

    useEffect (() => {
        const getData = new Promise (resolve=>{
            setTimeout(() => {
                resolve(cases);
            }, 2000);
        });
        getData.then (res => setData(res.find(item => item.id===parseInt (detalleId))));
    }, [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer;