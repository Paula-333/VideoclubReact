import React from 'react'
import './Register.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Register = () => {
    
    const history = useHistory();

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const form = event.target;
            const user = {
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
            }
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "https://heroku-moviesbackend.herokuapp.com/user/createUser"
            await axios.post(proxyurl + url,user)
            console.log({message: 'Registrado'})
            history.push('/login')
        } catch (error) {
            console.log({message: 'ERROR'})
        }

    }

    return (
        <form className="Register1" onSubmit={handleSubmit}>
            <h1>¡Registrate!</h1>
            <input type="text" name="name" placeholder="Nombre" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Contraseña" />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;