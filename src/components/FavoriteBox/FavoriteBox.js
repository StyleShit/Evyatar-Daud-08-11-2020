import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useIcon, useUnit } from '../../hooks';
import { apiCurrentWeather } from '../../redux/middlewares/api';
import { Loader } from '../Loader';
import './FavoriteBox.css';

function FavoriteBox({ favorite, onClick })
{
    const loading = !favorite.currentWeather;
    const dispatch = useDispatch();


    // fetch location weather on mount
    useEffect( () => {

        dispatch( apiCurrentWeather( favorite, 'favorite' ) );

    // eslint-disable-next-line
    }, [ favorite ]);


    return (
        <div className="favorite-box" onClick={ () => { !loading && onClick() } }>

            <h3 className="location-name">
                { favorite.LocalizedName }
            </h3>

            { loading ? <Loader /> : <WeatherData location={ favorite }/> }

        </div>
    )
}


// display weather data after loading
function WeatherData({ location })
{
    const {

        WeatherText: text,
        WeatherIcon: icon

    } = location.currentWeather;

    const [ calcTemp ] = useUnit();
    const temperature = calcTemp( location.currentWeather.Temperature.Metric.Value );

    return (
        <>
            <div className="temperature">
                <img className="weather-icon" alt={ text } src={ useIcon( icon ) } />
                <span>{ temperature }°</span>
            </div>

            <span className="weather-text">{ text }</span>
        </>
    );
}


export default FavoriteBox;