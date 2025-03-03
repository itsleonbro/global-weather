import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <a href="/" className={styles.logo}>
            Global Weather
          </a>
        </div>

        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Forecast
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Map
            </a>
          </li>
        </ul>

        <div className={styles.navSearch}>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search location..."
              className={styles.searchInput}
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
