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

        default:
            return state;
    }

};

export default reducer;