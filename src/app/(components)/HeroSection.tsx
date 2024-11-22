import React from 'react';
import styles from './HeroSection.module.css';

const Hero = () => {
  return (
      <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>Welcome to Sindhi Zaika Restaurant</h1>
          <p className={styles.heroSubtitle}>Experience the traditional cuisine with us</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
