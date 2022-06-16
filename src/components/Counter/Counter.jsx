import { useState } from 'react';
import './Counter.scss';

export const Counter = ({ handleReset, handleIncrement, handleDecrement }) => {
  const [counter, setCounter] = useState(0);

  handleIncrement = () => setCounter(counter + 1);
  handleDecrement = () => setCounter(counter - 1);
  handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="block">
      <h2 className="content likes">
        Значення лічильника(Функціональний компонент):
      </h2>
      <h2 className="content likes">
        {counter}
      </h2>
      <button
        onClick={handleIncrement}
        className="button is-success"
      >
        Counter++
      </button>
      <button
        onClick={handleDecrement}
        className="button is-success"
      >
        Counter--
      </button>
      <button
        onClick={handleReset}
        className="button is-success"
      >
        Reset
      </button>
    </div>
  )
}