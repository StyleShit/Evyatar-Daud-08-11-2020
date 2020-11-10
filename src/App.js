import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { withStore, withRouter, withToasts } from './HOCs';
import { compose } from 'redux';
import { useDispatch } from 'react-redux';
import { useDefaultLocation, useTheme } from './hooks';
import { Header } from './components/Header';
import { Favorites, Home, NotFound } from './pages';
import { apiCurrentWeather, apiForecast } from './redux/middlewares/api';
import { setCurrentWeatherLoading, setForecastLoading } from './redux';

import './css/App.css';


function App()
{
	const dispatch = useDispatch();
	const [ theme ] = useTheme();
	const [ defaultLocation ] = useDefaultLocation();
	
	useEffect( () => {

		// fetch default location data on load
		if( Object.keys( defaultLocation ).length !== 0 )
		{
			dispatch( setCurrentWeatherLoading( true) );
			dispatch( setForecastLoading( true ) );

			dispatch( apiCurrentWeather( defaultLocation ) );
			dispatch( apiForecast( defaultLocation ) );
		}

	// eslint-disable-next-line
	}, [ defaultLocation ]);

	return (
		<div className={ `app-container ${ theme }-theme` }>
			<Header />

			<Switch>

				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/favorites">
					<Favorites />
				</Route>

				<Route>
					<NotFound />
				</Route>

			</Switch>
		</div>
	);
}

export default compose(
	withStore,
	withRouter,
	withToasts
)( App );