import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../Loader';
import { useIcon } from '../../hooks';
import './ForecastView.css';

function ForecastView()
{
    const weather = useSelector( state => state.weather );
    const loading = weather.forecast.length === 0;

    return (
        <div className="forecast-container">

            { loading && <Loader /> }
            
            { 
                weather.forecast.map( ( f, i ) => {
                    return ForecastDay( f, i );
                })
            }

        </div>
    )
}


const ForecastDay = ( forecast, i ) => {

    const date = new Date( forecast.Date );
    const day = date.toString().split( ' ' )[0];
    const icon = useIcon( forecast.Day.Icon );
    const iconAlt = forecast.Day.IconPhrase;
    const temperatureMin = parseInt( forecast.Temperature.Minimum.Value );
    const temperatureMax = parseInt( forecast.Temperature.Maximum.Value );
    
    return (
        <div className="forecast-day" key={ i }>
            <span className="day">{ day }</span>
            <img className="weather-icon" alt={ iconAlt } src={ icon } />
            <span className="temperature">
                { temperatureMin }° - { temperatureMax }°
            </span>
        </div>
    );

}

export default ForecastView;