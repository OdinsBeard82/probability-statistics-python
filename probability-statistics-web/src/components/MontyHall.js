import React, { useState } from 'react';
import MontyDoor from '../components/images/MontyDoor';
import './images/MontyHall.css';

function MontyHall() {
    const [prizeIndex, setPrizeIndex] = useState(null);
    const [selected, setSelected] = useState(null);
    const [revealed, setRevealed] = useState(null);
    const [result, setResult] = useState(null);

    const startGame = () => {
        setPrizeIndex(Math.floor(Math.random() * 3));
        setSelected(null);
        setRevealed(null);
        setResult(null);
    };

    const chooseDoor = (index) => {
        setSelected(index);
        const options = [0, 1, 2].filter(i => i !== index && i !== prizeIndex);
        setRevealed(options[Math.floor(Math.random() * options.length)]);
    };

    const makeChoice = (switchDoor) => {
        const finalChoice = switchDoor
            ? [0, 1, 2].find(i => i !== selected && i !== revealed)
            : selected;
        setResult(finalChoice === prizeIndex ? 'You won!' : 'You lost!');
    };

    return (
        <div className="MontyHall">
            <h2>Monty Hall Simulation</h2>

            <div className="doors">
                {[0, 1, 2].map(i => (
                    <MontyDoor
                        key={i}
                        index={i}
                        selected={selected}
                        revealed={revealed}
                        prize={i === prizeIndex}
                        onClick={() => selected === null && chooseDoor(i)}
                    />
                ))}
            </div>

            {selected !== null && result === null && (
                <div className="choices">
                    <p>Switch or Stay?</p>
                    <button onClick={() => makeChoice(true)}>Switch</button>
                    <button onClick={() => makeChoice(false)}>Stay</button>
                </div>
            )}

            {result && <p className="result">{result}</p>}
            <button onClick={startGame}>Restart Game</button>
        </div>
    );
}

export default MontyHall;
