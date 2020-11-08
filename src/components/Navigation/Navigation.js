import React from 'react';
import './Navigation.css';

function Navigation()
{
    return (
        <div className="navigation-container">
            <a href="/" className="nav-link">Home</a>
            <a href="/" className="nav-link">Favorites</a>
        </div>
    )
}

export default Navigation;