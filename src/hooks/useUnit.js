import { useDispatch, useSelector } from 'react-redux';
import { toggleUnit } from '../redux';

export const useUnit = () => {

    const preferences = useSelector( state => state.preferences );
    const unit = preferences.unit;
    const dispatch = useDispatch();

    const toggle = () => { dispatch( toggleUnit() ); }

    // convert degrees according to selected unit
    const calculate = ( deg, round = true ) => {

        deg = parseFloat( deg );

        // calculate Fahrenheit
        if( unit === 'f' )
            deg = ( deg / 5 * 9 ) + 32;

        // round the result
        if( round )
            deg = Math.round( deg );

        return deg;

    }

    return [ calculate, unit, toggle ];

}