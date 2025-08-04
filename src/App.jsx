import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState([...goodsFromServer]);

  const handleAlphabeticalSort = () => {
    const sorted = [...goods].sort((a, b) => a.localeCompare(b));

    setGoods(sorted);
  };

  const handleLengthSort = () => {
    const sorted = [...goods].sort((a, b) => a.length - b.length);

    setGoods(sorted);
  };

  const handleReverse = () => {
    const reversed = [...goods].reverse();

    setGoods(reversed);
  };

  const handleReset = () => {
    setGoods([...goodsFromServer]);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-success is-light"
          onClick={handleAlphabeticalSort}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={handleLengthSort}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={handleReverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <ul>
        {goods.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
