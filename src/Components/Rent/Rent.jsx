import React from 'react';
import { useHistory } from 'react-router-dom';
import './Rent.css';

const Rent = (props) => {
    
    const history = useHistory();
   const logout = ()=>{
        localStorage.clear();
        history.push("/");
    }

        return(
            <div className="Fragment">
                <div className="alquiler">
                ¡YA HAS ALQUILADO LA PELICULA!
                <br></br>
                Recuerda que el plazo maximo que tienes para verla son 7 dias. 
                </div>
               <button onClick={logout} className="logout">LOGOUT</button>
            </div>
            
        )
    
}

export default Rent;