import React from 'react';
import './Hero.css';

function Hero()
{
    return (
        <div className="hero">

            <h1 className="hero-title">Tel Aviv</h1>

            <p className="hero-subtitle">
                <span className="temperature">38c</span>
                <span className="weather-text">Scattered Clouds</span>
            </p>

        </div>
    )
}

export default Hero;