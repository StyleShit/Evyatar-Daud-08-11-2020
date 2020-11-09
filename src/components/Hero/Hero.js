import React from 'react';
import { useSelector } from 'react-redux';
import HeroContents from './HeroContents';
import { Loader } from '../Loader';
import './Hero.css';

function Hero()
{
    const weather = useSelector( state => state.weather );
    const loading = !weather.current.Name;

    return (
        <div className="hero">
            { loading ? <Loader /> : <HeroContents /> }
        </div>
    )
}

export default Hero;