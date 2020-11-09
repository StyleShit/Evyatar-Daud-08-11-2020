import ACTIONS from './actionTypes';


const defaultState = []


const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.ADD:
            return add( state, payload.location );

        case ACTIONS.REMOVE:
            return remove( state, payload.location );

        case ACTIONS.SET_WEATHER:
            return setWeather( state, payload.location, payload.weather );

        default:
            return state;
    }

};

export default reducer;

/*
    Helpers
*/

const add = ( state, location ) => {

    let updated = remove( state, location );
    updated.push( location );

    return updated;

}

const remove = ( state, location ) => {

    let updated = state.filter( f => ( f.LocationKey !== location.LocationKey ));

    return updated;

}

const setWeather = ( state, location, weather ) => {

    const id = state.findIndex( l => ( l.LocationKey === location.LocationKey ) );

    if( id === -1 )
        return state;

    let updated = [ ...state ];
    updated[id].currentWeather = weather;

    return updated;

}