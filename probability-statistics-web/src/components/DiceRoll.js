import React, { useState } from 'react';
import Dice from './images/Dice';
import './images/dice.css';

function DiceRoll() {
    const [roll, setRoll] = useState(1);
    const [history, setHistory] = useState([]);

    const rollDice = () => {
        const outcome = Math.floor(Math.random() * 6) + 1;
        setRoll(outcome);
        setHistory(prev => [...prev, outcome]);
    };

    return (
        <div className="DiceRoll" style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h2>Dice Roll</h2>

            {/* Wrapper to center dice and button */}
            <div className="dice-wrapper">
                <Dice number={roll} />
                <button onClick={rollDice}>Roll Dice</button>
            </div>

            {roll && <p>Result: {roll}</p>}
            {history.length > 0 && <p>History: {history.join(', ')}</p>}
        </div>
    );
}

export default DiceRoll;
