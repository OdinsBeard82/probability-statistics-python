import React, { useState } from 'react';
import Coin from './images/coin';
import './images/coin.css';

function CoinFlip() {
    const [side, setSide] = useState('Heads');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);

    const flipCoin = () => {
        const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
        setSide(outcome);
        setResult(outcome);
        setHistory(prev => [...prev, outcome]);
    };

    return (
        <div className="CoinFlip" style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h2>Coin Flip</h2>

            {/* Wrapper to center coin and button */}
            <div className="coin-wrapper">
                <Coin side={side} />
                <button onClick={flipCoin}>Flip Coin</button>
            </div>

            {result && <p>Result: {result}</p>}
            {history.length > 0 && <p>History: {history.join(', ')}</p>}
        </div>
    );
}

export default CoinFlip;
