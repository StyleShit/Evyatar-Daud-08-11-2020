import { setAutoComplete, setCurrentWeather, setForecast, setFavoriteCurrentWeather } from '../..';
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
export const apiCurrentWeather = ( { LocationKey: locationKey, LocalizedName: name }, locationType = 'main' ) => {

    let onSuccess;

    // decide to which reducer the fetched weather should be passed according to the location type
    switch( locationType )
    {
        // main weather -> i.e. state.weather.current
        case 'main':
            onSuccess = ( data ) => setCurrentWeather( data, name, locationKey );
            break;

        // favorite location -> i.e. state.favorites[i]
        case 'favorite':
            onSuccess = ( data ) => setFavoriteCurrentWeather( data, locationKey );
            break;

        default:
            break;

    }


    return apiAction({
        endpoint: `Qgi7q1mW?${ locationKey }`,
        // endpoint: `currentconditions/v1/${ locationKey }`,
        onSuccess: onSuccess
    });

}


// get forecast by location key
export const apiForecast = ({ LocationKey: locationKey }) => {

    return apiAction({
        endpoint: `khdh3e7B?${ locationKey }`,
        // endpoint: `forecasts/v1/daily/5day/${ locationKey }`,
        data: {
            metric: true
        },
        onSuccess: setForecast
    });

}


// get geo location by lat,lon
export const apiGeoLocation = ( { latitude: lat, longitude: lon }, callback ) => {

    return apiAction({
        endpoint: 'EB3m206a',
        // endpoint: '/locations/v1/cities/geoposition/search',
        data: {
            details: true,
            q: `${ lat },${lon}`
        },
        callback: ({ Key: LocationKey, LocalizedName }) => { callback({ LocationKey, LocalizedName }); }
    });

}