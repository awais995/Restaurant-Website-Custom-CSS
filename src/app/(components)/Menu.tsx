import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <section id="menu" className={styles.menuSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Menu</h2>

        <div className={styles.grid}>

          <div className={styles.card}>
            <Image
              src="/Bhee.jpeg"
              alt="Signature Dish1"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Bhee (Lotus Root) Curry</h3>
            <p className={styles.cardText}>
              A curry made with lotus root slices, cooked in a spicy tomato and onion gravy.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="/menu">
                <button className={styles.button}>Check Menu</button>
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/Aloo-gosht.avif"
              alt="Signature Dish2"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Aloo Gosht</h3>
            <p className={styles.cardText}>
              A flavorful curry made with tender pieces of meat (usually mutton or beef) and potatoes, cooked in a spiced gravy.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="/menu">
                <button className={styles.button}>Check Menu</button>
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/Kheer.jpeg"
              alt="Signature Dish3"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Kheer</h3>
            <p className={styles.cardText}>
              A rice pudding made with milk, sugar, and cardamom, garnished with nuts and saffron.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="/menu">
                <button className={styles.button}>Check Menu</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Menu;
