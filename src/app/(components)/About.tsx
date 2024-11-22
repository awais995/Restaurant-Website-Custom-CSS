import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Us</h2>
        <p className={styles.text}>
          Our Sindhi Zaika Restaurant offers an exquisite dining experience with a unique blend of flavors and aromas.
          Our chefs are dedicated to crafting dishes that are both delicious and visually appealing.
        </p>
      </div>
    </section>
  );
}
