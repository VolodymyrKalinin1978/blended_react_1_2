import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';

export const Form = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleChange = evt => {
    setText(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo({ text }));
    setText('');
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
        value={text}
        onChange={handleChange}
      />
    </form>
  );
};
