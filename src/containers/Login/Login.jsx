import axios from 'axios';
import React, {useState } from 'react';
import './Login.css'
import { useHistory } from 'react-router-dom';


const Login = (props) => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "https://heroku-moviesbackend.herokuapp.com/user/login"
            const res = await axios.post(proxyurl + url, {email,password})
            localStorage.setItem('token',res.data.token)
            
            props.setUser(res.data.user)
            history.push('/alquilar')
        } catch (error) {
            console.log('ERROR')
           
        }

    }
    return (
        <form className="Login" onSubmit={handleSubmit}>
            <h1 className="Log">¡Login!</h1>
            <input type="email" onChange={event=>setEmail(event.target.value)} name="email" placeholder="Email" value={email} className="input-1"/>
            <input type="password" onChange={event=>setPassword(event.target.value)} name="password" placeholder="Contraseña" value={password} className="input-1"/>
            <button type="submit" className="button">Login</button>
        </form>
    )
}

export default Login;