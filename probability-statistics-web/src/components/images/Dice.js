import React from 'react';
import './dice.css';

function Dice({ number = 1 }) {
    return (
        <div className={`dice dice-${number}`}>
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
            <div className="dot dot4"></div>
            <div className="dot dot5"></div>
            <div className="dot dot6"></div>
        </div>
    );
}

export default Dice;
