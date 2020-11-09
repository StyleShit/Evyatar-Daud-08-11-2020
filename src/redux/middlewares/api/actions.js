import { setAutoComplete, setCurrentWeather, setForecast } from '../..';
import ACTIONS from './actionTypes'


// api starts request
export const apiStart = label => {

    return { 
        type: ACTIONS.START, 
        payload: { label } 
    };

};

// api request was successful
export const apiSuccess = ( label, data ) => {

    return { 
        type: ACTIONS.SUCCESS, 
        payload: { label, data } 
    };

};

// api request failed
export const apiError = ( label, error ) => {

    return { 
        type: ACTIONS.ERROR, 
        payload: { label, error } 
    };

};


// make an api call
export const apiAction = ( payload ) => {

    return {
        type: ACTIONS.API,
        payload
    };

}


// get auto-complete suggestions from API
export const apiAutoComplete = ( query ) => {

    return apiAction({
        endpoint: 'sKFzwtd6',
        // endpoint: 'locations/v1/cities/autocomplete',
        data: { q: query },
        onSuccess: setAutoComplete
    });

}


// get current weather by location key
export const apiCurrentWeather = ({ LocationKey: locationKey, LocalizedName: name }) => {

    return apiAction({
        endpoint: `Qgi7q1mW?${ locationKey }`,
        // endpoint: 'currentconditions/v1/${ locationKey }',
        onSuccess: ( data ) => setCurrentWeather( data, name, locationKey )
    });

}


// get forecast by location key
export const apiForecast = ({ LocationKey: locationKey }) => {

    return apiAction({
        endpoint: `khdh3e7B?${ locationKey }`,
        // endpoint: 'forecasts/v1/daily/5day/${ locationKey }',
        data: {
            metric: true
        },
        onSuccess: setForecast
    });

}