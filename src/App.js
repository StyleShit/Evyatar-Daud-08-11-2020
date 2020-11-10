import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { withStore, withRouter, withToasts } from './HOCs';
import { compose } from 'redux';
import { useDispatch } from 'react-redux';
import { useDefaultLocation, useTheme } from './hooks';
import { Header } from './components/Header';
import { Favorites, Home, NotFound } from './pages';
import { apiCurrentWeather, apiForecast } from './redux/middlewares/api';

import './css/App.css';


function App()
{
	const dispatch = useDispatch();
	const [ theme ] = useTheme();
	const [ location ] = useDefaultLocation();
	
	useEffect( () => {

		// fetch default location data on load
		if( Object.keys( location ).length !== 0 )
		{
			dispatch( apiCurrentWeather( location ) );
			dispatch( apiForecast( location ) );
		}

	// eslint-disable-next-line
	}, [ location ]);

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