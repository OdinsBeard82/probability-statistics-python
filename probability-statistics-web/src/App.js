import React from 'react';
import CoinFlip from './components/CoinFlip';
import DiceRoll from './components/DiceRoll';
import NumberRange from './components/NumberRange';
import MontyHall from './components/MontyHall';
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Week 1: Basic Probability Simulations</h1>
      <CoinFlip />
      <DiceRoll />
      <NumberRange />
      <MontyHall />
    </div>
  );
}

export default App;

