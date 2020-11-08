import { combineReducers } from 'redux';
import autoCompleteReducer from './autocomplete/reducer';
import weatherReducer from './weather/reducer';


const rootReducer = combineReducers({
    autocomplete: autoCompleteReducer,
    weather: weatherReducer
});

export default rootReducer;