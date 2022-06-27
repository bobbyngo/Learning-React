import React from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import './style.css';

export default function App() {
  const [allDice, setAllDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = allDice.every((die) => die.isHeld);
    const allSameValue = allDice.every((die) => die.value === allDice[0].value);

    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [allDice]);

  function allNewDice() {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie());
    }
    return diceArray;
  }

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    };
  }

  function holdDice(id) {
    setAllDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const getAllDice = allDice.map((die) => (
    <Die
      key={die.id}
      holdDice={() => holdDice(die.id)}
      value={die.value}
      isHeld={die.isHeld}
    />
  ));

  function rollDice() {
    setAllDice((prevAllDice) =>
      prevAllDice.map((die) => (die.isHeld ? die : generateNewDie()))
    );
    if (tenzies) {
      setTenzies(false);
      setAllDice(allNewDice());
    }
  }

  return (
    <main className='main'>
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice-container'>{getAllDice}</div>
      <button className='roll-dice-button' onClick={rollDice}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
