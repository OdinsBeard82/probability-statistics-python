import React, { useState } from 'react';
import NumberDisplay from './images/NumberDisplay';
import './images/NumberRange.css';

function NumberRange() {
    const [number, setNumber] = useState(0);

    const generateNumber = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        setNumber(randomNum);
    };

    return (
        <div className="NumberRange">
            <h2>Number Range</h2>
            <NumberDisplay number={number} />
            <button onClick={generateNumber}>Generate Number</button>
        </div>
    );
}

export default NumberRange;
