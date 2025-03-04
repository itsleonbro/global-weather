import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Search from "../Search/Search";

const Navbar = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarTop}>
        <a href="/" className={styles.logo}>
          Global Weather
        </a>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          ></span>
        </button>
      </div>

      <div
        className={`${styles.navbarCollapse} ${menuOpen ? styles.show : ""}`}
      >
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

        <Search onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
