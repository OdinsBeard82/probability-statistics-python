import React, { useState } from 'react';

function CoinFlip() {
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);

    const flipCoin = () => {
        const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
        setResult(outcome);
        setHistory(prev => [...prev, outcome]);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>Coin Flip</h2>
            <button onClick={flipCoin}>Flip Coin</button>
            {result && <p>Result: {result}</p>}
            {history.length > 0 && (
                <p>History: {history.join(', ')}</p>
            )}
        </div>
    );
}

export default CoinFlip;
