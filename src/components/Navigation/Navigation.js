import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, useUnit } from '../../hooks';
import { Moon, Sun } from '../../icons';
import './Navigation.css';

function Navigation()
{
    const [ , unit, toggleUnit ] = useUnit();
    const [ theme, toggleTheme ] = useTheme();

    return (
        <div className="navigation-container">

            <button className="toggle-button toggle-theme-button" onClick={ toggleTheme }>
                { theme === 'dark' ? <Moon /> : <Sun /> }
            </button>

            <button className="toggle-button  toggle-unit-button" onClick={ toggleUnit }>{ unit }</button>

            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    )
}

export default Navigation;