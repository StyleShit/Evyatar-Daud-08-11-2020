import React from 'react';
import './ForecastView.css';

function ForecastView()
{
    return (
        <div className="forecast-container">

            <div className="forecast-day">
                <span className="day">Sun</span>
                <img className="weather-icon" alt="weather-icon" src="https://developer.accuweather.com/sites/default/files/01-s.png" />
                <span className="temperature">38c</span>
            </div>

            <div className="forecast-day">
                <span className="day">Mon</span>
                <img className="weather-icon" alt="weather-icon" src="https://developer.accuweather.com/sites/default/files/01-s.png" />
                <span className="temperature">38c</span>
            </div>

            <div className="forecast-day">
                <span className="day">Tue</span>
                <img className="weather-icon" alt="weather-icon" src="https://developer.accuweather.com/sites/default/files/01-s.png" />
                <span className="temperature">38c</span>
            </div>

            <div className="forecast-day">
                <span className="day">Wed</span>
                <img className="weather-icon" alt="weather-icon" src="https://developer.accuweather.com/sites/default/files/01-s.png" />
                <span className="temperature">38c</span>
            </div>

            <div className="forecast-day">
                <span className="day">Thu</span>
                <img className="weather-icon" alt="weather-icon" src="https://developer.accuweather.com/sites/default/files/01-s.png" />
                <span className="temperature">38c</span>
            </div>

        </div>
    )
}

export default ForecastView;