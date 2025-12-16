import React, { useEffect, useState } from 'react';
import './NumberRange.css';

function NumberDisplay({ number }) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 500);
        return () => clearTimeout(timer);
    }, [number]);

    return (
        <div className={`number-display ${animate ? 'animate' : ''}`}>
            {number}
        </div>
    );
}

export default NumberDisplay;
