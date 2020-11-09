import React from 'react';
import { useSelector } from 'react-redux';
import { useFavorite } from '../../hooks';
import { getImageURL } from '../../utils';
import { FavoriteButton } from '../FavoriteButton';

function HeroContents()
{
    const weather = useSelector( state => state.weather );
    const [ isFavorite, toggleFavorite ] = useFavorite( weather.current );
    
    const {

        LocalizedName: name,
        WeatherText: text,
        WeatherIcon: icon

    } = weather.current;

    const temperature = parseInt( weather.current.Temperature.Metric.Value );

    return ( 
        <>
            <h1 className="hero-title">
                <FavoriteButton isFavorite={ isFavorite } toggleFavorite={ toggleFavorite } />
                { name }
            </h1>

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

export default HeroContents;