import { useState } from 'react';
import '../Likes/Likes.scss';

export const Likes = ({ handleReset, handleIncrement, handleDecrement }) => {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('');

  handleIncrement = () => setLikes(likes + 1);
  handleDecrement = () => setLikes(likes - 1);
    handleReset = () => {
    setLikes(0);
  };

  return (
    <div className="block">
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Info input"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <span className="icon is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
      </div>
        <h1 className="content likes">Likes:</h1>
        <h2 className="content likes">{likes}</h2>
        <h2 className="content likes">{value}</h2>
      <button
        onClick={handleIncrement}
        className="button is-success"
      >
        More Likes!
      </button>
      <button
        onClick={handleDecrement}
        className="button is-success"
      >
        Less Likes!
      </button>
      <button
        onClick={handleReset}
        className="button is-success"
      >
        Reset
      </button>
    </div>
  )
};
