import React from 'react';
import withStore from './HOCs/withStore';
import { Header } from './components/Header';
import { ForecastView } from './components/ForecastView';
import { Hero } from './components/Hero';

import './css/App.css';


function App()
{
	return (
		<div className="app-container">
			<Header />

			{/* TODO: autocomplete */}
			<Hero />

			<ForecastView />
		</div>
	);
}

export default withStore( App );
