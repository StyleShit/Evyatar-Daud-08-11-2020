import React from 'react';
import './AutoComplete.css';

function AutoComplete()
{
    return (
        <form className="auto-complete-form">
            <input type="text" placeholder="Type to search..." className="auto-complete-input" />

            <div className="auto-complete-suggestions">
                <ul>
                    <li>Tel Aviv</li>
                    <li>Jerusalem</li>
                    <li>London</li>
                    <li>Washington</li>
                </ul>
            </div>
        </form>
    )
}

export default AutoComplete;