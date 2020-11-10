import React from 'react';
import { Heart } from '../../icons';
import './FavoriteButton.css';

function FavoriteButton({ isFavorite, toggleFavorite })
{
    const cssClass = `favorite-toggle-button ${ isFavorite ? 'is-favorite' : '' }`;

    return (
        <button onClick={ toggleFavorite } className={ cssClass }>
            <Heart />
        </button>
    )
}

export default FavoriteButton;