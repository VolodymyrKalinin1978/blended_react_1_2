import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && (
        <h2 className={style.title} sticTitle>
          {title}
        </h2>
      )}

      <ul className={style.list}>
        {stats.map((item, index) => {
          return (
            <StatisticsItem
              key={item.id}
              icon={icons[index]}
              title={item.title}
              total={item.total}
            />
          );
        })}
      </ul>
    </>
  );
};
