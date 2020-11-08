import React from 'react';
import withStore from './HOCs/withStore';
import { Header } from './components/Header';
import { ForecastView } from './components/ForecastView';
import { Hero } from './components/Hero';
import { AutoComplete } from './components/AutoComplete';

import './css/App.css';


function App()
{
	return (
		<div className="app-container">
			<Header />
			<AutoComplete />
			<Hero />
			<ForecastView />
		</div>
	);
}

export default withStore( App );
