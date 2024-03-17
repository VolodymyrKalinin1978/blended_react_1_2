import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { selectFilter, setFilter } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
    console.log(e.target.value);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={handleChange}
          value={filter}
        />
      </div>
    </div>
  );
};
