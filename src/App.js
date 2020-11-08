import React from 'react';
import { Switch, Route } from "react-router-dom";
import withStore from './HOCs/withStore';
import withRouter from './HOCs/withRouter';
import { compose } from 'redux';
import { Header } from './components/Header';
import { Favorites, Home } from './pages';

import './css/App.css';


function App()
{
	return (
		<div className="app-container">
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
