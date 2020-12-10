import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Alquilar.css';

const Alquilar = () => {
    
    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            //const form = event.target;
            const rent = {
                name: event.target.name.value,
                movieId: event.target.title.value,
                createdAt: event.target.date.value,

            }
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "https://heroku-moviesbackend.herokuapp.com/order/createOrder"
            await axios.post(proxyurl + url, rent)
            console.log({message: 'Alquiler correcto'})
            history.push('/rent')
        } catch (error) {
            console.log({message: 'ERROR'})
            console.log(error)

        }

    }

    return (
        <form className="rent" onSubmit={handleSubmit}>
            <h2>Introduce tus datos </h2>
            <input type="name" name="name" placeholder="Nombre" />
            <input type="title" name="title" placeholder="Pelicula" />
            <input type="date" name="date" placeholder="Fecha" />
            <button type="submit">Alquilar</button>
        </form>
    )
}

export default Alquilar;