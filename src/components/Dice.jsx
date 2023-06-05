import React, { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const [diceValue, setDiceValue] = useState(3);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);
      setTimeout(() => {
        const newValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newValue);
        setRolling(false);
      }, 1000);
    }
  };

  let diceImage;
  switch (diceValue) {
    case 1:
      diceImage = (
        <button onClick={rollDice}>
          <img src={dice1} className="h-20" alt="1" />
        </button>
      );
      break;
    case 2:
      diceImage = (
        <button onClick={rollDice}>
          <img src={dice2} className="h-20" alt="2" />
        </button>
      );
      break;
    case 3:
      diceImage = (
        <button onClick={rollDice}>
          <img src={dice3} className="h-20" alt="3" />
        </button>
      );
      break;
    case 4:
      diceImage = (
        <button onClick={rollDice}>
          <img src={dice4} className="h-20" alt="4" />
        </button>
      );
      break;
    case 5:
      diceImage = (
        <button onClick={rollDice}>
          <img src={dice5} className="h-20" alt="5" />
        </button>
      );
      break;
    case 6:
      diceImage = (
        <button onClick={rollDice}>
          <img src={dice6} className="h-20" alt="6" />
        </button>
      );
      break;
    default:
      diceImage = (
        <button onClick={rollDice}>
          <img src={dice3} className="h-20" alt="3" />
        </button>
      );
      break;
  }

  return <div>{diceImage}</div>;
}

export default Dice;
