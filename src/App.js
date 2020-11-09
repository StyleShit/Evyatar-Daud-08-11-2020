import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import withStore from './HOCs/withStore';
import withRouter from './HOCs/withRouter';
import { compose } from 'redux';
import { useDispatch } from 'react-redux';
import { useTheme } from './hooks';
import { Header } from './components/Header';
import { Favorites, Home } from './pages';
import { apiCurrentWeather, apiForecast } from './redux/middlewares/api';

import './css/App.css';


function App()
{
	const dispatch = useDispatch();
	const [ theme ] = useTheme();

	useEffect( () => {

		// fetch default location data on load
		const defaultLocation = { 
			LocationKey: '215854',
			LocalizedName: 'Tel Aviv'
		};

		dispatch( apiCurrentWeather( defaultLocation ) );
		dispatch( apiForecast( defaultLocation ) );

	// eslint-disable-next-line
	}, []);

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

			</Switch>
		</div>
	);
}

export default compose(
	withStore,
	withRouter
)( App );
