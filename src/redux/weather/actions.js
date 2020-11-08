import ACTIONS from './actionTypes';


export const setCurrentWeather = ( [ current ], name = '' ) => {

    current = current || {};
    current.Name = name;

    return {
        type: ACTIONS.SET_CURRENT,
        payload: { current }
    };

}

export const setForecast = ({ DailyForecasts: forecast }) => {

    forecast = forecast || [];
    
    return {
        type: ACTIONS.SET_FORECAST,
        payload: { forecast }
    };

}