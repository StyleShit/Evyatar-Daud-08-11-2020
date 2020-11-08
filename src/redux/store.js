import { applyMiddleware, createStore } from 'redux';
import { apiCurrentWeather, apiForecast, apiMiddleware } from './middlewares/api';
import { loggerMiddleware } from './middlewares/logger';
import rootReducer from './rootReducer';

// set store middlewares
let middlewares = [ 
    apiMiddleware 
];

// add development middlewares
if( process.env.NODE_ENV === 'development' )
{
    middlewares.push( loggerMiddleware );
}

// export the Redux store with the root reducer & middlewares
const store = createStore( rootReducer, applyMiddleware( ...middlewares ) );


// fetch default location data on load
const defaultLocation = { 
    LocationKey: '215854',
    LocalizedName: 'Tel Aviv'
};

store.dispatch( apiCurrentWeather( defaultLocation ) );
store.dispatch( apiForecast( defaultLocation ) );


export default store;