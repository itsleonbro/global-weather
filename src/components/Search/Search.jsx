import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div>
      <div className={styles.search}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            type="search"
            id="search-location"
            placeholder="Search location..."
            className={styles.searchInput}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
