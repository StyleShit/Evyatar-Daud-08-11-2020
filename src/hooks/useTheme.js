import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux';

export const useTheme = () => {

    const preferences = useSelector( state => state.preferences );
    const theme = preferences.theme;
    const dispatch = useDispatch();

    const toggle = () => { dispatch( toggleTheme() ); }

    return [ theme, toggle ];

}