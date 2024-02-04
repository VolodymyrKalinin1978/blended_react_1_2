import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={query}
        onChange={evt => setQuery(evt.target.value)}
      />
    </form>
  );
};
