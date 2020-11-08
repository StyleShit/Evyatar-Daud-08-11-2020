import React from 'react';
import { Navigation } from '../Navigation';
import './Header.css';

function Header()
{
    return (
        <div className="header">
            <h1 className="header-title">
                Herolo Weather Task
            </h1>

            <Navigation />
        </div>
    )
}

export default Header;