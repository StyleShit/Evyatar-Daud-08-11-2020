import React from 'react';
import withStore from './HOCs/withStore';
import { Header } from './components/Header';

import './css/App.css';


function App()
{
	return (
		<Header />

		// TODO: autocomplete

		// TODO: forecast-view 
	);
}

export default withStore( App );
