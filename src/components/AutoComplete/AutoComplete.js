import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAutoComplete, setCurrentWeatherLoading, setForecastLoading } from '../../redux';
import { apiAutoComplete, apiCurrentWeather, apiForecast } from '../../redux/middlewares/api';
import { withErrorBoundary } from '../../HOCs';
import './AutoComplete.css';


function AutoComplete()
{
    const [ value, setValue ] = useState( '' );
    const [ currentItem, setCurrentItem ] = useState( -1 );
    const [ loading, setLoading ] = useState( false );
    const dispatch = useDispatch();
    const suggestions = useSelector( state => state.autocomplete );


    // handle search term changes
    useEffect( () => {

        const timeout = setTimeout( showAutoComplete, 300 );

        return() => { clearTimeout( timeout ); }

    // eslint-disable-next-line
    }, [ value ]);


    // show autocomplete when user finished typing
    const showAutoComplete = () => {

        const term = value.trim();

        if( !term )
        {
            dispatch( setAutoComplete( [] ) );
            return;
        }

        setLoading( true );
        dispatch( apiAutoComplete( term ) );

    };


    // hide loader when suggestions where loaded
    useEffect( () => { setLoading( false ) }, [ suggestions ]);


    // handle suggestion selection
    const selectSuggesstion = ( i ) => {

        const idx = i ?? currentItem;
        const selected = suggestions[idx];
        
        setCurrentItem( -1 );
        dispatch( setAutoComplete( [] ) );
        

        // fetch weather & forecast
        dispatch( setCurrentWeatherLoading( true ) );
        dispatch( setForecastLoading( true ) );
        
        dispatch( apiCurrentWeather( selected ) );
        dispatch( apiForecast( selected ) );

    };


    // handle autocomplete keyboard navigation
    const keyUp = ( e ) => {
        
        const keyCode = e.keyCode || e.which;

        switch( keyCode )
        {
            // up arrow -> previous item
            case 38:
                if( currentItem > 0 )
                    setCurrentItem( prev => prev - 1 );

                else
                    setCurrentItem( suggestions.length - 1 );

                break;


            // down arrow -> next item
            case 40:
                if( currentItem < suggestions.length -1 )
                    setCurrentItem( prev => prev + 1 );
                else
                    setCurrentItem( 0 );
                break;


            // enter -> select item
            case 13:
                if( currentItem !== -1 )
                    selectSuggesstion();
                break;

            default:
                break;
        }

    }

    return (
        <form className="auto-complete-form" onSubmit={ e => e.preventDefault() }>

            { loading &&
                <span className="auto-complete-loader"></span>
            }

            <input value={ value } 
                type="text"
                placeholder="Type to search..."
                className="auto-complete-input"
                onChange={ e => setValue( e.target.value ) }
                onKeyUp={ keyUp }
            />

            <div className="auto-complete-suggestions">
                <ul>
                    {
                        suggestions.map(( s, i ) => {;

                            return (
                                <li key={ s.Key } 
                                    onClick={ () => selectSuggesstion( i ) }
                                    className={ currentItem === i ? 'active' : '' }>
                                    { s.LocalizedName }
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
        </form>
    )
}

export default withErrorBoundary( AutoComplete );