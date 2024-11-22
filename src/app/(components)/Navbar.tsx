"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import the custom CSS file


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <h1 className={styles.navbarLogo}>Sindhi Zaika</h1>
        <div className={styles.navbarToggle}>
          <button onClick={toggleMenu} className={styles.menuButton}>
            <div className={styles.menuIcon}>
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
            </div>
          </button>
        </div>
        <ul className={`${styles.menu} ${isOpen ? styles.menuActive : ''}`}>
          <button onClick={toggleMenu} className={styles.menuCloseButton}>
            <div className={styles.menuIcon}>
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
            </div>
          </button>
          <li className={styles.menuItem} onClick={toggleMenu}>
            <Link href="/" className={styles.menuLink}>Home</Link>
          </li>
          <li className={styles.menuItem} onClick={toggleMenu}>
            <Link href="/about" className={styles.menuLink}>About</Link>
          </li>
          <li className={styles.menuItem} onClick={toggleMenu}>
            <Link href="/menu" className={styles.menuLink}>Menu</Link>
          </li>
          <li className={styles.menuItem} onClick={toggleMenu}>
            <Link href="/gallery" className={styles.menuLink}>Gallery</Link>
          </li>
          <li className={styles.menuItem} onClick={toggleMenu}>
            <Link href="/contact" className={styles.menuLink}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
