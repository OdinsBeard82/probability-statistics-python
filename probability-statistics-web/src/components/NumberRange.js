import React, { useState } from 'react';

function NumberRange() {
    const [number, setNumber] = useState(null);

    const pickNumber = () => {
        const outcome = Math.floor(Math.random() * 10) + 1; // 1-10
        setNumber(outcome);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>Random Number (1–10)</h2>
            <button onClick={pickNumber}>Pick Number</button>
            {number && <p>Number: {number}</p>}
        </div>
    );
}

export default NumberRange;
