import ACTIONS from './actionTypes';


const defaultState = [];


const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.SET:
            return payload.autocomplete.slice( 0, 5 );

        default:
            return state;
    }

};

export default reducer;