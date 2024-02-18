import { FiSearch } from 'react-icons/fi';
import styles from 'components/SearchForm/SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const regions = [
    { id: 'africa', value: 'africa', name: 'Africa' },
    { id: 'america', value: 'america', name: 'America' },
    { id: 'asia', value: 'asia', name: 'Asia' },
    { id: 'europe', value: 'europe', name: 'Europe' },
    { id: 'oceania', value: 'oceania', name: 'Oceania' },
  ];
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => (
          <option key={region.id} value={region.value}>
            {region.name}
          </option>
        ))}
      </select>
    </form>
  );
};
