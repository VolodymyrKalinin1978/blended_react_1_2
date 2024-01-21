import styled from './StatisticsItem.module.css';
import { IconContext } from 'react-icons';

export const StatisticsItem = ({ total, title, icon }) => {
  return (
    <li className={styled.item}>
      <IconContext.Provider value={{ size: '2em', color: 'green' }}>
        {icon}
      </IconContext.Provider>
      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title}</p>
    </li>
  );
};
