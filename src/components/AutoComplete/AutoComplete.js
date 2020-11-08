import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAutoComplete } from '../../redux';
import { apiAutoComplete } from '../../redux/middlewares/api';
import './AutoComplete.css';


function AutoComplete()
{
    const [ value, setValue ] = useState( '' );
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

        const selected = suggestions[i];
        console.log( selected );

        dispatch( setAutoComplete( [] ) );

    };


    return (
        <form className="auto-complete-form">

            { loading &&
                <span className="auto-complete-loader"></span>
            }

            <input value={ value } 
                type="text"
                placeholder="Type to search..."
                className="auto-complete-input"
                onChange={ e => setValue( e.target.value) }
            />

            <div className="auto-complete-suggestions">
                <ul>
                    {
                        suggestions.slice( 0, 5 ).map(( s, i ) => {;

                            return <li onClick={ () => selectSuggesstion( i ) } key={ s.Key }>{ s.LocalizedName }</li>

                        })
                    }
                </ul>
            </div>
        </form>
    )
}

export default AutoComplete;