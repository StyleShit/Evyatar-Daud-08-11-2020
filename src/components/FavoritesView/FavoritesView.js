import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentWeatherLoading, setForecastLoading } from '../../redux';
import { apiCurrentWeather, apiForecast } from '../../redux/middlewares/api';
import { FavoriteBox } from '../FavoriteBox';
import { withErrorBoundary } from '../../HOCs';
import './FavoritesView.css';

function FavoritesView()
{
    const favorites = useSelector( state => state.favorites );
    const history = useHistory();
    const dispatch = useDispatch();


    // redirect the user to full forecast view of the selected location
    const fullForecast = ( location ) => {

        // fetch weather & forecast
        dispatch( setCurrentWeatherLoading( true ) );
        dispatch( setForecastLoading( true ) );
        
        dispatch( apiCurrentWeather( location ) );
        dispatch( apiForecast( location ) );

         history.push( '/' );

    };

    return (
        <div className="favorites-view">

            <h1>
                Your Favorite Locations:
            </h1>

            { favorites.length === 0 &&
                <p className="no-favorites">
                    You don't have any favorite locations yet.
                </p>
            }

            <div className="favorites-container">

                {
                    favorites.map( ( f ) => {

                        return <FavoriteBox favorite={ f } key={ f.LocationKey } onClick={ () => fullForecast( f ) } />

                    })
                }
            </div>
        </div>
    )
}

export default withErrorBoundary( FavoritesView );