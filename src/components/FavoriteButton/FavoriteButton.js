import React from 'react';
import { useFavorite } from '../../hooks';
import { Heart } from '../../icons';
import './FavoriteButton.css';

function FavoriteButton({ location })
{
    const [ isFavorite, toggleFavorite ] = useFavorite( location );
    const cssClass = `favorite-toggle-button ${ isFavorite ? 'is-favorite' : '' }`;

    return (
        <button onClick={ toggleFavorite } className={ cssClass }>
            <Heart />
        </button>
    )
}

export default FavoriteButton;