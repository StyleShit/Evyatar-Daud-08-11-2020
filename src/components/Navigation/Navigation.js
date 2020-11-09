import React from 'react';
import { Link } from 'react-router-dom';
import { useUnit } from '../../hooks';
import './Navigation.css';

function Navigation()
{
    const [ , unit, toggleUnit ] = useUnit();

    return (
        <div className="navigation-container">
            <button className="toggle-unit-button" onClick={ toggleUnit }>{ unit }</button>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    )
}

export default Navigation;