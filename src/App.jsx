import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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
  const ALPHABETICAL_SORT = 'A';
  const LENGTH_SORT = 'L';
  const REVERSE = 'REV';
  const RESET = null;

  const [goods, setGoods] = useState([...goodsFromServer]);
  const [curentVelue, setCurentVelue] = useState(null);

  const AlphabeticalSort = () => {
    const sorted = [...goods].sort((a, b) => a.localeCompare(b));

    setCurentVelue(ALPHABETICAL_SORT);
    setGoods(sorted);
  };

  const LengthSort = () => {
    const sorted = [...goods].sort((a, b) => {
      return a.length - b.length === 0
        ? a.localeCompare(b)
        : a.length - b.length;
    });

    setCurentVelue(LENGTH_SORT);
    setGoods(sorted);
  };

  const Reverse = () => {
    const reversed = [...goods].reverse();

    setCurentVelue(REVERSE);
    setGoods(reversed);
  };

  const Reset = () => {
    setCurentVelue(RESET);
    setGoods([...goodsFromServer]);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info', {
            'is-light': curentVelue !== ALPHABETICAL_SORT,
          })}
          onClick={AlphabeticalSort}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button is-success', {
            'is-light': curentVelue !== LENGTH_SORT,
          })}
          onClick={LengthSort}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-warning', {
            'is-light': curentVelue !== REVERSE,
          })}
          onClick={Reverse}
        >
          Reverse
        </button>

        {curentVelue !== null && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={Reset}
          >
            Reset
          </button>
        )}
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
