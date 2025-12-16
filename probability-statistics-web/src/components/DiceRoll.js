import React, { useState } from 'react';

function DiceRoll() {
    const [roll, setRoll] = useState(null);
    const [history, setHistory] = useState([]);

    const rollDice = () => {
        const outcome = Math.floor(Math.random() * 6) + 1;
        setRoll(outcome);
        setHistory(prev => [...prev, outcome]);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>Dice Roll</h2>
            <button onClick={rollDice}>Roll Dice</button>
            {roll && <p>Result: {roll}</p>}
            {history.length > 0 && (
                <p>History: {history.join(', ')}</p>
            )}
        </div>
    );
}

export default DiceRoll;
