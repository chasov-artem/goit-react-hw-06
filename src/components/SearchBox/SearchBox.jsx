import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label className={styles.searchLabel}>Find contacts by name:</label>
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
