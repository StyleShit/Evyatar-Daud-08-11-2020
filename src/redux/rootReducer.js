import { combineReducers } from 'redux';
import autoCompleteReducer from './autocomplete/reducer';


const rootReducer = combineReducers({
    autocomplete: autoCompleteReducer 
});

export default rootReducer;