import './../App.css'
import React, {useContext} from 'react'
import {useCartContext} from './../context/CartContext'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap'

const FormOrder = () => {
    const {user, setUser} = useCartContext ()
    const saveUser = (e) => {
        setUser ({...user, [e.target.name]:e.target.value})
    }
    return (
        <div>
            <h1> Datos personales </h1>
            <Form>
                <div className="formControl">
                    <Form.Control placeholder= "Nombre" name="name" onChange={(e)=> {saveUser(e)}}/>
                </div>
                <div className="formControl">
                    <Form.Control placeholder= "Email" name="email" onChange={(e)=> {saveUser(e)}}/>
                </div>
            </Form>
        </div>
    )

}

export default FormOrder;