import React, { useState } from 'react';
import Coin from './images/Coin';
import './images/coin.css';

function CoinFlip() {
    const [side, setSide] = useState('Heads'); // Track the current side
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);

    const flipCoin = () => {
        const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
        setSide(outcome);       // Update visual coin
        setResult(outcome);     // Update text result
        setHistory(prev => [...prev, outcome]);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>Coin Flip</h2>

            {/* Coin display */}
            <Coin side={side} />

            {/* Flip button */}
            <button onClick={flipCoin}>Flip Coin</button>

            {/* Result and history */}
            {result && <p>Result: {result}</p>}
            {history.length > 0 && <p>History: {history.join(', ')}</p>}
        </div>
    );
}

export default CoinFlip;
