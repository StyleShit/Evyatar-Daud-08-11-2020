import { combineReducers } from 'redux';
import autoCompleteReducer from './autocomplete/reducer';
import weatherReducer from './weather/reducer';
import favoritesReducer from './favorites/reducer';
import preferencesReducer from './preferences/reducer';


const rootReducer = combineReducers({
    autocomplete: autoCompleteReducer,
    weather: weatherReducer,
    favorites: favoritesReducer,
    preferences: preferencesReducer
});

export default rootReducer;