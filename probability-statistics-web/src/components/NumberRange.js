import React, { useState } from 'react';
import './images/NumberRange.css';

function NumberRange() {
    const [number, setNumber] = useState(0);

    const generateNumber = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1; // example 1–100
        setNumber(randomNum);
    };

    return (
        <div className="NumberRange">
            <h2>Number Range</h2>

            {/* Animated number */}
            <div className="number-display">{number}</div>

            <button onClick={generateNumber}>Generate Number</button>
        </div>
    );
}

export default NumberRange;
