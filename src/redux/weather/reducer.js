import ACTIONS from './actionTypes';


const defaultState = {
    current: {},
    forecast: []
};


const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.SET_CURRENT:
            return { 
                ...state,
                current: payload.current
            };

        case ACTIONS.SET_FORECAST:
            return { 
                ...state, 
                forecast: payload.forecast
            };

        default:
            return state;
    }

};

export default reducer;