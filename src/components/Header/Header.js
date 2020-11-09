import React from 'react';
import { Navigation } from '../Navigation';
import { withErrorBoundary } from '../../HOCs';
import './Header.css';

function Header()
{
    return (
        <div className="header">
            <h1 className="header-title">
                Herolo Weather
            </h1>

            <Navigation />
        </div>
    )
}

export default withErrorBoundary( Header );