import React from 'react';
import './Hero.css';

function Hero()
{
    return (
        <div className="hero">

            <h1 className="hero-title">Tel Aviv</h1>

            <p className="hero-subtitle">
                <span className="temperature">
                    38°
                    <img className="weather-icon" alt="weather-icon" src="https://developer.accuweather.com/sites/default/files/01-s.png" />
                </span>
                <span className="weather-text">Scattered Clouds</span>
            </p>

        </div>
    )
}

export default Hero;