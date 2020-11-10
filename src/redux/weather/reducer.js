import ACTIONS from './actionTypes';


const defaultState = {
    current: {},
    forecast: [],
    loading: {
        current: true,
        forecast: true
    }
};


const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.SET_CURRENT:
            return { 
                ...setLoading( state, false, 'current' ),
                current: payload.current
            };

        case ACTIONS.SET_FORECAST:
            return { 
                ...setLoading( state, false, 'forecast' ),
                forecast: payload.forecast
            };

        case ACTIONS.SET_CURRENT_LOADING:
           return setLoading( state, payload.isLoading, 'current' );

        case ACTIONS.SET_FORECAST_LOADING:
            return setLoading( state, payload.isLoading, 'forecast' );

        default:
            return state;
    }

};

export default reducer;

/*
    Helpers
*/

const setLoading = ( state, isLoading, type ) => {

    let updated = { ...state };
    updated.loading[type] = isLoading;

    return updated;

}