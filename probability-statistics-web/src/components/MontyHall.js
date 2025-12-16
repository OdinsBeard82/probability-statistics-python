import React, { useState } from 'react';

function MontyHall() {
    const [wins, setWins] = useState({ switch: 0, stay: 0 });
    const [trials, setTrials] = useState(0);

    const simulate = (switchDoor, numTrials = 1000) => {
        let switchWins = 0;
        let stayWins = 0;

        for (let i = 0; i < numTrials; i++) {
            const doors = [0, 1, 2]; // 0 = car, 1 & 2 = goats
            const car = Math.floor(Math.random() * 3);
            let choice = Math.floor(Math.random() * 3);
            const remainingDoors = doors.filter(d => d !== choice && d !== car);
            // Host opens a goat door
            const hostOpen = remainingDoors[Math.floor(Math.random() * remainingDoors.length)];

            if (switchDoor) {
                choice = doors.find(d => d !== choice && d !== hostOpen);
            }

            if (choice === car) {
                switchDoor ? switchWins++ : stayWins++;
            }
        }

        setWins(prev => ({
            switch: prev.switch + switchWins,
            stay: prev.stay + stayWins
        }));
        setTrials(prev => prev + numTrials);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>Monty Hall Simulation</h2>
            <button onClick={() => simulate(true)}>Switch Doors</button>
            <button onClick={() => simulate(false)}>Stay with Choice</button>
            {trials > 0 && (
                <div>
                    <p>Total Trials: {trials}</p>
                    <p>Wins if switched: {wins.switch} ({((wins.switch / trials) * 100).toFixed(1)}%)</p>
                    <p>Wins if stayed: {wins.stay} ({((wins.stay / trials) * 100).toFixed(1)}%)</p>
                </div>
            )}
        </div>
    );
}

export default MontyHall;
