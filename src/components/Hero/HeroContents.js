import React from 'react';
import { useSelector } from 'react-redux';
import { useIcon, useUnit } from '../../hooks';
import { FavoriteButton } from '../FavoriteButton';

function HeroContents()
{
    const weather = useSelector( state => state.weather );
    const [ calcTemp ] = useUnit();
    
    const {

        LocalizedName: name,
        WeatherText: text,
        WeatherIcon: icon

    } = weather.current;

    const temperature = calcTemp( weather.current.Temperature.Metric.Value );

    return ( 
        <>
            <h1 className="hero-title">
                <FavoriteButton location={ weather.current } />
                { name }
            </h1>

            <p className="hero-subtitle">
                <span className="temperature">
                    <img className="weather-icon" alt={ text } src={ useIcon( icon ) } />
                    <span>{ temperature }°</span>
                </span>
                <span className="weather-text">{ text }</span>
            </p>
        </> 
    );
}

export default HeroContents;