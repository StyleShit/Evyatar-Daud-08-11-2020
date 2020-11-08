import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation()
{
    return (
        <div className="navigation-container">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    )
}

export default Navigation;