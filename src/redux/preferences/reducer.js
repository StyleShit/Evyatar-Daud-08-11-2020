import ACTIONS from './actionTypes';


const defaultState = {
    
    theme: 'dark',
    unit: 'c'

};


const reducer = ( state = defaultState, { type } ) => {

    switch( type )
    {
        case ACTIONS.TOGGLE_THEME:
            const theme = ( state.theme === 'dark' ) ? 'light' : 'dark';
            return { ...state, theme };

        case ACTIONS.TOGGLE_UNIT:
            const unit = ( state.unit === 'c' ) ? 'f' : 'c';
            return { ...state, unit };

        default:
            return state;
    }

};

export default reducer;