import React from 'react';
import { NavLink } from 'react-router-dom';
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

            <button className="toggle-button toggle-unit-button" onClick={ toggleUnit }>{ unit }</button>

            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink exact to="/favorites" className="nav-link" activeClassName="active">Favorites</NavLink>
        </div>
    )
}

export default Navigation;