// const tableHeaders = ['№', 'price', 'amount', 'date'];
import style from './CryptoHistory.module.css';
import { getFormatedDateFormat } from 'helpers/format';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={item.id} className={style.tr}>
              <td className={style.td}>{index + 1}</td>
              <td className={style.td}>{item.price}</td>
              <td className={style.td}>{item.amount}</td>
              <td className={style.td}>{getFormatedDateFormat(item.date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
