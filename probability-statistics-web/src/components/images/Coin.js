import React from 'react';
import './coin.css';

function Coin({ side = 'Heads' }) {
    return (
        <div className="coin-wrapper">
            <div className={`coin ${side.toLowerCase()}`}>
                <div className="front">Heads</div>
                <div className="back">Tails</div>
            </div>
        </div>
    );
}

export default Coin;
