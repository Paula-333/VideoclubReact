import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';


const Header = () => {
      
    return (
        <header className="header">
            <NavLink to="/" className="home1">Home</NavLink>
            <div className="divi" >
                <NavLink to="/login" className="login1">Log in</NavLink>
                <NavLink to="/register" className="register1">Register</NavLink>
            </div>
                
        </header>
    )
}
export default Header;