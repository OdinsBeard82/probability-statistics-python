import React from 'react';
import './MontyHall.css';

function MontyDoor({ index, selected, revealed, prize, onClick }) {
    const isSelected = selected === index;
    const isRevealed = revealed === index;

    return (
        <div
            className={`door ${isSelected ? 'selected' : ''} ${isRevealed ? 'revealed' : ''}`}
            onClick={onClick}
        >
            {isRevealed ? (prize ? '🎁' : '🐐') : '🚪'}
        </div>
    );
}

export default MontyDoor;
