import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
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
          <input
            type="search"
            placeholder="Search location..."
            className={styles.searchInput}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
