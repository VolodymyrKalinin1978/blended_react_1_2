// import { FiSearch } from 'react-icons/fi';

// const regions = [
//   { id: 'africa', value: 'africa', name: 'Africa' },
//   { id: 'america', value: 'america', name: 'America' },
//   { id: 'asia', value: 'asia', name: 'Asia' },
//   { id: 'europe', value: 'europe', name: 'Europe' },
//   { id: 'oceania', value: 'oceania', name: 'Oceania' },
// ];

export const SearchForm = () => {
  return (
    <form className={styles.form}>
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
        <option value="america">America</option>
      </select>
    </form>
  );
};
