import React from 'react';
import { ForecastView } from '../components/ForecastView';
import { Hero } from '../components/Hero';
import { AutoComplete } from '../components/AutoComplete';

function Home()
{
    return (
        <>
			<AutoComplete />
			<Hero />
			<ForecastView />
        </>
    )
}

export default Home;