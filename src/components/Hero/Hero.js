import React from 'react';
import { useSelector } from 'react-redux';
import { getImageURL } from '../../utils';
import './Hero.css';

function Hero()
{
    const weather = useSelector( state => state.weather );
    const loading = !weather.current.Name;

    return (
        <div className="hero">
            { loading ? 'Loading...' : HeroContents( weather ) }
        </div>
    )
}


const HeroContents = ( weather ) => {

    const {

        Name: name,
        WeatherText: text,
        WeatherIcon: icon

    } = weather.current;

    const temperature = parseInt( weather.current.Temperature.Metric.Value );

    return ( 
        <>
            <h1 className="hero-title">{ name }</h1>

            <p className="hero-subtitle">
                <span className="temperature">
                    <img className="weather-icon" alt={ text } src={ getImageURL( icon ) } />
                    <span>{ temperature }°</span>
                </span>
                <span className="weather-text">{ text }</span>
            </p>
        </> 
    );

}

export default Hero;